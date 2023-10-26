import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.AnswerScoringService({apiKey:my_apiKey});
let response = await service.call(
    "client 12345678",
    "Genetic evidence suggests that dogs descended directly from wolves (Canis) and that the now-extinct wolf lineages that produced dogs branched off from the line that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, however, that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
    "How long ago did dogs first become domesticated?",
    "around 20,000 years ago.",
    "Between 14,000 and 29,000 years ago."
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "score": 0.8,
//     "reasoning": "The user's answer is close to the correct answer, but not exact. The correct answer is between 14,000 and 29,000 years ago, while the user's answer is around 20,000 years ago. Although the user's answer falls within the correct range, it is not as precise as the correct answer.",
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.02855,
//       "total_cost": 0.03355
//     },
//     "charged_character_count": 571,
//     "unit_price": "0.000050"
// }