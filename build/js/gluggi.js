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
/* harmony import */ var mojave_mount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mojave/mount */ "./node_modules/mojave/mount/index.js");
/* harmony import */ var _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gluggi/full-screen */ "./assets/js/gluggi/full-screen.ts");
/* harmony import */ var _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gluggi/sidebar */ "./assets/js/gluggi/sidebar.ts");
/* harmony import */ var _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gluggi/SidebarContent */ "./assets/js/gluggi/SidebarContent.tsx");
/* harmony import */ var _gluggi_usages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gluggi/usages */ "./assets/js/gluggi/usages.ts");






let contentView = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-content-view");
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_1__["mount"])(".gluggi-sidebar", _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_3__["initSidebarVisibilityToggle"]);
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_1__["mount"])(".gluggi-sidebar-content-data", _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_4__["SidebarContent"], {
  type: "jsx"
});
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_1__["mount"])(".gluggi-action-usages", _gluggi_usages__WEBPACK_IMPORTED_MODULE_5__["initUsagesToggle"]);

if (null !== contentView) {
  Object(mojave_mount__WEBPACK_IMPORTED_MODULE_1__["mount"])(".gluggi-toggle-fullscreen", _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_2__["initToggleFullScreen"], {
    params: [contentView]
  });
}

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







function renderComponent(component) {
  let showFullName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link ".concat(component.active ? " gluggi-active" : ""),
    href: component.url
  }, component.active && icon(_icon_active_svg__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, showFullName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " ".concat(component.name), "page" === component.type ? icon(_icon_external_svg__WEBPACK_IMPORTED_MODULE_4__["default"]) : "")));
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
  }, props.type.components.map(component => renderComponent(component, !!props.showFullName))) : Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-component-empty"
  }, props.emptyText));
}

function SidebarContent(props) {
  let content = [Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-empty"
  }, "There are no components.")];

  if (props.types.length) {
    let [query, setQuery] = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
    let search = null;

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
      onInput: e => setQuery(e.currentTarget.value)
    }), icon(_icon_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "gluggi-components"
    }, search ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
      type: search,
      showFullName: true,
      emptyText: "No matches"
    }) : props.types.map(type => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
      type: type
    })))];
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", {
    class: "gluggi-title"
  }, props.title), content);
}

function flattenTypes(types) {
  let flattened = [];
  types.forEach(type => type.components.forEach(c => flattened.push(c)));
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
  let fullscreen = false;
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(button, "click", () => {
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
  let close = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-close",
    html: _icon_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
  let open = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-open",
    html: _icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(sidebar, close);
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(sidebar.parentElement, open);
  let visible = true;
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(close, "click", () => {
    sidebar.classList.add("is-hidden");
    open.classList.add("is-visible");
    visible = false;
  });
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(open, "click", () => {
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
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])("button.gluggi-action", element), "click", () => {
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
  if (typeof key === 'object') {
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

const SPECIAL_ATTRIBUTE_SETTERS = /^(html|text|css)$/;
function setAttrs(element, attributes) {
  for (const key in attributes) {
    if (!Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(attributes, key)) {
      continue;
    }

    const value = attributes[key];

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

const CUSTOM_PROPERTY_REGEX = /^--/;
const DEFAULT_STYLES = document.createElement("div").style;
const VENDOR_PREFIXES = ["-webkit-", "-moz-", "-o-", "-ms-"];
const propertyNameCache = {};
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
const DIRECTLY_ACCESSIBLE_SETTERS = /scroll(Top|Left)/i;
const HAS_PIXELS_UNIT = /px$/;

function normalizeProperty(property) {
  if (propertyNameCache[property]) {
    return propertyNameCache[property];
  }

  if (property in DEFAULT_STYLES) {
    return property;
  }

  for (let i = 0; i < VENDOR_PREFIXES.length; i++) {
    const prefixedName = "".concat(VENDOR_PREFIXES[i]).concat(property);

    if (prefixedName in DEFAULT_STYLES) {
      propertyNameCache[property] = prefixedName;
      return prefixedName;
    }
  }

  propertyNameCache[property] = property;
  return property;
}

function setStyles(elements, styles) {
  let styledElements = Array.isArray(elements) ? elements : [elements];

  for (let i = 0; i < styledElements.length; i++) {
    let element = styledElements[i];
    let style = element.style;

    for (let property in styles) {
      if (!Object(_runtime__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"])(styles, property)) {
        continue;
      }

      let value = styles[property];

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
  let pseudoElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let view = null !== element.ownerDocument && element.ownerDocument.defaultView;

  if (!view || !view.opener) {
    view = window;
  }

  return view.getComputedStyle(element, pseudoElement);
}

function getStyle(element, property) {
  let pseudoElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let castedElement = element;

  if (DIRECTLY_ACCESSIBLE_SETTERS.test(property)) {
    return castedElement[property];
  }

  if (!CUSTOM_PROPERTY_REGEX.test(property)) {
    property = normalizeProperty(property);
  }

  const styles = getComputedStyles(castedElement, pseudoElement);
  const value = styles.getPropertyValue(property) || styles[property];

  if ("opacity" === property) {
    return value === "" ? "1" : value;
  }

  if (value !== undefined && !IS_NON_DIMENSIONAL.test(property) && HAS_PIXELS_UNIT.test(value)) {
    return parseInt(value.replace(HAS_PIXELS_UNIT, ""), 10);
  }

  return value;
}

function updateDisplay(element, style) {
  const list = Array.isArray(element) ? element : [element];

  for (let i = 0; i < list.length; i++) {
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
  const rect = element.getBoundingClientRect();
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

const listenerRegistry = new WeakMap();
function on(element, type, handler) {
  const list = Array.isArray(element) ? element : [element];
  const types = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitStringValue"])(type);

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < types.length; j++) {
      const node = list[i];

      if (null === node) {
        continue;
      }

      const eventType = types[j];
      node.addEventListener(eventType, handler);
      let listeners = listenerRegistry.get(node);

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
  const list = Array.isArray(element) ? element : [element];
  const types = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["splitStringValue"])(type);

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < types.length; j++) {
      const node = list[i];

      if (null === node) {
        continue;
      }

      const eventType = types[j];
      node.removeEventListener(eventType, handler);
      const listeners = listenerRegistry.get(node);

      if (listeners !== undefined && listeners[eventType] !== undefined) {
        const index = listeners[eventType].indexOf(handler);

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

  const intermediate = event => {
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

  const intermediate = event => {
    const matchedDelegatedTarget = findDelegatedTarget(element, event.target, selector);

    if (null !== matchedDelegatedTarget) {
      handler(event, matchedDelegatedTarget);
    }
  };

  on(element, type, intermediate);
  return intermediate;
}

function findDelegatedTarget(delegateElement, currentTarget, selector) {
  let node = currentTarget;

  while (null !== node && node !== delegateElement) {
    if (node.matches(selector)) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}

function trigger(element, type) {
  let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (null === element) {
    return;
  }

  const event = createEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: data
  });
  element.dispatchEvent(event);
}

function createEvent(type, args) {
  if (typeof CustomEvent !== "function") {
    const event = document.createEvent('CustomEvent');
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
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const children = doc.body.children;

  if (children.length !== 1) {
    throw new Error("Can only parse HTML with exactly one valid root element. A valid element can stand on its own in the body.");
  }

  return children[0];
}

function createElement(type) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = createUnstyledElement(type, attributes);

  if (attributes.css !== undefined) {
    Object(_css__WEBPACK_IMPORTED_MODULE_2__["setStyles"])(element, attributes.css);
  }

  return element;
}
function createUnstyledElement(type) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = -1 !== type.indexOf("<") ? parseHtml(type) : document.createElement(type);
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

  const list = Array.isArray(element) ? element : [element];

  for (let i = 0; i < list.length; i++) {
    let parentNode = list[i].parentNode;

    if (null !== parentNode) {
      parentNode.removeChild(list[i]);
    }
  }
}
function empty(element) {
  const list = Array.isArray(element) ? element : [element];

  for (let i = 0; i < list.length; i++) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(list[i])) {
      list[i].innerHTML = "";
    }
  }
}
function replace(element, replacement) {
  let parentNode = element.parentNode;

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

  const list = Array.isArray(insert) ? insert : [insert];

  for (let i = 0; i < list.length; i++) {
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
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return null === selector || element.matches(selector);
}

function fetchAllSiblings(element, selector, accessor) {
  let indexableElement = element;
  let sibling = indexableElement[accessor];
  const list = [];

  while (sibling) {
    if (elementMatches(sibling, selector)) {
      list.push(sibling);
    }

    sibling = sibling[accessor];
  }

  return list;
}

function fetchSingleSibling(element, selector, accessor) {
  let indexableElement = element;
  let sibling = indexableElement[accessor];

  while (sibling) {
    if (elementMatches(sibling, selector)) {
      return sibling;
    }

    sibling = sibling[accessor];
  }

  return null;
}

function find(selector) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.prototype.slice.call(context.querySelectorAll(selector));
}
function findOne(selector) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.querySelector(selector);
}
function filter(list, selector) {
  return list.filter(e => e.matches(selector));
}
function not(list, selector) {
  if (typeof selector === "string") {
    return list.filter(e => !e.matches(selector));
  } else if (Array.isArray(selector)) {
    return list.filter(e => -1 !== selector.indexOf(e));
  }

  return list.filter(e => e !== selector);
}
function children(parent) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const list = [];
  let child = parent.firstElementChild;

  while (child) {
    if (elementMatches(child, selector)) {
      list.push(child);
    }

    child = child.nextElementSibling;
  }

  return list;
}
function firstChild(parent) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let child = parent.firstElementChild;

  while (child) {
    if (elementMatches(child, selector)) {
      return child;
    }

    child = child.nextElementSibling;
  }

  return null;
}
function prev(element) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchSingleSibling(element, selector, "previousElementSibling");
}
function next(element) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchSingleSibling(element, selector, "nextElementSibling");
}
function prevAll(element) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchAllSiblings(element, selector, "previousElementSibling");
}
function nextAll(element) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return fetchAllSiblings(element, selector, "nextElementSibling");
}
function siblings(element) {
  let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const list = [];
  let sibling = null;

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
  let rootElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let parent = element.parentElement;

  while (null !== parent && rootElement !== parent) {
    if (parent.matches(selector)) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return null;
}
function isChildElement(parent, node) {
  let pointer = node;

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
    let result = target;

    for (let i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
      result = merge(result, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
    }

    return result;
  }

  const source = arguments.length <= 1 ? undefined : arguments[1];
  const sourceType = Object(_types__WEBPACK_IMPORTED_MODULE_1__["typeOf"])(source);
  const targetType = Object(_types__WEBPACK_IMPORTED_MODULE_1__["typeOf"])(target);

  if (sourceType === targetType || "null" === sourceType || "null" === targetType) {
    if ("array" === targetType) {
      return target.concat(source);
    }

    if ("object" === targetType) {
      for (const key in source) {
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
  let target = {};

  for (let i = 0; i < arguments.length; i++) {
    let source = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (const key in source) {
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
      const content = value.trim();
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




function mount(selector, mountable, options) {
  doMount(Object(_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])(selector), mountable, options);
}
function mountLazy(selector, importer, options) {
  let elements = Object(_dom_traverse__WEBPACK_IMPORTED_MODULE_1__["find"])(selector);

  if (!elements.length) {
    return;
  }

  importer().then(module => doMount(elements, module.default, options), error => console.error("Mounting of component of path '".concat(selector, "' failed: ").concat(error.message), error));
}

function doMount(elements, mountable, rawOptions) {
  let mountableAny = mountable;
  let options = Object(_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])({
    type: "func"
  }, rawOptions || {});
  elements.forEach(node => {
    if ("jsx" === options.type) {
      let opts = options;
      let parent = node.parentElement;
      let params = opts.params || {};

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
      let standaloneOptions = options;
      const mounted = new mountableAny(node, ...(standaloneOptions.params || []));
      mounted.init();
    } else {
      let standaloneOptions = options;
      mountable(node, ...(standaloneOptions.params || []));
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
  const elementPrototype = Element.prototype;
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
  const match = /^\[object (.*?)]$/.exec(Object.prototype.toString.call(value));
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
  for (var u in l) n[u] = l[u];

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
  if (l = e({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(o[t]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
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

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? d(n) : null;
}

function m(n) {
  var l, u;

  if (null != (n = n.__p) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
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
  }); n = l.pop();) n.__d && n.forceUpdate(!1);
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

  for (s == r && (s = null != o ? o[0] : P ? d(u, 0) : null), v = 0; v < x.length; v++) if (null != (h = x[v] = p(x[v]))) {
    if (h.__p = l, h.__b = l.__b + 1, null === (m = C[v]) || m && h.key == m.key && h.type === m.type) C[v] = void 0;else for (y = 0; y < P; y++) {
      if ((m = C[y]) && h.key == m.key && h.type === m.type) {
        C[y] = void 0;
        break;
      }

      m = null;
    }

    if (w = N(n, h, m = m || r, t, i, o, e, null, s, a), (y = h.ref) && m.ref != y && (b || (b = [])).push(y, h.__c || w, h), null != w) {
      if (null == k && (k = w), null != h.l) w = h.l, h.l = null;else if (o == m || w != s || null == w.parentNode) n: if (null == s || s.parentNode !== n) n.appendChild(w);else {
        for (g = s, y = 0; (g = g.nextSibling) && y < P; y += 2) if (g == w) break n;

        n.insertBefore(w, s);
      }
      s = w.nextSibling, "function" == typeof l.type && (l.l = w);
    }
  }

  if (l.__e = k, null != o && "function" != typeof l.type) for (v = o.length; v--;) null != o[v] && c(o[v]);

  for (v = P; v--;) null != C[v] && z(C[v], C[v]);

  if (b) for (v = 0; v < b.length; v++) j(b[v], b[++v], b[++v]);
}

function _(n, l, u, t) {
  if (null == l && (l = []), null == n || "boolean" == typeof n) t && l.push(null);else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) _(n[i], l, u, t);else l.push(u ? u(n) : n);
  return l;
}

function b(n, l, u, t, i) {
  var r;

  for (r in u) r in l || C(n, r, null, u[r], t);

  for (r in l) i && "function" != typeof l[r] || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], t);
}

function x(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === o.test(l) ? u + "px" : u;
}

function C(n, l, u, t, i) {
  var r, f, o, e, c;
  if ("key" === (l = i ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ;else if ("style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof t && (r.cssText = "", t = null), t) for (f in t) u && f in u || x(r, f, "");
      if (u) for (o in u) t && u[o] === t[o] || x(r, o, u[o]);
    }
  } else if ("o" === l[0] && "n" === l[1]) e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, P, e), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, P, e);else if ("list" !== l && "tagName" !== l && !i && l in n) {
    if (n.length && "value" == l) for (l = n.length; l--;) n.options[l].selected = n.options[l].value == u;else n[l] = null == u ? "" : u;
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

      for (w = d.props, g = d.state, d.context = N, d.props = C, d.state = d.__s, (h = n.__r) && h(u), d.__d = !1, d.__v = u, d.__P = l, _(null != (h = d.render(d.props, d.state, d.context)) && h.type == v && null == h.key ? h.props.children : h, u.__k = [], p, !0), null != d.getChildContext && (i = e(e({}, i), d.getChildContext())), m || null == d.getSnapshotBeforeUpdate || (b = d.getSnapshotBeforeUpdate(w, g)), k(l, u, t, i, r, f, o, s, a), d.base = u.__e; h = d.__h.pop();) h.call(d);

      m || null == w || null == d.componentDidUpdate || d.componentDidUpdate(w, g, b), x && (d.__E = d.__p = null);
    } else u.__e = $(t.__e, u, t, i, r, f, o, a);

    (h = n.diffed) && h(u);
  } catch (l) {
    n.__e(l, u, t);
  }

  return u.__e;
}

function T(l, u) {
  for (var t; t = l.pop();) try {
    t.componentDidMount();
  } catch (l) {
    n.__e(l, t.__v);
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
  if (i = "svg" === l.type || i, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
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

  if (i = l.__k) for (f = 0; f < i.length; f++) i[f] && z(i[f], u, t);
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
  for (var t; l = l.__p;) if ((t = l.__c) && !t.__p) try {
    if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(n));else {
      if (null == t.componentDidCatch) continue;
      t.componentDidCatch(n);
    }
    return w(t.__E = t);
  } catch (l) {
    n = l;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1Z2dpLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2FjdGl2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2V4dGVybmFsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9tZW51LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9TaWRlYmFyQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9mdWxsLXNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL3NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS91c2FnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGNoLXNvcnRlci9kaXN0L21hdGNoLXNvcnRlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL21hbmlwdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vdHJhdmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvbW91bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9wb2x5ZmlsbC9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFjY2VudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9nbHVnZ2kudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiMTBcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMyAxMFxcXCI+XFxuICA8cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk03LjY1OSAwbC0uODI4LjkgMy43MzIgMy40OTNIMHYxLjIxOGgxMC41NjVMNi44MzEgOS4xMDVsLjgyOC45IDUuMzQxLTV6XFxcIi8+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTQuODI5XFxcIiBoZWlnaHQ9XFxcIjE0LjgyOFxcXCIgdmlld0JveD1cXFwiMCAwIDE0LjgyOSAxNC44MjhcXFwiPlxcbiAgPGcgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIj5cXG4gICAgPHBhdGggZD1cXFwiTTEzLjQxNCAxLjQxNGwtMTIgMTJcXFwiLz5cXG4gICAgPHBhdGggZD1cXFwiTTEuNDE0IDEuNDE0bDEyIDEyXFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTYuMjY0XFxcIiBoZWlnaHQ9XFxcIjE2LjI2M1xcXCIgdmlld0JveD1cXFwiMCAwIDE2LjI2NCAxNi4yNjNcXFwiPlxcbiAgPHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNNS40MTYgMy43NzZsLjA1MSAxLjIyMiA1LjExLS4xNjktNy40NyA3LjQ3Ljg2MS44NiA3LjQ3LTcuNDctLjE2OSA1LjExIDEuMjIyLjA1Mi4yNDEtNy4zMTJ6XFxcIi8+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAxNFxcXCI+XFxuICA8ZyBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPlxcbiAgICA8cGF0aCBkPVxcXCJNMSA3aDE4TTEgMWgxOE0xIDEzaDE4XFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTMuODExXFxcIiBoZWlnaHQ9XFxcIjEzLjgxMVxcXCIgdmlld0JveD1cXFwiMCAwIDEzLjgxMSAxMy44MTFcXFwiPlxcbiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTIuMjUgLTIuMjUpXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUuNDcyXFxcIiBjeT1cXFwiNS40NzJcXFwiIHI9XFxcIjUuNDcyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzIDMpXFxcIi8+XFxuICAgIDxwYXRoIGQ9XFxcIk0xNSAxNWwtMi4yOTYtMi4yOTZcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImltcG9ydCB7IGZpbmRPbmUgfSBmcm9tIFwibW9qYXZlL2RvbS90cmF2ZXJzZVwiO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwibW9qYXZlL21vdW50XCI7XG5pbXBvcnQgeyBpbml0VG9nZ2xlRnVsbFNjcmVlbiB9IGZyb20gXCIuL2dsdWdnaS9mdWxsLXNjcmVlblwiO1xuaW1wb3J0IHsgaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlIH0gZnJvbSBcIi4vZ2x1Z2dpL3NpZGViYXJcIjtcbmltcG9ydCB7IFNpZGViYXJDb250ZW50IH0gZnJvbSBcIi4vZ2x1Z2dpL1NpZGViYXJDb250ZW50XCI7XG5pbXBvcnQgeyBpbml0VXNhZ2VzVG9nZ2xlIH0gZnJvbSBcIi4vZ2x1Z2dpL3VzYWdlc1wiO1xubGV0IGNvbnRlbnRWaWV3ID0gZmluZE9uZShcIi5nbHVnZ2ktY29udGVudC12aWV3XCIpO1xubW91bnQoXCIuZ2x1Z2dpLXNpZGViYXJcIiwgaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlKTtcbm1vdW50KFwiLmdsdWdnaS1zaWRlYmFyLWNvbnRlbnQtZGF0YVwiLCBTaWRlYmFyQ29udGVudCwge1xuICB0eXBlOiBcImpzeFwiXG59KTtcbm1vdW50KFwiLmdsdWdnaS1hY3Rpb24tdXNhZ2VzXCIsIGluaXRVc2FnZXNUb2dnbGUpO1xuXG5pZiAobnVsbCAhPT0gY29udGVudFZpZXcpIHtcbiAgbW91bnQoXCIuZ2x1Z2dpLXRvZ2dsZS1mdWxsc2NyZWVuXCIsIGluaXRUb2dnbGVGdWxsU2NyZWVuLCB7XG4gICAgcGFyYW1zOiBbY29udGVudFZpZXddXG4gIH0pO1xufSIsImltcG9ydCB7IGgsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgYXJyb3dJY29uIGZyb20gXCIuLi8uLi9pY29uL2FjdGl2ZS5zdmdcIjtcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gXCIuLi8uLi9pY29uL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBleHRlcm5hbEljb24gZnJvbSBcIi4uLy4uL2ljb24vZXh0ZXJuYWwuc3ZnXCI7XG5pbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJztcblxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBsZXQgc2hvd0Z1bGxOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgcmV0dXJuIGgoXCJsaVwiLCBudWxsLCBoKFwiYVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1saW5rIFwiLmNvbmNhdChjb21wb25lbnQuYWN0aXZlID8gXCIgZ2x1Z2dpLWFjdGl2ZVwiIDogXCJcIiksXG4gICAgaHJlZjogY29tcG9uZW50LnVybFxuICB9LCBjb21wb25lbnQuYWN0aXZlICYmIGljb24oYXJyb3dJY29uKSwgaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbmFtZVwiXG4gIH0sIHNob3dGdWxsTmFtZSAmJiBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC10eXBlXCJcbiAgfSwgY29tcG9uZW50LnR5cGUpLCBcIiBcIi5jb25jYXQoY29tcG9uZW50Lm5hbWUpLCBcInBhZ2VcIiA9PT0gY29tcG9uZW50LnR5cGUgPyBpY29uKGV4dGVybmFsSWNvbikgOiBcIlwiKSkpO1xufVxuXG5mdW5jdGlvbiBpY29uKGljb25TdmcpIHtcbiAgcmV0dXJuIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktaWNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6IGljb25TdmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBHbHVnZ2lUeXBlKHByb3BzKSB7XG4gIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50XCJcbiAgfSwgaChcImgyXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LXRpdGxlXCJcbiAgfSwgcHJvcHMudHlwZS50aXRsZSksIHByb3BzLnR5cGUuY29tcG9uZW50cy5sZW5ndGggPiAwID8gaChcInVsXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LWxpc3RcIlxuICB9LCBwcm9wcy50eXBlLmNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAhIXByb3BzLnNob3dGdWxsTmFtZSkpKSA6IGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtZW1wdHlcIlxuICB9LCBwcm9wcy5lbXB0eVRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJDb250ZW50KHByb3BzKSB7XG4gIGxldCBjb250ZW50ID0gW2goXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1lbXB0eVwiXG4gIH0sIFwiVGhlcmUgYXJlIG5vIGNvbXBvbmVudHMuXCIpXTtcblxuICBpZiAocHJvcHMudHlwZXMubGVuZ3RoKSB7XG4gICAgbGV0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IHNlYXJjaCA9IG51bGw7XG5cbiAgICBpZiAoXCJcIiAhPT0gcXVlcnkudHJpbSgpKSB7XG4gICAgICBzZWFyY2ggPSB7XG4gICAgICAgIHRpdGxlOiBcIlNlYXJjaCByZXN1bHRzXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IG1hdGNoU29ydGVyKGZsYXR0ZW5UeXBlcyhwcm9wcy50eXBlcyksIHF1ZXJ5LnRyaW0oKSwge1xuICAgICAgICAgIGtleXM6IFtcIm5hbWVcIl1cbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29udGVudCA9IFtoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1zZWFyY2hcIlxuICAgIH0sIGgoXCJsYWJlbFwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktc2VhcmNoLXdpZGdldFwiXG4gICAgfSwgaChcImlucHV0XCIsIHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgaWQ6IFwiY29tcG9uZW50LWZpbHRlclwiLFxuICAgICAgdmFsdWU6IHF1ZXJ5LFxuICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICBvbklucHV0OiBlID0+IHNldFF1ZXJ5KGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICB9KSwgaWNvbihzZWFyY2hJY29uKSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnRzXCJcbiAgICB9LCBzZWFyY2ggPyBoKEdsdWdnaVR5cGUsIHtcbiAgICAgIHR5cGU6IHNlYXJjaCxcbiAgICAgIHNob3dGdWxsTmFtZTogdHJ1ZSxcbiAgICAgIGVtcHR5VGV4dDogXCJObyBtYXRjaGVzXCJcbiAgICB9KSA6IHByb3BzLnR5cGVzLm1hcCh0eXBlID0+IGgoR2x1Z2dpVHlwZSwge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0pKSldO1xuICB9XG5cbiAgcmV0dXJuIGgoRnJhZ21lbnQsIG51bGwsIGgoXCJoMVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXRpdGxlXCJcbiAgfSwgcHJvcHMudGl0bGUpLCBjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblR5cGVzKHR5cGVzKSB7XG4gIGxldCBmbGF0dGVuZWQgPSBbXTtcbiAgdHlwZXMuZm9yRWFjaCh0eXBlID0+IHR5cGUuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gZmxhdHRlbmVkLnB1c2goYykpKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn0iLCJpbXBvcnQgeyBvbiB9IGZyb20gXCJtb2phdmUvZG9tL2V2ZW50c1wiO1xuaW1wb3J0IHsgdG9nZ2xlQ2xhc3MgfSBmcm9tIFwibW9qYXZlL2RvbS9tYW5pcHVsYXRlXCI7XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRvZ2dsZUZ1bGxTY3JlZW4oYnV0dG9uLCBjb250ZW50Vmlldykge1xuICBsZXQgZnVsbHNjcmVlbiA9IGZhbHNlO1xuICBvbihidXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZ1bGxzY3JlZW4gPSAhZnVsbHNjcmVlbjtcbiAgICB0b2dnbGVDbGFzcyhjb250ZW50VmlldywgXCJpcy1mdWxsc2NyZWVuXCIsIGZ1bGxzY3JlZW4pO1xuICAgIHRvZ2dsZUNsYXNzKGJ1dHRvbiwgXCJnbHVnZ2ktaXMtYWN0aXZlXCIsIGZ1bGxzY3JlZW4pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBvbiB9IGZyb20gXCJtb2phdmUvZG9tL2V2ZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlVW5zdHlsZWRFbGVtZW50LCBwcmVwZW5kIH0gZnJvbSBcIm1vamF2ZS9kb20vbWFuaXB1bGF0ZVwiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9jbG9zZS5zdmdcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9tZW51LnN2Z1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZShzaWRlYmFyKSB7XG4gIGxldCBjbG9zZSA9IGNyZWF0ZVVuc3R5bGVkRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXNpZGViYXItY2xvc2VcIixcbiAgICBodG1sOiBjbG9zZUljb25cbiAgfSk7XG4gIGxldCBvcGVuID0gY3JlYXRlVW5zdHlsZWRFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktc2lkZWJhci1vcGVuXCIsXG4gICAgaHRtbDogbWVudUljb25cbiAgfSk7XG4gIHByZXBlbmQoc2lkZWJhciwgY2xvc2UpO1xuICBwcmVwZW5kKHNpZGViYXIucGFyZW50RWxlbWVudCwgb3Blbik7XG4gIGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgb24oY2xvc2UsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICBvcGVuLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgIHZpc2libGUgPSBmYWxzZTtcbiAgfSk7XG4gIG9uKG9wZW4sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICBvcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xuICAgIHZpc2libGUgPSB0cnVlO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBvbiB9IGZyb20gXCJtb2phdmUvZG9tL2V2ZW50c1wiO1xuaW1wb3J0IHsgZmluZCB9IGZyb20gXCJtb2phdmUvZG9tL3RyYXZlcnNlXCI7XG5leHBvcnQgZnVuY3Rpb24gaW5pdFVzYWdlc1RvZ2dsZShlbGVtZW50KSB7XG4gIG9uKGZpbmQoXCJidXR0b24uZ2x1Z2dpLWFjdGlvblwiLCBlbGVtZW50KSwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcmVtb3ZlQWNjZW50cyBmcm9tICdyZW1vdmUtYWNjZW50cyc7XG52YXIgcmFua2luZ3MgPSB7XG4gIENBU0VfU0VOU0lUSVZFX0VRVUFMOiA5LFxuICBFUVVBTDogOCxcbiAgU1RBUlRTX1dJVEg6IDcsXG4gIFdPUkRfU1RBUlRTX1dJVEg6IDYsXG4gIFNUUklOR19DQVNFOiA1LFxuICBTVFJJTkdfQ0FTRV9BQ1JPTllNOiA0LFxuICBDT05UQUlOUzogMyxcbiAgQUNST05ZTTogMixcbiAgTUFUQ0hFUzogMSxcbiAgTk9fTUFUQ0g6IDBcbn07XG52YXIgY2FzZVJhbmtpbmdzID0ge1xuICBDQU1FTDogMC44LFxuICBQQVNDQUw6IDAuNixcbiAgS0VCQUI6IDAuNCxcbiAgU05BS0U6IDAuMixcbiAgTk9fQ0FTRTogMFxufTtcbm1hdGNoU29ydGVyLnJhbmtpbmdzID0gcmFua2luZ3M7XG5tYXRjaFNvcnRlci5jYXNlUmFua2luZ3MgPSBjYXNlUmFua2luZ3M7XG4vKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIGl0ZW1zIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byBzb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gdXNlIGZvciByYW5raW5nXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNvbWUgb3B0aW9ucyB0byBjb25maWd1cmUgdGhlIHNvcnRlclxuICogQHJldHVybiB7QXJyYXl9IC0gdGhlIG5ldyBzb3J0ZWQgYXJyYXlcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFNvcnRlcihpdGVtcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBub3QgcGVyZm9ybWluZyBhbnkgc2VhcmNoL3NvcnQgaWYgdmFsdWUoc2VhcmNoIHRlcm0pIGlzIGVtcHR5XG5cblxuICBpZiAoIXZhbHVlKSByZXR1cm4gaXRlbXM7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBrZXlzID0gX29wdGlvbnMua2V5cyxcbiAgICAgIF9vcHRpb25zJHRocmVzaG9sZCA9IF9vcHRpb25zLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9vcHRpb25zJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gcmFua2luZ3MuTUFUQ0hFUyA6IF9vcHRpb25zJHRocmVzaG9sZDtcbiAgdmFyIG1hdGNoZWRJdGVtcyA9IGl0ZW1zLnJlZHVjZShyZWR1Y2VJdGVtc1RvUmFua2VkLCBbXSk7XG4gIHJldHVybiBtYXRjaGVkSXRlbXMuc29ydChzb3J0UmFua2VkSXRlbXMpLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBpdGVtID0gX3JlZi5pdGVtO1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcblxuICBmdW5jdGlvbiByZWR1Y2VJdGVtc1RvUmFua2VkKG1hdGNoZXMsIGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIF9nZXRIaWdoZXN0UmFua2luZyA9IGdldEhpZ2hlc3RSYW5raW5nKGl0ZW0sIGtleXMsIHZhbHVlLCBvcHRpb25zKSxcbiAgICAgICAgcmFua2VkSXRlbSA9IF9nZXRIaWdoZXN0UmFua2luZy5yYW5rZWRJdGVtLFxuICAgICAgICByYW5rID0gX2dldEhpZ2hlc3RSYW5raW5nLnJhbmssXG4gICAgICAgIGtleUluZGV4ID0gX2dldEhpZ2hlc3RSYW5raW5nLmtleUluZGV4LFxuICAgICAgICBfZ2V0SGlnaGVzdFJhbmtpbmcka2UgPSBfZ2V0SGlnaGVzdFJhbmtpbmcua2V5VGhyZXNob2xkLFxuICAgICAgICBrZXlUaHJlc2hvbGQgPSBfZ2V0SGlnaGVzdFJhbmtpbmcka2UgPT09IHZvaWQgMCA/IHRocmVzaG9sZCA6IF9nZXRIaWdoZXN0UmFua2luZyRrZTtcblxuICAgIGlmIChyYW5rID49IGtleVRocmVzaG9sZCkge1xuICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgcmFua2VkSXRlbTogcmFua2VkSXRlbSxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgcmFuazogcmFuayxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlJbmRleDoga2V5SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG59XG4vKipcbiAqIEdldHMgdGhlIGhpZ2hlc3QgcmFua2luZyBmb3IgdmFsdWUgZm9yIHRoZSBnaXZlbiBpdGVtIGJhc2VkIG9uIGl0cyB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBrZXlzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgaXRlbSB0byByYW5rXG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzIC0gdGhlIGtleXMgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBpdGVtIGZvciB0aGUgcmFua2luZ1xuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIHJhbmsgYWdhaW5zdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRvIGNvbnRyb2wgdGhlIHJhbmtpbmdcbiAqIEByZXR1cm4ge3tyYW5rOiBOdW1iZXIsIGtleUluZGV4OiBOdW1iZXIsIGtleVRocmVzaG9sZDogTnVtYmVyfX0gLSB0aGUgaGlnaGVzdCByYW5raW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRIaWdoZXN0UmFua2luZyhpdGVtLCBrZXlzLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIWtleXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gZW5kcyB1cCBiZWluZyBkdXBsaWNhdGUgb2YgJ2l0ZW0nIGluIG1hdGNoZXMgYnV0IGNvbnNpc3RlbnRcbiAgICAgIHJhbmtlZEl0ZW06IGl0ZW0sXG4gICAgICByYW5rOiBnZXRNYXRjaFJhbmtpbmcoaXRlbSwgdmFsdWUsIG9wdGlvbnMpLFxuICAgICAga2V5SW5kZXg6IC0xLFxuICAgICAga2V5VGhyZXNob2xkOiBvcHRpb25zLnRocmVzaG9sZFxuICAgIH07XG4gIH1cblxuICB2YXIgdmFsdWVzVG9SYW5rID0gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpO1xuICByZXR1cm4gdmFsdWVzVG9SYW5rLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIF9yZWYzLCBpKSB7XG4gICAgdmFyIHJhbmsgPSBfcmVmMi5yYW5rLFxuICAgICAgICBrZXlJbmRleCA9IF9yZWYyLmtleUluZGV4LFxuICAgICAgICBrZXlUaHJlc2hvbGQgPSBfcmVmMi5rZXlUaHJlc2hvbGQ7XG4gICAgdmFyIGl0ZW1WYWx1ZSA9IF9yZWYzLml0ZW1WYWx1ZSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXM7XG4gICAgdmFyIG5ld1JhbmsgPSBnZXRNYXRjaFJhbmtpbmcoaXRlbVZhbHVlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgdmFyIG1pblJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1pblJhbmtpbmcsXG4gICAgICAgIG1heFJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1heFJhbmtpbmcsXG4gICAgICAgIHRocmVzaG9sZCA9IGF0dHJpYnV0ZXMudGhyZXNob2xkO1xuXG4gICAgaWYgKG5ld1JhbmsgPCBtaW5SYW5raW5nICYmIG5ld1JhbmsgPj0gcmFua2luZ3MuTUFUQ0hFUykge1xuICAgICAgbmV3UmFuayA9IG1pblJhbmtpbmc7XG4gICAgfSBlbHNlIGlmIChuZXdSYW5rID4gbWF4UmFua2luZykge1xuICAgICAgbmV3UmFuayA9IG1heFJhbmtpbmc7XG4gICAgfVxuXG4gICAgaWYgKG5ld1JhbmsgPiByYW5rKSB7XG4gICAgICByYW5rID0gbmV3UmFuaztcbiAgICAgIGtleUluZGV4ID0gaTtcbiAgICAgIGtleVRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmFua2VkSXRlbTogaXRlbVZhbHVlLFxuICAgICAgcmFuazogcmFuayxcbiAgICAgIGtleUluZGV4OiBrZXlJbmRleCxcbiAgICAgIGtleVRocmVzaG9sZDoga2V5VGhyZXNob2xkXG4gICAgfTtcbiAgfSwge1xuICAgIHJhbms6IHJhbmtpbmdzLk5PX01BVENILFxuICAgIGtleUluZGV4OiAtMSxcbiAgICBrZXlUaHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkXG4gIH0pO1xufVxuLyoqXG4gKiBHaXZlcyBhIHJhbmtpbmdzIHNjb3JlIGJhc2VkIG9uIGhvdyB3ZWxsIHRoZSB0d28gc3RyaW5ncyBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBmb3IgdGhlIG1hdGNoIChsaWtlIGtlZXBEaWFjcml0aWNzIGZvciBjb21wYXJpc29uKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJhbmtpbmcgZm9yIGhvdyB3ZWxsIHN0cmluZ1RvUmFuayBtYXRjaGVzIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE1hdGNoUmFua2luZyh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIG9wdGlvbnMpIHtcbiAgLyogZXNsaW50IGNvbXBsZXhpdHk6WzIsIDEyXSAqL1xuICB0ZXN0U3RyaW5nID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbih0ZXN0U3RyaW5nLCBvcHRpb25zKTtcbiAgc3RyaW5nVG9SYW5rID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbihzdHJpbmdUb1JhbmssIG9wdGlvbnMpOyAvLyB0b28gbG9uZ1xuXG4gIGlmIChzdHJpbmdUb1JhbmsubGVuZ3RoID4gdGVzdFN0cmluZy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH0gLy8gY2FzZSBzZW5zaXRpdmUgZXF1YWxzXG5cblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkNBU0VfU0VOU0lUSVZFX0VRVUFMO1xuICB9XG5cbiAgdmFyIGNhc2VSYW5rID0gZ2V0Q2FzZVJhbmtpbmcodGVzdFN0cmluZyk7XG4gIHZhciBpc1BhcnRpYWwgPSBpc1BhcnRpYWxPZkNhc2UodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFuayk7XG4gIHZhciBpc0Nhc2VkQWNyb255bSA9IGlzQ2FzZUFjcm9ueW0odGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFuayk7IC8vIExvd2VyIGNhc2luZyBiZWZvcmUgZnVydGhlciBjb21wYXJpc29uXG5cbiAgdGVzdFN0cmluZyA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgc3RyaW5nVG9SYW5rID0gc3RyaW5nVG9SYW5rLnRvTG93ZXJDYXNlKCk7IC8vIGNhc2UgaW5zZW5zaXRpdmUgZXF1YWxzXG5cbiAgaWYgKHRlc3RTdHJpbmcgPT09IHN0cmluZ1RvUmFuaykge1xuICAgIHJldHVybiByYW5raW5ncy5FUVVBTCArIGNhc2VSYW5rO1xuICB9IC8vIHN0YXJ0cyB3aXRoXG5cblxuICBpZiAodGVzdFN0cmluZy5pbmRleE9mKHN0cmluZ1RvUmFuaykgPT09IDApIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RBUlRTX1dJVEggKyBjYXNlUmFuaztcbiAgfSAvLyB3b3JkIHN0YXJ0cyB3aXRoXG5cblxuICBpZiAodGVzdFN0cmluZy5pbmRleE9mKFwiIFwiICsgc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuV09SRF9TVEFSVFNfV0lUSCArIGNhc2VSYW5rO1xuICB9IC8vIGlzIGEgcGFydCBpbnNpZGUgYSBjYXNlZCBzdHJpbmdcblxuXG4gIGlmIChpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RSSU5HX0NBU0UgKyBjYXNlUmFuaztcbiAgfSAvLyBpcyBhY3JvbnltIGZvciBhIGNhc2VkIHN0cmluZ1xuXG5cbiAgaWYgKGNhc2VSYW5rID4gMCAmJiBpc0Nhc2VkQWNyb255bSkge1xuICAgIHJldHVybiByYW5raW5ncy5TVFJJTkdfQ0FTRV9BQ1JPTllNICsgY2FzZVJhbms7XG4gIH0gLy8gY29udGFpbnNcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQ09OVEFJTlMgKyBjYXNlUmFuaztcbiAgfSBlbHNlIGlmIChzdHJpbmdUb1JhbmsubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gSWYgdGhlIG9ubHkgY2hhcmFjdGVyIGluIHRoZSBnaXZlbiBzdHJpbmdUb1JhbmtcbiAgICAvLyAgIGlzbid0IGV2ZW4gY29udGFpbmVkIGluIHRoZSB0ZXN0U3RyaW5nLCB0aGVuXG4gICAgLy8gICBpdCdzIGRlZmluaXRlbHkgbm90IGEgbWF0Y2guXG4gICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICB9IC8vIGFjcm9ueW1cblxuXG4gIGlmIChnZXRBY3JvbnltKHRlc3RTdHJpbmcpLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQUNST05ZTSArIGNhc2VSYW5rO1xuICB9IC8vIHdpbGwgcmV0dXJuIGEgbnVtYmVyIGJldHdlZW4gcmFua2luZ3MuTUFUQ0hFUyBhbmRcbiAgLy8gcmFua2luZ3MuTUFUQ0hFUyArIDEgZGVwZW5kaW5nICBvbiBob3cgY2xvc2Ugb2YgYSBtYXRjaCBpdCBpcy5cblxuXG4gIHJldHVybiBnZXRDbG9zZW5lc3NSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuayk7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhY3JvbnltIGZvciBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgZm9yIHdoaWNoIHRvIHByb2R1Y2UgdGhlIGFjcm9ueW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBhY3JvbnltXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBY3JvbnltKHN0cmluZykge1xuICB2YXIgYWNyb255bSA9ICcnO1xuICB2YXIgd29yZHNJblN0cmluZyA9IHN0cmluZy5zcGxpdCgnICcpO1xuICB3b3Jkc0luU3RyaW5nLmZvckVhY2goZnVuY3Rpb24gKHdvcmRJblN0cmluZykge1xuICAgIHZhciBzcGxpdEJ5SHlwaGVuV29yZHMgPSB3b3JkSW5TdHJpbmcuc3BsaXQoJy0nKTtcbiAgICBzcGxpdEJ5SHlwaGVuV29yZHMuZm9yRWFjaChmdW5jdGlvbiAoc3BsaXRCeUh5cGhlbldvcmQpIHtcbiAgICAgIGFjcm9ueW0gKz0gc3BsaXRCeUh5cGhlbldvcmQuc3Vic3RyKDAsIDEpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGFjcm9ueW07XG59XG4vKipcbiAqIFJldHVybnMgYSBzY29yZSBiYXNlIG9uIHRoZSBjYXNlIG9mIHRoZSB0ZXN0U3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHRoZSByYW5raW5nLFxuICogYmFzZWQgb24gdGhlIGNhc2UgYmV0d2VlbiAwIGFuZCAxIGZvciBob3cgdGhlIHRlc3RTdHJpbmcgbWF0Y2hlcyB0aGUgY2FzZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2FzZVJhbmtpbmcodGVzdFN0cmluZykge1xuICB2YXIgY29udGFpbnNVcHBlckNhc2UgPSB0ZXN0U3RyaW5nLnRvTG93ZXJDYXNlKCkgIT09IHRlc3RTdHJpbmc7XG4gIHZhciBjb250YWluc0Rhc2ggPSB0ZXN0U3RyaW5nLmluZGV4T2YoJy0nKSA+PSAwO1xuICB2YXIgY29udGFpbnNVbmRlcnNjb3JlID0gdGVzdFN0cmluZy5pbmRleE9mKCdfJykgPj0gMDtcblxuICBpZiAoIWNvbnRhaW5zVXBwZXJDYXNlICYmICFjb250YWluc1VuZGVyc2NvcmUgJiYgY29udGFpbnNEYXNoKSB7XG4gICAgcmV0dXJuIGNhc2VSYW5raW5ncy5LRUJBQjtcbiAgfVxuXG4gIGlmICghY29udGFpbnNVcHBlckNhc2UgJiYgY29udGFpbnNVbmRlcnNjb3JlICYmICFjb250YWluc0Rhc2gpIHtcbiAgICByZXR1cm4gY2FzZVJhbmtpbmdzLlNOQUtFO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5zVXBwZXJDYXNlICYmICFjb250YWluc0Rhc2ggJiYgIWNvbnRhaW5zVW5kZXJzY29yZSkge1xuICAgIHZhciBzdGFydHNXaXRoVXBwZXJDYXNlID0gdGVzdFN0cmluZ1swXS50b1VwcGVyQ2FzZSgpID09PSB0ZXN0U3RyaW5nWzBdO1xuXG4gICAgaWYgKHN0YXJ0c1dpdGhVcHBlckNhc2UpIHtcbiAgICAgIHJldHVybiBjYXNlUmFua2luZ3MuUEFTQ0FMO1xuICAgIH1cblxuICAgIHJldHVybiBjYXNlUmFua2luZ3MuQ0FNRUw7XG4gIH1cblxuICByZXR1cm4gY2FzZVJhbmtpbmdzLk5PX0NBU0U7XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIG9uZSBvZiB0aGUgY2FzZSBwYXJ0cyBpbiB0aGUgdGVzdFN0cmluZyAod29ya3Mgd2l0aCBhbnkgc3RyaW5nIGNhc2UpXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiBpc1BhcnRpYWxPZkNhc2UoJ2hlbGxvV29ybGQnLCAnd29ybGQnLCBjYXNlUmFua2luZ3MuQ0FNRUwpXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBmYWxzZVxuICogaXNQYXJ0aWFsT2ZDYXNlKCdoZWxsb1dvcmxkJywgJ293b3JsJywgY2FzZVJhbmtpbmdzLkNBTUVMKVxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHBhcmFtIHtOdW1iZXJ9IGNhc2VSYW5raW5nIC0gdGhlIHJhbmtpbmcgc2NvcmUgYmFzZWQgb24gY2FzZSBvZiB0ZXN0U3RyaW5nXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIG9uZSBvZiB0aGUgY2FzZSBwYXJ0cyBpbiB0aGUgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gaXNQYXJ0aWFsT2ZDYXNlKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmtpbmcpIHtcbiAgdmFyIHRlc3RJbmRleCA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZ1RvUmFuay50b0xvd2VyQ2FzZSgpKTtcblxuICBzd2l0Y2ggKGNhc2VSYW5raW5nKSB7XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuU05BS0U6XG4gICAgICByZXR1cm4gdGVzdFN0cmluZ1t0ZXN0SW5kZXggLSAxXSA9PT0gJ18nO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuS0VCQUI6XG4gICAgICByZXR1cm4gdGVzdFN0cmluZ1t0ZXN0SW5kZXggLSAxXSA9PT0gJy0nO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuUEFTQ0FMOlxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLkNBTUVMOlxuICAgICAgcmV0dXJuIHRlc3RJbmRleCAhPT0gLTEgJiYgdGVzdFN0cmluZ1t0ZXN0SW5kZXhdID09PSB0ZXN0U3RyaW5nW3Rlc3RJbmRleF0udG9VcHBlckNhc2UoKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbi8qKlxuICogQ2hlY2sgaWYgc3RyaW5nVG9SYW5rIGlzIGFuIGFjcm9ueW0gZm9yIGEgcGFydGlhbCBjYXNlXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiBpc0Nhc2VBY3JvbnltKCdzdXBlcl9kdXBlcl9maWxlJywgJ3NkZicsIGNhc2VSYW5raW5ncy5TTkFLRSlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgYWNyb255bSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gY2FzZVJhbmsgLSB0aGUgcmFua2luZyBvZiB0aGUgY2FzZVxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIHN0cmluZ1RvUmFuayBpcyBhbiBhY3JvbnltIGZvciB0aGUgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gaXNDYXNlQWNyb255bSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKSB7XG4gIHZhciBzcGxpdFZhbHVlID0gbnVsbDtcblxuICBzd2l0Y2ggKGNhc2VSYW5rKSB7XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuU05BS0U6XG4gICAgICBzcGxpdFZhbHVlID0gJ18nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5LRUJBQjpcbiAgICAgIHNwbGl0VmFsdWUgPSAnLSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLlBBU0NBTDpcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5DQU1FTDpcbiAgICAgIHNwbGl0VmFsdWUgPSAvKD89W0EtWl0pLztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHNwbGl0VmFsdWUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHNwbGl0VGVzdFN0cmluZyA9IHRlc3RTdHJpbmcuc3BsaXQoc3BsaXRWYWx1ZSk7XG4gIHJldHVybiBzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKS5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChjb3JyZWN0LCBjaGFyLCBjaGFySW5kZXgpIHtcbiAgICB2YXIgc3BsaXRJdGVtID0gc3BsaXRUZXN0U3RyaW5nW2NoYXJJbmRleF07XG4gICAgcmV0dXJuIGNvcnJlY3QgJiYgc3BsaXRJdGVtICYmIHNwbGl0SXRlbVswXS50b0xvd2VyQ2FzZSgpID09PSBjaGFyO1xuICB9LCB0cnVlKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHNjb3JlIGJhc2VkIG9uIGhvdyBzcHJlYWQgYXBhcnQgdGhlXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIHN0cmluZ1RvUmFuayBhcmUgd2l0aGluIHRoZSB0ZXN0U3RyaW5nLlxuICogQSBudW1iZXIgY2xvc2UgdG8gcmFua2luZ3MuTUFUQ0hFUyByZXByZXNlbnRzIGEgbG9vc2UgbWF0Y2guIEEgbnVtYmVyIGNsb3NlXG4gKiB0byByYW5raW5ncy5NQVRDSEVTICsgMSByZXByZXNlbnRzIGEgdGlnaHRlciBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICogcmFua2luZ3MuTUFUQ0hFUyArIDEgZm9yIGhvdyB3ZWxsIHN0cmluZ1RvUmFuayBtYXRjaGVzIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKSB7XG4gIHZhciBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgPSAwO1xuICB2YXIgY2hhck51bWJlciA9IDA7XG5cbiAgZnVuY3Rpb24gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKG1hdGNoQ2hhciwgc3RyaW5nLCBpbmRleCkge1xuICAgIGZvciAodmFyIGogPSBpbmRleDsgaiA8IHN0cmluZy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHN0cmluZ0NoYXIgPSBzdHJpbmdbal07XG5cbiAgICAgIGlmIChzdHJpbmdDaGFyID09PSBtYXRjaENoYXIpIHtcbiAgICAgICAgbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50ICs9IDE7XG4gICAgICAgIHJldHVybiBqICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5raW5nKHNwcmVhZCkge1xuICAgIHZhciBpbk9yZGVyUGVyY2VudGFnZSA9IG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCAvIHN0cmluZ1RvUmFuay5sZW5ndGg7XG4gICAgdmFyIHJhbmtpbmcgPSByYW5raW5ncy5NQVRDSEVTICsgaW5PcmRlclBlcmNlbnRhZ2UgKiAoMSAvIHNwcmVhZCk7XG4gICAgcmV0dXJuIHJhbmtpbmc7XG4gIH1cblxuICB2YXIgZmlyc3RJbmRleCA9IGZpbmRNYXRjaGluZ0NoYXJhY3RlcihzdHJpbmdUb1JhbmtbMF0sIHRlc3RTdHJpbmcsIDApO1xuXG4gIGlmIChmaXJzdEluZGV4IDwgMCkge1xuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfVxuXG4gIGNoYXJOdW1iZXIgPSBmaXJzdEluZGV4O1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgc3RyaW5nVG9SYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoQ2hhciA9IHN0cmluZ1RvUmFua1tpXTtcbiAgICBjaGFyTnVtYmVyID0gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKG1hdGNoQ2hhciwgdGVzdFN0cmluZywgY2hhck51bWJlcik7XG4gICAgdmFyIGZvdW5kID0gY2hhck51bWJlciA+IC0xO1xuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzcHJlYWQgPSBjaGFyTnVtYmVyIC0gZmlyc3RJbmRleDtcbiAgcmV0dXJuIGdldFJhbmtpbmcoc3ByZWFkKTtcbn1cbi8qKlxuICogU29ydHMgaXRlbXMgdGhhdCBoYXZlIGEgcmFuaywgaW5kZXgsIGFuZCBrZXlJbmRleFxuICogQHBhcmFtIHtPYmplY3R9IGEgLSB0aGUgZmlyc3QgaXRlbSB0byBzb3J0XG4gKiBAcGFyYW0ge09iamVjdH0gYiAtIHRoZSBzZWNvbmQgaXRlbSB0byBzb3J0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IC0xIGlmIGEgc2hvdWxkIGNvbWUgZmlyc3QsIDEgaWYgYiBzaG91bGQgY29tZSBmaXJzdFxuICogTm90ZTogd2lsbCBuZXZlciByZXR1cm4gMFxuICovXG5cblxuZnVuY3Rpb24gc29ydFJhbmtlZEl0ZW1zKGEsIGIpIHtcbiAgdmFyIGFGaXJzdCA9IC0xO1xuICB2YXIgYkZpcnN0ID0gMTtcbiAgdmFyIGFSYW5rZWRJdGVtID0gYS5yYW5rZWRJdGVtLFxuICAgICAgYVJhbmsgPSBhLnJhbmssXG4gICAgICBhS2V5SW5kZXggPSBhLmtleUluZGV4O1xuICB2YXIgYlJhbmtlZEl0ZW0gPSBiLnJhbmtlZEl0ZW0sXG4gICAgICBiUmFuayA9IGIucmFuayxcbiAgICAgIGJLZXlJbmRleCA9IGIua2V5SW5kZXg7XG5cbiAgaWYgKGFSYW5rID09PSBiUmFuaykge1xuICAgIGlmIChhS2V5SW5kZXggPT09IGJLZXlJbmRleCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhhUmFua2VkSXRlbSkubG9jYWxlQ29tcGFyZShiUmFua2VkSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhS2V5SW5kZXggPCBiS2V5SW5kZXggPyBhRmlyc3QgOiBiRmlyc3Q7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhUmFuayA+IGJSYW5rID8gYUZpcnN0IDogYkZpcnN0O1xuICB9XG59XG4vKipcbiAqIFByZXBhcmVzIHZhbHVlIGZvciBjb21wYXJpc29uIGJ5IHN0cmluZ2lmeWluZyBpdCwgcmVtb3ZpbmcgZGlhY3JpdGljcyAoaWYgc3BlY2lmaWVkKVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNsZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHtrZWVwRGlhY3JpdGljczogd2hldGhlciB0byByZW1vdmUgZGlhY3JpdGljc31cbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHByZXBhcmVkIHZhbHVlXG4gKi9cblxuXG5mdW5jdGlvbiBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHZhbHVlLCBfcmVmNCkge1xuICB2YXIga2VlcERpYWNyaXRpY3MgPSBfcmVmNC5rZWVwRGlhY3JpdGljcztcbiAgdmFsdWUgPSBcIlwiICsgdmFsdWU7IC8vIHRvU3RyaW5nXG5cbiAgaWYgKCFrZWVwRGlhY3JpdGljcykge1xuICAgIHZhbHVlID0gcmVtb3ZlQWNjZW50cyh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdldHMgdmFsdWUgZm9yIGtleSBpbiBpdGVtIGF0IGFyYml0cmFyaWx5IG5lc3RlZCBrZXlwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIHRoZSBpdGVtXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0ga2V5IC0gdGhlIHBvdGVudGlhbGx5IG5lc3RlZCBrZXlwYXRoIG9yIHByb3BlcnR5IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZShzKSBhdCB0aGUgbmVzdGVkIGtleXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEl0ZW1WYWx1ZXMoaXRlbSwga2V5KSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgIGtleSA9IGtleS5rZXk7XG4gIH1cblxuICB2YXIgdmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWx1ZSA9IGtleShpdGVtKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAvLyBoYW5kbGUgbmVzdGVkIGtleXNcbiAgICB2YWx1ZSA9IGtleS5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbiAoaXRlbU9iaiwgbmVzdGVkS2V5KSB7XG4gICAgICByZXR1cm4gaXRlbU9iaiA/IGl0ZW1PYmpbbmVzdGVkS2V5XSA6IG51bGw7XG4gICAgfSwgaXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBpdGVtW2tleV07XG4gIH0gLy8gY29uY2F0IGJlY2F1c2UgYHZhbHVlYCBjYW4gYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IFtdLmNvbmNhdCh2YWx1ZSkgOiBudWxsO1xufVxuLyoqXG4gKiBHZXRzIGFsbCB0aGUgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5cyBpbiB0aGUgZ2l2ZW4gaXRlbSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aG9zZSB2YWx1ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gdGhlIGl0ZW0gZnJvbSB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmUgcmV0cmlldmVkXG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzIC0gdGhlIGtleXMgdG8gdXNlIHRvIHJldHJpZXZlIHRoZSB2YWx1ZXNcbiAqIEByZXR1cm4ge0FycmF5fSBvYmplY3RzIHdpdGgge2l0ZW1WYWx1ZSwgYXR0cmlidXRlc31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEFsbFZhbHVlc1RvUmFuayhpdGVtLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoYWxsVmFscywga2V5KSB7XG4gICAgdmFyIHZhbHVlcyA9IGdldEl0ZW1WYWx1ZXMoaXRlbSwga2V5KTtcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtVmFsdWUpIHtcbiAgICAgICAgYWxsVmFscy5wdXNoKHtcbiAgICAgICAgICBpdGVtVmFsdWU6IGl0ZW1WYWx1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBnZXRLZXlBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVmFscztcbiAgfSwgW10pO1xufVxuLyoqXG4gKiBHZXRzIGFsbCB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIGdpdmVuIGtleVxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBrZXkgLSB0aGUga2V5IGZyb20gd2hpY2ggdGhlIGF0dHJpYnV0ZXMgd2lsbCBiZSByZXRyaWV2ZWRcbiAqIEByZXR1cm4ge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleSdzIGF0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEtleUF0dHJpYnV0ZXMoa2V5KSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIGtleSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgbWF4UmFua2luZzogSW5maW5pdHksXG4gICAgbWluUmFua2luZzogLUluZmluaXR5XG4gIH0sIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hdGNoU29ydGVyO1xuZXhwb3J0IHsgcmFua2luZ3MgfTsiLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gXCIuLi9ydW50aW1lXCI7XG5jb25zdCBTUEVDSUFMX0FUVFJJQlVURV9TRVRURVJTID0gL14oaHRtbHx0ZXh0fGNzcykkLztcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRycyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KGF0dHJpYnV0ZXMsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuXG4gICAgaWYgKFNQRUNJQUxfQVRUUklCVVRFX1NFVFRFUlMudGVzdChrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWxlbWVudFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlID09PSB0cnVlID8ga2V5IDogXCJcIiArIHZhbHVlKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gXCIuLi9ydW50aW1lXCI7XG5jb25zdCBDVVNUT01fUFJPUEVSVFlfUkVHRVggPSAvXi0tLztcbmNvbnN0IERFRkFVTFRfU1RZTEVTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtcbmNvbnN0IFZFTkRPUl9QUkVGSVhFUyA9IFtcIi13ZWJraXQtXCIsIFwiLW1vei1cIiwgXCItby1cIiwgXCItbXMtXCJdO1xuY29uc3QgcHJvcGVydHlOYW1lQ2FjaGUgPSB7fTtcbmNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO1xuY29uc3QgRElSRUNUTFlfQUNDRVNTSUJMRV9TRVRURVJTID0gL3Njcm9sbChUb3B8TGVmdCkvaTtcbmNvbnN0IEhBU19QSVhFTFNfVU5JVCA9IC9weCQvO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XTtcbiAgfVxuXG4gIGlmIChwcm9wZXJ0eSBpbiBERUZBVUxUX1NUWUxFUykge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgVkVORE9SX1BSRUZJWEVTLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ZWROYW1lID0gXCJcIi5jb25jYXQoVkVORE9SX1BSRUZJWEVTW2ldKS5jb25jYXQocHJvcGVydHkpO1xuXG4gICAgaWYgKHByZWZpeGVkTmFtZSBpbiBERUZBVUxUX1NUWUxFUykge1xuICAgICAgcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldID0gcHJlZml4ZWROYW1lO1xuICAgICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgICB9XG4gIH1cblxuICBwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV0gPSBwcm9wZXJ0eTtcbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnRzLCBzdHlsZXMpIHtcbiAgbGV0IHN0eWxlZEVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShlbGVtZW50cykgPyBlbGVtZW50cyA6IFtlbGVtZW50c107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBlbGVtZW50ID0gc3R5bGVkRWxlbWVudHNbaV07XG4gICAgbGV0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcblxuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHN0eWxlcykge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShzdHlsZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUy50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBlbGVtZW50W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKENVU1RPTV9QUk9QRVJUWV9SRUdFWC50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZXNbcHJvcGVydHldID09PSBcIm51bWJlclwiICYmICFJU19OT05fRElNRU5TSU9OQUwudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgdmFsdWUgKz0gXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBwcm9wZXJ0eSA9IG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlcyhlbGVtZW50KSB7XG4gIGxldCBwc2V1ZG9FbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBsZXQgdmlldyA9IG51bGwgIT09IGVsZW1lbnQub3duZXJEb2N1bWVudCAmJiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgIHZpZXcgPSB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIHBzZXVkb0VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgbGV0IHBzZXVkb0VsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gIGxldCBjYXN0ZWRFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAoRElSRUNUTFlfQUNDRVNTSUJMRV9TRVRURVJTLnRlc3QocHJvcGVydHkpKSB7XG4gICAgcmV0dXJuIGNhc3RlZEVsZW1lbnRbcHJvcGVydHldO1xuICB9XG5cbiAgaWYgKCFDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSkpIHtcbiAgICBwcm9wZXJ0eSA9IG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKGNhc3RlZEVsZW1lbnQsIHBzZXVkb0VsZW1lbnQpO1xuICBjb25zdCB2YWx1ZSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCBzdHlsZXNbcHJvcGVydHldO1xuXG4gIGlmIChcIm9wYWNpdHlcIiA9PT0gcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwiXCIgPyBcIjFcIiA6IHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KHByb3BlcnR5KSAmJiBIQVNfUElYRUxTX1VOSVQudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUucmVwbGFjZShIQVNfUElYRUxTX1VOSVQsIFwiXCIpLCAxMCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgc3R5bGUpIHtcbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxpc3RbaV0uc3R5bGUuZGlzcGxheSA9IHN0eWxlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgdXBkYXRlRGlzcGxheShlbGVtZW50LCBcIm5vbmVcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtZW50KSB7XG4gIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgXCJcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24oZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0KGVsZW1lbnQpIHtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICB9O1xufSIsImltcG9ydCB7IHNwbGl0U3RyaW5nVmFsdWUgfSBmcm9tIFwiLi91dGlsc1wiO1xuY29uc3QgbGlzdGVuZXJSZWdpc3RyeSA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gb24oZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG4gIGNvbnN0IHR5cGVzID0gc3BsaXRTdHJpbmdWYWx1ZSh0eXBlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHR5cGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBub2RlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKG51bGwgPT09IG5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IHR5cGVzW2pdO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgICBsZXQgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQobm9kZSk7XG5cbiAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgIGxpc3RlbmVycyA9IHt9O1xuICAgICAgICBsaXN0ZW5lclJlZ2lzdHJ5LnNldChub2RlLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJzW2V2ZW50VHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcbiAgY29uc3QgdHlwZXMgPSBzcGxpdFN0cmluZ1ZhbHVlKHR5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAobnVsbCA9PT0gbm9kZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gdHlwZXNbal07XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KG5vZGUpO1xuXG4gICAgICBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQgJiYgbGlzdGVuZXJzW2V2ZW50VHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVyc1tldmVudFR5cGVdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgaWYgKC0xICE9PSBpbmRleCkge1xuICAgICAgICAgIGxpc3RlbmVyc1tldmVudFR5cGVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGludGVybWVkaWF0ZSA9IGV2ZW50ID0+IHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICBvZmYoZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgfTtcblxuICBvbihlbGVtZW50LCB0eXBlLCBpbnRlcm1lZGlhdGUpO1xuICByZXR1cm4gaW50ZXJtZWRpYXRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpbnRlcm1lZGlhdGUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZERlbGVnYXRlZFRhcmdldCA9IGZpbmREZWxlZ2F0ZWRUYXJnZXQoZWxlbWVudCwgZXZlbnQudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICBpZiAobnVsbCAhPT0gbWF0Y2hlZERlbGVnYXRlZFRhcmdldCkge1xuICAgICAgaGFuZGxlcihldmVudCwgbWF0Y2hlZERlbGVnYXRlZFRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIG9uKGVsZW1lbnQsIHR5cGUsIGludGVybWVkaWF0ZSk7XG4gIHJldHVybiBpbnRlcm1lZGlhdGU7XG59XG5cbmZ1bmN0aW9uIGZpbmREZWxlZ2F0ZWRUYXJnZXQoZGVsZWdhdGVFbGVtZW50LCBjdXJyZW50VGFyZ2V0LCBzZWxlY3Rvcikge1xuICBsZXQgbm9kZSA9IGN1cnJlbnRUYXJnZXQ7XG5cbiAgd2hpbGUgKG51bGwgIT09IG5vZGUgJiYgbm9kZSAhPT0gZGVsZWdhdGVFbGVtZW50KSB7XG4gICAgaWYgKG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXIoZWxlbWVudCwgdHlwZSkge1xuICBsZXQgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblxuICBpZiAobnVsbCA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50ID0gY3JlYXRlRXZlbnQodHlwZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICBkZXRhaWw6IGRhdGFcbiAgfSk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHR5cGUsIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgISFhcmdzLmJ1YmJsZXMsICEhYXJncy5jYW5jZWxhYmxlLCBhcmdzLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbExpc3RlbmVycyhlbGVtZW50KSB7XG4gIHJldHVybiBsaXN0ZW5lclJlZ2lzdHJ5LmdldChlbGVtZW50KSB8fCB7fTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgeyBzZXRTdHlsZXMgfSBmcm9tIFwiLi9jc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWwpIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBjb25zdCBjaGlsZHJlbiA9IGRvYy5ib2R5LmNoaWxkcmVuO1xuXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSBwYXJzZSBIVE1MIHdpdGggZXhhY3RseSBvbmUgdmFsaWQgcm9vdCBlbGVtZW50LiBBIHZhbGlkIGVsZW1lbnQgY2FuIHN0YW5kIG9uIGl0cyBvd24gaW4gdGhlIGJvZHkuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlKSB7XG4gIGxldCBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZVVuc3R5bGVkRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKTtcblxuICBpZiAoYXR0cmlidXRlcy5jc3MgIT09IHVuZGVmaW5lZCkge1xuICAgIHNldFN0eWxlcyhlbGVtZW50LCBhdHRyaWJ1dGVzLmNzcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVbnN0eWxlZEVsZW1lbnQodHlwZSkge1xuICBsZXQgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGNvbnN0IGVsZW1lbnQgPSAtMSAhPT0gdHlwZS5pbmRleE9mKFwiPFwiKSA/IHBhcnNlSHRtbCh0eXBlKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHNldEF0dHJzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5odG1sICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwYXJlbnROb2RlID0gbGlzdFtpXS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKG51bGwgIT09IHBhcmVudE5vZGUpIHtcbiAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlzdFtpXSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoZWxlbWVudCkge1xuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzRWxlbWVudChsaXN0W2ldKSkge1xuICAgICAgbGlzdFtpXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoZWxlbWVudCwgcmVwbGFjZW1lbnQpIHtcbiAgbGV0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgaWYgKG51bGwgIT09IHBhcmVudE5vZGUpIHtcbiAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgYWRqYWNlbnRQb3NpdGlvbiwgaW5zZXJ0SW50bywgaW5zZXJ0UmVmZXJlbmNlKSB7XG4gIGlmICh0eXBlb2YgaW5zZXJ0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVmZXJlbmNlLmluc2VydEFkamFjZW50SFRNTChhZGphY2VudFBvc2l0aW9uLCBpbnNlcnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbnNlcnRJbnRvID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoaW5zZXJ0KSA/IGluc2VydCA6IFtpbnNlcnRdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGluc2VydEludG8uaW5zZXJ0QmVmb3JlKGxpc3RbaV0sIGluc2VydFJlZmVyZW5jZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImJlZm9yZWVuZFwiLCByZWZlcmVuY2UsIG51bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmQocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJhZnRlcmJlZ2luXCIsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLmZpcnN0RWxlbWVudENoaWxkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmUocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJiZWZvcmViZWdpblwiLCByZWZlcmVuY2UucGFyZW50RWxlbWVudCwgcmVmZXJlbmNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZnRlcihyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImFmdGVyZW5kXCIsIHJlZmVyZW5jZS5wYXJlbnRFbGVtZW50LCByZWZlcmVuY2UubmV4dEVsZW1lbnRTaWJsaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGFkZCkge1xuICBlbGVtZW50LmNsYXNzTGlzdFthZGQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0oY2xhc3NOYW1lKTtcbn0iLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbC9kb21cIjtcblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXMoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBudWxsID09PSBzZWxlY3RvciB8fCBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBhY2Nlc3Nvcikge1xuICBsZXQgaW5kZXhhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGxldCBzaWJsaW5nID0gaW5kZXhhYmxlRWxlbWVudFthY2Nlc3Nvcl07XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChzaWJsaW5nKTtcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1thY2Nlc3Nvcl07XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gZmV0Y2hTaW5nbGVTaWJsaW5nKGVsZW1lbnQsIHNlbGVjdG9yLCBhY2Nlc3Nvcikge1xuICBsZXQgaW5kZXhhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGxldCBzaWJsaW5nID0gaW5kZXhhYmxlRWxlbWVudFthY2Nlc3Nvcl07XG5cbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1thY2Nlc3Nvcl07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgbGV0IGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZE9uZShzZWxlY3Rvcikge1xuICBsZXQgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihsaXN0LCBzZWxlY3Rvcikge1xuICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiBlLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBub3QobGlzdCwgc2VsZWN0b3IpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+ICFlLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihlID0+IC0xICE9PSBzZWxlY3Rvci5pbmRleE9mKGUpKTtcbiAgfVxuXG4gIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUgIT09IHNlbGVjdG9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBjb25zdCBsaXN0ID0gW107XG4gIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKSkge1xuICAgICAgbGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0Q2hpbGQocGFyZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmV2KGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hTaW5nbGVTaWJsaW5nKGVsZW1lbnQsIHNlbGVjdG9yLCBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dChlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoU2luZ2xlU2libGluZyhlbGVtZW50LCBzZWxlY3RvciwgXCJuZXh0RWxlbWVudFNpYmxpbmdcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldkFsbChlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoQWxsU2libGluZ3MoZWxlbWVudCwgc2VsZWN0b3IsIFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuZXh0QWxsKGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hBbGxTaWJsaW5ncyhlbGVtZW50LCBzZWxlY3RvciwgXCJuZXh0RWxlbWVudFNpYmxpbmdcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2libGluZ3MoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgbGV0IHNpYmxpbmcgPSBudWxsO1xuXG4gIGlmIChudWxsICE9PSBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICBzaWJsaW5nID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICB9XG5cbiAgd2hpbGUgKG51bGwgIT09IHNpYmxpbmcpIHtcbiAgICBpZiAoc2libGluZyAhPT0gZWxlbWVudCAmJiBlbGVtZW50TWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChzaWJsaW5nKTtcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGxldCByb290RWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICB3aGlsZSAobnVsbCAhPT0gcGFyZW50ICYmIHJvb3RFbGVtZW50ICE9PSBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZEVsZW1lbnQocGFyZW50LCBub2RlKSB7XG4gIGxldCBwb2ludGVyID0gbm9kZTtcblxuICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgIGlmIChwb2ludGVyID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvaW50ZXIgPSBwb2ludGVyLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PT0gXCJcIiA/IFtdIDogdmFsdWUudHJpbSgpLnNwbGl0KC8gKy8pO1xufSIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vcnVudGltZVwiO1xuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSh0YXJnZXQpIHtcbiAgaWYgKDAgPT09IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGlmICgxIDwgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IDAgOiBhcmd1bWVudHMubGVuZ3RoIC0gMSkpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICByZXN1bHQgPSBtZXJnZShyZXN1bHQsIGkgKyAxIDwgMSB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgKyAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2kgKyAxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgY29uc3Qgc291cmNlVHlwZSA9IHR5cGVPZihzb3VyY2UpO1xuICBjb25zdCB0YXJnZXRUeXBlID0gdHlwZU9mKHRhcmdldCk7XG5cbiAgaWYgKHNvdXJjZVR5cGUgPT09IHRhcmdldFR5cGUgfHwgXCJudWxsXCIgPT09IHNvdXJjZVR5cGUgfHwgXCJudWxsXCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICBpZiAoXCJhcnJheVwiID09PSB0YXJnZXRUeXBlKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChcIm9iamVjdFwiID09PSB0YXJnZXRUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5KHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZCA/IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgbGV0IHRhcmdldCA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNvdXJjZSA9IGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNhZmVQYXJzZUpzb24odmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB2YWx1ZS50cmltKCk7XG4gICAgICByZXR1cm4gY29udGVudCAhPT0gXCJcIiA/IEpTT04ucGFyc2UoY29udGVudCkgOiBudWxsO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgSlNPTiBjb250ZW50OiBcIi5jb25jYXQoZS5tZXNzYWdlKSwgZSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUVsZW1lbnRBc0pzb24oZWxlbWVudCkge1xuICByZXR1cm4gc2FmZVBhcnNlSnNvbigoZWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiKS5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKS5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKS5yZXBsYWNlKC8mYW1wOy9nLCBcIiZcIikpO1xufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZpbmQgfSBmcm9tIFwiLi4vZG9tL3RyYXZlcnNlXCI7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tIFwiLi4vZXh0ZW5kXCI7XG5pbXBvcnQgeyBwYXJzZUVsZW1lbnRBc0pzb24gfSBmcm9tIFwiLi4vanNvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KHNlbGVjdG9yLCBtb3VudGFibGUsIG9wdGlvbnMpIHtcbiAgZG9Nb3VudChmaW5kKHNlbGVjdG9yKSwgbW91bnRhYmxlLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudExhenkoc2VsZWN0b3IsIGltcG9ydGVyLCBvcHRpb25zKSB7XG4gIGxldCBlbGVtZW50cyA9IGZpbmQoc2VsZWN0b3IpO1xuXG4gIGlmICghZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW1wb3J0ZXIoKS50aGVuKG1vZHVsZSA9PiBkb01vdW50KGVsZW1lbnRzLCBtb2R1bGUuZGVmYXVsdCwgb3B0aW9ucyksIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJNb3VudGluZyBvZiBjb21wb25lbnQgb2YgcGF0aCAnXCIuY29uY2F0KHNlbGVjdG9yLCBcIicgZmFpbGVkOiBcIikuY29uY2F0KGVycm9yLm1lc3NhZ2UpLCBlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBkb01vdW50KGVsZW1lbnRzLCBtb3VudGFibGUsIHJhd09wdGlvbnMpIHtcbiAgbGV0IG1vdW50YWJsZUFueSA9IG1vdW50YWJsZTtcbiAgbGV0IG9wdGlvbnMgPSBleHRlbmQoe1xuICAgIHR5cGU6IFwiZnVuY1wiXG4gIH0sIHJhd09wdGlvbnMgfHwge30pO1xuICBlbGVtZW50cy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGlmIChcImpzeFwiID09PSBvcHRpb25zLnR5cGUpIHtcbiAgICAgIGxldCBvcHRzID0gb3B0aW9ucztcbiAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBtb3VudCBvbiBjb250YWluZXIgd2l0aG91dCBwYXJlbnQuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0cy5oeWRyYXRlKSB7XG4gICAgICAgIHBhcmFtcyA9IGV4dGVuZChwYXJhbXMsIHBhcnNlRWxlbWVudEFzSnNvbihub2RlKSB8fCB7fSk7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQobW91bnRhYmxlLCBwYXJhbXMpLCBwYXJlbnQsIG9wdHMuaHlkcmF0ZSA/IG5vZGUgOiB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSBpZiAoXCJjbGFzc1wiID09PSBvcHRpb25zLnR5cGUpIHtcbiAgICAgIGxldCBzdGFuZGFsb25lT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBtb3VudGVkID0gbmV3IG1vdW50YWJsZUFueShub2RlLCAuLi4oc3RhbmRhbG9uZU9wdGlvbnMucGFyYW1zIHx8IFtdKSk7XG4gICAgICBtb3VudGVkLmluaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YW5kYWxvbmVPcHRpb25zID0gb3B0aW9ucztcbiAgICAgIG1vdW50YWJsZShub2RlLCAuLi4oc3RhbmRhbG9uZU9wdGlvbnMucGFyYW1zIHx8IFtdKSk7XG4gICAgfVxuICB9KTtcbn0iLCJpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgY29uc3QgZWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gZWxlbWVudFByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50UHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkodmFsdWUsIHByb3BlcnR5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3BlcnR5KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gdHlwZU9mKHZhbHVlKSB7XG4gIGNvbnN0IG1hdGNoID0gL15cXFtvYmplY3QgKC4qPyldJC8uZXhlYyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgcmV0dXJuIG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6IFwib2JqZWN0XCI7XG59IiwidmFyIG4sXG4gICAgbCxcbiAgICB1LFxuICAgIHQsXG4gICAgaSxcbiAgICByID0ge30sXG4gICAgZiA9IFtdLFxuICAgIG8gPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxeLS0vaTtcblxuZnVuY3Rpb24gZShuLCBsKSB7XG4gIGZvciAodmFyIHUgaW4gbCkgblt1XSA9IGxbdV07XG5cbiAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIGMobikge1xuICB2YXIgbCA9IG4ucGFyZW50Tm9kZTtcbiAgbCAmJiBsLnJlbW92ZUNoaWxkKG4pO1xufVxuXG5mdW5jdGlvbiBzKG4sIGwsIHUpIHtcbiAgdmFyIHQsXG4gICAgICBpLFxuICAgICAgcixcbiAgICAgIGYsXG4gICAgICBvID0gYXJndW1lbnRzO1xuICBpZiAobCA9IGUoe30sIGwpLCBhcmd1bWVudHMubGVuZ3RoID4gMykgZm9yICh1ID0gW3VdLCB0ID0gMzsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykgdS5wdXNoKG9bdF0pO1xuICBpZiAobnVsbCAhPSB1ICYmIChsLmNoaWxkcmVuID0gdSksIG51bGwgIT0gbiAmJiBudWxsICE9IG4uZGVmYXVsdFByb3BzKSBmb3IgKGkgaW4gbi5kZWZhdWx0UHJvcHMpIHZvaWQgMCA9PT0gbFtpXSAmJiAobFtpXSA9IG4uZGVmYXVsdFByb3BzW2ldKTtcbiAgcmV0dXJuIGYgPSBsLmtleSwgbnVsbCAhPSAociA9IGwucmVmKSAmJiBkZWxldGUgbC5yZWYsIG51bGwgIT0gZiAmJiBkZWxldGUgbC5rZXksIGEobiwgbCwgZiwgcik7XG59XG5cbmZ1bmN0aW9uIGEobCwgdSwgdCwgaSkge1xuICB2YXIgciA9IHtcbiAgICB0eXBlOiBsLFxuICAgIHByb3BzOiB1LFxuICAgIGtleTogdCxcbiAgICByZWY6IGksXG4gICAgX19rOiBudWxsLFxuICAgIF9fcDogbnVsbCxcbiAgICBfX2I6IDAsXG4gICAgX19lOiBudWxsLFxuICAgIGw6IG51bGwsXG4gICAgX19jOiBudWxsLFxuICAgIGNvbnN0cnVjdG9yOiB2b2lkIDBcbiAgfTtcbiAgcmV0dXJuIG4udm5vZGUgJiYgbi52bm9kZShyKSwgcjtcbn1cblxuZnVuY3Rpb24gaCgpIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiB2KG4pIHtcbiAgcmV0dXJuIG4uY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIHAobikge1xuICBpZiAobnVsbCA9PSBuIHx8IFwiYm9vbGVhblwiID09IHR5cGVvZiBuKSByZXR1cm4gbnVsbDtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG4gfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgbikgcmV0dXJuIGEobnVsbCwgbiwgbnVsbCwgbnVsbCk7XG5cbiAgaWYgKG51bGwgIT0gbi5fX2UgfHwgbnVsbCAhPSBuLl9fYykge1xuICAgIHZhciBsID0gYShuLnR5cGUsIG4ucHJvcHMsIG4ua2V5LCBudWxsKTtcbiAgICByZXR1cm4gbC5fX2UgPSBuLl9fZSwgbDtcbiAgfVxuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiB5KG4sIGwpIHtcbiAgdGhpcy5wcm9wcyA9IG4sIHRoaXMuY29udGV4dCA9IGw7XG59XG5cbmZ1bmN0aW9uIGQobiwgbCkge1xuICBpZiAobnVsbCA9PSBsKSByZXR1cm4gbi5fX3AgPyBkKG4uX19wLCBuLl9fcC5fX2suaW5kZXhPZihuKSArIDEpIDogbnVsbDtcblxuICBmb3IgKHZhciB1OyBsIDwgbi5fX2subGVuZ3RoOyBsKyspIGlmIChudWxsICE9ICh1ID0gbi5fX2tbbF0pICYmIG51bGwgIT0gdS5fX2UpIHJldHVybiB1Ll9fZTtcblxuICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLnR5cGUgPyBkKG4pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gbShuKSB7XG4gIHZhciBsLCB1O1xuXG4gIGlmIChudWxsICE9IChuID0gbi5fX3ApICYmIG51bGwgIT0gbi5fX2MpIHtcbiAgICBmb3IgKG4uX19lID0gbi5fX2MuYmFzZSA9IG51bGwsIGwgPSAwOyBsIDwgbi5fX2subGVuZ3RoOyBsKyspIGlmIChudWxsICE9ICh1ID0gbi5fX2tbbF0pICYmIG51bGwgIT0gdS5fX2UpIHtcbiAgICAgIG4uX19lID0gbi5fX2MuYmFzZSA9IHUuX19lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG0obik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdyh0KSB7XG4gICF0Ll9fZCAmJiAodC5fX2QgPSAhMCkgJiYgMSA9PT0gbC5wdXNoKHQpICYmIChuLmRlYm91bmNlUmVuZGVyaW5nIHx8IHUpKGcpO1xufVxuXG5mdW5jdGlvbiBnKCkge1xuICB2YXIgbjtcblxuICBmb3IgKGwuc29ydChmdW5jdGlvbiAobiwgbCkge1xuICAgIHJldHVybiBsLl9fdi5fX2IgLSBuLl9fdi5fX2I7XG4gIH0pOyBuID0gbC5wb3AoKTspIG4uX19kICYmIG4uZm9yY2VVcGRhdGUoITEpO1xufVxuXG5mdW5jdGlvbiBrKG4sIGwsIHUsIHQsIGksIG8sIGUsIHMsIGEpIHtcbiAgdmFyIGgsXG4gICAgICB2LFxuICAgICAgeSxcbiAgICAgIG0sXG4gICAgICB3LFxuICAgICAgZyxcbiAgICAgIGssXG4gICAgICBiLFxuICAgICAgeCA9IGwuX19rIHx8IF8obC5wcm9wcy5jaGlsZHJlbiwgbC5fX2sgPSBbXSwgcCwgITApLFxuICAgICAgQyA9IHUgJiYgdS5fX2sgfHwgZixcbiAgICAgIFAgPSBDLmxlbmd0aDtcblxuICBmb3IgKHMgPT0gciAmJiAocyA9IG51bGwgIT0gbyA/IG9bMF0gOiBQID8gZCh1LCAwKSA6IG51bGwpLCB2ID0gMDsgdiA8IHgubGVuZ3RoOyB2KyspIGlmIChudWxsICE9IChoID0geFt2XSA9IHAoeFt2XSkpKSB7XG4gICAgaWYgKGguX19wID0gbCwgaC5fX2IgPSBsLl9fYiArIDEsIG51bGwgPT09IChtID0gQ1t2XSkgfHwgbSAmJiBoLmtleSA9PSBtLmtleSAmJiBoLnR5cGUgPT09IG0udHlwZSkgQ1t2XSA9IHZvaWQgMDtlbHNlIGZvciAoeSA9IDA7IHkgPCBQOyB5KyspIHtcbiAgICAgIGlmICgobSA9IENbeV0pICYmIGgua2V5ID09IG0ua2V5ICYmIGgudHlwZSA9PT0gbS50eXBlKSB7XG4gICAgICAgIENbeV0gPSB2b2lkIDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBtID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodyA9IE4obiwgaCwgbSA9IG0gfHwgciwgdCwgaSwgbywgZSwgbnVsbCwgcywgYSksICh5ID0gaC5yZWYpICYmIG0ucmVmICE9IHkgJiYgKGIgfHwgKGIgPSBbXSkpLnB1c2goeSwgaC5fX2MgfHwgdywgaCksIG51bGwgIT0gdykge1xuICAgICAgaWYgKG51bGwgPT0gayAmJiAoayA9IHcpLCBudWxsICE9IGgubCkgdyA9IGgubCwgaC5sID0gbnVsbDtlbHNlIGlmIChvID09IG0gfHwgdyAhPSBzIHx8IG51bGwgPT0gdy5wYXJlbnROb2RlKSBuOiBpZiAobnVsbCA9PSBzIHx8IHMucGFyZW50Tm9kZSAhPT0gbikgbi5hcHBlbmRDaGlsZCh3KTtlbHNlIHtcbiAgICAgICAgZm9yIChnID0gcywgeSA9IDA7IChnID0gZy5uZXh0U2libGluZykgJiYgeSA8IFA7IHkgKz0gMikgaWYgKGcgPT0gdykgYnJlYWsgbjtcblxuICAgICAgICBuLmluc2VydEJlZm9yZSh3LCBzKTtcbiAgICAgIH1cbiAgICAgIHMgPSB3Lm5leHRTaWJsaW5nLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwudHlwZSAmJiAobC5sID0gdyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGwuX19lID0gaywgbnVsbCAhPSBvICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbC50eXBlKSBmb3IgKHYgPSBvLmxlbmd0aDsgdi0tOykgbnVsbCAhPSBvW3ZdICYmIGMob1t2XSk7XG5cbiAgZm9yICh2ID0gUDsgdi0tOykgbnVsbCAhPSBDW3ZdICYmIHooQ1t2XSwgQ1t2XSk7XG5cbiAgaWYgKGIpIGZvciAodiA9IDA7IHYgPCBiLmxlbmd0aDsgdisrKSBqKGJbdl0sIGJbKyt2XSwgYlsrK3ZdKTtcbn1cblxuZnVuY3Rpb24gXyhuLCBsLCB1LCB0KSB7XG4gIGlmIChudWxsID09IGwgJiYgKGwgPSBbXSksIG51bGwgPT0gbiB8fCBcImJvb2xlYW5cIiA9PSB0eXBlb2YgbikgdCAmJiBsLnB1c2gobnVsbCk7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuKSkgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSBfKG5baV0sIGwsIHUsIHQpO2Vsc2UgbC5wdXNoKHUgPyB1KG4pIDogbik7XG4gIHJldHVybiBsO1xufVxuXG5mdW5jdGlvbiBiKG4sIGwsIHUsIHQsIGkpIHtcbiAgdmFyIHI7XG5cbiAgZm9yIChyIGluIHUpIHIgaW4gbCB8fCBDKG4sIHIsIG51bGwsIHVbcl0sIHQpO1xuXG4gIGZvciAociBpbiBsKSBpICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbFtyXSB8fCBcInZhbHVlXCIgPT09IHIgfHwgXCJjaGVja2VkXCIgPT09IHIgfHwgdVtyXSA9PT0gbFtyXSB8fCBDKG4sIHIsIGxbcl0sIHVbcl0sIHQpO1xufVxuXG5mdW5jdGlvbiB4KG4sIGwsIHUpIHtcbiAgXCItXCIgPT09IGxbMF0gPyBuLnNldFByb3BlcnR5KGwsIHUpIDogbltsXSA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIHUgJiYgITEgPT09IG8udGVzdChsKSA/IHUgKyBcInB4XCIgOiB1O1xufVxuXG5mdW5jdGlvbiBDKG4sIGwsIHUsIHQsIGkpIHtcbiAgdmFyIHIsIGYsIG8sIGUsIGM7XG4gIGlmIChcImtleVwiID09PSAobCA9IGkgPyBcImNsYXNzTmFtZVwiID09PSBsID8gXCJjbGFzc1wiIDogbCA6IFwiY2xhc3NcIiA9PT0gbCA/IFwiY2xhc3NOYW1lXCIgOiBsKSB8fCBcImNoaWxkcmVuXCIgPT09IGwpIDtlbHNlIGlmIChcInN0eWxlXCIgPT09IGwpIHtcbiAgICBpZiAociA9IG4uc3R5bGUsIFwic3RyaW5nXCIgPT0gdHlwZW9mIHUpIHIuY3NzVGV4dCA9IHU7ZWxzZSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiAoci5jc3NUZXh0ID0gXCJcIiwgdCA9IG51bGwpLCB0KSBmb3IgKGYgaW4gdCkgdSAmJiBmIGluIHUgfHwgeChyLCBmLCBcIlwiKTtcbiAgICAgIGlmICh1KSBmb3IgKG8gaW4gdSkgdCAmJiB1W29dID09PSB0W29dIHx8IHgociwgbywgdVtvXSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwib1wiID09PSBsWzBdICYmIFwiblwiID09PSBsWzFdKSBlID0gbCAhPT0gKGwgPSBsLnJlcGxhY2UoL0NhcHR1cmUkLywgXCJcIikpLCBjID0gbC50b0xvd2VyQ2FzZSgpLCBsID0gKGMgaW4gbiA/IGMgOiBsKS5zbGljZSgyKSwgdSA/ICh0IHx8IG4uYWRkRXZlbnRMaXN0ZW5lcihsLCBQLCBlKSwgKG4udSB8fCAobi51ID0ge30pKVtsXSA9IHUpIDogbi5yZW1vdmVFdmVudExpc3RlbmVyKGwsIFAsIGUpO2Vsc2UgaWYgKFwibGlzdFwiICE9PSBsICYmIFwidGFnTmFtZVwiICE9PSBsICYmICFpICYmIGwgaW4gbikge1xuICAgIGlmIChuLmxlbmd0aCAmJiBcInZhbHVlXCIgPT0gbCkgZm9yIChsID0gbi5sZW5ndGg7IGwtLTspIG4ub3B0aW9uc1tsXS5zZWxlY3RlZCA9IG4ub3B0aW9uc1tsXS52YWx1ZSA9PSB1O2Vsc2UgbltsXSA9IG51bGwgPT0gdSA/IFwiXCIgOiB1O1xuICB9IGVsc2UgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB1ICYmIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiAhPT0gbCAmJiAobCAhPT0gKGwgPSBsLnJlcGxhY2UoL154bGluazo/LywgXCJcIikpID8gbnVsbCA9PSB1IHx8ICExID09PSB1ID8gbi5yZW1vdmVBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgbC50b0xvd2VyQ2FzZSgpKSA6IG4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGwudG9Mb3dlckNhc2UoKSwgdSkgOiBudWxsID09IHUgfHwgITEgPT09IHUgPyBuLnJlbW92ZUF0dHJpYnV0ZShsKSA6IG4uc2V0QXR0cmlidXRlKGwsIHUpKTtcbn1cblxuZnVuY3Rpb24gUChsKSB7XG4gIHJldHVybiB0aGlzLnVbbC50eXBlXShuLmV2ZW50ID8gbi5ldmVudChsKSA6IGwpO1xufVxuXG5mdW5jdGlvbiBOKGwsIHUsIHQsIGksIHIsIGYsIG8sIGMsIHMsIGEpIHtcbiAgdmFyIGgsXG4gICAgICBkLFxuICAgICAgbSxcbiAgICAgIHcsXG4gICAgICBnLFxuICAgICAgYixcbiAgICAgIHgsXG4gICAgICBDLFxuICAgICAgUCxcbiAgICAgIE4sXG4gICAgICBUID0gdS50eXBlO1xuICBpZiAodm9pZCAwICE9PSB1LmNvbnN0cnVjdG9yKSByZXR1cm4gbnVsbDtcbiAgKGggPSBuLl9fYikgJiYgaCh1KTtcblxuICB0cnkge1xuICAgIG46IGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFQpIHtcbiAgICAgIGlmIChDID0gdS5wcm9wcywgUCA9IChoID0gVC5jb250ZXh0VHlwZSkgJiYgaVtoLl9fY10sIE4gPSBoID8gUCA/IFAucHJvcHMudmFsdWUgOiBoLl9fcCA6IGksIHQuX19jID8geCA9IChkID0gdS5fX2MgPSB0Ll9fYykuX19wID0gZC5fX0UgOiAoVC5wcm90b3R5cGUgJiYgVC5wcm90b3R5cGUucmVuZGVyID8gdS5fX2MgPSBkID0gbmV3IFQoQywgTikgOiAodS5fX2MgPSBkID0gbmV3IHkoQywgTiksIGQuY29uc3RydWN0b3IgPSBULCBkLnJlbmRlciA9IEEpLCBQICYmIFAuc3ViKGQpLCBkLnByb3BzID0gQywgZC5zdGF0ZSB8fCAoZC5zdGF0ZSA9IHt9KSwgZC5jb250ZXh0ID0gTiwgZC5fX24gPSBpLCBtID0gZC5fX2QgPSAhMCwgZC5fX2ggPSBbXSksIG51bGwgPT0gZC5fX3MgJiYgKGQuX19zID0gZC5zdGF0ZSksIG51bGwgIT0gVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJiYgZShkLl9fcyA9PSBkLnN0YXRlID8gZC5fX3MgPSBlKHt9LCBkLl9fcykgOiBkLl9fcywgVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoQywgZC5fX3MpKSwgbSkgbnVsbCA9PSBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAmJiBudWxsICE9IGQuY29tcG9uZW50V2lsbE1vdW50ICYmIGQuY29tcG9uZW50V2lsbE1vdW50KCksIG51bGwgIT0gZC5jb21wb25lbnREaWRNb3VudCAmJiBvLnB1c2goZCk7ZWxzZSB7XG4gICAgICAgIGlmIChudWxsID09IFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICYmIG51bGwgPT0gYyAmJiBudWxsICE9IGQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAmJiBkLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoQywgTiksICFjICYmIG51bGwgIT0gZC5zaG91bGRDb21wb25lbnRVcGRhdGUgJiYgITEgPT09IGQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKEMsIGQuX19zLCBOKSkge1xuICAgICAgICAgIGQucHJvcHMgPSBDLCBkLnN0YXRlID0gZC5fX3MsIGQuX19kID0gITEsIGQuX192ID0gdSwgdS5fX2UgPSB0Ll9fZSwgdS5fX2sgPSB0Ll9faztcbiAgICAgICAgICBicmVhayBuO1xuICAgICAgICB9XG5cbiAgICAgICAgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxVcGRhdGUgJiYgZC5jb21wb25lbnRXaWxsVXBkYXRlKEMsIGQuX19zLCBOKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh3ID0gZC5wcm9wcywgZyA9IGQuc3RhdGUsIGQuY29udGV4dCA9IE4sIGQucHJvcHMgPSBDLCBkLnN0YXRlID0gZC5fX3MsIChoID0gbi5fX3IpICYmIGgodSksIGQuX19kID0gITEsIGQuX192ID0gdSwgZC5fX1AgPSBsLCBfKG51bGwgIT0gKGggPSBkLnJlbmRlcihkLnByb3BzLCBkLnN0YXRlLCBkLmNvbnRleHQpKSAmJiBoLnR5cGUgPT0gdiAmJiBudWxsID09IGgua2V5ID8gaC5wcm9wcy5jaGlsZHJlbiA6IGgsIHUuX19rID0gW10sIHAsICEwKSwgbnVsbCAhPSBkLmdldENoaWxkQ29udGV4dCAmJiAoaSA9IGUoZSh7fSwgaSksIGQuZ2V0Q2hpbGRDb250ZXh0KCkpKSwgbSB8fCBudWxsID09IGQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgfHwgKGIgPSBkLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHcsIGcpKSwgayhsLCB1LCB0LCBpLCByLCBmLCBvLCBzLCBhKSwgZC5iYXNlID0gdS5fX2U7IGggPSBkLl9faC5wb3AoKTspIGguY2FsbChkKTtcblxuICAgICAgbSB8fCBudWxsID09IHcgfHwgbnVsbCA9PSBkLmNvbXBvbmVudERpZFVwZGF0ZSB8fCBkLmNvbXBvbmVudERpZFVwZGF0ZSh3LCBnLCBiKSwgeCAmJiAoZC5fX0UgPSBkLl9fcCA9IG51bGwpO1xuICAgIH0gZWxzZSB1Ll9fZSA9ICQodC5fX2UsIHUsIHQsIGksIHIsIGYsIG8sIGEpO1xuXG4gICAgKGggPSBuLmRpZmZlZCkgJiYgaCh1KTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4uX19lKGwsIHUsIHQpO1xuICB9XG5cbiAgcmV0dXJuIHUuX19lO1xufVxuXG5mdW5jdGlvbiBUKGwsIHUpIHtcbiAgZm9yICh2YXIgdDsgdCA9IGwucG9wKCk7KSB0cnkge1xuICAgIHQuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4uX19lKGwsIHQuX192KTtcbiAgfVxuXG4gIG4uX19jICYmIG4uX19jKHUpO1xufVxuXG5mdW5jdGlvbiAkKG4sIGwsIHUsIHQsIGksIG8sIGUsIGMpIHtcbiAgdmFyIHMsXG4gICAgICBhLFxuICAgICAgaCxcbiAgICAgIHYsXG4gICAgICBwID0gdS5wcm9wcyxcbiAgICAgIHkgPSBsLnByb3BzO1xuICBpZiAoaSA9IFwic3ZnXCIgPT09IGwudHlwZSB8fCBpLCBudWxsID09IG4gJiYgbnVsbCAhPSBvKSBmb3IgKHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykgaWYgKG51bGwgIT0gKGEgPSBvW3NdKSAmJiAobnVsbCA9PT0gbC50eXBlID8gMyA9PT0gYS5ub2RlVHlwZSA6IGEubG9jYWxOYW1lID09PSBsLnR5cGUpKSB7XG4gICAgbiA9IGEsIG9bc10gPSBudWxsO1xuICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG51bGwgPT0gbikge1xuICAgIGlmIChudWxsID09PSBsLnR5cGUpIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh5KTtcbiAgICBuID0gaSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIGwudHlwZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSksIG8gPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG51bGwgPT09IGwudHlwZSA/IHAgIT09IHkgJiYgKG4uZGF0YSA9IHkpIDogbCAhPT0gdSAmJiAobnVsbCAhPSBvICYmIChvID0gZi5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLCBoID0gKHAgPSB1LnByb3BzIHx8IHIpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCB2ID0geS5kYW5nZXJvdXNseVNldElubmVySFRNTCwgYyB8fCAodiB8fCBoKSAmJiAodiAmJiBoICYmIHYuX19odG1sID09IGguX19odG1sIHx8IChuLmlubmVySFRNTCA9IHYgJiYgdi5fX2h0bWwgfHwgXCJcIikpLCBiKG4sIHksIHAsIGksIGMpLCB2IHx8IGsobiwgbCwgdSwgdCwgXCJmb3JlaWduT2JqZWN0XCIgIT09IGwudHlwZSAmJiBpLCBvLCBlLCByLCBjKSwgYyB8fCAoXCJ2YWx1ZVwiIGluIHkgJiYgdm9pZCAwICE9PSB5LnZhbHVlICYmIHkudmFsdWUgIT09IG4udmFsdWUgJiYgKG4udmFsdWUgPSBudWxsID09IHkudmFsdWUgPyBcIlwiIDogeS52YWx1ZSksIFwiY2hlY2tlZFwiIGluIHkgJiYgdm9pZCAwICE9PSB5LmNoZWNrZWQgJiYgeS5jaGVja2VkICE9PSBuLmNoZWNrZWQgJiYgKG4uY2hlY2tlZCA9IHkuY2hlY2tlZCkpKSwgbjtcbn1cblxuZnVuY3Rpb24gaihsLCB1LCB0KSB7XG4gIHRyeSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBsID8gbCh1KSA6IGwuY3VycmVudCA9IHU7XG4gIH0gY2F0Y2ggKGwpIHtcbiAgICBuLl9fZShsLCB0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB6KGwsIHUsIHQpIHtcbiAgdmFyIGksIHIsIGY7XG5cbiAgaWYgKG4udW5tb3VudCAmJiBuLnVubW91bnQobCksIChpID0gbC5yZWYpICYmIGooaSwgbnVsbCwgdSksIHQgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBsLnR5cGUgfHwgKHQgPSBudWxsICE9IChyID0gbC5fX2UpKSwgbC5fX2UgPSBsLmwgPSBudWxsLCBudWxsICE9IChpID0gbC5fX2MpKSB7XG4gICAgaWYgKGkuY29tcG9uZW50V2lsbFVubW91bnQpIHRyeSB7XG4gICAgICBpLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgfSBjYXRjaCAobCkge1xuICAgICAgbi5fX2UobCwgdSk7XG4gICAgfVxuICAgIGkuYmFzZSA9IGkuX19QID0gbnVsbDtcbiAgfVxuXG4gIGlmIChpID0gbC5fX2spIGZvciAoZiA9IDA7IGYgPCBpLmxlbmd0aDsgZisrKSBpW2ZdICYmIHooaVtmXSwgdSwgdCk7XG4gIG51bGwgIT0gciAmJiBjKHIpO1xufVxuXG5mdW5jdGlvbiBBKG4sIGwsIHUpIHtcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IobiwgdSk7XG59XG5cbmZ1bmN0aW9uIEQobCwgdSwgaSkge1xuICB2YXIgbywgZSwgYztcbiAgbi5fX3AgJiYgbi5fX3AobCwgdSksIGUgPSAobyA9IGkgPT09IHQpID8gbnVsbCA6IGkgJiYgaS5fX2sgfHwgdS5fX2ssIGwgPSBzKHYsIG51bGwsIFtsXSksIGMgPSBbXSwgTih1LCBvID8gdS5fX2sgPSBsIDogKGkgfHwgdSkuX19rID0gbCwgZSB8fCByLCByLCB2b2lkIDAgIT09IHUub3duZXJTVkdFbGVtZW50LCBpICYmICFvID8gW2ldIDogZSA/IG51bGwgOiBmLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSwgYywgITEsIGkgfHwgciwgbyksIFQoYywgbCk7XG59XG5cbmZ1bmN0aW9uIEgobiwgbCkge1xuICBEKG4sIGwsIHQpO1xufVxuXG5mdW5jdGlvbiBJKG4sIGwpIHtcbiAgcmV0dXJuIGwgPSBlKGUoe30sIG4ucHJvcHMpLCBsKSwgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgKGwuY2hpbGRyZW4gPSBmLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSksIGEobi50eXBlLCBsLCBsLmtleSB8fCBuLmtleSwgbC5yZWYgfHwgbi5yZWYpO1xufVxuXG5mdW5jdGlvbiBMKG4pIHtcbiAgdmFyIGwgPSB7fSxcbiAgICAgIHUgPSB7XG4gICAgX19jOiBcIl9fY0NcIiArIGkrKyxcbiAgICBfX3A6IG4sXG4gICAgQ29uc3VtZXI6IGZ1bmN0aW9uIENvbnN1bWVyKG4sIGwpIHtcbiAgICAgIHJldHVybiBuLmNoaWxkcmVuKGwpO1xuICAgIH0sXG4gICAgUHJvdmlkZXI6IGZ1bmN0aW9uIFByb3ZpZGVyKG4pIHtcbiAgICAgIHZhciB0LFxuICAgICAgICAgIGkgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0IHx8ICh0ID0gW10sIHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbFt1Ll9fY10gPSBpLCBsO1xuICAgICAgfSwgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0LnNvbWUoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICBsLl9fUCAmJiAobC5jb250ZXh0ID0gbi52YWx1ZSwgdyhsKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgdGhpcy5zdWIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0LnB1c2gobik7XG4gICAgICAgIHZhciBsID0gbi5jb21wb25lbnRXaWxsVW5tb3VudDtcblxuICAgICAgICBuLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQuc3BsaWNlKHQuaW5kZXhPZihuKSwgMSksIGwgJiYgbC5jYWxsKG4pO1xuICAgICAgICB9O1xuICAgICAgfSksIG4uY2hpbGRyZW47XG4gICAgfVxuICB9O1xuICByZXR1cm4gdS5Db25zdW1lci5jb250ZXh0VHlwZSA9IHUsIHU7XG59XG5cbm4gPSB7fSwgeS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAobiwgbCkge1xuICB2YXIgdSA9IHRoaXMuX19zICE9PSB0aGlzLnN0YXRlICYmIHRoaXMuX19zIHx8ICh0aGlzLl9fcyA9IGUoe30sIHRoaXMuc3RhdGUpKTtcbiAgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbiB8fCAobiA9IG4odSwgdGhpcy5wcm9wcykpKSAmJiBlKHUsIG4pLCBudWxsICE9IG4gJiYgdGhpcy5fX3YgJiYgKGwgJiYgdGhpcy5fX2gucHVzaChsKSwgdyh0aGlzKSk7XG59LCB5LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBsLFxuICAgICAgdSxcbiAgICAgIHQsXG4gICAgICBpID0gdGhpcy5fX3YsXG4gICAgICByID0gdGhpcy5fX3YuX19lLFxuICAgICAgZiA9IHRoaXMuX19QO1xuICBmICYmIChsID0gITEgIT09IG4sIHUgPSBbXSwgdCA9IE4oZiwgaSwgZSh7fSwgaSksIHRoaXMuX19uLCB2b2lkIDAgIT09IGYub3duZXJTVkdFbGVtZW50LCBudWxsLCB1LCBsLCBudWxsID09IHIgPyBkKGkpIDogciksIFQodSwgaSksIHQgIT0gciAmJiBtKGkpKSwgbiAmJiBuKCk7XG59LCB5LnByb3RvdHlwZS5yZW5kZXIgPSB2LCBsID0gW10sIHUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb21pc2UgPyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpIDogc2V0VGltZW91dCwgbi5fX2UgPSBmdW5jdGlvbiAobiwgbCwgdSkge1xuICBmb3IgKHZhciB0OyBsID0gbC5fX3A7KSBpZiAoKHQgPSBsLl9fYykgJiYgIXQuX19wKSB0cnkge1xuICAgIGlmICh0LmNvbnN0cnVjdG9yICYmIG51bGwgIT0gdC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IpIHQuc2V0U3RhdGUodC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpO2Vsc2Uge1xuICAgICAgaWYgKG51bGwgPT0gdC5jb21wb25lbnREaWRDYXRjaCkgY29udGludWU7XG4gICAgICB0LmNvbXBvbmVudERpZENhdGNoKG4pO1xuICAgIH1cbiAgICByZXR1cm4gdyh0Ll9fRSA9IHQpO1xuICB9IGNhdGNoIChsKSB7XG4gICAgbiA9IGw7XG4gIH1cblxuICB0aHJvdyBuO1xufSwgdCA9IHIsIGkgPSAwO1xuZXhwb3J0IHsgRCBhcyByZW5kZXIsIEggYXMgaHlkcmF0ZSwgcyBhcyBjcmVhdGVFbGVtZW50LCBzIGFzIGgsIHYgYXMgRnJhZ21lbnQsIGggYXMgY3JlYXRlUmVmLCB5IGFzIENvbXBvbmVudCwgSSBhcyBjbG9uZUVsZW1lbnQsIEwgYXMgY3JlYXRlQ29udGV4dCwgXyBhcyB0b0NoaWxkQXJyYXksIHogYXMgX3VubW91bnQsIG4gYXMgb3B0aW9ucyB9OyIsImltcG9ydCB7IG9wdGlvbnMgYXMgbiB9IGZyb20gXCJwcmVhY3RcIjtcbnZhciB0LFxuICAgIHIsXG4gICAgdSA9IFtdLFxuICAgIGkgPSBuLl9fcjtcblxubi5fX3IgPSBmdW5jdGlvbiAobikge1xuICBpICYmIGkobiksIHQgPSAwLCAociA9IG4uX19jKS5fX0ggJiYgKHIuX19ILnQgPSB3KHIuX19ILnQpKTtcbn07XG5cbnZhciBvID0gbi5kaWZmZWQ7XG5cbm4uZGlmZmVkID0gZnVuY3Rpb24gKG4pIHtcbiAgbyAmJiBvKG4pO1xuICB2YXIgdCA9IG4uX19jO1xuXG4gIGlmICh0KSB7XG4gICAgdmFyIHIgPSB0Ll9fSDtcbiAgICByICYmIChyLnUgPSB3KHIudSkpO1xuICB9XG59O1xuXG52YXIgZiA9IG4udW5tb3VudDtcblxuZnVuY3Rpb24gYyh0KSB7XG4gIG4uX19oICYmIG4uX19oKHIpO1xuICB2YXIgdSA9IHIuX19IIHx8IChyLl9fSCA9IHtcbiAgICBpOiBbXSxcbiAgICB0OiBbXSxcbiAgICB1OiBbXVxuICB9KTtcbiAgcmV0dXJuIHQgPj0gdS5pLmxlbmd0aCAmJiB1LmkucHVzaCh7fSksIHUuaVt0XTtcbn1cblxuZnVuY3Rpb24gZShuKSB7XG4gIHJldHVybiBhKHEsIG4pO1xufVxuXG5mdW5jdGlvbiBhKG4sIHUsIGkpIHtcbiAgdmFyIG8gPSBjKHQrKyk7XG4gIHJldHVybiBvLl9fYyB8fCAoby5fX2MgPSByLCBvLm8gPSBbaSA/IGkodSkgOiBxKG51bGwsIHUpLCBmdW5jdGlvbiAodCkge1xuICAgIHZhciByID0gbihvLm9bMF0sIHQpO1xuICAgIG8ub1swXSAhPT0gciAmJiAoby5vWzBdID0gciwgby5fX2Muc2V0U3RhdGUoe30pKTtcbiAgfV0pLCBvLm87XG59XG5cbmZ1bmN0aW9uIHYobiwgdSkge1xuICB2YXIgaSA9IGModCsrKTtcbiAgRihpLnYsIHUpICYmIChpLm8gPSBuLCBpLnYgPSB1LCByLl9fSC50LnB1c2goaSksIF8ocikpO1xufVxuXG5mdW5jdGlvbiBtKG4sIHUpIHtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIEYoaS52LCB1KSAmJiAoaS5vID0gbiwgaS52ID0gdSwgci5fX0gudS5wdXNoKGkpKTtcbn1cblxuZnVuY3Rpb24gcChuKSB7XG4gIHJldHVybiBzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogblxuICAgIH07XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gbChuLCByLCB1KSB7XG4gIHZhciBpID0gYyh0KyspO1xuICBGKGkudiwgdSkgJiYgKGkudiA9IHUsIG4gJiYgKG4uY3VycmVudCA9IHIoKSkpO1xufVxuXG5mdW5jdGlvbiBzKG4sIHIpIHtcbiAgdmFyIHUgPSBjKHQrKyk7XG4gIHJldHVybiBGKHUudiwgcikgPyAodS52ID0gciwgdS5tID0gbiwgdS5vID0gbigpKSA6IHUubztcbn1cblxuZnVuY3Rpb24gZChuLCB0KSB7XG4gIHJldHVybiBzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbjtcbiAgfSwgdCk7XG59XG5cbmZ1bmN0aW9uIHkobikge1xuICB2YXIgdSA9IHIuY29udGV4dFtuLl9fY107XG4gIGlmICghdSkgcmV0dXJuIG4uX19wO1xuICB2YXIgaSA9IGModCsrKTtcbiAgcmV0dXJuIG51bGwgPT0gaS5vICYmIChpLm8gPSAhMCwgdS5zdWIocikpLCB1LnByb3BzLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBUKHQsIHIpIHtcbiAgbi51c2VEZWJ1Z1ZhbHVlICYmIG4udXNlRGVidWdWYWx1ZShyID8gcih0KSA6IHQpO1xufVxuXG5uLnVubW91bnQgPSBmdW5jdGlvbiAobikge1xuICBmICYmIGYobik7XG4gIHZhciB0ID0gbi5fX2M7XG5cbiAgaWYgKHQpIHtcbiAgICB2YXIgciA9IHQuX19IO1xuICAgIHIgJiYgci5pLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuLnAgJiYgbi5wKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBfID0gZnVuY3Rpb24gXygpIHt9O1xuXG5mdW5jdGlvbiBnKCkge1xuICB1LnNvbWUoZnVuY3Rpb24gKG4pIHtcbiAgICBuLmwgPSAhMSwgbi5fX1AgJiYgKG4uX19ILnQgPSB3KG4uX19ILnQpKTtcbiAgfSksIHUgPSBbXTtcbn1cblxuZnVuY3Rpb24gdyhuKSB7XG4gIHJldHVybiBuLmZvckVhY2goQSksIG4uZm9yRWFjaChFKSwgW107XG59XG5cbmZ1bmN0aW9uIEEobikge1xuICBuLnAgJiYgbi5wKCk7XG59XG5cbmZ1bmN0aW9uIEUobikge1xuICB2YXIgdCA9IG4ubygpO1xuICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgKG4ucCA9IHQpO1xufVxuXG5mdW5jdGlvbiBGKG4sIHQpIHtcbiAgcmV0dXJuICFuIHx8IHQuc29tZShmdW5jdGlvbiAodCwgcikge1xuICAgIHJldHVybiB0ICE9PSBuW3JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcShuLCB0KSB7XG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyB0KG4pIDogdDtcbn1cblxuXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIChfID0gZnVuY3Rpb24gXyh0KSB7XG4gICF0LmwgJiYgKHQubCA9ICEwKSAmJiAxID09PSB1LnB1c2godCkgJiYgKG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiB0KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHIpLCBjYW5jZWxBbmltYXRpb25GcmFtZSh1KSwgc2V0VGltZW91dChuKTtcbiAgICB9LFxuICAgICAgICByID0gc2V0VGltZW91dCh0LCAxMDApLFxuICAgICAgICB1ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpO1xuICB9KShnKTtcbn0pO1xuZXhwb3J0IHsgZSBhcyB1c2VTdGF0ZSwgYSBhcyB1c2VSZWR1Y2VyLCB2IGFzIHVzZUVmZmVjdCwgbSBhcyB1c2VMYXlvdXRFZmZlY3QsIHAgYXMgdXNlUmVmLCBsIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsIHMgYXMgdXNlTWVtbywgZCBhcyB1c2VDYWxsYmFjaywgeSBhcyB1c2VDb250ZXh0LCBUIGFzIHVzZURlYnVnVmFsdWUgfTsiLCJ2YXIgY2hhcmFjdGVyTWFwID0ge1xuICBcIsOAXCI6IFwiQVwiLFxuICBcIsOBXCI6IFwiQVwiLFxuICBcIsOCXCI6IFwiQVwiLFxuICBcIsODXCI6IFwiQVwiLFxuICBcIsOEXCI6IFwiQVwiLFxuICBcIsOFXCI6IFwiQVwiLFxuICBcIuG6pFwiOiBcIkFcIixcbiAgXCLhuq5cIjogXCJBXCIsXG4gIFwi4bqyXCI6IFwiQVwiLFxuICBcIuG6tFwiOiBcIkFcIixcbiAgXCLhurZcIjogXCJBXCIsXG4gIFwiw4ZcIjogXCJBRVwiLFxuICBcIuG6plwiOiBcIkFcIixcbiAgXCLhurBcIjogXCJBXCIsXG4gIFwiyIJcIjogXCJBXCIsXG4gIFwiw4dcIjogXCJDXCIsXG4gIFwi4biIXCI6IFwiQ1wiLFxuICBcIsOIXCI6IFwiRVwiLFxuICBcIsOJXCI6IFwiRVwiLFxuICBcIsOKXCI6IFwiRVwiLFxuICBcIsOLXCI6IFwiRVwiLFxuICBcIuG6vlwiOiBcIkVcIixcbiAgXCLhuJZcIjogXCJFXCIsXG4gIFwi4buAXCI6IFwiRVwiLFxuICBcIuG4lFwiOiBcIkVcIixcbiAgXCLhuJxcIjogXCJFXCIsXG4gIFwiyIZcIjogXCJFXCIsXG4gIFwiw4xcIjogXCJJXCIsXG4gIFwiw41cIjogXCJJXCIsXG4gIFwiw45cIjogXCJJXCIsXG4gIFwiw49cIjogXCJJXCIsXG4gIFwi4biuXCI6IFwiSVwiLFxuICBcIsiKXCI6IFwiSVwiLFxuICBcIsOQXCI6IFwiRFwiLFxuICBcIsORXCI6IFwiTlwiLFxuICBcIsOSXCI6IFwiT1wiLFxuICBcIsOTXCI6IFwiT1wiLFxuICBcIsOUXCI6IFwiT1wiLFxuICBcIsOVXCI6IFwiT1wiLFxuICBcIsOWXCI6IFwiT1wiLFxuICBcIsOYXCI6IFwiT1wiLFxuICBcIuG7kFwiOiBcIk9cIixcbiAgXCLhuYxcIjogXCJPXCIsXG4gIFwi4bmSXCI6IFwiT1wiLFxuICBcIsiOXCI6IFwiT1wiLFxuICBcIsOZXCI6IFwiVVwiLFxuICBcIsOaXCI6IFwiVVwiLFxuICBcIsObXCI6IFwiVVwiLFxuICBcIsOcXCI6IFwiVVwiLFxuICBcIsOdXCI6IFwiWVwiLFxuICBcIsOgXCI6IFwiYVwiLFxuICBcIsOhXCI6IFwiYVwiLFxuICBcIsOiXCI6IFwiYVwiLFxuICBcIsOjXCI6IFwiYVwiLFxuICBcIsOkXCI6IFwiYVwiLFxuICBcIsOlXCI6IFwiYVwiLFxuICBcIuG6pVwiOiBcImFcIixcbiAgXCLhuq9cIjogXCJhXCIsXG4gIFwi4bqzXCI6IFwiYVwiLFxuICBcIuG6tVwiOiBcImFcIixcbiAgXCLhurdcIjogXCJhXCIsXG4gIFwiw6ZcIjogXCJhZVwiLFxuICBcIuG6p1wiOiBcImFcIixcbiAgXCLhurFcIjogXCJhXCIsXG4gIFwiyINcIjogXCJhXCIsXG4gIFwiw6dcIjogXCJjXCIsXG4gIFwi4biJXCI6IFwiY1wiLFxuICBcIsOoXCI6IFwiZVwiLFxuICBcIsOpXCI6IFwiZVwiLFxuICBcIsOqXCI6IFwiZVwiLFxuICBcIsOrXCI6IFwiZVwiLFxuICBcIuG6v1wiOiBcImVcIixcbiAgXCLhuJdcIjogXCJlXCIsXG4gIFwi4buBXCI6IFwiZVwiLFxuICBcIuG4lVwiOiBcImVcIixcbiAgXCLhuJ1cIjogXCJlXCIsXG4gIFwiyIdcIjogXCJlXCIsXG4gIFwiw6xcIjogXCJpXCIsXG4gIFwiw61cIjogXCJpXCIsXG4gIFwiw65cIjogXCJpXCIsXG4gIFwiw69cIjogXCJpXCIsXG4gIFwi4bivXCI6IFwiaVwiLFxuICBcIsiLXCI6IFwiaVwiLFxuICBcIsOwXCI6IFwiZFwiLFxuICBcIsOxXCI6IFwiblwiLFxuICBcIsOyXCI6IFwib1wiLFxuICBcIsOzXCI6IFwib1wiLFxuICBcIsO0XCI6IFwib1wiLFxuICBcIsO1XCI6IFwib1wiLFxuICBcIsO2XCI6IFwib1wiLFxuICBcIsO4XCI6IFwib1wiLFxuICBcIuG7kVwiOiBcIm9cIixcbiAgXCLhuY1cIjogXCJvXCIsXG4gIFwi4bmTXCI6IFwib1wiLFxuICBcIsiPXCI6IFwib1wiLFxuICBcIsO5XCI6IFwidVwiLFxuICBcIsO6XCI6IFwidVwiLFxuICBcIsO7XCI6IFwidVwiLFxuICBcIsO8XCI6IFwidVwiLFxuICBcIsO9XCI6IFwieVwiLFxuICBcIsO/XCI6IFwieVwiLFxuICBcIsSAXCI6IFwiQVwiLFxuICBcIsSBXCI6IFwiYVwiLFxuICBcIsSCXCI6IFwiQVwiLFxuICBcIsSDXCI6IFwiYVwiLFxuICBcIsSEXCI6IFwiQVwiLFxuICBcIsSFXCI6IFwiYVwiLFxuICBcIsSGXCI6IFwiQ1wiLFxuICBcIsSHXCI6IFwiY1wiLFxuICBcIsSIXCI6IFwiQ1wiLFxuICBcIsSJXCI6IFwiY1wiLFxuICBcIsSKXCI6IFwiQ1wiLFxuICBcIsSLXCI6IFwiY1wiLFxuICBcIsSMXCI6IFwiQ1wiLFxuICBcIsSNXCI6IFwiY1wiLFxuICBcIkPMhlwiOiBcIkNcIixcbiAgXCJjzIZcIjogXCJjXCIsXG4gIFwixI5cIjogXCJEXCIsXG4gIFwixI9cIjogXCJkXCIsXG4gIFwixJBcIjogXCJEXCIsXG4gIFwixJFcIjogXCJkXCIsXG4gIFwixJJcIjogXCJFXCIsXG4gIFwixJNcIjogXCJlXCIsXG4gIFwixJRcIjogXCJFXCIsXG4gIFwixJVcIjogXCJlXCIsXG4gIFwixJZcIjogXCJFXCIsXG4gIFwixJdcIjogXCJlXCIsXG4gIFwixJhcIjogXCJFXCIsXG4gIFwixJlcIjogXCJlXCIsXG4gIFwixJpcIjogXCJFXCIsXG4gIFwixJtcIjogXCJlXCIsXG4gIFwixJxcIjogXCJHXCIsXG4gIFwix7RcIjogXCJHXCIsXG4gIFwixJ1cIjogXCJnXCIsXG4gIFwix7VcIjogXCJnXCIsXG4gIFwixJ5cIjogXCJHXCIsXG4gIFwixJ9cIjogXCJnXCIsXG4gIFwixKBcIjogXCJHXCIsXG4gIFwixKFcIjogXCJnXCIsXG4gIFwixKJcIjogXCJHXCIsXG4gIFwixKNcIjogXCJnXCIsXG4gIFwixKRcIjogXCJIXCIsXG4gIFwixKVcIjogXCJoXCIsXG4gIFwixKZcIjogXCJIXCIsXG4gIFwixKdcIjogXCJoXCIsXG4gIFwi4biqXCI6IFwiSFwiLFxuICBcIuG4q1wiOiBcImhcIixcbiAgXCLEqFwiOiBcIklcIixcbiAgXCLEqVwiOiBcImlcIixcbiAgXCLEqlwiOiBcIklcIixcbiAgXCLEq1wiOiBcImlcIixcbiAgXCLErFwiOiBcIklcIixcbiAgXCLErVwiOiBcImlcIixcbiAgXCLErlwiOiBcIklcIixcbiAgXCLEr1wiOiBcImlcIixcbiAgXCLEsFwiOiBcIklcIixcbiAgXCLEsVwiOiBcImlcIixcbiAgXCLEslwiOiBcIklKXCIsXG4gIFwixLNcIjogXCJpalwiLFxuICBcIsS0XCI6IFwiSlwiLFxuICBcIsS1XCI6IFwialwiLFxuICBcIsS2XCI6IFwiS1wiLFxuICBcIsS3XCI6IFwia1wiLFxuICBcIuG4sFwiOiBcIktcIixcbiAgXCLhuLFcIjogXCJrXCIsXG4gIFwiS8yGXCI6IFwiS1wiLFxuICBcImvMhlwiOiBcImtcIixcbiAgXCLEuVwiOiBcIkxcIixcbiAgXCLEulwiOiBcImxcIixcbiAgXCLEu1wiOiBcIkxcIixcbiAgXCLEvFwiOiBcImxcIixcbiAgXCLEvVwiOiBcIkxcIixcbiAgXCLEvlwiOiBcImxcIixcbiAgXCLEv1wiOiBcIkxcIixcbiAgXCLFgFwiOiBcImxcIixcbiAgXCLFgVwiOiBcImxcIixcbiAgXCLFglwiOiBcImxcIixcbiAgXCLhuL5cIjogXCJNXCIsXG4gIFwi4bi/XCI6IFwibVwiLFxuICBcIk3MhlwiOiBcIk1cIixcbiAgXCJtzIZcIjogXCJtXCIsXG4gIFwixYNcIjogXCJOXCIsXG4gIFwixYRcIjogXCJuXCIsXG4gIFwixYVcIjogXCJOXCIsXG4gIFwixYZcIjogXCJuXCIsXG4gIFwixYdcIjogXCJOXCIsXG4gIFwixYhcIjogXCJuXCIsXG4gIFwixYlcIjogXCJuXCIsXG4gIFwiTsyGXCI6IFwiTlwiLFxuICBcIm7MhlwiOiBcIm5cIixcbiAgXCLFjFwiOiBcIk9cIixcbiAgXCLFjVwiOiBcIm9cIixcbiAgXCLFjlwiOiBcIk9cIixcbiAgXCLFj1wiOiBcIm9cIixcbiAgXCLFkFwiOiBcIk9cIixcbiAgXCLFkVwiOiBcIm9cIixcbiAgXCLFklwiOiBcIk9FXCIsXG4gIFwixZNcIjogXCJvZVwiLFxuICBcIlDMhlwiOiBcIlBcIixcbiAgXCJwzIZcIjogXCJwXCIsXG4gIFwixZRcIjogXCJSXCIsXG4gIFwixZVcIjogXCJyXCIsXG4gIFwixZZcIjogXCJSXCIsXG4gIFwixZdcIjogXCJyXCIsXG4gIFwixZhcIjogXCJSXCIsXG4gIFwixZlcIjogXCJyXCIsXG4gIFwiUsyGXCI6IFwiUlwiLFxuICBcInLMhlwiOiBcInJcIixcbiAgXCLIklwiOiBcIlJcIixcbiAgXCLIk1wiOiBcInJcIixcbiAgXCLFmlwiOiBcIlNcIixcbiAgXCLFm1wiOiBcInNcIixcbiAgXCLFnFwiOiBcIlNcIixcbiAgXCLFnVwiOiBcInNcIixcbiAgXCLFnlwiOiBcIlNcIixcbiAgXCLImFwiOiBcIlNcIixcbiAgXCLImVwiOiBcInNcIixcbiAgXCLFn1wiOiBcInNcIixcbiAgXCLFoFwiOiBcIlNcIixcbiAgXCLFoVwiOiBcInNcIixcbiAgXCLFolwiOiBcIlRcIixcbiAgXCLFo1wiOiBcInRcIixcbiAgXCLIm1wiOiBcInRcIixcbiAgXCLImlwiOiBcIlRcIixcbiAgXCLFpFwiOiBcIlRcIixcbiAgXCLFpVwiOiBcInRcIixcbiAgXCLFplwiOiBcIlRcIixcbiAgXCLFp1wiOiBcInRcIixcbiAgXCJUzIZcIjogXCJUXCIsXG4gIFwidMyGXCI6IFwidFwiLFxuICBcIsWoXCI6IFwiVVwiLFxuICBcIsWpXCI6IFwidVwiLFxuICBcIsWqXCI6IFwiVVwiLFxuICBcIsWrXCI6IFwidVwiLFxuICBcIsWsXCI6IFwiVVwiLFxuICBcIsWtXCI6IFwidVwiLFxuICBcIsWuXCI6IFwiVVwiLFxuICBcIsWvXCI6IFwidVwiLFxuICBcIsWwXCI6IFwiVVwiLFxuICBcIsWxXCI6IFwidVwiLFxuICBcIsWyXCI6IFwiVVwiLFxuICBcIsWzXCI6IFwidVwiLFxuICBcIsiWXCI6IFwiVVwiLFxuICBcIsiXXCI6IFwidVwiLFxuICBcIlbMhlwiOiBcIlZcIixcbiAgXCJ2zIZcIjogXCJ2XCIsXG4gIFwixbRcIjogXCJXXCIsXG4gIFwixbVcIjogXCJ3XCIsXG4gIFwi4bqCXCI6IFwiV1wiLFxuICBcIuG6g1wiOiBcIndcIixcbiAgXCJYzIZcIjogXCJYXCIsXG4gIFwieMyGXCI6IFwieFwiLFxuICBcIsW2XCI6IFwiWVwiLFxuICBcIsW3XCI6IFwieVwiLFxuICBcIsW4XCI6IFwiWVwiLFxuICBcIlnMhlwiOiBcIllcIixcbiAgXCJ5zIZcIjogXCJ5XCIsXG4gIFwixblcIjogXCJaXCIsXG4gIFwixbpcIjogXCJ6XCIsXG4gIFwixbtcIjogXCJaXCIsXG4gIFwixbxcIjogXCJ6XCIsXG4gIFwixb1cIjogXCJaXCIsXG4gIFwixb5cIjogXCJ6XCIsXG4gIFwixb9cIjogXCJzXCIsXG4gIFwixpJcIjogXCJmXCIsXG4gIFwixqBcIjogXCJPXCIsXG4gIFwixqFcIjogXCJvXCIsXG4gIFwixq9cIjogXCJVXCIsXG4gIFwixrBcIjogXCJ1XCIsXG4gIFwix41cIjogXCJBXCIsXG4gIFwix45cIjogXCJhXCIsXG4gIFwix49cIjogXCJJXCIsXG4gIFwix5BcIjogXCJpXCIsXG4gIFwix5FcIjogXCJPXCIsXG4gIFwix5JcIjogXCJvXCIsXG4gIFwix5NcIjogXCJVXCIsXG4gIFwix5RcIjogXCJ1XCIsXG4gIFwix5VcIjogXCJVXCIsXG4gIFwix5ZcIjogXCJ1XCIsXG4gIFwix5dcIjogXCJVXCIsXG4gIFwix5hcIjogXCJ1XCIsXG4gIFwix5lcIjogXCJVXCIsXG4gIFwix5pcIjogXCJ1XCIsXG4gIFwix5tcIjogXCJVXCIsXG4gIFwix5xcIjogXCJ1XCIsXG4gIFwi4buoXCI6IFwiVVwiLFxuICBcIuG7qVwiOiBcInVcIixcbiAgXCLhubhcIjogXCJVXCIsXG4gIFwi4bm5XCI6IFwidVwiLFxuICBcIse6XCI6IFwiQVwiLFxuICBcIse7XCI6IFwiYVwiLFxuICBcIse8XCI6IFwiQUVcIixcbiAgXCLHvVwiOiBcImFlXCIsXG4gIFwix75cIjogXCJPXCIsXG4gIFwix79cIjogXCJvXCIsXG4gIFwiw55cIjogXCJUSFwiLFxuICBcIsO+XCI6IFwidGhcIixcbiAgXCLhuZRcIjogXCJQXCIsXG4gIFwi4bmVXCI6IFwicFwiLFxuICBcIuG5pFwiOiBcIlNcIixcbiAgXCLhuaVcIjogXCJzXCIsXG4gIFwiWMyBXCI6IFwiWFwiLFxuICBcInjMgVwiOiBcInhcIixcbiAgXCLQg1wiOiBcItCTXCIsXG4gIFwi0ZNcIjogXCLQs1wiLFxuICBcItCMXCI6IFwi0JpcIixcbiAgXCLRnFwiOiBcItC6XCIsXG4gIFwiQcyLXCI6IFwiQVwiLFxuICBcImHMi1wiOiBcImFcIixcbiAgXCJFzItcIjogXCJFXCIsXG4gIFwiZcyLXCI6IFwiZVwiLFxuICBcIknMi1wiOiBcIklcIixcbiAgXCJpzItcIjogXCJpXCIsXG4gIFwix7hcIjogXCJOXCIsXG4gIFwix7lcIjogXCJuXCIsXG4gIFwi4buSXCI6IFwiT1wiLFxuICBcIuG7k1wiOiBcIm9cIixcbiAgXCLhuZBcIjogXCJPXCIsXG4gIFwi4bmRXCI6IFwib1wiLFxuICBcIuG7qlwiOiBcIlVcIixcbiAgXCLhu6tcIjogXCJ1XCIsXG4gIFwi4bqAXCI6IFwiV1wiLFxuICBcIuG6gVwiOiBcIndcIixcbiAgXCLhu7JcIjogXCJZXCIsXG4gIFwi4buzXCI6IFwieVwiLFxuICBcIsiAXCI6IFwiQVwiLFxuICBcIsiBXCI6IFwiYVwiLFxuICBcIsiEXCI6IFwiRVwiLFxuICBcIsiFXCI6IFwiZVwiLFxuICBcIsiIXCI6IFwiSVwiLFxuICBcIsiJXCI6IFwiaVwiLFxuICBcIsiMXCI6IFwiT1wiLFxuICBcIsiNXCI6IFwib1wiLFxuICBcIsiQXCI6IFwiUlwiLFxuICBcIsiRXCI6IFwiclwiLFxuICBcIsiUXCI6IFwiVVwiLFxuICBcIsiVXCI6IFwidVwiLFxuICBcIkLMjFwiOiBcIkJcIixcbiAgXCJizIxcIjogXCJiXCIsXG4gIFwixIzMo1wiOiBcIkNcIixcbiAgXCLEjcyjXCI6IFwiY1wiLFxuICBcIsOKzIxcIjogXCJFXCIsXG4gIFwiw6rMjFwiOiBcImVcIixcbiAgXCJGzIxcIjogXCJGXCIsXG4gIFwiZsyMXCI6IFwiZlwiLFxuICBcIsemXCI6IFwiR1wiLFxuICBcIsenXCI6IFwiZ1wiLFxuICBcIsieXCI6IFwiSFwiLFxuICBcIsifXCI6IFwiaFwiLFxuICBcIkrMjFwiOiBcIkpcIixcbiAgXCLHsFwiOiBcImpcIixcbiAgXCLHqFwiOiBcIktcIixcbiAgXCLHqVwiOiBcImtcIixcbiAgXCJNzIxcIjogXCJNXCIsXG4gIFwibcyMXCI6IFwibVwiLFxuICBcIlDMjFwiOiBcIlBcIixcbiAgXCJwzIxcIjogXCJwXCIsXG4gIFwiUcyMXCI6IFwiUVwiLFxuICBcInHMjFwiOiBcInFcIixcbiAgXCLFmMypXCI6IFwiUlwiLFxuICBcIsWZzKlcIjogXCJyXCIsXG4gIFwi4bmmXCI6IFwiU1wiLFxuICBcIuG5p1wiOiBcInNcIixcbiAgXCJWzIxcIjogXCJWXCIsXG4gIFwidsyMXCI6IFwidlwiLFxuICBcIlfMjFwiOiBcIldcIixcbiAgXCJ3zIxcIjogXCJ3XCIsXG4gIFwiWMyMXCI6IFwiWFwiLFxuICBcInjMjFwiOiBcInhcIixcbiAgXCJZzIxcIjogXCJZXCIsXG4gIFwiecyMXCI6IFwieVwiLFxuICBcIkHMp1wiOiBcIkFcIixcbiAgXCJhzKdcIjogXCJhXCIsXG4gIFwiQsynXCI6IFwiQlwiLFxuICBcImLMp1wiOiBcImJcIixcbiAgXCLhuJBcIjogXCJEXCIsXG4gIFwi4biRXCI6IFwiZFwiLFxuICBcIsioXCI6IFwiRVwiLFxuICBcIsipXCI6IFwiZVwiLFxuICBcIsaQzKdcIjogXCJFXCIsXG4gIFwiyZvMp1wiOiBcImVcIixcbiAgXCLhuKhcIjogXCJIXCIsXG4gIFwi4bipXCI6IFwiaFwiLFxuICBcIknMp1wiOiBcIklcIixcbiAgXCJpzKdcIjogXCJpXCIsXG4gIFwixpfMp1wiOiBcIklcIixcbiAgXCLJqMynXCI6IFwiaVwiLFxuICBcIk3Mp1wiOiBcIk1cIixcbiAgXCJtzKdcIjogXCJtXCIsXG4gIFwiT8ynXCI6IFwiT1wiLFxuICBcIm/Mp1wiOiBcIm9cIixcbiAgXCJRzKdcIjogXCJRXCIsXG4gIFwiccynXCI6IFwicVwiLFxuICBcIlXMp1wiOiBcIlVcIixcbiAgXCJ1zKdcIjogXCJ1XCIsXG4gIFwiWMynXCI6IFwiWFwiLFxuICBcInjMp1wiOiBcInhcIixcbiAgXCJazKdcIjogXCJaXCIsXG4gIFwiesynXCI6IFwielwiXG59O1xudmFyIGNoYXJzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyTWFwKS5qb2luKCd8Jyk7XG52YXIgYWxsQWNjZW50cyA9IG5ldyBSZWdFeHAoY2hhcnMsICdnJyk7XG52YXIgZmlyc3RBY2NlbnQgPSBuZXcgUmVnRXhwKGNoYXJzLCAnJyk7XG5cbnZhciByZW1vdmVBY2NlbnRzID0gZnVuY3Rpb24gcmVtb3ZlQWNjZW50cyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGFsbEFjY2VudHMsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBjaGFyYWN0ZXJNYXBbbWF0Y2hdO1xuICB9KTtcbn07XG5cbnZhciBoYXNBY2NlbnRzID0gZnVuY3Rpb24gaGFzQWNjZW50cyhzdHJpbmcpIHtcbiAgcmV0dXJuICEhc3RyaW5nLm1hdGNoKGZpcnN0QWNjZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlQWNjZW50cztcbm1vZHVsZS5leHBvcnRzLmhhcyA9IGhhc0FjY2VudHM7XG5tb2R1bGUuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmVBY2NlbnRzOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcGZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=