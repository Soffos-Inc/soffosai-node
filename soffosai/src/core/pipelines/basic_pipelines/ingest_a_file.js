import { Pipeline } from "../pipeline.js";
import { FileConverterNode, DocumentsIngestNode } from "../../nodes/index.js";
import {inspectArguments} from '../../services/index.js';


// function get_filename(path) {
//     let parts = null;
//     if (path.includes("/")) {
//         parts = path.split("/");
//         return parts.pop();
//     } else if (path.includes("\\")) {
//         parts = path.split("\\");
//         return parts.pop();
//     } else {
//         return path;
//     }
// }

function get_filename(file) {
    return file.name.split('.')[0];
}


/**
 * Given a file path, upload the file to Soffos and get its reference document_id.
 */
export class FileIngestPipeline extends Pipeline {
    constructor(kwargs={}) {
        const file_converter = new FileConverterNode(
            "file_converter",
            {
                source: "user_input",
                field: "file"
            },
            {
                source: "user_input",
                field: "normalize"
            }
        );
        const document_ingest = new DocumentsIngestNode(
            "doc_ingest",
            {
                source: "user_input",
                field: "file",
                pre_process: get_filename
            },
            {
                source: "file_converter",
                field: "text"
            }
        );
        return super([file_converter, document_ingest], false, kwargs);
    }

    /**
     * 
     * @param {string} user
     * @param {Blob} file
     * @param {number} [normalize=0]
     * @param {string} [execution_code=null]
     * @returns {object}
     */
    async call(user, file, normalize=0, execution_code=null) {
        let payload = inspectArguments(this.call, user, file, normalize, execution_code);
        return await this.run(payload);
    }
}
