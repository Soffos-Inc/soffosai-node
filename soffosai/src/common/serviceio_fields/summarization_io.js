import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class SummarizationIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SUMMARIZATION;
    this.required_input_fields = ["sent_length", "text"];
    this.input_structure = {
      "sent_length": "number",
      "text": "string"
    };
    this.output_structure = {
      "summary": "string"
    };
  }
}

export default SummarizationIO;
