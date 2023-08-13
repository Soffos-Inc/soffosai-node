import {Node} from "./node.js"
import {ContradictionDetectionService} from "../../app.js";

/**
 * A service configuration for Ambiguity Detection Service for Pipeline use.
 */
class ContradictionDetectionNode extends Node{
    /**
     * @param {string} name
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    constructor(name, text) {
        let service = new ContradictionDetectionService();
        let source = {
            text: text
        }
        return super(name, service, source);
    }
}

export default ContradictionDetectionNode