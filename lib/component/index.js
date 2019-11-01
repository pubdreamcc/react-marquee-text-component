"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Marquee =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Marquee, _React$PureComponent);

  function Marquee(props) {
    var _this;

    _classCallCheck(this, Marquee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marquee).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderMarquee", function () {
      var text = _this.state.text;
      var _this$props = _this.props,
          repeat = _this$props.repeat,
          paused = _this$props.paused,
          duration = _this$props.duration;
      var arr = [];

      for (var i = 0; i < repeat; i++) {
        arr.push(_react["default"].createElement("div", {
          className: paused ? 'marquee-text paused' : 'marquee-text',
          key: i,
          style: {
            animationDuration: "".concat(duration, "s")
          }
        }, text));
      }

      return arr;
    });

    _this.state = {
      text: props.text
    };
    return _this;
  }

  _createClass(Marquee, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.text) {
        this.setState({
          text: nextProps.text
        });
      }
    } // 渲染跑马灯元素

  }, {
    key: "render",
    value: function render() {
      var prefixCls = 'marquee';
      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style;
      return _react["default"].createElement("div", {
        className: className ? "".concat(prefixCls, "-wrap ").concat(className) : "".concat(prefixCls, "-wrap"),
        style: JSON.stringify(style) !== '{}' ? style : {}
      }, _react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, this.renderMarquee()));
    }
  }]);

  return Marquee;
}(_react["default"].PureComponent);

_defineProperty(Marquee, "propTypes", {
  duration: _propTypes["default"].number,
  // 动画周期
  repeat: _propTypes["default"].number,
  // 插槽数量
  paused: _propTypes["default"].bool,
  // 暂停或运行动画
  text: _propTypes["default"].string.isRequired,
  // 跑马灯文字
  style: _propTypes["default"].object,
  // 内联样式
  className: _propTypes["default"].string // 类名

});

_defineProperty(Marquee, "defaultProps", {
  duration: 15,
  repeat: 2,
  paused: false
});

var _default = Marquee;
exports["default"] = _default;