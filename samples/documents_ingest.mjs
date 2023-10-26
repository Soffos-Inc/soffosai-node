import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";

const service = new SoffosServices.DocumentsIngestService({apiKey:my_apiKey});
let response = await service.call(
    "client 987654321",
    'dogs',
    "Genetic evidence suggests that dogs descended directly from wolves (Canis) and \
    that the now-extinct wolf lineages that produced dogs branched off from the line \
    that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
    The timing and location of dog domestication is a matter of debate. \
    There is strong genetic evidence, however, that the first domestication events occurred \
    somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
//     "success": true,
//     "filtered": {
//       "passages": [],
//       "reason": "Unable to process due to bad structure."
//     },
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.02415,
//       "total_cost": 0.02915
//     },
//     "charged_character_count": 483,
//     "unit_price": "0.000050"
// }