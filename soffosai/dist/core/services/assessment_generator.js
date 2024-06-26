"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
var _input_config = require("./input_config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Generates Assesments from a given context
 * ----------------------------------------------------- 
 * Accepts a context and
 * generates Assessments of types/modes: * Multiple Choice, * True or False, *
 * Fill in the Blanks * Short Answer
 * @class
 * @alias SoffosServices.AssessmentGeneratorService
 */
var AssessmentGeneratorService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(AssessmentGeneratorService, _SoffosAIService);
  var _super = _createSuper(AssessmentGeneratorService);
  function AssessmentGeneratorService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AssessmentGeneratorService);
    var service = _constants.ServiceString.ASSESSMENT_GENERATOR;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.AssessmentGeneratorIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.
   * This string will be used for throttling and profanity tracking.
   * Soffos assumes that the owner of the api is an application (app) and that app has users.
   * Soffos API will accept any string."
   * @param {string} context - the prompt to be sent to the LLM
   * @param {string} [mode="short answer"] - The type/mode of assessment.
   * @param {number} [num_questions=10] - the location of the image to be processed
   * @param {number} [num_choices=3] - the location of the image to be processed
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * qna_sets - The question and answer sets
   * @example
   * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
   */
  _createClass(AssessmentGeneratorService, [{
    key: "call",
    value: function call(user, context) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "short answer";
      var num_questions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      var num_choices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var payload = {
        "user": user,
        "context": context
      };
      if (engine) payload.engine = engine;
      if (mode) payload.mode = mode;
      if (num_questions) payload.num_questions = num_questions;
      if (num_choices) payload.num_choices = num_choices;
      return _get(_getPrototypeOf(AssessmentGeneratorService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} context - the prompt to be sent to the LLM
     * @param {(string|InputConfig)} [mode="short answer"] - The type/mode of assessment.
     * @param {(number|InputConfig)} [num_questions=10] - the location of the image to be processed
     * @param {(number|InputConfig)} [num_choices=3] - the location of the image to be processed
     * @param {(string)} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, context) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "short answer";
      var num_questions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      var num_choices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var source = {
        "context": context
      };
      if (engine) source.engine = engine;
      if (mode) source.mode = mode;
      if (num_questions) source.num_questions = num_questions;
      if (num_choices) source.num_choices = num_choices;
      return _get(_getPrototypeOf(AssessmentGeneratorService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return AssessmentGeneratorService;
}(_service.SoffosAIService);
var _default = AssessmentGeneratorService;
exports["default"] = _default;