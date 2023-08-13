"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pipeline = void 0;
var _app = require("../../app.js");
var _node = require("../nodes/node.js");
var _type_classifications = require("../../utils/type_classifications.js");
var _pipeline_preprocesses = require("../../utils/pipeline_preprocesses.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var Pipeline = /*#__PURE__*/function () {
  /**
   * @param {Array.<object>} nodes 
   * @param {boolean} [ use_defaults=false ]
   * @param {Object} [ kwargs={} ]
   */
  function Pipeline(nodes) {
    var use_defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var kwargs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Pipeline);
    var api_key = kwargs.apiKey;
    this.apiKey = _app.apiKey || api_key;
    this._stages = nodes;
    this._input = {};
    this._infos = {};
    this._use_defaults = use_defaults;
    this._execution_codes = [];
    this._termination_codes = [];
    var error_messages = [];
    if (!Array.isArray(nodes)) {
      error_messages.push("stages field should be a list of Service Nodes");
    }
    var _iterator = _createForOfIteratorHelper(this._stages),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var stage = _step.value;
        if (!(stage instanceof _node.Node)) {
          error_messages.push("".concat(stage, " is not an instance of Node"));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (error_messages.length !== 0) {
      throw new Error(error_messages.join("\n"));
    }
    this._outputfields = this._stages.map(function (stage) {
      return Object.keys(stage.service._serviceio.output_structure);
    });
  }

  /**
   * Run the Pipeline
   * @param {object} user_input 
   * @param {string} [execution_code=null]
   * @returns 
   */
  _createClass(Pipeline, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(user_input) {
        var stages, execution_code, infos, total_cost, i, index_from_execution, index_from_termination, node, temp_src, src, _i, _Object$entries, _Object$entries$_i, key, notation, value, response, exec_code_index;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if ((0, _type_classifications.isDictObject)(user_input)) {
                _context.next = 2;
                break;
              }
              throw new Error("Invalid user input.");
            case 2:
              if ("user" in user_input) {
                _context.next = 4;
                break;
              }
              throw new ReferenceError("'user' is not defined in user_input.");
            case 4:
              if ("text" in user_input) {
                user_input.document_text = this._input.text;
              }
              if ("question" in user_input) {
                user_input.message = user_input.question;
              }
              if (this._use_defaults) {
                stages = this.setDefaults(this._stages, user_input);
              } else {
                stages = this._stages;
              }
              execution_code = user_input.execution_code;
              if (!(execution_code != null && execution_code != undefined)) {
                _context.next = 15;
                break;
              }
              execution_code = this.apiKey + execution_code;
              if (!this._execution_codes.includes(execution_code)) {
                _context.next = 14;
                break;
              }
              return _context.abrupt("return", {
                "error": "You are still using this execution code in a current pipeline run."
              });
            case 14:
              this._execution_codes.push(execution_code);
            case 15:
              infos = {};
              this.validate_pipeline(user_input, stages);
              infos.user_input = user_input;
              total_cost = 0.00; // Execute per stage:
              i = 0;
            case 20:
              if (!(i < stages.length)) {
                _context.next = 66;
                break;
              }
              if (!this._termination_codes.includes(execution_code)) {
                _context.next = 29;
                break;
              }
              // remove the execution code from both termination codes and execution codes
              index_from_execution = this._execution_codes.indexOf(execution_code);
              if (index_from_execution > -1) {
                this._execution_codes.splice(index_from_execution, 1);
              }
              index_from_termination = this._termination_codes.indexOf(execution_code);
              if (index_from_termination > -1) {
                this._termination_codes.splice(index_from_termination, 1);
              }

              // return values that are ready:
              infos.total_call_cost = total_cost;
              infos.warning = "This Soffos Pipeline run is prematurely terminated.";
              return _context.abrupt("return", infos);
            case 29:
              node = stages[i];
              console.log("Running ".concat(node.service._service));
              temp_src = node.source;
              src = {};
              _i = 0, _Object$entries = Object.entries(temp_src);
            case 34:
              if (!(_i < _Object$entries.length)) {
                _context.next = 53;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], notation = _Object$entries$_i[1];
              if (!(0, _type_classifications.isDictObject)(notation)) {
                _context.next = 49;
                break;
              }
              // value is a reference to a node or user input
              value = infos[notation.source][notation.field];
              if (!("pre_process" in notation)) {
                _context.next = 46;
                break;
              }
              if (!(notation.pre_process instanceof Function)) {
                _context.next = 43;
                break;
              }
              src[key] = notation.pre_process(value);
              _context.next = 44;
              break;
            case 43:
              throw new Error("pre_process value is not a function");
            case 44:
              _context.next = 47;
              break;
            case 46:
              // no pre-processing required
              src[key] = value;
            case 47:
              _context.next = 50;
              break;
            case 49:
              // notation is a constant
              src[key] = notation;
            case 50:
              _i++;
              _context.next = 34;
              break;
            case 53:
              if (!('user' in src)) {
                src.user = user_input.user;
              }
              src.apiKey = this.apiKey;
              _context.next = 57;
              return node.service.getResponse(src);
            case 57:
              response = _context.sent;
              if (!("error" in response || !(0, _type_classifications.isDictObject)(response))) {
                _context.next = 60;
                break;
              }
              throw new Error(response);
            case 60:
              console.log("Response ready for ".concat(node.service._service));
              infos[node.name] = response;
              total_cost += response.cost.total_cost;
            case 63:
              i++;
              _context.next = 20;
              break;
            case 66:
              infos.total_call_cost = total_cost;

              // remove the execution code from the execution_codes in effect Array.
              exec_code_index = this._execution_codes.indexOf(execution_code);
              if (exec_code_index > -1) {
                this._execution_codes.splice(exec_code_index, 1);
              }
              return _context.abrupt("return", infos);
            case 70:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function run(_x) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
    /**
     * Validates the Pipeline construction vs the user_input before sending the first API call.
     * Throws errors when not valid.
     * @param {object} user_input 
     * @param {Node} stages 
     * @returns 
     */
  }, {
    key: "validate_pipeline",
    value: function validate_pipeline(user_input, stages) {
      /*
      Before running the first service, the Pipeline will validate all nodes if they will all be
      executed successfully with the exception of database and server issues.
      */
      var error_messages = [];

      //  The first available keys are of the source
      this._outputfields.unshift(Object.keys(user_input));
      var _loop = function _loop() {
        var stage = stages[i];
        // stage: Node to be validated

        // check if required fields are present: already solved by making the node subclasses.

        // check if require_one_of_choices is present and not more than one
        // code here
        var serviceio = stage.service._serviceio;
        if (serviceio.require_one_of_choices.length > 0) {
          var groupErrors = [];
          var _iterator2 = _createForOfIteratorHelper(serviceio.require_one_of_choices),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var group = _step2.value;
              var foundChoices = group.filter(function (choice) {
                return choice in stage.source;
              });
              if (foundChoices.length === 0) {
                groupErrors.push("".concat(stage.name, ": Please provide one of these values on your payload: ").concat(group));
              } else if (foundChoices.length > 1) {
                groupErrors.push("".concat(stage.name, ": Please only include one of these values: ").concat(group));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (groupErrors.length > 0) {
            var error_message = groupErrors.join(". ");
            throw new TypeError(error_message);
          }
        }

        // check if datatypes are correct
        for (var _i2 = 0, _Object$entries2 = Object.entries(stage.source); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            notation = _Object$entries2$_i[1];
          var required_data_type = (0, _type_classifications.get_serviceio_datatype)(stage.service._serviceio.input_structure[key]);
          if ((0, _type_classifications.isNodeInput)(notation)) {
            if ("pre_process" in notation) continue; // skip validation if there is a helper function

            var reference_node_name = notation.source;
            var required_key = notation.field;
            if (reference_node_name == "user_input") {
              var input_datatype = (0, _type_classifications.get_userinput_datatype)(user_input[required_key]);
              if (required_data_type != input_datatype) {
                throw new TypeError("On ".concat(stage.name, " node: ").concat(required_data_type, " required on user_input '").concat(required_key, "' field but ").concat(input_datatype, " is provided."));
              }
            } else {
              var _iterator3 = _createForOfIteratorHelper(stages),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var subnode = _step3.value;
                  if (reference_node_name == subnode.name) {
                    var output_datatype = (0, _type_classifications.get_serviceio_datatype)(subnode.service._serviceio.output_structure[required_key]);
                    if (output_datatype == 'null') {
                      throw new TypeError("On ".concat(stage.name, " node: the reference node '").concat(reference_node_name, "' does not have ").concat(required_key, " key on its output."));
                    }
                    if (required_data_type != output_datatype) {
                      throw new TypeError("On ".concat(stage.name, " node: The input datatype required for field ").concat(key, " is ").concat(required_data_type, ". This does not match the datatype to be given by node ").concat(subnode.name, "'s ").concat(notation.field, " field which is ").concat(output_datatype, "."));
                    }
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } else {
            if ((0, _type_classifications.get_userinput_datatype)(notation) == required_data_type) {
              stage.service._payload[key] = notation;
            } else {
              throw new TypeError("On ".concat(stage.name, " node: ").concat(key, " requires ").concat(required_data_type, " but ").concat(_typeof(notation), " is provided."));
            }
          }

          // check datatype here
        }
      };
      for (var i = 0; i < stages.length; i++) {
        _loop();
      }
      if (error_messages.length != 0) {
        throw new Error(error_messages);
      }
      return true;
    }

    /**
     * Adds a node at the end of the node list/stages.
     * @param {Node} node 
     */
  }, {
    key: "add_node",
    value: function add_node(node) {
      if (node instanceof _node.Node) {
        this._stages.push(node);
      } else {
        throw new Error("".concat(node, " is not a Node instance."));
      }
    }

    /**
     * 
     * @param {Node[]} stages
     * @param {object} user_input
     * @returns 
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(stages, user_input) {
      var defaulted_stages = [];
      for (var i = 0; i < stages.length; i++) {
        var stage = stages[i];
        var stage_source = {};
        // enumerate the required inputs of this stage
        var required_keys = stage.service._serviceio.required_input_fields;
        var require_one_of_choices = stage.service._serviceio.require_one_of_choices;
        if (require_one_of_choices) {
          if (require_one_of_choices.length > 0) {
            for (var j = 0; j < require_one_of_choices.length > 0; j++) {
              required_keys.push(require_one_of_choices[j][0]);
            }
          }
        }

        // starting from the last output, check if the required input data is available
        // if not, get it from the user_input
        // if input is defined, use its definition
        var _iterator4 = _createForOfIteratorHelper(required_keys),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var required_key = _step4.value;
            if (stage.source[required_key] != "default") {
              stage_source[required_key] = stage.source[required_key];
              continue;
            }
            var found_input = false;
            for (var _j = i - 1; _j >= 0; _j--) {
              var stage_for_output = stages[_j];
              var stage_for_output_output_fields = stage_for_output.service._serviceio.output_structure;
              if (required_key in stage_for_output_output_fields) {
                stage_source[required_key] = {
                  source: stage_for_output.name,
                  field: required_key
                };
                found_input = true;
              }
              // special considerations
              if (required_key == "context" && "text" in stage_for_output_output_fields) {
                stage_source.context = {
                  source: stage_for_output.name,
                  field: "text"
                };
                found_input = true;
              }
              if (required_key == "document_text" && "text" in stage_for_output_output_fields) {
                stage_source.document_text = {
                  source: stage_for_output.name,
                  field: "text"
                };
                found_input = true;
              }
              if (required_key == "document_ids" && "document_id" in stage_for_output_output_fields) {
                stage_source.document_ids = {
                  source: stage_for_output.name,
                  field: "document_id",
                  pre_process: _pipeline_preprocesses.put_doc_id_to_array
                };
                found_input = true;
              }
            }
            if (!found_input) {
              if (required_key in user_input) {
                stage_source[required_key] = user_input[required_key];
                stage_source[required_key] = {
                  source: "user_input",
                  field: required_key
                };
              } else {
                throw new ReferenceError("Please add ".concat(required_key, " to user_input. The previous Nodes' outputs do not provide this data."));
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var defaulted_stage = new _node.Node(stage.name, stage.service, stage_source);
        defaulted_stages.push(defaulted_stage);
      }
      return defaulted_stages;
    }

    /**
     * Discontinue the execution of remaining nodes in the pipeline run
     * @param {string} termination_code 
     */
  }, {
    key: "terminate",
    value: function () {
      var _terminate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(termination_code) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!termination_code) {
                _context2.next = 3;
                break;
              }
              this._termination_codes.push(this.apiKey + termination_code);
              return _context2.abrupt("return", {
                "message": "Request to terminate job \"".concat(termination_code, "\" received.")
              });
            case 3:
              return _context2.abrupt("return", {
                "message": "Request to terminate job is not valid (execution code missing)."
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function terminate(_x2) {
        return _terminate.apply(this, arguments);
      }
      return terminate;
    }()
  }]);
  return Pipeline;
}();
exports.Pipeline = Pipeline;