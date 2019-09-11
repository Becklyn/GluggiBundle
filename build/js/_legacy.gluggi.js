/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/gluggi.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icon/active.svg":
/*!********************************!*\
  !*** ./assets/icon/active.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13\" height=\"10\" viewBox=\"0 0 13 10\">\n  <path fill=\"currentColor\" d=\"M7.659 0l-.828.9 3.732 3.493H0v1.218h10.565L6.831 9.105l.828.9 5.341-5z\"/>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/close.svg":
/*!*******************************!*\
  !*** ./assets/icon/close.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14.829\" height=\"14.828\" viewBox=\"0 0 14.829 14.828\">\n  <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n    <path d=\"M13.414 1.414l-12 12\"/>\n    <path d=\"M1.414 1.414l12 12\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/external.svg":
/*!**********************************!*\
  !*** ./assets/icon/external.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.264\" height=\"16.263\" viewBox=\"0 0 16.264 16.263\">\n  <path fill=\"currentColor\" d=\"M5.416 3.776l.051 1.222 5.11-.169-7.47 7.47.861.86 7.47-7.47-.169 5.11 1.222.052.241-7.312z\"/>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/menu.svg":
/*!******************************!*\
  !*** ./assets/icon/menu.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"14\" viewBox=\"0 0 20 14\">\n  <g stroke-width=\"2\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n    <path d=\"M1 7h18M1 1h18M1 13h18\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/search.svg":
/*!********************************!*\
  !*** ./assets/icon/search.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.811\" height=\"13.811\" viewBox=\"0 0 13.811 13.811\">\n  <g transform=\"translate(-2.25 -2.25)\" stroke-width=\"1.5\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n    <circle cx=\"5.472\" cy=\"5.472\" r=\"5.472\" transform=\"translate(3 3)\"/>\n    <path d=\"M15 15l-2.296-2.296\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/js/gluggi.ts":
/*!*****************************!*\
  !*** ./assets/js/gluggi.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mojave/dom/traverse */ "./node_modules/mojave/dom/traverse.js");
/* harmony import */ var mojave_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mojave/json */ "./node_modules/mojave/json.js");
/* harmony import */ var mojave_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mojave/mount */ "./node_modules/mojave/mount/index.js");
/* harmony import */ var _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gluggi/full-screen */ "./assets/js/gluggi/full-screen.ts");
/* harmony import */ var _gluggi_GluggiRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gluggi/GluggiRouter */ "./assets/js/gluggi/GluggiRouter.ts");
/* harmony import */ var _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gluggi/sidebar */ "./assets/js/gluggi/sidebar.ts");
/* harmony import */ var _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gluggi/SidebarContent */ "./assets/js/gluggi/SidebarContent.tsx");
/* harmony import */ var _gluggi_usages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gluggi/usages */ "./assets/js/gluggi/usages.ts");








var dataContainer = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-global-data");

if (dataContainer === null) {
  throw new Error("Can't run Gluggi, as the global gluggi data is missing.");
}

var data = Object(mojave_json__WEBPACK_IMPORTED_MODULE_1__["parseElementAsJson"])(dataContainer);
var router = new _gluggi_GluggiRouter__WEBPACK_IMPORTED_MODULE_4__["GluggiRouter"](data.url);
var contentView = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-content-view");
console.log(router.home());
console.log(router.component("test", "abc"));
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-sidebar", _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_5__["initSidebarVisibilityToggle"]);
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-sidebar-content-data", _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_6__["SidebarContent"], {
  type: "jsx",
  params: {
    router: router
  }
});
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-action-usages", _gluggi_usages__WEBPACK_IMPORTED_MODULE_7__["initUsagesToggle"]);

if (null !== contentView) {
  Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-toggle-fullscreen", _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_3__["initToggleFullScreen"], {
    params: [contentView]
  });
}

/***/ }),

/***/ "./assets/js/gluggi/GluggiRouter.ts":
/*!******************************************!*\
  !*** ./assets/js/gluggi/GluggiRouter.ts ***!
  \******************************************/
/*! exports provided: GluggiRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GluggiRouter", function() { return GluggiRouter; });
var GluggiRouter = function () {
  function GluggiRouter(prefix) {
    this.prefix = prefix;
  }

  GluggiRouter.prototype.home = function () {
    return this.prefix;
  };

  GluggiRouter.prototype.component = function (type, key) {
    return "" + this.prefix + type + "/" + key;
  };

  return GluggiRouter;
}();



/***/ }),

/***/ "./assets/js/gluggi/SidebarContent.tsx":
/*!*********************************************!*\
  !*** ./assets/js/gluggi/SidebarContent.tsx ***!
  \*********************************************/
/*! exports provided: SidebarContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContent", function() { return SidebarContent; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _icon_active_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon/active.svg */ "./assets/icon/active.svg");
/* harmony import */ var _icon_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon/search.svg */ "./assets/icon/search.svg");
/* harmony import */ var _icon_external_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/external.svg */ "./assets/icon/external.svg");
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");







function renderComponent(component, showFullName) {
  if (showFullName === void 0) {
    showFullName = false;
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link " + (component.active ? " gluggi-active" : ""),
    href: component.url
  }, component.active && icon(_icon_active_svg__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, showFullName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " " + component.name, "page" === component.type ? icon(_icon_external_svg__WEBPACK_IMPORTED_MODULE_4__["default"]) : "")));
}

function icon(iconSvg) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-icon",
    dangerouslySetInnerHTML: {
      __html: iconSvg
    }
  });
}

function GluggiType(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-component"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
    class: "gluggi-component-title"
  }, props.type.title), props.type.components.length > 0 ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", {
    class: "gluggi-component-list"
  }, props.type.components.map(function (component) {
    return renderComponent(component, !!props.showFullName);
  })) : Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-component-empty"
  }, props.emptyText));
}

function SidebarContent(props) {
  var content = [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-empty"
  }, "There are no components.")];

  if (props.types.length) {
    var _a = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        query = _a[0],
        setQuery_1 = _a[1];

    var search = null;

    if ("" !== query.trim()) {
      search = {
        title: "Search results",
        components: Object(match_sorter__WEBPACK_IMPORTED_MODULE_5__["default"])(flattenTypes(props.types), query.trim(), {
          keys: ["name"]
        })
      };
    }

    content = [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "gluggi-search"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      class: "gluggi-search-widget"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      type: "text",
      class: "gluggi-search-input",
      id: "component-filter",
      value: query,
      placeholder: "Search...",
      onInput: function onInput(e) {
        return setQuery_1(e.currentTarget.value);
      }
    }), icon(_icon_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "gluggi-components"
    }, search ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
      type: search,
      showFullName: true,
      emptyText: "No matches"
    }) : props.types.map(function (type) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
        type: type
      });
    }))];
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    href: props.router.home(),
    class: "gluggi-title"
  }, props.title), content);
}

function flattenTypes(types) {
  var flattened = [];
  types.forEach(function (type) {
    return type.components.forEach(function (c) {
      return flattened.push(c);
    });
  });
  return flattened;
}

/***/ }),

/***/ "./assets/js/gluggi/full-screen.ts":
/*!*****************************************!*\
  !*** ./assets/js/gluggi/full-screen.ts ***!
  \*****************************************/
/*! exports provided: initToggleFullScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initToggleFullScreen", function() { return initToggleFullScreen; });
/* harmony import */ var mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mojave/dom/events */ "./node_modules/mojave/dom/events.js");
/* harmony import */ var mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mojave/dom/manipulate */ "./node_modules/mojave/dom/manipulate.js");


function initToggleFullScreen(button, contentView) {
  var fullscreen = false;
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(button, "click", function () {
    fullscreen = !fullscreen;
    Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(contentView, "is-fullscreen", fullscreen);
    Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(button, "gluggi-is-active", fullscreen);
  });
}

/***/ }),

/***/ "./assets/js/gluggi/sidebar.ts":
/*!*************************************!*\
  !*** ./assets/js/gluggi/sidebar.ts ***!
  \*************************************/
/*! exports provided: initSidebarVisibilityToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSidebarVisibilityToggle", function() { return initSidebarVisibilityToggle; });
/* harmony import */ var mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mojave/dom/events */ "./node_modules/mojave/dom/events.js");
/* harmony import */ var mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mojave/dom/manipulate */ "./node_modules/mojave/dom/manipulate.js");
/* harmony import */ var _icon_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon/close.svg */ "./assets/icon/close.svg");
/* harmony import */ var _icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon/menu.svg */ "./assets/icon/menu.svg");




function initSidebarVisibilityToggle(sidebar) {
  var close = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-close",
    html: _icon_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
  var open = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-open",
    html: _icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(sidebar, close);
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(sidebar.parentElement, open);
  var visible = true;
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(close, "click", function () {
    sidebar.classList.add("is-hidden");
    open.classList.add("is-visible");
    visible = false;
  });
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(open, "click", function () {
    sidebar.classList.remove("is-hidden");
    open.classList.remove("is-visible");
    visible = true;
  });
}

/***/ }),

/***/ "./assets/js/gluggi/usages.ts":
/*!************************************!*\
  !*** ./assets/js/gluggi/usages.ts ***!
  \************************************/
/*! exports provided: initUsagesToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUsagesToggle", function() { return initUsagesToggle; });
/* harmony import */ var mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mojave/dom/events */ "./node_modules/mojave/dom/events.js");
/* harmony import */ var mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mojave/dom/traverse */ "./node_modules/mojave/dom/traverse.js");


function initUsagesToggle(element) {
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])("button.gluggi-action", element), "click", function () {
    element.classList.toggle("is-open");
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/match-sorter/dist/match-sorter.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/match-sorter/dist/match-sorter.esm.js ***!
  \************************************************************/
/*! exports provided: default, rankings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankings", function() { return rankings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var rankings = {
  CASE_SENSITIVE_EQUAL: 9,
  EQUAL: 8,
  STARTS_WITH: 7,
  WORD_STARTS_WITH: 6,
  STRING_CASE: 5,
  STRING_CASE_ACRONYM: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
var caseRankings = {
  CAMEL: 0.8,
  PASCAL: 0.6,
  KEBAB: 0.4,
  SNAKE: 0.2,
  NO_CASE: 0
};
matchSorter.rankings = rankings;
matchSorter.caseRankings = caseRankings;
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */

function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  } // not performing any search/sort if value(search term) is empty


  if (!value) return items;
  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return matchedItems.sort(sortRankedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var _getHighestRanking = getHighestRanking(item, keys, value, options),
        rankedItem = _getHighestRanking.rankedItem,
        rank = _getHighestRanking.rank,
        keyIndex = _getHighestRanking.keyIndex,
        _getHighestRanking$ke = _getHighestRanking.keyThreshold,
        keyThreshold = _getHighestRanking$ke === void 0 ? threshold : _getHighestRanking$ke;

    if (rank >= keyThreshold) {
      matches.push({
        rankedItem: rankedItem,
        item: item,
        rank: rank,
        index: index,
        keyIndex: keyIndex
      });
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedItem: item,
      rank: getMatchRanking(item, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
    }

    return {
      rankedItem: itemValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  /* eslint complexity:[2, 12] */
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }

  var caseRank = getCaseRanking(testString);
  var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
  var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank); // Lower casing before further comparison

  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL + caseRank;
  } // starts with


  if (testString.indexOf(stringToRank) === 0) {
    return rankings.STARTS_WITH + caseRank;
  } // word starts with


  if (testString.indexOf(" " + stringToRank) !== -1) {
    return rankings.WORD_STARTS_WITH + caseRank;
  } // is a part inside a cased string


  if (isPartial) {
    return rankings.STRING_CASE + caseRank;
  } // is acronym for a cased string


  if (caseRank > 0 && isCasedAcronym) {
    return rankings.STRING_CASE_ACRONYM + caseRank;
  } // contains


  if (testString.indexOf(stringToRank) !== -1) {
    return rankings.CONTAINS + caseRank;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).indexOf(stringToRank) !== -1) {
    return rankings.ACRONYM + caseRank;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score base on the case of the testString
 * @param {String} testString - the string to test against
 * @returns {Number} the number of the ranking,
 * based on the case between 0 and 1 for how the testString matches the case
 */


function getCaseRanking(testString) {
  var containsUpperCase = testString.toLowerCase() !== testString;
  var containsDash = testString.indexOf('-') >= 0;
  var containsUnderscore = testString.indexOf('_') >= 0;

  if (!containsUpperCase && !containsUnderscore && containsDash) {
    return caseRankings.KEBAB;
  }

  if (!containsUpperCase && containsUnderscore && !containsDash) {
    return caseRankings.SNAKE;
  }

  if (containsUpperCase && !containsDash && !containsUnderscore) {
    var startsWithUpperCase = testString[0].toUpperCase() === testString[0];

    if (startsWithUpperCase) {
      return caseRankings.PASCAL;
    }

    return caseRankings.CAMEL;
  }

  return caseRankings.NO_CASE;
}
/**
 * Returns whether the stringToRank is one of the case parts in the testString (works with any string case)
 * @example
 * // returns true
 * isPartialOfCase('helloWorld', 'world', caseRankings.CAMEL)
 * @example
 * // returns false
 * isPartialOfCase('helloWorld', 'oworl', caseRankings.CAMEL)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Number} caseRanking - the ranking score based on case of testString
 * @returns {Boolean} whether the stringToRank is one of the case parts in the testString
 */


function isPartialOfCase(testString, stringToRank, caseRanking) {
  var testIndex = testString.toLowerCase().indexOf(stringToRank.toLowerCase());

  switch (caseRanking) {
    case caseRankings.SNAKE:
      return testString[testIndex - 1] === '_';

    case caseRankings.KEBAB:
      return testString[testIndex - 1] === '-';

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      return testIndex !== -1 && testString[testIndex] === testString[testIndex].toUpperCase();

    default:
      return false;
  }
}
/**
 * Check if stringToRank is an acronym for a partial case
 * @example
 * // returns true
 * isCaseAcronym('super_duper_file', 'sdf', caseRankings.SNAKE)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the acronym to test
 * @param {Number} caseRank - the ranking of the case
 * @returns {Boolean} whether the stringToRank is an acronym for the testString
 */


function isCaseAcronym(testString, stringToRank, caseRank) {
  var splitValue = null;

  switch (caseRank) {
    case caseRankings.SNAKE:
      splitValue = '_';
      break;

    case caseRankings.KEBAB:
      splitValue = '-';
      break;

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      splitValue = /(?=[A-Z])/;
      break;

    default:
      splitValue = null;
  }

  var splitTestString = testString.split(splitValue);
  return stringToRank.toLowerCase().split('').reduce(function (correct, char, charIndex) {
    var splitItem = splitTestString[charIndex];
    return correct && splitItem && splitItem[0].toLowerCase() === char;
  }, true);
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index; j < string.length; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * (1 / spread);
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1; i < stringToRank.length; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first
 * Note: will never return 0
 */


function sortRankedItems(a, b) {
  var aFirst = -1;
  var bFirst = 1;
  var aRankedItem = a.rankedItem,
      aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRankedItem = b.rankedItem,
      bRank = b.rank,
      bKeyIndex = b.keyIndex;

  if (aRank === bRank) {
    if (aKeyIndex === bKeyIndex) {
      return String(aRankedItem).localeCompare(bRankedItem);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents__WEBPACK_IMPORTED_MODULE_1___default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (_typeof(key) === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item); // eslint-disable-next-line no-negated-condition
  } else if (key.indexOf('.') !== -1) {
    // handle nested keys
    value = key.split('.').reduce(function (itemObj, nestedKey) {
      return itemObj ? itemObj[nestedKey] : null;
    }, item);
  } else {
    value = item[key];
  } // concat because `value` can be a string or an array
  // eslint-disable-next-line


  return value != null ? [].concat(value) : null;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param {Object} item - the item from which the values will be retrieved
 * @param {Array} keys - the keys to use to retrieve the values
 * @return {Array} objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  return keys.reduce(function (allVals, key) {
    var values = getItemValues(item, key);

    if (values) {
      values.forEach(function (itemValue) {
        allVals.push({
          itemValue: itemValue,
          attributes: getKeyAttributes(key)
        });
      });
    }

    return allVals;
  }, []);
}
/**
 * Gets all the attributes for the given key
 * @param {Object|String} key - the key from which the attributes will be retrieved
 * @return {Object} object containing the key's attributes
 */


function getKeyAttributes(key) {
  if (typeof key === 'string') {
    key = {
      key: key
    };
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxRanking: Infinity,
    minRanking: -Infinity
  }, key);
}

/* harmony default export */ __webpack_exports__["default"] = (matchSorter);


/***/ }),

/***/ "./node_modules/mojave/dom/attr.js":
/*!*****************************************!*\
  !*** ./node_modules/mojave/dom/attr.js ***!
  \*****************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./node_modules/mojave/runtime.js");

var SPECIAL_ATTRIBUTE_SETTERS = /^(html|text|css)$/;
function setAttrs(element, attributes) {
  for (var key in attributes) {
    if (!Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(attributes, key)) {
      continue;
    }

    var value = attributes[key];

    if (SPECIAL_ATTRIBUTE_SETTERS.test(key)) {
      continue;
    }

    if (value === null || value === false) {
      element.removeAttribute(key);
    } else {
      if (element[key] !== undefined) {
        element[key] = value;
        continue;
      }

      element.setAttribute(key, value === true ? key : "" + value);
    }
  }
}

/***/ }),

/***/ "./node_modules/mojave/dom/css.js":
/*!****************************************!*\
  !*** ./node_modules/mojave/dom/css.js ***!
  \****************************************/
/*! exports provided: setStyles, getStyle, hide, show, position, offset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyles", function() { return setStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime */ "./node_modules/mojave/runtime.js");

var CUSTOM_PROPERTY_REGEX = /^--/;
var DEFAULT_STYLES = document.createElement("div").style;
var VENDOR_PREFIXES = ["-webkit-", "-moz-", "-o-", "-ms-"];
var propertyNameCache = {};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
var DIRECTLY_ACCESSIBLE_SETTERS = /scroll(Top|Left)/i;
var HAS_PIXELS_UNIT = /px$/;

function normalizeProperty(property) {
  if (propertyNameCache[property]) {
    return propertyNameCache[property];
  }

  if (property in DEFAULT_STYLES) {
    return property;
  }

  for (var i = 0; i < VENDOR_PREFIXES.length; i++) {
    var prefixedName = "".concat(VENDOR_PREFIXES[i]).concat(property);

    if (prefixedName in DEFAULT_STYLES) {
      propertyNameCache[property] = prefixedName;
      return prefixedName;
    }
  }

  propertyNameCache[property] = property;
  return property;
}

function setStyles(elements, styles) {
  var styledElements = Array.isArray(elements) ? elements : [elements];

  for (var i = 0; i < styledElements.length; i++) {
    var element = styledElements[i];
    var style = element.style;

    for (var property in styles) {
      if (!Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(styles, property)) {
        continue;
      }

      var value = styles[property];

      if (DIRECTLY_ACCESSIBLE_SETTERS.test(property)) {
        element[property] = value;
        continue;
      }

      if (CUSTOM_PROPERTY_REGEX.test(property)) {
        style.setProperty(property, value);
        continue;
      }

      if (typeof styles[property] === "number" && !IS_NON_DIMENSIONAL.test(property)) {
        value += "px";
      }

      property = normalizeProperty(property);
      style[property] = value;
    }
  }
}

function getComputedStyles(element) {
  var pseudoElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var view = null !== element.ownerDocument && element.ownerDocument.defaultView;

  if (!view || !view.opener) {
    view = window;
  }

  return view.getComputedStyle(element, pseudoElement);
}

function getStyle(element, property) {
  var pseudoElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var castedElement = element;

  if (DIRECTLY_ACCESSIBLE_SETTERS.test(property)) {
    return castedElement[property];
  }

  if (!CUSTOM_PROPERTY_REGEX.test(property)) {
    property = normalizeProperty(property);
  }

  var styles = getComputedStyles(castedElement, pseudoElement);
  var value = styles.getPropertyValue(property) || styles[property];

  if ("opacity" === property) {
    return value === "" ? "1" : value;
  }

  if (value !== undefined && !IS_NON_DIMENSIONAL.test(property) && HAS_PIXELS_UNIT.test(value)) {
    return parseInt(value.replace(HAS_PIXELS_UNIT, ""), 10);
  }

  return value;
}

function updateDisplay(element, style) {
  var list = Array.isArray(element) ? element : [element];

  for (var i = 0; i < list.length; i++) {
    list[i].style.display = style;
  }
}

function hide(element) {
  updateDisplay(element, "none");
}
function show(element) {
  updateDisplay(element, "");
}
function position(element) {
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
}
function offset(element) {
  var rect = element.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

/***/ }),

/***/ "./node_modules/mojave/dom/events.js":
/*!*******************************************!*\
  !*** ./node_modules/mojave/dom/events.js ***!
  \*******************************************/
/*! exports provided: on, off, once, delegate, trigger, getAllListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllListeners", function() { return getAllListeners; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/mojave/dom/utils.js");

var listenerRegistry = new WeakMap();
function on(element, type, handler) {
  var list = Array.isArray(element) ? element : [element];
  var types = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitStringValue"])(type);

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < types.length; j++) {
      var node = list[i];

      if (null === node) {
        continue;
      }

      var eventType = types[j];
      node.addEventListener(eventType, handler);
      var listeners = listenerRegistry.get(node);

      if (!listeners) {
        listeners = {};
        listenerRegistry.set(node, listeners);
      }

      if (listeners[eventType] === undefined) {
        listeners[eventType] = [];
      }

      listeners[eventType].push(handler);
    }
  }
}
function off(element, type, handler) {
  var list = Array.isArray(element) ? element : [element];
  var types = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitStringValue"])(type);

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < types.length; j++) {
      var node = list[i];

      if (null === node) {
        continue;
      }

      var eventType = types[j];
      node.removeEventListener(eventType, handler);
      var listeners = listenerRegistry.get(node);

      if (listeners !== undefined && listeners[eventType] !== undefined) {
        var index = listeners[eventType].indexOf(handler);

        if (-1 !== index) {
          listeners[eventType].splice(index, 1);
        }
      }
    }
  }
}
function once(element, type, handler) {
  if (null === element) {
    return null;
  }

  var intermediate = function intermediate(event) {
    handler(event);
    off(element, type, intermediate);
  };

  on(element, type, intermediate);
  return intermediate;
}
function delegate(element, selector, type, handler) {
  if (null === element) {
    return null;
  }

  var intermediate = function intermediate(event) {
    var matchedDelegatedTarget = findDelegatedTarget(element, event.target, selector);

    if (null !== matchedDelegatedTarget) {
      handler(event, matchedDelegatedTarget);
    }
  };

  on(element, type, intermediate);
  return intermediate;
}

function findDelegatedTarget(delegateElement, currentTarget, selector) {
  var node = currentTarget;

  while (null !== node && node !== delegateElement) {
    if (node.matches(selector)) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}

function trigger(element, type) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (null === element) {
    return;
  }

  var event = createEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: data
  });
  element.dispatchEvent(event);
}

function createEvent(type, args) {
  if (typeof CustomEvent !== "function") {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, !!args.bubbles, !!args.cancelable, args.detail);
    return event;
  }

  return new CustomEvent(type, args);
}

function getAllListeners(element) {
  return listenerRegistry.get(element) || {};
}

/***/ }),

/***/ "./node_modules/mojave/dom/manipulate.js":
/*!***********************************************!*\
  !*** ./node_modules/mojave/dom/manipulate.js ***!
  \***********************************************/
/*! exports provided: createElement, createUnstyledElement, remove, empty, replace, append, prepend, before, after, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnstyledElement", function() { return createUnstyledElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/mojave/dom/utils.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr */ "./node_modules/mojave/dom/attr.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css */ "./node_modules/mojave/dom/css.js");




function parseHtml(html) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  var children = doc.body.children;

  if (children.length !== 1) {
    throw new Error("Can only parse HTML with exactly one valid root element. A valid element can stand on its own in the body.");
  }

  return children[0];
}

function createElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = createUnstyledElement(type, attributes);

  if (attributes.css !== undefined) {
    Object(_css__WEBPACK_IMPORTED_MODULE_2__["setStyles"])(element, attributes.css);
  }

  return element;
}
function createUnstyledElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = -1 !== type.indexOf("<") ? parseHtml(type) : document.createElement(type);
  Object(_attr__WEBPACK_IMPORTED_MODULE_1__["setAttrs"])(element, attributes);

  if (attributes.text !== undefined) {
    element.textContent = attributes.text;
  } else if (attributes.html !== undefined) {
    element.innerHTML = attributes.html;
  }

  return element;
}
function remove(element) {
  if (null === element) {
    return;
  }

  var list = Array.isArray(element) ? element : [element];

  for (var i = 0; i < list.length; i++) {
    var parentNode = list[i].parentNode;

    if (null !== parentNode) {
      parentNode.removeChild(list[i]);
    }
  }
}
function empty(element) {
  var list = Array.isArray(element) ? element : [element];

  for (var i = 0; i < list.length; i++) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(list[i])) {
      list[i].innerHTML = "";
    }
  }
}
function replace(element, replacement) {
  var parentNode = element.parentNode;

  if (null !== parentNode) {
    parentNode.replaceChild(replacement, element);
  }
}

function insertElement(reference, insert, adjacentPosition, insertInto, insertReference) {
  if (typeof insert === "string") {
    reference.insertAdjacentHTML(adjacentPosition, insert);
    return;
  }

  if (insertInto === null) {
    return;
  }

  var list = Array.isArray(insert) ? insert : [insert];

  for (var i = 0; i < list.length; i++) {
    insertInto.insertBefore(list[i], insertReference);
  }
}

function append(reference, insert) {
  insertElement(reference, insert, "beforeend", reference, null);
}
function prepend(reference, insert) {
  insertElement(reference, insert, "afterbegin", reference, reference.firstElementChild);
}
function before(reference, insert) {
  insertElement(reference, insert, "beforebegin", reference.parentElement, reference);
}
function after(reference, insert) {
  insertElement(reference, insert, "afterend", reference.parentElement, reference.nextElementSibling);
}
function toggleClass(element, className, add) {
  element.classList[add ? "add" : "remove"](className);
}

/***/ }),

/***/ "./node_modules/mojave/dom/traverse.js":
/*!*********************************************!*\
  !*** ./node_modules/mojave/dom/traverse.js ***!
  \*********************************************/
/*! exports provided: find, findOne, filter, not, children, firstChild, prev, next, prevAll, nextAll, siblings, closest, isChildElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOne", function() { return findOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstChild", function() { return firstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChildElement", function() { return isChildElement; });
/* harmony import */ var _polyfill_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfill/dom */ "./node_modules/mojave/polyfill/dom.js");
/* harmony import */ var _polyfill_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_dom__WEBPACK_IMPORTED_MODULE_0__);


function elementMatches(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return null === selector || element.matches(selector);
}

function fetchAllSiblings(element, selector, accessor) {
  var indexableElement = element;
  var sibling = indexableElement[accessor];
  var list = [];

  while (sibling) {
    if (elementMatches(sibling, selector)) {
      list.push(sibling);
    }

    sibling = sibling[accessor];
  }

  return list;
}

function fetchSingleSibling(element, selector, accessor) {
  var indexableElement = element;
  var sibling = indexableElement[accessor];

  while (sibling) {
    if (elementMatches(sibling, selector)) {
      return sibling;
    }

    sibling = sibling[accessor];
  }

  return null;
}

function find(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.prototype.slice.call(context.querySelectorAll(selector));
}
function findOne(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.querySelector(selector);
}
function filter(list, selector) {
  return list.filter(function (e) {
    return e.matches(selector);
  });
}
function not(list, selector) {
  if (typeof selector === "string") {
    return list.filter(function (e) {
      return !e.matches(selector);
    });
  } else if (Array.isArray(selector)) {
    return list.filter(function (e) {
      return -1 !== selector.indexOf(e);
    });
  }

  return list.filter(function (e) {
    return e !== selector;
  });
}
function children(parent) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var list = [];
  var child = parent.firstElementChild;

  while (child) {
    if (elementMatches(child, selector)) {
      list.push(child);
    }

    child = child.nextElementSibling;
  }

  return list;
}
function firstChild(parent) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var child = parent.firstElementChild;

  while (child) {
    if (elementMatches(child, selector)) {
      return child;
    }

    child = child.nextElementSibling;
  }

  return null;
}
function prev(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchSingleSibling(element, selector, "previousElementSibling");
}
function next(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchSingleSibling(element, selector, "nextElementSibling");
}
function prevAll(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchAllSiblings(element, selector, "previousElementSibling");
}
function nextAll(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchAllSiblings(element, selector, "nextElementSibling");
}
function siblings(element) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var list = [];
  var sibling = null;

  if (null !== element.parentElement) {
    sibling = element.parentElement.firstElementChild;
  }

  while (null !== sibling) {
    if (sibling !== element && elementMatches(sibling, selector)) {
      list.push(sibling);
    }

    sibling = sibling.nextElementSibling;
  }

  return list;
}
function closest(element, selector) {
  var rootElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var parent = element.parentElement;

  while (null !== parent && rootElement !== parent) {
    if (parent.matches(selector)) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return null;
}
function isChildElement(parent, node) {
  var pointer = node;

  while (pointer !== null) {
    if (pointer === parent) {
      return true;
    }

    pointer = pointer.parentNode;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/mojave/dom/utils.js":
/*!******************************************!*\
  !*** ./node_modules/mojave/dom/utils.js ***!
  \******************************************/
/*! exports provided: isElement, splitStringValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitStringValue", function() { return splitStringValue; });
function isElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function splitStringValue(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value === "" ? [] : value.trim().split(/ +/);
}

/***/ }),

/***/ "./node_modules/mojave/extend.js":
/*!***************************************!*\
  !*** ./node_modules/mojave/extend.js ***!
  \***************************************/
/*! exports provided: merge, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime */ "./node_modules/mojave/runtime.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/mojave/types.js");


function merge(target) {
  if (0 === (arguments.length <= 1 ? 0 : arguments.length - 1)) {
    return target;
  }

  if (1 < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
    var result = target;

    for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
      result = merge(result, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
    }

    return result;
  }

  var source = arguments.length <= 1 ? undefined : arguments[1];
  var sourceType = Object(_types__WEBPACK_IMPORTED_MODULE_1__["typeOf"])(source);
  var targetType = Object(_types__WEBPACK_IMPORTED_MODULE_1__["typeOf"])(target);

  if (sourceType === targetType || "null" === sourceType || "null" === targetType) {
    if ("array" === targetType) {
      return target.concat(source);
    }

    if ("object" === targetType) {
      for (var key in source) {
        if (Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(source, key)) {
          target[key] = target[key] !== undefined ? merge(target[key], source[key]) : source[key];
        }
      }

      return target;
    }

    return source;
  }

  return target;
}
function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in source) {
      if (Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/mojave/json.js":
/*!*************************************!*\
  !*** ./node_modules/mojave/json.js ***!
  \*************************************/
/*! exports provided: safeParseJson, parseElementAsJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeParseJson", function() { return safeParseJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseElementAsJson", function() { return parseElementAsJson; });
function safeParseJson(value) {
  try {
    if (value) {
      var content = value.trim();
      return content !== "" ? JSON.parse(content) : null;
    }
  } catch (e) {
    console.error("Could not parse JSON content: ".concat(e.message), e);
  }

  return null;
}
function parseElementAsJson(element) {
  return safeParseJson((element.textContent || "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"));
}

/***/ }),

/***/ "./node_modules/mojave/mount/index.js":
/*!********************************************!*\
  !*** ./node_modules/mojave/mount/index.js ***!
  \********************************************/
/*! exports provided: mount, mountLazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountLazy", function() { return mountLazy; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _dom_traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/traverse */ "./node_modules/mojave/dom/traverse.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extend */ "./node_modules/mojave/extend.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json */ "./node_modules/mojave/json.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





function mount(selector, mountable, options) {
  doMount(Object(_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])(selector), mountable, options);
}
function mountLazy(selector, importer, options) {
  var elements = Object(_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])(selector);

  if (!elements.length) {
    return;
  }

  importer().then(function (module) {
    return doMount(elements, module.default, options);
  }, function (error) {
    return console.error("Mounting of component of path '".concat(selector, "' failed: ").concat(error.message), error);
  });
}

function doMount(elements, mountable, rawOptions) {
  var mountableAny = mountable;
  var options = Object(_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])({
    type: "func"
  }, rawOptions || {});
  elements.forEach(function (node) {
    if ("jsx" === options.type) {
      var opts = options;
      var parent = node.parentElement;
      var params = opts.params || {};

      if (!parent) {
        console.error("Can't mount on container without parent.");
        return;
      }

      if (!opts.hydrate) {
        params = Object(_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(params, Object(_json__WEBPACK_IMPORTED_MODULE_3__["parseElementAsJson"])(node) || {});
        parent.removeChild(node);
      }

      Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(mountable, params), parent, opts.hydrate ? node : undefined);
    } else if ("class" === options.type) {
      var standaloneOptions = options;

      var mounted = _construct(mountableAny, [node].concat(_toConsumableArray(standaloneOptions.params || [])));

      mounted.init();
    } else {
      var _standaloneOptions = options;
      mountable.apply(void 0, [node].concat(_toConsumableArray(_standaloneOptions.params || [])));
    }
  });
}

/***/ }),

/***/ "./node_modules/mojave/polyfill/dom.js":
/*!*********************************************!*\
  !*** ./node_modules/mojave/polyfill/dom.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  var elementPrototype = Element.prototype;
  Element.prototype.matches = elementPrototype.msMatchesSelector || elementPrototype.webkitMatchesSelector;
}

/***/ }),

/***/ "./node_modules/mojave/runtime.js":
/*!****************************************!*\
  !*** ./node_modules/mojave/runtime.js ***!
  \****************************************/
/*! exports provided: hasOwnProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
function hasOwnProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}

/***/ }),

/***/ "./node_modules/mojave/types.js":
/*!**************************************!*\
  !*** ./node_modules/mojave/types.js ***!
  \**************************************/
/*! exports provided: typeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
function typeOf(value) {
  var match = /^\[object (.*?)]$/.exec(Object.prototype.toString.call(value));
  return match !== null ? match[1].toLowerCase() : "object";
}

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,
    l,
    u,
    t,
    i,
    r = {},
    f = [],
    o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

function e(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }

  return n;
}

function c(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function s(n, l, u) {
  var t,
      i,
      r,
      f,
      o = arguments;
  if (l = e({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) {
    u.push(o[t]);
  }
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) {
    void 0 === l[i] && (l[i] = n.defaultProps[i]);
  }
  return f = l.key, null != (r = l.ref) && delete l.ref, null != f && delete l.key, a(n, l, f, r);
}

function a(l, u, t, i) {
  var r = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __p: null,
    __b: 0,
    __e: null,
    l: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(r), r;
}

function h() {
  return {};
}

function v(n) {
  return n.children;
}

function p(n) {
  if (null == n || "boolean" == typeof n) return null;
  if ("string" == typeof n || "number" == typeof n) return a(null, n, null, null);

  if (null != n.__e || null != n.__c) {
    var l = a(n.type, n.props, n.key, null);
    return l.__e = n.__e, l;
  }

  return n;
}

function y(n, l) {
  this.props = n, this.context = l;
}

function d(n, l) {
  if (null == l) return n.__p ? d(n.__p, n.__p.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }

  return "function" == typeof n.type ? d(n) : null;
}

function m(n) {
  var l, u;

  if (null != (n = n.__p) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    }

    return m(n);
  }
}

function w(t) {
  !t.__d && (t.__d = !0) && 1 === l.push(t) && (n.debounceRendering || u)(g);
}

function g() {
  var n;

  for (l.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = l.pop();) {
    n.__d && n.forceUpdate(!1);
  }
}

function k(n, l, u, t, i, o, e, s, a) {
  var h,
      v,
      y,
      m,
      w,
      g,
      k,
      b,
      x = l.__k || _(l.props.children, l.__k = [], p, !0),
      C = u && u.__k || f,
      P = C.length;

  for (s == r && (s = null != o ? o[0] : P ? d(u, 0) : null), v = 0; v < x.length; v++) {
    if (null != (h = x[v] = p(x[v]))) {
      if (h.__p = l, h.__b = l.__b + 1, null === (m = C[v]) || m && h.key == m.key && h.type === m.type) C[v] = void 0;else for (y = 0; y < P; y++) {
        if ((m = C[y]) && h.key == m.key && h.type === m.type) {
          C[y] = void 0;
          break;
        }

        m = null;
      }

      if (w = N(n, h, m = m || r, t, i, o, e, null, s, a), (y = h.ref) && m.ref != y && (b || (b = [])).push(y, h.__c || w, h), null != w) {
        if (null == k && (k = w), null != h.l) w = h.l, h.l = null;else if (o == m || w != s || null == w.parentNode) n: if (null == s || s.parentNode !== n) n.appendChild(w);else {
          for (g = s, y = 0; (g = g.nextSibling) && y < P; y += 2) {
            if (g == w) break n;
          }

          n.insertBefore(w, s);
        }
        s = w.nextSibling, "function" == typeof l.type && (l.l = w);
      }
    }
  }

  if (l.__e = k, null != o && "function" != typeof l.type) for (v = o.length; v--;) {
    null != o[v] && c(o[v]);
  }

  for (v = P; v--;) {
    null != C[v] && z(C[v], C[v]);
  }

  if (b) for (v = 0; v < b.length; v++) {
    j(b[v], b[++v], b[++v]);
  }
}

function _(n, l, u, t) {
  if (null == l && (l = []), null == n || "boolean" == typeof n) t && l.push(null);else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
    _(n[i], l, u, t);
  } else l.push(u ? u(n) : n);
  return l;
}

function b(n, l, u, t, i) {
  var r;

  for (r in u) {
    r in l || C(n, r, null, u[r], t);
  }

  for (r in l) {
    i && "function" != typeof l[r] || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], t);
  }
}

function x(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === o.test(l) ? u + "px" : u;
}

function C(n, l, u, t, i) {
  var r, f, o, e, c;
  if ("key" === (l = i ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ;else if ("style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof t && (r.cssText = "", t = null), t) for (f in t) {
        u && f in u || x(r, f, "");
      }
      if (u) for (o in u) {
        t && u[o] === t[o] || x(r, o, u[o]);
      }
    }
  } else if ("o" === l[0] && "n" === l[1]) e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, P, e), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, P, e);else if ("list" !== l && "tagName" !== l && !i && l in n) {
    if (n.length && "value" == l) for (l = n.length; l--;) {
      n.options[l].selected = n.options[l].value == u;
    } else n[l] = null == u ? "" : u;
  } else "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function P(l) {
  return this.u[l.type](n.event ? n.event(l) : l);
}

function N(l, u, t, i, r, f, o, c, s, a) {
  var h,
      d,
      m,
      w,
      g,
      b,
      x,
      C,
      P,
      N,
      T = u.type;
  if (void 0 !== u.constructor) return null;
  (h = n.__b) && h(u);

  try {
    n: if ("function" == typeof T) {
      if (C = u.props, P = (h = T.contextType) && i[h.__c], N = h ? P ? P.props.value : h.__p : i, t.__c ? x = (d = u.__c = t.__c).__p = d.__E : (T.prototype && T.prototype.render ? u.__c = d = new T(C, N) : (u.__c = d = new y(C, N), d.constructor = T, d.render = A), P && P.sub(d), d.props = C, d.state || (d.state = {}), d.context = N, d.__n = i, m = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != T.getDerivedStateFromProps && e(d.__s == d.state ? d.__s = e({}, d.__s) : d.__s, T.getDerivedStateFromProps(C, d.__s)), m) null == T.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && o.push(d);else {
        if (null == T.getDerivedStateFromProps && null == c && null != d.componentWillReceiveProps && d.componentWillReceiveProps(C, N), !c && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(C, d.__s, N)) {
          d.props = C, d.state = d.__s, d.__d = !1, d.__v = u, u.__e = t.__e, u.__k = t.__k;
          break n;
        }

        null != d.componentWillUpdate && d.componentWillUpdate(C, d.__s, N);
      }

      for (w = d.props, g = d.state, d.context = N, d.props = C, d.state = d.__s, (h = n.__r) && h(u), d.__d = !1, d.__v = u, d.__P = l, _(null != (h = d.render(d.props, d.state, d.context)) && h.type == v && null == h.key ? h.props.children : h, u.__k = [], p, !0), null != d.getChildContext && (i = e(e({}, i), d.getChildContext())), m || null == d.getSnapshotBeforeUpdate || (b = d.getSnapshotBeforeUpdate(w, g)), k(l, u, t, i, r, f, o, s, a), d.base = u.__e; h = d.__h.pop();) {
        h.call(d);
      }

      m || null == w || null == d.componentDidUpdate || d.componentDidUpdate(w, g, b), x && (d.__E = d.__p = null);
    } else u.__e = $(t.__e, u, t, i, r, f, o, a);

    (h = n.diffed) && h(u);
  } catch (l) {
    n.__e(l, u, t);
  }

  return u.__e;
}

function T(l, u) {
  for (var t; t = l.pop();) {
    try {
      t.componentDidMount();
    } catch (l) {
      n.__e(l, t.__v);
    }
  }

  n.__c && n.__c(u);
}

function $(n, l, u, t, i, o, e, c) {
  var s,
      a,
      h,
      v,
      p = u.props,
      y = l.props;
  if (i = "svg" === l.type || i, null == n && null != o) for (s = 0; s < o.length; s++) {
    if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
      n = a, o[s] = null;
      break;
    }
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(y);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  return null === l.type ? p !== y && (n.data = y) : l !== u && (null != o && (o = f.slice.call(n.childNodes)), h = (p = u.props || r).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, c || (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || "")), b(n, y, p, i, c), v || k(n, l, u, t, "foreignObject" !== l.type && i, o, e, r, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked))), n;
}

function j(l, u, t) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, t);
  }
}

function z(l, u, t) {
  var i, r, f;

  if (n.unmount && n.unmount(l), (i = l.ref) && j(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    i.base = i.__P = null;
  }

  if (i = l.__k) for (f = 0; f < i.length; f++) {
    i[f] && z(i[f], u, t);
  }
  null != r && c(r);
}

function A(n, l, u) {
  return this.constructor(n, u);
}

function D(l, u, i) {
  var o, e, c;
  n.__p && n.__p(l, u), e = (o = i === t) ? null : i && i.__k || u.__k, l = s(v, null, [l]), c = [], N(u, o ? u.__k = l : (i || u).__k = l, e || r, r, void 0 !== u.ownerSVGElement, i && !o ? [i] : e ? null : f.slice.call(u.childNodes), c, !1, i || r, o), T(c, l);
}

function H(n, l) {
  D(n, l, t);
}

function I(n, l) {
  return l = e(e({}, n.props), l), arguments.length > 2 && (l.children = f.slice.call(arguments, 2)), a(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + i++,
    __p: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n) {
      var t,
          i = this;
      return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (n) {
        t.some(function (l) {
          l.__P && (l.context = n.value, w(l));
        });
      }, this.sub = function (n) {
        t.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

n = {}, y.prototype.setState = function (n, l) {
  var u = this.__s !== this.state && this.__s || (this.__s = e({}, this.state));
  ("function" != typeof n || (n = n(u, this.props))) && e(u, n), null != n && this.__v && (l && this.__h.push(l), w(this));
}, y.prototype.forceUpdate = function (n) {
  var l,
      u,
      t,
      i = this.__v,
      r = this.__v.__e,
      f = this.__P;
  f && (l = !1 !== n, u = [], t = N(f, i, e({}, i), this.__n, void 0 !== f.ownerSVGElement, null, u, l, null == r ? d(i) : r), T(u, i), t != r && m(i)), n && n();
}, y.prototype.render = v, l = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, n.__e = function (n, l, u) {
  for (var t; l = l.__p;) {
    if ((t = l.__c) && !t.__p) try {
      if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(n));else {
        if (null == t.componentDidCatch) continue;
        t.componentDidCatch(n);
      }
      return w(t.__E = t);
    } catch (l) {
      n = l;
    }
  }

  throw n;
}, t = r, i = 0;


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var t,
    r,
    u = [],
    i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r;

preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  i && i(n), t = 0, (r = n.__c).__H && (r.__H.t = w(r.__H.t));
};

var o = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed;

preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (n) {
  o && o(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && (r.u = w(r.u));
  }
};

var f = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;

function c(t) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r);
  var u = r.__H || (r.__H = {
    i: [],
    t: [],
    u: []
  });
  return t >= u.i.length && u.i.push({}), u.i[t];
}

function e(n) {
  return a(q, n);
}

function a(n, u, i) {
  var o = c(t++);
  return o.__c || (o.__c = r, o.o = [i ? i(u) : q(null, u), function (t) {
    var r = n(o.o[0], t);
    o.o[0] !== r && (o.o[0] = r, o.__c.setState({}));
  }]), o.o;
}

function v(n, u) {
  var i = c(t++);
  F(i.v, u) && (i.o = n, i.v = u, r.__H.t.push(i), _(r));
}

function m(n, u) {
  var i = c(t++);
  F(i.v, u) && (i.o = n, i.v = u, r.__H.u.push(i));
}

function p(n) {
  return s(function () {
    return {
      current: n
    };
  }, []);
}

function l(n, r, u) {
  var i = c(t++);
  F(i.v, u) && (i.v = u, n && (n.current = r()));
}

function s(n, r) {
  var u = c(t++);
  return F(u.v, r) ? (u.v = r, u.m = n, u.o = n()) : u.o;
}

function d(n, t) {
  return s(function () {
    return n;
  }, t);
}

function y(n) {
  var u = r.context[n.__c];
  if (!u) return n.__p;
  var i = c(t++);
  return null == i.o && (i.o = !0, u.sub(r)), u.props.value;
}

function T(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}

preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (n) {
  f && f(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && r.i.forEach(function (n) {
      return n.p && n.p();
    });
  }
};

var _ = function _() {};

function g() {
  u.some(function (n) {
    n.l = !1, n.__P && (n.__H.t = w(n.__H.t));
  }), u = [];
}

function w(n) {
  return n.forEach(A), n.forEach(E), [];
}

function A(n) {
  n.p && n.p();
}

function E(n) {
  var t = n.o();
  "function" == typeof t && (n.p = t);
}

function F(n, t) {
  return !n || t.some(function (t, r) {
    return t !== n[r];
  });
}

function q(n, t) {
  return "function" == typeof t ? t(n) : t;
}

"undefined" != typeof window && (_ = function _(t) {
  !t.l && (t.l = !0) && 1 === u.push(t) && (preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || function (n) {
    var t = function t() {
      clearTimeout(r), cancelAnimationFrame(u), setTimeout(n);
    },
        r = setTimeout(t, 100),
        u = requestAnimationFrame(t);
  })(g);
});


/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var characterMap = {
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "Ấ": "A",
  "Ắ": "A",
  "Ẳ": "A",
  "Ẵ": "A",
  "Ặ": "A",
  "Æ": "AE",
  "Ầ": "A",
  "Ằ": "A",
  "Ȃ": "A",
  "Ç": "C",
  "Ḉ": "C",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "Ế": "E",
  "Ḗ": "E",
  "Ề": "E",
  "Ḕ": "E",
  "Ḝ": "E",
  "Ȇ": "E",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "Ḯ": "I",
  "Ȋ": "I",
  "Ð": "D",
  "Ñ": "N",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "Ố": "O",
  "Ṍ": "O",
  "Ṓ": "O",
  "Ȏ": "O",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "Ý": "Y",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "ấ": "a",
  "ắ": "a",
  "ẳ": "a",
  "ẵ": "a",
  "ặ": "a",
  "æ": "ae",
  "ầ": "a",
  "ằ": "a",
  "ȃ": "a",
  "ç": "c",
  "ḉ": "c",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "ế": "e",
  "ḗ": "e",
  "ề": "e",
  "ḕ": "e",
  "ḝ": "e",
  "ȇ": "e",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "ḯ": "i",
  "ȋ": "i",
  "ð": "d",
  "ñ": "n",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "ố": "o",
  "ṍ": "o",
  "ṓ": "o",
  "ȏ": "o",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "ý": "y",
  "ÿ": "y",
  "Ā": "A",
  "ā": "a",
  "Ă": "A",
  "ă": "a",
  "Ą": "A",
  "ą": "a",
  "Ć": "C",
  "ć": "c",
  "Ĉ": "C",
  "ĉ": "c",
  "Ċ": "C",
  "ċ": "c",
  "Č": "C",
  "č": "c",
  "C̆": "C",
  "c̆": "c",
  "Ď": "D",
  "ď": "d",
  "Đ": "D",
  "đ": "d",
  "Ē": "E",
  "ē": "e",
  "Ĕ": "E",
  "ĕ": "e",
  "Ė": "E",
  "ė": "e",
  "Ę": "E",
  "ę": "e",
  "Ě": "E",
  "ě": "e",
  "Ĝ": "G",
  "Ǵ": "G",
  "ĝ": "g",
  "ǵ": "g",
  "Ğ": "G",
  "ğ": "g",
  "Ġ": "G",
  "ġ": "g",
  "Ģ": "G",
  "ģ": "g",
  "Ĥ": "H",
  "ĥ": "h",
  "Ħ": "H",
  "ħ": "h",
  "Ḫ": "H",
  "ḫ": "h",
  "Ĩ": "I",
  "ĩ": "i",
  "Ī": "I",
  "ī": "i",
  "Ĭ": "I",
  "ĭ": "i",
  "Į": "I",
  "į": "i",
  "İ": "I",
  "ı": "i",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "Ḱ": "K",
  "ḱ": "k",
  "K̆": "K",
  "k̆": "k",
  "Ĺ": "L",
  "ĺ": "l",
  "Ļ": "L",
  "ļ": "l",
  "Ľ": "L",
  "ľ": "l",
  "Ŀ": "L",
  "ŀ": "l",
  "Ł": "l",
  "ł": "l",
  "Ḿ": "M",
  "ḿ": "m",
  "M̆": "M",
  "m̆": "m",
  "Ń": "N",
  "ń": "n",
  "Ņ": "N",
  "ņ": "n",
  "Ň": "N",
  "ň": "n",
  "ŉ": "n",
  "N̆": "N",
  "n̆": "n",
  "Ō": "O",
  "ō": "o",
  "Ŏ": "O",
  "ŏ": "o",
  "Ő": "O",
  "ő": "o",
  "Œ": "OE",
  "œ": "oe",
  "P̆": "P",
  "p̆": "p",
  "Ŕ": "R",
  "ŕ": "r",
  "Ŗ": "R",
  "ŗ": "r",
  "Ř": "R",
  "ř": "r",
  "R̆": "R",
  "r̆": "r",
  "Ȓ": "R",
  "ȓ": "r",
  "Ś": "S",
  "ś": "s",
  "Ŝ": "S",
  "ŝ": "s",
  "Ş": "S",
  "Ș": "S",
  "ș": "s",
  "ş": "s",
  "Š": "S",
  "š": "s",
  "Ţ": "T",
  "ţ": "t",
  "ț": "t",
  "Ț": "T",
  "Ť": "T",
  "ť": "t",
  "Ŧ": "T",
  "ŧ": "t",
  "T̆": "T",
  "t̆": "t",
  "Ũ": "U",
  "ũ": "u",
  "Ū": "U",
  "ū": "u",
  "Ŭ": "U",
  "ŭ": "u",
  "Ů": "U",
  "ů": "u",
  "Ű": "U",
  "ű": "u",
  "Ų": "U",
  "ų": "u",
  "Ȗ": "U",
  "ȗ": "u",
  "V̆": "V",
  "v̆": "v",
  "Ŵ": "W",
  "ŵ": "w",
  "Ẃ": "W",
  "ẃ": "w",
  "X̆": "X",
  "x̆": "x",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Y̆": "Y",
  "y̆": "y",
  "Ź": "Z",
  "ź": "z",
  "Ż": "Z",
  "ż": "z",
  "Ž": "Z",
  "ž": "z",
  "ſ": "s",
  "ƒ": "f",
  "Ơ": "O",
  "ơ": "o",
  "Ư": "U",
  "ư": "u",
  "Ǎ": "A",
  "ǎ": "a",
  "Ǐ": "I",
  "ǐ": "i",
  "Ǒ": "O",
  "ǒ": "o",
  "Ǔ": "U",
  "ǔ": "u",
  "Ǖ": "U",
  "ǖ": "u",
  "Ǘ": "U",
  "ǘ": "u",
  "Ǚ": "U",
  "ǚ": "u",
  "Ǜ": "U",
  "ǜ": "u",
  "Ứ": "U",
  "ứ": "u",
  "Ṹ": "U",
  "ṹ": "u",
  "Ǻ": "A",
  "ǻ": "a",
  "Ǽ": "AE",
  "ǽ": "ae",
  "Ǿ": "O",
  "ǿ": "o",
  "Þ": "TH",
  "þ": "th",
  "Ṕ": "P",
  "ṕ": "p",
  "Ṥ": "S",
  "ṥ": "s",
  "X́": "X",
  "x́": "x",
  "Ѓ": "Г",
  "ѓ": "г",
  "Ќ": "К",
  "ќ": "к",
  "A̋": "A",
  "a̋": "a",
  "E̋": "E",
  "e̋": "e",
  "I̋": "I",
  "i̋": "i",
  "Ǹ": "N",
  "ǹ": "n",
  "Ồ": "O",
  "ồ": "o",
  "Ṑ": "O",
  "ṑ": "o",
  "Ừ": "U",
  "ừ": "u",
  "Ẁ": "W",
  "ẁ": "w",
  "Ỳ": "Y",
  "ỳ": "y",
  "Ȁ": "A",
  "ȁ": "a",
  "Ȅ": "E",
  "ȅ": "e",
  "Ȉ": "I",
  "ȉ": "i",
  "Ȍ": "O",
  "ȍ": "o",
  "Ȑ": "R",
  "ȑ": "r",
  "Ȕ": "U",
  "ȕ": "u",
  "B̌": "B",
  "b̌": "b",
  "Č̣": "C",
  "č̣": "c",
  "Ê̌": "E",
  "ê̌": "e",
  "F̌": "F",
  "f̌": "f",
  "Ǧ": "G",
  "ǧ": "g",
  "Ȟ": "H",
  "ȟ": "h",
  "J̌": "J",
  "ǰ": "j",
  "Ǩ": "K",
  "ǩ": "k",
  "M̌": "M",
  "m̌": "m",
  "P̌": "P",
  "p̌": "p",
  "Q̌": "Q",
  "q̌": "q",
  "Ř̩": "R",
  "ř̩": "r",
  "Ṧ": "S",
  "ṧ": "s",
  "V̌": "V",
  "v̌": "v",
  "W̌": "W",
  "w̌": "w",
  "X̌": "X",
  "x̌": "x",
  "Y̌": "Y",
  "y̌": "y",
  "A̧": "A",
  "a̧": "a",
  "B̧": "B",
  "b̧": "b",
  "Ḑ": "D",
  "ḑ": "d",
  "Ȩ": "E",
  "ȩ": "e",
  "Ɛ̧": "E",
  "ɛ̧": "e",
  "Ḩ": "H",
  "ḩ": "h",
  "I̧": "I",
  "i̧": "i",
  "Ɨ̧": "I",
  "ɨ̧": "i",
  "M̧": "M",
  "m̧": "m",
  "O̧": "O",
  "o̧": "o",
  "Q̧": "Q",
  "q̧": "q",
  "U̧": "U",
  "u̧": "u",
  "X̧": "X",
  "x̧": "x",
  "Z̧": "Z",
  "z̧": "z"
};
var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function removeAccents(string) {
  return string.replace(allAccents, function (match) {
    return characterMap[match];
  });
};

var hasAccents = function hasAccents(string) {
  return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xlZ2FjeS5nbHVnZ2kuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vZXh0ZXJuYWwuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL21lbnUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL0dsdWdnaVJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL1NpZGViYXJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL2Z1bGwtc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kvc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL3VzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0Y2gtc29ydGVyL2Rpc3QvbWF0Y2gtc29ydGVyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9hdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vbWFuaXB1bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS90cmF2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2pzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9tb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3BvbHlmaWxsL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1vdmUtYWNjZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dsdWdnaS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIxMFxcXCIgdmlld0JveD1cXFwiMCAwIDEzIDEwXFxcIj5cXG4gIDxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTcuNjU5IDBsLS44MjguOSAzLjczMiAzLjQ5M0gwdjEuMjE4aDEwLjU2NUw2LjgzMSA5LjEwNWwuODI4LjkgNS4zNDEtNXpcXFwiLz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNC44MjlcXFwiIGhlaWdodD1cXFwiMTQuODI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTQuODI5IDE0LjgyOFxcXCI+XFxuICA8ZyBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiPlxcbiAgICA8cGF0aCBkPVxcXCJNMTMuNDE0IDEuNDE0bC0xMiAxMlxcXCIvPlxcbiAgICA8cGF0aCBkPVxcXCJNMS40MTQgMS40MTRsMTIgMTJcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNi4yNjRcXFwiIGhlaWdodD1cXFwiMTYuMjYzXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYuMjY0IDE2LjI2M1xcXCI+XFxuICA8cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk01LjQxNiAzLjc3NmwuMDUxIDEuMjIyIDUuMTEtLjE2OS03LjQ3IDcuNDcuODYxLjg2IDcuNDctNy40Ny0uMTY5IDUuMTEgMS4yMjIuMDUyLjI0MS03LjMxMnpcXFwiLz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDE0XFxcIj5cXG4gIDxnIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+XFxuICAgIDxwYXRoIGQ9XFxcIk0xIDdoMThNMSAxaDE4TTEgMTNoMThcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxMy44MTFcXFwiIGhlaWdodD1cXFwiMTMuODExXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTMuODExIDEzLjgxMVxcXCI+XFxuICA8ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMi4yNSAtMi4yNSlcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBmaWxsPVxcXCJub25lXFxcIj5cXG4gICAgPGNpcmNsZSBjeD1cXFwiNS40NzJcXFwiIGN5PVxcXCI1LjQ3MlxcXCIgcj1cXFwiNS40NzJcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDMgMylcXFwiLz5cXG4gICAgPHBhdGggZD1cXFwiTTE1IDE1bC0yLjI5Ni0yLjI5NlxcXCIvPlxcbiAgPC9nPlxcbjwvc3ZnPlxcblwiIiwiaW1wb3J0IHsgZmluZE9uZSB9IGZyb20gXCJtb2phdmUvZG9tL3RyYXZlcnNlXCI7XG5pbXBvcnQgeyBwYXJzZUVsZW1lbnRBc0pzb24gfSBmcm9tIFwibW9qYXZlL2pzb25cIjtcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcIm1vamF2ZS9tb3VudFwiO1xuaW1wb3J0IHsgaW5pdFRvZ2dsZUZ1bGxTY3JlZW4gfSBmcm9tIFwiLi9nbHVnZ2kvZnVsbC1zY3JlZW5cIjtcbmltcG9ydCB7IEdsdWdnaVJvdXRlciB9IGZyb20gXCIuL2dsdWdnaS9HbHVnZ2lSb3V0ZXJcIjtcbmltcG9ydCB7IGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZSB9IGZyb20gXCIuL2dsdWdnaS9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTaWRlYmFyQ29udGVudCB9IGZyb20gXCIuL2dsdWdnaS9TaWRlYmFyQ29udGVudFwiO1xuaW1wb3J0IHsgaW5pdFVzYWdlc1RvZ2dsZSB9IGZyb20gXCIuL2dsdWdnaS91c2FnZXNcIjtcbnZhciBkYXRhQ29udGFpbmVyID0gZmluZE9uZShcIi5nbHVnZ2ktZ2xvYmFsLWRhdGFcIik7XG5cbmlmIChkYXRhQ29udGFpbmVyID09PSBudWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHJ1biBHbHVnZ2ksIGFzIHRoZSBnbG9iYWwgZ2x1Z2dpIGRhdGEgaXMgbWlzc2luZy5cIik7XG59XG5cbnZhciBkYXRhID0gcGFyc2VFbGVtZW50QXNKc29uKGRhdGFDb250YWluZXIpO1xudmFyIHJvdXRlciA9IG5ldyBHbHVnZ2lSb3V0ZXIoZGF0YS51cmwpO1xudmFyIGNvbnRlbnRWaWV3ID0gZmluZE9uZShcIi5nbHVnZ2ktY29udGVudC12aWV3XCIpO1xuY29uc29sZS5sb2cocm91dGVyLmhvbWUoKSk7XG5jb25zb2xlLmxvZyhyb3V0ZXIuY29tcG9uZW50KFwidGVzdFwiLCBcImFiY1wiKSk7XG5tb3VudChcIi5nbHVnZ2ktc2lkZWJhclwiLCBpbml0U2lkZWJhclZpc2liaWxpdHlUb2dnbGUpO1xubW91bnQoXCIuZ2x1Z2dpLXNpZGViYXItY29udGVudC1kYXRhXCIsIFNpZGViYXJDb250ZW50LCB7XG4gIHR5cGU6IFwianN4XCIsXG4gIHBhcmFtczoge1xuICAgIHJvdXRlcjogcm91dGVyXG4gIH1cbn0pO1xubW91bnQoXCIuZ2x1Z2dpLWFjdGlvbi11c2FnZXNcIiwgaW5pdFVzYWdlc1RvZ2dsZSk7XG5cbmlmIChudWxsICE9PSBjb250ZW50Vmlldykge1xuICBtb3VudChcIi5nbHVnZ2ktdG9nZ2xlLWZ1bGxzY3JlZW5cIiwgaW5pdFRvZ2dsZUZ1bGxTY3JlZW4sIHtcbiAgICBwYXJhbXM6IFtjb250ZW50Vmlld11cbiAgfSk7XG59IiwidmFyIEdsdWdnaVJvdXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2x1Z2dpUm91dGVyKHByZWZpeCkge1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgR2x1Z2dpUm91dGVyLnByb3RvdHlwZS5ob21lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeDtcbiAgfTtcblxuICBHbHVnZ2lSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXkpIHtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucHJlZml4ICsgdHlwZSArIFwiL1wiICsga2V5O1xuICB9O1xuXG4gIHJldHVybiBHbHVnZ2lSb3V0ZXI7XG59KCk7XG5cbmV4cG9ydCB7IEdsdWdnaVJvdXRlciB9OyIsImltcG9ydCB7IGgsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgYXJyb3dJY29uIGZyb20gXCIuLi8uLi9pY29uL2FjdGl2ZS5zdmdcIjtcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gXCIuLi8uLi9pY29uL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBleHRlcm5hbEljb24gZnJvbSBcIi4uLy4uL2ljb24vZXh0ZXJuYWwuc3ZnXCI7XG5pbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJztcblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgc2hvd0Z1bGxOYW1lKSB7XG4gIGlmIChzaG93RnVsbE5hbWUgPT09IHZvaWQgMCkge1xuICAgIHNob3dGdWxsTmFtZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGgoXCJsaVwiLCBudWxsLCBoKFwiYVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1saW5rIFwiICsgKGNvbXBvbmVudC5hY3RpdmUgPyBcIiBnbHVnZ2ktYWN0aXZlXCIgOiBcIlwiKSxcbiAgICBocmVmOiBjb21wb25lbnQudXJsXG4gIH0sIGNvbXBvbmVudC5hY3RpdmUgJiYgaWNvbihhcnJvd0ljb24pLCBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1uYW1lXCJcbiAgfSwgc2hvd0Z1bGxOYW1lICYmIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LXR5cGVcIlxuICB9LCBjb21wb25lbnQudHlwZSksIFwiIFwiICsgY29tcG9uZW50Lm5hbWUsIFwicGFnZVwiID09PSBjb21wb25lbnQudHlwZSA/IGljb24oZXh0ZXJuYWxJY29uKSA6IFwiXCIpKSk7XG59XG5cbmZ1bmN0aW9uIGljb24oaWNvblN2Zykge1xuICByZXR1cm4gaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1pY29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogaWNvblN2Z1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEdsdWdnaVR5cGUocHJvcHMpIHtcbiAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnRcIlxuICB9LCBoKFwiaDJcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtdGl0bGVcIlxuICB9LCBwcm9wcy50eXBlLnRpdGxlKSwgcHJvcHMudHlwZS5jb21wb25lbnRzLmxlbmd0aCA+IDAgPyBoKFwidWxcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbGlzdFwiXG4gIH0sIHByb3BzLnR5cGUuY29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAhIXByb3BzLnNob3dGdWxsTmFtZSk7XG4gIH0pKSA6IGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtZW1wdHlcIlxuICB9LCBwcm9wcy5lbXB0eVRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJDb250ZW50KHByb3BzKSB7XG4gIHZhciBjb250ZW50ID0gW2goXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1lbXB0eVwiXG4gIH0sIFwiVGhlcmUgYXJlIG5vIGNvbXBvbmVudHMuXCIpXTtcblxuICBpZiAocHJvcHMudHlwZXMubGVuZ3RoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksXG4gICAgICAgIHF1ZXJ5ID0gX2FbMF0sXG4gICAgICAgIHNldFF1ZXJ5XzEgPSBfYVsxXTtcblxuICAgIHZhciBzZWFyY2ggPSBudWxsO1xuXG4gICAgaWYgKFwiXCIgIT09IHF1ZXJ5LnRyaW0oKSkge1xuICAgICAgc2VhcmNoID0ge1xuICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0c1wiLFxuICAgICAgICBjb21wb25lbnRzOiBtYXRjaFNvcnRlcihmbGF0dGVuVHlwZXMocHJvcHMudHlwZXMpLCBxdWVyeS50cmltKCksIHtcbiAgICAgICAgICBrZXlzOiBbXCJuYW1lXCJdXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBbaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktc2VhcmNoXCJcbiAgICB9LCBoKFwibGFiZWxcIiwge1xuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLXNlYXJjaC13aWRnZXRcIlxuICAgIH0sIGgoXCJpbnB1dFwiLCB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1zZWFyY2gtaW5wdXRcIixcbiAgICAgIGlkOiBcImNvbXBvbmVudC1maWx0ZXJcIixcbiAgICAgIHZhbHVlOiBxdWVyeSxcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChlKSB7XG4gICAgICAgIHJldHVybiBzZXRRdWVyeV8xKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSksIGljb24oc2VhcmNoSWNvbikpKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50c1wiXG4gICAgfSwgc2VhcmNoID8gaChHbHVnZ2lUeXBlLCB7XG4gICAgICB0eXBlOiBzZWFyY2gsXG4gICAgICBzaG93RnVsbE5hbWU6IHRydWUsXG4gICAgICBlbXB0eVRleHQ6IFwiTm8gbWF0Y2hlc1wiXG4gICAgfSkgOiBwcm9wcy50eXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiBoKEdsdWdnaVR5cGUsIHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSk7XG4gICAgfSkpXTtcbiAgfVxuXG4gIHJldHVybiBoKEZyYWdtZW50LCBudWxsLCBoKFwiYVwiLCB7XG4gICAgaHJlZjogcHJvcHMucm91dGVyLmhvbWUoKSxcbiAgICBjbGFzczogXCJnbHVnZ2ktdGl0bGVcIlxuICB9LCBwcm9wcy50aXRsZSksIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVHlwZXModHlwZXMpIHtcbiAgdmFyIGZsYXR0ZW5lZCA9IFtdO1xuICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gZmxhdHRlbmVkLnB1c2goYyk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyB0b2dnbGVDbGFzcyB9IGZyb20gXCJtb2phdmUvZG9tL21hbmlwdWxhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9nZ2xlRnVsbFNjcmVlbihidXR0b24sIGNvbnRlbnRWaWV3KSB7XG4gIHZhciBmdWxsc2NyZWVuID0gZmFsc2U7XG4gIG9uKGJ1dHRvbiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZnVsbHNjcmVlbiA9ICFmdWxsc2NyZWVuO1xuICAgIHRvZ2dsZUNsYXNzKGNvbnRlbnRWaWV3LCBcImlzLWZ1bGxzY3JlZW5cIiwgZnVsbHNjcmVlbik7XG4gICAgdG9nZ2xlQ2xhc3MoYnV0dG9uLCBcImdsdWdnaS1pcy1hY3RpdmVcIiwgZnVsbHNjcmVlbik7XG4gIH0pO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVVbnN0eWxlZEVsZW1lbnQsIHByZXBlbmQgfSBmcm9tIFwibW9qYXZlL2RvbS9tYW5pcHVsYXRlXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuLi8uLi9pY29uL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi8uLi9pY29uL21lbnUuc3ZnXCI7XG5leHBvcnQgZnVuY3Rpb24gaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlKHNpZGViYXIpIHtcbiAgdmFyIGNsb3NlID0gY3JlYXRlVW5zdHlsZWRFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktc2lkZWJhci1jbG9zZVwiLFxuICAgIGh0bWw6IGNsb3NlSWNvblxuICB9KTtcbiAgdmFyIG9wZW4gPSBjcmVhdGVVbnN0eWxlZEVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1zaWRlYmFyLW9wZW5cIixcbiAgICBodG1sOiBtZW51SWNvblxuICB9KTtcbiAgcHJlcGVuZChzaWRlYmFyLCBjbG9zZSk7XG4gIHByZXBlbmQoc2lkZWJhci5wYXJlbnRFbGVtZW50LCBvcGVuKTtcbiAgdmFyIHZpc2libGUgPSB0cnVlO1xuICBvbihjbG9zZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xuICAgIG9wZW4uY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgdmlzaWJsZSA9IGZhbHNlO1xuICB9KTtcbiAgb24ob3BlbiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgIG9wZW4uY2xhc3NMaXN0LnJlbW92ZShcImlzLXZpc2libGVcIik7XG4gICAgdmlzaWJsZSA9IHRydWU7XG4gIH0pO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyBmaW5kIH0gZnJvbSBcIm1vamF2ZS9kb20vdHJhdmVyc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VXNhZ2VzVG9nZ2xlKGVsZW1lbnQpIHtcbiAgb24oZmluZChcImJ1dHRvbi5nbHVnZ2ktYWN0aW9uXCIsIGVsZW1lbnQpLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCByZW1vdmVBY2NlbnRzIGZyb20gJ3JlbW92ZS1hY2NlbnRzJztcbnZhciByYW5raW5ncyA9IHtcbiAgQ0FTRV9TRU5TSVRJVkVfRVFVQUw6IDksXG4gIEVRVUFMOiA4LFxuICBTVEFSVFNfV0lUSDogNyxcbiAgV09SRF9TVEFSVFNfV0lUSDogNixcbiAgU1RSSU5HX0NBU0U6IDUsXG4gIFNUUklOR19DQVNFX0FDUk9OWU06IDQsXG4gIENPTlRBSU5TOiAzLFxuICBBQ1JPTllNOiAyLFxuICBNQVRDSEVTOiAxLFxuICBOT19NQVRDSDogMFxufTtcbnZhciBjYXNlUmFua2luZ3MgPSB7XG4gIENBTUVMOiAwLjgsXG4gIFBBU0NBTDogMC42LFxuICBLRUJBQjogMC40LFxuICBTTkFLRTogMC4yLFxuICBOT19DQVNFOiAwXG59O1xubWF0Y2hTb3J0ZXIucmFua2luZ3MgPSByYW5raW5ncztcbm1hdGNoU29ydGVyLmNhc2VSYW5raW5ncyA9IGNhc2VSYW5raW5ncztcbi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgaXRlbXMgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgaXRlbXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gdGhlIGl0ZW1zIHRvIHNvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byB1c2UgZm9yIHJhbmtpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU29tZSBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgc29ydGVyXG4gKiBAcmV0dXJuIHtBcnJheX0gLSB0aGUgbmV3IHNvcnRlZCBhcnJheVxuICovXG5cbmZ1bmN0aW9uIG1hdGNoU29ydGVyKGl0ZW1zLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIG5vdCBwZXJmb3JtaW5nIGFueSBzZWFyY2gvc29ydCBpZiB2YWx1ZShzZWFyY2ggdGVybSkgaXMgZW1wdHlcblxuXG4gIGlmICghdmFsdWUpIHJldHVybiBpdGVtcztcbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIGtleXMgPSBfb3B0aW9ucy5rZXlzLFxuICAgICAgX29wdGlvbnMkdGhyZXNob2xkID0gX29wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMkdGhyZXNob2xkID09PSB2b2lkIDAgPyByYW5raW5ncy5NQVRDSEVTIDogX29wdGlvbnMkdGhyZXNob2xkO1xuICB2YXIgbWF0Y2hlZEl0ZW1zID0gaXRlbXMucmVkdWNlKHJlZHVjZUl0ZW1zVG9SYW5rZWQsIFtdKTtcbiAgcmV0dXJuIG1hdGNoZWRJdGVtcy5zb3J0KHNvcnRSYW5rZWRJdGVtcykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZUl0ZW1zVG9SYW5rZWQobWF0Y2hlcywgaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgX2dldEhpZ2hlc3RSYW5raW5nID0gZ2V0SGlnaGVzdFJhbmtpbmcoaXRlbSwga2V5cywgdmFsdWUsIG9wdGlvbnMpLFxuICAgICAgICByYW5rZWRJdGVtID0gX2dldEhpZ2hlc3RSYW5raW5nLnJhbmtlZEl0ZW0sXG4gICAgICAgIHJhbmsgPSBfZ2V0SGlnaGVzdFJhbmtpbmcucmFuayxcbiAgICAgICAga2V5SW5kZXggPSBfZ2V0SGlnaGVzdFJhbmtpbmcua2V5SW5kZXgsXG4gICAgICAgIF9nZXRIaWdoZXN0UmFua2luZyRrZSA9IF9nZXRIaWdoZXN0UmFua2luZy5rZXlUaHJlc2hvbGQsXG4gICAgICAgIGtleVRocmVzaG9sZCA9IF9nZXRIaWdoZXN0UmFua2luZyRrZSA9PT0gdm9pZCAwID8gdGhyZXNob2xkIDogX2dldEhpZ2hlc3RSYW5raW5nJGtlO1xuXG4gICAgaWYgKHJhbmsgPj0ga2V5VGhyZXNob2xkKSB7XG4gICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICByYW5rZWRJdGVtOiByYW5rZWRJdGVtLFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICByYW5rOiByYW5rLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGtleUluZGV4OiBrZXlJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbi8qKlxuICogR2V0cyB0aGUgaGlnaGVzdCByYW5raW5nIGZvciB2YWx1ZSBmb3IgdGhlIGdpdmVuIGl0ZW0gYmFzZWQgb24gaXRzIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGtleXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBpdGVtIHRvIHJhbmtcbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgLSB0aGUga2V5cyB0byBnZXQgdmFsdWVzIGZyb20gdGhlIGl0ZW0gZm9yIHRoZSByYW5raW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gcmFuayBhZ2FpbnN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdG8gY29udHJvbCB0aGUgcmFua2luZ1xuICogQHJldHVybiB7e3Jhbms6IE51bWJlciwga2V5SW5kZXg6IE51bWJlciwga2V5VGhyZXNob2xkOiBOdW1iZXJ9fSAtIHRoZSBoaWdoZXN0IHJhbmtpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEhpZ2hlc3RSYW5raW5nKGl0ZW0sIGtleXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICgha2V5cykge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBlbmRzIHVwIGJlaW5nIGR1cGxpY2F0ZSBvZiAnaXRlbScgaW4gbWF0Y2hlcyBidXQgY29uc2lzdGVudFxuICAgICAgcmFua2VkSXRlbTogaXRlbSxcbiAgICAgIHJhbms6IGdldE1hdGNoUmFua2luZyhpdGVtLCB2YWx1ZSwgb3B0aW9ucyksXG4gICAgICBrZXlJbmRleDogLTEsXG4gICAgICBrZXlUaHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkXG4gICAgfTtcbiAgfVxuXG4gIHZhciB2YWx1ZXNUb1JhbmsgPSBnZXRBbGxWYWx1ZXNUb1JhbmsoaXRlbSwga2V5cyk7XG4gIHJldHVybiB2YWx1ZXNUb1JhbmsucmVkdWNlKGZ1bmN0aW9uIChfcmVmMiwgX3JlZjMsIGkpIHtcbiAgICB2YXIgcmFuayA9IF9yZWYyLnJhbmssXG4gICAgICAgIGtleUluZGV4ID0gX3JlZjIua2V5SW5kZXgsXG4gICAgICAgIGtleVRocmVzaG9sZCA9IF9yZWYyLmtleVRocmVzaG9sZDtcbiAgICB2YXIgaXRlbVZhbHVlID0gX3JlZjMuaXRlbVZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcbiAgICB2YXIgbmV3UmFuayA9IGdldE1hdGNoUmFua2luZyhpdGVtVmFsdWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB2YXIgbWluUmFua2luZyA9IGF0dHJpYnV0ZXMubWluUmFua2luZyxcbiAgICAgICAgbWF4UmFua2luZyA9IGF0dHJpYnV0ZXMubWF4UmFua2luZyxcbiAgICAgICAgdGhyZXNob2xkID0gYXR0cmlidXRlcy50aHJlc2hvbGQ7XG5cbiAgICBpZiAobmV3UmFuayA8IG1pblJhbmtpbmcgJiYgbmV3UmFuayA+PSByYW5raW5ncy5NQVRDSEVTKSB7XG4gICAgICBuZXdSYW5rID0gbWluUmFua2luZztcbiAgICB9IGVsc2UgaWYgKG5ld1JhbmsgPiBtYXhSYW5raW5nKSB7XG4gICAgICBuZXdSYW5rID0gbWF4UmFua2luZztcbiAgICB9XG5cbiAgICBpZiAobmV3UmFuayA+IHJhbmspIHtcbiAgICAgIHJhbmsgPSBuZXdSYW5rO1xuICAgICAga2V5SW5kZXggPSBpO1xuICAgICAga2V5VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByYW5rZWRJdGVtOiBpdGVtVmFsdWUsXG4gICAgICByYW5rOiByYW5rLFxuICAgICAga2V5SW5kZXg6IGtleUluZGV4LFxuICAgICAga2V5VGhyZXNob2xkOiBrZXlUaHJlc2hvbGRcbiAgICB9O1xuICB9LCB7XG4gICAgcmFuazogcmFua2luZ3MuTk9fTUFUQ0gsXG4gICAga2V5SW5kZXg6IC0xLFxuICAgIGtleVRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGRcbiAgfSk7XG59XG4vKipcbiAqIEdpdmVzIGEgcmFua2luZ3Mgc2NvcmUgYmFzZWQgb24gaG93IHdlbGwgdGhlIHR3byBzdHJpbmdzIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciB0aGUgbWF0Y2ggKGxpa2Uga2VlcERpYWNyaXRpY3MgZm9yIGNvbXBhcmlzb24pXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmFua2luZyBmb3IgaG93IHdlbGwgc3RyaW5nVG9SYW5rIG1hdGNoZXMgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0TWF0Y2hSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgb3B0aW9ucykge1xuICAvKiBlc2xpbnQgY29tcGxleGl0eTpbMiwgMTJdICovXG4gIHRlc3RTdHJpbmcgPSBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHRlc3RTdHJpbmcsIG9wdGlvbnMpO1xuICBzdHJpbmdUb1JhbmsgPSBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHN0cmluZ1RvUmFuaywgb3B0aW9ucyk7IC8vIHRvbyBsb25nXG5cbiAgaWYgKHN0cmluZ1RvUmFuay5sZW5ndGggPiB0ZXN0U3RyaW5nLmxlbmd0aCkge1xuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfSAvLyBjYXNlIHNlbnNpdGl2ZSBlcXVhbHNcblxuXG4gIGlmICh0ZXN0U3RyaW5nID09PSBzdHJpbmdUb1JhbmspIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQ0FTRV9TRU5TSVRJVkVfRVFVQUw7XG4gIH1cblxuICB2YXIgY2FzZVJhbmsgPSBnZXRDYXNlUmFua2luZyh0ZXN0U3RyaW5nKTtcbiAgdmFyIGlzUGFydGlhbCA9IGlzUGFydGlhbE9mQ2FzZSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKTtcbiAgdmFyIGlzQ2FzZWRBY3JvbnltID0gaXNDYXNlQWNyb255bSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKTsgLy8gTG93ZXIgY2FzaW5nIGJlZm9yZSBmdXJ0aGVyIGNvbXBhcmlzb25cblxuICB0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICBzdHJpbmdUb1JhbmsgPSBzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKTsgLy8gY2FzZSBpbnNlbnNpdGl2ZSBlcXVhbHNcblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkVRVUFMICsgY2FzZVJhbms7XG4gIH0gLy8gc3RhcnRzIHdpdGhcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSA9PT0gMCkge1xuICAgIHJldHVybiByYW5raW5ncy5TVEFSVFNfV0lUSCArIGNhc2VSYW5rO1xuICB9IC8vIHdvcmQgc3RhcnRzIHdpdGhcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2YoXCIgXCIgKyBzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5XT1JEX1NUQVJUU19XSVRIICsgY2FzZVJhbms7XG4gIH0gLy8gaXMgYSBwYXJ0IGluc2lkZSBhIGNhc2VkIHN0cmluZ1xuXG5cbiAgaWYgKGlzUGFydGlhbCkge1xuICAgIHJldHVybiByYW5raW5ncy5TVFJJTkdfQ0FTRSArIGNhc2VSYW5rO1xuICB9IC8vIGlzIGFjcm9ueW0gZm9yIGEgY2FzZWQgc3RyaW5nXG5cblxuICBpZiAoY2FzZVJhbmsgPiAwICYmIGlzQ2FzZWRBY3JvbnltKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLlNUUklOR19DQVNFX0FDUk9OWU0gKyBjYXNlUmFuaztcbiAgfSAvLyBjb250YWluc1xuXG5cbiAgaWYgKHRlc3RTdHJpbmcuaW5kZXhPZihzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5DT05UQUlOUyArIGNhc2VSYW5rO1xuICB9IGVsc2UgaWYgKHN0cmluZ1RvUmFuay5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBJZiB0aGUgb25seSBjaGFyYWN0ZXIgaW4gdGhlIGdpdmVuIHN0cmluZ1RvUmFua1xuICAgIC8vICAgaXNuJ3QgZXZlbiBjb250YWluZWQgaW4gdGhlIHRlc3RTdHJpbmcsIHRoZW5cbiAgICAvLyAgIGl0J3MgZGVmaW5pdGVseSBub3QgYSBtYXRjaC5cbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH0gLy8gYWNyb255bVxuXG5cbiAgaWYgKGdldEFjcm9ueW0odGVzdFN0cmluZykuaW5kZXhPZihzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5BQ1JPTllNICsgY2FzZVJhbms7XG4gIH0gLy8gd2lsbCByZXR1cm4gYSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICAvLyByYW5raW5ncy5NQVRDSEVTICsgMSBkZXBlbmRpbmcgIG9uIGhvdyBjbG9zZSBvZiBhIG1hdGNoIGl0IGlzLlxuXG5cbiAgcmV0dXJuIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFjcm9ueW0gZm9yIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyBmb3Igd2hpY2ggdG8gcHJvZHVjZSB0aGUgYWNyb255bVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGFjcm9ueW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEFjcm9ueW0oc3RyaW5nKSB7XG4gIHZhciBhY3JvbnltID0gJyc7XG4gIHZhciB3b3Jkc0luU3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJyk7XG4gIHdvcmRzSW5TdHJpbmcuZm9yRWFjaChmdW5jdGlvbiAod29yZEluU3RyaW5nKSB7XG4gICAgdmFyIHNwbGl0QnlIeXBoZW5Xb3JkcyA9IHdvcmRJblN0cmluZy5zcGxpdCgnLScpO1xuICAgIHNwbGl0QnlIeXBoZW5Xb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChzcGxpdEJ5SHlwaGVuV29yZCkge1xuICAgICAgYWNyb255bSArPSBzcGxpdEJ5SHlwaGVuV29yZC5zdWJzdHIoMCwgMSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYWNyb255bTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHNjb3JlIGJhc2Ugb24gdGhlIGNhc2Ugb2YgdGhlIHRlc3RTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgdGhlIHJhbmtpbmcsXG4gKiBiYXNlZCBvbiB0aGUgY2FzZSBiZXR3ZWVuIDAgYW5kIDEgZm9yIGhvdyB0aGUgdGVzdFN0cmluZyBtYXRjaGVzIHRoZSBjYXNlXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDYXNlUmFua2luZyh0ZXN0U3RyaW5nKSB7XG4gIHZhciBjb250YWluc1VwcGVyQ2FzZSA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKSAhPT0gdGVzdFN0cmluZztcbiAgdmFyIGNvbnRhaW5zRGFzaCA9IHRlc3RTdHJpbmcuaW5kZXhPZignLScpID49IDA7XG4gIHZhciBjb250YWluc1VuZGVyc2NvcmUgPSB0ZXN0U3RyaW5nLmluZGV4T2YoJ18nKSA+PSAwO1xuXG4gIGlmICghY29udGFpbnNVcHBlckNhc2UgJiYgIWNvbnRhaW5zVW5kZXJzY29yZSAmJiBjb250YWluc0Rhc2gpIHtcbiAgICByZXR1cm4gY2FzZVJhbmtpbmdzLktFQkFCO1xuICB9XG5cbiAgaWYgKCFjb250YWluc1VwcGVyQ2FzZSAmJiBjb250YWluc1VuZGVyc2NvcmUgJiYgIWNvbnRhaW5zRGFzaCkge1xuICAgIHJldHVybiBjYXNlUmFua2luZ3MuU05BS0U7XG4gIH1cblxuICBpZiAoY29udGFpbnNVcHBlckNhc2UgJiYgIWNvbnRhaW5zRGFzaCAmJiAhY29udGFpbnNVbmRlcnNjb3JlKSB7XG4gICAgdmFyIHN0YXJ0c1dpdGhVcHBlckNhc2UgPSB0ZXN0U3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgPT09IHRlc3RTdHJpbmdbMF07XG5cbiAgICBpZiAoc3RhcnRzV2l0aFVwcGVyQ2FzZSkge1xuICAgICAgcmV0dXJuIGNhc2VSYW5raW5ncy5QQVNDQUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhc2VSYW5raW5ncy5DQU1FTDtcbiAgfVxuXG4gIHJldHVybiBjYXNlUmFua2luZ3MuTk9fQ0FTRTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBzdHJpbmdUb1JhbmsgaXMgb25lIG9mIHRoZSBjYXNlIHBhcnRzIGluIHRoZSB0ZXN0U3RyaW5nICh3b3JrcyB3aXRoIGFueSBzdHJpbmcgY2FzZSlcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIGlzUGFydGlhbE9mQ2FzZSgnaGVsbG9Xb3JsZCcsICd3b3JsZCcsIGNhc2VSYW5raW5ncy5DQU1FTClcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIGZhbHNlXG4gKiBpc1BhcnRpYWxPZkNhc2UoJ2hlbGxvV29ybGQnLCAnb3dvcmwnLCBjYXNlUmFua2luZ3MuQ0FNRUwpXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nVG9SYW5rIC0gdGhlIHN0cmluZyB0byByYW5rXG4gKiBAcGFyYW0ge051bWJlcn0gY2FzZVJhbmtpbmcgLSB0aGUgcmFua2luZyBzY29yZSBiYXNlZCBvbiBjYXNlIG9mIHRlc3RTdHJpbmdcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZSBzdHJpbmdUb1JhbmsgaXMgb25lIG9mIHRoZSBjYXNlIHBhcnRzIGluIHRoZSB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBpc1BhcnRpYWxPZkNhc2UodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFua2luZykge1xuICB2YXIgdGVzdEluZGV4ID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyaW5nVG9SYW5rLnRvTG93ZXJDYXNlKCkpO1xuXG4gIHN3aXRjaCAoY2FzZVJhbmtpbmcpIHtcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5TTkFLRTpcbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nW3Rlc3RJbmRleCAtIDFdID09PSAnXyc7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5LRUJBQjpcbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nW3Rlc3RJbmRleCAtIDFdID09PSAnLSc7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5QQVNDQUw6XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuQ0FNRUw6XG4gICAgICByZXR1cm4gdGVzdEluZGV4ICE9PSAtMSAmJiB0ZXN0U3RyaW5nW3Rlc3RJbmRleF0gPT09IHRlc3RTdHJpbmdbdGVzdEluZGV4XS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuLyoqXG4gKiBDaGVjayBpZiBzdHJpbmdUb1JhbmsgaXMgYW4gYWNyb255bSBmb3IgYSBwYXJ0aWFsIGNhc2VcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIGlzQ2FzZUFjcm9ueW0oJ3N1cGVyX2R1cGVyX2ZpbGUnLCAnc2RmJywgY2FzZVJhbmtpbmdzLlNOQUtFKVxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBhY3JvbnltIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBjYXNlUmFuayAtIHRoZSByYW5raW5nIG9mIHRoZSBjYXNlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIGFuIGFjcm9ueW0gZm9yIHRoZSB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Nhc2VBY3JvbnltKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmspIHtcbiAgdmFyIHNwbGl0VmFsdWUgPSBudWxsO1xuXG4gIHN3aXRjaCAoY2FzZVJhbmspIHtcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5TTkFLRTpcbiAgICAgIHNwbGl0VmFsdWUgPSAnXyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLktFQkFCOlxuICAgICAgc3BsaXRWYWx1ZSA9ICctJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuUEFTQ0FMOlxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLkNBTUVMOlxuICAgICAgc3BsaXRWYWx1ZSA9IC8oPz1bQS1aXSkvO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3BsaXRWYWx1ZSA9IG51bGw7XG4gIH1cblxuICB2YXIgc3BsaXRUZXN0U3RyaW5nID0gdGVzdFN0cmluZy5zcGxpdChzcGxpdFZhbHVlKTtcbiAgcmV0dXJuIHN0cmluZ1RvUmFuay50b0xvd2VyQ2FzZSgpLnNwbGl0KCcnKS5yZWR1Y2UoZnVuY3Rpb24gKGNvcnJlY3QsIGNoYXIsIGNoYXJJbmRleCkge1xuICAgIHZhciBzcGxpdEl0ZW0gPSBzcGxpdFRlc3RTdHJpbmdbY2hhckluZGV4XTtcbiAgICByZXR1cm4gY29ycmVjdCAmJiBzcGxpdEl0ZW0gJiYgc3BsaXRJdGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09IGNoYXI7XG4gIH0sIHRydWUpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc2NvcmUgYmFzZWQgb24gaG93IHNwcmVhZCBhcGFydCB0aGVcbiAqIGNoYXJhY3RlcnMgZnJvbSB0aGUgc3RyaW5nVG9SYW5rIGFyZSB3aXRoaW4gdGhlIHRlc3RTdHJpbmcuXG4gKiBBIG51bWJlciBjbG9zZSB0byByYW5raW5ncy5NQVRDSEVTIHJlcHJlc2VudHMgYSBsb29zZSBtYXRjaC4gQSBudW1iZXIgY2xvc2VcbiAqIHRvIHJhbmtpbmdzLk1BVENIRVMgKyAxIHJlcHJlc2VudHMgYSB0aWdodGVyIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBiZXR3ZWVuIHJhbmtpbmdzLk1BVENIRVMgYW5kXG4gKiByYW5raW5ncy5NQVRDSEVTICsgMSBmb3IgaG93IHdlbGwgc3RyaW5nVG9SYW5rIG1hdGNoZXMgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2xvc2VuZXNzUmFua2luZyh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmspIHtcbiAgdmFyIG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCA9IDA7XG4gIHZhciBjaGFyTnVtYmVyID0gMDtcblxuICBmdW5jdGlvbiBmaW5kTWF0Y2hpbmdDaGFyYWN0ZXIobWF0Y2hDaGFyLCBzdHJpbmcsIGluZGV4KSB7XG4gICAgZm9yICh2YXIgaiA9IGluZGV4OyBqIDwgc3RyaW5nLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgc3RyaW5nQ2hhciA9IHN0cmluZ1tqXTtcblxuICAgICAgaWYgKHN0cmluZ0NoYXIgPT09IG1hdGNoQ2hhcikge1xuICAgICAgICBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgKz0gMTtcbiAgICAgICAgcmV0dXJuIGogKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmtpbmcoc3ByZWFkKSB7XG4gICAgdmFyIGluT3JkZXJQZXJjZW50YWdlID0gbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50IC8gc3RyaW5nVG9SYW5rLmxlbmd0aDtcbiAgICB2YXIgcmFua2luZyA9IHJhbmtpbmdzLk1BVENIRVMgKyBpbk9yZGVyUGVyY2VudGFnZSAqICgxIC8gc3ByZWFkKTtcbiAgICByZXR1cm4gcmFua2luZztcbiAgfVxuXG4gIHZhciBmaXJzdEluZGV4ID0gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKHN0cmluZ1RvUmFua1swXSwgdGVzdFN0cmluZywgMCk7XG5cbiAgaWYgKGZpcnN0SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICB9XG5cbiAgY2hhck51bWJlciA9IGZpcnN0SW5kZXg7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBzdHJpbmdUb1JhbmsubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2hDaGFyID0gc3RyaW5nVG9SYW5rW2ldO1xuICAgIGNoYXJOdW1iZXIgPSBmaW5kTWF0Y2hpbmdDaGFyYWN0ZXIobWF0Y2hDaGFyLCB0ZXN0U3RyaW5nLCBjaGFyTnVtYmVyKTtcbiAgICB2YXIgZm91bmQgPSBjaGFyTnVtYmVyID4gLTE7XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNwcmVhZCA9IGNoYXJOdW1iZXIgLSBmaXJzdEluZGV4O1xuICByZXR1cm4gZ2V0UmFua2luZyhzcHJlYWQpO1xufVxuLyoqXG4gKiBTb3J0cyBpdGVtcyB0aGF0IGhhdmUgYSByYW5rLCBpbmRleCwgYW5kIGtleUluZGV4XG4gKiBAcGFyYW0ge09iamVjdH0gYSAtIHRoZSBmaXJzdCBpdGVtIHRvIHNvcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIC0gdGhlIHNlY29uZCBpdGVtIHRvIHNvcnRcbiAqIEByZXR1cm4ge051bWJlcn0gLTEgaWYgYSBzaG91bGQgY29tZSBmaXJzdCwgMSBpZiBiIHNob3VsZCBjb21lIGZpcnN0XG4gKiBOb3RlOiB3aWxsIG5ldmVyIHJldHVybiAwXG4gKi9cblxuXG5mdW5jdGlvbiBzb3J0UmFua2VkSXRlbXMoYSwgYikge1xuICB2YXIgYUZpcnN0ID0gLTE7XG4gIHZhciBiRmlyc3QgPSAxO1xuICB2YXIgYVJhbmtlZEl0ZW0gPSBhLnJhbmtlZEl0ZW0sXG4gICAgICBhUmFuayA9IGEucmFuayxcbiAgICAgIGFLZXlJbmRleCA9IGEua2V5SW5kZXg7XG4gIHZhciBiUmFua2VkSXRlbSA9IGIucmFua2VkSXRlbSxcbiAgICAgIGJSYW5rID0gYi5yYW5rLFxuICAgICAgYktleUluZGV4ID0gYi5rZXlJbmRleDtcblxuICBpZiAoYVJhbmsgPT09IGJSYW5rKSB7XG4gICAgaWYgKGFLZXlJbmRleCA9PT0gYktleUluZGV4KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGFSYW5rZWRJdGVtKS5sb2NhbGVDb21wYXJlKGJSYW5rZWRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFLZXlJbmRleCA8IGJLZXlJbmRleCA/IGFGaXJzdCA6IGJGaXJzdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFSYW5rID4gYlJhbmsgPyBhRmlyc3QgOiBiRmlyc3Q7XG4gIH1cbn1cbi8qKlxuICogUHJlcGFyZXMgdmFsdWUgZm9yIGNvbXBhcmlzb24gYnkgc3RyaW5naWZ5aW5nIGl0LCByZW1vdmluZyBkaWFjcml0aWNzIChpZiBzcGVjaWZpZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2xlYW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0ge2tlZXBEaWFjcml0aWNzOiB3aGV0aGVyIHRvIHJlbW92ZSBkaWFjcml0aWNzfVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgcHJlcGFyZWQgdmFsdWVcbiAqL1xuXG5cbmZ1bmN0aW9uIHByZXBhcmVWYWx1ZUZvckNvbXBhcmlzb24odmFsdWUsIF9yZWY0KSB7XG4gIHZhciBrZWVwRGlhY3JpdGljcyA9IF9yZWY0LmtlZXBEaWFjcml0aWNzO1xuICB2YWx1ZSA9IFwiXCIgKyB2YWx1ZTsgLy8gdG9TdHJpbmdcblxuICBpZiAoIWtlZXBEaWFjcml0aWNzKSB7XG4gICAgdmFsdWUgPSByZW1vdmVBY2NlbnRzKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogR2V0cyB2YWx1ZSBmb3Iga2V5IGluIGl0ZW0gYXQgYXJiaXRyYXJpbHkgbmVzdGVkIGtleXBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gdGhlIGl0ZW1cbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBrZXkgLSB0aGUgcG90ZW50aWFsbHkgbmVzdGVkIGtleXBhdGggb3IgcHJvcGVydHkgY2FsbGJhY2tcbiAqIEByZXR1cm4ge0FycmF5fSAtIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlKHMpIGF0IHRoZSBuZXN0ZWQga2V5cGF0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0SXRlbVZhbHVlcyhpdGVtLCBrZXkpIHtcbiAgaWYgKF90eXBlb2Yoa2V5KSA9PT0gJ29iamVjdCcpIHtcbiAgICBrZXkgPSBrZXkua2V5O1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUgPSBrZXkoaXRlbSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgLy8gaGFuZGxlIG5lc3RlZCBrZXlzXG4gICAgdmFsdWUgPSBrZXkuc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gKGl0ZW1PYmosIG5lc3RlZEtleSkge1xuICAgICAgcmV0dXJuIGl0ZW1PYmogPyBpdGVtT2JqW25lc3RlZEtleV0gOiBudWxsO1xuICAgIH0sIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gaXRlbVtrZXldO1xuICB9IC8vIGNvbmNhdCBiZWNhdXNlIGB2YWx1ZWAgY2FuIGJlIGEgc3RyaW5nIG9yIGFuIGFycmF5XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBbXS5jb25jYXQodmFsdWUpIDogbnVsbDtcbn1cbi8qKlxuICogR2V0cyBhbGwgdGhlIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGtleXMgaW4gdGhlIGdpdmVuIGl0ZW0gYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UgdmFsdWVzXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIHRoZSBpdGVtIGZyb20gd2hpY2ggdGhlIHZhbHVlcyB3aWxsIGJlIHJldHJpZXZlZFxuICogQHBhcmFtIHtBcnJheX0ga2V5cyAtIHRoZSBrZXlzIHRvIHVzZSB0byByZXRyaWV2ZSB0aGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtBcnJheX0gb2JqZWN0cyB3aXRoIHtpdGVtVmFsdWUsIGF0dHJpYnV0ZXN9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBbGxWYWx1ZXNUb1JhbmsoaXRlbSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFsbFZhbHMsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBnZXRJdGVtVmFsdWVzKGl0ZW0sIGtleSk7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbVZhbHVlKSB7XG4gICAgICAgIGFsbFZhbHMucHVzaCh7XG4gICAgICAgICAgaXRlbVZhbHVlOiBpdGVtVmFsdWUsXG4gICAgICAgICAgYXR0cmlidXRlczogZ2V0S2V5QXR0cmlidXRlcyhrZXkpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFZhbHM7XG4gIH0sIFtdKTtcbn1cbi8qKlxuICogR2V0cyBhbGwgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBnaXZlbiBrZXlcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30ga2V5IC0gdGhlIGtleSBmcm9tIHdoaWNoIHRoZSBhdHRyaWJ1dGVzIHdpbGwgYmUgcmV0cmlldmVkXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkncyBhdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRLZXlBdHRyaWJ1dGVzKGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICBrZXkgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIG1heFJhbmtpbmc6IEluZmluaXR5LFxuICAgIG1pblJhbmtpbmc6IC1JbmZpbml0eVxuICB9LCBrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNvcnRlcjtcbmV4cG9ydCB7IHJhbmtpbmdzIH07IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi4vcnVudGltZVwiO1xudmFyIFNQRUNJQUxfQVRUUklCVVRFX1NFVFRFUlMgPSAvXihodG1sfHRleHR8Y3NzKSQvO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KGF0dHJpYnV0ZXMsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcblxuICAgIGlmIChTUEVDSUFMX0FUVFJJQlVURV9TRVRURVJTLnRlc3Qoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSA9PT0gdHJ1ZSA/IGtleSA6IFwiXCIgKyB2YWx1ZSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi4vcnVudGltZVwiO1xudmFyIENVU1RPTV9QUk9QRVJUWV9SRUdFWCA9IC9eLS0vO1xudmFyIERFRkFVTFRfU1RZTEVTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtcbnZhciBWRU5ET1JfUFJFRklYRVMgPSBbXCItd2Via2l0LVwiLCBcIi1tb3otXCIsIFwiLW8tXCIsIFwiLW1zLVwiXTtcbnZhciBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xudmFyIElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO1xudmFyIERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUyA9IC9zY3JvbGwoVG9wfExlZnQpL2k7XG52YXIgSEFTX1BJWEVMU19VTklUID0gL3B4JC87XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5IGluIERFRkFVTFRfU1RZTEVTKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBWRU5ET1JfUFJFRklYRVMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ZWROYW1lID0gXCJcIi5jb25jYXQoVkVORE9SX1BSRUZJWEVTW2ldKS5jb25jYXQocHJvcGVydHkpO1xuXG4gICAgaWYgKHByZWZpeGVkTmFtZSBpbiBERUZBVUxUX1NUWUxFUykge1xuICAgICAgcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldID0gcHJlZml4ZWROYW1lO1xuICAgICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgICB9XG4gIH1cblxuICBwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0eTtcbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnRzLCBzdHlsZXMpIHtcbiAgdmFyIHN0eWxlZEVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShlbGVtZW50cykgPyBlbGVtZW50cyA6IFtlbGVtZW50c107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gc3R5bGVkRWxlbWVudHNbaV07XG4gICAgdmFyIHN0eWxlID0gZWxlbWVudC5zdHlsZTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHN0eWxlcykge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShzdHlsZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUy50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBlbGVtZW50W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKENVU1RPTV9QUk9QRVJUWV9SRUdFWC50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZXNbcHJvcGVydHldID09PSBcIm51bWJlclwiICYmICFJU19OT05fRElNRU5TSU9OQUwudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgdmFsdWUgKz0gXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBwcm9wZXJ0eSA9IG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlcyhlbGVtZW50KSB7XG4gIHZhciBwc2V1ZG9FbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICB2YXIgdmlldyA9IG51bGwgIT09IGVsZW1lbnQub3duZXJEb2N1bWVudCAmJiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgIHZpZXcgPSB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIHBzZXVkb0VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgdmFyIHBzZXVkb0VsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gIHZhciBjYXN0ZWRFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAoRElSRUNUTFlfQUNDRVNTSUJMRV9TRVRURVJTLnRlc3QocHJvcGVydHkpKSB7XG4gICAgcmV0dXJuIGNhc3RlZEVsZW1lbnRbcHJvcGVydHldO1xuICB9XG5cbiAgaWYgKCFDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSkpIHtcbiAgICBwcm9wZXJ0eSA9IG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcyhjYXN0ZWRFbGVtZW50LCBwc2V1ZG9FbGVtZW50KTtcbiAgdmFyIHZhbHVlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIHx8IHN0eWxlc1twcm9wZXJ0eV07XG5cbiAgaWYgKFwib3BhY2l0eVwiID09PSBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIiA/IFwiMVwiIDogdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QocHJvcGVydHkpICYmIEhBU19QSVhFTFNfVU5JVC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKEhBU19QSVhFTFNfVU5JVCwgXCJcIiksIDEwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShlbGVtZW50LCBzdHlsZSkge1xuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxpc3RbaV0uc3R5bGUuZGlzcGxheSA9IHN0eWxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgdXBkYXRlRGlzcGxheShlbGVtZW50LCBcIm5vbmVcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgfTtcbn0iLCJpbXBvcnQgeyBzcGxpdFN0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vdXRpbHNcIjtcbnZhciBsaXN0ZW5lclJlZ2lzdHJ5ID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBvbihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIHZhciBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG4gIHZhciB0eXBlcyA9IHNwbGl0U3RyaW5nVmFsdWUodHlwZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0eXBlcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAobnVsbCA9PT0gbm9kZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGV2ZW50VHlwZSA9IHR5cGVzW2pdO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQobm9kZSk7XG5cbiAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgIGxpc3RlbmVycyA9IHt9O1xuICAgICAgICBsaXN0ZW5lclJlZ2lzdHJ5LnNldChub2RlLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJzW2V2ZW50VHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIHZhciBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG4gIHZhciB0eXBlcyA9IHNwbGl0U3RyaW5nVmFsdWUodHlwZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0eXBlcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAobnVsbCA9PT0gbm9kZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGV2ZW50VHlwZSA9IHR5cGVzW2pdO1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQobm9kZSk7XG5cbiAgICAgIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5lcnNbZXZlbnRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGxpc3RlbmVyc1tldmVudFR5cGVdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgaWYgKC0xICE9PSBpbmRleCkge1xuICAgICAgICAgIGxpc3RlbmVyc1tldmVudFR5cGVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnRlcm1lZGlhdGUgPSBmdW5jdGlvbiBpbnRlcm1lZGlhdGUoZXZlbnQpIHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICBvZmYoZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgfTtcblxuICBvbihlbGVtZW50LCB0eXBlLCBpbnRlcm1lZGlhdGUpO1xuICByZXR1cm4gaW50ZXJtZWRpYXRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaW50ZXJtZWRpYXRlID0gZnVuY3Rpb24gaW50ZXJtZWRpYXRlKGV2ZW50KSB7XG4gICAgdmFyIG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQgPSBmaW5kRGVsZWdhdGVkVGFyZ2V0KGVsZW1lbnQsIGV2ZW50LnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgaWYgKG51bGwgIT09IG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQpIHtcbiAgICAgIGhhbmRsZXIoZXZlbnQsIG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBvbihlbGVtZW50LCB0eXBlLCBpbnRlcm1lZGlhdGUpO1xuICByZXR1cm4gaW50ZXJtZWRpYXRlO1xufVxuXG5mdW5jdGlvbiBmaW5kRGVsZWdhdGVkVGFyZ2V0KGRlbGVnYXRlRWxlbWVudCwgY3VycmVudFRhcmdldCwgc2VsZWN0b3IpIHtcbiAgdmFyIG5vZGUgPSBjdXJyZW50VGFyZ2V0O1xuXG4gIHdoaWxlIChudWxsICE9PSBub2RlICYmIG5vZGUgIT09IGRlbGVnYXRlRWxlbWVudCkge1xuICAgIGlmIChub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKGVsZW1lbnQsIHR5cGUpIHtcbiAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXZlbnQgPSBjcmVhdGVFdmVudCh0eXBlLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIGRldGFpbDogZGF0YVxuICB9KTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnQodHlwZSwgYXJncykge1xuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgISFhcmdzLmJ1YmJsZXMsICEhYXJncy5jYW5jZWxhYmxlLCBhcmdzLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbExpc3RlbmVycyhlbGVtZW50KSB7XG4gIHJldHVybiBsaXN0ZW5lclJlZ2lzdHJ5LmdldChlbGVtZW50KSB8fCB7fTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgeyBzZXRTdHlsZXMgfSBmcm9tIFwiLi9jc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWwpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIHZhciBjaGlsZHJlbiA9IGRvYy5ib2R5LmNoaWxkcmVuO1xuXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSBwYXJzZSBIVE1MIHdpdGggZXhhY3RseSBvbmUgdmFsaWQgcm9vdCBlbGVtZW50LiBBIHZhbGlkIGVsZW1lbnQgY2FuIHN0YW5kIG9uIGl0cyBvd24gaW4gdGhlIGJvZHkuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVVbnN0eWxlZEVsZW1lbnQodHlwZSwgYXR0cmlidXRlcyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMuY3NzICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgYXR0cmlidXRlcy5jc3MpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5zdHlsZWRFbGVtZW50KHR5cGUpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgZWxlbWVudCA9IC0xICE9PSB0eXBlLmluZGV4T2YoXCI8XCIpID8gcGFyc2VIdG1sKHR5cGUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgc2V0QXR0cnMoZWxlbWVudCwgYXR0cmlidXRlcyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLmh0bWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5odG1sO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJlbnROb2RlID0gbGlzdFtpXS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKG51bGwgIT09IHBhcmVudE5vZGUpIHtcbiAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlzdFtpXSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZWxlbWVudCkge1xuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc0VsZW1lbnQobGlzdFtpXSkpIHtcbiAgICAgIGxpc3RbaV0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGVsZW1lbnQsIHJlcGxhY2VtZW50KSB7XG4gIHZhciBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gIGlmIChudWxsICE9PSBwYXJlbnROb2RlKSB7XG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIGFkamFjZW50UG9zaXRpb24sIGluc2VydEludG8sIGluc2VydFJlZmVyZW5jZSkge1xuICBpZiAodHlwZW9mIGluc2VydCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlZmVyZW5jZS5pbnNlcnRBZGphY2VudEhUTUwoYWRqYWNlbnRQb3NpdGlvbiwgaW5zZXJ0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5zZXJ0SW50byA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsaXN0ID0gQXJyYXkuaXNBcnJheShpbnNlcnQpID8gaW5zZXJ0IDogW2luc2VydF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zZXJ0SW50by5pbnNlcnRCZWZvcmUobGlzdFtpXSwgaW5zZXJ0UmVmZXJlbmNlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYmVmb3JlZW5kXCIsIHJlZmVyZW5jZSwgbnVsbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZChyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImFmdGVyYmVnaW5cIiwgcmVmZXJlbmNlLCByZWZlcmVuY2UuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZShyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImJlZm9yZWJlZ2luXCIsIHJlZmVyZW5jZS5wYXJlbnRFbGVtZW50LCByZWZlcmVuY2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYWZ0ZXJlbmRcIiwgcmVmZXJlbmNlLnBhcmVudEVsZW1lbnQsIHJlZmVyZW5jZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgYWRkKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0W2FkZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShjbGFzc05hbWUpO1xufSIsImltcG9ydCBcIi4uL3BvbHlmaWxsL2RvbVwiO1xuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlcyhlbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIG51bGwgPT09IHNlbGVjdG9yIHx8IGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGZldGNoQWxsU2libGluZ3MoZWxlbWVudCwgc2VsZWN0b3IsIGFjY2Vzc29yKSB7XG4gIHZhciBpbmRleGFibGVFbGVtZW50ID0gZWxlbWVudDtcbiAgdmFyIHNpYmxpbmcgPSBpbmRleGFibGVFbGVtZW50W2FjY2Vzc29yXTtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChzaWJsaW5nKTtcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1thY2Nlc3Nvcl07XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTaW5nbGVTaWJsaW5nKGVsZW1lbnQsIHNlbGVjdG9yLCBhY2Nlc3Nvcikge1xuICB2YXIgaW5kZXhhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIHZhciBzaWJsaW5nID0gaW5kZXhhYmxlRWxlbWVudFthY2Nlc3Nvcl07XG5cbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1thY2Nlc3Nvcl07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZE9uZShzZWxlY3Rvcikge1xuICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihsaXN0LCBzZWxlY3Rvcikge1xuICByZXR1cm4gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm90KGxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhZS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIC0xICE9PSBzZWxlY3Rvci5pbmRleE9mKGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUgIT09IHNlbGVjdG9yO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICB2YXIgbGlzdCA9IFtdO1xuICB2YXIgY2hpbGQgPSBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdENoaWxkKHBhcmVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHZhciBjaGlsZCA9IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldihlbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoU2luZ2xlU2libGluZyhlbGVtZW50LCBzZWxlY3RvciwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHQoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaFNpbmdsZVNpYmxpbmcoZWxlbWVudCwgc2VsZWN0b3IsIFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXZBbGwoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dEFsbChlbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoQWxsU2libGluZ3MoZWxlbWVudCwgc2VsZWN0b3IsIFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNpYmxpbmdzKGVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICB2YXIgbGlzdCA9IFtdO1xuICB2YXIgc2libGluZyA9IG51bGw7XG5cbiAgaWYgKG51bGwgIT09IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgIHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH1cblxuICB3aGlsZSAobnVsbCAhPT0gc2libGluZykge1xuICAgIGlmIChzaWJsaW5nICE9PSBlbGVtZW50ICYmIGVsZW1lbnRNYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkge1xuICAgICAgbGlzdC5wdXNoKHNpYmxpbmcpO1xuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgdmFyIHJvb3RFbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIHdoaWxlIChudWxsICE9PSBwYXJlbnQgJiYgcm9vdEVsZW1lbnQgIT09IHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NoaWxkRWxlbWVudChwYXJlbnQsIG5vZGUpIHtcbiAgdmFyIHBvaW50ZXIgPSBub2RlO1xuXG4gIHdoaWxlIChwb2ludGVyICE9PSBudWxsKSB7XG4gICAgaWYgKHBvaW50ZXIgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9pbnRlciA9IHBvaW50ZXIucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nVmFsdWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID09PSBcIlwiID8gW10gOiB2YWx1ZS50cmltKCkuc3BsaXQoLyArLyk7XG59IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi9ydW50aW1lXCI7XG5pbXBvcnQgeyB0eXBlT2YgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCkge1xuICBpZiAoMCA9PT0gKGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IDAgOiBhcmd1bWVudHMubGVuZ3RoIC0gMSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKDEgPCAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAxKSkge1xuICAgIHZhciByZXN1bHQgPSB0YXJnZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgIHJlc3VsdCA9IG1lcmdlKHJlc3VsdCwgaSArIDEgPCAxIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSArIDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaSArIDFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIHNvdXJjZVR5cGUgPSB0eXBlT2Yoc291cmNlKTtcbiAgdmFyIHRhcmdldFR5cGUgPSB0eXBlT2YodGFyZ2V0KTtcblxuICBpZiAoc291cmNlVHlwZSA9PT0gdGFyZ2V0VHlwZSB8fCBcIm51bGxcIiA9PT0gc291cmNlVHlwZSB8fCBcIm51bGxcIiA9PT0gdGFyZ2V0VHlwZSkge1xuICAgIGlmIChcImFycmF5XCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKFwib2JqZWN0XCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5KHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZCA/IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VKc29uKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YXIgY29udGVudCA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIHJldHVybiBjb250ZW50ICE9PSBcIlwiID8gSlNPTi5wYXJzZShjb250ZW50KSA6IG51bGw7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBKU09OIGNvbnRlbnQ6IFwiLmNvbmNhdChlLm1lc3NhZ2UpLCBlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWxlbWVudEFzSnNvbihlbGVtZW50KSB7XG4gIHJldHVybiBzYWZlUGFyc2VKc29uKChlbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCIpLnJlcGxhY2UoLyZsdDsvZywgXCI8XCIpLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpLnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKSk7XG59IiwiZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmaW5kIH0gZnJvbSBcIi4uL2RvbS90cmF2ZXJzZVwiO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSBcIi4uL2V4dGVuZFwiO1xuaW1wb3J0IHsgcGFyc2VFbGVtZW50QXNKc29uIH0gZnJvbSBcIi4uL2pzb25cIjtcbmV4cG9ydCBmdW5jdGlvbiBtb3VudChzZWxlY3RvciwgbW91bnRhYmxlLCBvcHRpb25zKSB7XG4gIGRvTW91bnQoZmluZChzZWxlY3RvciksIG1vdW50YWJsZSwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRMYXp5KHNlbGVjdG9yLCBpbXBvcnRlciwgb3B0aW9ucykge1xuICB2YXIgZWxlbWVudHMgPSBmaW5kKHNlbGVjdG9yKTtcblxuICBpZiAoIWVsZW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGltcG9ydGVyKCkudGhlbihmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgcmV0dXJuIGRvTW91bnQoZWxlbWVudHMsIG1vZHVsZS5kZWZhdWx0LCBvcHRpb25zKTtcbiAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJNb3VudGluZyBvZiBjb21wb25lbnQgb2YgcGF0aCAnXCIuY29uY2F0KHNlbGVjdG9yLCBcIicgZmFpbGVkOiBcIikuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkb01vdW50KGVsZW1lbnRzLCBtb3VudGFibGUsIHJhd09wdGlvbnMpIHtcbiAgdmFyIG1vdW50YWJsZUFueSA9IG1vdW50YWJsZTtcbiAgdmFyIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgIHR5cGU6IFwiZnVuY1wiXG4gIH0sIHJhd09wdGlvbnMgfHwge30pO1xuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKFwianN4XCIgPT09IG9wdGlvbnMudHlwZSkge1xuICAgICAgdmFyIG9wdHMgPSBvcHRpb25zO1xuICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgIHZhciBwYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IG1vdW50IG9uIGNvbnRhaW5lciB3aXRob3V0IHBhcmVudC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRzLmh5ZHJhdGUpIHtcbiAgICAgICAgcGFyYW1zID0gZXh0ZW5kKHBhcmFtcywgcGFyc2VFbGVtZW50QXNKc29uKG5vZGUpIHx8IHt9KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoY3JlYXRlRWxlbWVudChtb3VudGFibGUsIHBhcmFtcyksIHBhcmVudCwgb3B0cy5oeWRyYXRlID8gbm9kZSA6IHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIGlmIChcImNsYXNzXCIgPT09IG9wdGlvbnMudHlwZSkge1xuICAgICAgdmFyIHN0YW5kYWxvbmVPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgdmFyIG1vdW50ZWQgPSBfY29uc3RydWN0KG1vdW50YWJsZUFueSwgW25vZGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhbmRhbG9uZU9wdGlvbnMucGFyYW1zIHx8IFtdKSkpO1xuXG4gICAgICBtb3VudGVkLmluaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9zdGFuZGFsb25lT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBtb3VudGFibGUuYXBwbHkodm9pZCAwLCBbbm9kZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfc3RhbmRhbG9uZU9wdGlvbnMucGFyYW1zIHx8IFtdKSkpO1xuICAgIH1cbiAgfSk7XG59IiwiaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gIHZhciBlbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBlbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufSIsImV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcGVydHkpO1xufSIsImV4cG9ydCBmdW5jdGlvbiB0eXBlT2YodmFsdWUpIHtcbiAgdmFyIG1hdGNoID0gL15cXFtvYmplY3QgKC4qPyldJC8uZXhlYyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgcmV0dXJuIG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6IFwib2JqZWN0XCI7XG59IiwidmFyIG4sXG4gICAgbCxcbiAgICB1LFxuICAgIHQsXG4gICAgaSxcbiAgICByID0ge30sXG4gICAgZiA9IFtdLFxuICAgIG8gPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxeLS0vaTtcblxuZnVuY3Rpb24gZShuLCBsKSB7XG4gIGZvciAodmFyIHUgaW4gbCkge1xuICAgIG5bdV0gPSBsW3VdO1xuICB9XG5cbiAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIGMobikge1xuICB2YXIgbCA9IG4ucGFyZW50Tm9kZTtcbiAgbCAmJiBsLnJlbW92ZUNoaWxkKG4pO1xufVxuXG5mdW5jdGlvbiBzKG4sIGwsIHUpIHtcbiAgdmFyIHQsXG4gICAgICBpLFxuICAgICAgcixcbiAgICAgIGYsXG4gICAgICBvID0gYXJndW1lbnRzO1xuICBpZiAobCA9IGUoe30sIGwpLCBhcmd1bWVudHMubGVuZ3RoID4gMykgZm9yICh1ID0gW3VdLCB0ID0gMzsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykge1xuICAgIHUucHVzaChvW3RdKTtcbiAgfVxuICBpZiAobnVsbCAhPSB1ICYmIChsLmNoaWxkcmVuID0gdSksIG51bGwgIT0gbiAmJiBudWxsICE9IG4uZGVmYXVsdFByb3BzKSBmb3IgKGkgaW4gbi5kZWZhdWx0UHJvcHMpIHtcbiAgICB2b2lkIDAgPT09IGxbaV0gJiYgKGxbaV0gPSBuLmRlZmF1bHRQcm9wc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGYgPSBsLmtleSwgbnVsbCAhPSAociA9IGwucmVmKSAmJiBkZWxldGUgbC5yZWYsIG51bGwgIT0gZiAmJiBkZWxldGUgbC5rZXksIGEobiwgbCwgZiwgcik7XG59XG5cbmZ1bmN0aW9uIGEobCwgdSwgdCwgaSkge1xuICB2YXIgciA9IHtcbiAgICB0eXBlOiBsLFxuICAgIHByb3BzOiB1LFxuICAgIGtleTogdCxcbiAgICByZWY6IGksXG4gICAgX19rOiBudWxsLFxuICAgIF9fcDogbnVsbCxcbiAgICBfX2I6IDAsXG4gICAgX19lOiBudWxsLFxuICAgIGw6IG51bGwsXG4gICAgX19jOiBudWxsLFxuICAgIGNvbnN0cnVjdG9yOiB2b2lkIDBcbiAgfTtcbiAgcmV0dXJuIG4udm5vZGUgJiYgbi52bm9kZShyKSwgcjtcbn1cblxuZnVuY3Rpb24gaCgpIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiB2KG4pIHtcbiAgcmV0dXJuIG4uY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHAobikge1xuICBpZiAobnVsbCA9PSBuIHx8IFwiYm9vbGVhblwiID09IHR5cGVvZiBuKSByZXR1cm4gbnVsbDtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG4gfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgbikgcmV0dXJuIGEobnVsbCwgbiwgbnVsbCwgbnVsbCk7XG5cbiAgaWYgKG51bGwgIT0gbi5fX2UgfHwgbnVsbCAhPSBuLl9fYykge1xuICAgIHZhciBsID0gYShuLnR5cGUsIG4ucHJvcHMsIG4ua2V5LCBudWxsKTtcbiAgICByZXR1cm4gbC5fX2UgPSBuLl9fZSwgbDtcbiAgfVxuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiB5KG4sIGwpIHtcbiAgdGhpcy5wcm9wcyA9IG4sIHRoaXMuY29udGV4dCA9IGw7XG59XG5cbmZ1bmN0aW9uIGQobiwgbCkge1xuICBpZiAobnVsbCA9PSBsKSByZXR1cm4gbi5fX3AgPyBkKG4uX19wLCBuLl9fcC5fX2suaW5kZXhPZihuKSArIDEpIDogbnVsbDtcblxuICBmb3IgKHZhciB1OyBsIDwgbi5fX2subGVuZ3RoOyBsKyspIHtcbiAgICBpZiAobnVsbCAhPSAodSA9IG4uX19rW2xdKSAmJiBudWxsICE9IHUuX19lKSByZXR1cm4gdS5fX2U7XG4gIH1cblxuICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLnR5cGUgPyBkKG4pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gbShuKSB7XG4gIHZhciBsLCB1O1xuXG4gIGlmIChudWxsICE9IChuID0gbi5fX3ApICYmIG51bGwgIT0gbi5fX2MpIHtcbiAgICBmb3IgKG4uX19lID0gbi5fX2MuYmFzZSA9IG51bGwsIGwgPSAwOyBsIDwgbi5fX2subGVuZ3RoOyBsKyspIHtcbiAgICAgIGlmIChudWxsICE9ICh1ID0gbi5fX2tbbF0pICYmIG51bGwgIT0gdS5fX2UpIHtcbiAgICAgICAgbi5fX2UgPSBuLl9fYy5iYXNlID0gdS5fX2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtKG4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHcodCkge1xuICAhdC5fX2QgJiYgKHQuX19kID0gITApICYmIDEgPT09IGwucHVzaCh0KSAmJiAobi5kZWJvdW5jZVJlbmRlcmluZyB8fCB1KShnKTtcbn1cblxuZnVuY3Rpb24gZygpIHtcbiAgdmFyIG47XG5cbiAgZm9yIChsLnNvcnQoZnVuY3Rpb24gKG4sIGwpIHtcbiAgICByZXR1cm4gbC5fX3YuX19iIC0gbi5fX3YuX19iO1xuICB9KTsgbiA9IGwucG9wKCk7KSB7XG4gICAgbi5fX2QgJiYgbi5mb3JjZVVwZGF0ZSghMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gayhuLCBsLCB1LCB0LCBpLCBvLCBlLCBzLCBhKSB7XG4gIHZhciBoLFxuICAgICAgdixcbiAgICAgIHksXG4gICAgICBtLFxuICAgICAgdyxcbiAgICAgIGcsXG4gICAgICBrLFxuICAgICAgYixcbiAgICAgIHggPSBsLl9fayB8fCBfKGwucHJvcHMuY2hpbGRyZW4sIGwuX19rID0gW10sIHAsICEwKSxcbiAgICAgIEMgPSB1ICYmIHUuX19rIHx8IGYsXG4gICAgICBQID0gQy5sZW5ndGg7XG5cbiAgZm9yIChzID09IHIgJiYgKHMgPSBudWxsICE9IG8gPyBvWzBdIDogUCA/IGQodSwgMCkgOiBudWxsKSwgdiA9IDA7IHYgPCB4Lmxlbmd0aDsgdisrKSB7XG4gICAgaWYgKG51bGwgIT0gKGggPSB4W3ZdID0gcCh4W3ZdKSkpIHtcbiAgICAgIGlmIChoLl9fcCA9IGwsIGguX19iID0gbC5fX2IgKyAxLCBudWxsID09PSAobSA9IENbdl0pIHx8IG0gJiYgaC5rZXkgPT0gbS5rZXkgJiYgaC50eXBlID09PSBtLnR5cGUpIENbdl0gPSB2b2lkIDA7ZWxzZSBmb3IgKHkgPSAwOyB5IDwgUDsgeSsrKSB7XG4gICAgICAgIGlmICgobSA9IENbeV0pICYmIGgua2V5ID09IG0ua2V5ICYmIGgudHlwZSA9PT0gbS50eXBlKSB7XG4gICAgICAgICAgQ1t5XSA9IHZvaWQgMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG0gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodyA9IE4obiwgaCwgbSA9IG0gfHwgciwgdCwgaSwgbywgZSwgbnVsbCwgcywgYSksICh5ID0gaC5yZWYpICYmIG0ucmVmICE9IHkgJiYgKGIgfHwgKGIgPSBbXSkpLnB1c2goeSwgaC5fX2MgfHwgdywgaCksIG51bGwgIT0gdykge1xuICAgICAgICBpZiAobnVsbCA9PSBrICYmIChrID0gdyksIG51bGwgIT0gaC5sKSB3ID0gaC5sLCBoLmwgPSBudWxsO2Vsc2UgaWYgKG8gPT0gbSB8fCB3ICE9IHMgfHwgbnVsbCA9PSB3LnBhcmVudE5vZGUpIG46IGlmIChudWxsID09IHMgfHwgcy5wYXJlbnROb2RlICE9PSBuKSBuLmFwcGVuZENoaWxkKHcpO2Vsc2Uge1xuICAgICAgICAgIGZvciAoZyA9IHMsIHkgPSAwOyAoZyA9IGcubmV4dFNpYmxpbmcpICYmIHkgPCBQOyB5ICs9IDIpIHtcbiAgICAgICAgICAgIGlmIChnID09IHcpIGJyZWFrIG47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbi5pbnNlcnRCZWZvcmUodywgcyk7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IHcubmV4dFNpYmxpbmcsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbC50eXBlICYmIChsLmwgPSB3KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobC5fX2UgPSBrLCBudWxsICE9IG8gJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsLnR5cGUpIGZvciAodiA9IG8ubGVuZ3RoOyB2LS07KSB7XG4gICAgbnVsbCAhPSBvW3ZdICYmIGMob1t2XSk7XG4gIH1cblxuICBmb3IgKHYgPSBQOyB2LS07KSB7XG4gICAgbnVsbCAhPSBDW3ZdICYmIHooQ1t2XSwgQ1t2XSk7XG4gIH1cblxuICBpZiAoYikgZm9yICh2ID0gMDsgdiA8IGIubGVuZ3RoOyB2KyspIHtcbiAgICBqKGJbdl0sIGJbKyt2XSwgYlsrK3ZdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfKG4sIGwsIHUsIHQpIHtcbiAgaWYgKG51bGwgPT0gbCAmJiAobCA9IFtdKSwgbnVsbCA9PSBuIHx8IFwiYm9vbGVhblwiID09IHR5cGVvZiBuKSB0ICYmIGwucHVzaChudWxsKTtlbHNlIGlmIChBcnJheS5pc0FycmF5KG4pKSBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcbiAgICBfKG5baV0sIGwsIHUsIHQpO1xuICB9IGVsc2UgbC5wdXNoKHUgPyB1KG4pIDogbik7XG4gIHJldHVybiBsO1xufVxuXG5mdW5jdGlvbiBiKG4sIGwsIHUsIHQsIGkpIHtcbiAgdmFyIHI7XG5cbiAgZm9yIChyIGluIHUpIHtcbiAgICByIGluIGwgfHwgQyhuLCByLCBudWxsLCB1W3JdLCB0KTtcbiAgfVxuXG4gIGZvciAociBpbiBsKSB7XG4gICAgaSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGxbcl0gfHwgXCJ2YWx1ZVwiID09PSByIHx8IFwiY2hlY2tlZFwiID09PSByIHx8IHVbcl0gPT09IGxbcl0gfHwgQyhuLCByLCBsW3JdLCB1W3JdLCB0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB4KG4sIGwsIHUpIHtcbiAgXCItXCIgPT09IGxbMF0gPyBuLnNldFByb3BlcnR5KGwsIHUpIDogbltsXSA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIHUgJiYgITEgPT09IG8udGVzdChsKSA/IHUgKyBcInB4XCIgOiB1O1xufVxuXG5mdW5jdGlvbiBDKG4sIGwsIHUsIHQsIGkpIHtcbiAgdmFyIHIsIGYsIG8sIGUsIGM7XG4gIGlmIChcImtleVwiID09PSAobCA9IGkgPyBcImNsYXNzTmFtZVwiID09PSBsID8gXCJjbGFzc1wiIDogbCA6IFwiY2xhc3NcIiA9PT0gbCA/IFwiY2xhc3NOYW1lXCIgOiBsKSB8fCBcImNoaWxkcmVuXCIgPT09IGwpIDtlbHNlIGlmIChcInN0eWxlXCIgPT09IGwpIHtcbiAgICBpZiAociA9IG4uc3R5bGUsIFwic3RyaW5nXCIgPT0gdHlwZW9mIHUpIHIuY3NzVGV4dCA9IHU7ZWxzZSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiAoci5jc3NUZXh0ID0gXCJcIiwgdCA9IG51bGwpLCB0KSBmb3IgKGYgaW4gdCkge1xuICAgICAgICB1ICYmIGYgaW4gdSB8fCB4KHIsIGYsIFwiXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHUpIGZvciAobyBpbiB1KSB7XG4gICAgICAgIHQgJiYgdVtvXSA9PT0gdFtvXSB8fCB4KHIsIG8sIHVbb10pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcIm9cIiA9PT0gbFswXSAmJiBcIm5cIiA9PT0gbFsxXSkgZSA9IGwgIT09IChsID0gbC5yZXBsYWNlKC9DYXB0dXJlJC8sIFwiXCIpKSwgYyA9IGwudG9Mb3dlckNhc2UoKSwgbCA9IChjIGluIG4gPyBjIDogbCkuc2xpY2UoMiksIHUgPyAodCB8fCBuLmFkZEV2ZW50TGlzdGVuZXIobCwgUCwgZSksIChuLnUgfHwgKG4udSA9IHt9KSlbbF0gPSB1KSA6IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLCBQLCBlKTtlbHNlIGlmIChcImxpc3RcIiAhPT0gbCAmJiBcInRhZ05hbWVcIiAhPT0gbCAmJiAhaSAmJiBsIGluIG4pIHtcbiAgICBpZiAobi5sZW5ndGggJiYgXCJ2YWx1ZVwiID09IGwpIGZvciAobCA9IG4ubGVuZ3RoOyBsLS07KSB7XG4gICAgICBuLm9wdGlvbnNbbF0uc2VsZWN0ZWQgPSBuLm9wdGlvbnNbbF0udmFsdWUgPT0gdTtcbiAgICB9IGVsc2UgbltsXSA9IG51bGwgPT0gdSA/IFwiXCIgOiB1O1xuICB9IGVsc2UgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB1ICYmIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiAhPT0gbCAmJiAobCAhPT0gKGwgPSBsLnJlcGxhY2UoL154bGluazo/LywgXCJcIikpID8gbnVsbCA9PSB1IHx8ICExID09PSB1ID8gbi5yZW1vdmVBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgbC50b0xvd2VyQ2FzZSgpKSA6IG4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGwudG9Mb3dlckNhc2UoKSwgdSkgOiBudWxsID09IHUgfHwgITEgPT09IHUgPyBuLnJlbW92ZUF0dHJpYnV0ZShsKSA6IG4uc2V0QXR0cmlidXRlKGwsIHUpKTtcbn1cblxuZnVuY3Rpb24gUChsKSB7XG4gIHJldHVybiB0aGlzLnVbbC50eXBlXShuLmV2ZW50ID8gbi5ldmVudChsKSA6IGwpO1xufVxuXG5mdW5jdGlvbiBOKGwsIHUsIHQsIGksIHIsIGYsIG8sIGMsIHMsIGEpIHtcbiAgdmFyIGgsXG4gICAgICBkLFxuICAgICAgbSxcbiAgICAgIHcsXG4gICAgICBnLFxuICAgICAgYixcbiAgICAgIHgsXG4gICAgICBDLFxuICAgICAgUCxcbiAgICAgIE4sXG4gICAgICBUID0gdS50eXBlO1xuICBpZiAodm9pZCAwICE9PSB1LmNvbnN0cnVjdG9yKSByZXR1cm4gbnVsbDtcbiAgKGggPSBuLl9fYikgJiYgaCh1KTtcblxuICB0cnkge1xuICAgIG46IGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFQpIHtcbiAgICAgIGlmIChDID0gdS5wcm9wcywgUCA9IChoID0gVC5jb250ZXh0VHlwZSkgJiYgaVtoLl9fY10sIE4gPSBoID8gUCA/IFAucHJvcHMudmFsdWUgOiBoLl9fcCA6IGksIHQuX19jID8geCA9IChkID0gdS5fX2MgPSB0Ll9fYykuX19wID0gZC5fX0UgOiAoVC5wcm90b3R5cGUgJiYgVC5wcm90b3R5cGUucmVuZGVyID8gdS5fX2MgPSBkID0gbmV3IFQoQywgTikgOiAodS5fX2MgPSBkID0gbmV3IHkoQywgTiksIGQuY29uc3RydWN0b3IgPSBULCBkLnJlbmRlciA9IEEpLCBQICYmIFAuc3ViKGQpLCBkLnByb3BzID0gQywgZC5zdGF0ZSB8fCAoZC5zdGF0ZSA9IHt9KSwgZC5jb250ZXh0ID0gTiwgZC5fX24gPSBpLCBtID0gZC5fX2QgPSAhMCwgZC5fX2ggPSBbXSksIG51bGwgPT0gZC5fX3MgJiYgKGQuX19zID0gZC5zdGF0ZSksIG51bGwgIT0gVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJiYgZShkLl9fcyA9PSBkLnN0YXRlID8gZC5fX3MgPSBlKHt9LCBkLl9fcykgOiBkLl9fcywgVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoQywgZC5fX3MpKSwgbSkgbnVsbCA9PSBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAmJiBudWxsICE9IGQuY29tcG9uZW50V2lsbE1vdW50ICYmIGQuY29tcG9uZW50V2lsbE1vdW50KCksIG51bGwgIT0gZC5jb21wb25lbnREaWRNb3VudCAmJiBvLnB1c2goZCk7ZWxzZSB7XG4gICAgICAgIGlmIChudWxsID09IFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICYmIG51bGwgPT0gYyAmJiBudWxsICE9IGQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBkLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoQywgTiksICFjICYmIG51bGwgIT0gZC5zaG91bGRDb21wb25lbnRVcGRhdGUgJiYgITEgPT09IGQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKEMsIGQuX19zLCBOKSkge1xuICAgICAgICAgIGQucHJvcHMgPSBDLCBkLnN0YXRlID0gZC5fX3MsIGQuX19kID0gITEsIGQuX192ID0gdSwgdS5fX2UgPSB0Ll9fZSwgdS5fX2sgPSB0Ll9faztcbiAgICAgICAgICBicmVhayBuO1xuICAgICAgICB9XG5cbiAgICAgICAgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxVcGRhdGUgJiYgZC5jb21wb25lbnRXaWxsVXBkYXRlKEMsIGQuX19zLCBOKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh3ID0gZC5wcm9wcywgZyA9IGQuc3RhdGUsIGQuY29udGV4dCA9IE4sIGQucHJvcHMgPSBDLCBkLnN0YXRlID0gZC5fX3MsIChoID0gbi5fX3IpICYmIGgodSksIGQuX19kID0gITEsIGQuX192ID0gdSwgZC5fX1AgPSBsLCBfKG51bGwgIT0gKGggPSBkLnJlbmRlcihkLnByb3BzLCBkLnN0YXRlLCBkLmNvbnRleHQpKSAmJiBoLnR5cGUgPT0gdiAmJiBudWxsID09IGgua2V5ID8gaC5wcm9wcy5jaGlsZHJlbiA6IGgsIHUuX19rID0gW10sIHAsICEwKSwgbnVsbCAhPSBkLmdldENoaWxkQ29udGV4dCAmJiAoaSA9IGUoZSh7fSwgaSksIGQuZ2V0Q2hpbGRDb250ZXh0KCkpKSwgbSB8fCBudWxsID09IGQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgfHwgKGIgPSBkLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHcsIGcpKSwgayhsLCB1LCB0LCBpLCByLCBmLCBvLCBzLCBhKSwgZC5iYXNlID0gdS5fX2U7IGggPSBkLl9faC5wb3AoKTspIHtcbiAgICAgICAgaC5jYWxsKGQpO1xuICAgICAgfVxuXG4gICAgICBtIHx8IG51bGwgPT0gdyB8fCBudWxsID09IGQuY29tcG9uZW50RGlkVXBkYXRlIHx8IGQuY29tcG9uZW50RGlkVXBkYXRlKHcsIGcsIGIpLCB4ICYmIChkLl9fRSA9IGQuX19wID0gbnVsbCk7XG4gICAgfSBlbHNlIHUuX19lID0gJCh0Ll9fZSwgdSwgdCwgaSwgciwgZiwgbywgYSk7XG5cbiAgICAoaCA9IG4uZGlmZmVkKSAmJiBoKHUpO1xuICB9IGNhdGNoIChsKSB7XG4gICAgbi5fX2UobCwgdSwgdCk7XG4gIH1cblxuICByZXR1cm4gdS5fX2U7XG59XG5cbmZ1bmN0aW9uIFQobCwgdSkge1xuICBmb3IgKHZhciB0OyB0ID0gbC5wb3AoKTspIHtcbiAgICB0cnkge1xuICAgICAgdC5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIH0gY2F0Y2ggKGwpIHtcbiAgICAgIG4uX19lKGwsIHQuX192KTtcbiAgICB9XG4gIH1cblxuICBuLl9fYyAmJiBuLl9fYyh1KTtcbn1cblxuZnVuY3Rpb24gJChuLCBsLCB1LCB0LCBpLCBvLCBlLCBjKSB7XG4gIHZhciBzLFxuICAgICAgYSxcbiAgICAgIGgsXG4gICAgICB2LFxuICAgICAgcCA9IHUucHJvcHMsXG4gICAgICB5ID0gbC5wcm9wcztcbiAgaWYgKGkgPSBcInN2Z1wiID09PSBsLnR5cGUgfHwgaSwgbnVsbCA9PSBuICYmIG51bGwgIT0gbykgZm9yIChzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcbiAgICBpZiAobnVsbCAhPSAoYSA9IG9bc10pICYmIChudWxsID09PSBsLnR5cGUgPyAzID09PSBhLm5vZGVUeXBlIDogYS5sb2NhbE5hbWUgPT09IGwudHlwZSkpIHtcbiAgICAgIG4gPSBhLCBvW3NdID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChudWxsID09IG4pIHtcbiAgICBpZiAobnVsbCA9PT0gbC50eXBlKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoeSk7XG4gICAgbiA9IGkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBsLnR5cGUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUpLCBvID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBudWxsID09PSBsLnR5cGUgPyBwICE9PSB5ICYmIChuLmRhdGEgPSB5KSA6IGwgIT09IHUgJiYgKG51bGwgIT0gbyAmJiAobyA9IGYuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSwgaCA9IChwID0gdS5wcm9wcyB8fCByKS5kYW5nZXJvdXNseVNldElubmVySFRNTCwgdiA9IHkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGMgfHwgKHYgfHwgaCkgJiYgKHYgJiYgaCAmJiB2Ll9faHRtbCA9PSBoLl9faHRtbCB8fCAobi5pbm5lckhUTUwgPSB2ICYmIHYuX19odG1sIHx8IFwiXCIpKSwgYihuLCB5LCBwLCBpLCBjKSwgdiB8fCBrKG4sIGwsIHUsIHQsIFwiZm9yZWlnbk9iamVjdFwiICE9PSBsLnR5cGUgJiYgaSwgbywgZSwgciwgYyksIGMgfHwgKFwidmFsdWVcIiBpbiB5ICYmIHZvaWQgMCAhPT0geS52YWx1ZSAmJiB5LnZhbHVlICE9PSBuLnZhbHVlICYmIChuLnZhbHVlID0gbnVsbCA9PSB5LnZhbHVlID8gXCJcIiA6IHkudmFsdWUpLCBcImNoZWNrZWRcIiBpbiB5ICYmIHZvaWQgMCAhPT0geS5jaGVja2VkICYmIHkuY2hlY2tlZCAhPT0gbi5jaGVja2VkICYmIChuLmNoZWNrZWQgPSB5LmNoZWNrZWQpKSksIG47XG59XG5cbmZ1bmN0aW9uIGoobCwgdSwgdCkge1xuICB0cnkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbCA/IGwodSkgOiBsLmN1cnJlbnQgPSB1O1xuICB9IGNhdGNoIChsKSB7XG4gICAgbi5fX2UobCwgdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24geihsLCB1LCB0KSB7XG4gIHZhciBpLCByLCBmO1xuXG4gIGlmIChuLnVubW91bnQgJiYgbi51bm1vdW50KGwpLCAoaSA9IGwucmVmKSAmJiBqKGksIG51bGwsIHUpLCB0IHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbC50eXBlIHx8ICh0ID0gbnVsbCAhPSAociA9IGwuX19lKSksIGwuX19lID0gbC5sID0gbnVsbCwgbnVsbCAhPSAoaSA9IGwuX19jKSkge1xuICAgIGlmIChpLmNvbXBvbmVudFdpbGxVbm1vdW50KSB0cnkge1xuICAgICAgaS5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgIH0gY2F0Y2ggKGwpIHtcbiAgICAgIG4uX19lKGwsIHUpO1xuICAgIH1cbiAgICBpLmJhc2UgPSBpLl9fUCA9IG51bGw7XG4gIH1cblxuICBpZiAoaSA9IGwuX19rKSBmb3IgKGYgPSAwOyBmIDwgaS5sZW5ndGg7IGYrKykge1xuICAgIGlbZl0gJiYgeihpW2ZdLCB1LCB0KTtcbiAgfVxuICBudWxsICE9IHIgJiYgYyhyKTtcbn1cblxuZnVuY3Rpb24gQShuLCBsLCB1KSB7XG4gIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sIHUpO1xufVxuXG5mdW5jdGlvbiBEKGwsIHUsIGkpIHtcbiAgdmFyIG8sIGUsIGM7XG4gIG4uX19wICYmIG4uX19wKGwsIHUpLCBlID0gKG8gPSBpID09PSB0KSA/IG51bGwgOiBpICYmIGkuX19rIHx8IHUuX19rLCBsID0gcyh2LCBudWxsLCBbbF0pLCBjID0gW10sIE4odSwgbyA/IHUuX19rID0gbCA6IChpIHx8IHUpLl9fayA9IGwsIGUgfHwgciwgciwgdm9pZCAwICE9PSB1Lm93bmVyU1ZHRWxlbWVudCwgaSAmJiAhbyA/IFtpXSA6IGUgPyBudWxsIDogZi5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksIGMsICExLCBpIHx8IHIsIG8pLCBUKGMsIGwpO1xufVxuXG5mdW5jdGlvbiBIKG4sIGwpIHtcbiAgRChuLCBsLCB0KTtcbn1cblxuZnVuY3Rpb24gSShuLCBsKSB7XG4gIHJldHVybiBsID0gZShlKHt9LCBuLnByb3BzKSwgbCksIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIChsLmNoaWxkcmVuID0gZi5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpLCBhKG4udHlwZSwgbCwgbC5rZXkgfHwgbi5rZXksIGwucmVmIHx8IG4ucmVmKTtcbn1cblxuZnVuY3Rpb24gTChuKSB7XG4gIHZhciBsID0ge30sXG4gICAgICB1ID0ge1xuICAgIF9fYzogXCJfX2NDXCIgKyBpKyssXG4gICAgX19wOiBuLFxuICAgIENvbnN1bWVyOiBmdW5jdGlvbiBDb25zdW1lcihuLCBsKSB7XG4gICAgICByZXR1cm4gbi5jaGlsZHJlbihsKTtcbiAgICB9LFxuICAgIFByb3ZpZGVyOiBmdW5jdGlvbiBQcm92aWRlcihuKSB7XG4gICAgICB2YXIgdCxcbiAgICAgICAgICBpID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLmdldENoaWxkQ29udGV4dCB8fCAodCA9IFtdLCB0aGlzLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxbdS5fX2NdID0gaSwgbDtcbiAgICAgIH0sIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdC5zb21lKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgbC5fX1AgJiYgKGwuY29udGV4dCA9IG4udmFsdWUsIHcobCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuc3ViID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdC5wdXNoKG4pO1xuICAgICAgICB2YXIgbCA9IG4uY29tcG9uZW50V2lsbFVubW91bnQ7XG5cbiAgICAgICAgbi5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0LnNwbGljZSh0LmluZGV4T2YobiksIDEpLCBsICYmIGwuY2FsbChuKTtcbiAgICAgICAgfTtcbiAgICAgIH0pLCBuLmNoaWxkcmVuO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGUgPSB1LCB1O1xufVxuXG5uID0ge30sIHkucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKG4sIGwpIHtcbiAgdmFyIHUgPSB0aGlzLl9fcyAhPT0gdGhpcy5zdGF0ZSAmJiB0aGlzLl9fcyB8fCAodGhpcy5fX3MgPSBlKHt9LCB0aGlzLnN0YXRlKSk7XG4gIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIG4gfHwgKG4gPSBuKHUsIHRoaXMucHJvcHMpKSkgJiYgZSh1LCBuKSwgbnVsbCAhPSBuICYmIHRoaXMuX192ICYmIChsICYmIHRoaXMuX19oLnB1c2gobCksIHcodGhpcykpO1xufSwgeS5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAobikge1xuICB2YXIgbCxcbiAgICAgIHUsXG4gICAgICB0LFxuICAgICAgaSA9IHRoaXMuX192LFxuICAgICAgciA9IHRoaXMuX192Ll9fZSxcbiAgICAgIGYgPSB0aGlzLl9fUDtcbiAgZiAmJiAobCA9ICExICE9PSBuLCB1ID0gW10sIHQgPSBOKGYsIGksIGUoe30sIGkpLCB0aGlzLl9fbiwgdm9pZCAwICE9PSBmLm93bmVyU1ZHRWxlbWVudCwgbnVsbCwgdSwgbCwgbnVsbCA9PSByID8gZChpKSA6IHIpLCBUKHUsIGkpLCB0ICE9IHIgJiYgbShpKSksIG4gJiYgbigpO1xufSwgeS5wcm90b3R5cGUucmVuZGVyID0gdiwgbCA9IFtdLCB1ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBQcm9taXNlID8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKSA6IHNldFRpbWVvdXQsIG4uX19lID0gZnVuY3Rpb24gKG4sIGwsIHUpIHtcbiAgZm9yICh2YXIgdDsgbCA9IGwuX19wOykge1xuICAgIGlmICgodCA9IGwuX19jKSAmJiAhdC5fX3ApIHRyeSB7XG4gICAgICBpZiAodC5jb25zdHJ1Y3RvciAmJiBudWxsICE9IHQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKSB0LnNldFN0YXRlKHQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKTtlbHNlIHtcbiAgICAgICAgaWYgKG51bGwgPT0gdC5jb21wb25lbnREaWRDYXRjaCkgY29udGludWU7XG4gICAgICAgIHQuY29tcG9uZW50RGlkQ2F0Y2gobik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdyh0Ll9fRSA9IHQpO1xuICAgIH0gY2F0Y2ggKGwpIHtcbiAgICAgIG4gPSBsO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG47XG59LCB0ID0gciwgaSA9IDA7XG5leHBvcnQgeyBEIGFzIHJlbmRlciwgSCBhcyBoeWRyYXRlLCBzIGFzIGNyZWF0ZUVsZW1lbnQsIHMgYXMgaCwgdiBhcyBGcmFnbWVudCwgaCBhcyBjcmVhdGVSZWYsIHkgYXMgQ29tcG9uZW50LCBJIGFzIGNsb25lRWxlbWVudCwgTCBhcyBjcmVhdGVDb250ZXh0LCBfIGFzIHRvQ2hpbGRBcnJheSwgeiBhcyBfdW5tb3VudCwgbiBhcyBvcHRpb25zIH07IiwiaW1wb3J0IHsgb3B0aW9ucyBhcyBuIH0gZnJvbSBcInByZWFjdFwiO1xudmFyIHQsXG4gICAgcixcbiAgICB1ID0gW10sXG4gICAgaSA9IG4uX19yO1xuXG5uLl9fciA9IGZ1bmN0aW9uIChuKSB7XG4gIGkgJiYgaShuKSwgdCA9IDAsIChyID0gbi5fX2MpLl9fSCAmJiAoci5fX0gudCA9IHcoci5fX0gudCkpO1xufTtcblxudmFyIG8gPSBuLmRpZmZlZDtcblxubi5kaWZmZWQgPSBmdW5jdGlvbiAobikge1xuICBvICYmIG8obik7XG4gIHZhciB0ID0gbi5fX2M7XG5cbiAgaWYgKHQpIHtcbiAgICB2YXIgciA9IHQuX19IO1xuICAgIHIgJiYgKHIudSA9IHcoci51KSk7XG4gIH1cbn07XG5cbnZhciBmID0gbi51bm1vdW50O1xuXG5mdW5jdGlvbiBjKHQpIHtcbiAgbi5fX2ggJiYgbi5fX2gocik7XG4gIHZhciB1ID0gci5fX0ggfHwgKHIuX19IID0ge1xuICAgIGk6IFtdLFxuICAgIHQ6IFtdLFxuICAgIHU6IFtdXG4gIH0pO1xuICByZXR1cm4gdCA+PSB1LmkubGVuZ3RoICYmIHUuaS5wdXNoKHt9KSwgdS5pW3RdO1xufVxuXG5mdW5jdGlvbiBlKG4pIHtcbiAgcmV0dXJuIGEocSwgbik7XG59XG5cbmZ1bmN0aW9uIGEobiwgdSwgaSkge1xuICB2YXIgbyA9IGModCsrKTtcbiAgcmV0dXJuIG8uX19jIHx8IChvLl9fYyA9IHIsIG8ubyA9IFtpID8gaSh1KSA6IHEobnVsbCwgdSksIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHIgPSBuKG8ub1swXSwgdCk7XG4gICAgby5vWzBdICE9PSByICYmIChvLm9bMF0gPSByLCBvLl9fYy5zZXRTdGF0ZSh7fSkpO1xuICB9XSksIG8ubztcbn1cblxuZnVuY3Rpb24gdihuLCB1KSB7XG4gIHZhciBpID0gYyh0KyspO1xuICBGKGkudiwgdSkgJiYgKGkubyA9IG4sIGkudiA9IHUsIHIuX19ILnQucHVzaChpKSwgXyhyKSk7XG59XG5cbmZ1bmN0aW9uIG0obiwgdSkge1xuICB2YXIgaSA9IGModCsrKTtcbiAgRihpLnYsIHUpICYmIChpLm8gPSBuLCBpLnYgPSB1LCByLl9fSC51LnB1c2goaSkpO1xufVxuXG5mdW5jdGlvbiBwKG4pIHtcbiAgcmV0dXJuIHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBuXG4gICAgfTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBsKG4sIHIsIHUpIHtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIEYoaS52LCB1KSAmJiAoaS52ID0gdSwgbiAmJiAobi5jdXJyZW50ID0gcigpKSk7XG59XG5cbmZ1bmN0aW9uIHMobiwgcikge1xuICB2YXIgdSA9IGModCsrKTtcbiAgcmV0dXJuIEYodS52LCByKSA/ICh1LnYgPSByLCB1Lm0gPSBuLCB1Lm8gPSBuKCkpIDogdS5vO1xufVxuXG5mdW5jdGlvbiBkKG4sIHQpIHtcbiAgcmV0dXJuIHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuO1xuICB9LCB0KTtcbn1cblxuZnVuY3Rpb24geShuKSB7XG4gIHZhciB1ID0gci5jb250ZXh0W24uX19jXTtcbiAgaWYgKCF1KSByZXR1cm4gbi5fX3A7XG4gIHZhciBpID0gYyh0KyspO1xuICByZXR1cm4gbnVsbCA9PSBpLm8gJiYgKGkubyA9ICEwLCB1LnN1YihyKSksIHUucHJvcHMudmFsdWU7XG59XG5cbmZ1bmN0aW9uIFQodCwgcikge1xuICBuLnVzZURlYnVnVmFsdWUgJiYgbi51c2VEZWJ1Z1ZhbHVlKHIgPyByKHQpIDogdCk7XG59XG5cbm4udW5tb3VudCA9IGZ1bmN0aW9uIChuKSB7XG4gIGYgJiYgZihuKTtcbiAgdmFyIHQgPSBuLl9fYztcblxuICBpZiAodCkge1xuICAgIHZhciByID0gdC5fX0g7XG4gICAgciAmJiByLmkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4ucCAmJiBuLnAoKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIF8gPSBmdW5jdGlvbiBfKCkge307XG5cbmZ1bmN0aW9uIGcoKSB7XG4gIHUuc29tZShmdW5jdGlvbiAobikge1xuICAgIG4ubCA9ICExLCBuLl9fUCAmJiAobi5fX0gudCA9IHcobi5fX0gudCkpO1xuICB9KSwgdSA9IFtdO1xufVxuXG5mdW5jdGlvbiB3KG4pIHtcbiAgcmV0dXJuIG4uZm9yRWFjaChBKSwgbi5mb3JFYWNoKEUpLCBbXTtcbn1cblxuZnVuY3Rpb24gQShuKSB7XG4gIG4ucCAmJiBuLnAoKTtcbn1cblxuZnVuY3Rpb24gRShuKSB7XG4gIHZhciB0ID0gbi5vKCk7XG4gIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiAobi5wID0gdCk7XG59XG5cbmZ1bmN0aW9uIEYobiwgdCkge1xuICByZXR1cm4gIW4gfHwgdC5zb21lKGZ1bmN0aW9uICh0LCByKSB7XG4gICAgcmV0dXJuIHQgIT09IG5bcl07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxKG4sIHQpIHtcbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCA/IHQobikgOiB0O1xufVxuXG5cInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgKF8gPSBmdW5jdGlvbiBfKHQpIHtcbiAgIXQubCAmJiAodC5sID0gITApICYmIDEgPT09IHUucHVzaCh0KSAmJiAobi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgdCA9IGZ1bmN0aW9uIHQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQociksIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUpLCBzZXRUaW1lb3V0KG4pO1xuICAgIH0sXG4gICAgICAgIHIgPSBzZXRUaW1lb3V0KHQsIDEwMCksXG4gICAgICAgIHUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCk7XG4gIH0pKGcpO1xufSk7XG5leHBvcnQgeyBlIGFzIHVzZVN0YXRlLCBhIGFzIHVzZVJlZHVjZXIsIHYgYXMgdXNlRWZmZWN0LCBtIGFzIHVzZUxheW91dEVmZmVjdCwgcCBhcyB1c2VSZWYsIGwgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgcyBhcyB1c2VNZW1vLCBkIGFzIHVzZUNhbGxiYWNrLCB5IGFzIHVzZUNvbnRleHQsIFQgYXMgdXNlRGVidWdWYWx1ZSB9OyIsInZhciBjaGFyYWN0ZXJNYXAgPSB7XG4gIFwiw4BcIjogXCJBXCIsXG4gIFwiw4FcIjogXCJBXCIsXG4gIFwiw4JcIjogXCJBXCIsXG4gIFwiw4NcIjogXCJBXCIsXG4gIFwiw4RcIjogXCJBXCIsXG4gIFwiw4VcIjogXCJBXCIsXG4gIFwi4bqkXCI6IFwiQVwiLFxuICBcIuG6rlwiOiBcIkFcIixcbiAgXCLhurJcIjogXCJBXCIsXG4gIFwi4bq0XCI6IFwiQVwiLFxuICBcIuG6tlwiOiBcIkFcIixcbiAgXCLDhlwiOiBcIkFFXCIsXG4gIFwi4bqmXCI6IFwiQVwiLFxuICBcIuG6sFwiOiBcIkFcIixcbiAgXCLIglwiOiBcIkFcIixcbiAgXCLDh1wiOiBcIkNcIixcbiAgXCLhuIhcIjogXCJDXCIsXG4gIFwiw4hcIjogXCJFXCIsXG4gIFwiw4lcIjogXCJFXCIsXG4gIFwiw4pcIjogXCJFXCIsXG4gIFwiw4tcIjogXCJFXCIsXG4gIFwi4bq+XCI6IFwiRVwiLFxuICBcIuG4llwiOiBcIkVcIixcbiAgXCLhu4BcIjogXCJFXCIsXG4gIFwi4biUXCI6IFwiRVwiLFxuICBcIuG4nFwiOiBcIkVcIixcbiAgXCLIhlwiOiBcIkVcIixcbiAgXCLDjFwiOiBcIklcIixcbiAgXCLDjVwiOiBcIklcIixcbiAgXCLDjlwiOiBcIklcIixcbiAgXCLDj1wiOiBcIklcIixcbiAgXCLhuK5cIjogXCJJXCIsXG4gIFwiyIpcIjogXCJJXCIsXG4gIFwiw5BcIjogXCJEXCIsXG4gIFwiw5FcIjogXCJOXCIsXG4gIFwiw5JcIjogXCJPXCIsXG4gIFwiw5NcIjogXCJPXCIsXG4gIFwiw5RcIjogXCJPXCIsXG4gIFwiw5VcIjogXCJPXCIsXG4gIFwiw5ZcIjogXCJPXCIsXG4gIFwiw5hcIjogXCJPXCIsXG4gIFwi4buQXCI6IFwiT1wiLFxuICBcIuG5jFwiOiBcIk9cIixcbiAgXCLhuZJcIjogXCJPXCIsXG4gIFwiyI5cIjogXCJPXCIsXG4gIFwiw5lcIjogXCJVXCIsXG4gIFwiw5pcIjogXCJVXCIsXG4gIFwiw5tcIjogXCJVXCIsXG4gIFwiw5xcIjogXCJVXCIsXG4gIFwiw51cIjogXCJZXCIsXG4gIFwiw6BcIjogXCJhXCIsXG4gIFwiw6FcIjogXCJhXCIsXG4gIFwiw6JcIjogXCJhXCIsXG4gIFwiw6NcIjogXCJhXCIsXG4gIFwiw6RcIjogXCJhXCIsXG4gIFwiw6VcIjogXCJhXCIsXG4gIFwi4bqlXCI6IFwiYVwiLFxuICBcIuG6r1wiOiBcImFcIixcbiAgXCLhurNcIjogXCJhXCIsXG4gIFwi4bq1XCI6IFwiYVwiLFxuICBcIuG6t1wiOiBcImFcIixcbiAgXCLDplwiOiBcImFlXCIsXG4gIFwi4bqnXCI6IFwiYVwiLFxuICBcIuG6sVwiOiBcImFcIixcbiAgXCLIg1wiOiBcImFcIixcbiAgXCLDp1wiOiBcImNcIixcbiAgXCLhuIlcIjogXCJjXCIsXG4gIFwiw6hcIjogXCJlXCIsXG4gIFwiw6lcIjogXCJlXCIsXG4gIFwiw6pcIjogXCJlXCIsXG4gIFwiw6tcIjogXCJlXCIsXG4gIFwi4bq/XCI6IFwiZVwiLFxuICBcIuG4l1wiOiBcImVcIixcbiAgXCLhu4FcIjogXCJlXCIsXG4gIFwi4biVXCI6IFwiZVwiLFxuICBcIuG4nVwiOiBcImVcIixcbiAgXCLIh1wiOiBcImVcIixcbiAgXCLDrFwiOiBcImlcIixcbiAgXCLDrVwiOiBcImlcIixcbiAgXCLDrlwiOiBcImlcIixcbiAgXCLDr1wiOiBcImlcIixcbiAgXCLhuK9cIjogXCJpXCIsXG4gIFwiyItcIjogXCJpXCIsXG4gIFwiw7BcIjogXCJkXCIsXG4gIFwiw7FcIjogXCJuXCIsXG4gIFwiw7JcIjogXCJvXCIsXG4gIFwiw7NcIjogXCJvXCIsXG4gIFwiw7RcIjogXCJvXCIsXG4gIFwiw7VcIjogXCJvXCIsXG4gIFwiw7ZcIjogXCJvXCIsXG4gIFwiw7hcIjogXCJvXCIsXG4gIFwi4buRXCI6IFwib1wiLFxuICBcIuG5jVwiOiBcIm9cIixcbiAgXCLhuZNcIjogXCJvXCIsXG4gIFwiyI9cIjogXCJvXCIsXG4gIFwiw7lcIjogXCJ1XCIsXG4gIFwiw7pcIjogXCJ1XCIsXG4gIFwiw7tcIjogXCJ1XCIsXG4gIFwiw7xcIjogXCJ1XCIsXG4gIFwiw71cIjogXCJ5XCIsXG4gIFwiw79cIjogXCJ5XCIsXG4gIFwixIBcIjogXCJBXCIsXG4gIFwixIFcIjogXCJhXCIsXG4gIFwixIJcIjogXCJBXCIsXG4gIFwixINcIjogXCJhXCIsXG4gIFwixIRcIjogXCJBXCIsXG4gIFwixIVcIjogXCJhXCIsXG4gIFwixIZcIjogXCJDXCIsXG4gIFwixIdcIjogXCJjXCIsXG4gIFwixIhcIjogXCJDXCIsXG4gIFwixIlcIjogXCJjXCIsXG4gIFwixIpcIjogXCJDXCIsXG4gIFwixItcIjogXCJjXCIsXG4gIFwixIxcIjogXCJDXCIsXG4gIFwixI1cIjogXCJjXCIsXG4gIFwiQ8yGXCI6IFwiQ1wiLFxuICBcImPMhlwiOiBcImNcIixcbiAgXCLEjlwiOiBcIkRcIixcbiAgXCLEj1wiOiBcImRcIixcbiAgXCLEkFwiOiBcIkRcIixcbiAgXCLEkVwiOiBcImRcIixcbiAgXCLEklwiOiBcIkVcIixcbiAgXCLEk1wiOiBcImVcIixcbiAgXCLElFwiOiBcIkVcIixcbiAgXCLElVwiOiBcImVcIixcbiAgXCLEllwiOiBcIkVcIixcbiAgXCLEl1wiOiBcImVcIixcbiAgXCLEmFwiOiBcIkVcIixcbiAgXCLEmVwiOiBcImVcIixcbiAgXCLEmlwiOiBcIkVcIixcbiAgXCLEm1wiOiBcImVcIixcbiAgXCLEnFwiOiBcIkdcIixcbiAgXCLHtFwiOiBcIkdcIixcbiAgXCLEnVwiOiBcImdcIixcbiAgXCLHtVwiOiBcImdcIixcbiAgXCLEnlwiOiBcIkdcIixcbiAgXCLEn1wiOiBcImdcIixcbiAgXCLEoFwiOiBcIkdcIixcbiAgXCLEoVwiOiBcImdcIixcbiAgXCLEolwiOiBcIkdcIixcbiAgXCLEo1wiOiBcImdcIixcbiAgXCLEpFwiOiBcIkhcIixcbiAgXCLEpVwiOiBcImhcIixcbiAgXCLEplwiOiBcIkhcIixcbiAgXCLEp1wiOiBcImhcIixcbiAgXCLhuKpcIjogXCJIXCIsXG4gIFwi4birXCI6IFwiaFwiLFxuICBcIsSoXCI6IFwiSVwiLFxuICBcIsSpXCI6IFwiaVwiLFxuICBcIsSqXCI6IFwiSVwiLFxuICBcIsSrXCI6IFwiaVwiLFxuICBcIsSsXCI6IFwiSVwiLFxuICBcIsStXCI6IFwiaVwiLFxuICBcIsSuXCI6IFwiSVwiLFxuICBcIsSvXCI6IFwiaVwiLFxuICBcIsSwXCI6IFwiSVwiLFxuICBcIsSxXCI6IFwiaVwiLFxuICBcIsSyXCI6IFwiSUpcIixcbiAgXCLEs1wiOiBcImlqXCIsXG4gIFwixLRcIjogXCJKXCIsXG4gIFwixLVcIjogXCJqXCIsXG4gIFwixLZcIjogXCJLXCIsXG4gIFwixLdcIjogXCJrXCIsXG4gIFwi4biwXCI6IFwiS1wiLFxuICBcIuG4sVwiOiBcImtcIixcbiAgXCJLzIZcIjogXCJLXCIsXG4gIFwia8yGXCI6IFwia1wiLFxuICBcIsS5XCI6IFwiTFwiLFxuICBcIsS6XCI6IFwibFwiLFxuICBcIsS7XCI6IFwiTFwiLFxuICBcIsS8XCI6IFwibFwiLFxuICBcIsS9XCI6IFwiTFwiLFxuICBcIsS+XCI6IFwibFwiLFxuICBcIsS/XCI6IFwiTFwiLFxuICBcIsWAXCI6IFwibFwiLFxuICBcIsWBXCI6IFwibFwiLFxuICBcIsWCXCI6IFwibFwiLFxuICBcIuG4vlwiOiBcIk1cIixcbiAgXCLhuL9cIjogXCJtXCIsXG4gIFwiTcyGXCI6IFwiTVwiLFxuICBcIm3MhlwiOiBcIm1cIixcbiAgXCLFg1wiOiBcIk5cIixcbiAgXCLFhFwiOiBcIm5cIixcbiAgXCLFhVwiOiBcIk5cIixcbiAgXCLFhlwiOiBcIm5cIixcbiAgXCLFh1wiOiBcIk5cIixcbiAgXCLFiFwiOiBcIm5cIixcbiAgXCLFiVwiOiBcIm5cIixcbiAgXCJOzIZcIjogXCJOXCIsXG4gIFwibsyGXCI6IFwiblwiLFxuICBcIsWMXCI6IFwiT1wiLFxuICBcIsWNXCI6IFwib1wiLFxuICBcIsWOXCI6IFwiT1wiLFxuICBcIsWPXCI6IFwib1wiLFxuICBcIsWQXCI6IFwiT1wiLFxuICBcIsWRXCI6IFwib1wiLFxuICBcIsWSXCI6IFwiT0VcIixcbiAgXCLFk1wiOiBcIm9lXCIsXG4gIFwiUMyGXCI6IFwiUFwiLFxuICBcInDMhlwiOiBcInBcIixcbiAgXCLFlFwiOiBcIlJcIixcbiAgXCLFlVwiOiBcInJcIixcbiAgXCLFllwiOiBcIlJcIixcbiAgXCLFl1wiOiBcInJcIixcbiAgXCLFmFwiOiBcIlJcIixcbiAgXCLFmVwiOiBcInJcIixcbiAgXCJSzIZcIjogXCJSXCIsXG4gIFwicsyGXCI6IFwiclwiLFxuICBcIsiSXCI6IFwiUlwiLFxuICBcIsiTXCI6IFwiclwiLFxuICBcIsWaXCI6IFwiU1wiLFxuICBcIsWbXCI6IFwic1wiLFxuICBcIsWcXCI6IFwiU1wiLFxuICBcIsWdXCI6IFwic1wiLFxuICBcIsWeXCI6IFwiU1wiLFxuICBcIsiYXCI6IFwiU1wiLFxuICBcIsiZXCI6IFwic1wiLFxuICBcIsWfXCI6IFwic1wiLFxuICBcIsWgXCI6IFwiU1wiLFxuICBcIsWhXCI6IFwic1wiLFxuICBcIsWiXCI6IFwiVFwiLFxuICBcIsWjXCI6IFwidFwiLFxuICBcIsibXCI6IFwidFwiLFxuICBcIsiaXCI6IFwiVFwiLFxuICBcIsWkXCI6IFwiVFwiLFxuICBcIsWlXCI6IFwidFwiLFxuICBcIsWmXCI6IFwiVFwiLFxuICBcIsWnXCI6IFwidFwiLFxuICBcIlTMhlwiOiBcIlRcIixcbiAgXCJ0zIZcIjogXCJ0XCIsXG4gIFwixahcIjogXCJVXCIsXG4gIFwixalcIjogXCJ1XCIsXG4gIFwixapcIjogXCJVXCIsXG4gIFwixatcIjogXCJ1XCIsXG4gIFwixaxcIjogXCJVXCIsXG4gIFwixa1cIjogXCJ1XCIsXG4gIFwixa5cIjogXCJVXCIsXG4gIFwixa9cIjogXCJ1XCIsXG4gIFwixbBcIjogXCJVXCIsXG4gIFwixbFcIjogXCJ1XCIsXG4gIFwixbJcIjogXCJVXCIsXG4gIFwixbNcIjogXCJ1XCIsXG4gIFwiyJZcIjogXCJVXCIsXG4gIFwiyJdcIjogXCJ1XCIsXG4gIFwiVsyGXCI6IFwiVlwiLFxuICBcInbMhlwiOiBcInZcIixcbiAgXCLFtFwiOiBcIldcIixcbiAgXCLFtVwiOiBcIndcIixcbiAgXCLhuoJcIjogXCJXXCIsXG4gIFwi4bqDXCI6IFwid1wiLFxuICBcIljMhlwiOiBcIlhcIixcbiAgXCJ4zIZcIjogXCJ4XCIsXG4gIFwixbZcIjogXCJZXCIsXG4gIFwixbdcIjogXCJ5XCIsXG4gIFwixbhcIjogXCJZXCIsXG4gIFwiWcyGXCI6IFwiWVwiLFxuICBcInnMhlwiOiBcInlcIixcbiAgXCLFuVwiOiBcIlpcIixcbiAgXCLFulwiOiBcInpcIixcbiAgXCLFu1wiOiBcIlpcIixcbiAgXCLFvFwiOiBcInpcIixcbiAgXCLFvVwiOiBcIlpcIixcbiAgXCLFvlwiOiBcInpcIixcbiAgXCLFv1wiOiBcInNcIixcbiAgXCLGklwiOiBcImZcIixcbiAgXCLGoFwiOiBcIk9cIixcbiAgXCLGoVwiOiBcIm9cIixcbiAgXCLGr1wiOiBcIlVcIixcbiAgXCLGsFwiOiBcInVcIixcbiAgXCLHjVwiOiBcIkFcIixcbiAgXCLHjlwiOiBcImFcIixcbiAgXCLHj1wiOiBcIklcIixcbiAgXCLHkFwiOiBcImlcIixcbiAgXCLHkVwiOiBcIk9cIixcbiAgXCLHklwiOiBcIm9cIixcbiAgXCLHk1wiOiBcIlVcIixcbiAgXCLHlFwiOiBcInVcIixcbiAgXCLHlVwiOiBcIlVcIixcbiAgXCLHllwiOiBcInVcIixcbiAgXCLHl1wiOiBcIlVcIixcbiAgXCLHmFwiOiBcInVcIixcbiAgXCLHmVwiOiBcIlVcIixcbiAgXCLHmlwiOiBcInVcIixcbiAgXCLHm1wiOiBcIlVcIixcbiAgXCLHnFwiOiBcInVcIixcbiAgXCLhu6hcIjogXCJVXCIsXG4gIFwi4bupXCI6IFwidVwiLFxuICBcIuG5uFwiOiBcIlVcIixcbiAgXCLhublcIjogXCJ1XCIsXG4gIFwix7pcIjogXCJBXCIsXG4gIFwix7tcIjogXCJhXCIsXG4gIFwix7xcIjogXCJBRVwiLFxuICBcIse9XCI6IFwiYWVcIixcbiAgXCLHvlwiOiBcIk9cIixcbiAgXCLHv1wiOiBcIm9cIixcbiAgXCLDnlwiOiBcIlRIXCIsXG4gIFwiw75cIjogXCJ0aFwiLFxuICBcIuG5lFwiOiBcIlBcIixcbiAgXCLhuZVcIjogXCJwXCIsXG4gIFwi4bmkXCI6IFwiU1wiLFxuICBcIuG5pVwiOiBcInNcIixcbiAgXCJYzIFcIjogXCJYXCIsXG4gIFwieMyBXCI6IFwieFwiLFxuICBcItCDXCI6IFwi0JNcIixcbiAgXCLRk1wiOiBcItCzXCIsXG4gIFwi0IxcIjogXCLQmlwiLFxuICBcItGcXCI6IFwi0LpcIixcbiAgXCJBzItcIjogXCJBXCIsXG4gIFwiYcyLXCI6IFwiYVwiLFxuICBcIkXMi1wiOiBcIkVcIixcbiAgXCJlzItcIjogXCJlXCIsXG4gIFwiScyLXCI6IFwiSVwiLFxuICBcImnMi1wiOiBcImlcIixcbiAgXCLHuFwiOiBcIk5cIixcbiAgXCLHuVwiOiBcIm5cIixcbiAgXCLhu5JcIjogXCJPXCIsXG4gIFwi4buTXCI6IFwib1wiLFxuICBcIuG5kFwiOiBcIk9cIixcbiAgXCLhuZFcIjogXCJvXCIsXG4gIFwi4buqXCI6IFwiVVwiLFxuICBcIuG7q1wiOiBcInVcIixcbiAgXCLhuoBcIjogXCJXXCIsXG4gIFwi4bqBXCI6IFwid1wiLFxuICBcIuG7slwiOiBcIllcIixcbiAgXCLhu7NcIjogXCJ5XCIsXG4gIFwiyIBcIjogXCJBXCIsXG4gIFwiyIFcIjogXCJhXCIsXG4gIFwiyIRcIjogXCJFXCIsXG4gIFwiyIVcIjogXCJlXCIsXG4gIFwiyIhcIjogXCJJXCIsXG4gIFwiyIlcIjogXCJpXCIsXG4gIFwiyIxcIjogXCJPXCIsXG4gIFwiyI1cIjogXCJvXCIsXG4gIFwiyJBcIjogXCJSXCIsXG4gIFwiyJFcIjogXCJyXCIsXG4gIFwiyJRcIjogXCJVXCIsXG4gIFwiyJVcIjogXCJ1XCIsXG4gIFwiQsyMXCI6IFwiQlwiLFxuICBcImLMjFwiOiBcImJcIixcbiAgXCLEjMyjXCI6IFwiQ1wiLFxuICBcIsSNzKNcIjogXCJjXCIsXG4gIFwiw4rMjFwiOiBcIkVcIixcbiAgXCLDqsyMXCI6IFwiZVwiLFxuICBcIkbMjFwiOiBcIkZcIixcbiAgXCJmzIxcIjogXCJmXCIsXG4gIFwix6ZcIjogXCJHXCIsXG4gIFwix6dcIjogXCJnXCIsXG4gIFwiyJ5cIjogXCJIXCIsXG4gIFwiyJ9cIjogXCJoXCIsXG4gIFwiSsyMXCI6IFwiSlwiLFxuICBcIsewXCI6IFwialwiLFxuICBcIseoXCI6IFwiS1wiLFxuICBcIsepXCI6IFwia1wiLFxuICBcIk3MjFwiOiBcIk1cIixcbiAgXCJtzIxcIjogXCJtXCIsXG4gIFwiUMyMXCI6IFwiUFwiLFxuICBcInDMjFwiOiBcInBcIixcbiAgXCJRzIxcIjogXCJRXCIsXG4gIFwiccyMXCI6IFwicVwiLFxuICBcIsWYzKlcIjogXCJSXCIsXG4gIFwixZnMqVwiOiBcInJcIixcbiAgXCLhuaZcIjogXCJTXCIsXG4gIFwi4bmnXCI6IFwic1wiLFxuICBcIlbMjFwiOiBcIlZcIixcbiAgXCJ2zIxcIjogXCJ2XCIsXG4gIFwiV8yMXCI6IFwiV1wiLFxuICBcInfMjFwiOiBcIndcIixcbiAgXCJYzIxcIjogXCJYXCIsXG4gIFwieMyMXCI6IFwieFwiLFxuICBcIlnMjFwiOiBcIllcIixcbiAgXCJ5zIxcIjogXCJ5XCIsXG4gIFwiQcynXCI6IFwiQVwiLFxuICBcImHMp1wiOiBcImFcIixcbiAgXCJCzKdcIjogXCJCXCIsXG4gIFwiYsynXCI6IFwiYlwiLFxuICBcIuG4kFwiOiBcIkRcIixcbiAgXCLhuJFcIjogXCJkXCIsXG4gIFwiyKhcIjogXCJFXCIsXG4gIFwiyKlcIjogXCJlXCIsXG4gIFwixpDMp1wiOiBcIkVcIixcbiAgXCLJm8ynXCI6IFwiZVwiLFxuICBcIuG4qFwiOiBcIkhcIixcbiAgXCLhuKlcIjogXCJoXCIsXG4gIFwiScynXCI6IFwiSVwiLFxuICBcImnMp1wiOiBcImlcIixcbiAgXCLGl8ynXCI6IFwiSVwiLFxuICBcIsmozKdcIjogXCJpXCIsXG4gIFwiTcynXCI6IFwiTVwiLFxuICBcIm3Mp1wiOiBcIm1cIixcbiAgXCJPzKdcIjogXCJPXCIsXG4gIFwib8ynXCI6IFwib1wiLFxuICBcIlHMp1wiOiBcIlFcIixcbiAgXCJxzKdcIjogXCJxXCIsXG4gIFwiVcynXCI6IFwiVVwiLFxuICBcInXMp1wiOiBcInVcIixcbiAgXCJYzKdcIjogXCJYXCIsXG4gIFwieMynXCI6IFwieFwiLFxuICBcIlrMp1wiOiBcIlpcIixcbiAgXCJ6zKdcIjogXCJ6XCJcbn07XG52YXIgY2hhcnMgPSBPYmplY3Qua2V5cyhjaGFyYWN0ZXJNYXApLmpvaW4oJ3wnKTtcbnZhciBhbGxBY2NlbnRzID0gbmV3IFJlZ0V4cChjaGFycywgJ2cnKTtcbnZhciBmaXJzdEFjY2VudCA9IG5ldyBSZWdFeHAoY2hhcnMsICcnKTtcblxudmFyIHJlbW92ZUFjY2VudHMgPSBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYWxsQWNjZW50cywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlck1hcFttYXRjaF07XG4gIH0pO1xufTtcblxudmFyIGhhc0FjY2VudHMgPSBmdW5jdGlvbiBoYXNBY2NlbnRzKHN0cmluZykge1xuICByZXR1cm4gISFzdHJpbmcubWF0Y2goZmlyc3RBY2NlbnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVBY2NlbnRzO1xubW9kdWxlLmV4cG9ydHMuaGFzID0gaGFzQWNjZW50cztcbm1vZHVsZS5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZUFjY2VudHM7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0ZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==