import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.DocumentsDeleteService({apiKey:my_apiKey});
let  response = await service.call('client 987654321', ["0d059b3bf66b4ecfa124c175a6d3cd45"]);
console.log(JSON.stringify(response, null, 2));

// returns this if document_id exists and you own the document
// {
//     "success": true
// }