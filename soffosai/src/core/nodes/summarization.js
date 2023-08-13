import {Node} from "./node.js";
import {SummarizationService} from "../../app.js";

/**
 * A service configuration for SummarizationService for Pipeline use.
 */
class SummarizationNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} sent_length
     */
    constructor(name, text, sent_length) {
        let service = new SummarizationService();
        let source = {
			text: text,
			sent_length: sent_length
        };
        
        return super(name, service, source);
    }
}

export default SummarizationNode;