import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.SummarizationService({apiKey:my_apiKey});
let response = await service.call(
    "client 23456",
    "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German \
    composer and pianist. ... After some months of bedridden illness, he died in 1827. \
    Beethoven's works remain mainstays of the classical music repertoire.",
    3
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "summary": "Ludwig van Beethoven was a German composer and pianist. He composed many works that remain mainstays of the classical music repertoire. After a period of illness, he died in 1827.",
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.0119,
//       "total_cost": 0.0169
//     },
//     "charged_character_count": 238,
//     "unit_price": "0.000050"
// }