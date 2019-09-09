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
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13\" height=\"10\" viewBox=\"0 0 13 10\">\n  <path d=\"M7.659 0l-.828.9 3.732 3.493H0v1.218h10.565L6.831 9.105l.828.9 5.341-5z\"/>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/close.svg":
/*!*******************************!*\
  !*** ./assets/icon/close.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14.829\" height=\"14.828\" viewBox=\"0 0 14.829 14.828\">\n  <g fill=\"none\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n    <path data-name=\"Line 153\" d=\"M13.414 1.414l-12 12\"/>\n    <path data-name=\"Line 154\" d=\"M1.414 1.414l12 12\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/external.svg":
/*!**********************************!*\
  !*** ./assets/icon/external.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.264\" height=\"16.263\" viewBox=\"0 0 16.264 16.263\">\n  <path d=\"M5.416 3.776l.051 1.222 5.11-.169-7.47 7.47.861.86 7.47-7.47-.169 5.11 1.222.052.241-7.312z\"/>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/menu.svg":
/*!******************************!*\
  !*** ./assets/icon/menu.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"14\" viewBox=\"0 0 20 14\">\n  <g stroke-width=\"2\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n    <path d=\"M1 7h18M1 1h18M1 13h18\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/icon/search.svg":
/*!********************************!*\
  !*** ./assets/icon/search.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.811\" height=\"13.811\" viewBox=\"0 0 13.811 13.811\">\n  <g transform=\"translate(-2.25 -2.25)\" stroke-width=\"1.5\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n    <circle data-name=\"Ellipse 1\" cx=\"5.472\" cy=\"5.472\" r=\"5.472\" transform=\"translate(3 3)\"/>\n    <path data-name=\"Line 152\" d=\"M15 15l-2.296-2.296\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./assets/js/gluggi.ts":
/*!*****************************!*\
  !*** ./assets/js/gluggi.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mojave_mount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mojave/mount */ "./node_modules/mojave/mount/index.js");
/* harmony import */ var _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gluggi/sidebar */ "./assets/js/gluggi/sidebar.ts");
/* harmony import */ var _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gluggi/SidebarContent */ "./assets/js/gluggi/SidebarContent.tsx");



Object(mojave_mount__WEBPACK_IMPORTED_MODULE_0__["mount"])(".gluggi-sidebar", _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_1__["initSidebarVisibilityToggle"]);
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_0__["mount"])(".gluggi-sidebar-content-data", _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["SidebarContent"], {
  type: "jsx"
});

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
    class: "component-link ".concat(component.active ? " is-active" : ""),
    href: component.url
  }, component.active && icon(_icon_active_svg__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "component-name"
  }, showFullName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "component-type"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1Z2dpLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2FjdGl2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2V4dGVybmFsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9tZW51LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9TaWRlYmFyQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRjaC1zb3J0ZXIvZGlzdC9tYXRjaC1zb3J0ZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9tYW5pcHVsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL3RyYXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL21vdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvcG9seWZpbGwvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbW92ZS1hY2NlbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvZ2x1Z2dpLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjEwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTMgMTBcXFwiPlxcbiAgPHBhdGggZD1cXFwiTTcuNjU5IDBsLS44MjguOSAzLjczMiAzLjQ5M0gwdjEuMjE4aDEwLjU2NUw2LjgzMSA5LjEwNWwuODI4LjkgNS4zNDEtNXpcXFwiLz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNC44MjlcXFwiIGhlaWdodD1cXFwiMTQuODI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTQuODI5IDE0LjgyOFxcXCI+XFxuICA8ZyBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIj5cXG4gICAgPHBhdGggZGF0YS1uYW1lPVxcXCJMaW5lIDE1M1xcXCIgZD1cXFwiTTEzLjQxNCAxLjQxNGwtMTIgMTJcXFwiLz5cXG4gICAgPHBhdGggZGF0YS1uYW1lPVxcXCJMaW5lIDE1NFxcXCIgZD1cXFwiTTEuNDE0IDEuNDE0bDEyIDEyXFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTYuMjY0XFxcIiBoZWlnaHQ9XFxcIjE2LjI2M1xcXCIgdmlld0JveD1cXFwiMCAwIDE2LjI2NCAxNi4yNjNcXFwiPlxcbiAgPHBhdGggZD1cXFwiTTUuNDE2IDMuNzc2bC4wNTEgMS4yMjIgNS4xMS0uMTY5LTcuNDcgNy40Ny44NjEuODYgNy40Ny03LjQ3LS4xNjkgNS4xMSAxLjIyMi4wNTIuMjQxLTcuMzEyelxcXCIvPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMTRcXFwiPlxcbiAgPGcgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+XFxuICAgIDxwYXRoIGQ9XFxcIk0xIDdoMThNMSAxaDE4TTEgMTNoMThcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxMy44MTFcXFwiIGhlaWdodD1cXFwiMTMuODExXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTMuODExIDEzLjgxMVxcXCI+XFxuICA8ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMi4yNSAtMi4yNSlcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+XFxuICAgIDxjaXJjbGUgZGF0YS1uYW1lPVxcXCJFbGxpcHNlIDFcXFwiIGN4PVxcXCI1LjQ3MlxcXCIgY3k9XFxcIjUuNDcyXFxcIiByPVxcXCI1LjQ3MlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMyAzKVxcXCIvPlxcbiAgICA8cGF0aCBkYXRhLW5hbWU9XFxcIkxpbmUgMTUyXFxcIiBkPVxcXCJNMTUgMTVsLTIuMjk2LTIuMjk2XFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJpbXBvcnQgeyBtb3VudCB9IGZyb20gXCJtb2phdmUvbW91bnRcIjtcbmltcG9ydCB7IGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZSB9IGZyb20gXCIuL2dsdWdnaS9zaWRlYmFyXCI7XG5pbXBvcnQgeyBTaWRlYmFyQ29udGVudCB9IGZyb20gXCIuL2dsdWdnaS9TaWRlYmFyQ29udGVudFwiO1xubW91bnQoXCIuZ2x1Z2dpLXNpZGViYXJcIiwgaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlKTtcbm1vdW50KFwiLmdsdWdnaS1zaWRlYmFyLWNvbnRlbnQtZGF0YVwiLCBTaWRlYmFyQ29udGVudCwge1xuICB0eXBlOiBcImpzeFwiXG59KTsiLCJpbXBvcnQgeyBoLCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IGFycm93SWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9hY3RpdmUuc3ZnXCI7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgZXh0ZXJuYWxJY29uIGZyb20gXCIuLi8uLi9pY29uL2V4dGVybmFsLnN2Z1wiO1xuaW1wb3J0IG1hdGNoU29ydGVyIGZyb20gJ21hdGNoLXNvcnRlcic7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgbGV0IHNob3dGdWxsTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHJldHVybiBoKFwibGlcIiwgbnVsbCwgaChcImFcIiwge1xuICAgIGNsYXNzOiBcImNvbXBvbmVudC1saW5rIFwiLmNvbmNhdChjb21wb25lbnQuYWN0aXZlID8gXCIgaXMtYWN0aXZlXCIgOiBcIlwiKSxcbiAgICBocmVmOiBjb21wb25lbnQudXJsXG4gIH0sIGNvbXBvbmVudC5hY3RpdmUgJiYgaWNvbihhcnJvd0ljb24pLCBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiY29tcG9uZW50LW5hbWVcIlxuICB9LCBzaG93RnVsbE5hbWUgJiYgaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImNvbXBvbmVudC10eXBlXCJcbiAgfSwgY29tcG9uZW50LnR5cGUpLCBcIiBcIi5jb25jYXQoY29tcG9uZW50Lm5hbWUpLCBcInBhZ2VcIiA9PT0gY29tcG9uZW50LnR5cGUgPyBpY29uKGV4dGVybmFsSWNvbikgOiBcIlwiKSkpO1xufVxuXG5mdW5jdGlvbiBpY29uKGljb25TdmcpIHtcbiAgcmV0dXJuIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktaWNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6IGljb25TdmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBHbHVnZ2lUeXBlKHByb3BzKSB7XG4gIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50XCJcbiAgfSwgaChcImgyXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LXRpdGxlXCJcbiAgfSwgcHJvcHMudHlwZS50aXRsZSksIHByb3BzLnR5cGUuY29tcG9uZW50cy5sZW5ndGggPiAwID8gaChcInVsXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LWxpc3RcIlxuICB9LCBwcm9wcy50eXBlLmNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAhIXByb3BzLnNob3dGdWxsTmFtZSkpKSA6IGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtZW1wdHlcIlxuICB9LCBwcm9wcy5lbXB0eVRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJDb250ZW50KHByb3BzKSB7XG4gIGxldCBjb250ZW50ID0gW2goXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1lbXB0eVwiXG4gIH0sIFwiVGhlcmUgYXJlIG5vIGNvbXBvbmVudHMuXCIpXTtcblxuICBpZiAocHJvcHMudHlwZXMubGVuZ3RoKSB7XG4gICAgbGV0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IHNlYXJjaCA9IG51bGw7XG5cbiAgICBpZiAoXCJcIiAhPT0gcXVlcnkudHJpbSgpKSB7XG4gICAgICBzZWFyY2ggPSB7XG4gICAgICAgIHRpdGxlOiBcIlNlYXJjaCByZXN1bHRzXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IG1hdGNoU29ydGVyKGZsYXR0ZW5UeXBlcyhwcm9wcy50eXBlcyksIHF1ZXJ5LnRyaW0oKSwge1xuICAgICAgICAgIGtleXM6IFtcIm5hbWVcIl1cbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29udGVudCA9IFtoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1zZWFyY2hcIlxuICAgIH0sIGgoXCJsYWJlbFwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktc2VhcmNoLXdpZGdldFwiXG4gICAgfSwgaChcImlucHV0XCIsIHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgaWQ6IFwiY29tcG9uZW50LWZpbHRlclwiLFxuICAgICAgdmFsdWU6IHF1ZXJ5LFxuICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICBvbklucHV0OiBlID0+IHNldFF1ZXJ5KGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICB9KSwgaWNvbihzZWFyY2hJY29uKSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnRzXCJcbiAgICB9LCBzZWFyY2ggPyBoKEdsdWdnaVR5cGUsIHtcbiAgICAgIHR5cGU6IHNlYXJjaCxcbiAgICAgIHNob3dGdWxsTmFtZTogdHJ1ZSxcbiAgICAgIGVtcHR5VGV4dDogXCJObyBtYXRjaGVzXCJcbiAgICB9KSA6IHByb3BzLnR5cGVzLm1hcCh0eXBlID0+IGgoR2x1Z2dpVHlwZSwge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0pKSldO1xuICB9XG5cbiAgcmV0dXJuIGgoRnJhZ21lbnQsIG51bGwsIGgoXCJoMVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXRpdGxlXCJcbiAgfSwgcHJvcHMudGl0bGUpLCBjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblR5cGVzKHR5cGVzKSB7XG4gIGxldCBmbGF0dGVuZWQgPSBbXTtcbiAgdHlwZXMuZm9yRWFjaCh0eXBlID0+IHR5cGUuY29tcG9uZW50cy5mb3JFYWNoKGMgPT4gZmxhdHRlbmVkLnB1c2goYykpKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn0iLCJpbXBvcnQgeyBvbiB9IGZyb20gXCJtb2phdmUvZG9tL2V2ZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlVW5zdHlsZWRFbGVtZW50LCBwcmVwZW5kIH0gZnJvbSBcIm1vamF2ZS9kb20vbWFuaXB1bGF0ZVwiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9jbG9zZS5zdmdcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9tZW51LnN2Z1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZShzaWRlYmFyKSB7XG4gIGxldCBjbG9zZSA9IGNyZWF0ZVVuc3R5bGVkRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXNpZGViYXItY2xvc2VcIixcbiAgICBodG1sOiBjbG9zZUljb25cbiAgfSk7XG4gIGxldCBvcGVuID0gY3JlYXRlVW5zdHlsZWRFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktc2lkZWJhci1vcGVuXCIsXG4gICAgaHRtbDogbWVudUljb25cbiAgfSk7XG4gIHByZXBlbmQoc2lkZWJhciwgY2xvc2UpO1xuICBwcmVwZW5kKHNpZGViYXIucGFyZW50RWxlbWVudCwgb3Blbik7XG4gIGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgb24oY2xvc2UsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICBvcGVuLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgIHZpc2libGUgPSBmYWxzZTtcbiAgfSk7XG4gIG9uKG9wZW4sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcbiAgICBvcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xuICAgIHZpc2libGUgPSB0cnVlO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCByZW1vdmVBY2NlbnRzIGZyb20gJ3JlbW92ZS1hY2NlbnRzJztcbnZhciByYW5raW5ncyA9IHtcbiAgQ0FTRV9TRU5TSVRJVkVfRVFVQUw6IDksXG4gIEVRVUFMOiA4LFxuICBTVEFSVFNfV0lUSDogNyxcbiAgV09SRF9TVEFSVFNfV0lUSDogNixcbiAgU1RSSU5HX0NBU0U6IDUsXG4gIFNUUklOR19DQVNFX0FDUk9OWU06IDQsXG4gIENPTlRBSU5TOiAzLFxuICBBQ1JPTllNOiAyLFxuICBNQVRDSEVTOiAxLFxuICBOT19NQVRDSDogMFxufTtcbnZhciBjYXNlUmFua2luZ3MgPSB7XG4gIENBTUVMOiAwLjgsXG4gIFBBU0NBTDogMC42LFxuICBLRUJBQjogMC40LFxuICBTTkFLRTogMC4yLFxuICBOT19DQVNFOiAwXG59O1xubWF0Y2hTb3J0ZXIucmFua2luZ3MgPSByYW5raW5ncztcbm1hdGNoU29ydGVyLmNhc2VSYW5raW5ncyA9IGNhc2VSYW5raW5ncztcbi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgaXRlbXMgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgaXRlbXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gdGhlIGl0ZW1zIHRvIHNvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byB1c2UgZm9yIHJhbmtpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU29tZSBvcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgc29ydGVyXG4gKiBAcmV0dXJuIHtBcnJheX0gLSB0aGUgbmV3IHNvcnRlZCBhcnJheVxuICovXG5cbmZ1bmN0aW9uIG1hdGNoU29ydGVyKGl0ZW1zLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIG5vdCBwZXJmb3JtaW5nIGFueSBzZWFyY2gvc29ydCBpZiB2YWx1ZShzZWFyY2ggdGVybSkgaXMgZW1wdHlcblxuXG4gIGlmICghdmFsdWUpIHJldHVybiBpdGVtcztcbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIGtleXMgPSBfb3B0aW9ucy5rZXlzLFxuICAgICAgX29wdGlvbnMkdGhyZXNob2xkID0gX29wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMkdGhyZXNob2xkID09PSB2b2lkIDAgPyByYW5raW5ncy5NQVRDSEVTIDogX29wdGlvbnMkdGhyZXNob2xkO1xuICB2YXIgbWF0Y2hlZEl0ZW1zID0gaXRlbXMucmVkdWNlKHJlZHVjZUl0ZW1zVG9SYW5rZWQsIFtdKTtcbiAgcmV0dXJuIG1hdGNoZWRJdGVtcy5zb3J0KHNvcnRSYW5rZWRJdGVtcykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW07XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZUl0ZW1zVG9SYW5rZWQobWF0Y2hlcywgaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgX2dldEhpZ2hlc3RSYW5raW5nID0gZ2V0SGlnaGVzdFJhbmtpbmcoaXRlbSwga2V5cywgdmFsdWUsIG9wdGlvbnMpLFxuICAgICAgICByYW5rZWRJdGVtID0gX2dldEhpZ2hlc3RSYW5raW5nLnJhbmtlZEl0ZW0sXG4gICAgICAgIHJhbmsgPSBfZ2V0SGlnaGVzdFJhbmtpbmcucmFuayxcbiAgICAgICAga2V5SW5kZXggPSBfZ2V0SGlnaGVzdFJhbmtpbmcua2V5SW5kZXgsXG4gICAgICAgIF9nZXRIaWdoZXN0UmFua2luZyRrZSA9IF9nZXRIaWdoZXN0UmFua2luZy5rZXlUaHJlc2hvbGQsXG4gICAgICAgIGtleVRocmVzaG9sZCA9IF9nZXRIaWdoZXN0UmFua2luZyRrZSA9PT0gdm9pZCAwID8gdGhyZXNob2xkIDogX2dldEhpZ2hlc3RSYW5raW5nJGtlO1xuXG4gICAgaWYgKHJhbmsgPj0ga2V5VGhyZXNob2xkKSB7XG4gICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICByYW5rZWRJdGVtOiByYW5rZWRJdGVtLFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICByYW5rOiByYW5rLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGtleUluZGV4OiBrZXlJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbi8qKlxuICogR2V0cyB0aGUgaGlnaGVzdCByYW5raW5nIGZvciB2YWx1ZSBmb3IgdGhlIGdpdmVuIGl0ZW0gYmFzZWQgb24gaXRzIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGtleXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBpdGVtIHRvIHJhbmtcbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgLSB0aGUga2V5cyB0byBnZXQgdmFsdWVzIGZyb20gdGhlIGl0ZW0gZm9yIHRoZSByYW5raW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gcmFuayBhZ2FpbnN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdG8gY29udHJvbCB0aGUgcmFua2luZ1xuICogQHJldHVybiB7e3Jhbms6IE51bWJlciwga2V5SW5kZXg6IE51bWJlciwga2V5VGhyZXNob2xkOiBOdW1iZXJ9fSAtIHRoZSBoaWdoZXN0IHJhbmtpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEhpZ2hlc3RSYW5raW5nKGl0ZW0sIGtleXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICgha2V5cykge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBlbmRzIHVwIGJlaW5nIGR1cGxpY2F0ZSBvZiAnaXRlbScgaW4gbWF0Y2hlcyBidXQgY29uc2lzdGVudFxuICAgICAgcmFua2VkSXRlbTogaXRlbSxcbiAgICAgIHJhbms6IGdldE1hdGNoUmFua2luZyhpdGVtLCB2YWx1ZSwgb3B0aW9ucyksXG4gICAgICBrZXlJbmRleDogLTEsXG4gICAgICBrZXlUaHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkXG4gICAgfTtcbiAgfVxuXG4gIHZhciB2YWx1ZXNUb1JhbmsgPSBnZXRBbGxWYWx1ZXNUb1JhbmsoaXRlbSwga2V5cyk7XG4gIHJldHVybiB2YWx1ZXNUb1JhbmsucmVkdWNlKGZ1bmN0aW9uIChfcmVmMiwgX3JlZjMsIGkpIHtcbiAgICB2YXIgcmFuayA9IF9yZWYyLnJhbmssXG4gICAgICAgIGtleUluZGV4ID0gX3JlZjIua2V5SW5kZXgsXG4gICAgICAgIGtleVRocmVzaG9sZCA9IF9yZWYyLmtleVRocmVzaG9sZDtcbiAgICB2YXIgaXRlbVZhbHVlID0gX3JlZjMuaXRlbVZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZjMuYXR0cmlidXRlcztcbiAgICB2YXIgbmV3UmFuayA9IGdldE1hdGNoUmFua2luZyhpdGVtVmFsdWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB2YXIgbWluUmFua2luZyA9IGF0dHJpYnV0ZXMubWluUmFua2luZyxcbiAgICAgICAgbWF4UmFua2luZyA9IGF0dHJpYnV0ZXMubWF4UmFua2luZyxcbiAgICAgICAgdGhyZXNob2xkID0gYXR0cmlidXRlcy50aHJlc2hvbGQ7XG5cbiAgICBpZiAobmV3UmFuayA8IG1pblJhbmtpbmcgJiYgbmV3UmFuayA+PSByYW5raW5ncy5NQVRDSEVTKSB7XG4gICAgICBuZXdSYW5rID0gbWluUmFua2luZztcbiAgICB9IGVsc2UgaWYgKG5ld1JhbmsgPiBtYXhSYW5raW5nKSB7XG4gICAgICBuZXdSYW5rID0gbWF4UmFua2luZztcbiAgICB9XG5cbiAgICBpZiAobmV3UmFuayA+IHJhbmspIHtcbiAgICAgIHJhbmsgPSBuZXdSYW5rO1xuICAgICAga2V5SW5kZXggPSBpO1xuICAgICAga2V5VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByYW5rZWRJdGVtOiBpdGVtVmFsdWUsXG4gICAgICByYW5rOiByYW5rLFxuICAgICAga2V5SW5kZXg6IGtleUluZGV4LFxuICAgICAga2V5VGhyZXNob2xkOiBrZXlUaHJlc2hvbGRcbiAgICB9O1xuICB9LCB7XG4gICAgcmFuazogcmFua2luZ3MuTk9fTUFUQ0gsXG4gICAga2V5SW5kZXg6IC0xLFxuICAgIGtleVRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGRcbiAgfSk7XG59XG4vKipcbiAqIEdpdmVzIGEgcmFua2luZ3Mgc2NvcmUgYmFzZWQgb24gaG93IHdlbGwgdGhlIHR3byBzdHJpbmdzIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciB0aGUgbWF0Y2ggKGxpa2Uga2VlcERpYWNyaXRpY3MgZm9yIGNvbXBhcmlzb24pXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmFua2luZyBmb3IgaG93IHdlbGwgc3RyaW5nVG9SYW5rIG1hdGNoZXMgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0TWF0Y2hSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgb3B0aW9ucykge1xuICAvKiBlc2xpbnQgY29tcGxleGl0eTpbMiwgMTJdICovXG4gIHRlc3RTdHJpbmcgPSBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHRlc3RTdHJpbmcsIG9wdGlvbnMpO1xuICBzdHJpbmdUb1JhbmsgPSBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHN0cmluZ1RvUmFuaywgb3B0aW9ucyk7IC8vIHRvbyBsb25nXG5cbiAgaWYgKHN0cmluZ1RvUmFuay5sZW5ndGggPiB0ZXN0U3RyaW5nLmxlbmd0aCkge1xuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfSAvLyBjYXNlIHNlbnNpdGl2ZSBlcXVhbHNcblxuXG4gIGlmICh0ZXN0U3RyaW5nID09PSBzdHJpbmdUb1JhbmspIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQ0FTRV9TRU5TSVRJVkVfRVFVQUw7XG4gIH1cblxuICB2YXIgY2FzZVJhbmsgPSBnZXRDYXNlUmFua2luZyh0ZXN0U3RyaW5nKTtcbiAgdmFyIGlzUGFydGlhbCA9IGlzUGFydGlhbE9mQ2FzZSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKTtcbiAgdmFyIGlzQ2FzZWRBY3JvbnltID0gaXNDYXNlQWNyb255bSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKTsgLy8gTG93ZXIgY2FzaW5nIGJlZm9yZSBmdXJ0aGVyIGNvbXBhcmlzb25cblxuICB0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICBzdHJpbmdUb1JhbmsgPSBzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKTsgLy8gY2FzZSBpbnNlbnNpdGl2ZSBlcXVhbHNcblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkVRVUFMICsgY2FzZVJhbms7XG4gIH0gLy8gc3RhcnRzIHdpdGhcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSA9PT0gMCkge1xuICAgIHJldHVybiByYW5raW5ncy5TVEFSVFNfV0lUSCArIGNhc2VSYW5rO1xuICB9IC8vIHdvcmQgc3RhcnRzIHdpdGhcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2YoXCIgXCIgKyBzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5XT1JEX1NUQVJUU19XSVRIICsgY2FzZVJhbms7XG4gIH0gLy8gaXMgYSBwYXJ0IGluc2lkZSBhIGNhc2VkIHN0cmluZ1xuXG5cbiAgaWYgKGlzUGFydGlhbCkge1xuICAgIHJldHVybiByYW5raW5ncy5TVFJJTkdfQ0FTRSArIGNhc2VSYW5rO1xuICB9IC8vIGlzIGFjcm9ueW0gZm9yIGEgY2FzZWQgc3RyaW5nXG5cblxuICBpZiAoY2FzZVJhbmsgPiAwICYmIGlzQ2FzZWRBY3JvbnltKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLlNUUklOR19DQVNFX0FDUk9OWU0gKyBjYXNlUmFuaztcbiAgfSAvLyBjb250YWluc1xuXG5cbiAgaWYgKHRlc3RTdHJpbmcuaW5kZXhPZihzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5DT05UQUlOUyArIGNhc2VSYW5rO1xuICB9IGVsc2UgaWYgKHN0cmluZ1RvUmFuay5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBJZiB0aGUgb25seSBjaGFyYWN0ZXIgaW4gdGhlIGdpdmVuIHN0cmluZ1RvUmFua1xuICAgIC8vICAgaXNuJ3QgZXZlbiBjb250YWluZWQgaW4gdGhlIHRlc3RTdHJpbmcsIHRoZW5cbiAgICAvLyAgIGl0J3MgZGVmaW5pdGVseSBub3QgYSBtYXRjaC5cbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH0gLy8gYWNyb255bVxuXG5cbiAgaWYgKGdldEFjcm9ueW0odGVzdFN0cmluZykuaW5kZXhPZihzdHJpbmdUb1JhbmspICE9PSAtMSkge1xuICAgIHJldHVybiByYW5raW5ncy5BQ1JPTllNICsgY2FzZVJhbms7XG4gIH0gLy8gd2lsbCByZXR1cm4gYSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICAvLyByYW5raW5ncy5NQVRDSEVTICsgMSBkZXBlbmRpbmcgIG9uIGhvdyBjbG9zZSBvZiBhIG1hdGNoIGl0IGlzLlxuXG5cbiAgcmV0dXJuIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFjcm9ueW0gZm9yIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyBmb3Igd2hpY2ggdG8gcHJvZHVjZSB0aGUgYWNyb255bVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGFjcm9ueW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEFjcm9ueW0oc3RyaW5nKSB7XG4gIHZhciBhY3JvbnltID0gJyc7XG4gIHZhciB3b3Jkc0luU3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJyk7XG4gIHdvcmRzSW5TdHJpbmcuZm9yRWFjaChmdW5jdGlvbiAod29yZEluU3RyaW5nKSB7XG4gICAgdmFyIHNwbGl0QnlIeXBoZW5Xb3JkcyA9IHdvcmRJblN0cmluZy5zcGxpdCgnLScpO1xuICAgIHNwbGl0QnlIeXBoZW5Xb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChzcGxpdEJ5SHlwaGVuV29yZCkge1xuICAgICAgYWNyb255bSArPSBzcGxpdEJ5SHlwaGVuV29yZC5zdWJzdHIoMCwgMSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYWNyb255bTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHNjb3JlIGJhc2Ugb24gdGhlIGNhc2Ugb2YgdGhlIHRlc3RTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgdGhlIHJhbmtpbmcsXG4gKiBiYXNlZCBvbiB0aGUgY2FzZSBiZXR3ZWVuIDAgYW5kIDEgZm9yIGhvdyB0aGUgdGVzdFN0cmluZyBtYXRjaGVzIHRoZSBjYXNlXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDYXNlUmFua2luZyh0ZXN0U3RyaW5nKSB7XG4gIHZhciBjb250YWluc1VwcGVyQ2FzZSA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKSAhPT0gdGVzdFN0cmluZztcbiAgdmFyIGNvbnRhaW5zRGFzaCA9IHRlc3RTdHJpbmcuaW5kZXhPZignLScpID49IDA7XG4gIHZhciBjb250YWluc1VuZGVyc2NvcmUgPSB0ZXN0U3RyaW5nLmluZGV4T2YoJ18nKSA+PSAwO1xuXG4gIGlmICghY29udGFpbnNVcHBlckNhc2UgJiYgIWNvbnRhaW5zVW5kZXJzY29yZSAmJiBjb250YWluc0Rhc2gpIHtcbiAgICByZXR1cm4gY2FzZVJhbmtpbmdzLktFQkFCO1xuICB9XG5cbiAgaWYgKCFjb250YWluc1VwcGVyQ2FzZSAmJiBjb250YWluc1VuZGVyc2NvcmUgJiYgIWNvbnRhaW5zRGFzaCkge1xuICAgIHJldHVybiBjYXNlUmFua2luZ3MuU05BS0U7XG4gIH1cblxuICBpZiAoY29udGFpbnNVcHBlckNhc2UgJiYgIWNvbnRhaW5zRGFzaCAmJiAhY29udGFpbnNVbmRlcnNjb3JlKSB7XG4gICAgdmFyIHN0YXJ0c1dpdGhVcHBlckNhc2UgPSB0ZXN0U3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgPT09IHRlc3RTdHJpbmdbMF07XG5cbiAgICBpZiAoc3RhcnRzV2l0aFVwcGVyQ2FzZSkge1xuICAgICAgcmV0dXJuIGNhc2VSYW5raW5ncy5QQVNDQUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhc2VSYW5raW5ncy5DQU1FTDtcbiAgfVxuXG4gIHJldHVybiBjYXNlUmFua2luZ3MuTk9fQ0FTRTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBzdHJpbmdUb1JhbmsgaXMgb25lIG9mIHRoZSBjYXNlIHBhcnRzIGluIHRoZSB0ZXN0U3RyaW5nICh3b3JrcyB3aXRoIGFueSBzdHJpbmcgY2FzZSlcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIGlzUGFydGlhbE9mQ2FzZSgnaGVsbG9Xb3JsZCcsICd3b3JsZCcsIGNhc2VSYW5raW5ncy5DQU1FTClcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIGZhbHNlXG4gKiBpc1BhcnRpYWxPZkNhc2UoJ2hlbGxvV29ybGQnLCAnb3dvcmwnLCBjYXNlUmFua2luZ3MuQ0FNRUwpXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nVG9SYW5rIC0gdGhlIHN0cmluZyB0byByYW5rXG4gKiBAcGFyYW0ge051bWJlcn0gY2FzZVJhbmtpbmcgLSB0aGUgcmFua2luZyBzY29yZSBiYXNlZCBvbiBjYXNlIG9mIHRlc3RTdHJpbmdcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZSBzdHJpbmdUb1JhbmsgaXMgb25lIG9mIHRoZSBjYXNlIHBhcnRzIGluIHRoZSB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBpc1BhcnRpYWxPZkNhc2UodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFua2luZykge1xuICB2YXIgdGVzdEluZGV4ID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyaW5nVG9SYW5rLnRvTG93ZXJDYXNlKCkpO1xuXG4gIHN3aXRjaCAoY2FzZVJhbmtpbmcpIHtcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5TTkFLRTpcbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nW3Rlc3RJbmRleCAtIDFdID09PSAnXyc7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5LRUJBQjpcbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nW3Rlc3RJbmRleCAtIDFdID09PSAnLSc7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5QQVNDQUw6XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuQ0FNRUw6XG4gICAgICByZXR1cm4gdGVzdEluZGV4ICE9PSAtMSAmJiB0ZXN0U3RyaW5nW3Rlc3RJbmRleF0gPT09IHRlc3RTdHJpbmdbdGVzdEluZGV4XS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuLyoqXG4gKiBDaGVjayBpZiBzdHJpbmdUb1JhbmsgaXMgYW4gYWNyb255bSBmb3IgYSBwYXJ0aWFsIGNhc2VcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIGlzQ2FzZUFjcm9ueW0oJ3N1cGVyX2R1cGVyX2ZpbGUnLCAnc2RmJywgY2FzZVJhbmtpbmdzLlNOQUtFKVxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBhY3JvbnltIHRvIHRlc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBjYXNlUmFuayAtIHRoZSByYW5raW5nIG9mIHRoZSBjYXNlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIGFuIGFjcm9ueW0gZm9yIHRoZSB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBpc0Nhc2VBY3JvbnltKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmspIHtcbiAgdmFyIHNwbGl0VmFsdWUgPSBudWxsO1xuXG4gIHN3aXRjaCAoY2FzZVJhbmspIHtcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5TTkFLRTpcbiAgICAgIHNwbGl0VmFsdWUgPSAnXyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLktFQkFCOlxuICAgICAgc3BsaXRWYWx1ZSA9ICctJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuUEFTQ0FMOlxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLkNBTUVMOlxuICAgICAgc3BsaXRWYWx1ZSA9IC8oPz1bQS1aXSkvO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3BsaXRWYWx1ZSA9IG51bGw7XG4gIH1cblxuICB2YXIgc3BsaXRUZXN0U3RyaW5nID0gdGVzdFN0cmluZy5zcGxpdChzcGxpdFZhbHVlKTtcbiAgcmV0dXJuIHN0cmluZ1RvUmFuay50b0xvd2VyQ2FzZSgpLnNwbGl0KCcnKS5yZWR1Y2UoZnVuY3Rpb24gKGNvcnJlY3QsIGNoYXIsIGNoYXJJbmRleCkge1xuICAgIHZhciBzcGxpdEl0ZW0gPSBzcGxpdFRlc3RTdHJpbmdbY2hhckluZGV4XTtcbiAgICByZXR1cm4gY29ycmVjdCAmJiBzcGxpdEl0ZW0gJiYgc3BsaXRJdGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09IGNoYXI7XG4gIH0sIHRydWUpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc2NvcmUgYmFzZWQgb24gaG93IHNwcmVhZCBhcGFydCB0aGVcbiAqIGNoYXJhY3RlcnMgZnJvbSB0aGUgc3RyaW5nVG9SYW5rIGFyZSB3aXRoaW4gdGhlIHRlc3RTdHJpbmcuXG4gKiBBIG51bWJlciBjbG9zZSB0byByYW5raW5ncy5NQVRDSEVTIHJlcHJlc2VudHMgYSBsb29zZSBtYXRjaC4gQSBudW1iZXIgY2xvc2VcbiAqIHRvIHJhbmtpbmdzLk1BVENIRVMgKyAxIHJlcHJlc2VudHMgYSB0aWdodGVyIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBiZXR3ZWVuIHJhbmtpbmdzLk1BVENIRVMgYW5kXG4gKiByYW5raW5ncy5NQVRDSEVTICsgMSBmb3IgaG93IHdlbGwgc3RyaW5nVG9SYW5rIG1hdGNoZXMgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2xvc2VuZXNzUmFua2luZyh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmspIHtcbiAgdmFyIG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCA9IDA7XG4gIHZhciBjaGFyTnVtYmVyID0gMDtcblxuICBmdW5jdGlvbiBmaW5kTWF0Y2hpbmdDaGFyYWN0ZXIobWF0Y2hDaGFyLCBzdHJpbmcsIGluZGV4KSB7XG4gICAgZm9yICh2YXIgaiA9IGluZGV4OyBqIDwgc3RyaW5nLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgc3RyaW5nQ2hhciA9IHN0cmluZ1tqXTtcblxuICAgICAgaWYgKHN0cmluZ0NoYXIgPT09IG1hdGNoQ2hhcikge1xuICAgICAgICBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgKz0gMTtcbiAgICAgICAgcmV0dXJuIGogKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmtpbmcoc3ByZWFkKSB7XG4gICAgdmFyIGluT3JkZXJQZXJjZW50YWdlID0gbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50IC8gc3RyaW5nVG9SYW5rLmxlbmd0aDtcbiAgICB2YXIgcmFua2luZyA9IHJhbmtpbmdzLk1BVENIRVMgKyBpbk9yZGVyUGVyY2VudGFnZSAqICgxIC8gc3ByZWFkKTtcbiAgICByZXR1cm4gcmFua2luZztcbiAgfVxuXG4gIHZhciBmaXJzdEluZGV4ID0gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKHN0cmluZ1RvUmFua1swXSwgdGVzdFN0cmluZywgMCk7XG5cbiAgaWYgKGZpcnN0SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICB9XG5cbiAgY2hhck51bWJlciA9IGZpcnN0SW5kZXg7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBzdHJpbmdUb1JhbmsubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2hDaGFyID0gc3RyaW5nVG9SYW5rW2ldO1xuICAgIGNoYXJOdW1iZXIgPSBmaW5kTWF0Y2hpbmdDaGFyYWN0ZXIobWF0Y2hDaGFyLCB0ZXN0U3RyaW5nLCBjaGFyTnVtYmVyKTtcbiAgICB2YXIgZm91bmQgPSBjaGFyTnVtYmVyID4gLTE7XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNwcmVhZCA9IGNoYXJOdW1iZXIgLSBmaXJzdEluZGV4O1xuICByZXR1cm4gZ2V0UmFua2luZyhzcHJlYWQpO1xufVxuLyoqXG4gKiBTb3J0cyBpdGVtcyB0aGF0IGhhdmUgYSByYW5rLCBpbmRleCwgYW5kIGtleUluZGV4XG4gKiBAcGFyYW0ge09iamVjdH0gYSAtIHRoZSBmaXJzdCBpdGVtIHRvIHNvcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIC0gdGhlIHNlY29uZCBpdGVtIHRvIHNvcnRcbiAqIEByZXR1cm4ge051bWJlcn0gLTEgaWYgYSBzaG91bGQgY29tZSBmaXJzdCwgMSBpZiBiIHNob3VsZCBjb21lIGZpcnN0XG4gKiBOb3RlOiB3aWxsIG5ldmVyIHJldHVybiAwXG4gKi9cblxuXG5mdW5jdGlvbiBzb3J0UmFua2VkSXRlbXMoYSwgYikge1xuICB2YXIgYUZpcnN0ID0gLTE7XG4gIHZhciBiRmlyc3QgPSAxO1xuICB2YXIgYVJhbmtlZEl0ZW0gPSBhLnJhbmtlZEl0ZW0sXG4gICAgICBhUmFuayA9IGEucmFuayxcbiAgICAgIGFLZXlJbmRleCA9IGEua2V5SW5kZXg7XG4gIHZhciBiUmFua2VkSXRlbSA9IGIucmFua2VkSXRlbSxcbiAgICAgIGJSYW5rID0gYi5yYW5rLFxuICAgICAgYktleUluZGV4ID0gYi5rZXlJbmRleDtcblxuICBpZiAoYVJhbmsgPT09IGJSYW5rKSB7XG4gICAgaWYgKGFLZXlJbmRleCA9PT0gYktleUluZGV4KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGFSYW5rZWRJdGVtKS5sb2NhbGVDb21wYXJlKGJSYW5rZWRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFLZXlJbmRleCA8IGJLZXlJbmRleCA/IGFGaXJzdCA6IGJGaXJzdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFSYW5rID4gYlJhbmsgPyBhRmlyc3QgOiBiRmlyc3Q7XG4gIH1cbn1cbi8qKlxuICogUHJlcGFyZXMgdmFsdWUgZm9yIGNvbXBhcmlzb24gYnkgc3RyaW5naWZ5aW5nIGl0LCByZW1vdmluZyBkaWFjcml0aWNzIChpZiBzcGVjaWZpZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2xlYW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0ge2tlZXBEaWFjcml0aWNzOiB3aGV0aGVyIHRvIHJlbW92ZSBkaWFjcml0aWNzfVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgcHJlcGFyZWQgdmFsdWVcbiAqL1xuXG5cbmZ1bmN0aW9uIHByZXBhcmVWYWx1ZUZvckNvbXBhcmlzb24odmFsdWUsIF9yZWY0KSB7XG4gIHZhciBrZWVwRGlhY3JpdGljcyA9IF9yZWY0LmtlZXBEaWFjcml0aWNzO1xuICB2YWx1ZSA9IFwiXCIgKyB2YWx1ZTsgLy8gdG9TdHJpbmdcblxuICBpZiAoIWtlZXBEaWFjcml0aWNzKSB7XG4gICAgdmFsdWUgPSByZW1vdmVBY2NlbnRzKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogR2V0cyB2YWx1ZSBmb3Iga2V5IGluIGl0ZW0gYXQgYXJiaXRyYXJpbHkgbmVzdGVkIGtleXBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gdGhlIGl0ZW1cbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBrZXkgLSB0aGUgcG90ZW50aWFsbHkgbmVzdGVkIGtleXBhdGggb3IgcHJvcGVydHkgY2FsbGJhY2tcbiAqIEByZXR1cm4ge0FycmF5fSAtIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlKHMpIGF0IHRoZSBuZXN0ZWQga2V5cGF0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0SXRlbVZhbHVlcyhpdGVtLCBrZXkpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAga2V5ID0ga2V5LmtleTtcbiAgfVxuXG4gIHZhciB2YWx1ZTtcblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbHVlID0ga2V5KGl0ZW0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIC8vIGhhbmRsZSBuZXN0ZWQga2V5c1xuICAgIHZhbHVlID0ga2V5LnNwbGl0KCcuJykucmVkdWNlKGZ1bmN0aW9uIChpdGVtT2JqLCBuZXN0ZWRLZXkpIHtcbiAgICAgIHJldHVybiBpdGVtT2JqID8gaXRlbU9ialtuZXN0ZWRLZXldIDogbnVsbDtcbiAgICB9LCBpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGl0ZW1ba2V5XTtcbiAgfSAvLyBjb25jYXQgYmVjYXVzZSBgdmFsdWVgIGNhbiBiZSBhIHN0cmluZyBvciBhbiBhcnJheVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIHJldHVybiB2YWx1ZSAhPSBudWxsID8gW10uY29uY2F0KHZhbHVlKSA6IG51bGw7XG59XG4vKipcbiAqIEdldHMgYWxsIHRoZSB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBrZXlzIGluIHRoZSBnaXZlbiBpdGVtIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlIHZhbHVlc1xuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSB0aGUgaXRlbSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgd2lsbCBiZSByZXRyaWV2ZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgLSB0aGUga2V5cyB0byB1c2UgdG8gcmV0cmlldmUgdGhlIHZhbHVlc1xuICogQHJldHVybiB7QXJyYXl9IG9iamVjdHMgd2l0aCB7aXRlbVZhbHVlLCBhdHRyaWJ1dGVzfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhbGxWYWxzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVzID0gZ2V0SXRlbVZhbHVlcyhpdGVtLCBrZXkpO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1WYWx1ZSkge1xuICAgICAgICBhbGxWYWxzLnB1c2goe1xuICAgICAgICAgIGl0ZW1WYWx1ZTogaXRlbVZhbHVlLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGdldEtleUF0dHJpYnV0ZXMoa2V5KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxWYWxzO1xuICB9LCBbXSk7XG59XG4vKipcbiAqIEdldHMgYWxsIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgZ2l2ZW4ga2V5XG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGtleSAtIHRoZSBrZXkgZnJvbSB3aGljaCB0aGUgYXR0cmlidXRlcyB3aWxsIGJlIHJldHJpZXZlZFxuICogQHJldHVybiB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5J3MgYXR0cmlidXRlc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0S2V5QXR0cmlidXRlcyhrZXkpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAga2V5ID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBtYXhSYW5raW5nOiBJbmZpbml0eSxcbiAgICBtaW5SYW5raW5nOiAtSW5maW5pdHlcbiAgfSwga2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTb3J0ZXI7XG5leHBvcnQgeyByYW5raW5ncyB9OyIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4uL3J1bnRpbWVcIjtcbmNvbnN0IFNQRUNJQUxfQVRUUklCVVRFX1NFVFRFUlMgPSAvXihodG1sfHRleHR8Y3NzKSQvO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkoYXR0cmlidXRlcywga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG5cbiAgICBpZiAoU1BFQ0lBTF9BVFRSSUJVVEVfU0VUVEVSUy50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtZW50W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUgPT09IHRydWUgPyBrZXkgOiBcIlwiICsgdmFsdWUpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4uL3J1bnRpbWVcIjtcbmNvbnN0IENVU1RPTV9QUk9QRVJUWV9SRUdFWCA9IC9eLS0vO1xuY29uc3QgREVGQVVMVF9TVFlMRVMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO1xuY29uc3QgVkVORE9SX1BSRUZJWEVTID0gW1wiLXdlYmtpdC1cIiwgXCItbW96LVwiLCBcIi1vLVwiLCBcIi1tcy1cIl07XG5jb25zdCBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xuY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5jb25zdCBESVJFQ1RMWV9BQ0NFU1NJQkxFX1NFVFRFUlMgPSAvc2Nyb2xsKFRvcHxMZWZ0KS9pO1xuY29uc3QgSEFTX1BJWEVMU19VTklUID0gL3B4JC87XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5IGluIERFRkFVTFRfU1RZTEVTKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBWRU5ET1JfUFJFRklYRVMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSBcIlwiLmNvbmNhdChWRU5ET1JfUFJFRklYRVNbaV0pLmNvbmNhdChwcm9wZXJ0eSk7XG5cbiAgICBpZiAocHJlZml4ZWROYW1lIGluIERFRkFVTFRfU1RZTEVTKSB7XG4gICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV0gPSBwcmVmaXhlZE5hbWU7XG4gICAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICAgIH1cbiAgfVxuXG4gIHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XSA9IHByb3BlcnR5O1xuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudHMsIHN0eWxlcykge1xuICBsZXQgc3R5bGVkRWxlbWVudHMgPSBBcnJheS5pc0FycmF5KGVsZW1lbnRzKSA/IGVsZW1lbnRzIDogW2VsZW1lbnRzXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBzdHlsZWRFbGVtZW50c1tpXTtcbiAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoIWhhc093blByb3BlcnR5KHN0eWxlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xuXG4gICAgICBpZiAoRElSRUNUTFlfQUNDRVNTSUJMRV9TRVRURVJTLnRlc3QocHJvcGVydHkpKSB7XG4gICAgICAgIGVsZW1lbnRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQ1VTVE9NX1BST1BFUlRZX1JFR0VYLnRlc3QocHJvcGVydHkpKSB7XG4gICAgICAgIHN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHN0eWxlc1twcm9wZXJ0eV0gPT09IFwibnVtYmVyXCIgJiYgIUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICB2YWx1ZSArPSBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIHByb3BlcnR5ID0gbm9ybWFsaXplUHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGVzKGVsZW1lbnQpIHtcbiAgbGV0IHBzZXVkb0VsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGxldCB2aWV3ID0gbnVsbCAhPT0gZWxlbWVudC5vd25lckRvY3VtZW50ICYmIGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICBpZiAoIXZpZXcgfHwgIXZpZXcub3BlbmVyKSB7XG4gICAgdmlldyA9IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgcHNldWRvRWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBsZXQgcHNldWRvRWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgbGV0IGNhc3RlZEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGlmIChESVJFQ1RMWV9BQ0NFU1NJQkxFX1NFVFRFUlMudGVzdChwcm9wZXJ0eSkpIHtcbiAgICByZXR1cm4gY2FzdGVkRWxlbWVudFtwcm9wZXJ0eV07XG4gIH1cblxuICBpZiAoIUNVU1RPTV9QUk9QRVJUWV9SRUdFWC50ZXN0KHByb3BlcnR5KSkge1xuICAgIHByb3BlcnR5ID0gbm9ybWFsaXplUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG5cbiAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoY2FzdGVkRWxlbWVudCwgcHNldWRvRWxlbWVudCk7XG4gIGNvbnN0IHZhbHVlID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIHx8IHN0eWxlc1twcm9wZXJ0eV07XG5cbiAgaWYgKFwib3BhY2l0eVwiID09PSBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJcIiA/IFwiMVwiIDogdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QocHJvcGVydHkpICYmIEhBU19QSVhFTFNfVU5JVC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKEhBU19QSVhFTFNfVU5JVCwgXCJcIiksIDEwKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShlbGVtZW50LCBzdHlsZSkge1xuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gc3R5bGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICB1cGRhdGVEaXNwbGF5KGVsZW1lbnQsIFwibm9uZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGVsZW1lbnQpIHtcbiAgdXBkYXRlRGlzcGxheShlbGVtZW50LCBcIlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQoZWxlbWVudCkge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gIH07XG59IiwiaW1wb3J0IHsgc3BsaXRTdHJpbmdWYWx1ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5jb25zdCBsaXN0ZW5lclJlZ2lzdHJ5ID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBvbihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcbiAgY29uc3QgdHlwZXMgPSBzcGxpdFN0cmluZ1ZhbHVlKHR5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAobnVsbCA9PT0gbm9kZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gdHlwZXNbal07XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIGxldCBsaXN0ZW5lcnMgPSBsaXN0ZW5lclJlZ2lzdHJ5LmdldChub2RlKTtcblxuICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgbGlzdGVuZXJzID0ge307XG4gICAgICAgIGxpc3RlbmVyUmVnaXN0cnkuc2V0KG5vZGUsIGxpc3RlbmVycyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpc3RlbmVyc1tldmVudFR5cGVdID0gW107XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVyc1tldmVudFR5cGVdLnB1c2goaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gb2ZmKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuICBjb25zdCB0eXBlcyA9IHNwbGl0U3RyaW5nVmFsdWUodHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0eXBlcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGxpc3RbaV07XG5cbiAgICAgIGlmIChudWxsID09PSBub2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBldmVudFR5cGUgPSB0eXBlc1tqXTtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQobm9kZSk7XG5cbiAgICAgIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5lcnNbZXZlbnRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbGlzdGVuZXJzW2V2ZW50VHlwZV0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgICBpZiAoLTEgIT09IGluZGV4KSB7XG4gICAgICAgICAgbGlzdGVuZXJzW2V2ZW50VHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBpZiAobnVsbCA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaW50ZXJtZWRpYXRlID0gZXZlbnQgPT4ge1xuICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIG9mZihlbGVtZW50LCB0eXBlLCBpbnRlcm1lZGlhdGUpO1xuICB9O1xuXG4gIG9uKGVsZW1lbnQsIHR5cGUsIGludGVybWVkaWF0ZSk7XG4gIHJldHVybiBpbnRlcm1lZGlhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGludGVybWVkaWF0ZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0ID0gZmluZERlbGVnYXRlZFRhcmdldChlbGVtZW50LCBldmVudC50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgIGlmIChudWxsICE9PSBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0KSB7XG4gICAgICBoYW5kbGVyKGV2ZW50LCBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgb24oZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgcmV0dXJuIGludGVybWVkaWF0ZTtcbn1cblxuZnVuY3Rpb24gZmluZERlbGVnYXRlZFRhcmdldChkZWxlZ2F0ZUVsZW1lbnQsIGN1cnJlbnRUYXJnZXQsIHNlbGVjdG9yKSB7XG4gIGxldCBub2RlID0gY3VycmVudFRhcmdldDtcblxuICB3aGlsZSAobnVsbCAhPT0gbm9kZSAmJiBub2RlICE9PSBkZWxlZ2F0ZUVsZW1lbnQpIHtcbiAgICBpZiAobm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlcihlbGVtZW50LCB0eXBlKSB7XG4gIGxldCBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXZlbnQgPSBjcmVhdGVFdmVudCh0eXBlLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIGRldGFpbDogZGF0YVxuICB9KTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnQodHlwZSwgYXJncykge1xuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCAhIWFyZ3MuYnViYmxlcywgISFhcmdzLmNhbmNlbGFibGUsIGFyZ3MuZGV0YWlsKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGxpc3RlbmVyUmVnaXN0cnkuZ2V0KGVsZW1lbnQpIHx8IHt9O1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCB7IHNldFN0eWxlcyB9IGZyb20gXCIuL2Nzc1wiO1xuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jLmJvZHkuY2hpbGRyZW47XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IHBhcnNlIEhUTUwgd2l0aCBleGFjdGx5IG9uZSB2YWxpZCByb290IGVsZW1lbnQuIEEgdmFsaWQgZWxlbWVudCBjYW4gc3RhbmQgb24gaXRzIG93biBpbiB0aGUgYm9keS5cIik7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW5bMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUpIHtcbiAgbGV0IGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlVW5zdHlsZWRFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMuY3NzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVuc3R5bGVkRWxlbWVudCh0eXBlKSB7XG4gIGxldCBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgY29uc3QgZWxlbWVudCA9IC0xICE9PSB0eXBlLmluZGV4T2YoXCI8XCIpID8gcGFyc2VIdG1sKHR5cGUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgc2V0QXR0cnMoZWxlbWVudCwgYXR0cmlidXRlcyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLmh0bWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5odG1sO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBsaXN0W2ldLnBhcmVudE5vZGU7XG5cbiAgICBpZiAobnVsbCAhPT0gcGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXN0W2ldKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShlbGVtZW50KSB7XG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNFbGVtZW50KGxpc3RbaV0pKSB7XG4gICAgICBsaXN0W2ldLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShlbGVtZW50LCByZXBsYWNlbWVudCkge1xuICBsZXQgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICBpZiAobnVsbCAhPT0gcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBhZGphY2VudFBvc2l0aW9uLCBpbnNlcnRJbnRvLCBpbnNlcnRSZWZlcmVuY2UpIHtcbiAgaWYgKHR5cGVvZiBpbnNlcnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZWZlcmVuY2UuaW5zZXJ0QWRqYWNlbnRIVE1MKGFkamFjZW50UG9zaXRpb24sIGluc2VydCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluc2VydEludG8gPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShpbnNlcnQpID8gaW5zZXJ0IDogW2luc2VydF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zZXJ0SW50by5pbnNlcnRCZWZvcmUobGlzdFtpXSwgaW5zZXJ0UmVmZXJlbmNlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYmVmb3JlZW5kXCIsIHJlZmVyZW5jZSwgbnVsbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZChyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImFmdGVyYmVnaW5cIiwgcmVmZXJlbmNlLCByZWZlcmVuY2UuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZShyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImJlZm9yZWJlZ2luXCIsIHJlZmVyZW5jZS5wYXJlbnRFbGVtZW50LCByZWZlcmVuY2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYWZ0ZXJlbmRcIiwgcmVmZXJlbmNlLnBhcmVudEVsZW1lbnQsIHJlZmVyZW5jZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSwgYWRkKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0W2FkZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShjbGFzc05hbWUpO1xufSIsImltcG9ydCBcIi4uL3BvbHlmaWxsL2RvbVwiO1xuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlcyhlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIG51bGwgPT09IHNlbGVjdG9yIHx8IGVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGZldGNoQWxsU2libGluZ3MoZWxlbWVudCwgc2VsZWN0b3IsIGFjY2Vzc29yKSB7XG4gIGxldCBpbmRleGFibGVFbGVtZW50ID0gZWxlbWVudDtcbiAgbGV0IHNpYmxpbmcgPSBpbmRleGFibGVFbGVtZW50W2FjY2Vzc29yXTtcbiAgY29uc3QgbGlzdCA9IFtdO1xuXG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkge1xuICAgICAgbGlzdC5wdXNoKHNpYmxpbmcpO1xuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nW2FjY2Vzc29yXTtcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiBmZXRjaFNpbmdsZVNpYmxpbmcoZWxlbWVudCwgc2VsZWN0b3IsIGFjY2Vzc29yKSB7XG4gIGxldCBpbmRleGFibGVFbGVtZW50ID0gZWxlbWVudDtcbiAgbGV0IHNpYmxpbmcgPSBpbmRleGFibGVFbGVtZW50W2FjY2Vzc29yXTtcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nW2FjY2Vzc29yXTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICBsZXQgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZG9jdW1lbnQ7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kT25lKHNlbGVjdG9yKSB7XG4gIGxldCBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGxpc3QsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBsaXN0LmZpbHRlcihlID0+IGUubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdChsaXN0LCBzZWxlY3Rvcikge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gIWUubWF0Y2hlcyhzZWxlY3RvcikpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gLTEgIT09IHNlbGVjdG9yLmluZGV4T2YoZSkpO1xuICB9XG5cbiAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZSAhPT0gc2VsZWN0b3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKHBhcmVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpKSB7XG4gICAgICBsaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RDaGlsZChwYXJlbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXYoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaFNpbmdsZVNpYmxpbmcoZWxlbWVudCwgc2VsZWN0b3IsIFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hTaW5nbGVTaWJsaW5nKGVsZW1lbnQsIHNlbGVjdG9yLCBcIm5leHRFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmV2QWxsKGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hBbGxTaWJsaW5ncyhlbGVtZW50LCBzZWxlY3RvciwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHRBbGwoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBcIm5leHRFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaWJsaW5ncyhlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBsZXQgc2libGluZyA9IG51bGw7XG5cbiAgaWYgKG51bGwgIT09IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgIHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH1cblxuICB3aGlsZSAobnVsbCAhPT0gc2libGluZykge1xuICAgIGlmIChzaWJsaW5nICE9PSBlbGVtZW50ICYmIGVsZW1lbnRNYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkge1xuICAgICAgbGlzdC5wdXNoKHNpYmxpbmcpO1xuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgbGV0IHJvb3RFbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIHdoaWxlIChudWxsICE9PSBwYXJlbnQgJiYgcm9vdEVsZW1lbnQgIT09IHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NoaWxkRWxlbWVudChwYXJlbnQsIG5vZGUpIHtcbiAgbGV0IHBvaW50ZXIgPSBub2RlO1xuXG4gIHdoaWxlIChwb2ludGVyICE9PSBudWxsKSB7XG4gICAgaWYgKHBvaW50ZXIgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9pbnRlciA9IHBvaW50ZXIucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0U3RyaW5nVmFsdWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID09PSBcIlwiID8gW10gOiB2YWx1ZS50cmltKCkuc3BsaXQoLyArLyk7XG59IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi9ydW50aW1lXCI7XG5pbXBvcnQgeyB0eXBlT2YgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCkge1xuICBpZiAoMCA9PT0gKGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IDAgOiBhcmd1bWVudHMubGVuZ3RoIC0gMSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKDEgPCAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAxKSkge1xuICAgIGxldCByZXN1bHQgPSB0YXJnZXQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgIHJlc3VsdCA9IG1lcmdlKHJlc3VsdCwgaSArIDEgPCAxIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSArIDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaSArIDFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3Qgc291cmNlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICBjb25zdCBzb3VyY2VUeXBlID0gdHlwZU9mKHNvdXJjZSk7XG4gIGNvbnN0IHRhcmdldFR5cGUgPSB0eXBlT2YodGFyZ2V0KTtcblxuICBpZiAoc291cmNlVHlwZSA9PT0gdGFyZ2V0VHlwZSB8fCBcIm51bGxcIiA9PT0gc291cmNlVHlwZSB8fCBcIm51bGxcIiA9PT0gdGFyZ2V0VHlwZSkge1xuICAgIGlmIChcImFycmF5XCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKFwib2JqZWN0XCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkID8gbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKSA6IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKCkge1xuICBsZXQgdGFyZ2V0ID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSnNvbih2YWx1ZSkge1xuICB0cnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgY29udGVudCA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIHJldHVybiBjb250ZW50ICE9PSBcIlwiID8gSlNPTi5wYXJzZShjb250ZW50KSA6IG51bGw7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBKU09OIGNvbnRlbnQ6IFwiLmNvbmNhdChlLm1lc3NhZ2UpLCBlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWxlbWVudEFzSnNvbihlbGVtZW50KSB7XG4gIHJldHVybiBzYWZlUGFyc2VKc29uKChlbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCIpLnJlcGxhY2UoLyZsdDsvZywgXCI8XCIpLnJlcGxhY2UoLyZndDsvZywgXCI+XCIpLnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZmluZCB9IGZyb20gXCIuLi9kb20vdHJhdmVyc2VcIjtcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gXCIuLi9leHRlbmRcIjtcbmltcG9ydCB7IHBhcnNlRWxlbWVudEFzSnNvbiB9IGZyb20gXCIuLi9qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gbW91bnQoc2VsZWN0b3IsIG1vdW50YWJsZSwgb3B0aW9ucykge1xuICBkb01vdW50KGZpbmQoc2VsZWN0b3IpLCBtb3VudGFibGUsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50TGF6eShzZWxlY3RvciwgaW1wb3J0ZXIsIG9wdGlvbnMpIHtcbiAgbGV0IGVsZW1lbnRzID0gZmluZChzZWxlY3Rvcik7XG5cbiAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbXBvcnRlcigpLnRoZW4obW9kdWxlID0+IGRvTW91bnQoZWxlbWVudHMsIG1vZHVsZS5kZWZhdWx0LCBvcHRpb25zKSwgZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIk1vdW50aW5nIG9mIGNvbXBvbmVudCBvZiBwYXRoICdcIi5jb25jYXQoc2VsZWN0b3IsIFwiJyBmYWlsZWQ6IFwiKS5jb25jYXQoZXJyb3IubWVzc2FnZSksIGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGRvTW91bnQoZWxlbWVudHMsIG1vdW50YWJsZSwgcmF3T3B0aW9ucykge1xuICBsZXQgbW91bnRhYmxlQW55ID0gbW91bnRhYmxlO1xuICBsZXQgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgdHlwZTogXCJmdW5jXCJcbiAgfSwgcmF3T3B0aW9ucyB8fCB7fSk7XG4gIGVsZW1lbnRzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgaWYgKFwianN4XCIgPT09IG9wdGlvbnMudHlwZSkge1xuICAgICAgbGV0IG9wdHMgPSBvcHRpb25zO1xuICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBwYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IG1vdW50IG9uIGNvbnRhaW5lciB3aXRob3V0IHBhcmVudC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRzLmh5ZHJhdGUpIHtcbiAgICAgICAgcGFyYW1zID0gZXh0ZW5kKHBhcmFtcywgcGFyc2VFbGVtZW50QXNKc29uKG5vZGUpIHx8IHt9KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoY3JlYXRlRWxlbWVudChtb3VudGFibGUsIHBhcmFtcyksIHBhcmVudCwgb3B0cy5oeWRyYXRlID8gbm9kZSA6IHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIGlmIChcImNsYXNzXCIgPT09IG9wdGlvbnMudHlwZSkge1xuICAgICAgbGV0IHN0YW5kYWxvbmVPcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IG1vdW50ZWQgPSBuZXcgbW91bnRhYmxlQW55KG5vZGUsIC4uLihzdGFuZGFsb25lT3B0aW9ucy5wYXJhbXMgfHwgW10pKTtcbiAgICAgIG1vdW50ZWQuaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RhbmRhbG9uZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgbW91bnRhYmxlKG5vZGUsIC4uLihzdGFuZGFsb25lT3B0aW9ucy5wYXJhbXMgfHwgW10pKTtcbiAgICB9XG4gIH0pO1xufSIsImlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICBjb25zdCBlbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBlbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufSIsImV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcGVydHkpO1xufSIsImV4cG9ydCBmdW5jdGlvbiB0eXBlT2YodmFsdWUpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXlxcW29iamVjdCAoLio/KV0kLy5leGVjKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICByZXR1cm4gbWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIDogXCJvYmplY3RcIjtcbn0iLCJ2YXIgbixcbiAgICBsLFxuICAgIHUsXG4gICAgdCxcbiAgICBpLFxuICAgIHIgPSB7fSxcbiAgICBmID0gW10sXG4gICAgbyA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfF4tLS9pO1xuXG5mdW5jdGlvbiBlKG4sIGwpIHtcbiAgZm9yICh2YXIgdSBpbiBsKSBuW3VdID0gbFt1XTtcblxuICByZXR1cm4gbjtcbn1cblxuZnVuY3Rpb24gYyhuKSB7XG4gIHZhciBsID0gbi5wYXJlbnROb2RlO1xuICBsICYmIGwucmVtb3ZlQ2hpbGQobik7XG59XG5cbmZ1bmN0aW9uIHMobiwgbCwgdSkge1xuICB2YXIgdCxcbiAgICAgIGksXG4gICAgICByLFxuICAgICAgZixcbiAgICAgIG8gPSBhcmd1bWVudHM7XG4gIGlmIChsID0gZSh7fSwgbCksIGFyZ3VtZW50cy5sZW5ndGggPiAzKSBmb3IgKHUgPSBbdV0sIHQgPSAzOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSB1LnB1c2gob1t0XSk7XG4gIGlmIChudWxsICE9IHUgJiYgKGwuY2hpbGRyZW4gPSB1KSwgbnVsbCAhPSBuICYmIG51bGwgIT0gbi5kZWZhdWx0UHJvcHMpIGZvciAoaSBpbiBuLmRlZmF1bHRQcm9wcykgdm9pZCAwID09PSBsW2ldICYmIChsW2ldID0gbi5kZWZhdWx0UHJvcHNbaV0pO1xuICByZXR1cm4gZiA9IGwua2V5LCBudWxsICE9IChyID0gbC5yZWYpICYmIGRlbGV0ZSBsLnJlZiwgbnVsbCAhPSBmICYmIGRlbGV0ZSBsLmtleSwgYShuLCBsLCBmLCByKTtcbn1cblxuZnVuY3Rpb24gYShsLCB1LCB0LCBpKSB7XG4gIHZhciByID0ge1xuICAgIHR5cGU6IGwsXG4gICAgcHJvcHM6IHUsXG4gICAga2V5OiB0LFxuICAgIHJlZjogaSxcbiAgICBfX2s6IG51bGwsXG4gICAgX19wOiBudWxsLFxuICAgIF9fYjogMCxcbiAgICBfX2U6IG51bGwsXG4gICAgbDogbnVsbCxcbiAgICBfX2M6IG51bGwsXG4gICAgY29uc3RydWN0b3I6IHZvaWQgMFxuICB9O1xuICByZXR1cm4gbi52bm9kZSAmJiBuLnZub2RlKHIpLCByO1xufVxuXG5mdW5jdGlvbiBoKCkge1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHYobikge1xuICByZXR1cm4gbi5jaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gcChuKSB7XG4gIGlmIChudWxsID09IG4gfHwgXCJib29sZWFuXCIgPT0gdHlwZW9mIG4pIHJldHVybiBudWxsO1xuICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbiB8fCBcIm51bWJlclwiID09IHR5cGVvZiBuKSByZXR1cm4gYShudWxsLCBuLCBudWxsLCBudWxsKTtcblxuICBpZiAobnVsbCAhPSBuLl9fZSB8fCBudWxsICE9IG4uX19jKSB7XG4gICAgdmFyIGwgPSBhKG4udHlwZSwgbi5wcm9wcywgbi5rZXksIG51bGwpO1xuICAgIHJldHVybiBsLl9fZSA9IG4uX19lLCBsO1xuICB9XG5cbiAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIHkobiwgbCkge1xuICB0aGlzLnByb3BzID0gbiwgdGhpcy5jb250ZXh0ID0gbDtcbn1cblxuZnVuY3Rpb24gZChuLCBsKSB7XG4gIGlmIChudWxsID09IGwpIHJldHVybiBuLl9fcCA/IGQobi5fX3AsIG4uX19wLl9fay5pbmRleE9mKG4pICsgMSkgOiBudWxsO1xuXG4gIGZvciAodmFyIHU7IGwgPCBuLl9fay5sZW5ndGg7IGwrKykgaWYgKG51bGwgIT0gKHUgPSBuLl9fa1tsXSkgJiYgbnVsbCAhPSB1Ll9fZSkgcmV0dXJuIHUuX19lO1xuXG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4udHlwZSA/IGQobikgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBtKG4pIHtcbiAgdmFyIGwsIHU7XG5cbiAgaWYgKG51bGwgIT0gKG4gPSBuLl9fcCkgJiYgbnVsbCAhPSBuLl9fYykge1xuICAgIGZvciAobi5fX2UgPSBuLl9fYy5iYXNlID0gbnVsbCwgbCA9IDA7IGwgPCBuLl9fay5sZW5ndGg7IGwrKykgaWYgKG51bGwgIT0gKHUgPSBuLl9fa1tsXSkgJiYgbnVsbCAhPSB1Ll9fZSkge1xuICAgICAgbi5fX2UgPSBuLl9fYy5iYXNlID0gdS5fX2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbShuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3KHQpIHtcbiAgIXQuX19kICYmICh0Ll9fZCA9ICEwKSAmJiAxID09PSBsLnB1c2godCkgJiYgKG4uZGVib3VuY2VSZW5kZXJpbmcgfHwgdSkoZyk7XG59XG5cbmZ1bmN0aW9uIGcoKSB7XG4gIHZhciBuO1xuXG4gIGZvciAobC5zb3J0KGZ1bmN0aW9uIChuLCBsKSB7XG4gICAgcmV0dXJuIGwuX192Ll9fYiAtIG4uX192Ll9fYjtcbiAgfSk7IG4gPSBsLnBvcCgpOykgbi5fX2QgJiYgbi5mb3JjZVVwZGF0ZSghMSk7XG59XG5cbmZ1bmN0aW9uIGsobiwgbCwgdSwgdCwgaSwgbywgZSwgcywgYSkge1xuICB2YXIgaCxcbiAgICAgIHYsXG4gICAgICB5LFxuICAgICAgbSxcbiAgICAgIHcsXG4gICAgICBnLFxuICAgICAgayxcbiAgICAgIGIsXG4gICAgICB4ID0gbC5fX2sgfHwgXyhsLnByb3BzLmNoaWxkcmVuLCBsLl9fayA9IFtdLCBwLCAhMCksXG4gICAgICBDID0gdSAmJiB1Ll9fayB8fCBmLFxuICAgICAgUCA9IEMubGVuZ3RoO1xuXG4gIGZvciAocyA9PSByICYmIChzID0gbnVsbCAhPSBvID8gb1swXSA6IFAgPyBkKHUsIDApIDogbnVsbCksIHYgPSAwOyB2IDwgeC5sZW5ndGg7IHYrKykgaWYgKG51bGwgIT0gKGggPSB4W3ZdID0gcCh4W3ZdKSkpIHtcbiAgICBpZiAoaC5fX3AgPSBsLCBoLl9fYiA9IGwuX19iICsgMSwgbnVsbCA9PT0gKG0gPSBDW3ZdKSB8fCBtICYmIGgua2V5ID09IG0ua2V5ICYmIGgudHlwZSA9PT0gbS50eXBlKSBDW3ZdID0gdm9pZCAwO2Vsc2UgZm9yICh5ID0gMDsgeSA8IFA7IHkrKykge1xuICAgICAgaWYgKChtID0gQ1t5XSkgJiYgaC5rZXkgPT0gbS5rZXkgJiYgaC50eXBlID09PSBtLnR5cGUpIHtcbiAgICAgICAgQ1t5XSA9IHZvaWQgMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG0gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh3ID0gTihuLCBoLCBtID0gbSB8fCByLCB0LCBpLCBvLCBlLCBudWxsLCBzLCBhKSwgKHkgPSBoLnJlZikgJiYgbS5yZWYgIT0geSAmJiAoYiB8fCAoYiA9IFtdKSkucHVzaCh5LCBoLl9fYyB8fCB3LCBoKSwgbnVsbCAhPSB3KSB7XG4gICAgICBpZiAobnVsbCA9PSBrICYmIChrID0gdyksIG51bGwgIT0gaC5sKSB3ID0gaC5sLCBoLmwgPSBudWxsO2Vsc2UgaWYgKG8gPT0gbSB8fCB3ICE9IHMgfHwgbnVsbCA9PSB3LnBhcmVudE5vZGUpIG46IGlmIChudWxsID09IHMgfHwgcy5wYXJlbnROb2RlICE9PSBuKSBuLmFwcGVuZENoaWxkKHcpO2Vsc2Uge1xuICAgICAgICBmb3IgKGcgPSBzLCB5ID0gMDsgKGcgPSBnLm5leHRTaWJsaW5nKSAmJiB5IDwgUDsgeSArPSAyKSBpZiAoZyA9PSB3KSBicmVhayBuO1xuXG4gICAgICAgIG4uaW5zZXJ0QmVmb3JlKHcsIHMpO1xuICAgICAgfVxuICAgICAgcyA9IHcubmV4dFNpYmxpbmcsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbC50eXBlICYmIChsLmwgPSB3KTtcbiAgICB9XG4gIH1cblxuICBpZiAobC5fX2UgPSBrLCBudWxsICE9IG8gJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsLnR5cGUpIGZvciAodiA9IG8ubGVuZ3RoOyB2LS07KSBudWxsICE9IG9bdl0gJiYgYyhvW3ZdKTtcblxuICBmb3IgKHYgPSBQOyB2LS07KSBudWxsICE9IENbdl0gJiYgeihDW3ZdLCBDW3ZdKTtcblxuICBpZiAoYikgZm9yICh2ID0gMDsgdiA8IGIubGVuZ3RoOyB2KyspIGooYlt2XSwgYlsrK3ZdLCBiWysrdl0pO1xufVxuXG5mdW5jdGlvbiBfKG4sIGwsIHUsIHQpIHtcbiAgaWYgKG51bGwgPT0gbCAmJiAobCA9IFtdKSwgbnVsbCA9PSBuIHx8IFwiYm9vbGVhblwiID09IHR5cGVvZiBuKSB0ICYmIGwucHVzaChudWxsKTtlbHNlIGlmIChBcnJheS5pc0FycmF5KG4pKSBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspIF8obltpXSwgbCwgdSwgdCk7ZWxzZSBsLnB1c2godSA/IHUobikgOiBuKTtcbiAgcmV0dXJuIGw7XG59XG5cbmZ1bmN0aW9uIGIobiwgbCwgdSwgdCwgaSkge1xuICB2YXIgcjtcblxuICBmb3IgKHIgaW4gdSkgciBpbiBsIHx8IEMobiwgciwgbnVsbCwgdVtyXSwgdCk7XG5cbiAgZm9yIChyIGluIGwpIGkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsW3JdIHx8IFwidmFsdWVcIiA9PT0gciB8fCBcImNoZWNrZWRcIiA9PT0gciB8fCB1W3JdID09PSBsW3JdIHx8IEMobiwgciwgbFtyXSwgdVtyXSwgdCk7XG59XG5cbmZ1bmN0aW9uIHgobiwgbCwgdSkge1xuICBcIi1cIiA9PT0gbFswXSA/IG4uc2V0UHJvcGVydHkobCwgdSkgOiBuW2xdID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgdSAmJiAhMSA9PT0gby50ZXN0KGwpID8gdSArIFwicHhcIiA6IHU7XG59XG5cbmZ1bmN0aW9uIEMobiwgbCwgdSwgdCwgaSkge1xuICB2YXIgciwgZiwgbywgZSwgYztcbiAgaWYgKFwia2V5XCIgPT09IChsID0gaSA/IFwiY2xhc3NOYW1lXCIgPT09IGwgPyBcImNsYXNzXCIgOiBsIDogXCJjbGFzc1wiID09PSBsID8gXCJjbGFzc05hbWVcIiA6IGwpIHx8IFwiY2hpbGRyZW5cIiA9PT0gbCkgO2Vsc2UgaWYgKFwic3R5bGVcIiA9PT0gbCkge1xuICAgIGlmIChyID0gbi5zdHlsZSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdSkgci5jc3NUZXh0ID0gdTtlbHNlIHtcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiB0ICYmIChyLmNzc1RleHQgPSBcIlwiLCB0ID0gbnVsbCksIHQpIGZvciAoZiBpbiB0KSB1ICYmIGYgaW4gdSB8fCB4KHIsIGYsIFwiXCIpO1xuICAgICAgaWYgKHUpIGZvciAobyBpbiB1KSB0ICYmIHVbb10gPT09IHRbb10gfHwgeChyLCBvLCB1W29dKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJvXCIgPT09IGxbMF0gJiYgXCJuXCIgPT09IGxbMV0pIGUgPSBsICE9PSAobCA9IGwucmVwbGFjZSgvQ2FwdHVyZSQvLCBcIlwiKSksIGMgPSBsLnRvTG93ZXJDYXNlKCksIGwgPSAoYyBpbiBuID8gYyA6IGwpLnNsaWNlKDIpLCB1ID8gKHQgfHwgbi5hZGRFdmVudExpc3RlbmVyKGwsIFAsIGUpLCAobi51IHx8IChuLnUgPSB7fSkpW2xdID0gdSkgOiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCwgUCwgZSk7ZWxzZSBpZiAoXCJsaXN0XCIgIT09IGwgJiYgXCJ0YWdOYW1lXCIgIT09IGwgJiYgIWkgJiYgbCBpbiBuKSB7XG4gICAgaWYgKG4ubGVuZ3RoICYmIFwidmFsdWVcIiA9PSBsKSBmb3IgKGwgPSBuLmxlbmd0aDsgbC0tOykgbi5vcHRpb25zW2xdLnNlbGVjdGVkID0gbi5vcHRpb25zW2xdLnZhbHVlID09IHU7ZWxzZSBuW2xdID0gbnVsbCA9PSB1ID8gXCJcIiA6IHU7XG4gIH0gZWxzZSBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHUgJiYgXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiICE9PSBsICYmIChsICE9PSAobCA9IGwucmVwbGFjZSgvXnhsaW5rOj8vLCBcIlwiKSkgPyBudWxsID09IHUgfHwgITEgPT09IHUgPyBuLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBsLnRvTG93ZXJDYXNlKCkpIDogbi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgbC50b0xvd2VyQ2FzZSgpLCB1KSA6IG51bGwgPT0gdSB8fCAhMSA9PT0gdSA/IG4ucmVtb3ZlQXR0cmlidXRlKGwpIDogbi5zZXRBdHRyaWJ1dGUobCwgdSkpO1xufVxuXG5mdW5jdGlvbiBQKGwpIHtcbiAgcmV0dXJuIHRoaXMudVtsLnR5cGVdKG4uZXZlbnQgPyBuLmV2ZW50KGwpIDogbCk7XG59XG5cbmZ1bmN0aW9uIE4obCwgdSwgdCwgaSwgciwgZiwgbywgYywgcywgYSkge1xuICB2YXIgaCxcbiAgICAgIGQsXG4gICAgICBtLFxuICAgICAgdyxcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgeCxcbiAgICAgIEMsXG4gICAgICBQLFxuICAgICAgTixcbiAgICAgIFQgPSB1LnR5cGU7XG4gIGlmICh2b2lkIDAgIT09IHUuY29uc3RydWN0b3IpIHJldHVybiBudWxsO1xuICAoaCA9IG4uX19iKSAmJiBoKHUpO1xuXG4gIHRyeSB7XG4gICAgbjogaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgVCkge1xuICAgICAgaWYgKEMgPSB1LnByb3BzLCBQID0gKGggPSBULmNvbnRleHRUeXBlKSAmJiBpW2guX19jXSwgTiA9IGggPyBQID8gUC5wcm9wcy52YWx1ZSA6IGguX19wIDogaSwgdC5fX2MgPyB4ID0gKGQgPSB1Ll9fYyA9IHQuX19jKS5fX3AgPSBkLl9fRSA6IChULnByb3RvdHlwZSAmJiBULnByb3RvdHlwZS5yZW5kZXIgPyB1Ll9fYyA9IGQgPSBuZXcgVChDLCBOKSA6ICh1Ll9fYyA9IGQgPSBuZXcgeShDLCBOKSwgZC5jb25zdHJ1Y3RvciA9IFQsIGQucmVuZGVyID0gQSksIFAgJiYgUC5zdWIoZCksIGQucHJvcHMgPSBDLCBkLnN0YXRlIHx8IChkLnN0YXRlID0ge30pLCBkLmNvbnRleHQgPSBOLCBkLl9fbiA9IGksIG0gPSBkLl9fZCA9ICEwLCBkLl9faCA9IFtdKSwgbnVsbCA9PSBkLl9fcyAmJiAoZC5fX3MgPSBkLnN0YXRlKSwgbnVsbCAhPSBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAmJiBlKGQuX19zID09IGQuc3RhdGUgPyBkLl9fcyA9IGUoe30sIGQuX19zKSA6IGQuX19zLCBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhDLCBkLl9fcykpLCBtKSBudWxsID09IFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICYmIG51bGwgIT0gZC5jb21wb25lbnRXaWxsTW91bnQgJiYgZC5jb21wb25lbnRXaWxsTW91bnQoKSwgbnVsbCAhPSBkLmNvbXBvbmVudERpZE1vdW50ICYmIG8ucHVzaChkKTtlbHNlIHtcbiAgICAgICAgaWYgKG51bGwgPT0gVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJiYgbnVsbCA9PSBjICYmIG51bGwgIT0gZC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICYmIGQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhDLCBOKSwgIWMgJiYgbnVsbCAhPSBkLnNob3VsZENvbXBvbmVudFVwZGF0ZSAmJiAhMSA9PT0gZC5zaG91bGRDb21wb25lbnRVcGRhdGUoQywgZC5fX3MsIE4pKSB7XG4gICAgICAgICAgZC5wcm9wcyA9IEMsIGQuc3RhdGUgPSBkLl9fcywgZC5fX2QgPSAhMSwgZC5fX3YgPSB1LCB1Ll9fZSA9IHQuX19lLCB1Ll9fayA9IHQuX19rO1xuICAgICAgICAgIGJyZWFrIG47XG4gICAgICAgIH1cblxuICAgICAgICBudWxsICE9IGQuY29tcG9uZW50V2lsbFVwZGF0ZSAmJiBkLmNvbXBvbmVudFdpbGxVcGRhdGUoQywgZC5fX3MsIE4pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHcgPSBkLnByb3BzLCBnID0gZC5zdGF0ZSwgZC5jb250ZXh0ID0gTiwgZC5wcm9wcyA9IEMsIGQuc3RhdGUgPSBkLl9fcywgKGggPSBuLl9fcikgJiYgaCh1KSwgZC5fX2QgPSAhMSwgZC5fX3YgPSB1LCBkLl9fUCA9IGwsIF8obnVsbCAhPSAoaCA9IGQucmVuZGVyKGQucHJvcHMsIGQuc3RhdGUsIGQuY29udGV4dCkpICYmIGgudHlwZSA9PSB2ICYmIG51bGwgPT0gaC5rZXkgPyBoLnByb3BzLmNoaWxkcmVuIDogaCwgdS5fX2sgPSBbXSwgcCwgITApLCBudWxsICE9IGQuZ2V0Q2hpbGRDb250ZXh0ICYmIChpID0gZShlKHt9LCBpKSwgZC5nZXRDaGlsZENvbnRleHQoKSkpLCBtIHx8IG51bGwgPT0gZC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSB8fCAoYiA9IGQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodywgZykpLCBrKGwsIHUsIHQsIGksIHIsIGYsIG8sIHMsIGEpLCBkLmJhc2UgPSB1Ll9fZTsgaCA9IGQuX19oLnBvcCgpOykgaC5jYWxsKGQpO1xuXG4gICAgICBtIHx8IG51bGwgPT0gdyB8fCBudWxsID09IGQuY29tcG9uZW50RGlkVXBkYXRlIHx8IGQuY29tcG9uZW50RGlkVXBkYXRlKHcsIGcsIGIpLCB4ICYmIChkLl9fRSA9IGQuX19wID0gbnVsbCk7XG4gICAgfSBlbHNlIHUuX19lID0gJCh0Ll9fZSwgdSwgdCwgaSwgciwgZiwgbywgYSk7XG5cbiAgICAoaCA9IG4uZGlmZmVkKSAmJiBoKHUpO1xuICB9IGNhdGNoIChsKSB7XG4gICAgbi5fX2UobCwgdSwgdCk7XG4gIH1cblxuICByZXR1cm4gdS5fX2U7XG59XG5cbmZ1bmN0aW9uIFQobCwgdSkge1xuICBmb3IgKHZhciB0OyB0ID0gbC5wb3AoKTspIHRyeSB7XG4gICAgdC5jb21wb25lbnREaWRNb3VudCgpO1xuICB9IGNhdGNoIChsKSB7XG4gICAgbi5fX2UobCwgdC5fX3YpO1xuICB9XG5cbiAgbi5fX2MgJiYgbi5fX2ModSk7XG59XG5cbmZ1bmN0aW9uICQobiwgbCwgdSwgdCwgaSwgbywgZSwgYykge1xuICB2YXIgcyxcbiAgICAgIGEsXG4gICAgICBoLFxuICAgICAgdixcbiAgICAgIHAgPSB1LnByb3BzLFxuICAgICAgeSA9IGwucHJvcHM7XG4gIGlmIChpID0gXCJzdmdcIiA9PT0gbC50eXBlIHx8IGksIG51bGwgPT0gbiAmJiBudWxsICE9IG8pIGZvciAocyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSBpZiAobnVsbCAhPSAoYSA9IG9bc10pICYmIChudWxsID09PSBsLnR5cGUgPyAzID09PSBhLm5vZGVUeXBlIDogYS5sb2NhbE5hbWUgPT09IGwudHlwZSkpIHtcbiAgICBuID0gYSwgb1tzXSA9IG51bGw7XG4gICAgYnJlYWs7XG4gIH1cblxuICBpZiAobnVsbCA9PSBuKSB7XG4gICAgaWYgKG51bGwgPT09IGwudHlwZSkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHkpO1xuICAgIG4gPSBpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbC50eXBlKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlKSwgbyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbnVsbCA9PT0gbC50eXBlID8gcCAhPT0geSAmJiAobi5kYXRhID0geSkgOiBsICE9PSB1ICYmIChudWxsICE9IG8gJiYgKG8gPSBmLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksIGggPSAocCA9IHUucHJvcHMgfHwgcikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIHYgPSB5LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBjIHx8ICh2IHx8IGgpICYmICh2ICYmIGggJiYgdi5fX2h0bWwgPT0gaC5fX2h0bWwgfHwgKG4uaW5uZXJIVE1MID0gdiAmJiB2Ll9faHRtbCB8fCBcIlwiKSksIGIobiwgeSwgcCwgaSwgYyksIHYgfHwgayhuLCBsLCB1LCB0LCBcImZvcmVpZ25PYmplY3RcIiAhPT0gbC50eXBlICYmIGksIG8sIGUsIHIsIGMpLCBjIHx8IChcInZhbHVlXCIgaW4geSAmJiB2b2lkIDAgIT09IHkudmFsdWUgJiYgeS52YWx1ZSAhPT0gbi52YWx1ZSAmJiAobi52YWx1ZSA9IG51bGwgPT0geS52YWx1ZSA/IFwiXCIgOiB5LnZhbHVlKSwgXCJjaGVja2VkXCIgaW4geSAmJiB2b2lkIDAgIT09IHkuY2hlY2tlZCAmJiB5LmNoZWNrZWQgIT09IG4uY2hlY2tlZCAmJiAobi5jaGVja2VkID0geS5jaGVja2VkKSkpLCBuO1xufVxuXG5mdW5jdGlvbiBqKGwsIHUsIHQpIHtcbiAgdHJ5IHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwgPyBsKHUpIDogbC5jdXJyZW50ID0gdTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4uX19lKGwsIHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHoobCwgdSwgdCkge1xuICB2YXIgaSwgciwgZjtcblxuICBpZiAobi51bm1vdW50ICYmIG4udW5tb3VudChsKSwgKGkgPSBsLnJlZikgJiYgaihpLCBudWxsLCB1KSwgdCB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwudHlwZSB8fCAodCA9IG51bGwgIT0gKHIgPSBsLl9fZSkpLCBsLl9fZSA9IGwubCA9IG51bGwsIG51bGwgIT0gKGkgPSBsLl9fYykpIHtcbiAgICBpZiAoaS5jb21wb25lbnRXaWxsVW5tb3VudCkgdHJ5IHtcbiAgICAgIGkuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICB9IGNhdGNoIChsKSB7XG4gICAgICBuLl9fZShsLCB1KTtcbiAgICB9XG4gICAgaS5iYXNlID0gaS5fX1AgPSBudWxsO1xuICB9XG5cbiAgaWYgKGkgPSBsLl9faykgZm9yIChmID0gMDsgZiA8IGkubGVuZ3RoOyBmKyspIGlbZl0gJiYgeihpW2ZdLCB1LCB0KTtcbiAgbnVsbCAhPSByICYmIGMocik7XG59XG5cbmZ1bmN0aW9uIEEobiwgbCwgdSkge1xuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLCB1KTtcbn1cblxuZnVuY3Rpb24gRChsLCB1LCBpKSB7XG4gIHZhciBvLCBlLCBjO1xuICBuLl9fcCAmJiBuLl9fcChsLCB1KSwgZSA9IChvID0gaSA9PT0gdCkgPyBudWxsIDogaSAmJiBpLl9fayB8fCB1Ll9faywgbCA9IHModiwgbnVsbCwgW2xdKSwgYyA9IFtdLCBOKHUsIG8gPyB1Ll9fayA9IGwgOiAoaSB8fCB1KS5fX2sgPSBsLCBlIHx8IHIsIHIsIHZvaWQgMCAhPT0gdS5vd25lclNWR0VsZW1lbnQsIGkgJiYgIW8gPyBbaV0gOiBlID8gbnVsbCA6IGYuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpLCBjLCAhMSwgaSB8fCByLCBvKSwgVChjLCBsKTtcbn1cblxuZnVuY3Rpb24gSChuLCBsKSB7XG4gIEQobiwgbCwgdCk7XG59XG5cbmZ1bmN0aW9uIEkobiwgbCkge1xuICByZXR1cm4gbCA9IGUoZSh7fSwgbi5wcm9wcyksIGwpLCBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAobC5jaGlsZHJlbiA9IGYuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKSwgYShuLnR5cGUsIGwsIGwua2V5IHx8IG4ua2V5LCBsLnJlZiB8fCBuLnJlZik7XG59XG5cbmZ1bmN0aW9uIEwobikge1xuICB2YXIgbCA9IHt9LFxuICAgICAgdSA9IHtcbiAgICBfX2M6IFwiX19jQ1wiICsgaSsrLFxuICAgIF9fcDogbixcbiAgICBDb25zdW1lcjogZnVuY3Rpb24gQ29uc3VtZXIobiwgbCkge1xuICAgICAgcmV0dXJuIG4uY2hpbGRyZW4obCk7XG4gICAgfSxcbiAgICBQcm92aWRlcjogZnVuY3Rpb24gUHJvdmlkZXIobikge1xuICAgICAgdmFyIHQsXG4gICAgICAgICAgaSA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQgfHwgKHQgPSBbXSwgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsW3UuX19jXSA9IGksIGw7XG4gICAgICB9LCB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHQuc29tZShmdW5jdGlvbiAobCkge1xuICAgICAgICAgIGwuX19QICYmIChsLmNvbnRleHQgPSBuLnZhbHVlLCB3KGwpKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLnN1YiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHQucHVzaChuKTtcbiAgICAgICAgdmFyIGwgPSBuLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXG4gICAgICAgIG4uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5zcGxpY2UodC5pbmRleE9mKG4pLCAxKSwgbCAmJiBsLmNhbGwobik7XG4gICAgICAgIH07XG4gICAgICB9KSwgbi5jaGlsZHJlbjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlID0gdSwgdTtcbn1cblxubiA9IHt9LCB5LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuLCBsKSB7XG4gIHZhciB1ID0gdGhpcy5fX3MgIT09IHRoaXMuc3RhdGUgJiYgdGhpcy5fX3MgfHwgKHRoaXMuX19zID0gZSh7fSwgdGhpcy5zdGF0ZSkpO1xuICAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBuIHx8IChuID0gbih1LCB0aGlzLnByb3BzKSkpICYmIGUodSwgbiksIG51bGwgIT0gbiAmJiB0aGlzLl9fdiAmJiAobCAmJiB0aGlzLl9faC5wdXNoKGwpLCB3KHRoaXMpKTtcbn0sIHkucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGwsXG4gICAgICB1LFxuICAgICAgdCxcbiAgICAgIGkgPSB0aGlzLl9fdixcbiAgICAgIHIgPSB0aGlzLl9fdi5fX2UsXG4gICAgICBmID0gdGhpcy5fX1A7XG4gIGYgJiYgKGwgPSAhMSAhPT0gbiwgdSA9IFtdLCB0ID0gTihmLCBpLCBlKHt9LCBpKSwgdGhpcy5fX24sIHZvaWQgMCAhPT0gZi5vd25lclNWR0VsZW1lbnQsIG51bGwsIHUsIGwsIG51bGwgPT0gciA/IGQoaSkgOiByKSwgVCh1LCBpKSwgdCAhPSByICYmIG0oaSkpLCBuICYmIG4oKTtcbn0sIHkucHJvdG90eXBlLnJlbmRlciA9IHYsIGwgPSBbXSwgdSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJvbWlzZSA/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSkgOiBzZXRUaW1lb3V0LCBuLl9fZSA9IGZ1bmN0aW9uIChuLCBsLCB1KSB7XG4gIGZvciAodmFyIHQ7IGwgPSBsLl9fcDspIGlmICgodCA9IGwuX19jKSAmJiAhdC5fX3ApIHRyeSB7XG4gICAgaWYgKHQuY29uc3RydWN0b3IgJiYgbnVsbCAhPSB0LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcikgdC5zZXRTdGF0ZSh0LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSk7ZWxzZSB7XG4gICAgICBpZiAobnVsbCA9PSB0LmNvbXBvbmVudERpZENhdGNoKSBjb250aW51ZTtcbiAgICAgIHQuY29tcG9uZW50RGlkQ2F0Y2gobik7XG4gICAgfVxuICAgIHJldHVybiB3KHQuX19FID0gdCk7XG4gIH0gY2F0Y2ggKGwpIHtcbiAgICBuID0gbDtcbiAgfVxuXG4gIHRocm93IG47XG59LCB0ID0gciwgaSA9IDA7XG5leHBvcnQgeyBEIGFzIHJlbmRlciwgSCBhcyBoeWRyYXRlLCBzIGFzIGNyZWF0ZUVsZW1lbnQsIHMgYXMgaCwgdiBhcyBGcmFnbWVudCwgaCBhcyBjcmVhdGVSZWYsIHkgYXMgQ29tcG9uZW50LCBJIGFzIGNsb25lRWxlbWVudCwgTCBhcyBjcmVhdGVDb250ZXh0LCBfIGFzIHRvQ2hpbGRBcnJheSwgeiBhcyBfdW5tb3VudCwgbiBhcyBvcHRpb25zIH07IiwiaW1wb3J0IHsgb3B0aW9ucyBhcyBuIH0gZnJvbSBcInByZWFjdFwiO1xudmFyIHQsXG4gICAgcixcbiAgICB1ID0gW10sXG4gICAgaSA9IG4uX19yO1xuXG5uLl9fciA9IGZ1bmN0aW9uIChuKSB7XG4gIGkgJiYgaShuKSwgdCA9IDAsIChyID0gbi5fX2MpLl9fSCAmJiAoci5fX0gudCA9IHcoci5fX0gudCkpO1xufTtcblxudmFyIG8gPSBuLmRpZmZlZDtcblxubi5kaWZmZWQgPSBmdW5jdGlvbiAobikge1xuICBvICYmIG8obik7XG4gIHZhciB0ID0gbi5fX2M7XG5cbiAgaWYgKHQpIHtcbiAgICB2YXIgciA9IHQuX19IO1xuICAgIHIgJiYgKHIudSA9IHcoci51KSk7XG4gIH1cbn07XG5cbnZhciBmID0gbi51bm1vdW50O1xuXG5mdW5jdGlvbiBjKHQpIHtcbiAgbi5fX2ggJiYgbi5fX2gocik7XG4gIHZhciB1ID0gci5fX0ggfHwgKHIuX19IID0ge1xuICAgIGk6IFtdLFxuICAgIHQ6IFtdLFxuICAgIHU6IFtdXG4gIH0pO1xuICByZXR1cm4gdCA+PSB1LmkubGVuZ3RoICYmIHUuaS5wdXNoKHt9KSwgdS5pW3RdO1xufVxuXG5mdW5jdGlvbiBlKG4pIHtcbiAgcmV0dXJuIGEocSwgbik7XG59XG5cbmZ1bmN0aW9uIGEobiwgdSwgaSkge1xuICB2YXIgbyA9IGModCsrKTtcbiAgcmV0dXJuIG8uX19jIHx8IChvLl9fYyA9IHIsIG8ubyA9IFtpID8gaSh1KSA6IHEobnVsbCwgdSksIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHIgPSBuKG8ub1swXSwgdCk7XG4gICAgby5vWzBdICE9PSByICYmIChvLm9bMF0gPSByLCBvLl9fYy5zZXRTdGF0ZSh7fSkpO1xuICB9XSksIG8ubztcbn1cblxuZnVuY3Rpb24gdihuLCB1KSB7XG4gIHZhciBpID0gYyh0KyspO1xuICBGKGkudiwgdSkgJiYgKGkubyA9IG4sIGkudiA9IHUsIHIuX19ILnQucHVzaChpKSwgXyhyKSk7XG59XG5cbmZ1bmN0aW9uIG0obiwgdSkge1xuICB2YXIgaSA9IGModCsrKTtcbiAgRihpLnYsIHUpICYmIChpLm8gPSBuLCBpLnYgPSB1LCByLl9fSC51LnB1c2goaSkpO1xufVxuXG5mdW5jdGlvbiBwKG4pIHtcbiAgcmV0dXJuIHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBuXG4gICAgfTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBsKG4sIHIsIHUpIHtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIEYoaS52LCB1KSAmJiAoaS52ID0gdSwgbiAmJiAobi5jdXJyZW50ID0gcigpKSk7XG59XG5cbmZ1bmN0aW9uIHMobiwgcikge1xuICB2YXIgdSA9IGModCsrKTtcbiAgcmV0dXJuIEYodS52LCByKSA/ICh1LnYgPSByLCB1Lm0gPSBuLCB1Lm8gPSBuKCkpIDogdS5vO1xufVxuXG5mdW5jdGlvbiBkKG4sIHQpIHtcbiAgcmV0dXJuIHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuO1xuICB9LCB0KTtcbn1cblxuZnVuY3Rpb24geShuKSB7XG4gIHZhciB1ID0gci5jb250ZXh0W24uX19jXTtcbiAgaWYgKCF1KSByZXR1cm4gbi5fX3A7XG4gIHZhciBpID0gYyh0KyspO1xuICByZXR1cm4gbnVsbCA9PSBpLm8gJiYgKGkubyA9ICEwLCB1LnN1YihyKSksIHUucHJvcHMudmFsdWU7XG59XG5cbmZ1bmN0aW9uIFQodCwgcikge1xuICBuLnVzZURlYnVnVmFsdWUgJiYgbi51c2VEZWJ1Z1ZhbHVlKHIgPyByKHQpIDogdCk7XG59XG5cbm4udW5tb3VudCA9IGZ1bmN0aW9uIChuKSB7XG4gIGYgJiYgZihuKTtcbiAgdmFyIHQgPSBuLl9fYztcblxuICBpZiAodCkge1xuICAgIHZhciByID0gdC5fX0g7XG4gICAgciAmJiByLmkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4ucCAmJiBuLnAoKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIF8gPSBmdW5jdGlvbiBfKCkge307XG5cbmZ1bmN0aW9uIGcoKSB7XG4gIHUuc29tZShmdW5jdGlvbiAobikge1xuICAgIG4ubCA9ICExLCBuLl9fUCAmJiAobi5fX0gudCA9IHcobi5fX0gudCkpO1xuICB9KSwgdSA9IFtdO1xufVxuXG5mdW5jdGlvbiB3KG4pIHtcbiAgcmV0dXJuIG4uZm9yRWFjaChBKSwgbi5mb3JFYWNoKEUpLCBbXTtcbn1cblxuZnVuY3Rpb24gQShuKSB7XG4gIG4ucCAmJiBuLnAoKTtcbn1cblxuZnVuY3Rpb24gRShuKSB7XG4gIHZhciB0ID0gbi5vKCk7XG4gIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiAobi5wID0gdCk7XG59XG5cbmZ1bmN0aW9uIEYobiwgdCkge1xuICByZXR1cm4gIW4gfHwgdC5zb21lKGZ1bmN0aW9uICh0LCByKSB7XG4gICAgcmV0dXJuIHQgIT09IG5bcl07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxKG4sIHQpIHtcbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCA/IHQobikgOiB0O1xufVxuXG5cInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgKF8gPSBmdW5jdGlvbiBfKHQpIHtcbiAgIXQubCAmJiAodC5sID0gITApICYmIDEgPT09IHUucHVzaCh0KSAmJiAobi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgdCA9IGZ1bmN0aW9uIHQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQociksIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUpLCBzZXRUaW1lb3V0KG4pO1xuICAgIH0sXG4gICAgICAgIHIgPSBzZXRUaW1lb3V0KHQsIDEwMCksXG4gICAgICAgIHUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCk7XG4gIH0pKGcpO1xufSk7XG5leHBvcnQgeyBlIGFzIHVzZVN0YXRlLCBhIGFzIHVzZVJlZHVjZXIsIHYgYXMgdXNlRWZmZWN0LCBtIGFzIHVzZUxheW91dEVmZmVjdCwgcCBhcyB1c2VSZWYsIGwgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgcyBhcyB1c2VNZW1vLCBkIGFzIHVzZUNhbGxiYWNrLCB5IGFzIHVzZUNvbnRleHQsIFQgYXMgdXNlRGVidWdWYWx1ZSB9OyIsInZhciBjaGFyYWN0ZXJNYXAgPSB7XG4gIFwiw4BcIjogXCJBXCIsXG4gIFwiw4FcIjogXCJBXCIsXG4gIFwiw4JcIjogXCJBXCIsXG4gIFwiw4NcIjogXCJBXCIsXG4gIFwiw4RcIjogXCJBXCIsXG4gIFwiw4VcIjogXCJBXCIsXG4gIFwi4bqkXCI6IFwiQVwiLFxuICBcIuG6rlwiOiBcIkFcIixcbiAgXCLhurJcIjogXCJBXCIsXG4gIFwi4bq0XCI6IFwiQVwiLFxuICBcIuG6tlwiOiBcIkFcIixcbiAgXCLDhlwiOiBcIkFFXCIsXG4gIFwi4bqmXCI6IFwiQVwiLFxuICBcIuG6sFwiOiBcIkFcIixcbiAgXCLIglwiOiBcIkFcIixcbiAgXCLDh1wiOiBcIkNcIixcbiAgXCLhuIhcIjogXCJDXCIsXG4gIFwiw4hcIjogXCJFXCIsXG4gIFwiw4lcIjogXCJFXCIsXG4gIFwiw4pcIjogXCJFXCIsXG4gIFwiw4tcIjogXCJFXCIsXG4gIFwi4bq+XCI6IFwiRVwiLFxuICBcIuG4llwiOiBcIkVcIixcbiAgXCLhu4BcIjogXCJFXCIsXG4gIFwi4biUXCI6IFwiRVwiLFxuICBcIuG4nFwiOiBcIkVcIixcbiAgXCLIhlwiOiBcIkVcIixcbiAgXCLDjFwiOiBcIklcIixcbiAgXCLDjVwiOiBcIklcIixcbiAgXCLDjlwiOiBcIklcIixcbiAgXCLDj1wiOiBcIklcIixcbiAgXCLhuK5cIjogXCJJXCIsXG4gIFwiyIpcIjogXCJJXCIsXG4gIFwiw5BcIjogXCJEXCIsXG4gIFwiw5FcIjogXCJOXCIsXG4gIFwiw5JcIjogXCJPXCIsXG4gIFwiw5NcIjogXCJPXCIsXG4gIFwiw5RcIjogXCJPXCIsXG4gIFwiw5VcIjogXCJPXCIsXG4gIFwiw5ZcIjogXCJPXCIsXG4gIFwiw5hcIjogXCJPXCIsXG4gIFwi4buQXCI6IFwiT1wiLFxuICBcIuG5jFwiOiBcIk9cIixcbiAgXCLhuZJcIjogXCJPXCIsXG4gIFwiyI5cIjogXCJPXCIsXG4gIFwiw5lcIjogXCJVXCIsXG4gIFwiw5pcIjogXCJVXCIsXG4gIFwiw5tcIjogXCJVXCIsXG4gIFwiw5xcIjogXCJVXCIsXG4gIFwiw51cIjogXCJZXCIsXG4gIFwiw6BcIjogXCJhXCIsXG4gIFwiw6FcIjogXCJhXCIsXG4gIFwiw6JcIjogXCJhXCIsXG4gIFwiw6NcIjogXCJhXCIsXG4gIFwiw6RcIjogXCJhXCIsXG4gIFwiw6VcIjogXCJhXCIsXG4gIFwi4bqlXCI6IFwiYVwiLFxuICBcIuG6r1wiOiBcImFcIixcbiAgXCLhurNcIjogXCJhXCIsXG4gIFwi4bq1XCI6IFwiYVwiLFxuICBcIuG6t1wiOiBcImFcIixcbiAgXCLDplwiOiBcImFlXCIsXG4gIFwi4bqnXCI6IFwiYVwiLFxuICBcIuG6sVwiOiBcImFcIixcbiAgXCLIg1wiOiBcImFcIixcbiAgXCLDp1wiOiBcImNcIixcbiAgXCLhuIlcIjogXCJjXCIsXG4gIFwiw6hcIjogXCJlXCIsXG4gIFwiw6lcIjogXCJlXCIsXG4gIFwiw6pcIjogXCJlXCIsXG4gIFwiw6tcIjogXCJlXCIsXG4gIFwi4bq/XCI6IFwiZVwiLFxuICBcIuG4l1wiOiBcImVcIixcbiAgXCLhu4FcIjogXCJlXCIsXG4gIFwi4biVXCI6IFwiZVwiLFxuICBcIuG4nVwiOiBcImVcIixcbiAgXCLIh1wiOiBcImVcIixcbiAgXCLDrFwiOiBcImlcIixcbiAgXCLDrVwiOiBcImlcIixcbiAgXCLDrlwiOiBcImlcIixcbiAgXCLDr1wiOiBcImlcIixcbiAgXCLhuK9cIjogXCJpXCIsXG4gIFwiyItcIjogXCJpXCIsXG4gIFwiw7BcIjogXCJkXCIsXG4gIFwiw7FcIjogXCJuXCIsXG4gIFwiw7JcIjogXCJvXCIsXG4gIFwiw7NcIjogXCJvXCIsXG4gIFwiw7RcIjogXCJvXCIsXG4gIFwiw7VcIjogXCJvXCIsXG4gIFwiw7ZcIjogXCJvXCIsXG4gIFwiw7hcIjogXCJvXCIsXG4gIFwi4buRXCI6IFwib1wiLFxuICBcIuG5jVwiOiBcIm9cIixcbiAgXCLhuZNcIjogXCJvXCIsXG4gIFwiyI9cIjogXCJvXCIsXG4gIFwiw7lcIjogXCJ1XCIsXG4gIFwiw7pcIjogXCJ1XCIsXG4gIFwiw7tcIjogXCJ1XCIsXG4gIFwiw7xcIjogXCJ1XCIsXG4gIFwiw71cIjogXCJ5XCIsXG4gIFwiw79cIjogXCJ5XCIsXG4gIFwixIBcIjogXCJBXCIsXG4gIFwixIFcIjogXCJhXCIsXG4gIFwixIJcIjogXCJBXCIsXG4gIFwixINcIjogXCJhXCIsXG4gIFwixIRcIjogXCJBXCIsXG4gIFwixIVcIjogXCJhXCIsXG4gIFwixIZcIjogXCJDXCIsXG4gIFwixIdcIjogXCJjXCIsXG4gIFwixIhcIjogXCJDXCIsXG4gIFwixIlcIjogXCJjXCIsXG4gIFwixIpcIjogXCJDXCIsXG4gIFwixItcIjogXCJjXCIsXG4gIFwixIxcIjogXCJDXCIsXG4gIFwixI1cIjogXCJjXCIsXG4gIFwiQ8yGXCI6IFwiQ1wiLFxuICBcImPMhlwiOiBcImNcIixcbiAgXCLEjlwiOiBcIkRcIixcbiAgXCLEj1wiOiBcImRcIixcbiAgXCLEkFwiOiBcIkRcIixcbiAgXCLEkVwiOiBcImRcIixcbiAgXCLEklwiOiBcIkVcIixcbiAgXCLEk1wiOiBcImVcIixcbiAgXCLElFwiOiBcIkVcIixcbiAgXCLElVwiOiBcImVcIixcbiAgXCLEllwiOiBcIkVcIixcbiAgXCLEl1wiOiBcImVcIixcbiAgXCLEmFwiOiBcIkVcIixcbiAgXCLEmVwiOiBcImVcIixcbiAgXCLEmlwiOiBcIkVcIixcbiAgXCLEm1wiOiBcImVcIixcbiAgXCLEnFwiOiBcIkdcIixcbiAgXCLHtFwiOiBcIkdcIixcbiAgXCLEnVwiOiBcImdcIixcbiAgXCLHtVwiOiBcImdcIixcbiAgXCLEnlwiOiBcIkdcIixcbiAgXCLEn1wiOiBcImdcIixcbiAgXCLEoFwiOiBcIkdcIixcbiAgXCLEoVwiOiBcImdcIixcbiAgXCLEolwiOiBcIkdcIixcbiAgXCLEo1wiOiBcImdcIixcbiAgXCLEpFwiOiBcIkhcIixcbiAgXCLEpVwiOiBcImhcIixcbiAgXCLEplwiOiBcIkhcIixcbiAgXCLEp1wiOiBcImhcIixcbiAgXCLhuKpcIjogXCJIXCIsXG4gIFwi4birXCI6IFwiaFwiLFxuICBcIsSoXCI6IFwiSVwiLFxuICBcIsSpXCI6IFwiaVwiLFxuICBcIsSqXCI6IFwiSVwiLFxuICBcIsSrXCI6IFwiaVwiLFxuICBcIsSsXCI6IFwiSVwiLFxuICBcIsStXCI6IFwiaVwiLFxuICBcIsSuXCI6IFwiSVwiLFxuICBcIsSvXCI6IFwiaVwiLFxuICBcIsSwXCI6IFwiSVwiLFxuICBcIsSxXCI6IFwiaVwiLFxuICBcIsSyXCI6IFwiSUpcIixcbiAgXCLEs1wiOiBcImlqXCIsXG4gIFwixLRcIjogXCJKXCIsXG4gIFwixLVcIjogXCJqXCIsXG4gIFwixLZcIjogXCJLXCIsXG4gIFwixLdcIjogXCJrXCIsXG4gIFwi4biwXCI6IFwiS1wiLFxuICBcIuG4sVwiOiBcImtcIixcbiAgXCJLzIZcIjogXCJLXCIsXG4gIFwia8yGXCI6IFwia1wiLFxuICBcIsS5XCI6IFwiTFwiLFxuICBcIsS6XCI6IFwibFwiLFxuICBcIsS7XCI6IFwiTFwiLFxuICBcIsS8XCI6IFwibFwiLFxuICBcIsS9XCI6IFwiTFwiLFxuICBcIsS+XCI6IFwibFwiLFxuICBcIsS/XCI6IFwiTFwiLFxuICBcIsWAXCI6IFwibFwiLFxuICBcIsWBXCI6IFwibFwiLFxuICBcIsWCXCI6IFwibFwiLFxuICBcIuG4vlwiOiBcIk1cIixcbiAgXCLhuL9cIjogXCJtXCIsXG4gIFwiTcyGXCI6IFwiTVwiLFxuICBcIm3MhlwiOiBcIm1cIixcbiAgXCLFg1wiOiBcIk5cIixcbiAgXCLFhFwiOiBcIm5cIixcbiAgXCLFhVwiOiBcIk5cIixcbiAgXCLFhlwiOiBcIm5cIixcbiAgXCLFh1wiOiBcIk5cIixcbiAgXCLFiFwiOiBcIm5cIixcbiAgXCLFiVwiOiBcIm5cIixcbiAgXCJOzIZcIjogXCJOXCIsXG4gIFwibsyGXCI6IFwiblwiLFxuICBcIsWMXCI6IFwiT1wiLFxuICBcIsWNXCI6IFwib1wiLFxuICBcIsWOXCI6IFwiT1wiLFxuICBcIsWPXCI6IFwib1wiLFxuICBcIsWQXCI6IFwiT1wiLFxuICBcIsWRXCI6IFwib1wiLFxuICBcIsWSXCI6IFwiT0VcIixcbiAgXCLFk1wiOiBcIm9lXCIsXG4gIFwiUMyGXCI6IFwiUFwiLFxuICBcInDMhlwiOiBcInBcIixcbiAgXCLFlFwiOiBcIlJcIixcbiAgXCLFlVwiOiBcInJcIixcbiAgXCLFllwiOiBcIlJcIixcbiAgXCLFl1wiOiBcInJcIixcbiAgXCLFmFwiOiBcIlJcIixcbiAgXCLFmVwiOiBcInJcIixcbiAgXCJSzIZcIjogXCJSXCIsXG4gIFwicsyGXCI6IFwiclwiLFxuICBcIsiSXCI6IFwiUlwiLFxuICBcIsiTXCI6IFwiclwiLFxuICBcIsWaXCI6IFwiU1wiLFxuICBcIsWbXCI6IFwic1wiLFxuICBcIsWcXCI6IFwiU1wiLFxuICBcIsWdXCI6IFwic1wiLFxuICBcIsWeXCI6IFwiU1wiLFxuICBcIsiYXCI6IFwiU1wiLFxuICBcIsiZXCI6IFwic1wiLFxuICBcIsWfXCI6IFwic1wiLFxuICBcIsWgXCI6IFwiU1wiLFxuICBcIsWhXCI6IFwic1wiLFxuICBcIsWiXCI6IFwiVFwiLFxuICBcIsWjXCI6IFwidFwiLFxuICBcIsibXCI6IFwidFwiLFxuICBcIsiaXCI6IFwiVFwiLFxuICBcIsWkXCI6IFwiVFwiLFxuICBcIsWlXCI6IFwidFwiLFxuICBcIsWmXCI6IFwiVFwiLFxuICBcIsWnXCI6IFwidFwiLFxuICBcIlTMhlwiOiBcIlRcIixcbiAgXCJ0zIZcIjogXCJ0XCIsXG4gIFwixahcIjogXCJVXCIsXG4gIFwixalcIjogXCJ1XCIsXG4gIFwixapcIjogXCJVXCIsXG4gIFwixatcIjogXCJ1XCIsXG4gIFwixaxcIjogXCJVXCIsXG4gIFwixa1cIjogXCJ1XCIsXG4gIFwixa5cIjogXCJVXCIsXG4gIFwixa9cIjogXCJ1XCIsXG4gIFwixbBcIjogXCJVXCIsXG4gIFwixbFcIjogXCJ1XCIsXG4gIFwixbJcIjogXCJVXCIsXG4gIFwixbNcIjogXCJ1XCIsXG4gIFwiyJZcIjogXCJVXCIsXG4gIFwiyJdcIjogXCJ1XCIsXG4gIFwiVsyGXCI6IFwiVlwiLFxuICBcInbMhlwiOiBcInZcIixcbiAgXCLFtFwiOiBcIldcIixcbiAgXCLFtVwiOiBcIndcIixcbiAgXCLhuoJcIjogXCJXXCIsXG4gIFwi4bqDXCI6IFwid1wiLFxuICBcIljMhlwiOiBcIlhcIixcbiAgXCJ4zIZcIjogXCJ4XCIsXG4gIFwixbZcIjogXCJZXCIsXG4gIFwixbdcIjogXCJ5XCIsXG4gIFwixbhcIjogXCJZXCIsXG4gIFwiWcyGXCI6IFwiWVwiLFxuICBcInnMhlwiOiBcInlcIixcbiAgXCLFuVwiOiBcIlpcIixcbiAgXCLFulwiOiBcInpcIixcbiAgXCLFu1wiOiBcIlpcIixcbiAgXCLFvFwiOiBcInpcIixcbiAgXCLFvVwiOiBcIlpcIixcbiAgXCLFvlwiOiBcInpcIixcbiAgXCLFv1wiOiBcInNcIixcbiAgXCLGklwiOiBcImZcIixcbiAgXCLGoFwiOiBcIk9cIixcbiAgXCLGoVwiOiBcIm9cIixcbiAgXCLGr1wiOiBcIlVcIixcbiAgXCLGsFwiOiBcInVcIixcbiAgXCLHjVwiOiBcIkFcIixcbiAgXCLHjlwiOiBcImFcIixcbiAgXCLHj1wiOiBcIklcIixcbiAgXCLHkFwiOiBcImlcIixcbiAgXCLHkVwiOiBcIk9cIixcbiAgXCLHklwiOiBcIm9cIixcbiAgXCLHk1wiOiBcIlVcIixcbiAgXCLHlFwiOiBcInVcIixcbiAgXCLHlVwiOiBcIlVcIixcbiAgXCLHllwiOiBcInVcIixcbiAgXCLHl1wiOiBcIlVcIixcbiAgXCLHmFwiOiBcInVcIixcbiAgXCLHmVwiOiBcIlVcIixcbiAgXCLHmlwiOiBcInVcIixcbiAgXCLHm1wiOiBcIlVcIixcbiAgXCLHnFwiOiBcInVcIixcbiAgXCLhu6hcIjogXCJVXCIsXG4gIFwi4bupXCI6IFwidVwiLFxuICBcIuG5uFwiOiBcIlVcIixcbiAgXCLhublcIjogXCJ1XCIsXG4gIFwix7pcIjogXCJBXCIsXG4gIFwix7tcIjogXCJhXCIsXG4gIFwix7xcIjogXCJBRVwiLFxuICBcIse9XCI6IFwiYWVcIixcbiAgXCLHvlwiOiBcIk9cIixcbiAgXCLHv1wiOiBcIm9cIixcbiAgXCLDnlwiOiBcIlRIXCIsXG4gIFwiw75cIjogXCJ0aFwiLFxuICBcIuG5lFwiOiBcIlBcIixcbiAgXCLhuZVcIjogXCJwXCIsXG4gIFwi4bmkXCI6IFwiU1wiLFxuICBcIuG5pVwiOiBcInNcIixcbiAgXCJYzIFcIjogXCJYXCIsXG4gIFwieMyBXCI6IFwieFwiLFxuICBcItCDXCI6IFwi0JNcIixcbiAgXCLRk1wiOiBcItCzXCIsXG4gIFwi0IxcIjogXCLQmlwiLFxuICBcItGcXCI6IFwi0LpcIixcbiAgXCJBzItcIjogXCJBXCIsXG4gIFwiYcyLXCI6IFwiYVwiLFxuICBcIkXMi1wiOiBcIkVcIixcbiAgXCJlzItcIjogXCJlXCIsXG4gIFwiScyLXCI6IFwiSVwiLFxuICBcImnMi1wiOiBcImlcIixcbiAgXCLHuFwiOiBcIk5cIixcbiAgXCLHuVwiOiBcIm5cIixcbiAgXCLhu5JcIjogXCJPXCIsXG4gIFwi4buTXCI6IFwib1wiLFxuICBcIuG5kFwiOiBcIk9cIixcbiAgXCLhuZFcIjogXCJvXCIsXG4gIFwi4buqXCI6IFwiVVwiLFxuICBcIuG7q1wiOiBcInVcIixcbiAgXCLhuoBcIjogXCJXXCIsXG4gIFwi4bqBXCI6IFwid1wiLFxuICBcIuG7slwiOiBcIllcIixcbiAgXCLhu7NcIjogXCJ5XCIsXG4gIFwiyIBcIjogXCJBXCIsXG4gIFwiyIFcIjogXCJhXCIsXG4gIFwiyIRcIjogXCJFXCIsXG4gIFwiyIVcIjogXCJlXCIsXG4gIFwiyIhcIjogXCJJXCIsXG4gIFwiyIlcIjogXCJpXCIsXG4gIFwiyIxcIjogXCJPXCIsXG4gIFwiyI1cIjogXCJvXCIsXG4gIFwiyJBcIjogXCJSXCIsXG4gIFwiyJFcIjogXCJyXCIsXG4gIFwiyJRcIjogXCJVXCIsXG4gIFwiyJVcIjogXCJ1XCIsXG4gIFwiQsyMXCI6IFwiQlwiLFxuICBcImLMjFwiOiBcImJcIixcbiAgXCLEjMyjXCI6IFwiQ1wiLFxuICBcIsSNzKNcIjogXCJjXCIsXG4gIFwiw4rMjFwiOiBcIkVcIixcbiAgXCLDqsyMXCI6IFwiZVwiLFxuICBcIkbMjFwiOiBcIkZcIixcbiAgXCJmzIxcIjogXCJmXCIsXG4gIFwix6ZcIjogXCJHXCIsXG4gIFwix6dcIjogXCJnXCIsXG4gIFwiyJ5cIjogXCJIXCIsXG4gIFwiyJ9cIjogXCJoXCIsXG4gIFwiSsyMXCI6IFwiSlwiLFxuICBcIsewXCI6IFwialwiLFxuICBcIseoXCI6IFwiS1wiLFxuICBcIsepXCI6IFwia1wiLFxuICBcIk3MjFwiOiBcIk1cIixcbiAgXCJtzIxcIjogXCJtXCIsXG4gIFwiUMyMXCI6IFwiUFwiLFxuICBcInDMjFwiOiBcInBcIixcbiAgXCJRzIxcIjogXCJRXCIsXG4gIFwiccyMXCI6IFwicVwiLFxuICBcIsWYzKlcIjogXCJSXCIsXG4gIFwixZnMqVwiOiBcInJcIixcbiAgXCLhuaZcIjogXCJTXCIsXG4gIFwi4bmnXCI6IFwic1wiLFxuICBcIlbMjFwiOiBcIlZcIixcbiAgXCJ2zIxcIjogXCJ2XCIsXG4gIFwiV8yMXCI6IFwiV1wiLFxuICBcInfMjFwiOiBcIndcIixcbiAgXCJYzIxcIjogXCJYXCIsXG4gIFwieMyMXCI6IFwieFwiLFxuICBcIlnMjFwiOiBcIllcIixcbiAgXCJ5zIxcIjogXCJ5XCIsXG4gIFwiQcynXCI6IFwiQVwiLFxuICBcImHMp1wiOiBcImFcIixcbiAgXCJCzKdcIjogXCJCXCIsXG4gIFwiYsynXCI6IFwiYlwiLFxuICBcIuG4kFwiOiBcIkRcIixcbiAgXCLhuJFcIjogXCJkXCIsXG4gIFwiyKhcIjogXCJFXCIsXG4gIFwiyKlcIjogXCJlXCIsXG4gIFwixpDMp1wiOiBcIkVcIixcbiAgXCLJm8ynXCI6IFwiZVwiLFxuICBcIuG4qFwiOiBcIkhcIixcbiAgXCLhuKlcIjogXCJoXCIsXG4gIFwiScynXCI6IFwiSVwiLFxuICBcImnMp1wiOiBcImlcIixcbiAgXCLGl8ynXCI6IFwiSVwiLFxuICBcIsmozKdcIjogXCJpXCIsXG4gIFwiTcynXCI6IFwiTVwiLFxuICBcIm3Mp1wiOiBcIm1cIixcbiAgXCJPzKdcIjogXCJPXCIsXG4gIFwib8ynXCI6IFwib1wiLFxuICBcIlHMp1wiOiBcIlFcIixcbiAgXCJxzKdcIjogXCJxXCIsXG4gIFwiVcynXCI6IFwiVVwiLFxuICBcInXMp1wiOiBcInVcIixcbiAgXCJYzKdcIjogXCJYXCIsXG4gIFwieMynXCI6IFwieFwiLFxuICBcIlrMp1wiOiBcIlpcIixcbiAgXCJ6zKdcIjogXCJ6XCJcbn07XG52YXIgY2hhcnMgPSBPYmplY3Qua2V5cyhjaGFyYWN0ZXJNYXApLmpvaW4oJ3wnKTtcbnZhciBhbGxBY2NlbnRzID0gbmV3IFJlZ0V4cChjaGFycywgJ2cnKTtcbnZhciBmaXJzdEFjY2VudCA9IG5ldyBSZWdFeHAoY2hhcnMsICcnKTtcblxudmFyIHJlbW92ZUFjY2VudHMgPSBmdW5jdGlvbiByZW1vdmVBY2NlbnRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYWxsQWNjZW50cywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJhY3Rlck1hcFttYXRjaF07XG4gIH0pO1xufTtcblxudmFyIGhhc0FjY2VudHMgPSBmdW5jdGlvbiBoYXNBY2NlbnRzKHN0cmluZykge1xuICByZXR1cm4gISFzdHJpbmcubWF0Y2goZmlyc3RBY2NlbnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVBY2NlbnRzO1xubW9kdWxlLmV4cG9ydHMuaGFzID0gaGFzQWNjZW50cztcbm1vZHVsZS5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZUFjY2VudHM7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcGZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=