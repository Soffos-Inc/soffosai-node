import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.LogicalErrorDetectionService({apiKey:my_apiKey});
let response = await service.call(
    "client12345",
    "Nobody has found evidence that UFOs don't exist, therefore they must exist. \
    Many people are saying that voter fraud is real, therefore it must be real."
)
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "logical_errors": [
//       {
//         "text": "Nobody has found evidence that UFOs don't exist, therefore they must exist.",
//         "start": 0,
//         "end": 75,
//         "explanation": "This sentence is not logical because the lack of evidence does not necessarily mean that something must exist. The absence of evidence does not prove the existence of something."
//       },
//       {
//         "text": "Many people are saying that voter fraud is real, therefore it must be real.",
//         "start": 80,
//         "end": 155,
//         "explanation": "This sentence is not logical because it assumes that the truth of a statement is determined by the number of people who believe it, which is not necessarily the case."
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.01715,
//       "total_cost": 0.02215
//     },
//     "charged_character_count": 343,
//     "unit_price": "0.000050"
// }