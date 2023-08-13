// Soffos Inc. JavaScript SDK package

import { ServiceString } from './common/constants.js';
import { SoffosAIService } from './core/services/service.js';
import { inspectArguments } from './core/services/index.js';
import { Pipeline as SoffosPipeline } from './core/pipelines/index.js';
import {
    AmbiguityDetectionService,
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService,
    LogicalErrorDetectionService,
    MicrolessonService,
    NamedEntityRecognitionService,
    ParaphraseService,
    ProfanityService,
    QuestionAndAnswerGenerationService,
    QuestionAnsweringService,
    ReviewTaggerService,
    SentimentAnalysisService,
    SimplifyService,
    SummarizationService,
    TableGeneratorService,
    TagGenerationService,
    TranscriptCorrectionService,
} from "./core/services/index.js";

const apiKey = process.env.SOFFOSAI_API_KEY;

import * as SoffosServices from "./core/services/index.js";
import * as SoffosNodes from "./core/nodes/index.js";
import * as SoffosPipelines from "./core/pipelines/index.js";


export {
    apiKey,
    ServiceString,
    SoffosAIService,

    AmbiguityDetectionService, 
    AnswerScoringService, 
    ContradictionDetectionService,
    DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService,
    EmailAnalysisService,
    EmotionDetectionService,
    FileConverterService,
    LanguageDetectionService,
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService,
    LogicalErrorDetectionService,
    MicrolessonService,
    NamedEntityRecognitionService,
    ParaphraseService,
    ProfanityService,
    QuestionAndAnswerGenerationService,
    QuestionAnsweringService,
    ReviewTaggerService,
    SentimentAnalysisService,
    SimplifyService,
    SummarizationService,
    TableGeneratorService,
    TagGenerationService,
    TranscriptCorrectionService,

    inspectArguments,
    SoffosPipeline,
    SoffosServices,
    SoffosNodes,
    SoffosPipelines
};
