import {Node} from "./node.js";
import {EmotionDetectionService} from "../../app.js";


const _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * A service configuration for EmotionDetectionService for Pipeline use.
 */
class EmotionDetectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} sentence_split
     * @param {boolean} sentence_overlap
     * @param {Array.<string>} emotion_choices
     */
    constructor(name, text, sentence_split=4, sentence_overlap=false, emotion_choices=_EMOTION_LIST) {
        let service = new EmotionDetectionService();
        let source = {
            text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap,
			emotion_choices: emotion_choices
        };
        return super(name, service, source);
    }
}

export default EmotionDetectionNode;