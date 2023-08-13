import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {EmailAnalysisIO} from '../../common/serviceio_fields/index.js';


/**
 * This module extracts key information from the body of an e-mail.
 */
class EmailAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.EMAIL_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new EmailAnalysisIO();
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

export default EmailAnalysisService
