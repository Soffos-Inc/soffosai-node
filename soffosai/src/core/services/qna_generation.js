import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {QuestionAndAnswerGenerationIO} from '../../common/serviceio_fields/index.js';


/**
 * The Q&A Generation module splits large documents in chunks from which it generates multiple 
 * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
 * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
 * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
 * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
 * This gives a lot of flexibility to cater to your specific use case.
 */
class QuestionAndAnswerGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.QUESTION_AND_ANSWER_GENERATION;
      super(service, kwargs);
      this._serviceio = new QuestionAndAnswerGenerationIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} text
     * @param {number} [sentence_split=3]
     * @param {boolean} [sentence_overlap=false]
     * @returns {Promise<Object>} 
     */
    call(user, text, sentence_split=3, sentence_overlap=false) {
      this._argsDict = inspectArguments(this.call, user, text, sentence_split, sentence_overlap);
      return super.call();
    }
}

export default QuestionAndAnswerGenerationService
