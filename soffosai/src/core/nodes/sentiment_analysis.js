import {Node} from "./node.js";
import {SentimentAnalysisService} from "../../app.js";

/**
 * A service configuration for SentimentAnalysisService for Pipeline use.
 */
class SentimentAnalysisNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} [sentence_split=4]
     * @param {string} [sentence_overlap=false]
     */
    constructor(name, text, sentence_split=4, sentence_overlap=false) {
        let service = new SentimentAnalysisService();
        let source = {
			text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap
        };
        
        return super(name, service, source);
    }
}

export default SentimentAnalysisNode;