import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class MicrolessonIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.MICROLESSON;
    this.required_input_fields = ["content"];
    this.input_structure = {
      "content": [
        {
          "source": "string",
          "text": "string"
        }
      ],
      "user": "string"
    };
    this.output_structure = {
      "microlesson": "string"
    };
  }
}

export default MicrolessonIO;
