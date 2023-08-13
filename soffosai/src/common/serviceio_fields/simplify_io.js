import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class SimplifyIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.SIMPLIFY;
    this.required_input_fields = ["text"];
    this.require_one_of_choices = [];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "simplify": "string"
    };
  }
}

export default SimplifyIO;
