import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {ProfanityIO} from '../../common/serviceio_fields/index.js';


/**
 * This module detects profanities and the level of offensiveness in a body of text. 
 */
class ProfanityService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.PROFANITY;
      super(service, kwargs);
      this._serviceio = new ProfanityIO();
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

export default ProfanityService
