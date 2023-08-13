import {Node} from "./node.js";
import {MicrolessonService} from "../../app.js";

/**
 * A service configuration for MicrolessonService for Pipeline use.
 */
class MicrolessonNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<object>} content
     */
    constructor(name, content) {
        let service = new MicrolessonService();
        let source = {
			content: content
        };
        return super(name, service, source);
    }
}

export default MicrolessonNode;