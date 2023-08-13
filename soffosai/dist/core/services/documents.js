"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsSearchService = exports.DocumentsIngestService = exports.DocumentsDeleteService = void 0;
var _service = require("./service.js");
var _inspect_arguments = require("../../utils/inspect_arguments.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * The Documents Ingest module enables ingestion of content into Soffos.
 * Takes in the text and gives the document_id to reference the text in Soffos database.
 */
var DocumentsIngestService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(DocumentsIngestService, _SoffosAIService);
  var _super = _createSuper(DocumentsIngestService);
  function DocumentsIngestService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsIngestService);
    var service = _constants.ServiceString.DOCUMENTS_INGEST;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.DocumentsIngestIO();
    return _this;
  }

  /**
   * @param {string} user 
   * @param {string} document_name
   * @param {string} [text]
   * @param {object} [tagged_elements] 
   * @param {object} [meta] 
   * @returns {Promise<Object>} 
   */
  _createClass(DocumentsIngestService, [{
    key: "call",
    value: function call(user, document_name) {
      var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var tagged_elements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, document_name, text, tagged_elements, meta);
      this._argsDict.name = document_name;
      return _get(_getPrototypeOf(DocumentsIngestService.prototype), "call", this).call(this);
    }
  }]);
  return DocumentsIngestService;
}(_service.SoffosAIService);
/**
 * The Documents module enables search of ingested contents from Soffos.
 */
exports.DocumentsIngestService = DocumentsIngestService;
var DocumentsSearchService = /*#__PURE__*/function (_SoffosAIService2) {
  _inherits(DocumentsSearchService, _SoffosAIService2);
  var _super2 = _createSuper(DocumentsSearchService);
  function DocumentsSearchService() {
    var _this2;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsSearchService);
    var service = _constants.ServiceString.DOCUMENTS_SEARCH;
    _this2 = _super2.call(this, service, kwargs);
    _this2._serviceio = new _index.DocumentSearchIO();
    return _this2;
  }

  /**
   * @param {string} user 
   * @param {object} [query]
   * @param {object} [filters]
   * @param {Array.<string>} [document_ids] 
   * @param {number} [top_n_keywords] 
   * @param {number} [top_n_natural_language] 
   * @param {string} [date_from]
   * @param {string} [date_until]
   * @returns {Promise<Object>} 
   */
  _createClass(DocumentsSearchService, [{
    key: "call",
    value: function call(user) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var top_n_keywords = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
      var top_n_natural_language = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
      var date_from = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var date_until = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, query, filters, document_ids, top_n_keywords, top_n_natural_language, date_from, date_until);
      var response = _get(_getPrototypeOf(DocumentsSearchService.prototype), "call", this).call(this);
      var text = "";
      if (response.hasOwnProperty('passages')) {
        var _iterator = _createForOfIteratorHelper(response.passages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var passage = _step.value;
            text += passage;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      response.text = text;
      return response;
    }
  }]);
  return DocumentsSearchService;
}(_service.SoffosAIService);
/**
 * The Documents module enables deletion of ingested contents from Soffos.
 */
exports.DocumentsSearchService = DocumentsSearchService;
var DocumentsDeleteService = /*#__PURE__*/function (_SoffosAIService3) {
  _inherits(DocumentsDeleteService, _SoffosAIService3);
  var _super3 = _createSuper(DocumentsDeleteService);
  function DocumentsDeleteService() {
    var _this3;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsDeleteService);
    var service = _constants.ServiceString.DOCUMENTS_DELETE;
    _this3 = _super3.call(this, service, kwargs);
    _this3._serviceio = new _index.DocumentDeleteIO();
    return _this3;
  }

  /**
   * @param {string} user 
   * @param {Array.<string>} [document_ids] 
   * @returns {Promise<Object>} 
   */
  _createClass(DocumentsDeleteService, [{
    key: "call",
    value: function call(user, document_ids) {
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, document_ids);
      return _get(_getPrototypeOf(DocumentsDeleteService.prototype), "call", this).call(this);
    }
  }]);
  return DocumentsDeleteService;
}(_service.SoffosAIService);
exports.DocumentsDeleteService = DocumentsDeleteService;