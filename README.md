# Welcome to the Soffos Platform SDK
At Soffos Inc., our specialty is helping organizations create pioneering apps with conversational artificial intelligence (CAI) and natural language processing (NLP) at their core.

NLP and conversational AI are at the heart of everything Soffos does. Using Soffos’ technology, we offer a suite of unique application programming interfaces (APIs) so businesses can choose the natural language and generative AI functionalities they would like to include in any kind of application.

What sets Soffos apart is we’ve taken the most advanced technology, enhanced it with our own R&D, and made it easy to use and accessible to everyone.

Our solution provides you with the ‘building blocks’ and core technologies required to build countless novel NLP applications, with minimal coding, from learning and assessment tools to knowledge management platforms and beyond. The opportunities with Soffos Platform are infinite.

Sign up for a [Free Trial](https://platform.soffos.ai) and start building your first generative AI application today!

Join our Discord channel: [SoffosAI](https://discord.gg/Q2yTEuFG2B)

# Soffosai Node JS (Alpha)
Javascript SDK for Soffos.ai API
Note that this is in Alpha. If you do not need file management, please use the Soffosai JS package for now:
`npm install soffosai`

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
    OR
    set it in your environment variable with variable name = SOFFOSAI_API_KEY

## Installation
`npm install soffosai-node`


## SoffosAIService
The SoffosAIService class handles validation and execution of specified endpoint vs payload.
Here is the list of SoffosAIService Subclasses:
```
[
    "AnswerScoringService",
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

// if you set your environment variables no need to put keyword argument apiKey:
// let service = new SoffosServices.TagGenerationService();

//Call the service and print the output:
let response = await service.call(
    "client_id",
    "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series...",
    undefined, 5
)
console.log(JSON.stringify(response, null, 2));
```

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
