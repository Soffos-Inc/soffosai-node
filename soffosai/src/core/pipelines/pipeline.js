import { apiKey } from "../../app.js";
import { Node } from "../nodes/node.js";
import {isDictObject, isNodeInput, get_serviceio_datatype, get_userinput_datatype} from "../../utils/type_classifications.js";
import {put_doc_id_to_array} from "../../utils/pipeline_preprocesses.js";


/**
 * A controller for consuming multiple Services called stages.
 * It validates all inputs of all stages before sending the first Soffos API request to ensure
 * that the Pipeline will not waste credits.
 * 
 * ** use_defaults=True means that stages will take input from the previous stages' 
 * output of the same field name prioritizing the latest stage's output. 
 * If the previous stages does not have it, it will take from the
 * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
 * of the require_one_of_choices fields.
 */
class Pipeline {
    /**
     * @param {Array.<object>} nodes 
     * @param {boolean} [ use_defaults=false ]
     * @param {string} [name]
     * @param {Object} [ kwargs={} ]
     */
    constructor (nodes, use_defaults=false, name=null, kwargs={}) {
        const api_key = kwargs.apiKey;
        this.apiKey = apiKey || api_key;
        this._stages = nodes;
        this._input = {};
        this._infos = {};
        this._use_defaults = use_defaults;
        this._execution_codes = [];
        this._termination_codes = [];

        let error_messages = [];
        if (!Array.isArray(nodes)) {
            error_messages.push("stages field should be a list of Service Nodes");
        }

        for (let stage of this._stages) {
            if (!(stage instanceof Node)) {
              error_messages.push(`${stage} is not an instance of Node`);
            }
        }

        if (error_messages.length !== 0) {
            throw new Error(error_messages.join("\n"));
        }

        // when the pipeline is used as a Node, it needs a name
        this.name = name;
    }

    /**
     * Run the Pipeline
     * @param {object} user_input 
     * @returns 
     */
    async run(user_input) {
        if (!isDictObject(user_input)) {
            throw new Error("Invalid user input.");
        }
        if (!("user" in user_input)) {
            throw new ReferenceError("'user' is not defined in user_input.");
        }
        if ("text" in user_input) {
            user_input.document_text = user_input.text;
        }
        if ("question" in user_input) {
            user_input.message = user_input.question;
        }

        let stages;
        if (this._use_defaults) {
            stages = this.setDefaults(this._stages, user_input);
        } else {
            stages = this._stages;
        }
        let execution_code = user_input.execution_code;
        if (execution_code != null && execution_code != undefined) {
            execution_code = this.apiKey + execution_code;
            if (this._execution_codes.includes(execution_code)) {
                return {"error": "You are still using this execution code in a current pipeline run."}
            } else {
                this._execution_codes.push(execution_code);
            }
        }

        let infos = {};
        this.validate_pipeline(stages, user_input);
        infos.user_input = user_input;
        let total_cost = 0.00;
        // Execute per stage:
        for (let i = 0; i < stages.length; i++) {
            // Before running the node, check if a termination request is present:
            if (this._termination_codes.includes(execution_code)) {
                // remove the execution code from both termination codes and execution codes
                let index_from_execution = this._execution_codes.indexOf(execution_code);
                if (index_from_execution > -1 ) {
                    this._execution_codes.splice(index_from_execution, 1);
                }
                let index_from_termination = this._termination_codes.indexOf(execution_code);
                if (index_from_termination > -1) {
                    this._termination_codes.splice(index_from_termination, 1);
                }

                // return values that are ready:
                infos.total_call_cost = total_cost;
                infos.warning = "This Soffos Pipeline run is prematurely terminated."
                return infos;
            }

            let stage = stages[i];
            console.log(`Running ${stage.name}`);

            if (stage instanceof Pipeline) {
                let response = await stage.run(user_input);
                console.log(`Response ready for ${stage.name}.`);
                let pipeOutput = {};
                pipeOutput.costs = {};
                for (let key in response) {
                    if (key !== 'total_call_cost') {
                        for (let subkey in response[key]) {
                            if (subkey == 'cost') {
                                pipeOutput['costs'][key] = response[key][subkey];
                            } else if (subkey == 'charged_character_count') {
                                pipeOutput['costs'][key]['charged_character_count'] = response[key][subkey]
                            } else if (subkey == 'unit_price'){
                                pipeOutput['costs'][key]['unit_price'] = response[key][subkey]
                            } else {
                                pipeOutput[subkey] = response[key][subkey];
                            }
                        }
                    } 
                    else {
                        total_cost += response[key];
                    }
                }
                infos[stage.name] = pipeOutput;
                continue;
            }

            let temp_src = stage.source;
            let src = {};
            for (let [key, notation] of Object.entries(temp_src)) {
                if (isNodeInput(notation)) { // value is a reference to a node or user input
                    let value = infos[notation.source][notation.field];
                    if ("pre_process" in notation) { // pre-processing needed before use of input param
                        if (notation.pre_process instanceof Function) {
                            src[key] = notation.pre_process(value);
                        } else {
                            throw new Error("pre_process value is not a function");
                        }
                    } else { // no pre-processing required
                        src[key] = value;
                    }

                } else { // notation is a constant
                    src[key] = notation;
                }                
            }
            if (!('user' in src)) {
                src.user = user_input.user;
            }
            src.apiKey = this.apiKey;

            let response = await stage.service.getResponse(src);
            if ("error" in response || !isDictObject(response)) {
                throw new Error(response);
            }
            
            console.log(`Response ready for ${stage.name}`);
            infos[stage.name] = response;
            total_cost += response.cost.total_cost;
        }
        infos.total_call_cost = total_cost;

        // remove the execution code from the execution_codes in effect Array.
        const exec_code_index = this._execution_codes.indexOf(execution_code);
        if (exec_code_index > -1){
            this._execution_codes.splice(exec_code_index,1);
        }
        
        return infos
    }


    /**
     * Validates the Pipeline construction vs the user_input before sending the first API call.
     * Throws errors when not valid.
     * @param {object} user_input 
     * @param {Node} stages 
     * @returns 
     */
    validate_pipeline(stages, user_input) {
        /*
        Before running the first service, the Pipeline will validate all nodes if they will all be
        executed successfully with the exception of database and server issues.
        */
        let error_messages = [];
    
        for(let i = 0; i < stages.length; i++) {
            let stage = stages[i];

            let sub_pipe_stages
            if (stage instanceof Pipeline) {
                if (stage._use_defaults) {
                    sub_pipe_stages = stage.setDefaults(stage._stages, user_input)
                } else {
                    sub_pipe_stages = stage._stages
                }
                stage.validate_pipeline(sub_pipe_stages, user_input)
                continue;
            }

            // stage: Node to be validated

            // check if required fields are present: already solved by making the node subclasses.

            // check if require_one_of_choices is present and not more than one
            let serviceio = stage.service._serviceio;
            if (serviceio.require_one_of_choices.length > 0) {
                const groupErrors = [];
                for (const group of serviceio.require_one_of_choices) {
                  const foundChoices = group.filter((choice) => choice in stage.source);
                  if (foundChoices.length === 0) {
                    groupErrors.push(
                      `${stage.name}: Please provide one of these values on your payload: ${group}`
                    );
                  } else if (foundChoices.length > 1) {
                    groupErrors.push(
                      `${stage.name}: Please only include one of these values: ${group}`
                    );
                  }
                }
            
                if (groupErrors.length > 0) {
                    let error_message = groupErrors.join(". ")
                  throw new TypeError(error_message);
                }
            }

            // check if datatypes are correct
            for(let [key, notation] of Object.entries(stage.source)) {
                let required_data_type = get_serviceio_datatype(stage.service._serviceio.input_structure[key]);

                if (isNodeInput(notation)) {
                    if ("pre_process" in notation) continue; // skip validation if there is a helper function

                    let reference_node_name = notation.source;
                    let required_key = notation.field;
                    if (reference_node_name == "user_input") {
                        let input_datatype = get_userinput_datatype(user_input[required_key])
                        if (required_data_type != input_datatype) {
                            error_messages.push(`On ${stage.name} node: ${required_data_type} required on user_input '${required_key}' field but ${input_datatype} is provided.`)
                        }
                    } else {
                        let source_node_found = false;
                        for (let subnode of stages) {
                            if (reference_node_name == subnode.name) {
                                source_node_found = true;
                                if (subnode instanceof Pipeline) {
                                    break;
                                }
                                let output_datatype = get_serviceio_datatype(subnode.service._serviceio.output_structure[required_key]);
                                if (output_datatype == 'null') {
                                    error_messages.push(`On ${stage.name} node: the reference node '${reference_node_name}' does not have ${required_key} key on its output.`);
                                }
                                if (required_data_type != output_datatype) {
                                    error_messages.push(`On ${stage.name} node: The input datatype required for field ${key} is ${required_data_type}. This does not match the datatype to be given by node ${subnode.name}'s ${notation.field} field which is ${output_datatype}.`);
                                }
                                break;
                            }
                        }
                        if (!source_node_found) {
                            error_messages.push(`Node '${reference_node_name}' is not found.`)
                        }
                    }
                    
                } else {
                    if (get_userinput_datatype(notation) == required_data_type) {
                        stage.service._payload[key] = notation;
                    } else {
                        error_messages.push(`On ${stage.name} node: ${key} requires ${required_data_type} but ${typeof notation} is provided.`)
                    }
                }

            }
        }
    
        if (error_messages.length != 0) {
            throw new Error(error_messages.join(","));
        }
        return true;
    }

    /**
     * Adds a node at the end of the node list/stages.
     * @param {Node} node 
     */
    add_node(node) {
        if (node instanceof Node){
            this._stages.push(node);
        } else {
            throw new Error(`${node} is not a Node instance.`)
        }
    }

    /**
     * 
     * @param {Node[]} stages
     * @param {object} user_input
     * @returns 
     */
    setDefaults(stages, user_input) {
        let defaulted_stages = [];

        for (let i=0; i<stages.length; i++) {
            const stage = stages[i];
            if (stage instanceof Pipeline) {
                continue;
            }
            let stage_source = {};
            // enumerate the required inputs of this stage
            let required_keys= stage.service._serviceio.required_input_fields
            let require_one_of_choices = stage.service._serviceio.require_one_of_choices
            if ( require_one_of_choices ) {
                if ( require_one_of_choices.length > 0) {
                    for (let j=0; j<require_one_of_choices.length > 0; j++) {
                        required_keys.push(require_one_of_choices[j][0]);
                    }
                }
            }
            
            // starting from the last output, check if the required input data is available
            // if not, get it from the user_input
            // if input is defined, use its definition
            for ( let required_key of required_keys) {

                if (stage.source[required_key] != "default") { 
                    stage_source[required_key] = stage.source[required_key];
                    continue;
                }

                let found_input = false;
                for (let j=i-1; j>=0; j--) {
                    let stage_for_output = stages[j];
                    let stage_for_output_output_fields = stage_for_output.service._serviceio.output_structure;
                    if (required_key in stage_for_output_output_fields) {
                        stage_source[required_key] = {
                            source: stage_for_output.name,
                            field: required_key
                        }
                        found_input = true;
                    }
                    // special considerations
                    else if (required_key == "context" && "text" in stage_for_output_output_fields) {
                        stage_source.context = {
                            source: stage_for_output.name,
                            field: "text"
                        };
                        found_input = true;
                    }
                    else if (required_key == "document_text" && "text" in stage_for_output_output_fields) {
                        stage_source.document_text = {
                            source: stage_for_output.name,
                            field: "text"
                        };
                        found_input = true;
                    }
                    else if (required_key == "document_ids" && "document_id" in stage_for_output_output_fields) {
                        stage_source.document_ids = {
                            source: stage_for_output.name,
                            field: "document_id",
                            pre_process: put_doc_id_to_array
                        };
                        found_input = true;
                    }
                }

                if (!found_input) {
                    if (required_key in user_input) {
                        stage_source[required_key] = {
                            source: "user_input",
                            field: required_key
                        };
                    } else {
                        throw new ReferenceError(`Please add ${required_key} to user_input. The previous Nodes' outputs do not provide this data.`);
                    }
                }
            }
            let defaulted_stage = new Node(stage.name, stage.service, stage_source);
            defaulted_stages.push(defaulted_stage);
        }
        return defaulted_stages;
    }

    /**
     * Discontinue the execution of remaining nodes in the pipeline run
     * @param {string} termination_code 
     */
    async terminate(termination_code) {
        if (termination_code) {
            this._termination_codes.push(this.apiKey + termination_code);
        return {"message": `Request to terminate job "${termination_code}" received.`}
        }
        return {"message": `Request to terminate job is not valid (execution code missing).`}
    }
}

export {Pipeline}