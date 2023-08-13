import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {MicrolessonIO} from '../../common/serviceio_fields/index.js';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 */
class MicrolessonService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.MICROLESSON;
      super(service, kwargs);
      this._serviceio = new MicrolessonIO();
    }
  
    /**
     * @param {string} user 
     * @param {Array.<object>} content
     * @returns {Promise<Object>} 
     */
    call(user, content=undefined) {
      if (content != undefined){
        this.content = content;
      }
      this._argsDict = inspectArguments(this.call, user, content);
      this._argsDict['content'] = this.content;
      return super.call();
    }

    /**
     * @param {string} source 
     * @param {string} text 
     */
    add_content(source, text) {
        this.content.push(
            {
                "source": source,
                "text": text
            }
        );
    }
}

export default MicrolessonService
