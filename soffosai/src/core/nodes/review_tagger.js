import {Node} from "./node.js";
import {ReviewTaggerService} from "../../app.js";

/**
 * A service configuration for ReviewTaggerService for Pipeline use.
 */
class ReviewTaggerNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new ReviewTaggerService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default ReviewTaggerNode;