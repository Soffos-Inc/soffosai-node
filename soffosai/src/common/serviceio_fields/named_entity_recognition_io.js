import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class NamedEntityRecognitionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.NER;
    this.required_input_fields = ["text"];
    this.optional_input_fields = ["labels"];
    this.input_structure = {
      "text": "string",
      "labels": "object"
    };
    this.output_structure = {
      "named_entities": [
        {
          "span": [
            "number",
            "number"
          ],
          "tag": "string",
          "text": "string"
        },
        {
          "span": [
            "number",
            "number"
          ],
          "tag": "string",
          "text": "string"
        }
      ]
    };
  }
}

export default NamedEntityRecognitionIO;
