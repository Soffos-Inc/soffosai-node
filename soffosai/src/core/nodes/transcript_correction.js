import {Node} from "./node.js";
import {TranscriptCorrectionService} from "../../app.js";

/**
 * A service configuration for TranscriptCorrectionService for Pipeline use.
 */
class TranscriptCorrectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new TranscriptCorrectionService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default TranscriptCorrectionNode;