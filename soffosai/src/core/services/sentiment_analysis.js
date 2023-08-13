import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {SentimentAnalysisIO} from '../../common/serviceio_fields/index.js';


/**
 * This module processes the text to measure whether it is negative, positive or neutral.
 * The text is processed in segments of user-defined length and it provides scores for each 
 * segment as well as the overall score of the whole text.
 */
class SentimentAnalysisService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SENTIMENT_ANALYSIS;
      super(service, kwargs);
      this._serviceio = new SentimentAnalysisIO();
    }
  
    /**
    * @param {string} user 
    * @param {string} text
    * @param {number} [sentence_split=3]
    * @param {boolean} [sentence_overlap=false]
    * @returns {Promise<Object>} 
    */
   call(user, text, sentence_split=4, sentence_overlap=false) {
     this._argsDict = inspectArguments(this.call, user, text, sentence_split, sentence_overlap);
     return super.call();
   }
}

export default SentimentAnalysisService
