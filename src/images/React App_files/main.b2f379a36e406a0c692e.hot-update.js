webpackHotUpdate("main",{

/***/ "./src/components/switchButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/switchButton.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_switchButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/switchButton.css */ "./src/css/switchButton.css");
/* harmony import */ var _css_switchButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_switchButton_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/cinya/workplace/orders/src/components/switchButton.jsx";




class SwitchButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      byEarliest: true
    };

    this.handleChange = byEarliest => {
      this.props.onChangeHandler(!byEarliest);
    };

    this.handleChange = this.handleChange.bind(this);
    this.state.byEarliest = this.props.byEarliest;
  }

  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({
      byEarliest: props.byEarliest
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "switchButtonContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Earliest first"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
      checked: !this.state.byEarliest,
      onChange: this.handleChange,
      onColor: "#86d3ff",
      offColor: "green",
      onHandleColor: "#2693e6",
      handleDiameter: 30,
      uncheckedIcon: false,
      checkedIcon: false,
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
      activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
      height: 20,
      width: 48,
      className: "react-switch",
      id: "material-switch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Latest first"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SwitchButton);

/***/ })

})
//# sourceMappingURL=main.b2f379a36e406a0c692e.hot-update.js.map