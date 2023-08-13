import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {TableGeneratorIO} from '../../common/serviceio_fields/index.js';


const TABLE_FORMATS = ['markdown', 'CSV'];

/**
 * The table generator module enables applications to extract numerical and statistical 
 * data from raw text in a tabular format. For use-cases where data has to be manually 
 * reviewed and cross-referenced, this module can bring enormous value.
 */
class TableGeneratorService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TABLE_GENERATOR;
      super(service, kwargs);
      this._serviceio = new TableGeneratorIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {string} [table_format="markdown"]
     * @returns {Promise<Object>} 
     */
    call(user, text, table_format='markdown') {
      if (!TABLE_FORMATS.includes(table_format)){
        throw new Error(`${table_format} is not a supported format. Please choose from ${TABLE_FORMATS}.`)
      }
      this._argsDict = inspectArguments(this.call, user, text, table_format);
      return super.call();
    }
}

export default TableGeneratorService
