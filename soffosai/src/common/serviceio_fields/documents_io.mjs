import ServiceIO from './service_io.mjs';
import { ServiceString } from '../constants.mjs';

class DocumentsIngestIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_INGEST;
    this.required_input_fields = ["name"];
    this.require_one_of_choices = [["text", "tagged_elements"]];
    this.defaults = ["text"];
    this.optional_input_fields = ["meta"];
    this.input_structure = {
      "name": "string",
      "meta": "object",
      "text": "string",
      "tagged_elements": ["object", "object"]
    };
    // output_fields = ["success", "document_id"]
    this.output_structure = {
      "success": "boolean",
      "document_id": "string"
    };
    this.primary_output_field = "document_id";
  }
}

class DocumentSearchIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_SEARCH;
    this.required_input_fields = [];
    this.require_one_of_choices = [];
    this.defaults = ["query"];
    this.optional_input_fields = [
      "query", "filters", "document_ids", "top_n_keywords", 
      "top_n_natural_language", "date_from", "date_until"
    ];
    this.input_structure = {
      "query": "string",
      "document_ids": "array",
      "top_n_keywords": "number",
      "top_n_natural_language": "number",
      "filters": "object",
      "date_from": "string",
      "date_until": "string"
    };
    // output_fields = ["passages"]
    this.output_structure = {
      "passages": [{
        "content": "string",
        "document_id": "string",
        "created_at": "string",
        "name": "string",
        "scores": [
          {
            "keyword": "number",
            "semantic": "number"
          },
        ],
        "meta": "object"
      }],
      "text": "string"
    };
  }

  special_validation(payload) {
    // if (!payload.hasOwnProperty('query')) {
    //   if (!payload.hasOwnProperty('filters')) {
    //     return [false, "If query is not provided, please provide 'filters' argument."]
    //   }
    // }

    if (payload.hasOwnProperty('top_n_natural_language')) {
      if (payload.top_n_natural_language > 0 && !payload.hasOwnProperty('query') && !payload.hasOwnProperty("document_ids")) {
        return [false, "If document_ids are not defined: query is required if top_n_natural_language is defined and is greater than 0."]
      }
    }

    return super.special_validation(payload);
  }

}

class DocumentDeleteIO extends ServiceIO {
  constructor() {
    super();
    this.service = ServiceString.DOCUMENTS_DELETE;
    this.required_input_fields = ["document_ids"];
    this.input_structure = {
      "document_ids": ["string", "string"]
    };
    this.output_structure = {
      "success": "boolean"
    };
  }
}

export {
  DocumentsIngestIO,
  DocumentSearchIO,
  DocumentDeleteIO
};
