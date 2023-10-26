import AnswerScoringService from './answer_scoring.mjs';
import { DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService } from './documents.mjs';
import EmailAnalysisService from './email_analysis.mjs';
import EmotionDetectionService from './emotion_detection.mjs';
import FileConverterService from './file_converter.mjs';
import LanguageDetectionService from './language_detection.mjs';
import {
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService
} from './lets_discuss.mjs';
import LogicalErrorDetectionService from './logical_error_detection.mjs';
import MicrolessonService from './microlesson.mjs';
import NamedEntityRecognitionService from './named_entity_recognition.mjs';
import ParaphraseService from './paraphrase.mjs';
import ProfanityService from './profanity.mjs';
import QuestionAndAnswerGenerationService from './qna_generation.mjs';
import QuestionAnsweringService from './question_answering.mjs';
import ReviewTaggerService from './review_tagger.mjs';
import SentimentAnalysisService from './sentiment_analysis.mjs';
import SimplifyService from './simplify.mjs';
import SummarizationService from './summarization.mjs';
import TableGeneratorService from './table_generator.mjs';
import TagGenerationService from './tag_generation.mjs';
import TranscriptCorrectionService from './transcript_correction.mjs';

import { SoffosAIService } from './service.mjs';
import {InputConfig, createInputConfig} from './input_config.mjs';

export {
    AnswerScoringService,
    DocumentsIngestService, 
    DocumentsSearchService, 
    DocumentsDeleteService,
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

    SoffosAIService,
    InputConfig,
    createInputConfig
};
