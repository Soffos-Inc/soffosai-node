import { SoffosAIService } from './service.js';
import { ServiceString } from '../../common/constants.js';
import {FileConverterIO} from '../../common/serviceio_fields/index.js';


/**
 * The File Converter extracts text from various types of files.
 */
class FileConverterService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.FILE_CONVERTER;
      super(service, kwargs);
      this._serviceio = new FileConverterIO();
    }
  
    /**
     * @param {string} user 
     * @param {Blob} file
     * @param {number} [normalize=0] 
     * @returns {Promise<Object>}
     */
    call(user, file, normalize=0) {
        if ( ![ 0, 1 ].includes(normalize)) {
            throw new Error(`${this._service}: normalize can only accept a value of 0 or 1;`);
        }

        this._argsDict = {
          user: user,
          file: file,
          normalize:normalize
        }
        return super.call();
    }
}

export default FileConverterService
