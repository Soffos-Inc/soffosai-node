import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {SummarizationIO} from '../../common/serviceio_fields/index.js';


/**
 * The summarization module utilizes Natural Language Generation (NLG) to generate an 
 * abstractive summary of a specified length. In contrast to extractive summarization methods, 
 * which simply calculate the centrality of sentences or passages in the original text and 
 * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
 * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
 * but a combination of all key points formulated as a new text.
 */
class SummarizationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SUMMARIZATION;
      super(service, kwargs);
      this._serviceio = new SummarizationIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {number} sent_length
     * @returns {Promise<Object>} 
     */
    call(user, text, sent_length) {
      this._argsDict = inspectArguments(this.call, user, text, sent_length);
      return super.call();
    }
}

export default SummarizationService
