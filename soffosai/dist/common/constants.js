"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceString = exports.SOFFOS_SERVICE_URL = exports.SERVICES_LIST = exports.FORM_DATA_REQUIRED = void 0;
var SOFFOS_SERVICE_URL = "https://api.soffos.ai/service/";
// const SOFFOS_SERVICE_URL = "http://localhost:8000/service/";
exports.SOFFOS_SERVICE_URL = SOFFOS_SERVICE_URL;
var SERVICES_LIST = ['answer-scoring', 'audio-converter', 'chatbot/create', 'chatbot', 'chatbot/get', 'chatbot/delete', 'chatbot/sessions/get', 'chatbot/sessions/delete', 'discuss/create', 'discuss', 'discuss/count', 'discuss/delete', 'documents/ingest', 'documents/delete', 'documents/search', 'email-analysis', 'emotion-detection', 'file-converter', 'flashcard-generation', 'intent-classification/confirmation', 'intent-classification', 'language-detection', 'logical-error-detection', 'microlesson', 'ner', 'paraphrase', 'profanity', 'qna-generation', 'question-answering', 'review-tagger', 'search-recommendations', 'sentiment-analysis', 'simplify', 'string-similarity', 'summarization', 'table-generator', 'tag', 'transcript-correction', 'batch-service'];
exports.SERVICES_LIST = SERVICES_LIST;
var ServiceString = {
  /*
  Contains the list of Soffos services as attributes
  */
  ANSWER_SCORING: 'answer-scoring',
  AUDIO_CONVERTER: 'audio-converter',
  CHAT_BOT_CREATE: 'chatbot/create',
  CHAT_BOT: 'chatbot',
  CHAT_BOTS_GET: 'chatbot/get',
  CHAT_BOTS_DELETE: 'chatbot/delete',
  CHAT_BOT_GET_USER_SESSIONS: 'chatbot/sessions/get',
  CHAT_BOT_DELETE_USER_SESSIONS: 'chatbot/sessions/delete',
  LETS_DISCUSS_CREATE: 'discuss/create',
  LETS_DISCUSS: 'discuss',
  LETS_DISCUSS_RETRIEVE: 'discuss/count',
  LETS_DISCUSS_DELETE: 'discuss/delete',
  DOCUMENTS_INGEST: 'documents/ingest',
  DOCUMENTS_DELETE: 'documents/delete',
  DOCUMENTS_SEARCH: 'documents/search',
  EMAIL_ANALYSIS: 'email-analysis',
  EMOTION_DETECTION: 'emotion-detection',
  FILE_CONVERTER: 'file-converter',
  FLASHCARD_GENERATION: 'flashcard-generation',
  INTENT_CLASSIFICATION: 'intent-classification',
  LANGUAGE_DETECTION: 'language-detection',
  LOGICAL_ERROR_DETECTION: 'logical-error-detection',
  MICROLESSON: 'microlesson',
  NER: 'ner',
  PARAPHRASE: 'paraphrase',
  PROFANITY: 'profanity',
  QUESTION_AND_ANSWER_GENERATION: 'qna-generation',
  QUESTION_ANSWERING: 'question-answering',
  REVIEW_TAGGER: 'review-tagger',
  SEARCH_RECOMMENDATION: 'search-recommendations',
  SENTIMENT_ANALYSIS: 'sentiment-analysis',
  SIMPLIFY: 'simplify',
  STRING_SIMILARITY: 'string-similarity',
  SUMMARIZATION: 'summarization',
  TABLE_GENERATOR: 'table-generator',
  TAG_GENERATION: 'tag',
  TRANSCRIPTION_CORRECTION: 'transcript-correction',
  BATCH_SERVICE: 'batch-service'
};
exports.ServiceString = ServiceString;
var FORM_DATA_REQUIRED = [ServiceString.FILE_CONVERTER, ServiceString.AUDIO_CONVERTER];
exports.FORM_DATA_REQUIRED = FORM_DATA_REQUIRED;