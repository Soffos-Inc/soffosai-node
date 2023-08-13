import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {AmbiguityDetectionIO} from '../../common/serviceio_fields/index.js';


/**
 *  A SoffosAIService that finds statements or sentences in text that are not coherent,
 *  or can be interpreted in multiple ways while also taking in account the surrounding context.
*/
class AmbiguityDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.AMBIGUITY_DETECTION;
      super(service, kwargs);
      this._serviceio = new AmbiguityDetectionIO();
    }
  
    /**
     * @param {string} user
     * @param {string} text
     * @param {number} [sentence_split=4]
     * @param {boolean} [sentence_overlap=false]
     * @returns {Promise<Object>}
     */
    call(user, text, sentence_split = 4, sentence_overlap = false) {
      this._argsDict = inspectArguments(this.call, user, text, sentence_split, sentence_overlap);
      return super.call();
    }
}

export default AmbiguityDetectionService