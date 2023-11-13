import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import { ChatBotIO } from '../../common/serviceio_fields/index.mjs';
import { InputConfig } from './input_config.mjs';


/**
 * The Chatbot module enables you to create custom chatbots. You can give it a
 * name, a purpose and connect it to your document repository so that it informs
 * its responses to users from your ingested documents.
 * @class
 * @alias SoffosServices.ChatBotService
 */
class ChatBotService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.CHAT_BOT;
      super(service, kwargs);
      this._serviceio = new ChatBotIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.
     * This string will be used for throttling and profanity tracking.
     * Soffos assumes that the owner of the api is an application (app) and that app has users.
     * Soffos API will accept any string."
     * @param {string} message - The user's message to the chatbot
     * @param {string} chatbot_id - The chatbot's id.
     * @param {string} user_id - A unique user id. It is recommended that your provide a UUID.
     * @param {string} mode - The value can only be one of: open, closed, hybrid.
     * @param {string} [session_id=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {Array} [previous_messages=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {Array} [bot_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {Array} [context_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @returns {Promise<Object>} 
     * response - The agent's response
     * session_name - The session's name which is generated after 3 interactions.
     * messages - A list of the conversation's messages so far.
     * context - The context that was made available to the agent for responding
     * to the user's last message.
     * @example
     * Examples are available at "https://github.com/Soffos-Inc/soffosai-js/tree/master/samples"
     */
    call(user, message, chatbot_id, user_id, mode, session_id=null, previous_messages=null, bot_document_ids=null, context_document_ids=null) {
      let payload = {
        "user": user,
        "message": message,
        "chatbot_id": chatbot_id,
        "user_id": user_id,
        "mode": mode
      };
      if (session_id) payload.session_id = session_id;
      if (previous_messages) payload.previous_messages = previous_messages;
      if (bot_document_ids) payload.bot_document_ids = bot_document_ids;
      if (context_document_ids) payload.context_document_ids = context_document_ids;

      return super.call(payload);
    }


    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} message - The user's message to the chatbot
     * @param {(string|InputConfig)} chatbot_id - The chatbot's id.
     * @param {(string|InputConfig)} user_id - A unique user id. It is recommended that your provide a UUID.
     * @param {(string|InputConfig)} mode - The value can only be one of: open, closed, hybrid.
     * @param {(string|InputConfig)} [session_id=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {(Array|InputConfig)} [previous_messages=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {(Array|InputConfig)} [bot_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {(Array|InputConfig)} [context_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     */
    setInputConfigs(name, message, chatbot_id, user_id, mode, session_id=null, previous_messages=null, bot_document_ids=null, context_document_ids=null) {
      let source = {
        "message": message,
        "chatbot_id": chatbot_id,
        "user_id": user_id,
        "mode": mode
      };
      if (session_id) payload.session_id = session_id;
      if (previous_messages) payload.previous_messages = previous_messages;
      if (bot_document_ids) payload.bot_document_ids = bot_document_ids;
      if (context_document_ids) payload.context_document_ids = context_document_ids;
      return super.setInputConfigs(name, source);
    }
}

export default ChatBotService