import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.LetsDiscussService({apiKey:my_apiKey});
let response = await service.call(
    "me again",
    "b658686f8b834b3f86d5218a4549e1c4",
    "What is the purpose of observing this?"
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
//   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
//     "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
//     "messages": [
//       {
//         "text": "Where can I see the photos taken by this telescope?",
//         "source": "user"
//       },
//       {
//         "text": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
//         "source": "soffos"
//       },
//       {
//         "text": "What is the purpose of observing this?",
//         "source": "user"
//       },
//       {
//         "text": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
//   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
//         "source": "soffos"
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.07085,
//       "total_cost": 0.07585
//     },
//     "charged_character_count": 1417,
//     "unit_price": "0.000050"
// }