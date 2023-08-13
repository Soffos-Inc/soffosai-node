import AmbiguityDetectionService from './ambiguity_detection.js';
import AnswerScoringService from './answer_scoring.js';
import ContradictionDetectionService from './contradiction_detection.js';
import { DocumentsIngestService, DocumentsSearchService, DocumentsDeleteService } from './documents.js';
import EmailAnalysisService from './email_analysis.js';
import EmotionDetectionService from './emotion_detection.js';
import FileConverterService from './file_converter.js';
import LanguageDetectionService from './language_detection.js';
import {
    LetsDiscussCreateService,
    LetsDiscussService,
    LetsDiscussRetrieveService,
    LetsDiscussDeleteService
} from './lets_discuss.js';
import LogicalErrorDetectionService from './logical_error_detection.js';
import MicrolessonService from './microlesson.js';
import NamedEntityRecognitionService from './named_entity_recognition.js';
import ParaphraseService from './paraphrase.js';
import ProfanityService from './profanity.js';
import QuestionAndAnswerGenerationService from './qna_generation.js';
import QuestionAnsweringService from './question_answering.js';
import ReviewTaggerService from './review_tagger.js';
import SentimentAnalysisService from './sentiment_analysis.js';
import SimplifyService from './simplify.js';
import SummarizationService from './summarization.js';
import TableGeneratorService from './table_generator.js';
import TagGenerationService from './tag_generation.js';
import TranscriptCorrectionService from './transcript_correction.js';

import { SoffosAIService } from './service.js';
import { inspectArguments  } from '../../utils/inspect_arguments.js';

export {
    AmbiguityDetectionService,
    AnswerScoringService,
    ContradictionDetectionService,
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
    inspectArguments,
};
