/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/fonts/antipasto.extrabold.ttf */ "./dist/fonts/antipasto.extrabold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/fonts/antipasto.regular.ttf */ "./dist/fonts/antipasto.regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Antipasto Pro ExtraBold';
  src:url(${___CSS_LOADER_URL_REPLACEMENT_0___} ) format('.ttf');
  font-family: 'Antipasto';
  src:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('.ttf');
}

* {
  margin: 0;
  padding: 0;
  
}

header {
  font-family: 'Antipasto Pro ExtraBold', sans-serif ;
  background-color: #db8763;
  color: #f0f0f0;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin-top: 1em;
  margin-bottom: 1em;
  

}
body {
  font-family: 'Antipasto', serif, sans-serif;
  margin: 0;
  padding: 0;
  background-color:  #db8763b9;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #db8763;
  color: white;
  padding: 20px;
  margin-left: 1em;
  margin-right: 2em;
  box-sizing: border-box;
  float: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 20px;

}

.sidebar-header {
  font-size: 24px;
  margin-bottom: 20px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
}

.sidebar-menu li {
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 10px;
  padding: 0.8em;
}

.sidebar-menu li:hover {
  background-color: #eeb46281;
  transform: scale(1.05); /* Slight scale-up on hover */
  border:1px solid #eeb462;

  

}

.sidebar-menu li.active {
  background-color: #eeb462;
  font-weight: bold;
  transform: scale(0.95); /* Slight scale-down on active state */

}
#modal{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:auto;
  background-color:  #ce7674;
  padding: 1rem;
  border-radius: 20px;
}

.center-content {
  margin-left: 1em;
  background-color: #eeb462f8;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 100%));
  height: 100vh;
  justify-content: center;
  padding-top: 1em;
  border-radius: 20px;
  margin: 0 auto;
}
main{
}

#taskForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#taskFormElement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.hidden {
  display: none;
}

.task {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 10px;
  border-radius: 20px;
  gap:1em;

}


.task-item h3 {
  flex-grow: 1;
  margin: 0;
  text-decoration: none;
  transition: text-decoration 0.2s;
  padding-right: 2em;
}

p{
  text-align: center;
}

.due-date{
  color: #3498db;
}
.info-icon {
  width: 20px; /* Adjust to your preferred size */
  height: 20px; /* Adjust to your preferred size */
}


/* CSS for the hover effect on the task item */
.task:hover {
  background-color: #eeb46265; /* Change the background color on hover */
  cursor: pointer; /* Change the cursor to a pointer on hover */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add a shadow on hover */
}

.task-item button.remove-task-button {
  background-color: #ff5252;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  transform: rotate(180deg);
}
/* Default styles */
button.remove-task-button {
  width: 2em;
  height: 2em;
  background-color: #3498db;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  transition: transform 0.3s ease; /* Add a smooth transition for the spin effect */
}

/* Hover effect */
button.remove-task-button:hover {
  animation: spin 0.8s ease ; /* Apply the spin animation on hover */
}

/* Keyframes animation for spinning */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.task-item button.remove-task-button:hover {
  background-color: #544667;
  transform: rotate(180deg);

}

#newTaskButton {
  background-color: #ce7674; /* Background color */
  color: #fff; /* Text color */
  padding: 10px 20px; /* Padding */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor style on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition */
  margin-left: 1em;
  

  /* Add a subtle shadow for depth */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Style on hover */
#newTaskButton:hover {
  background-color: #544667; /* Darker background color on hover */
  transform: scale(1.05); /* Slight scale-up on hover */
}

/* Style for active (clicked) state */
#newTaskButton:active {
  transform: scale(0.95); /* Slight scale-down on active state */
}
/* Media query to adjust column width for smaller screens */
@media (max-width: 768px) {
  .task-list {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); /* Shrink columns to 100% width */
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Antipasto Pro ExtraBold';\n  src:url('/dist/fonts/antipasto.extrabold.ttf' ) format('.ttf');\n  font-family: 'Antipasto';\n  src:url('/dist/fonts/antipasto.regular.ttf') format('.ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  \n}\n\nheader {\n  font-family: 'Antipasto Pro ExtraBold', sans-serif ;\n  background-color: #db8763;\n  color: #f0f0f0;\n  padding: 20px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  \n\n}\nbody {\n  font-family: 'Antipasto', serif, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color:  #db8763b9;\n}\n\n.sidebar {\n  width: 250px;\n  height: 100vh;\n  background-color: #db8763;\n  color: white;\n  padding: 20px;\n  margin-left: 1em;\n  margin-right: 2em;\n  box-sizing: border-box;\n  float: left;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n\n}\n\n.sidebar-header {\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n\n.sidebar-menu {\n  list-style: none;\n  padding: 0;\n}\n\n.sidebar-menu li {\n  padding: 10px 0;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  border-radius: 10px;\n  padding: 0.8em;\n}\n\n.sidebar-menu li:hover {\n  background-color: #eeb46281;\n  transform: scale(1.05); /* Slight scale-up on hover */\n  border:1px solid #eeb462;\n\n  \n\n}\n\n.sidebar-menu li.active {\n  background-color: #eeb462;\n  font-weight: bold;\n  transform: scale(0.95); /* Slight scale-down on active state */\n\n}\n#modal{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width:auto;\n  background-color:  #ce7674;\n  padding: 1rem;\n  border-radius: 20px;\n}\n\n.center-content {\n  margin-left: 1em;\n  background-color: #eeb462f8;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(auto, 100%));\n  height: 100vh;\n  justify-content: center;\n  padding-top: 1em;\n  border-radius: 20px;\n  margin: 0 auto;\n}\nmain{\n}\n\n#taskForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#taskFormElement {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin: 10px 10px;\n  border-radius: 20px;\n  gap:1em;\n\n}\n\n\n.task-item h3 {\n  flex-grow: 1;\n  margin: 0;\n  text-decoration: none;\n  transition: text-decoration 0.2s;\n  padding-right: 2em;\n}\n\np{\n  text-align: center;\n}\n\n.due-date{\n  color: #3498db;\n}\n.info-icon {\n  width: 20px; /* Adjust to your preferred size */\n  height: 20px; /* Adjust to your preferred size */\n}\n\n\n/* CSS for the hover effect on the task item */\n.task:hover {\n  background-color: #eeb46265; /* Change the background color on hover */\n  cursor: pointer; /* Change the cursor to a pointer on hover */\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add a shadow on hover */\n}\n\n.task-item button.remove-task-button {\n  background-color: #ff5252;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  transform: rotate(180deg);\n}\n/* Default styles */\nbutton.remove-task-button {\n  width: 2em;\n  height: 2em;\n  background-color: #3498db;\n  color: #fff;\n  text-align: center;\n  border-radius: 50px;\n  transition: transform 0.3s ease; /* Add a smooth transition for the spin effect */\n}\n\n/* Hover effect */\nbutton.remove-task-button:hover {\n  animation: spin 0.8s ease ; /* Apply the spin animation on hover */\n}\n\n/* Keyframes animation for spinning */\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n\n.task-item button.remove-task-button:hover {\n  background-color: #544667;\n  transform: rotate(180deg);\n\n}\n\n#newTaskButton {\n  background-color: #ce7674; /* Background color */\n  color: #fff; /* Text color */\n  padding: 10px 20px; /* Padding */\n  border: none; /* Remove border */\n  border-radius: 5px; /* Rounded corners */\n  cursor: pointer; /* Cursor style on hover */\n  font-size: 16px; /* Font size */\n  transition: background-color 0.3s, transform 0.2s; /* Smooth transition */\n  margin-left: 1em;\n  \n\n  /* Add a subtle shadow for depth */\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n/* Style on hover */\n#newTaskButton:hover {\n  background-color: #544667; /* Darker background color on hover */\n  transform: scale(1.05); /* Slight scale-up on hover */\n}\n\n/* Style for active (clicked) state */\n#newTaskButton:active {\n  transform: scale(0.95); /* Slight scale-down on active state */\n}\n/* Media query to adjust column width for smaller screens */\n@media (max-width: 768px) {\n  .task-list {\n      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); /* Shrink columns to 100% width */\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (9:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| // svg elements\n| const infoIcon = (\n>     <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n|       <path d=\"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z\" />\n|     </svg>");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.js */ "./src/style.js");





// Event listener for the "+ New Task" button
newTaskButton.addEventListener("click", (e) => {
    // Prevent the click event from propagating to the document
    e.stopPropagation();
    
    // Toggle the visibility of the task form and modal
    taskForm.classList.toggle("hidden");
    modal.classList.toggle("hidden");
});

// Event listener for the task form submission
taskFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get values from the form
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;
    
    // Create a new task object
    const task = {
        title,
        dueDate,
        priority,
        description,
        completed:false,
    };
    
    // Save the task to localStorage
    saveTask(task);
    
    // Add the task to the task list
    addTaskToTaskList(task);
    
    // Clear the form
    taskFormElement.reset();
    
    // Hide the form and modal
    taskForm.classList.add("hidden");
    modal.classList.add("hidden");
});

function closeModalOnClickOutside(event, modal, taskForm) {
    // Check if the modal is open and the click occurred outside of it
    if (!taskForm.contains(event.target) && !modal.contains(event.target)) {
        // Hide the form and modal
        taskForm.classList.add("hidden");
        modal.classList.add("hidden");
    }
}

// Event listener to close the modal when clicking outside of it
document.addEventListener("click", (e) => {
    closeModalOnClickOutside(e, modal, taskForm);
});

// Function to save a task to localStorage
function saveTask(task) {
    // Get existing tasks from localStorage (if any)
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Find the index of the task with the same title
    const taskIndex = existingTasks.findIndex((existingTask) => existingTask.title === task.title);

    if (taskIndex !== -1) {
        // Update the task if it exists
        existingTasks[taskIndex] = task;
    } else {
        // Add the new task to the existing tasks
        existingTasks.push(task);
    }

    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

// Function to remove a task
function removeTask(taskItem) {
    // Remove the task item from the task list
    taskList.removeChild(taskItem);
    
    // Get the list of tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Find and remove the task from the tasks array based on some unique identifier (e.g., task title)
    const titleToRemove = taskItem.querySelector("h3").textContent;
    const updatedTasks = tasks.filter((task) => task.title !== titleToRemove);
    
    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Function to add a task to the task list
function addTaskToTaskList(task) {
    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Use a label element to wrap the entire task item content
    taskItem.innerHTML = `
    <label class="task">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <h3 class="task-title">${task.title}</h3>
        <p class="due-date">${task.dueDate}</p>
        <p>Urgency: <br>${task.priority}</p>
        <p>Description: ${task.description}</p>
        ${infoIcon}
        <img src="./dist/icons/information-outline.svg" alt="Icon" class="info-icon">
        <div class="info-popup hidden">
            <p>Due Date: ${task.dueDate}</p>
            <p>Urgency: ${task.priority}</p>
        </div>
    </div>
        <button class="remove-task-button">❌</button>
    </label>
    `;

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Add a click event listener to the Remove button
    const removeButton = taskItem.querySelector(".remove-task-button");
    removeButton.addEventListener("click", () => {
        removeTask(taskItem);
    });

    // Add a change event listener to the checkbox
    const checkbox = taskItem.querySelector(".task-checkbox");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTask(task); // Update the task status in localStorage
        (0,_style_js__WEBPACK_IMPORTED_MODULE_2__.updateTaskTitleStyle)(taskItem, checkbox.checked);
    });

    // Update the task title style based on the initial checkbox state
    (0,_style_js__WEBPACK_IMPORTED_MODULE_2__.updateTaskTitleStyle)(taskItem, task.completed);
}




// Function to load tasks from localStorage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Loop through the tasks and add them to the task list
    tasks.forEach((task) => {
        addTaskToTaskList(task);
        const taskItem = taskList.lastChild; // Get the reference to the added task item

        // Set the checked attribute of the checkbox based on the task's completed status
        const checkbox = taskItem.querySelector(".task-checkbox");
        checkbox.checked = task.completed;
    });
}

(0,_style_js__WEBPACK_IMPORTED_MODULE_2__.activeSwitcher)();
// Load tasks when the page loads
window.addEventListener("load", loadTasks);


/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeSwitcher: () => (/* binding */ activeSwitcher),
/* harmony export */   stylingFunctions: () => (/* binding */ stylingFunctions),
/* harmony export */   toggleCheckboxOnClick: () => (/* binding */ toggleCheckboxOnClick),
/* harmony export */   updateTaskTitleStyle: () => (/* binding */ updateTaskTitleStyle)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


//Function that toogles the active selection
function activeSwitcher() {
    const activeSwitch = document.querySelectorAll(".activeSwitch");

    activeSwitch.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from items
            activeSwitch.forEach(item => {
                item.classList.remove("active");
            });

            // Add "active" class to clicked item
            item.classList.add("active");
        })
    })
}

// Function to update the task title with strikethrough
function updateTaskTitleStyle(taskItem, isChecked) {
    const titleElement = taskItem.querySelector("h3");
    if (isChecked) {
        titleElement.style.textDecoration = "line-through";
    } else {
        titleElement.style.textDecoration = "none";
    }
}

// Function to toggle the checkbox when clicking inside a task item
function toggleCheckboxOnClick(taskItem) {
    const checkbox = taskItem.querySelector(".task-checkbox");
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        
        // Get the task title from the task item
        const taskTitle = taskItem.querySelector("h3").textContent;
        
        // Find the corresponding task in local storage and update its completed status
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.map((task) => {
            if (task.title === taskTitle) {
                task.completed = checkbox.checked;
            }
            return task;
        });
        
        // Save the updated tasks back to localStorage
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        
        // Call the updateTaskTitleStyle function to update the title style based on the checkbox state
        updateTaskTitleStyle(taskItem, checkbox.checked);
    }
}



// Event listener to handle checkbox changes
taskList.addEventListener("change", (e) => {
    if (e.target.classList.contains("task-checkbox")) {
        const taskItem = e.target.closest(".task-item");
        if (taskItem) {
            updateTaskTitleStyle(taskItem, e.target.checked);
        }
    }
});

const stylingFunctions = {
    activeSwitcher,
    updateTaskTitleStyle,
    toggleCheckboxOnClick,
};


/***/ }),

/***/ "./dist/fonts/antipasto.extrabold.ttf":
/*!********************************************!*\
  !*** ./dist/fonts/antipasto.extrabold.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "948580222ebfe74fb04f.ttf";

/***/ }),

/***/ "./dist/fonts/antipasto.regular.ttf":
/*!******************************************!*\
  !*** ./dist/fonts/antipasto.regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88f060fc35a9f2de0ad5.ttf";

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9kaXN0L2ZvbnRzL2FudGlwYXN0by5leHRyYWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2Rpc3QvZm9udHMvYW50aXBhc3RvLnJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQW50aXBhc3RvIFBybyBFeHRyYUJvbGQnO1xuICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30gKSBmb3JtYXQoJy50dGYnKTtcbiAgZm9udC1mYW1pbHk6ICdBbnRpcGFzdG8nO1xuICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnLnR0ZicpO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBcbn1cblxuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdBbnRpcGFzdG8gUHJvIEV4dHJhQm9sZCcsIHNhbnMtc2VyaWYgO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI4NzYzO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgXG5cbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0FudGlwYXN0bycsIHNlcmlmLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICAjZGI4NzYzYjk7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI4NzYzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbG9hdDogbGVmdDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG59XG5cbi5zaWRlYmFyLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXItbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyLW1lbnUgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjhlbTtcbn1cblxuLnNpZGViYXItbWVudSBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWI0NjI4MTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0IHNjYWxlLXVwIG9uIGhvdmVyICovXG4gIGJvcmRlcjoxcHggc29saWQgI2VlYjQ2MjtcblxuICBcblxufVxuXG4uc2lkZWJhci1tZW51IGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWI0NjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyAvKiBTbGlnaHQgc2NhbGUtZG93biBvbiBhY3RpdmUgc3RhdGUgKi9cblxufVxuI21vZGFse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDphdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2NlNzY3NDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNlbnRlci1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlYjQ2MmY4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChhdXRvLCAxMDAlKSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbm1haW57XG59XG5cbiN0YXNrRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdGFza0Zvcm1FbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGdhcDoxZW07XG5cbn1cblxuXG4udGFzay1pdGVtIGgzIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuMnM7XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cblxucHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHVlLWRhdGV7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmluZm8taWNvbiB7XG4gIHdpZHRoOiAyMHB4OyAvKiBBZGp1c3QgdG8geW91ciBwcmVmZXJyZWQgc2l6ZSAqL1xuICBoZWlnaHQ6IDIwcHg7IC8qIEFkanVzdCB0byB5b3VyIHByZWZlcnJlZCBzaXplICovXG59XG5cblxuLyogQ1NTIGZvciB0aGUgaG92ZXIgZWZmZWN0IG9uIHRoZSB0YXNrIGl0ZW0gKi9cbi50YXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlYjQ2MjY1OyAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBDaGFuZ2UgdGhlIGN1cnNvciB0byBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIEFkZCBhIHNoYWRvdyBvbiBob3ZlciAqL1xufVxuXG4udGFzay1pdGVtIGJ1dHRvbi5yZW1vdmUtdGFzay1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi8qIERlZmF1bHQgc3R5bGVzICovXG5idXR0b24ucmVtb3ZlLXRhc2stYnV0dG9uIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIEFkZCBhIHNtb290aCB0cmFuc2l0aW9uIGZvciB0aGUgc3BpbiBlZmZlY3QgKi9cbn1cblxuLyogSG92ZXIgZWZmZWN0ICovXG5idXR0b24ucmVtb3ZlLXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgZWFzZSA7IC8qIEFwcGx5IHRoZSBzcGluIGFuaW1hdGlvbiBvbiBob3ZlciAqL1xufVxuXG4vKiBLZXlmcmFtZXMgYW5pbWF0aW9uIGZvciBzcGlubmluZyAqL1xuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuLnRhc2staXRlbSBidXR0b24ucmVtb3ZlLXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NDY2NztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblxufVxuXG4jbmV3VGFza0J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTc2NzQ7IC8qIEJhY2tncm91bmQgY29sb3IgKi9cbiAgY29sb3I6ICNmZmY7IC8qIFRleHQgY29sb3IgKi9cbiAgcGFkZGluZzogMTBweCAyMHB4OyAvKiBQYWRkaW5nICovXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlciAqL1xuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBzdHlsZSBvbiBob3ZlciAqL1xuICBmb250LXNpemU6IDE2cHg7IC8qIEZvbnQgc2l6ZSAqL1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjJzOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBcblxuICAvKiBBZGQgYSBzdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIFN0eWxlIG9uIGhvdmVyICovXG4jbmV3VGFza0J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDQ2Njc7IC8qIERhcmtlciBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodCBzY2FsZS11cCBvbiBob3ZlciAqL1xufVxuXG4vKiBTdHlsZSBmb3IgYWN0aXZlIChjbGlja2VkKSBzdGF0ZSAqL1xuI25ld1Rhc2tCdXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgLyogU2xpZ2h0IHNjYWxlLWRvd24gb24gYWN0aXZlIHN0YXRlICovXG59XG4vKiBNZWRpYSBxdWVyeSB0byBhZGp1c3QgY29sdW1uIHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGFzay1saXN0IHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMCUsIDFmcikpOyAvKiBTaHJpbmsgY29sdW1ucyB0byAxMDAlIHdpZHRoICovXG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLDJEQUE4RDtFQUM5RCx3QkFBd0I7RUFDeEIsMERBQTJEO0FBQzdEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCOzs7QUFHcEI7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0IsRUFBRSw2QkFBNkI7RUFDckQsd0JBQXdCOzs7O0FBSTFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBRSxzQ0FBc0M7O0FBRWhFO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsNERBQTREO0VBQzVELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixPQUFPOztBQUVUOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXLEVBQUUsa0NBQWtDO0VBQy9DLFlBQVksRUFBRSxrQ0FBa0M7QUFDbEQ7OztBQUdBLDhDQUE4QztBQUM5QztFQUNFLDJCQUEyQixFQUFFLHlDQUF5QztFQUN0RSxlQUFlLEVBQUUsNENBQTRDO0VBQzdELHNDQUFzQyxFQUFFLDBCQUEwQjtBQUNwRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0IsRUFBRSxnREFBZ0Q7QUFDbkY7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsMEJBQTBCLEVBQUUsc0NBQXNDO0FBQ3BFOztBQUVBLHFDQUFxQztBQUNyQztFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELFdBQVcsRUFBRSxlQUFlO0VBQzVCLGtCQUFrQixFQUFFLFlBQVk7RUFDaEMsWUFBWSxFQUFFLGtCQUFrQjtFQUNoQyxrQkFBa0IsRUFBRSxvQkFBb0I7RUFDeEMsZUFBZSxFQUFFLDBCQUEwQjtFQUMzQyxlQUFlLEVBQUUsY0FBYztFQUMvQixpREFBaUQsRUFBRSxzQkFBc0I7RUFDekUsZ0JBQWdCOzs7RUFHaEIsa0NBQWtDO0VBQ2xDLDBDQUEwQztBQUM1Qzs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUIsRUFBRSxxQ0FBcUM7RUFDaEUsc0JBQXNCLEVBQUUsNkJBQTZCO0FBQ3ZEOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLHNCQUFzQixFQUFFLHNDQUFzQztBQUNoRTtBQUNBLDJEQUEyRDtBQUMzRDtFQUNFO01BQ0ksMkRBQTJELEVBQUUsaUNBQWlDO0VBQ2xHO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0FudGlwYXN0byBQcm8gRXh0cmFCb2xkJztcXG4gIHNyYzp1cmwoJy9kaXN0L2ZvbnRzL2FudGlwYXN0by5leHRyYWJvbGQudHRmJyApIGZvcm1hdCgnLnR0ZicpO1xcbiAgZm9udC1mYW1pbHk6ICdBbnRpcGFzdG8nO1xcbiAgc3JjOnVybCgnL2Rpc3QvZm9udHMvYW50aXBhc3RvLnJlZ3VsYXIudHRmJykgZm9ybWF0KCcudHRmJyk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIFxcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdBbnRpcGFzdG8gUHJvIEV4dHJhQm9sZCcsIHNhbnMtc2VyaWYgO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiODc2MztcXG4gIGNvbG9yOiAjZjBmMGYwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBcXG5cXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0FudGlwYXN0bycsIHNlcmlmLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZGI4NzYzYjk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI4NzYzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhci1tZW51IGxpIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwLjhlbTtcXG59XFxuXFxuLnNpZGViYXItbWVudSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWViNDYyODE7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG4gIGJvcmRlcjoxcHggc29saWQgI2VlYjQ2MjtcXG5cXG4gIFxcblxcbn1cXG5cXG4uc2lkZWJhci1tZW51IGxpLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWViNDYyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyAvKiBTbGlnaHQgc2NhbGUtZG93biBvbiBhY3RpdmUgc3RhdGUgKi9cXG5cXG59XFxuI21vZGFse1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOmF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2NlNzY3NDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uY2VudGVyLWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWI0NjJmODtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChhdXRvLCAxMDAlKSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5tYWlue1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrRm9ybUVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGdhcDoxZW07XFxuXFxufVxcblxcblxcbi50YXNrLWl0ZW0gaDMge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uIDAuMnM7XFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcblxcbnB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZXtcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcbn1cXG4uaW5mby1pY29uIHtcXG4gIHdpZHRoOiAyMHB4OyAvKiBBZGp1c3QgdG8geW91ciBwcmVmZXJyZWQgc2l6ZSAqL1xcbiAgaGVpZ2h0OiAyMHB4OyAvKiBBZGp1c3QgdG8geW91ciBwcmVmZXJyZWQgc2l6ZSAqL1xcbn1cXG5cXG5cXG4vKiBDU1MgZm9yIHRoZSBob3ZlciBlZmZlY3Qgb24gdGhlIHRhc2sgaXRlbSAqL1xcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWI0NjI2NTsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIENoYW5nZSB0aGUgY3Vyc29yIHRvIGEgcG9pbnRlciBvbiBob3ZlciAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIEFkZCBhIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG5cXG4udGFzay1pdGVtIGJ1dHRvbi5yZW1vdmUtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI1MjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4vKiBEZWZhdWx0IHN0eWxlcyAqL1xcbmJ1dHRvbi5yZW1vdmUtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7IC8qIEFkZCBhIHNtb290aCB0cmFuc2l0aW9uIGZvciB0aGUgc3BpbiBlZmZlY3QgKi9cXG59XFxuXFxuLyogSG92ZXIgZWZmZWN0ICovXFxuYnV0dG9uLnJlbW92ZS10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBhbmltYXRpb246IHNwaW4gMC44cyBlYXNlIDsgLyogQXBwbHkgdGhlIHNwaW4gYW5pbWF0aW9uIG9uIGhvdmVyICovXFxufVxcblxcbi8qIEtleWZyYW1lcyBhbmltYXRpb24gZm9yIHNwaW5uaW5nICovXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLnRhc2staXRlbSBidXR0b24ucmVtb3ZlLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDQ2Njc7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcblxcbn1cXG5cXG4jbmV3VGFza0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U3Njc0OyAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXFxuICBjb2xvcjogI2ZmZjsgLyogVGV4dCBjb2xvciAqL1xcbiAgcGFkZGluZzogMTBweCAyMHB4OyAvKiBQYWRkaW5nICovXFxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBzdHlsZSBvbiBob3ZlciAqL1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBGb250IHNpemUgKi9cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuMnM7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgXFxuXFxuICAvKiBBZGQgYSBzdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4vKiBTdHlsZSBvbiBob3ZlciAqL1xcbiNuZXdUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDQ2Njc7IC8qIERhcmtlciBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGUgZm9yIGFjdGl2ZSAoY2xpY2tlZCkgc3RhdGUgKi9cXG4jbmV3VGFza0J1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgLyogU2xpZ2h0IHNjYWxlLWRvd24gb24gYWN0aXZlIHN0YXRlICovXFxufVxcbi8qIE1lZGlhIHF1ZXJ5IHRvIGFkanVzdCBjb2x1bW4gd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnRhc2stbGlzdCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwJSwgMWZyKSk7IC8qIFNocmluayBjb2x1bW5zIHRvIDEwMCUgd2lkdGggKi9cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCcuL2RvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrVGl0bGVTdHlsZSwgYWN0aXZlU3dpdGNoZXIsIHRvZ2dsZUNoZWNrYm94T25DbGljayB9IGZyb20gJy4vc3R5bGUuanMnO1xuXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgXCIrIE5ldyBUYXNrXCIgYnV0dG9uXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIFByZXZlbnQgdGhlIGNsaWNrIGV2ZW50IGZyb20gcHJvcGFnYXRpbmcgdG8gdGhlIGRvY3VtZW50XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBcbiAgICAvLyBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRhc2sgZm9ybSBhbmQgbW9kYWxcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSB0YXNrIGZvcm0gc3VibWlzc2lvblxudGFza0Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgdGFzayBvYmplY3RcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjb21wbGV0ZWQ6ZmFsc2UsXG4gICAgfTtcbiAgICBcbiAgICAvLyBTYXZlIHRoZSB0YXNrIHRvIGxvY2FsU3RvcmFnZVxuICAgIHNhdmVUYXNrKHRhc2spO1xuICAgIFxuICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgdGFzayBsaXN0XG4gICAgYWRkVGFza1RvVGFza0xpc3QodGFzayk7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGhlIGZvcm1cbiAgICB0YXNrRm9ybUVsZW1lbnQucmVzZXQoKTtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBmb3JtIGFuZCBtb2RhbFxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsT25DbGlja091dHNpZGUoZXZlbnQsIG1vZGFsLCB0YXNrRm9ybSkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBtb2RhbCBpcyBvcGVuIGFuZCB0aGUgY2xpY2sgb2NjdXJyZWQgb3V0c2lkZSBvZiBpdFxuICAgIGlmICghdGFza0Zvcm0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAvLyBIaWRlIHRoZSBmb3JtIGFuZCBtb2RhbFxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbn1cblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIG1vZGFsIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xvc2VNb2RhbE9uQ2xpY2tPdXRzaWRlKGUsIG1vZGFsLCB0YXNrRm9ybSk7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gc2F2ZSBhIHRhc2sgdG8gbG9jYWxTdG9yYWdlXG5mdW5jdGlvbiBzYXZlVGFzayh0YXNrKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIHRhc2tzIGZyb20gbG9jYWxTdG9yYWdlIChpZiBhbnkpXG4gICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG5cbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgdGFzayB3aXRoIHRoZSBzYW1lIHRpdGxlXG4gICAgY29uc3QgdGFza0luZGV4ID0gZXhpc3RpbmdUYXNrcy5maW5kSW5kZXgoKGV4aXN0aW5nVGFzaykgPT4gZXhpc3RpbmdUYXNrLnRpdGxlID09PSB0YXNrLnRpdGxlKTtcblxuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayBpZiBpdCBleGlzdHNcbiAgICAgICAgZXhpc3RpbmdUYXNrc1t0YXNrSW5kZXhdID0gdGFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZGQgdGhlIG5ldyB0YXNrIHRvIHRoZSBleGlzdGluZyB0YXNrc1xuICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyBiYWNrIHRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xufVxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYSB0YXNrXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJdGVtKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSB0YXNrIGl0ZW0gZnJvbSB0aGUgdGFzayBsaXN0XG4gICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0l0ZW0pO1xuICAgIFxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiB0YXNrcyBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgICBcbiAgICAvLyBGaW5kIGFuZCByZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgdGFza3MgYXJyYXkgYmFzZWQgb24gc29tZSB1bmlxdWUgaWRlbnRpZmllciAoZS5nLiwgdGFzayB0aXRsZSlcbiAgICBjb25zdCB0aXRsZVRvUmVtb3ZlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcihcImgzXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGVUb1JlbW92ZSk7XG4gICAgXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyBiYWNrIHRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2tzKSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBhIHRhc2sgdG8gdGhlIHRhc2sgbGlzdFxuZnVuY3Rpb24gYWRkVGFza1RvVGFza0xpc3QodGFzaykge1xuICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIGl0ZW1cbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcblxuICAgIC8vIFVzZSBhIGxhYmVsIGVsZW1lbnQgdG8gd3JhcCB0aGUgZW50aXJlIHRhc2sgaXRlbSBjb250ZW50XG4gICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgIDxsYWJlbCBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiICR7dGFzay5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgIDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvcD5cbiAgICAgICAgPHA+VXJnZW5jeTogPGJyPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgIDxwPkRlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAke2luZm9JY29ufVxuICAgICAgICA8aW1nIHNyYz1cIi4vZGlzdC9pY29ucy9pbmZvcm1hdGlvbi1vdXRsaW5lLnN2Z1wiIGFsdD1cIkljb25cIiBjbGFzcz1cImluZm8taWNvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1wb3B1cCBoaWRkZW5cIj5cbiAgICAgICAgICAgIDxwPkR1ZSBEYXRlOiAke3Rhc2suZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICA8cD5VcmdlbmN5OiAke3Rhc2sucHJpb3JpdHl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10YXNrLWJ1dHRvblwiPuKdjDwvYnV0dG9uPlxuICAgIDwvbGFiZWw+XG4gICAgYDtcblxuICAgIC8vIEFkZCB0aGUgdGFzayBpdGVtIHRvIHRoZSB0YXNrIGxpc3RcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG5cbiAgICAvLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgUmVtb3ZlIGJ1dHRvblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlLXRhc2stYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVUYXNrKHRhc2tJdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhIGNoYW5nZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgICBzYXZlVGFzayh0YXNrKTsgLy8gVXBkYXRlIHRoZSB0YXNrIHN0YXR1cyBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdXBkYXRlVGFza1RpdGxlU3R5bGUodGFza0l0ZW0sIGNoZWNrYm94LmNoZWNrZWQpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSB0YXNrIHRpdGxlIHN0eWxlIGJhc2VkIG9uIHRoZSBpbml0aWFsIGNoZWNrYm94IHN0YXRlXG4gICAgdXBkYXRlVGFza1RpdGxlU3R5bGUodGFza0l0ZW0sIHRhc2suY29tcGxldGVkKTtcbn1cblxuXG5cblxuLy8gRnVuY3Rpb24gdG8gbG9hZCB0YXNrcyBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgZGlzcGxheSB0aGVtXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSB0YXNrcyBhbmQgYWRkIHRoZW0gdG8gdGhlIHRhc2sgbGlzdFxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYWRkVGFza1RvVGFza0xpc3QodGFzayk7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGFza0xpc3QubGFzdENoaWxkOyAvLyBHZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgYWRkZWQgdGFzayBpdGVtXG5cbiAgICAgICAgLy8gU2V0IHRoZSBjaGVja2VkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3ggYmFzZWQgb24gdGhlIHRhc2sncyBjb21wbGV0ZWQgc3RhdHVzXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWNoZWNrYm94XCIpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gICAgfSk7XG59XG5cbmFjdGl2ZVN3aXRjaGVyKCk7XG4vLyBMb2FkIHRhc2tzIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkVGFza3MpO1xuIiwiaW1wb3J0ICcuL2luZGV4LmpzJztcblxuLy9GdW5jdGlvbiB0aGF0IHRvb2dsZXMgdGhlIGFjdGl2ZSBzZWxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVTd2l0Y2hlcigpIHtcbiAgICBjb25zdCBhY3RpdmVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVN3aXRjaFwiKTtcblxuICAgIGFjdGl2ZVN3aXRjaC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gaXRlbXNcbiAgICAgICAgICAgIGFjdGl2ZVN3aXRjaC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBjbGlja2VkIGl0ZW1cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2sgdGl0bGUgd2l0aCBzdHJpa2V0aHJvdWdoXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza1RpdGxlU3R5bGUodGFza0l0ZW0sIGlzQ2hlY2tlZCkge1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byB0b2dnbGUgdGhlIGNoZWNrYm94IHdoZW4gY2xpY2tpbmcgaW5zaWRlIGEgdGFzayBpdGVtXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2hlY2tib3hPbkNsaWNrKHRhc2tJdGVtKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2hlY2tib3hcIik7XG4gICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayB0aXRsZSBmcm9tIHRoZSB0YXNrIGl0ZW1cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcihcImgzXCIpLnRleHRDb250ZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyB0YXNrIGluIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSBpdHMgY29tcGxldGVkIHN0YXR1c1xuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgdGFza3MgYmFjayB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENhbGwgdGhlIHVwZGF0ZVRhc2tUaXRsZVN0eWxlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGl0bGUgc3R5bGUgYmFzZWQgb24gdGhlIGNoZWNrYm94IHN0YXRlXG4gICAgICAgIHVwZGF0ZVRhc2tUaXRsZVN0eWxlKHRhc2tJdGVtLCBjaGVja2JveC5jaGVja2VkKTtcbiAgICB9XG59XG5cblxuXG4vLyBFdmVudCBsaXN0ZW5lciB0byBoYW5kbGUgY2hlY2tib3ggY2hhbmdlc1xudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNoZWNrYm94XCIpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWl0ZW1cIik7XG4gICAgICAgIGlmICh0YXNrSXRlbSkge1xuICAgICAgICAgICAgdXBkYXRlVGFza1RpdGxlU3R5bGUodGFza0l0ZW0sIGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBzdHlsaW5nRnVuY3Rpb25zID0ge1xuICAgIGFjdGl2ZVN3aXRjaGVyLFxuICAgIHVwZGF0ZVRhc2tUaXRsZVN0eWxlLFxuICAgIHRvZ2dsZUNoZWNrYm94T25DbGljayxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9