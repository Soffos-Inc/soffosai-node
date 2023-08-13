import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';
import { ServiceString } from '../../common/constants.js';
import {AnswerScoringIO} from '../../common/serviceio_fields/index.js';


/** 
 * This module will mark the user's answer based on the provided context, 
 * the question and, optionally, the expected correct answer..
*/
class AnswerScoringService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.ANSWER_SCORING;
      super(service, kwargs);
      this._serviceio = new AnswerScoringIO();
    }
  
    /**
     * @param {string} user 
     * @param {string} context
     * @param {string} question
     * @param {string} user_answer
     * @param {string} [answer]
     * @returns {Promise<Object>}
     */
    call(user, context, question, user_answer, answer=null) {
      this._argsDict = inspectArguments(this.call, user, context, question, user_answer, answer);
      return super.call();
    }
}

export default AnswerScoringService