import {Node} from "./node.js";
import {TableGeneratorService} from "../../app.js";

/**
 * A service configuration for TableGeneratorService for Pipeline use.
 */
class TableGeneratorNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {string} [table_format='markdown']
     */
    constructor(name, text, table_format='markdown') {
        let service = new TableGeneratorService();
        let source = {
			text: text,
			table_format: table_format
        };
        
        return super(name, service, source);
    }
}

export default TableGeneratorNode;