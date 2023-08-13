import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class QuestionAndAnswerGenerationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.QUESTION_AND_ANSWER_GENERATION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap"];
    this.input_structure = {
      "text": "string",
      "sentence_split": "number",
      "sentence_overlap": "boolean"
    };
    this.output_structure = {
      "qna_list": [
        {
          "question": "string",
          "answer": "string",
          "chunk_index": "number"
        },
      ],
      "chunks": [
        {
          "text": "string",
          "span_start": "number",
          "span_end": "number",
          "index": "number"
        },
      ]
    };
  }
}

export default QuestionAndAnswerGenerationIO;
