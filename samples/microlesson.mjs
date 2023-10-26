import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.MicrolessonService({apiKey:my_apiKey});
let response = await service.call(
    "client1234567",
    [
        {
            "source": "Telescope.docx",
            "text": "The James Webb Space Telescope is the largest, most powerful \
            space telescope ever built. It will allow scientists to look at what our \
            universe was like about 200 million years after the Big Bang. The telescope \
            will be able to capture images of some of the first galaxies ever formed. \
            It will also be able to observe objects in our solar system from Mars outward, \
            look inside dust clouds to see where new stars and planets are forming and \
            examine the atmospheres of planets orbiting other stars."
        },
        {
            "source": "dogs.docx",
            "text": "Genetic evidence suggests that dogs descended directly from wolves (Canis) \
            and that the now-extinct wolf lineages that produced dogs branched off from the \
            line that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
            The timing and location of dog domestication is a matter of debate. \
            There is strong genetic evidence, however, that the first domestication events \
            occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
        }
    ]
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "microlesson": {
//       "summary": "The James Webb Space Telescope is the largest, most powerful space telescope ever built and will allow scientists to observe objects in our solar system from Mars outward. Genetic evidence suggests that dogs descended directly from wolves and that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
//       "key_points": [
//         {
//           "key_point": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.",
//           "source": "Telescope.docx"
//         },
//         {
//           "key_point": "Dogs descended directly from wolves  and the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago (dogs.docx)..",
//           "source": "Canis"
//         }
//       ],
//       "learning_objectives": [
//         "Understand the capabilities of the James Webb Space Telescope.",
//         "Understand the history of dog domestication."
//       ],
//       "tasks": [
//         "Research the James Webb Space Telescope and list its capabilities.",
//         "Research the history of dog domestication and list the key points."
//       ]
//     },
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.049,
//       "total_cost": 0.054
//     },
//     "charged_character_count": 980,
//     "unit_price": "0.000050"
// }