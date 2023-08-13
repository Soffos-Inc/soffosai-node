/**
 * A SoffosAIService wrapper that holds information on how the service is to 
 * be executed inside a SoffosPipeline
 */
class Node {
    constructor(name, service=null, source={}) {
        this._raw_service = service,
        this.name = name;
        this.source = source;
        this.service = service;
    }

    /**
     * This feature is only for testing/debugging a Node.
     * To easily create and call a service, please use the SoffosAIService class
     * @param {object} payload 
     */
    run(payload = null) {
        if(payload !== null) {
            this.source = payload;
        }
        
        if (!("user" in this.source)) {
            this.source["user"] = this.name;
        }
        return this.service.getResponse(this.source);
    }
}

export { Node }
