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
 * This module can generate tags for a piece of text that can aid with content search in
 * certain use-cases. It allows to specify a number of tags to be generated for each of 
 * the categories "topic", "domain", "audience", "entity".
 */
var TagGenerationService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(TagGenerationService, _SoffosAIService);
  var _super = _createSuper(TagGenerationService);
  function TagGenerationService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, TagGenerationService);
    var service = _constants.ServiceString.TAG_GENERATION;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.TagGenerationIO();
    return _this;
  }

  /**
   * @param {string} user 
   * @param {string} text
   * @param {Array.<string>} [types=["topic"]]
   * @param {number} [n=10]
   * @returns {Promise<Object>} 
   */
  _createClass(TagGenerationService, [{
    key: "call",
    value: function call(user, text) {
      var types = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["topic"];
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      /*
          Note: List of types of keywords to extract. Supported types:
            topic: Tags relating to the subject matter of the text. 
          domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". 
              In some cases, domain tags might be similar to topic tags. 
          audience: Tags relating to the type of audience the text is intended for. 
          entity: Entities such as people, places, products, etc. mentioned in the text.
      */
      for (var i = 0; i < types.length; i++) {
        var _type = types[i];
        if (!["topic", "domain", "audience", "entity"].includes(_type)) {
          throw new Error("".concat(this._service, " types argument's elements can only be \"topic\", \"domain\", \"audience\" and/or \"entity\"."));
        }
      }
      this._argsDict = (0, _inspect_arguments.inspectArguments)(this.call, user, text, types, n);
      return _get(_getPrototypeOf(TagGenerationService.prototype), "call", this).call(this);
    }
  }]);
  return TagGenerationService;
}(_service.SoffosAIService);
var _default = TagGenerationService;
exports["default"] = _default;