import {Node} from "./node.js";
import {TagGenerationService} from "../../app.js";

/**
 * A service configuration for TagGenerationService for Pipeline use.
 */
class TagGenerationNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {Array.<?>} [types=["topic"]]
     * @param {number} n
     */
    constructor(name, text, types=["topic"], n=10) {
        let service = new TagGenerationService();
        let source = {
			text: text,
			types: types,
			n: n
        };
        
        return super(name, service, source);
    }
}

export default TagGenerationNode;