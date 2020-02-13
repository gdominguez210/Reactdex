(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/frontend/components/pokemon/moves/move_item/move_item.jsx":
/*!***********************************************************************!*\
  !*** ./src/frontend/components/pokemon/moves/move_item/move_item.jsx ***!
  \***********************************************************************/
/*! exports provided: PokemonMoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonMoveItem", function() { return PokemonMoveItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_pokemon_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/pokemon_util */ "./src/frontend/util/pokemon_util.js");


var PokemonMoveItem = function PokemonMoveItem(props) {
  var className = props.className,
      move = props.move;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, Object(_util_pokemon_util__WEBPACK_IMPORTED_MODULE_1__["handleName"])(move.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, Object(_util_pokemon_util__WEBPACK_IMPORTED_MODULE_1__["handleName"])(move.learn_method)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, move.level_learned)));
};

/***/ }),

/***/ "./src/frontend/components/pokemon/moves/move_item/styled_move_item.jsx":
/*!******************************************************************************!*\
  !*** ./src/frontend/components/pokemon/moves/move_item/styled_move_item.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _move_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move_item */ "./src/frontend/components/pokemon/moves/move_item/move_item.jsx");



var StyledPokemonMoveItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_move_item__WEBPACK_IMPORTED_MODULE_2__["PokemonMoveItem"]).withConfig({
  displayName: "styled_move_item__StyledPokemonMoveItem",
  componentId: "jivkdf-0"
})(["border:1px solid #dddddd;border-radius:4px;padding:20px;margin:50px 0px;font-size:2em;ul{display:flex;justify-content:space-between;}ul > li{flex:1;}"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledPokemonMoveItem);

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map