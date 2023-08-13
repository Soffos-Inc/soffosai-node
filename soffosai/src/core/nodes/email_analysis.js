import {Node} from "./node.js";
import {EmailAnalysisService} from "../../app.js";

/**
 * A service configuration for EmailAnalysisService for Pipeline use.
 */
class EmailAnalysisNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new EmailAnalysisService();
        let source = {
            text: text
        };
        return super(name, service, source);
    }
}

export default EmailAnalysisNode;