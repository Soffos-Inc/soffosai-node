import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.ParaphraseService({apiKey:my_apiKey});
let response = await service.call(
    "sample client id", 
    "Soffosai provides a very easy and economical way to integrate AI into your systems"
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "paraphrase": "Soffosai offers a simple and cost-effective method for incorporating AI into your systems",
//     "simplify": false,
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }