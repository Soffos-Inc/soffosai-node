import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class AmbiguityDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.AMBIGUITY_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["sentence_split", "sentence_overlap"];
    this.input_structure = {
      "text": "string",
      "sentence_split": "number",
      "sentence_overlap": "boolean"
    };
    // output_fields = ["ambiguities"]
    this.output_structure = {
      "ambiguities": {
        "text": "string",
        "span_start": "number",
        "span_end": "number",
        "reason": "string"       
      }
    };
  }
}

export default AmbiguityDetectionIO;
