import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {LogicalErrorDetectionIO} from '../../common/serviceio_fields/index.js';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 */
class LogicalErrorDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LOGICAL_ERROR_DETECTION;
      super(service, kwargs);
      this._serviceio = new LogicalErrorDetectionIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      this._argsDict = inspectArguments(this.call, user, text);
      return super.call();
    }
}

export default LogicalErrorDetectionService
