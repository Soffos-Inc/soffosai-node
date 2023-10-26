import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.DocumentsSearchService({apiKey:my_apiKey});
let response = await service.call(
    "client 987654321", null, null, ["0d059b3bf66b4ecfa124c175a6d3cd45"]
);
console.log(JSON.stringify(response, null, 2));

// returns this if document_id exists and you own the document
// {
//     "passages": [
//       {
//         "content": "Genetic evidence suggests that dogs descended directly from wolves (Canis) and     that the now-extinct wolf lineages that produced dogs branched off from the line     that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, 
//   however, that the first domestication events occurred     somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
//         "created_at": "2023-09-13T09:38:00.807895",
//         "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
//         "name": "dogs",
//         "scores": [
//           {
//             "keyword": 0.5312093733737563
//           }
//         ],
//         "meta": {}
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0,
//       "character_volume_cost": 0,
//       "total_cost": 0
//     },
//     "charged_character_count": 0,
//     "unit_price": "0.000000"
// }