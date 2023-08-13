import {Node} from "./node.js";
import {ParaphraseService} from "../../app.js";

/**
 * A service configuration for ParaphraseService for Pipeline use.
 */
class ParaphraseNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new ParaphraseService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ParaphraseNode;