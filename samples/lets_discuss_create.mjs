import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.LetsDiscussCreateService({apiKey:my_apiKey});
let response = await service.call(
    "me again",
    "The James Webb Space Telescope is the largest, most powerful space telescope ever built. \
    It will allow scientists to look at what our universe was like about 200 million years \
    after the Big Bang. The telescope will be able to capture images of some of the first \
    galaxies ever formed. It will also be able to observe objects in our solar system from \
    Mars outward, look inside dust clouds to see where new stars and planets are forming \
    and examine the atmospheres of planets orbiting other stars."
);
console.log(JSON.stringify(response, null, 2));

// returns the session id of the conversation
// {
//     "session_id": "b658686f8b834b3f86d5218a4549e1c4"
// }