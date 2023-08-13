import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {ReviewTaggerIO} from '../../common/serviceio_fields/index.js';


/**
 * This module extracts key information from negative product reviews. It attempts to find
 * the referred object, it's fault and an action/verb that is associated with it. If any 
 * of the information is not present, it returns "n/a". This is useful for organizations who 
 * want to analyze product reviews in order to identify and prioritize the most important issues.
 */
class ReviewTaggerService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.REVIEW_TAGGER;
      super(service, kwargs);
      this._serviceio = new ReviewTaggerIO();
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

export default ReviewTaggerService
