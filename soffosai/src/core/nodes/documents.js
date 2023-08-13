import {Node} from "./node.js";
import {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService} from "../../app.js";

/**
 * A service configuration for Documents Ingest Service for Pipeline use.
 */
class DocumentsIngestNode extends Node {
    /**
     * @param {string} name
     * @param {string} document_name
     * @param {string} [text=null]
     * @param {object} [tagged_elements=null] 
     * @param {object} [meta=null] 
     */
    constructor(name, document_name, text=null, tagged_elements=null, meta=null) {
        let service = new DocumentsIngestService();
        let source = {
            name: document_name, // special handling. document ingest needs "name" as document_name
        };
        if (text) source.text = text;
        if (tagged_elements)source.tagged_elements = tagged_elements;
        if (meta) source.meta = meta;

        return super(name, service, source);
    }
}


/**
 * A service configuration for Documents Search Service for Pipeline use.
 */
class DocumentsSearchNode extends Node {
    /**
     * @param {string} name 
     * @param {object} [query=null]
     * @param {object} [filters=null]
     * @param {Array.<string>} [document_ids=null]
     * @param {number} [top_n_keywords=5] 
     * @param {number} [top_n_natural_language=5]
     * @param {string} [date_from=null]
     * @param {string} [date_until=null]
     */
    constructor(name, query=null, filters=null, document_ids=null, top_n_keywords=5,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
        let service = new DocumentsSearchService();
        let source = {};
        if(query) source.query = query;
        if(filters) source.filters = filters;
        if(document_ids) source.document_ids = document_ids;
        if(top_n_keywords) source.top_n_keywords = top_n_keywords;
        if(top_n_natural_language) source.top_n_natural_language = top_n_natural_language;
        if(date_from) source.date_from = date_from;
        if(date_until) source.date_until = date_until;
        return super(name, service, source);
    }
}


/**
 * A service configuration for DocumentsDeleteService for Pipeline use.
 */
 class DocumentsDeleteNode extends Node {

    /**
     * @param {string} name
     * @param {Array.<string>} document_ids
     */
    constructor(name, document_ids) {
        let service = new DocumentsDeleteService();
        let source = {
            document_ids: document_ids
        }
        return super(name, service, source);
    }
}


export {
    DocumentsIngestNode,
    DocumentsSearchNode,
    DocumentsDeleteNode
}