import { SoffosPipelines, SoffosServices } from "./src/app";

declare module 'soffosai' {
    export const apiKey: string;
    export const ServiceString: string;

    /**
     *  A SoffosAIService that finds statements or sentences in text that are not coherent,
     *  or can be interpreted in multiple ways while also taking in account the surrounding context.
     */
    export class AmbiguityDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<object>;
    }

    /** 
     * This module will provide the user an answer based on the provided context, 
     * the question and, optionally, the expected correct answer..
    */
    export class AnswerScoringService {
        constructor(kwargs?: {});
        call(user: string, context:string, question:string, user_answer:string, answer?:string): Promise<object>;
    }

    /**
     * This module finds conflicting information in a body of text and returns a 
     * description of the contradiction along with the relevant sentences and their 
     * offsets within the original text.
     */
    export class ContradictionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Documents Ingest module enables ingestion of content into Soffos.
     * Takes in the text and gives the document_id to reference the text in Soffos database.
     */
    export class DocumentsIngestService {
        constructor(kwargs?: {});
        call(user: string, document_name:string, text?:string, tagged_elements?:Array<string>, meta?:object): Promise<object>;
    }

    /**
     * The Documents module enables search of ingested contents from Soffos.
     */
    export class DocumentsSearchService {
        constructor(kwargs?: {});
        call(user: string, query?:object, filters?:object, document_ids?:Array<string>, top_n_keywords?:number,
            top_n_natural_language?:number, date_from?:string, date_until?:string): Promise<object>;
    }

    /**
     * The Documents module enables deletion of ingested contents from Soffos.
     */
    export class DocumentsDeleteService {
        constructor(kwargs?: {});
        call(user: string, text: string, document_ids:Array<string>): Promise<object>;
    }

    /**
     * This module extracts key information from the body of an e-mail.
     */
     export class EmailAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * Detect selected emotions within the provided text. The original text is chunked to
     * passages of a specified sentence length. Smaller chunks yield better accuracy.
     */
    export class EmotionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text:string, sentence_split?:number, sentence_overlap?:boolean, emotion_choices?:string[]): Promise<object>;
    }

    /**
     * The File Converter extracts text from various types of files.
     */
    export class FileConverterService {
        constructor(kwargs?: {});
        call(user: string, file:Blob, normalize?:number): Promise<object>;
    }

    /**
     * The Language Detection module detects the dominant language in the provided text.
     */
    export class LanguageDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for creating a session.
     */
    export class LetsDiscussCreateService {
        constructor(kwargs?: {});
        call(user: string, context: string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss main service, continues thread of conversation.
     */
    export class LetsDiscussService {
        constructor(kwargs?: {});
        call(user: string, session_id:string, query:string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for retrieving sessions.
     */
    export class LetsDiscussRetrieveService {
        constructor(kwargs?: {});
        call(user: string, return_messages:boolean): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for deleting sessions.
     */
    export class LetsDiscussDeleteService {
        constructor(kwargs?: {});
        call(user: string, session_ids: string[]): Promise<object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class LogicalErrorDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class MicrolessonService {
        constructor(kwargs?: {});
        call(user: string, content: object[]): Promise<object>;
        add_content(source: string, context: string): null;
    }

    /**
     * Identifies named entities in text. It supports custom labels.
     * This module is extremely versatile as the labels can be defined by the user.
     */
    export class NamedEntityRecognitionService {
        constructor(kwargs?: {});
        call(user: string, text: string, labels:object): Promise<object>;
        add_label(label:string, definition:string): null;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
     */
    export class ParaphraseService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * This module detects profanities and the level of offensiveness in a body of text. 
     */
    export class ProfanityService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Q&A Generation module splits large documents in chunks from which it generates multiple 
     * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
     * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
     * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
     * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
     * This gives a lot of flexibility to cater to your specific use case.
     */
    export class QuestionAndAnswerGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
    }

    /**
     * This module is a combination of various sub-modules that enable users to get accurate answers on 
     * questions posed on a large amount of content. It includes basic intent recognition capabilities 
     * to enable appropriate responses to incorrect or profane language, or typical personal questions 
     * like "How are you?" and greetings
     */
    export class QuestionAnsweringService {
        constructor(kwargs?: {});
        call(user: string, question:string, document_text?:string, document_ids?:string[], 
            check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object): Promise<object>;
    }

    /**
     * This module extracts key information from negative product reviews. It attempts to find
     * the referred object, it's fault and an action/verb that is associated with it. If any 
     * of the information is not present, it returns "n/a". This is useful for organizations who 
     * want to analyze product reviews in order to identify and prioritize the most important issues.
     */
    export class ReviewTaggerService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * This module processes the text to measure whether it is negative, positive or neutral.
     * The text is processed in segments of user-defined length and it provides scores for each 
     * segment as well as the overall score of the whole text.
     */
    export class SentimentAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text.
     */
    export class SimplifyService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The summarization module utilizes Natural Language Generation (NLG) to generate an 
     * abstractive summary of a specified length. In contrast to extractive summarization methods, 
     * which simply calculate the centrality of sentences or passages in the original text and 
     * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
     * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
     * but a combination of all key points formulated as a new text.
     */
    export class SummarizationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sent_length:number): Promise<object>;
    }

    /**
     * The table generator module enables applications to extract numerical and statistical 
     * data from raw text in a tabular format. For use-cases where data has to be manually 
     * reviewed and cross-referenced, this module can bring enormous value.
     */
    export class TableGeneratorService {
        constructor(kwargs?: {});
        call(user: string, text: string, table_format?:string): Promise<object>;
    }

    /**
     * This module can generate tags for a piece of text that can aid with content search in
     * certain use-cases. It allows to specify a number of tags to be generated for each of 
     * the categories "topic", "domain", "audience", "entity".
     */
    export class TagGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, types?:string[], n?:number): Promise<object>;
    }

    /**
     * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
     * It can handle cases where STT produced the wrong word or phrase by taking into account the 
     * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
     * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
     */
    export class TranscriptCorrectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * A controller for consuming multiple Services called stages.
     * It validates all inputs of all stages before sending the first Soffos API request to ensure
     * that the Pipeline will not waste credits.
     * 
     * ** use_defaults=True means that stages will take input from the previous stages' 
     * output of the same field name prioritizing the latest stage's output. 
     * If the previous stages does not have it, it will take from the
     * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
     * of the require_one_of_choices fields.
     */
    export class SoffosPipeline {
        /**
         * @param {object[]} nodes 
         * @param {boolean} [use_defaults=false] 
         * @param {Object} [kwargs={}]
         */
        constructor (nodes:object, use_defaults?:boolean, kwargs?:object);

        /**
         * Run the Pipeline
         * @param {object} user_input 
         * @returns {Promise}
         */
        run(user_input:object): Promise<object>;

        /**
         * Validates the Pipeline construction vs the user_input before sending the first API call
         * Throws errors when not valid.
         * @param {object} user_input 
         * @param {Node} stages 
         * @returns {boolean}
         */
        validate_pipeline(user_input:object, stages:Node[]): boolean;

        /**
         * Adds a node at the end of the node list/stages.
         * @param {Node} node 
         */
        add_node(node:Node): null;

        /**
         * 
         * @param {Node[]} stages
         * @param {object} user_input
         * @returns {Node[]}
         */
        setDefaults(stages:Node[], user_input:object): Node[];
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */

    export namespace SoffosServices {
        /**
         *  A SoffosAIService that finds statements or sentences in text that are not coherent,
         *  or can be interpreted in multiple ways while also taking in account the surrounding context.
         */
        export class AmbiguityDetectionService {
            constructor(kwargs?: {});
            call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<object>;
        }

        /** 
         * This module will provide the user an answer based on the provided context, 
         * the question and, optionally, the expected correct answer..
        */
        export class AnswerScoringService {
            constructor(kwargs?: {});
            call(user: string, context:string, question:string, user_answer:string, answer?:string): Promise<object>;
        }

        /**
         * This module finds conflicting information in a body of text and returns a 
         * description of the contradiction along with the relevant sentences and their 
         * offsets within the original text.
         */
        export class ContradictionDetectionService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Documents Ingest module enables ingestion of content into Soffos.
         * Takes in the text and gives the document_id to reference the text in Soffos database.
         */
        export class DocumentsIngestService {
            constructor(kwargs?: {});
            call(user: string, document_name:string, text?:string, tagged_elements?:Array<string>, meta?:object): Promise<object>;
        }

        /**
         * The Documents module enables search of ingested contents from Soffos.
         */
        export class DocumentsSearchService {
            constructor(kwargs?: {});
            call(user: string, query?:object, filters?:object, document_ids?:Array<string>, top_n_keywords?:number,
                top_n_natural_language?:number, date_from?:string, date_until?:string): Promise<object>;
        }

        /**
         * The Documents module enables deletion of ingested contents from Soffos.
         */
        export class DocumentsDeleteService {
            constructor(kwargs?: {});
            call(user: string, text: string, document_ids:Array<string>): Promise<object>;
        }

        /**
         * This module extracts key information from the body of an e-mail.
         */
        export class EmailAnalysisService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * Detect selected emotions within the provided text. The original text is chunked to
         * passages of a specified sentence length. Smaller chunks yield better accuracy.
         */
        export class EmotionDetectionService {
            constructor(kwargs?: {});
            call(user: string, text:string, sentence_split?:number, sentence_overlap?:boolean, emotion_choices?:string[]): Promise<object>;
        }

        /**
         * The File Converter extracts text from various types of files.
         */
        export class FileConverterService {
            constructor(kwargs?: {});
            call(user: string, file:Blob, normalize?:number): Promise<object>;
        }

        /**
         * The Language Detection module detects the dominant language in the provided text.
         */
        export class LanguageDetectionService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for creating a session.
         */
        export class LetsDiscussCreateService {
            constructor(kwargs?: {});
            call(user: string, context: string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss main service, continues thread of conversation.
         */
        export class LetsDiscussService {
            constructor(kwargs?: {});
            call(user: string, session_id:string, query:string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for retrieving sessions.
         */
        export class LetsDiscussRetrieveService {
            constructor(kwargs?: {});
            call(user: string, return_messages:boolean): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for deleting sessions.
         */
        export class LetsDiscussDeleteService {
            constructor(kwargs?: {});
            call(user: string, session_ids: string[]): Promise<object>;
        }

        /**
         * Identifies illogical statements in text and explains why they are illogical.
         */
        export class LogicalErrorDetectionService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * Identifies illogical statements in text and explains why they are illogical.
         */
        export class MicrolessonService {
            constructor(kwargs?: {});
            call(user: string, content: object[]): Promise<object>;
            add_content(source: string, context: string): null;
        }

        /**
         * Identifies named entities in text. It supports custom labels.
         * This module is extremely versatile as the labels can be defined by the user.
         */
        export class NamedEntityRecognitionService {
            constructor(kwargs?: {});
            call(user: string, text: string, labels:object): Promise<object>;
            add_label(label:string, definition:string): null;
        }

        /**
         * Paraphrase and Simplify are available as two different flavors of the same module. 
         * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
         * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
         */
        export class ParaphraseService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * This module detects profanities and the level of offensiveness in a body of text. 
         */
        export class ProfanityService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Q&A Generation module splits large documents in chunks from which it generates multiple 
         * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
         * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
         * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
         * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
         * This gives a lot of flexibility to cater to your specific use case.
         */
        export class QuestionAndAnswerGenerationService {
            constructor(kwargs?: {});
            call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
        }

        /**
         * This module is a combination of various sub-modules that enable users to get accurate answers on 
         * questions posed on a large amount of content. It includes basic intent recognition capabilities 
         * to enable appropriate responses to incorrect or profane language, or typical personal questions 
         * like "How are you?" and greetings
         */
        export class QuestionAnsweringService {
            constructor(kwargs?: {});
            call(user: string, question:string, document_text?:string, document_ids?:string[], 
                check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object): Promise<object>;
        }

        /**
         * This module extracts key information from negative product reviews. It attempts to find
         * the referred object, it's fault and an action/verb that is associated with it. If any 
         * of the information is not present, it returns "n/a". This is useful for organizations who 
         * want to analyze product reviews in order to identify and prioritize the most important issues.
         */
        export class ReviewTaggerService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * This module processes the text to measure whether it is negative, positive or neutral.
         * The text is processed in segments of user-defined length and it provides scores for each 
         * segment as well as the overall score of the whole text.
         */
        export class SentimentAnalysisService {
            constructor(kwargs?: {});
            call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
        }

        /**
         * Paraphrase and Simplify are available as two different flavors of the same module. 
         * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
         * the Simplify module outputs more commonly used words without altering the meaning of the original text.
         */
        export class SimplifyService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The summarization module utilizes Natural Language Generation (NLG) to generate an 
         * abstractive summary of a specified length. In contrast to extractive summarization methods, 
         * which simply calculate the centrality of sentences or passages in the original text and 
         * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
         * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
         * but a combination of all key points formulated as a new text.
         */
        export class SummarizationService {
            constructor(kwargs?: {});
            call(user: string, text: string, sent_length:number): Promise<object>;
        }

        /**
         * The table generator module enables applications to extract numerical and statistical 
         * data from raw text in a tabular format. For use-cases where data has to be manually 
         * reviewed and cross-referenced, this module can bring enormous value.
         */
        export class TableGeneratorService {
            constructor(kwargs?: {});
            call(user: string, text: string, table_format?:string): Promise<object>;
        }

        /**
         * This module can generate tags for a piece of text that can aid with content search in
         * certain use-cases. It allows to specify a number of tags to be generated for each of 
         * the categories "topic", "domain", "audience", "entity".
         */
        export class TagGenerationService {
            constructor(kwargs?: {});
            call(user: string, text: string, types?:string[], n?:number): Promise<object>;
        }

        /**
         * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
         * It can handle cases where STT produced the wrong word or phrase by taking into account the 
         * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
         * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
         */
        export class TranscriptCorrectionService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */

    export namespace SoffosNodes {
        /**
         * A service configuration for Ambiguity Detection Service for Pipeline use.
         */
        export class AmbiguityDetectionNode{
            /**
             * @param {string} name 
             * @param {string} text 
             * @param {number} [sentence_split = 4]
             * @param {boolean} [sentence_overlap = false]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:boolean);
        }
        
        /**
         * A service configuration for Answer Scoring Service for Pipeline use.
         */
        export class AnswerScoringNode{
            /**
             * @param {string} name 
             * @param {string} context
             * @param {string} question
             * @param {string} user_answer
             * @param {string} [answer=null]
             */
            constructor(name:string, context:string, question:string, user_answer:string, answer?:string);
        }
        
        /**
         * A service configuration for Ambiguity Detection Service for Pipeline use.
         */
        export class ContradictionDetectionNode{
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for Documents Ingest Service for Pipeline use.
         */
        export class DocumentsIngestNode {
            /**
             * @param {string} name
             * @param {string} document_name
             * @param {string} [text=null]
             * @param {object} [tagged_elements=null] 
             * @param {object} [meta=null] 
             */
            constructor(name:string, document_name:string, text?:string, tagged_elements?:object, meta?:object);
        }
        
        /**
         * A service configuration for EmailAnalysisService for Pipeline use.
         */
        export class EmailAnalysisNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for EmotionDetectionService for Pipeline use.
         */
        export class EmotionDetectionNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {number} sentence_split
             * @param {boolean} sentence_overlap
             * @param {string[]} [emotion_choices = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"]]
             */
            constructor(name:string, text:string, sentence_split:number, sentence_overlap:boolean, emotion_choices?:string[]);
        }
        
        /**
         * A service configuration for FileConverterService for Pipeline use.
         */
        export class FileConverterNode {
            /**
             * @param {string} name
             * @param {Blob} file
             * @param {number} normalize
             */
            constructor(name:string, file:Blob, normalize:number);
        }
        
        /**
         * A service configuration for LanguageDetectionService for Pipeline use.
         */
        export class LanguageDetectionNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for LetsDiscussCreateService for Pipeline use.
         */
        export class LetsDiscussCreateNode {
            /**
             * @param {string} name
             * @param {string} context
             */
            constructor(name:string, context:string);
        }
        
        /**
         * A service configuration for LogicalErrorDetectionService for Pipeline use.
         */
        export class LogicalErrorDetectionNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for MicrolessonService for Pipeline use.
         */
        export class MicrolessonNode {
            /**
             * @param {string} name
             * @param {object[]} content
             */
            constructor(name:string, content:object[]);
        }
        
        /**
         * A service configuration for NamedEntityRecognitionService for Pipeline use.
         */
        export class NamedEntityRecognitionNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {object} labels
             */
            constructor(name:string, text:string, labels:any);
        }
        
        /**
         * A service configuration for ParaphraseService for Pipeline use.
         */
        export class ParaphraseNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for ProfanityService for Pipeline use.
         */
        export class ProfanityNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for QuestionAndAnswerGenerationService for Pipeline use.
         */
        export class QuestionAndAnswerGenerationNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {number} [sentence_split=3]
             * @param {string} [sentence_overlap=false]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:string);
        }
        
        /**
         * A service configuration for QuestionAnsweringService for Pipeline use.
         */
        export class QuestionAnsweringNode {
            /**
             * @param {string} name
             * @param {string} question
             * @param {string} document_text
             * @param {string[]} document_ids
             * @param {boolean} check_ambiguity
             * @param {boolean} check_query_type
             * @param {boolean} generic_response
             * @param {object} meta
             */
            constructor(name: string, question: string, document_text?: string, document_ids?: string[], 
                check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object);
        }
        
        /**
         * A service configuration for ReviewTaggerService for Pipeline use.
         */
        export class ReviewTaggerNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for SentimentAnalysisService for Pipeline use.
         */
        export class SentimentAnalysisNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {number} [sentence_split=4]
             * @param {string} [sentence_overlap=false]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:string);
        }
        
        /**
         * A service configuration for SimplifyService for Pipeline use.
         */
        export class SimplifyNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for SummarizationService for Pipeline use.
         */
        export class SummarizationNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {number} sent_length
             */
            constructor(name:string, text:string, sent_length:number);
        }
        
        /**
         * A service configuration for TableGeneratorService for Pipeline use.
         */
        export class TableGeneratorNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {string} [table_format='markdown']
             */
            constructor(name:string, text:string, table_format:string);
        }
        
        /**
         * A service configuration for TagGenerationService for Pipeline use.
         */
        export class TagGenerationNode {
            /**
             * @param {string} name
             * @param {string} text
             * @param {object[]} [types=["topic"]]
             * @param {number} n
             */
            constructor(name:string, text:string, types:object[], n:number);
        }
        
        /**
         * A service configuration for TranscriptCorrectionService for Pipeline use.
         */
        export class TranscriptCorrectionNode {
            /**
             * @param {string} name
             * @param {string} text
             */
            constructor(name:string, text:string);
        }
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */
    
    export namespace SoffosPipelines {
        /**
         * A controller for consuming multiple Services called stages.
         * It validates all inputs of all stages before sending the first Soffos API request to ensure
         * that the Pipeline will not waste credits.
         * 
         * ** use_defaults=True means that stages will take input from the previous stages' 
         * output of the same field name prioritizing the latest stage's output. 
         * If the previous stages does not have it, it will take from the
         * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
         * of the require_one_of_choices fields.
         */
        export class SoffosPipeline {
            /**
             * @param {object[]} nodes 
             * @param {boolean} [use_defaults=false] 
             * @param {Object} [kwargs={}]
             */
            constructor (nodes:object, use_defaults?:boolean, kwargs?:object);

            /**
             * Run the Pipeline
             * @param {object} user_input 
             * @returns {Promise}
             */
            run(user_input:object): Promise<object>;

            /**
             * Validates the Pipeline construction vs the user_input before sending the first API call
             * Throws errors when not valid.
             * @param {object} user_input 
             * @param {Node} stages 
             * @returns {boolean}
             */
            validate_pipeline(user_input:object, stages:Node[]): boolean;

            /**
             * Adds a node at the end of the node list/stages.
             * @param {Node} node 
             */
            add_node(node:Node): null;

            /**
             * 
             * @param {Node[]} stages
             * @param {object} user_input
             * @returns {Node[]}
             */
            setDefaults(stages:Node[], user_input:object): Node[];
        }

        /**
         * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
         */
        export class AskADocumentPipeline{
            /**
             * Call the pipeline
             * @param {string} user 
             * @param {string[]} doc_ids 
             * @param {string} question 
             * @returns {object}
             */
            call(user:string, doc_ids:string[], question:string): object;
        }

        /**
         * Given a file path, upload the file to Soffos and get its reference document_id.
         */
        export class FileIngestPipeline{
            /**
             * 
             * @param {string} user 
             * @param {Blob} file 
             * @param {number} [normalize=0]
             * @returns {object}
             */
            call(user:string, file:Blob, normalize?:number): object;
        }
    }
}

export {};