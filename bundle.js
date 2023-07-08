/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TsukuArd Gothic.ttc */ \"./src/fonts/TsukuArd Gothic.ttc\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"TsukuArd Gothic\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n:root {\n  --header-footer-bg: black;\n  --bg-colour: black;\n  --font-colour: #f3f3f3;\n  --root-font-size: 18px;\n  --root-line-height: 1.6;\n  --main-heading-text: 1.5rem;\n  --sub-heading-text: 1.25rem;\n  --running-text-size: 0.75rem;\n  --heading-font-colour: #a9a9a9;\n  --header-footer-height: 50px;\n  --header-footer-padding: 1.25rem 4rem;;\n}\n\n* {\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: var(--root-font-size);\n  line-height: var(--root-line-height);\n  background-color: var(--bg-colour);\n  color: var(--font-colour);\n  font-family: 'TsukuArd Gothic', Arial, sans-serif;\n}\n\n/* Header Styling*/\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--header-footer-bg);\n  height: var(--header-footer-height);\n  padding: var(--header-footer-padding);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navigation-bar {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.navigation-item:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.navigation-item:active {\n  scale: 110%;\n}\n\n.header-image {\n  height: 100%;\n}\n\n\n/* Main Content Styling */\n.main-top, \n.main-menu,\n.main-access {\n  margin-top: calc(var(--header-footer-height) + 1rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-top-image,\n.menu-card-image,\n.main-access-image {\n  width: 100%;\n}\n\n.main-top-text,\n.main-menu-heading,\n.main-access-heading {\n  color: var(--heading-font-colour);\n  text-align: center;\n}\n\n.main-top-text {\n  font-size: var(--sub-heading-text);\n  margin: 2rem;\n}\n\n.main-menu-heading,\n.main-access-heading {\n  margin: 4rem 0 2rem;\n}\n\n.main-menu-heading,\n.main-access-heading {\n  font-size: var(--main-heading-text);\n}\n\n.main-menu-container {\n  margin-bottom: 4rem;\n  padding: 0 3rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.25rem;\n}\n\n.menu-card {\n  font-size: var(--sub-heading-text);\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.menu-card-info {\n  text-align: center;\n}\n\n.menu-card-text {\n  font-size: var(--running-text-size);\n}\n\n.main-access-container {\n  margin: 0 12.5rem 4rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2.25rem;\n}\n\n.main-access-card {\n  font-size: var(--running-text-size);\n  display: flex;\n  flex-direction: column;\n}\n\n.access-card-item {\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n}\n\n.access-card-line {\n  content: '';\n  background-color: var(--font-colour);\n  height: 1px;\n}\n\n.access-card-item-right,\n.access-card-item-right-subitem {\n  text-align: center;\n  width: 100%;\n}\n\n.access-card-item:last-child > .access-card-item-right {\n  grid-column: 1 / span 2;\n  padding-top: 0.5rem;\n}\n\niframe.access-card-item-right-subitem {\n  border: 0;\n  padding-top: 1rem;\n}\n\n/* Footer Styling */\n.footer {\n  background-color: var(--header-footer-bg);\n  font-size: var(--running-text-size);\n  height: var(--header-footer-height);\n  padding: var(--header-footer-padding);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/access.js":
/*!***********************!*\
  !*** ./src/access.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAccessDOM: () => (/* binding */ createAccessDOM)\n/* harmony export */ });\n/* harmony import */ var _img_access_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/access.jpg */ \"./src/img/access.jpg\");\n\n\nconst createAccessDOM = () => {\n  const mainAccessContent = [\n    {left: 'Address', right:'大阪市中央区上町１丁目１−２２'},\n    {left: 'TEL', right:'070-9045-8901'},\n    {left: 'Business hours', right:'月曜日・日曜日   10:30-17:00<br>火曜日〜日曜日   10:30~21:30'},\n    {left: 'By Train', right:'JR森ノ宮駅から８５０m<br>谷町四丁目駅から７００m'},\n    {left: '', right:'お車でお越しの場合は目の前にコインパーキングがあります。'},\n  ];\n\n  const content = document.getElementById('content');\n\n  const divMainAccess = document.createElement('div');\n  const divMainAccessHeading = document.createElement('div');\n  const divMainAccessContainer = document.createElement('div');\n  const imgMainAccessImage = document.createElement('img');\n  const divMainAccessCard = document.createElement('div');\n\n  divMainAccess.classList.add('main-access');\n  content.appendChild(divMainAccess);\n\n  divMainAccessHeading.classList.add('main-access-heading');\n  divMainAccessHeading.textContent = 'Access';\n  divMainAccess.appendChild(divMainAccessHeading);\n\n  divMainAccessContainer.classList.add('main-access-container');\n  divMainAccess.appendChild(divMainAccessContainer);\n\n  imgMainAccessImage.classList.add('main-access-image');\n  imgMainAccessImage.src = _img_access_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  imgMainAccessImage.alt = 'Avocados Mexican Cafe Front.';\n  divMainAccessContainer.appendChild(imgMainAccessImage);\n\n  divMainAccessCard.classList.add('main-access-card');\n  divMainAccessContainer.appendChild(divMainAccessCard);\n\n  for (let i = 0; i < 5; i++) {\n    const divAccessCardItem = document.createElement('div');\n    divAccessCardItem.classList.add('access-card-item');\n    divMainAccessCard.appendChild(divAccessCardItem);\n\n    if ((i === 0) || (i === 1) || (i === 2)) {\n      const divAccessCardItemLeft = document.createElement('div');\n      divAccessCardItemLeft.classList.add('access-card-item-left');\n      divAccessCardItemLeft.textContent = mainAccessContent[i].left;\n      divAccessCardItem.appendChild(divAccessCardItemLeft);\n\n      const divAccessCardItemRight = document.createElement('div');\n      divAccessCardItemRight.classList.add('access-card-item-right');\n      divAccessCardItemRight.innerHTML = mainAccessContent[i].right;\n      divAccessCardItem.appendChild(divAccessCardItemRight);\n\n      const divAccessCardLine = document.createElement('div');\n      divAccessCardLine.classList.add('access-card-line');\n      divMainAccessCard.appendChild(divAccessCardLine);\n\n    } else if (i === 3) {\n      // Exception handling for 4th item in grid (with Google Maps)\n      const divAccessCardItemLeft = document.createElement('div');\n      divAccessCardItemLeft.classList.add('access-card-item-left');\n      divAccessCardItemLeft.textContent = mainAccessContent[i].left;\n      divAccessCardItem.appendChild(divAccessCardItemLeft);\n\n      const divAccessCardItemRight = document.createElement('div');\n      divAccessCardItemRight.classList.add('access-card-item-right');\n      divAccessCardItem.appendChild(divAccessCardItemRight);\n\n      const divAccessCardItemRightSubitem = document.createElement('div');\n      divAccessCardItemRightSubitem.classList.add('access-card-item-right-subitem');\n      divAccessCardItemRightSubitem.innerHTML = mainAccessContent[i].right;\n      divAccessCardItemRight.appendChild(divAccessCardItemRightSubitem);\n      const iframeAccessCardItemRightSubitem = document.createElement('iframe');\n      iframeAccessCardItemRightSubitem.classList.add('access-card-item-right-subitem');\n      iframeAccessCardItemRightSubitem.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.5392375314154!2d135.52483927701462!3d34.6779688279931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e150ebb0874b%3A0xbf7ff25742f78ba6!2zQXZvY2Fkb3MgTWV4aWNhbiBDYWZlIGFuZCBCYXIg44Ki44Oc44Kr44OJ44K5!5e0!3m2!1sja!2sus!4v1688705473248!5m2!1sja!2sus';\n      iframeAccessCardItemRightSubitem.allowFullscreen = '';\n      iframeAccessCardItemRightSubitem.loading = 'lazy';\n      iframeAccessCardItemRightSubitem.referrerPolicy = 'no-referrer-when-downgrade';\n      divAccessCardItemRight.appendChild(iframeAccessCardItemRightSubitem);\n\n      const divAccessCardLine = document.createElement('div');\n      divAccessCardLine.classList.add('access-card-line');\n      divMainAccessCard.appendChild(divAccessCardLine);\n\n    } else if (i === 4){\n      // Don't create a line div after last item\n      const divAccessCardItemRight = document.createElement('div');\n      divAccessCardItemRight.classList.add('access-card-item-right');\n      divAccessCardItemRight.textContent = mainAccessContent[i].right;\n      divAccessCardItem.appendChild(divAccessCardItemRight);\n    }\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/access.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access */ \"./src/access.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst domController = (() => {\n  const createInitialDOM = (() => {\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createHeaderDOM)();\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createMainTopDOM)();\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createFooterDOM)();\n  })();\n\n  // Adds event listeners to all navigation items\n  const initialPageSetup = (() => {\n    const linkTop = document.getElementById('top');\n    const linkMenu = document.getElementById('menu');\n    const linkAccess = document.getElementById('access');\n\n    linkTop.addEventListener('click', () => {\n      _navigationItemClickLogic('top')\n    });\n    linkMenu.addEventListener('click', () => {\n      _navigationItemClickLogic('menu')\n    });\n    linkAccess.addEventListener('click', () => {\n      _navigationItemClickLogic('access')\n    });\n  })();\n\n  // Removes main content of page, \n  // Creates DOM for clicked page content\n  // Creates footer\n  function _navigationItemClickLogic(target) {\n    _removeMain();\n    switch (target) {\n      case 'top' :\n        (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createMainTopDOM)();\n        break;\n      case 'menu' :\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuDOM)();\n        break;\n      case 'access' :\n        (0,_access__WEBPACK_IMPORTED_MODULE_2__.createAccessDOM)();\n        break;\n    }\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.createFooterDOM)();\n  }\n  \n  // Removes content except for header\n  function _removeMain() {\n    const content = document.getElementById('content');\n    const childrenToRemove = [content.childNodes[2], content.childNodes[3]];\n    childrenToRemove.forEach(child => {\n      content.removeChild(child);\n    });\n  }\n\n  return {}\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuDOM: () => (/* binding */ createMenuDOM)\n/* harmony export */ });\n/* harmony import */ var _img_quesedilla_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/quesedilla.png */ \"./src/img/quesedilla.png\");\n/* harmony import */ var _img_tacos_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/tacos.png */ \"./src/img/tacos.png\");\n/* harmony import */ var _img_burrito_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/burrito.png */ \"./src/img/burrito.png\");\n\n\n\n\nconst createMenuDOM = () => {\n  const menuHeadingContent = ['まずは試してもらいたい', '- メキシコ料理 -'];\n  const menuCardContent = [\n    {\n      id: 'quesedilla-card', \n      src: _img_quesedilla_png__WEBPACK_IMPORTED_MODULE_0__, \n      alt: 'A delicious quesedilla.',\n      name: 'ケサディーヤ',\n      price: '¥1,100',\n      text: 'メキシコ料理に馴染みがない方でもまずは試してもらいやすいメニューです。小麦粉で作られたトルティーヤにチーズ（スペイン語でケソ）と具材を挟んで焼いた料理です。',\n    },\n    {\n      id: 'tacos-card', \n      src: _img_tacos_png__WEBPACK_IMPORTED_MODULE_1__, \n      alt: 'A delicious taco.',\n      name: 'タコス',\n      price: '１つ￥６００〜',\n      text: 'とうもろこしで作られたソフトタイプのタコスを使った本格メキシカンタコス。揚げた硬いタイプのタコスはよくアメリカなどで見られますが、メキシコではこの柔らかい手作りタコスを使ったものが主流です。',\n    },\n    {\n      id: 'burrito-card', \n      src: _img_burrito_png__WEBPACK_IMPORTED_MODULE_2__, \n      alt: 'A delicious burrito.',\n      name: 'ブリトー',\n      price: '¥1,150',\n      text: 'お肉や野菜、ご飯を小麦粉トルティーヤ巻いたボリュームのあるブリトーはお腹すいた時に大満足できる料理です。ホイルに包まれていますので食べやすくテイクアウトでも人気です。',\n    },\n  ];\n\n  const content = document.getElementById('content');\n\n  const divMainMenu = document.createElement('div');\n  const divMainMenuHeading = document.createElement('div');\n  \n  const divMainMenuContainer = document.createElement('div');\n  \n\n  divMainMenu.classList.add('main-menu');\n  divMainMenuHeading.classList.add('main-menu-heading');\n  divMainMenuContainer.classList.add('main-menu-container');\n\n  content.appendChild(divMainMenu);\n  divMainMenu.appendChild(divMainMenuHeading);\n\n  for (let i = 0; i < 2; i++) {\n    const pMenuHeading = document.createElement('p');\n    pMenuHeading.classList.add('menu-heading');\n    pMenuHeading.textContent = menuHeadingContent[i];\n    divMainMenuHeading.appendChild(pMenuHeading);\n  }\n\n  divMainMenu.appendChild(divMainMenuContainer);\n\n  for (let i = 0; i < 3; i++) {\n    const divMenuCard = document.createElement('div');\n    divMenuCard.classList.add('menu-card');\n    divMenuCard.id = menuCardContent[i].id;\n    divMainMenuContainer.appendChild(divMenuCard);\n\n    const imgMenuCardImage = document.createElement('img');\n    imgMenuCardImage.classList.add('menu-card-image');\n    imgMenuCardImage.src = menuCardContent[i].src;\n    imgMenuCardImage.alt = menuCardContent[i].alt;\n    divMenuCard.appendChild(imgMenuCardImage);\n\n    const divMenuCardInfo = document.createElement('div');\n    divMenuCardInfo.classList.add('menu-card-info');\n    divMenuCard.appendChild(divMenuCardInfo);\n\n    const pMenuCardInfoName = document.createElement('p');\n    pMenuCardInfoName.classList.add('menu-card-infos');\n    pMenuCardInfoName.textContent = menuCardContent[i].name;\n    divMenuCardInfo.appendChild(pMenuCardInfoName);\n\n    const pMenuCardInfoPrice = document.createElement('p');\n    pMenuCardInfoPrice.classList.add('menu-card-info');\n    pMenuCardInfoPrice.textContent = menuCardContent[i].price;\n    divMenuCardInfo.appendChild(pMenuCardInfoPrice);\n\n    const divMenuCardText = document.createElement('div');\n    divMenuCardText.classList.add('menu-card-text');\n    divMenuCardText.textContent = menuCardContent[i].text;\n    divMenuCard.appendChild(divMenuCardText);\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooterDOM: () => (/* binding */ createFooterDOM),\n/* harmony export */   createHeaderDOM: () => (/* binding */ createHeaderDOM),\n/* harmony export */   createMainTopDOM: () => (/* binding */ createMainTopDOM)\n/* harmony export */ });\n/* harmony import */ var _img_header_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/header.png */ \"./src/img/header.png\");\n/* harmony import */ var _img_main_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/main.png */ \"./src/img/main.png\");\n\n\n\nconst createHeaderDOM = () => {\n  const navigationContent = ['Top', 'Menu', 'Access'];\n\n  const content = document.getElementById('content');\n\n  const divHeader = document.createElement('div');\n  const imgHeader = document.createElement('img');\n  const divNavigationBar = document.createElement('div');\n\n  divHeader.classList.add('header');\n  imgHeader.classList.add('header-image');\n  imgHeader.src = _img_header_png__WEBPACK_IMPORTED_MODULE_0__;\n  imgHeader.alt = 'Avocados Mexican Cafe';\n  divNavigationBar.classList.add('navigation-bar');\n  \n  content.appendChild(divHeader);\n  divHeader.appendChild(imgHeader);\n  divHeader.appendChild(divNavigationBar);\n\n  // Need to create 3 different items for navigation bar, so create in loop\n  // Assign content and id from array\n  for (let i = 0; i < 3; i++) {\n    const divNavigationItem = document.createElement('div');\n    divNavigationItem.classList.add('navigation-item');\n    divNavigationItem.id = navigationContent[i].toLowerCase();\n    divNavigationItem.textContent = navigationContent[i];\n    divNavigationBar.appendChild(divNavigationItem);\n  }\n}\n\nconst createMainTopDOM = () => {\n  const restaurantIntroContent = [\n    'メキシコ人シェフが作る本格メキシカン料理。',\n    '日本で意外と知られていない本格的なメキシコ料理をみなさまに知っていただきたいという思いを込めて作っています。',\n    'ぜひお気軽にメキシコを味わいにお越しください。'\n  ];\n\n  const content = document.getElementById('content');\n\n  const divMainTop = document.createElement('div');\n  const imgMainTop = document.createElement('img');\n  const divMainTopText = document.createElement('div');\n  \n  divMainTop.classList.add('main-top');\n  imgMainTop.classList.add('main-top-image');\n  imgMainTop.src = _img_main_png__WEBPACK_IMPORTED_MODULE_1__;\n  imgMainTop.alt = 'A delicious plate of Maxican food.';\n  divMainTopText.classList.add('main-top-text');\n  \n\n  content.appendChild(divMainTop);\n  divMainTop.appendChild(imgMainTop);\n  divMainTop.appendChild(divMainTopText);\n\n  // Need to create 3 different paragraphs, so create in loop\n  // Assign text content from array\n  for (let i = 0; i < 3; i++) {\n    const pRestaurantIntro = document.createElement('p');\n    pRestaurantIntro.classList.add('restaurant-intro');\n    pRestaurantIntro.textContent = restaurantIntroContent[i];\n    divMainTopText.appendChild(pRestaurantIntro);\n  }\n}\n\nconst createFooterDOM = () => {\n  const content = document.getElementById('content');\n\n  const divFooter = document.createElement('div');\n  divFooter.classList.add('footer');\n  content.appendChild(divFooter);\n\n  const divFooterText = document.createElement('div');\n  divFooterText.classList.add('footer-text');\n  divFooterText.textContent = 'Avocados Osaka ©︎ 2023';\n  divFooter.appendChild(divFooterText);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/fonts/TsukuArd Gothic.ttc":
/*!***************************************!*\
  !*** ./src/fonts/TsukuArd Gothic.ttc ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"651c45e3d454e1dfed26.ttc\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/TsukuArd_Gothic.ttc?");

/***/ }),

/***/ "./src/img/access.jpg":
/*!****************************!*\
  !*** ./src/img/access.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bce6592e190b27abd58a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/access.jpg?");

/***/ }),

/***/ "./src/img/burrito.png":
/*!*****************************!*\
  !*** ./src/img/burrito.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e35f5d233c3b43c50da8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/burrito.png?");

/***/ }),

/***/ "./src/img/header.png":
/*!****************************!*\
  !*** ./src/img/header.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f855b2c77caa77790a8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/header.png?");

/***/ }),

/***/ "./src/img/main.png":
/*!**************************!*\
  !*** ./src/img/main.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eabbf27b81f250a9c203.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/main.png?");

/***/ }),

/***/ "./src/img/quesedilla.png":
/*!********************************!*\
  !*** ./src/img/quesedilla.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd322f8b4ad2612f12c3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/quesedilla.png?");

/***/ }),

/***/ "./src/img/tacos.png":
/*!***************************!*\
  !*** ./src/img/tacos.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34ac3b66ff14a3cbaf07.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tacos.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;