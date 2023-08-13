import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class ContradictionDetectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.CONTRADICTION_DETECTION;
    this.required_input_fields = ["text"];
    this.optional_input_fields = [];
    this.input_structure = {
      "text": "string"
    };
    // this.output_fields = ["contradictions"];
    this.output_structure = {
      "contradictions": [
        {
          "contradiction": "string",
          "sentences": [
            {
              "text": "string",
              "span_start": "number",
              "span_end": "number"
            },
          ]
        },
      ]
    };
  }
}

export default ContradictionDetectionIO;
