import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {ParaphraseIO} from '../../common/serviceio_fields/index.js';


/**
 * Paraphrase and Simplify are available as two different flavors of the same module. 
 * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
 * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
 */
class ParaphraseService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.PARAPHRASE;
      super(service, kwargs);
      this._serviceio = new ParaphraseIO();
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

export default ParaphraseService