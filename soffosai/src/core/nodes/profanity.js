import {Node} from "./node.js";
import {ProfanityService} from "../../app.js";

/**
 * A service configuration for ProfanityService for Pipeline use.
 */
class ProfanityNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new ProfanityService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ProfanityNode;