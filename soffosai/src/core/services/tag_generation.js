import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {TagGenerationIO} from '../../common/serviceio_fields/index.js';


/**
 * This module can generate tags for a piece of text that can aid with content search in
 * certain use-cases. It allows to specify a number of tags to be generated for each of 
 * the categories "topic", "domain", "audience", "entity".
 */
class TagGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TAG_GENERATION;
      super(service, kwargs);
      this._serviceio = new TagGenerationIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {Array.<string>} [types=["topic"]]
     * @param {number} [n=10]
     * @returns {Promise<Object>} 
     */
    call(user, text, types=["topic"], n=10) {
        /*
            Note: List of types of keywords to extract. Supported types:

            topic: Tags relating to the subject matter of the text. 
            domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". 
                In some cases, domain tags might be similar to topic tags. 
            audience: Tags relating to the type of audience the text is intended for. 
            entity: Entities such as people, places, products, etc. mentioned in the text.
        */
        for (let i = 0; i < types.length; i++) {
            let _type = types[i];
            if (!["topic", "domain", "audience", "entity"].includes(_type)) {
                throw new Error(`${this._service} types argument's elements can only be "topic", "domain", "audience" and/or "entity".`);
            }
        }
              
      this._argsDict = inspectArguments(this.call, user, text, types, n);
      return super.call();
    }
}

export default TagGenerationService
