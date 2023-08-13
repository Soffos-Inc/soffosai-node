import {Node} from "./node.js"
import {AnswerScoringService} from "../../app.js";

/**
 * A service configuration for Answer Scoring Service for Pipeline use.
 */
class AnswerScoringNode extends Node{
    /**
     * @param {string} name 
     * @param {string} context
     * @param {string} question
     * @param {string} user_answer
     * @param {string} [answer=null]
     */
    constructor(name, context, question, user_answer, answer=null) {
        let service = new AnswerScoringService();
        let source = {
            context: context,
            question: question,
            user_answer: user_answer
        }
        if(answer) source.answer = answer;
        
        return super(name, service, source);
    }
}

export default AnswerScoringNode