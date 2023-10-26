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
 * Identifies illogical statements in text and explains why they are illogical.
 * * @class
 * @alias SoffosServices.LogicalErrorDetectionService
 */
var LogicalErrorDetectionService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(LogicalErrorDetectionService, _SoffosAIService);
  var _super = _createSuper(LogicalErrorDetectionService);
  function LogicalErrorDetectionService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LogicalErrorDetectionService);
    var service = _constants.ServiceString.LOGICAL_ERROR_DETECTION;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.LogicalErrorDetectionIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Input text to analyze for logical errors.
   * @returns {Promise<Object>} 
   * logical_errors - dictionary list<br>
   * A list of dictionaries representing detected logical errors. Each dictionary contains the following fields: <br>
   * text: The illogical text.<br>
   * start: Starting character index in the original text.<br>
   * end: Ending chracter index in the original text.<br>
   * explanation: The reasoning behind why the text span is illogical.<br>
   * @example
   * import { SoffosServices } from "soffosai";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.LogicalErrorDetectionService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client12345",
   *     "Nobody has found evidence that UFOs don't exist, therefore they must exist. \
   *     Many people are saying that voter fraud is real, therefore it must be real."
   * )
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "logical_errors": [
   * //       {
   * //         "text": "Nobody has found evidence that UFOs don't exist, therefore they must exist.",
   * //         "start": 0,
   * //         "end": 75,
   * //         "explanation": "This sentence is not logical because the lack of evidence does not necessarily mean that something must exist. The absence of evidence does not prove the existence of something."
   * //       },
   * //       {
   * //         "text": "Many people are saying that voter fraud is real, therefore it must be real.",
   * //         "start": 80,
   * //         "end": 155,
   * //         "explanation": "This sentence is not logical because it assumes that the truth of a statement is determined by the number of people who believe it, which is not necessarily the case."
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.01715,
   * //       "total_cost": 0.02215
   * //     },
   * //     "charged_character_count": 343,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(LogicalErrorDetectionService, [{
    key: "call",
    value: function call(user, text) {
      var payload = {
        "user": user,
        "text": text
      };
      return _get(_getPrototypeOf(LogicalErrorDetectionService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Input text to analyze for logical errors.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var source = {
        text: text
      };
      return _get(_getPrototypeOf(LogicalErrorDetectionService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return LogicalErrorDetectionService;
}(_service.SoffosAIService);
var _default = LogicalErrorDetectionService;
exports["default"] = _default;