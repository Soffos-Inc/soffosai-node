import {Node} from "./node.js";
import {QuestionAnsweringService} from "../../app.js";

/**
 * A service configuration for QuestionAnsweringService for Pipeline use.
 */
class QuestionAnsweringNode extends Node {

    /**
     * @param {string} name
     * @param {string} question
     * @param {string} document_text
     * @param {string[]} document_ids
     * @param {boolean} check_ambiguity
     * @param {boolean} check_query_type
     * @param {boolean} generic_response
     * @param {object} meta
     */
    constructor(name, question, document_text=undefined, document_ids=undefined, 
        check_ambiguity=true, check_query_type=true, generic_response=false, meta=undefined) {
        let service = new QuestionAnsweringService();
        let source = {
			message: question, // special handling, message is unclear so question is used
			check_ambiguity: check_ambiguity,
			check_query_type: check_query_type,
			generic_response: generic_response
        };
        if (document_text) source.document_text = document_text;
		if (document_ids) source.document_ids = document_ids;
		if (meta) source.meta = meta;
        return super(name, service, source);
    }
}

export default QuestionAnsweringNode;