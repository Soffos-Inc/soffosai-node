"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _inspect_arguments = require("../../utils/inspect_arguments.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
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
 * This module is a combination of various sub-modules that enable users to get accurate answers on 
 * questions posed on a large amount of content. It includes basic intent recognition capabilities 
 * to enable appropriate responses to incorrect or profane language, or typical personal questions 
 * like "How are you?" and greetings
 */
var QuestionAnsweringService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(QuestionAnsweringService, _SoffosAIService);
  var _super = _createSuper(QuestionAnsweringService);
  function QuestionAnsweringService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, QuestionAnsweringService);
    var service = _constants.ServiceString.QUESTION_ANSWERING;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.QuestionAnsweringIO();
    return _this;
  }

  /**
   * @param {string} user 
   * @param {string} question
   * @param {string} document_text
   * @param {Array.<string>} document_ids
   * @param {bool} [check_ambiguity=true]
   * @param {string} [check_query_type=true]
   * @param {string} [generic_response=false]
   * @param {Object.<string, string>} meta
   * @returns {Promise<Object>} 
   */
  _createClass(QuestionAnsweringService, [{
    key: "call",
    value: function call(user, question) {
      var document_text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var check_ambiguity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var check_query_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var generic_response = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var meta = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, question, document_text, document_ids, check_ambiguity, check_query_type, generic_response, meta);
      this._argsDict['message'] = question;
      return _get(_getPrototypeOf(QuestionAnsweringService.prototype), "call", this).call(this);
    }
  }]);
  return QuestionAnsweringService;
}(_service.SoffosAIService);
var _default = QuestionAnsweringService;
exports["default"] = _default;