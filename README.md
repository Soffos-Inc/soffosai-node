# Soffosai JS
Javascript SDK for Soffos.ai API

## API Keys
- Create an account at [Soffos platform](https://platform.soffos.ai) or [login](https://platform.soffos.ai/login).
- After loggin in, on the left panel, click [Projects](https://platform.soffos.ai/apps-list).
- Create a new project.
- Click on the key icon in the project you created and you will find the API Keys for that project.
  - An API key will automatically be provided for you on Project creation but you can still create more when your account is no longer on trial.
- Protect this API Key as it will incur charges.
- You can also save your API Key into your environment variables with variable name = SOFFOSAI_API_KEY
- To set your api key:
    When you initialize a service, include it on key word arguments:
    ```
    let service = new SoffosServices.AmbiguityDetectionService({apiKey: my_apiKey});
    ```

## Installation
`npm install soffosai`


## SoffosAIService
The SoffosAIService class handles validation and execution of specified endpoint vs payload.
Here is the list of SoffosAIService Subclasses:
```
[
    "AmbiguityDetectionService",
    "AnswerScoringService",
    "ContradictionDetectionService",
    "DocumentsService",
    "DocumentsIngestService", 
    "DocumentsSearchService", 
    "DocumentsDeleteService", 
    "EmailAnalysisService",
    "FileConverterService",
    "LanguageDetectionService",
    "LetsDiscussService",
    "LogicalErrorDetectionService",
    "MicrolessonService",
    "NamedEntityRecognitionService",
    "ParaphraseService",
    "ProfanityService",
    "QuestionAndAnswerGenerationService",
    "QuestionAnsweringService",
    "ReviewTaggerService",
    "SentimentAnalysisService",
    "SimplifyService",
    "SummarizationService",
    "TableGeneratorService",
    "TagGenerationService",
    "TranscriptCorrectionService",
]

```
- Syntax:
```
// Import the Soffos Service you need
import { SoffosServices } from "soffosai";

//Instantiate the SoffosAIService that you need:
let service = new SoffosServices.TagGenerationService({apiKey: my_apiKey});

//Call the service and print the output:
let response = await service.call(
    "client_id",
    "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series...",
    undefined, 5
)
console.log(JSON.stringify(response, null, 2));
```

## Nodes 
Nodes are the configuration of Services for Pipeline use.
In a Soffos Pipeline, you will be declaring multiple sevices working together for a purpose.
The configuration of each service: where to get the input, preprocessing of the input before use, will be declared in a Node.
```
import { SoffosNodes } from "soffosai";

function foo(input) {
    // process input
    return input.split(".")[0]; // random example of process
}

let file_converter = new SoffosNodes.FileConverterNode(
    "file-converter", // reference name of a Node in the Pipeline, you can have the same service in it.
    { // definition of file parameter:
        "source": "user_input", // take from user_input
        "field":"my_file" // the file property/field_name
    } 
);

let summarize = new SoffosNodes.SummarizationNode(
    "summarization", // this Node will be referenced as "summary"
    {
        "source": "file-converter", // get the value of this argument from output of file-converter Node
        "field": "text" // with field name "text" (property)
    }, 
    3 // This is a constant if you don't define a reference to anything.
);

let ingestor = new SoffosNodes.DocumentsIngestNode(
    "ingest", // this node will be referred to as "ingest"
    { // this is the full description where to get the "name" argument for the Node "ingest"
        source: "user_input", // get from the user_input
        field: "my_file", // with "my_file" field
        pre_process: foo // but process it first into foo. name = foo(user_input[field]);
    },
    { //the text argument definition
        source: "summarization", // get from the output of "summarization" Node (name of second Node)
        field: "summary" // with this field name
    }
); 

```
the node's argument, if an object, can only have 3 attributes: "source", "field" and "pre_process".  Other attributes will be ignored.

## Pipeline
- A Soffos Pipeline is a series of Soffos Service working together.
In order to create a Pipeline a service Node should be defined as stated above then supply it to the pipeline's constructor:
```
import { SoffosPipeline } from "soffosai";

const nodes = [file_converter, summarize, ingestor];
const pipe = new SoffosPipeline(nodes, false, {apiKey: my_apiKey});
```
This newly created Pipeline named "pipe" will then upload a file to soffos and extract its text content, summarize it to 3 sentences then save it as a document. The required input is clearly stated in the defined Nodes because it has "user_input" in them. Thus to run this Pipeline:
```
// provided you have a <input type="file" id="file">
let the_file = document.getElementById("file").files[0];
let sample_user_input = {
    "user": "your_client's_id", // always required on services and pipelines
    "my_file": the_file
}
let response = await pipe.run(sample_user_input);
console.log(JSON.stringify(response, null, 2));
```

### Best way to declare a Pipeline
To make your Pipeline more maintainable and easy to use, create a subclass:
```
import { SoffosPipeline } from "soffosai";
import { SoffosNodes } from "soffosai";
import {inspectArguments} from 'soffosai';


function get_filename(file) {
    return file.name.split('.')[0];
}


/**
 * Given a file upload the file to Soffos and get its reference document_id.
 */
export class FileIngestPipeline extends SoffosPipeline {
    constructor(kwargs) {
        const file_converter = new SoffosNodes.FileConverterNode(
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
        const document_ingest = new SoffosNodes.DocumentsIngestNode(
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

    /*
     * Create your own "call" function so you can create JSDocs and arrange your output data
     * @param {string} user 
     * @param {string} file 
     * @param {number} normalize 
     * @returns {object}
     */
    async call(user, file, normalize) {
        let payload = inspectArguments(this.call, user, file, normalize);
        const output = await this.run(payload);
        let output_data = {
            document_id: output.doc_ingest.document_id,
            total_call_cost: output.total_call_cost
        };
        return output_data;
    }
}

```
When you do this, you can easily reuse your pipeline like this:
```
import { FileIngestPipeline } from "./your_directory/your_file.js";

let pipe = new FileIngestPipeline({apiKey: my_apiKey});

// provided you have a <input type="file" id="file">
let the_file = document.getElementById("file").files[0];
let result = await pipe.call("client_id", the_file, 0);
console.log(JSON.stringify(result, null, 2));

// on your successive calls:
result = await pipe.call("client2", other_file, 0);
console.log(JSON.stringify(result, null, 2));
```

### One more way to define a Pipeline:
```
import { SoffosPipeline } from "soffosai"; 
import { SoffosNodes } from "soffosai";


function get_content(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}


const AskFromDocument = new SoffosPipeline(
    [
        new SoffosNodes.DocumentsSearchNode(
            "search", null, null, {"source": "user_input", "field": "doc_ids"}
        ),
        new SoffosNodes.QuestionAnsweringNode(
            "qa",
            {"source": "user_input", "field": "question"},
            {"source": "search", "field": "passages", "pre_process": get_content}
        )
    ],
    false,
    {apiKey: my_apiKey}
);

let input = {
    "user": "client_id",
    "doc_ids": ["1d77babf8164427cad8276ba944e6cbc"],
    "question": "who is Neo?"
}
let result2 = await AskFromDocument.run(input);
console.log(JSON.stringify(result2, null, 2));
```

### Use Defaults
When you are well versed by the output of the Nodes, you can create a pipeline without defining all the required arguments of each Node if you know that the previous Nodes or user_input will provide it. If you know this, just put "default" in the argument. Take note that the user_input or previous Nodes' outputs should contain the same property / fieldname. There are special cases where the previous Node's output has "document_id" and the current Node requires "document_ids"; this is already handled and can be defaulted. The same with required "document_text" and available "text". Also required "context" and available "text".

Example:
```
import { SoffosPipeline } from "soffosai"; 
import { SoffosNodes } from "soffosai";


function get_content(value) {
    let combined_text = "";
    for (let item of value) {
        combined_text += item.content;
    }
    return combined_text
}


const AskFromDocument = new SoffosPipeline(
    [
        new SoffosNodes.DocumentsSearchNode(
            "search", 
            null, 
            null, 
            "default" // automatically get this value from the output of previous Nodes or user_input with
                      // the same property / fieldname.
        ),
        new SoffosNodes.QuestionAnsweringNode(
            "qa",
            "default", // take the value for this argument from previous Nodes or from the user_input
            {"source": "search", "field": "passages", "pre_process": get_content}
        )
    ],
    true, // this is the **use_defaults** argument. defaults to **false** if not provided. 
         // You can only use the "**default**" keyword on arguments to mean "default this value" if this 
         //is **true**.  if use_defaults is false, it will be taken as literal string "default".
    {apiKey: my_apiKey}
);

let input = {
    "user": "client_id",
    "document_ids": ["1d77babf8164427cad8276ba944e6cbc"],
    "question": "who is Neo?"
}
let result2 = await AskFromDocument.run(input);
console.log(JSON.stringify(result2, null, 2));
```

### Predefined Pipelines
- Soffos will add more predefined pipelines for you. 
You can use them like this:
```
import { SoffosPipelines } from "soffosai";

let pipe = new SoffosPipelines.FileIngestPipeline({apiKey: my_apiKey});
result = await pipe.call("client_id2", the_file)
console.log(JSON.stringify(result, null, 2));
```

Take note of the difference in names:
- SoffosPipeline is the pipeline Superclass while:
- SoffosPipelines is the namespace for all Soffos Pipelines including SoffosPipeline as SoffosPipelines.Pipeline.
