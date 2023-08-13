import {SoffosPipelines} from "soffosai";
import {SoffosServices} from "soffosai";

const my_apiKey = "Put your API key here";
let response1 = document.getElementById("response");

async function sendText() {
    const text1 = document.getElementById("myText").value;
    let service = new SoffosServices.AmbiguityDetectionService({apiKey: my_apiKey});
    let response = await service.call("client", text1);
    response1.textContent = JSON.stringify(response, null, 2);
}

async function sendFile() {
    const file1 = document.getElementById("myFile").files[0];
    let service = new SoffosServices.FileConverterService({apiKey: my_apiKey});
    let response = await service.call("client_id", file1);
    response1.textContent = JSON.stringify(response, null, 2);
}


let pipe = new SoffosPipelines.FileIngestPipeline({apiKey: my_apiKey});
async function fileIngest() {
    response1.textContent = "";
    const file1 = document.getElementById("myFile").files[0];
    const execution_code = document.getElementById("executionCode").value;
    let response = await pipe.call("client_id", file1, 0, execution_code);
    response1.textContent = JSON.stringify(response, null, 2);
}

async function terminate() {
    const execution_code = document.getElementById("executionCode").value;
    let response = await pipe.terminate(execution_code);
    console.log(JSON.stringify(response, null, 2));
}

// Add event listener
document.querySelector('#sendTextBtn').addEventListener('click', sendText);
document.querySelector('#sendFileBtn').addEventListener('click', sendFile);
document.querySelector('#fileIngestBtn').addEventListener('click', fileIngest);
document.querySelector('#terminatePipe').addEventListener('click', terminate);