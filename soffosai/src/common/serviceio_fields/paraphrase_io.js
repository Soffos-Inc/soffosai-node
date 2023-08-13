import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class ParaphraseIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.PARAPHRASE;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "paraphrase": "string"
    };
  }
}

export default ParaphraseIO;
