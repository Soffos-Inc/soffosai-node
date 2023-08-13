import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class EmotionDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.EMOTION_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap", "emotion_choices"];
    this.input_structure = {
      "sentence_split": "number",
      "sentence_overlap": 'boolean',
      "text": "string",
      "emotion_choices": 'object'
    };
    this.output_structure = {
      "spans": [
        {
          "detected_emotions": 'object',
          "text": "string",
          "span_start": "number",
          "span_end": "number"
        },
      ]
    };
  }
}

export default EmotionDetectionIO;
