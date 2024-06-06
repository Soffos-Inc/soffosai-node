import { SoffosAIService } from "./service.mjs";
import { ServiceString } from "../../common/constants.mjs";
import { MicrolessonIO } from "../../common/serviceio_fields/index.mjs";
import { InputConfig } from "./input_config.mjs";

/**
 * Identifies illogical statements in text and explains why they are illogical.
 * @class
 * @alias SoffosServices.MicrolessonService
 */
class MicrolessonService extends SoffosAIService {
  constructor(kwargs = {}) {
    const service = ServiceString.MICROLESSON;
    super(service, kwargs);
    this._serviceio = new MicrolessonIO();
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>}
   * microlesson - string<br>
   * A concise, structured microlesson containing a summary, key points, learning objectives and tasks. <br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   *
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.MicrolessonService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client1234567",
   *     [
   *         {
   *             "source": "Text",
   *             "text": "Rehabilitation for Patellofemoral Syndrome 'Chondromalacia patella \'
   *             Brett Sanders, MD Center For Sports Medicine and Orthopaedic 2415 McCallie Ave. \
   *             Chattanooga, TN  (423) 624-2696    When the knee moves, the kneecap (patella) slides \
   *             to remain in contact with the lower end of the thigh bone (trochlear groove of the femur). \
   *             Normally, this motion has almost no friction: the friction between these two joint surfaces \
   *             is approximately 20% the friction of ice sliding against ice. If the patella and /or femur ...",
   *         }
   *     ]
   * );
   * console.log(JSON.stringify(response, null, 2));
   *
   * // returns
   * // {
   * //     "microlesson": {
   * //          "summary": {
   * //            "Introduction": "Patellofemoral Syndrome, also known as Chondromalacia Patella, is a condition characterized by the softening or irregularity of the articular cartilage of the patella and femur, leading to increased friction and pain in the knee joint. This condition is often aggravated by activities that involve deep knee bending, jumping, or heavy load-bearing.",
   * //            "Body": "The symptoms of Patellofemoral Syndrome include pain in the front of the knee, especially when going up and down stairs, sitting for long periods with bent knees, or performing deep knee bends. The condition is exacerbated by activities that place high stress on the patellofemoral joint, such as running, jumping, and certain sports. Treatment primarily involves avoiding activities that compress the patella against the femur, using knee supports, applying ice packs, and taking anti-inflammatory medications.",
   * //            "Conclusion": "Effective management of Patellofemoral Syndrome includes a combination of activity modification, supportive devices, and specific exercises. Exercises that do not cause pain, grinding, or swelling are recommended, such as straight-leg lifts, stationary cycling, and hamstring curls. Stretching exercises for the hamstrings, quadriceps, calves, and lateral hip and thigh are also beneficial. Following a structured exercise program as instructed by a healthcare professional can help alleviate symptoms and improve knee function."
   * //          },
   * //          "key_points": [
   * //            "Patellofemoral Syndrome is caused by the softening or irregularity of the articular cartilage of the patella and femur, leading to increased friction and pain [Text].",
   * //            "Symptoms include pain in the front of the knee, aggravated by activities such as stair climbing, prolonged sitting, and deep knee bends [Text].",
   * //            "Treatment involves avoiding activities that compress the patella against the femur, using knee supports, applying ice packs, and taking anti-inflammatory medications [Text].",
   * //            "Recommended exercises include straight-leg lifts, stationary cycling, and hamstring curls, while avoiding exercises that cause pain, grinding, or swelling [Text].",
   * //            "Stretching exercises for the hamstrings, quadriceps, calves, and lateral hip and thigh are beneficial for managing symptoms [Text]."
   * //          ],
   * //          "learning_objectives": [
   * //            {
   * //              "Learning Objective": "Understand the causes and symptoms of Patellofemoral Syndrome.",
   * //              "Breakdown": "Patellofemoral Syndrome is caused by the softening or irregularity of the articular cartilage of the patella and femur, leading to increased friction and pain. Symptoms include pain in the front of the knee, especially when performing activities that place high stress on the patellofemoral joint.",
   * //              "Tasks": [
   * //                "Identify the primary causes of Patellofemoral Syndrome.",
   * //                "List the common symptoms associated with the condition.",
   * //                "Explain how specific activities exacerbate the symptoms."
   * //              ]
   * //            },
   * //            {
   * //              "Learning Objective": "Learn the treatment strategies for managing Patellofemoral Syndrome.",
   * //              "Breakdown": "Treatment involves avoiding activities that compress the patella against the femur, using knee supports, applying ice packs, and taking anti-inflammatory medications. Understanding these strategies can help in effectively managing the condition.",
   * //              "Tasks": [
   * //                "Describe the activities that should be avoided to prevent aggravation of symptoms.",
   * //                "Explain the role of knee supports and ice packs in treatment.",
   * //                "Discuss the use of anti-inflammatory medications in managing pain."
   * //              ]
   * //            },
   * //            {
   * //              "Learning Objective": "Implement recommended exercises and stretches for Patellofemoral Syndrome.",
   * //              "Breakdown": "Exercises that do not cause pain, grinding, or swelling, such as straight-leg lifts, stationary cycling, and hamstring curls, are recommended. Stretching exercises for the hamstrings, quadriceps, calves, and lateral hip and thigh are also beneficial.",
   * //              "Tasks": [
   * //                "Perform straight-leg lifts and stationary cycling as part of the exercise regimen.",
   * //                "Incorporate hamstring curls into the exercise routine.",
   * //                "Practice stretching exercises for the hamstrings, quadriceps, calves, and lateral hip and thigh."
   * //              ]
   * //            }
   * //          ]
   * //        },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.049,
   * //       "total_cost": 0.054
   * //     },
   * //     "engine": "gpt-4o",
   * //     "charged_character_count": 980,
   * //     "unit_price": "0.000050"
   * // }
   */
  call(user, content = undefined, engine = null) {
    if (content != undefined) {
      this.content = content;
    }
    let payload = {
      user: user,
      content: content,
    };
    payload["content"] = this.content;
    if (engine) payload.engine = engine;
    return super.call(payload);
  }

  /**
   * @param {string} source
   * @param {string} text
   */
  add_content(source, text) {
    this.content.push({
      source: source,
      text: text,
    });
  }

  /**
   * @param {string} name - Reference name of this Service.
   *  It will be used by the Pipeline to reference this Service.
   * @param {object[]|InputConfig} content - A list of dictionaries. Each dictionary should
   * contain the source and text fields, where source is the name of the
   * document/article/website/etc. and text is the actual content. Providing the source names
   * enables the microlesson to include the source for the key points extracted from the content.
   * @param {string} [engine=null] - The LLM engine to be used.
   */
  setInputConfigs(name, content, engine = null) {
    let source = {
      content: content,
    };
    if (engine) source.engine = engine;
    return super.setInputConfigs(name, source);
  }
}

export default MicrolessonService;
