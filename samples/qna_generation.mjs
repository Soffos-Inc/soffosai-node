import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.QuestionAndAnswerGenerationService({apiKey:my_apiKey});
let response = await service.call(
    "me again",
    "AI and specifically NLP is a very powerful component to any application that makes \
    it powerful, interesting and creative. However, implementing the NLP components can \
    sometimes be hard, or very costly in cases where an NLP engineering team has to be \
    hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might \
    be impossible for a developer to keep up with the advancements in terms of work that \
    needs to be done or money that need to be spent to keep their NLP at a state where it \
    can compete with similar apps out there. Here at Soffos we have packaged several \
    high-level functionalities as modules, some of which require multiple types of NLP and \
    complex logic, for developers to use out-of-the-box, as is, removing the need to develop \
    it themselves. Moreover, Soffos continuously updates their modules to match the state of \
    the art. Developers will never need to maintain any AI/NLP related component of their \
    application. All they need is to be creative, come up with ideas, and combine our modules \
    however they desire to come up with amazing intelligent applications."
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "qna_list": [
//       {
//         "question": "What is NLP?",
//         "answer": "NLP stands for Natural Language Processing, which is a branch of Artificial Intelligence that deals with understanding and generating human language.",
//         "chunk_index": 0
//       },
//       {
//         "question": "What makes NLP powerful?",
//         "answer": "NLP is powerful because it can understand and generate human language, which makes it a powerful component to any application.",
//         "chunk_index": 0
//       },
//       {
//         "question": "What can be difficult about implementing NLP components?",
//         "answer": "Implementing NLP components can be difficult because it can be hard to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",
//         "chunk_index": 0
//       },
//       {
//         "question": "What does Soffos offer developers?",
//         "answer": "Soffos offers developers high-level functionalities packaged as modules, which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves.",
//         "chunk_index": 1
//       },
//       {
//         "question": "Does Soffos maintain AI/NLP related components?",
//         "answer": "Yes, Soffos continuously updates their modules to match the state of the art and developers will never need to maintain any 
//   AI/NLP related component of their application.",
//         "chunk_index": 1
//       },
//       {
//         "question": "What is required to create intelligent applications?",
//         "answer": "Creativity, ideas, and the ability to combine modules.",
//         "chunk_index": 2
//       }
//     ],
//     "chunks": [
//       {
//         "text": "AI and specifically NLP is a very powerful component to any application that makes it powerful, interesting and creative. However, implementing the NLP components can sometimes be hard, or very costly in cases where an NLP engineering team has to be hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might be impossible for a developer to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",  
//         "span_start": 0,
//         "span_end": 545,
//         "index": 0
//       },
//       {
//         "text": "Here at Soffos we have packaged several high-level functionalities as modules, some of which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves. Moreover, Soffos continuously updates their modules to match the state of the art. Developers will never need to maintain any AI/NLP related component of their application.",   
//         "span_start": 546,
//         "span_end": 949,
//         "index": 1
//       },
//       {
//         "text": "All they need is to be creative, come up with ideas, and combine our modules however they desire to come up with amazing intelligent applications.",
//         "span_start": 950,
//         "span_end": 1096,
//         "index": 2
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.05945,
//       "total_cost": 0.06445
//     },
//     "charged_character_count": 1189,
//     "unit_price": "0.000050"
// }