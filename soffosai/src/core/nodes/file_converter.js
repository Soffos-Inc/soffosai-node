import {Node} from "./node.js";
import {FileConverterService} from "../../app.js";

/**
 * A service configuration for FileConverterService for Pipeline use.
 */
class FileConverterNode extends Node {

    /**
     * @param {string} name
     * @param {Blob} file
     * @param {number} normalize
     */
    constructor(name, file, normalize=0) {
        let service = new FileConverterService();
        let source = {
			file: file,
			normalize: normalize
        };
        return super(name, service, source);
    }
}

export default FileConverterNode;