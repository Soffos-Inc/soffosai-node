import {Node} from "./node.js";
import {SimplifyService} from "../../app.js";

/**
 * A service configuration for SimplifyService for Pipeline use.
 */
class SimplifyNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new SimplifyService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default SimplifyNode;