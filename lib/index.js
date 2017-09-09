'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.printMsg = printMsg;
exports.printPath = printPath;
exports.fnAdd = fnAdd;

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function printMsg() {
  console.log('This message is from the npm-package-demo11 module'.red);
}

function printPath() {
  var path = __dirname;
  console.log(('current path is\uFF1A' + path).blue);
}

function fnAdd(a, b) {
  return a + b;
}

var MathFn = function (_Object) {
  (0, _inherits3.default)(MathFn, _Object);

  function MathFn() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    (0, _classCallCheck3.default)(this, MathFn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MathFn.__proto__ || (0, _getPrototypeOf2.default)(MathFn)).call(this));

    _this.add = function (r) {
      _this.__value += r;
      return _this;
    };

    _this.minutes = function (r) {
      _this.__value -= r;
      return _this;
    };

    _this.value = function () {
      return _this.__value;
    };

    _this.__value = value;
    return _this;
  }

  return MathFn;
}(Object);

exports.default = MathFn;