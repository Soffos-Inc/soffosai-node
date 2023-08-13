import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class TableGeneratorIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TABLE_GENERATOR;
    this.required_input_fields = ["table_format", "text"];
    this.input_structure = {
      "table_format": "string", // markdown or CSV
      "text": "string"
    };
    this.output_structure = {
      "tables": [
        {
          "title": "string",
          "table": "string",
          "note": "string"
        }
      ]
    };
  }
}

export default TableGeneratorIO;
