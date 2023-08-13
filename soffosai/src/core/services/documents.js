import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {DocumentsIngestIO, DocumentSearchIO, DocumentDeleteIO} from '../../common/serviceio_fields/index.js';


/**
 * The Documents Ingest module enables ingestion of content into Soffos.
 * Takes in the text and gives the document_id to reference the text in Soffos database.
 */
class DocumentsIngestService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_INGEST;
      super(service, kwargs);
      this._serviceio = new DocumentsIngestIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} document_name
     * @param {string} [text]
     * @param {object} [tagged_elements] 
     * @param {object} [meta] 
     * @returns {Promise<Object>} 
     */
    call(user, document_name, text=null, tagged_elements=null, meta=null) {
      this._argsDict = inspectArguments(this.call, user, document_name, text, tagged_elements, meta);
      this._argsDict.name = document_name;
      return super.call();
    }
}


/**
 * The Documents module enables search of ingested contents from Soffos.
 */
class DocumentsSearchService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_SEARCH;
      super(service, kwargs);
      this._serviceio = new DocumentSearchIO();
    }
  
    /**
     * @param {string} user 
     * @param {object} [query]
     * @param {object} [filters]
     * @param {Array.<string>} [document_ids] 
     * @param {number} [top_n_keywords] 
     * @param {number} [top_n_natural_language] 
     * @param {string} [date_from]
     * @param {string} [date_until]
     * @returns {Promise<Object>} 
     */
    call(user, query=null, filters=null, document_ids=null, top_n_keywords=5,
        top_n_natural_language=5, date_from=null, date_until=null) 
    {
      this._argsDict = inspectArguments(this.call, user, query, filters, document_ids, top_n_keywords,
        top_n_natural_language, date_from, date_until);

      let response = super.call();
      let text = "";
      if (response.hasOwnProperty('passages')){
        for (let passage of response.passages){
        text += passage;
        }
      }
      response.text = text;

      return response
    }
}


/**
 * The Documents module enables deletion of ingested contents from Soffos.
 */
class DocumentsDeleteService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.DOCUMENTS_DELETE;
      super(service, kwargs);
      this._serviceio = new DocumentDeleteIO();
    }
  
    /**
     * @param {string} user 
     * @param {Array.<string>} [document_ids] 
     * @returns {Promise<Object>} 
     */
    call(user, document_ids) {
      this._argsDict = inspectArguments(this.call, user, document_ids);
      return super.call();
    }
}


export {DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService}
