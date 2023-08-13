import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class ReviewTaggerIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.REVIEW_TAGGER;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "object": "string",
      "action": "string",
      "fault": "string"
    };
  }
}

export default ReviewTaggerIO;