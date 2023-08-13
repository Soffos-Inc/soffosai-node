import {Node} from "./node.js";
import {LogicalErrorDetectionService} from "../../app.js";

/**
 * A service configuration for LogicalErrorDetectionService for Pipeline use.
 */
class LogicalErrorDetectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new LogicalErrorDetectionService();
        let source = {
			text: text
        };
        return super(name, service, source);
    }
}

export default LogicalErrorDetectionNode;