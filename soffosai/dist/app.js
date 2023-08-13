"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AmbiguityDetectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.AmbiguityDetectionService;
  }
});
Object.defineProperty(exports, "AnswerScoringService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.AnswerScoringService;
  }
});
Object.defineProperty(exports, "ContradictionDetectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.ContradictionDetectionService;
  }
});
Object.defineProperty(exports, "DocumentsDeleteService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.DocumentsDeleteService;
  }
});
Object.defineProperty(exports, "DocumentsIngestService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.DocumentsIngestService;
  }
});
Object.defineProperty(exports, "DocumentsSearchService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.DocumentsSearchService;
  }
});
Object.defineProperty(exports, "EmailAnalysisService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.EmailAnalysisService;
  }
});
Object.defineProperty(exports, "EmotionDetectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.EmotionDetectionService;
  }
});
Object.defineProperty(exports, "FileConverterService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.FileConverterService;
  }
});
Object.defineProperty(exports, "LanguageDetectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LanguageDetectionService;
  }
});
Object.defineProperty(exports, "LetsDiscussCreateService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LetsDiscussCreateService;
  }
});
Object.defineProperty(exports, "LetsDiscussDeleteService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LetsDiscussDeleteService;
  }
});
Object.defineProperty(exports, "LetsDiscussRetrieveService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LetsDiscussRetrieveService;
  }
});
Object.defineProperty(exports, "LetsDiscussService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LetsDiscussService;
  }
});
Object.defineProperty(exports, "LogicalErrorDetectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.LogicalErrorDetectionService;
  }
});
Object.defineProperty(exports, "MicrolessonService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.MicrolessonService;
  }
});
Object.defineProperty(exports, "NamedEntityRecognitionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.NamedEntityRecognitionService;
  }
});
Object.defineProperty(exports, "ParaphraseService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.ParaphraseService;
  }
});
Object.defineProperty(exports, "ProfanityService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.ProfanityService;
  }
});
Object.defineProperty(exports, "QuestionAndAnswerGenerationService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.QuestionAndAnswerGenerationService;
  }
});
Object.defineProperty(exports, "QuestionAnsweringService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.QuestionAnsweringService;
  }
});
Object.defineProperty(exports, "ReviewTaggerService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.ReviewTaggerService;
  }
});
Object.defineProperty(exports, "SentimentAnalysisService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.SentimentAnalysisService;
  }
});
Object.defineProperty(exports, "ServiceString", {
  enumerable: true,
  get: function get() {
    return _constants.ServiceString;
  }
});
Object.defineProperty(exports, "SimplifyService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.SimplifyService;
  }
});
Object.defineProperty(exports, "SoffosAIService", {
  enumerable: true,
  get: function get() {
    return _service.SoffosAIService;
  }
});
exports.SoffosNodes = void 0;
Object.defineProperty(exports, "SoffosPipeline", {
  enumerable: true,
  get: function get() {
    return SoffosPipelines.Pipeline;
  }
});
exports.SoffosServices = exports.SoffosPipelines = void 0;
Object.defineProperty(exports, "SummarizationService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.SummarizationService;
  }
});
Object.defineProperty(exports, "TableGeneratorService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.TableGeneratorService;
  }
});
Object.defineProperty(exports, "TagGenerationService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.TagGenerationService;
  }
});
Object.defineProperty(exports, "TranscriptCorrectionService", {
  enumerable: true,
  get: function get() {
    return SoffosServices.TranscriptCorrectionService;
  }
});
exports.apiKey = void 0;
Object.defineProperty(exports, "inspectArguments", {
  enumerable: true,
  get: function get() {
    return SoffosServices.inspectArguments;
  }
});
var _constants = require("./common/constants.js");
var _service = require("./core/services/service.js");
var SoffosServices = _interopRequireWildcard(require("./core/services/index.js"));
exports.SoffosServices = SoffosServices;
var SoffosPipelines = _interopRequireWildcard(require("./core/pipelines/index.js"));
exports.SoffosPipelines = SoffosPipelines;
var SoffosNodes = _interopRequireWildcard(require("./core/nodes/index.js"));
exports.SoffosNodes = SoffosNodes;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Soffos Inc. JavaScript SDK package

// const apiKey = process.env.SOFFOSAI_API_KEY;
var apiKey = undefined;
exports.apiKey = apiKey;