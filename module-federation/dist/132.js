"use strict";
(self["webpackChunkmodule_federation"] = self["webpackChunkmodule_federation"] || []).push([[132],{

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react_dom_client__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(684);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(307);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(788);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);



const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Header");
};
const headerLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({
  React: react__WEBPACK_IMPORTED_MODULE_0__,
  ReactDOM: /*#__PURE__*/ (react_dom_client__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react_dom_client__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react_dom_client__WEBPACK_IMPORTED_MODULE_1__, 2))),
  rootComponent: Header,
  renderType: 'createRoot',
  errorBoundary: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Ops error occured")
});
const bootstrap = headerLifecycles.bootstrap;
const mount = headerLifecycles.mount;
const unmount = headerLifecycles.unmount;

/***/ })

}]);
//# sourceMappingURL=132.js.map