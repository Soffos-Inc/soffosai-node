import {Node} from "./node.js";
import {LetsDiscussCreateService, LetsDiscussService, LetsDiscussRetrieveService, LetsDiscussDeleteService} from "../../app.js";

/**
 * A service configuration for LetsDiscussCreateService for Pipeline use.
 */
class LetsDiscussCreateNode extends Node {

    /**
     * @param {string} name
     * @param {string} context
     */
    constructor(name, context) {
        let service = new LetsDiscussCreateService();
        let source = {
			context: context
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussService for Pipeline use.
 */
 class LetsDiscussNode extends Node {

    /**
     * @param {string} user 
     * @param {string} session_id
     * @param {string} query
     * @returns {Promise<Object>} 
     */
    constructor(name, session_id, query) {
        let service = new LetsDiscussService();
        let source = {
			session_id: session_id,
			query: query
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussRetrieveService for Pipeline use.
 */
 class LetsDiscussRetrieveNode extends Node {

    /**
     * @param {string} name
     * @param {boolean} [return_messages=true]
     */
    constructor(name, return_messages=true) {
        let service = new LetsDiscussRetrieveService();
        let source = {
			return_messages: return_messages
        };
        return super(name, service, source);
    }
}


/**
 * A service configuration for LetsDiscussDeleteService for Pipeline use.
 */
 class LetsDiscussDeleteNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<string>} session_ids
     */
    constructor(name, session_ids) {
        let service = new LetsDiscussDeleteService();
        let source = {
			session_ids: session_ids
        };
        return super(name, service, source);
    }
}


export {
    LetsDiscussCreateNode,
    LetsDiscussNode,
    LetsDiscussRetrieveNode,
    LetsDiscussDeleteNode
};