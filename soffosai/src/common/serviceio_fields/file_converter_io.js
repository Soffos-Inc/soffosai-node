import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class FileConverterIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.FILE_CONVERTER;
    this.required_input_fields = ["file"];
    this.optional_input_fields = ["normalize"];
    this.input_structure = {
      "file": "object",
      "normalize": "number"
    };
    this.output_structure = {
      "text": "string",
      "tagged_elements": [
        {
          "text": "string",
          "tag": "string"
        },
      ]
    };
  }
}

export default FileConverterIO;
