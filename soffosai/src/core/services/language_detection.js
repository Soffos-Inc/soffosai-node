import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {LanguageDetectionIO} from '../../common/serviceio_fields/index.js';

/**
 * The Language Detection module detects the dominant language in the provided text.
 */
class LanguageDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LANGUAGE_DETECTION;
      super(service, kwargs);
      this._serviceio = new LanguageDetectionIO();
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

export default LanguageDetectionService
