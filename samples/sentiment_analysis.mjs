import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.SentimentAnalysisService({apiKey:my_apiKey});
let response = await service.call(
    "client 54321",
    "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
    1, false
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "sentiment_breakdown": [
//       {
//         "text": "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
//         "start": 0,
//         "end": 94,
//         "sentiment": {
//           "negative": 0.0020085338037461042,
//           "neutral": 0.017729898914694786,
//           "positive": 0.9802615642547607
//         }
//       }
//     ],
//     "sentiment_overall": {
//       "negative": 0.0020085338037461042,
//       "neutral": 0.017729898914694786,
//       "positive": 0.9802615642547607
//     },
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.005,
//       "total_cost": 0.01
//     },
//     "charged_character_count": 100,
//     "unit_price": "0.000050"
// }