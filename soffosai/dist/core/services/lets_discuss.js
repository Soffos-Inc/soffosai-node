"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetsDiscussService = exports.LetsDiscussRetrieveService = exports.LetsDiscussDeleteService = exports.LetsDiscussCreateService = void 0;
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
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for creating a session.
 */
var LetsDiscussCreateService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(LetsDiscussCreateService, _SoffosAIService);
  var _super = _createSuper(LetsDiscussCreateService);
  function LetsDiscussCreateService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussCreateService);
    var service = _constants.ServiceString.LETS_DISCUSS_CREATE;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.LetsDiscussCreateIO();
    return _this;
  }

  /**
   * @param {string} user 
   * @param {string} context
   * @returns {Promise<Object>} 
   */
  _createClass(LetsDiscussCreateService, [{
    key: "call",
    value: function call(user, context) {
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, context);
      return _get(_getPrototypeOf(LetsDiscussCreateService.prototype), "call", this).call(this);
    }
  }]);
  return LetsDiscussCreateService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss main service, continues thread of conversation.
 */
exports.LetsDiscussCreateService = LetsDiscussCreateService;
var LetsDiscussService = /*#__PURE__*/function (_SoffosAIService2) {
  _inherits(LetsDiscussService, _SoffosAIService2);
  var _super2 = _createSuper(LetsDiscussService);
  function LetsDiscussService() {
    var _this2;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussService);
    var service = _constants.ServiceString.LETS_DISCUSS;
    _this2 = _super2.call(this, service, kwargs);
    _this2._serviceio = new _index.LetsDiscussIO();
    return _this2;
  }

  /**
   * @param {string} user 
   * @param {string} session_id
   * @param {string} query
   * @returns {Promise<Object>} 
   */
  _createClass(LetsDiscussService, [{
    key: "call",
    value: function call(user, session_id, query) {
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, session_id, query);
      return _get(_getPrototypeOf(LetsDiscussService.prototype), "call", this).call(this);
    }
  }]);
  return LetsDiscussService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for retrieving sessions.
 */
exports.LetsDiscussService = LetsDiscussService;
var LetsDiscussRetrieveService = /*#__PURE__*/function (_SoffosAIService3) {
  _inherits(LetsDiscussRetrieveService, _SoffosAIService3);
  var _super3 = _createSuper(LetsDiscussRetrieveService);
  function LetsDiscussRetrieveService() {
    var _this3;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussRetrieveService);
    var service = _constants.ServiceString.LETS_DISCUSS_RETRIEVE;
    _this3 = _super3.call(this, service, kwargs);
    _this3._serviceio = new _index.LetsDiscussRetrieveIO();
    return _this3;
  }

  /**
   * @param {string} user 
   * @param {boolean} return_messages
   * @returns {Promise<Object>} 
   */
  _createClass(LetsDiscussRetrieveService, [{
    key: "call",
    value: function call(user, return_messages) {
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, return_messages);
      return _get(_getPrototypeOf(LetsDiscussRetrieveService.prototype), "call", this).call(this);
    }
  }]);
  return LetsDiscussRetrieveService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for deleting sessions.
 */
exports.LetsDiscussRetrieveService = LetsDiscussRetrieveService;
var LetsDiscussDeleteService = /*#__PURE__*/function (_SoffosAIService4) {
  _inherits(LetsDiscussDeleteService, _SoffosAIService4);
  var _super4 = _createSuper(LetsDiscussDeleteService);
  function LetsDiscussDeleteService() {
    var _this4;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussDeleteService);
    var service = _constants.ServiceString.LETS_DISCUSS_DELETE;
    _this4 = _super4.call(this, service, kwargs);
    _this4._serviceio = new _index.LetsDiscussDeleteIO();
    return _this4;
  }

  /**
   * @param {string} user 
   * @param {Array.<string>} session_ids
   * @returns {Promise<Object>} 
   */
  _createClass(LetsDiscussDeleteService, [{
    key: "call",
    value: function call(user, session_ids) {
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, session_ids);
      return _get(_getPrototypeOf(LetsDiscussDeleteService.prototype), "call", this).call(this);
    }
  }]);
  return LetsDiscussDeleteService;
}(_service.SoffosAIService);
exports.LetsDiscussDeleteService = LetsDiscussDeleteService;