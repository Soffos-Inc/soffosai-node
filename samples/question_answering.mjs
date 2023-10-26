import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.QuestionAnsweringService({apiKey:my_apiKey});
let response = await service.call(
    "client12345",
    "How would Soffos SDK help me as a programmer?",
    "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications. \
    With reduced code requirements, you can seamlessly integrate powerful AI functionalities \
    like microlessons, named entity recognition, and more."
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "message_id": "43f354b0ef1040a7894cfd2260652d9e",
//     "answer": "The Soffos SDK would help you as a programmer by simplifying the process of plugging Soffos APIs into your applications and reducing code requirements. This would allow you to seamlessly integrate powerful AI functionalities like microlessons and named entity recognition.",
//     "context": "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications.     With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more.",
//     "valid_query": true,
//     "no_answer": false,
//     "highlights": [
//       {
//         "span": [
//           90,
//           237
//         ],
//         "sentence": "With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more."
//       }
//     ],
//     "passages": [],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.0141,
//       "total_cost": 0.0191
//     },
//     "charged_character_count": 282,
//     "unit_price": "0.000050"
// }
  