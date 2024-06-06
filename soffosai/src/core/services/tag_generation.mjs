import { SoffosAIService } from "./service.mjs";
import { ServiceString } from "../../common/constants.mjs";
import { TagGenerationIO } from "../../common/serviceio_fields/index.mjs";
import { InputConfig } from "./input_config.mjs";

/**
 * This module can generate tags for a piece of text that can aid with content search in
 * certain use-cases. It allows to specify a number of tags to be generated for each of
 * the categories "topic", "domain", "audience", "entity".
 * @class
 * @alias SoffosServices.TagGenerationService
 */
class TagGenerationService extends SoffosAIService {
  constructor(kwargs = {}) {
    const service = ServiceString.TAG_GENERATION;
    super(service, kwargs);
    this._serviceio = new TagGenerationIO();
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Text to extract keywords from.
   * @param {Array.<string>} [types=["topic"]] - List of types of keywords to extract. Supported types:
   * topic: Tags relating to the subject matter of the text.
   * domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". In some cases, domain tags might be similar to topic tags.
   * audience: Tags relating to the type of audience the text is intended for.
   * entity: Entities such as people, places, products, etc. mentioned in the text.
   * @param {number} [n=10] - The number of tags to be generated for each of the specified tag types.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>}
   * tags - dictionary dictionary<br>
   * A dictionary containing the tags grouped by the type of tag. A confidence score is provided also for each tag. <br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   *
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.TagGenerationService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "Client 12345",
   *     "The paper presents the design and implementation of a restaurant recommender system \
   *     using sentiment analysis and deep learning models...",
   *     ["topic", "domain", "audience", "entity"],
   *     5
   * );
   * console.log(JSON.stringify(response, null, 2));
   *
   * // returns
   * // {
   * //     "tags": {
   * //        "entity": [
   * //          {
   * //            "tag": "TripAdvisor",
   * //            "score": 0.95
   * //          },
   * //          {
   * //            "tag": "LSTM",
   * //            "score": 0.9
   * //          },
   * //          {
   * //            "tag": "restaurant recommender system",
   * //            "score": 0.88
   * //          },
   * //          {
   * //            "tag": "user reviews",
   * //            "score": 0.85
   * //          },
   * //          {
   * //            "tag": "deep learning models",
   * //            "score": 0.83
   * //          }
   * //        ],
   * //        "domain": [
   * //          {
   * //            "tag": "sentiment analysis",
   * //            "score": 0.92
   * //          },
   * //          {
   * //            "tag": "information filtering",
   * //            "score": 0.89
   * //          },
   * //          {
   * //            "tag": "recommendation systems",
   * //            "score": 0.87
   * //          },
   * //          {
   * //            "tag": "machine learning",
   * //            "score": 0.84
   * //          },
   * //          {
   * //            "tag": "natural language processing",
   * //            "score": 0.82
   * //          }
   * //        ],
   * //        "topic": [
   * //          {
   * //            "tag": "food",
   * //            "score": 0.91
   * //          },
   * //          {
   * //            "tag": "service",
   * //            "score": 0.9
   * //          },
   * //          {
   * //            "tag": "ambiance",
   * //            "score": 0.89
   * //          },
   * //          {
   * //            "tag": "user preferences",
   * //            "score": 0.88
   * //          },
   * //          {
   * //            "tag": "information overload",
   * //            "score": 0.86
   * //          }
   * //        ],
   * //        "audience": [
   * //          {
   * //            "tag": "restaurant goers",
   * //            "score": 0.93
   * //          },
   * //          {
   * //            "tag": "food enthusiasts",
   * //            "score": 0.91
   * //          },
   * //          {
   * //            "tag": "travelers",
   * //            "score": 0.89
   * //          },
   * //          {
   * //            "tag": "review readers",
   * //            "score": 0.87
   * //          },
   * //          {
   * //            "tag": "tech researchers",
   * //            "score": 0.85
   * //          }
   * //        ]
   * //     },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.00745,
   * //       "total_cost": 0.01245
   * //     },
   * //     "engine": "gpt-4o",
   * //     "charged_character_count": 149,
   * //     "unit_price": "0.000050"
   * // }
   */
  call(user, text, types = ["topic"], n = 10, engine = null) {
    /*
            Note: List of types of keywords to extract. Supported types:

            topic: Tags relating to the subject matter of the text. 
            domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". 
                In some cases, domain tags might be similar to topic tags. 
            audience: Tags relating to the type of audience the text is intended for. 
            entity: Entities such as people, places, products, etc. mentioned in the text.
        */
    for (let i = 0; i < types.length; i++) {
      let _type = types[i];
      if (!["topic", "domain", "audience", "entity"].includes(_type)) {
        throw new Error(
          `${this._service} types argument's elements can only be "topic", "domain", "audience" and/or "entity".`
        );
      }
    }
    let payload = {
      user: user,
      text: text,
      types: types,
      n: n,
    };
    if (engine) payload.engine = engine;
    return super.call(payload);
  }

  /**
   * @param {string} name - Reference name of this Service.
   *  It will be used by the Pipeline to reference this Service.
   * @param {string|InputConfig} text - Text to extract keywords from.
   * @param {string[]|InputConfig} [types=["topic"]] - List of types of keywords to extract. Supported types:
   * topic: Tags relating to the subject matter of the text.
   * domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". In some cases, domain tags might be similar to topic tags.
   * audience: Tags relating to the type of audience the text is intended for.
   * entity: Entities such as people, places, products, etc. mentioned in the text.
   * @param {number|InputConfig} n - The number of tags to be generated for each of the specified tag types.
   * @param {string} [engine=null] - The LLM engine to be used.
   */
  setInputConfigs(name, text, types = ["topic"], n = 10, engine = null) {
    let source = {
      text: text,
      types: types,
      n: n,
    };
    if (engine) source.engine = engine;

    return super.setInputConfigs(name, source);
  }
}

export default TagGenerationService;
