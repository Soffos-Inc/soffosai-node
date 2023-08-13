import {Node} from "./node.js";
import {LanguageDetectionService} from "../../app.js";

/**
 * A service configuration for LanguageDetectionService for Pipeline use.
 */
class LanguageDetectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new LanguageDetectionService();
        let source = {
			text: text
        };
        return super(name, service, source);
    }
}

export default LanguageDetectionNode;