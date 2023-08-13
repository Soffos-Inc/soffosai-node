import { Pipeline } from "./../pipeline.js";
import { DocumentsSearchNode, QuestionAnsweringNode } from "./../../nodes/index.js";
import {inspectArguments} from './../../services/index.js';

/**
 * The document search service provides "passages" which is a list of contents plus some more description.
 * In order to get the content, iterate through the passages and concatenate it.
 * @param {Array.<object>} value 
 * @returns 
 */
function getContent(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}

/**
 * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
 */
export class AskADocumentPipeline extends Pipeline {
    constructor(kwargs={}){
        let d_node = new DocumentsSearchNode(
                "search", null, null, {source: "user_input", field: "doc_ids"}
            );
            let qa_node = new QuestionAnsweringNode(
                "qa",
                {source: "user_input", field: "question"},
                {source: "search", field: "passages", pre_process: getContent}
            );
                
        let nodes = [d_node, qa_node];
        return super(nodes, false, kwargs);
    }

    /**
     * Call the pipeline
     * @param {string} user 
     * @param {Array.<string>} doc_ids 
     * @param {string} question 
     * @param {string} [execution_code=null]
     * @returns {object}
     */
    async call(user, doc_ids, question, execution_code=null) {
        let payload = inspectArguments(this.call, user, doc_ids, question, execution_code);
        return await this.run(payload);
    }
}