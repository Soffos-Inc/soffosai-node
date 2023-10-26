import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.ReviewTaggerService({apiKey:my_apiKey});
let response = await service.call(
    "client 12345",
    "This oven has been a complete disaster from the start. After about 2 weeks of use, \
    the oven and broiler burners would turn off suddenly after being on for only 5 seconds. \
    This has been an ongoing issue for months, and it still does not work."
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "object": "oven and broiler burners",
//     "action": "turn off suddenly",
//     "fault": "not working",
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.01245,
//       "total_cost": 0.01745
//     },
//     "charged_character_count": 249,
//     "unit_price": "0.000050"
// }