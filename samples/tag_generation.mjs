import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.TagGenerationService({apiKey:my_apiKey});
let response = await service.call(
    "Client 12345",
    "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. \
    It is the first installment in The Matrix film series...",
    ["topic", "domain", "audience", "entity"],
    5
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "tags": {
//       "entity": [
//         {
//           "tag": "The Matrix film series",
//           "score": 0.8959815820439049
//         },
//         {
//           "tag": "The Matrix",
//           "score": 0.8853121672946954
//         },
//         {
//           "tag": "Wachowskis",
//           "score": 0.8181770474784962
//         },
//         {
//           "tag": "science fiction",
//           "score": 0.8022009225526905
//         },
//         {
//           "tag": "1999",
//           "score": 0.7902458979844174
//         }
//       ],
//       "topic": [
//         {
//           "tag": "The Matrix film series",
//           "score": 0.8959815820439049
//         },
//         {
//           "tag": "The Matrix",
//           "score": 0.8853121672946954
//         },
//         {
//           "tag": "Wachowskis",
//           "score": 0.8181770474784962
//         },
//         {
//           "tag": "science fiction",
//           "score": 0.8022009225526905
//         },
//         {
//           "tag": "action film",
//           "score": 0.7878362644378212
//         }
//       ],
//       "domain": [
//         {
//           "tag": "science fiction",
//           "score": 0.8022009225526905
//         },
//         {
//           "tag": "film",
//           "score": 0.799161600775062
//         },
//         {
//           "tag": "action",
//           "score": 0.7521322760333649
//         }
//       ]
//     },
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.00745,
//       "total_cost": 0.01245
//     },
//     "charged_character_count": 149,
//     "unit_price": "0.000050"
// }