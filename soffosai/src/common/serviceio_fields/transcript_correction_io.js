import ServiceIO from './service_io.js';
import { ServiceString } from '../constants.js';

class TranscriptCorrectionIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.TRANSCRIPTION_CORRECTION;
    this.required_input_fields = ["text"];
    this.input_structure = {
      "text": "string"
    };
    this.output_structure = {
      "correction": "string"
    };
  }
}

export default TranscriptCorrectionIO;
