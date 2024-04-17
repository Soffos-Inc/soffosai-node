import { SoffosServices, SoffosConfig } from "soffosai-node";

const my_apiKey = "Token <put your api key here>";
SoffosConfig.apiKey = my_apiKey;
let service = new SoffosServices.ImageGenerationService();
let output = await service.call(
    "user1232",
    "Spiderman is playing chess with Superman",null,"hd"
)
console.log(JSON.stringify(output, null, 2));