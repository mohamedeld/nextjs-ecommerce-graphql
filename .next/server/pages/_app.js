(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mohamed\\Desktop\\advanced-react-rerecord\\sick-fits\\frontend\\components\\Page.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const Page = ({
  children
}) => {
  return __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
var _jsxFileName = "C:\\Users\\Mohamed\\Desktop\\advanced-react-rerecord\\sick-fits\\frontend\\pages\\_app.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // set NODE_OPTIONS=--openssl-legacy-provider && npm run dev

const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQzNCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQSxRQUFQLENBREY7QUFHRCxDQUpEOztBQU1BLCtEQUFlRCxJQUFmO0FBRUFBLElBQUksQ0FBQ0UsU0FBTCxHQUFpQjtBQUNmRCxVQUFRLEVBQUNFLHVEQUFhQztBQURQLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Q0FFQTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFDQyxXQUFEO0FBQVdDO0FBQVgsQ0FBRCxLQUEyQjtBQUN2QyxTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QsQ0FORDs7QUFRQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7OztBQ1hBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUGFnZSA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcblxyXG5QYWdlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjpQcm9wVHlwZXMuYW55XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcclxuLy8gc2V0IE5PREVfT1BUSU9OUz0tLW9wZW5zc2wtbGVnYWN5LXByb3ZpZGVyICYmIG5wbSBydW4gZGV2XHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQscGFnZVByb3BzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICA8L1BhZ2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9