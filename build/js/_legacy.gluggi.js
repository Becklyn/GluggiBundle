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

/***/ "./assets/icon/error.svg":
/*!*******************************!*\
  !*** ./assets/icon/error.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-triangle\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\"></line></svg>");

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

/***/ "./assets/icon/transitive.svg":
/*!************************************!*\
  !*** ./assets/icon/transitive.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-git-branch\"><line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path></svg>");

/***/ }),

/***/ "./assets/icon/usages.svg":
/*!********************************!*\
  !*** ./assets/icon/usages.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>");

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
/* harmony import */ var _gluggi_ComponentUsages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gluggi/ComponentUsages */ "./assets/js/gluggi/ComponentUsages.tsx");
/* harmony import */ var _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gluggi/full-screen */ "./assets/js/gluggi/full-screen.ts");
/* harmony import */ var _gluggi_GluggiRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gluggi/GluggiRouter */ "./assets/js/gluggi/GluggiRouter.ts");
/* harmony import */ var _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gluggi/sidebar */ "./assets/js/gluggi/sidebar.ts");
/* harmony import */ var _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gluggi/SidebarContent */ "./assets/js/gluggi/SidebarContent.tsx");








var dataContainer = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-global-data");

if (dataContainer === null) {
  throw new Error("Can't run Gluggi, as the global gluggi data is missing.");
}

var data = Object(mojave_json__WEBPACK_IMPORTED_MODULE_1__["parseElementAsJson"])(dataContainer);
var router = new _gluggi_GluggiRouter__WEBPACK_IMPORTED_MODULE_5__["GluggiRouter"](data.url);
var contentView = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-content-view");
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-container", _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_6__["initSidebarVisibilityToggle"]);
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-sidebar-content-data", _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_7__["SidebarContent"], {
  type: "jsx",
  params: {
    router: router
  }
});
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-data-container-usages", _gluggi_ComponentUsages__WEBPACK_IMPORTED_MODULE_3__["ComponentUsages"], {
  type: "jsx",
  params: {
    router: router
  }
});

if (null !== contentView) {
  Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-toggle-fullscreen", _gluggi_full_screen__WEBPACK_IMPORTED_MODULE_4__["initToggleFullScreen"], {
    params: [contentView]
  });
}

/***/ }),

/***/ "./assets/js/gluggi/ComponentLink.tsx":
/*!********************************************!*\
  !*** ./assets/js/gluggi/ComponentLink.tsx ***!
  \********************************************/
/*! exports provided: ComponentLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLink", function() { return ComponentLink; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./assets/js/gluggi/icon.tsx");
/* harmony import */ var _icon_active_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon/active.svg */ "./assets/icon/active.svg");
/* harmony import */ var _icon_external_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon/external.svg */ "./assets/icon/external.svg");




function ComponentLink(props) {
  var component = props.component;
  var isActive = true === props.active;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link " + (isActive ? " gluggi-active" : ""),
    href: props.router.component(component)
  }, isActive && Object(_icon__WEBPACK_IMPORTED_MODULE_1__["icon"])(_icon_active_svg__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, true !== props.shortName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " " + component.name, props.children, "page" === component.type ? Object(_icon__WEBPACK_IMPORTED_MODULE_1__["icon"])(_icon_external_svg__WEBPACK_IMPORTED_MODULE_3__["default"], "isolated view") : ""));
}

/***/ }),

/***/ "./assets/js/gluggi/ComponentUsages.tsx":
/*!**********************************************!*\
  !*** ./assets/js/gluggi/ComponentUsages.tsx ***!
  \**********************************************/
/*! exports provided: ComponentUsages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentUsages", function() { return ComponentUsages; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _ComponentLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentLink */ "./assets/js/gluggi/ComponentLink.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./assets/js/gluggi/icon.tsx");
/* harmony import */ var _icon_usages_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/usages.svg */ "./assets/icon/usages.svg");
/* harmony import */ var _icon_transitive_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/transitive.svg */ "./assets/icon/transitive.svg");







function renderList(dependencies, showTransitive, router) {
  if (!dependencies.direct.length && (!showTransitive || !dependencies.transitive.length)) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "gluggi-dependencies-empty"
    }, "\u2014");
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, dependencies.direct.map(function (component) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ComponentLink__WEBPACK_IMPORTED_MODULE_2__["ComponentLink"], {
      component: component,
      router: router
    }));
  }), showTransitive && dependencies.transitive.map(function (component) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ComponentLink__WEBPACK_IMPORTED_MODULE_2__["ComponentLink"], {
      component: component,
      router: router
    }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_transitive_svg__WEBPACK_IMPORTED_MODULE_5__["default"], "transitive dependency")));
  }));
}

function ComponentUsages(props) {
  var _a = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _a[0],
      setOpen = _a[1];

  var _b = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      transitive = _b[0],
      setTransitive = _b[1];

  var hasTransitiveDependencies = props.dependencies.transitive.length + props.usages.transitive.length > 0;
  var dependenciesCount = props.dependencies.direct.length;
  var usagesCount = props.usages.direct.length;

  if (transitive) {
    dependenciesCount += props.dependencies.transitive.length;
    usagesCount += props.usages.transitive.length;
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-action-usages " + (open ? "is-open" : "")
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    type: "button",
    class: "gluggi-action",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_usages_svg__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-action-label"
  }, "Usages")), open && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-overview"
  }, hasTransitiveDependencies && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    type: "button",
    class: "gluggi-usages-transitive-toggle",
    onClick: function onClick() {
      return setTransitive(!transitive);
    }
  }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_transitive_svg__WEBPACK_IMPORTED_MODULE_5__["default"]), transitive ? "hide transitive" : "show transitive"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-list"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Dependencies (" + dependenciesCount + ")"), renderList(props.dependencies, transitive, props.router)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-list"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Usages (" + usagesCount + ")"), renderList(props.usages, transitive, props.router))));
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

  GluggiRouter.prototype.component = function (component) {
    return "" + this.prefix + component.type + "/" + component.key;
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
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./assets/js/gluggi/icon.tsx");
/* harmony import */ var _icon_active_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/active.svg */ "./assets/icon/active.svg");
/* harmony import */ var _icon_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/search.svg */ "./assets/icon/search.svg");
/* harmony import */ var _icon_external_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon/external.svg */ "./assets/icon/external.svg");
/* harmony import */ var _icon_error_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icon/error.svg */ "./assets/icon/error.svg");









function renderComponent(component, showFullName) {
  if (showFullName === void 0) {
    showFullName = false;
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link " + (component.active ? " gluggi-active" : ""),
    href: component.url
  }, component.active && Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_active_svg__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, showFullName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " " + component.name, component.error && Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_error_svg__WEBPACK_IMPORTED_MODULE_7__["default"], component.error), "page" === component.type ? Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_external_svg__WEBPACK_IMPORTED_MODULE_6__["default"]) : "")));
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
        components: Object(match_sorter__WEBPACK_IMPORTED_MODULE_2__["default"])(flattenTypes(props.types), query.trim(), {
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
    }), Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_search_svg__WEBPACK_IMPORTED_MODULE_5__["default"]))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
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

/***/ "./assets/js/gluggi/icon.tsx":
/*!***********************************!*\
  !*** ./assets/js/gluggi/icon.tsx ***!
  \***********************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

function icon(iconSvg, title) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-icon",
    dangerouslySetInnerHTML: {
      __html: iconSvg
    },
    title: title
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




function initSidebarVisibilityToggle(container) {
  var button = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-toggle",
    html: "<span class=\"gluggi-default\">" + _icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__["default"] + "</span><span class=\"gluggi-toggled\">" + _icon_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"] + "</span>"
  });
  var isToggled = false;
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(container, button);
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(button, "click", function () {
    isToggled = !isToggled;
    Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(container, "gluggi-is-toggled", isToggled);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xlZ2FjeS5nbHVnZ2kuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vZXJyb3Iuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2V4dGVybmFsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9tZW51LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL3RyYW5zaXRpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL3VzYWdlcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL0NvbXBvbmVudExpbmsudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kvQ29tcG9uZW50VXNhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL0dsdWdnaVJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL1NpZGViYXJDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL2Z1bGwtc2NyZWVuLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kvaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRjaC1zb3J0ZXIvZGlzdC9tYXRjaC1zb3J0ZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9tYW5pcHVsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL3RyYXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL21vdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvcG9seWZpbGwvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlbW92ZS1hY2NlbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvZ2x1Z2dpLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjEwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTMgMTBcXFwiPlxcbiAgPHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNNy42NTkgMGwtLjgyOC45IDMuNzMyIDMuNDkzSDB2MS4yMThoMTAuNTY1TDYuODMxIDkuMTA1bC44MjguOSA1LjM0MS01elxcXCIvPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjE0LjgyOVxcXCIgaGVpZ2h0PVxcXCIxNC44MjhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNC44MjkgMTQuODI4XFxcIj5cXG4gIDxnIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCI+XFxuICAgIDxwYXRoIGQ9XFxcIk0xMy40MTQgMS40MTRsLTEyIDEyXFxcIi8+XFxuICAgIDxwYXRoIGQ9XFxcIk0xLjQxNCAxLjQxNGwxMiAxMlxcXCIvPlxcbiAgPC9nPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZVxcXCI+PHBhdGggZD1cXFwiTTEwLjI5IDMuODZMMS44MiAxOGEyIDIgMCAwIDAgMS43MSAzaDE2Ljk0YTIgMiAwIDAgMCAxLjcxLTNMMTMuNzEgMy44NmEyIDIgMCAwIDAtMy40MiAwelxcXCI+PC9wYXRoPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjlcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEzXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTdcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE3XFxcIj48L2xpbmU+PC9zdmc+XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTYuMjY0XFxcIiBoZWlnaHQ9XFxcIjE2LjI2M1xcXCIgdmlld0JveD1cXFwiMCAwIDE2LjI2NCAxNi4yNjNcXFwiPlxcbiAgPHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNNS40MTYgMy43NzZsLjA1MSAxLjIyMiA1LjExLS4xNjktNy40NyA3LjQ3Ljg2MS44NiA3LjQ3LTcuNDctLjE2OSA1LjExIDEuMjIyLjA1Mi4yNDEtNy4zMTJ6XFxcIi8+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMTRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAxNFxcXCI+XFxuICA8ZyBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPlxcbiAgICA8cGF0aCBkPVxcXCJNMSA3aDE4TTEgMWgxOE0xIDEzaDE4XFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMTMuODExXFxcIiBoZWlnaHQ9XFxcIjEzLjgxMVxcXCIgdmlld0JveD1cXFwiMCAwIDEzLjgxMSAxMy44MTFcXFwiPlxcbiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTIuMjUgLTIuMjUpXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUuNDcyXFxcIiBjeT1cXFwiNS40NzJcXFwiIHI9XFxcIjUuNDcyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzIDMpXFxcIi8+XFxuICAgIDxwYXRoIGQ9XFxcIk0xNSAxNWwtMi4yOTYtMi4yOTZcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGNsYXNzPVxcXCJmZWF0aGVyIGZlYXRoZXItZ2l0LWJyYW5jaFxcXCI+PGxpbmUgeDE9XFxcIjZcXFwiIHkxPVxcXCIzXFxcIiB4Mj1cXFwiNlxcXCIgeTI9XFxcIjE1XFxcIj48L2xpbmU+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCI2XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI2XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xOCA5YTkgOSAwIDAgMS05IDlcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGNsYXNzPVxcXCJmZWF0aGVyIGZlYXRoZXItbGF5ZXJzXFxcIj48cG9seWdvbiBwb2ludHM9XFxcIjEyIDIgMiA3IDEyIDEyIDIyIDcgMTIgMlxcXCI+PC9wb2x5Z29uPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTcgMTIgMjIgMjIgMTdcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMiAxMiAxMiAxNyAyMiAxMlxcXCI+PC9wb2x5bGluZT48L3N2Zz5cIiIsImltcG9ydCB7IGZpbmRPbmUgfSBmcm9tIFwibW9qYXZlL2RvbS90cmF2ZXJzZVwiO1xuaW1wb3J0IHsgcGFyc2VFbGVtZW50QXNKc29uIH0gZnJvbSBcIm1vamF2ZS9qc29uXCI7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJtb2phdmUvbW91bnRcIjtcbmltcG9ydCB7IENvbXBvbmVudFVzYWdlcyB9IGZyb20gXCIuL2dsdWdnaS9Db21wb25lbnRVc2FnZXNcIjtcbmltcG9ydCB7IGluaXRUb2dnbGVGdWxsU2NyZWVuIH0gZnJvbSBcIi4vZ2x1Z2dpL2Z1bGwtc2NyZWVuXCI7XG5pbXBvcnQgeyBHbHVnZ2lSb3V0ZXIgfSBmcm9tIFwiLi9nbHVnZ2kvR2x1Z2dpUm91dGVyXCI7XG5pbXBvcnQgeyBpbml0U2lkZWJhclZpc2liaWxpdHlUb2dnbGUgfSBmcm9tIFwiLi9nbHVnZ2kvc2lkZWJhclwiO1xuaW1wb3J0IHsgU2lkZWJhckNvbnRlbnQgfSBmcm9tIFwiLi9nbHVnZ2kvU2lkZWJhckNvbnRlbnRcIjtcbnZhciBkYXRhQ29udGFpbmVyID0gZmluZE9uZShcIi5nbHVnZ2ktZ2xvYmFsLWRhdGFcIik7XG5cbmlmIChkYXRhQ29udGFpbmVyID09PSBudWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHJ1biBHbHVnZ2ksIGFzIHRoZSBnbG9iYWwgZ2x1Z2dpIGRhdGEgaXMgbWlzc2luZy5cIik7XG59XG5cbnZhciBkYXRhID0gcGFyc2VFbGVtZW50QXNKc29uKGRhdGFDb250YWluZXIpO1xudmFyIHJvdXRlciA9IG5ldyBHbHVnZ2lSb3V0ZXIoZGF0YS51cmwpO1xudmFyIGNvbnRlbnRWaWV3ID0gZmluZE9uZShcIi5nbHVnZ2ktY29udGVudC12aWV3XCIpO1xubW91bnQoXCIuZ2x1Z2dpLWNvbnRhaW5lclwiLCBpbml0U2lkZWJhclZpc2liaWxpdHlUb2dnbGUpO1xubW91bnQoXCIuZ2x1Z2dpLXNpZGViYXItY29udGVudC1kYXRhXCIsIFNpZGViYXJDb250ZW50LCB7XG4gIHR5cGU6IFwianN4XCIsXG4gIHBhcmFtczoge1xuICAgIHJvdXRlcjogcm91dGVyXG4gIH1cbn0pO1xubW91bnQoXCIuZ2x1Z2dpLWRhdGEtY29udGFpbmVyLXVzYWdlc1wiLCBDb21wb25lbnRVc2FnZXMsIHtcbiAgdHlwZTogXCJqc3hcIixcbiAgcGFyYW1zOiB7XG4gICAgcm91dGVyOiByb3V0ZXJcbiAgfVxufSk7XG5cbmlmIChudWxsICE9PSBjb250ZW50Vmlldykge1xuICBtb3VudChcIi5nbHVnZ2ktdG9nZ2xlLWZ1bGxzY3JlZW5cIiwgaW5pdFRvZ2dsZUZ1bGxTY3JlZW4sIHtcbiAgICBwYXJhbXM6IFtjb250ZW50Vmlld11cbiAgfSk7XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgYXJyb3dJY29uIGZyb20gXCIuLi8uLi9pY29uL2FjdGl2ZS5zdmdcIjtcbmltcG9ydCBleHRlcm5hbEljb24gZnJvbSBcIi4uLy4uL2ljb24vZXh0ZXJuYWwuc3ZnXCI7XG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50TGluayhwcm9wcykge1xuICB2YXIgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICB2YXIgaXNBY3RpdmUgPSB0cnVlID09PSBwcm9wcy5hY3RpdmU7XG4gIHJldHVybiBoKFwiYVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1saW5rIFwiICsgKGlzQWN0aXZlID8gXCIgZ2x1Z2dpLWFjdGl2ZVwiIDogXCJcIiksXG4gICAgaHJlZjogcHJvcHMucm91dGVyLmNvbXBvbmVudChjb21wb25lbnQpXG4gIH0sIGlzQWN0aXZlICYmIGljb24oYXJyb3dJY29uKSwgaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbmFtZVwiXG4gIH0sIHRydWUgIT09IHByb3BzLnNob3J0TmFtZSAmJiBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC10eXBlXCJcbiAgfSwgY29tcG9uZW50LnR5cGUpLCBcIiBcIiArIGNvbXBvbmVudC5uYW1lLCBwcm9wcy5jaGlsZHJlbiwgXCJwYWdlXCIgPT09IGNvbXBvbmVudC50eXBlID8gaWNvbihleHRlcm5hbEljb24sIFwiaXNvbGF0ZWQgdmlld1wiKSA6IFwiXCIpKTtcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBDb21wb25lbnRMaW5rIH0gZnJvbSBcIi4vQ29tcG9uZW50TGlua1wiO1xuaW1wb3J0IHsgaWNvbiB9IGZyb20gXCIuL2ljb25cIjtcbmltcG9ydCB1c2FnZXNJY29uIGZyb20gXCIuLi8uLi9pY29uL3VzYWdlcy5zdmdcIjtcbmltcG9ydCB0cmFuc2l0aXZlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi90cmFuc2l0aXZlLnN2Z1wiO1xuXG5mdW5jdGlvbiByZW5kZXJMaXN0KGRlcGVuZGVuY2llcywgc2hvd1RyYW5zaXRpdmUsIHJvdXRlcikge1xuICBpZiAoIWRlcGVuZGVuY2llcy5kaXJlY3QubGVuZ3RoICYmICghc2hvd1RyYW5zaXRpdmUgfHwgIWRlcGVuZGVuY2llcy50cmFuc2l0aXZlLmxlbmd0aCkpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktZGVwZW5kZW5jaWVzLWVtcHR5XCJcbiAgICB9LCBcIlxcdTIwMTRcIik7XG4gIH1cblxuICByZXR1cm4gaChcInVsXCIsIG51bGwsIGRlcGVuZGVuY2llcy5kaXJlY3QubWFwKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gaChcImxpXCIsIG51bGwsIGgoQ29tcG9uZW50TGluaywge1xuICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHJvdXRlclxuICAgIH0pKTtcbiAgfSksIHNob3dUcmFuc2l0aXZlICYmIGRlcGVuZGVuY2llcy50cmFuc2l0aXZlLm1hcChmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGgoXCJsaVwiLCBudWxsLCBoKENvbXBvbmVudExpbmssIHtcbiAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgcm91dGVyOiByb3V0ZXJcbiAgICB9LCBpY29uKHRyYW5zaXRpdmVJY29uLCBcInRyYW5zaXRpdmUgZGVwZW5kZW5jeVwiKSkpO1xuICB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnRVc2FnZXMocHJvcHMpIHtcbiAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgb3BlbiA9IF9hWzBdLFxuICAgICAgc2V0T3BlbiA9IF9hWzFdO1xuXG4gIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIHRyYW5zaXRpdmUgPSBfYlswXSxcbiAgICAgIHNldFRyYW5zaXRpdmUgPSBfYlsxXTtcblxuICB2YXIgaGFzVHJhbnNpdGl2ZURlcGVuZGVuY2llcyA9IHByb3BzLmRlcGVuZGVuY2llcy50cmFuc2l0aXZlLmxlbmd0aCArIHByb3BzLnVzYWdlcy50cmFuc2l0aXZlLmxlbmd0aCA+IDA7XG4gIHZhciBkZXBlbmRlbmNpZXNDb3VudCA9IHByb3BzLmRlcGVuZGVuY2llcy5kaXJlY3QubGVuZ3RoO1xuICB2YXIgdXNhZ2VzQ291bnQgPSBwcm9wcy51c2FnZXMuZGlyZWN0Lmxlbmd0aDtcblxuICBpZiAodHJhbnNpdGl2ZSkge1xuICAgIGRlcGVuZGVuY2llc0NvdW50ICs9IHByb3BzLmRlcGVuZGVuY2llcy50cmFuc2l0aXZlLmxlbmd0aDtcbiAgICB1c2FnZXNDb3VudCArPSBwcm9wcy51c2FnZXMudHJhbnNpdGl2ZS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWFjdGlvbi11c2FnZXMgXCIgKyAob3BlbiA/IFwiaXMtb3BlblwiIDogXCJcIilcbiAgfSwgaChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzczogXCJnbHVnZ2ktYWN0aW9uXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuKCFvcGVuKTtcbiAgICB9XG4gIH0sIGljb24odXNhZ2VzSWNvbiksIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktYWN0aW9uLWxhYmVsXCJcbiAgfSwgXCJVc2FnZXNcIikpLCBvcGVuICYmIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS11c2FnZXMtb3ZlcnZpZXdcIlxuICB9LCBoYXNUcmFuc2l0aXZlRGVwZW5kZW5jaWVzICYmIGgoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXVzYWdlcy10cmFuc2l0aXZlLXRvZ2dsZVwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0VHJhbnNpdGl2ZSghdHJhbnNpdGl2ZSk7XG4gICAgfVxuICB9LCBpY29uKHRyYW5zaXRpdmVJY29uKSwgdHJhbnNpdGl2ZSA/IFwiaGlkZSB0cmFuc2l0aXZlXCIgOiBcInNob3cgdHJhbnNpdGl2ZVwiKSwgaChcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXVzYWdlcy1saXN0XCJcbiAgfSwgaChcImgzXCIsIG51bGwsIFwiRGVwZW5kZW5jaWVzIChcIiArIGRlcGVuZGVuY2llc0NvdW50ICsgXCIpXCIpLCByZW5kZXJMaXN0KHByb3BzLmRlcGVuZGVuY2llcywgdHJhbnNpdGl2ZSwgcHJvcHMucm91dGVyKSksIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS11c2FnZXMtbGlzdFwiXG4gIH0sIGgoXCJoM1wiLCBudWxsLCBcIlVzYWdlcyAoXCIgKyB1c2FnZXNDb3VudCArIFwiKVwiKSwgcmVuZGVyTGlzdChwcm9wcy51c2FnZXMsIHRyYW5zaXRpdmUsIHByb3BzLnJvdXRlcikpKSk7XG59IiwidmFyIEdsdWdnaVJvdXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2x1Z2dpUm91dGVyKHByZWZpeCkge1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgR2x1Z2dpUm91dGVyLnByb3RvdHlwZS5ob21lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeDtcbiAgfTtcblxuICBHbHVnZ2lSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucHJlZml4ICsgY29tcG9uZW50LnR5cGUgKyBcIi9cIiArIGNvbXBvbmVudC5rZXk7XG4gIH07XG5cbiAgcmV0dXJuIEdsdWdnaVJvdXRlcjtcbn0oKTtcblxuZXhwb3J0IHsgR2x1Z2dpUm91dGVyIH07IiwiaW1wb3J0IHsgaCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInO1xuaW1wb3J0IHsgaWNvbiB9IGZyb20gXCIuL2ljb25cIjtcbmltcG9ydCBhcnJvd0ljb24gZnJvbSBcIi4uLy4uL2ljb24vYWN0aXZlLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSBcIi4uLy4uL2ljb24vc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IGV4dGVybmFsSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9leHRlcm5hbC5zdmdcIjtcbmltcG9ydCBlcnJvckljb24gZnJvbSBcIi4uLy4uL2ljb24vZXJyb3Iuc3ZnXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHNob3dGdWxsTmFtZSkge1xuICBpZiAoc2hvd0Z1bGxOYW1lID09PSB2b2lkIDApIHtcbiAgICBzaG93RnVsbE5hbWUgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBoKFwibGlcIiwgbnVsbCwgaChcImFcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbGluayBcIiArIChjb21wb25lbnQuYWN0aXZlID8gXCIgZ2x1Z2dpLWFjdGl2ZVwiIDogXCJcIiksXG4gICAgaHJlZjogY29tcG9uZW50LnVybFxuICB9LCBjb21wb25lbnQuYWN0aXZlICYmIGljb24oYXJyb3dJY29uKSwgaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbmFtZVwiXG4gIH0sIHNob3dGdWxsTmFtZSAmJiBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC10eXBlXCJcbiAgfSwgY29tcG9uZW50LnR5cGUpLCBcIiBcIiArIGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQuZXJyb3IgJiYgaWNvbihlcnJvckljb24sIGNvbXBvbmVudC5lcnJvciksIFwicGFnZVwiID09PSBjb21wb25lbnQudHlwZSA/IGljb24oZXh0ZXJuYWxJY29uKSA6IFwiXCIpKSk7XG59XG5cbmZ1bmN0aW9uIEdsdWdnaVR5cGUocHJvcHMpIHtcbiAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnRcIlxuICB9LCBoKFwiaDJcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtdGl0bGVcIlxuICB9LCBwcm9wcy50eXBlLnRpdGxlKSwgcHJvcHMudHlwZS5jb21wb25lbnRzLmxlbmd0aCA+IDAgPyBoKFwidWxcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtbGlzdFwiXG4gIH0sIHByb3BzLnR5cGUuY29tcG9uZW50cy5tYXAoZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAhIXByb3BzLnNob3dGdWxsTmFtZSk7XG4gIH0pKSA6IGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtZW1wdHlcIlxuICB9LCBwcm9wcy5lbXB0eVRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJDb250ZW50KHByb3BzKSB7XG4gIHZhciBjb250ZW50ID0gW2goXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1lbXB0eVwiXG4gIH0sIFwiVGhlcmUgYXJlIG5vIGNvbXBvbmVudHMuXCIpXTtcblxuICBpZiAocHJvcHMudHlwZXMubGVuZ3RoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksXG4gICAgICAgIHF1ZXJ5ID0gX2FbMF0sXG4gICAgICAgIHNldFF1ZXJ5XzEgPSBfYVsxXTtcblxuICAgIHZhciBzZWFyY2ggPSBudWxsO1xuXG4gICAgaWYgKFwiXCIgIT09IHF1ZXJ5LnRyaW0oKSkge1xuICAgICAgc2VhcmNoID0ge1xuICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0c1wiLFxuICAgICAgICBjb21wb25lbnRzOiBtYXRjaFNvcnRlcihmbGF0dGVuVHlwZXMocHJvcHMudHlwZXMpLCBxdWVyeS50cmltKCksIHtcbiAgICAgICAgICBrZXlzOiBbXCJuYW1lXCJdXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBbaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktc2VhcmNoXCJcbiAgICB9LCBoKFwibGFiZWxcIiwge1xuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLXNlYXJjaC13aWRnZXRcIlxuICAgIH0sIGgoXCJpbnB1dFwiLCB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1zZWFyY2gtaW5wdXRcIixcbiAgICAgIGlkOiBcImNvbXBvbmVudC1maWx0ZXJcIixcbiAgICAgIHZhbHVlOiBxdWVyeSxcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChlKSB7XG4gICAgICAgIHJldHVybiBzZXRRdWVyeV8xKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSksIGljb24oc2VhcmNoSWNvbikpKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50c1wiXG4gICAgfSwgc2VhcmNoID8gaChHbHVnZ2lUeXBlLCB7XG4gICAgICB0eXBlOiBzZWFyY2gsXG4gICAgICBzaG93RnVsbE5hbWU6IHRydWUsXG4gICAgICBlbXB0eVRleHQ6IFwiTm8gbWF0Y2hlc1wiXG4gICAgfSkgOiBwcm9wcy50eXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiBoKEdsdWdnaVR5cGUsIHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSk7XG4gICAgfSkpXTtcbiAgfVxuXG4gIHJldHVybiBoKEZyYWdtZW50LCBudWxsLCBoKFwiYVwiLCB7XG4gICAgaHJlZjogcHJvcHMucm91dGVyLmhvbWUoKSxcbiAgICBjbGFzczogXCJnbHVnZ2ktdGl0bGVcIlxuICB9LCBwcm9wcy50aXRsZSksIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVHlwZXModHlwZXMpIHtcbiAgdmFyIGZsYXR0ZW5lZCA9IFtdO1xuICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUuY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gZmxhdHRlbmVkLnB1c2goYyk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyB0b2dnbGVDbGFzcyB9IGZyb20gXCJtb2phdmUvZG9tL21hbmlwdWxhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9nZ2xlRnVsbFNjcmVlbihidXR0b24sIGNvbnRlbnRWaWV3KSB7XG4gIHZhciBmdWxsc2NyZWVuID0gZmFsc2U7XG4gIG9uKGJ1dHRvbiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZnVsbHNjcmVlbiA9ICFmdWxsc2NyZWVuO1xuICAgIHRvZ2dsZUNsYXNzKGNvbnRlbnRWaWV3LCBcImlzLWZ1bGxzY3JlZW5cIiwgZnVsbHNjcmVlbik7XG4gICAgdG9nZ2xlQ2xhc3MoYnV0dG9uLCBcImdsdWdnaS1pcy1hY3RpdmVcIiwgZnVsbHNjcmVlbik7XG4gIH0pO1xufSIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gaWNvbihpY29uU3ZnLCB0aXRsZSkge1xuICByZXR1cm4gaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1pY29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogaWNvblN2Z1xuICAgIH0sXG4gICAgdGl0bGU6IHRpdGxlXG4gIH0pO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVVbnN0eWxlZEVsZW1lbnQsIHByZXBlbmQsIHRvZ2dsZUNsYXNzIH0gZnJvbSBcIm1vamF2ZS9kb20vbWFuaXB1bGF0ZVwiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9jbG9zZS5zdmdcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9tZW51LnN2Z1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZShjb250YWluZXIpIHtcbiAgdmFyIGJ1dHRvbiA9IGNyZWF0ZVVuc3R5bGVkRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXNpZGViYXItdG9nZ2xlXCIsXG4gICAgaHRtbDogXCI8c3BhbiBjbGFzcz1cXFwiZ2x1Z2dpLWRlZmF1bHRcXFwiPlwiICsgbWVudUljb24gKyBcIjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiZ2x1Z2dpLXRvZ2dsZWRcXFwiPlwiICsgY2xvc2VJY29uICsgXCI8L3NwYW4+XCJcbiAgfSk7XG4gIHZhciBpc1RvZ2dsZWQgPSBmYWxzZTtcbiAgcHJlcGVuZChjb250YWluZXIsIGJ1dHRvbik7XG4gIG9uKGJ1dHRvbiwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaXNUb2dnbGVkID0gIWlzVG9nZ2xlZDtcbiAgICB0b2dnbGVDbGFzcyhjb250YWluZXIsIFwiZ2x1Z2dpLWlzLXRvZ2dsZWRcIiwgaXNUb2dnbGVkKTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcmVtb3ZlQWNjZW50cyBmcm9tICdyZW1vdmUtYWNjZW50cyc7XG52YXIgcmFua2luZ3MgPSB7XG4gIENBU0VfU0VOU0lUSVZFX0VRVUFMOiA5LFxuICBFUVVBTDogOCxcbiAgU1RBUlRTX1dJVEg6IDcsXG4gIFdPUkRfU1RBUlRTX1dJVEg6IDYsXG4gIFNUUklOR19DQVNFOiA1LFxuICBTVFJJTkdfQ0FTRV9BQ1JPTllNOiA0LFxuICBDT05UQUlOUzogMyxcbiAgQUNST05ZTTogMixcbiAgTUFUQ0hFUzogMSxcbiAgTk9fTUFUQ0g6IDBcbn07XG52YXIgY2FzZVJhbmtpbmdzID0ge1xuICBDQU1FTDogMC44LFxuICBQQVNDQUw6IDAuNixcbiAgS0VCQUI6IDAuNCxcbiAgU05BS0U6IDAuMixcbiAgTk9fQ0FTRTogMFxufTtcbm1hdGNoU29ydGVyLnJhbmtpbmdzID0gcmFua2luZ3M7XG5tYXRjaFNvcnRlci5jYXNlUmFua2luZ3MgPSBjYXNlUmFua2luZ3M7XG4vKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIGl0ZW1zIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byBzb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gdXNlIGZvciByYW5raW5nXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNvbWUgb3B0aW9ucyB0byBjb25maWd1cmUgdGhlIHNvcnRlclxuICogQHJldHVybiB7QXJyYXl9IC0gdGhlIG5ldyBzb3J0ZWQgYXJyYXlcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFNvcnRlcihpdGVtcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBub3QgcGVyZm9ybWluZyBhbnkgc2VhcmNoL3NvcnQgaWYgdmFsdWUoc2VhcmNoIHRlcm0pIGlzIGVtcHR5XG5cblxuICBpZiAoIXZhbHVlKSByZXR1cm4gaXRlbXM7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBrZXlzID0gX29wdGlvbnMua2V5cyxcbiAgICAgIF9vcHRpb25zJHRocmVzaG9sZCA9IF9vcHRpb25zLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9vcHRpb25zJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gcmFua2luZ3MuTUFUQ0hFUyA6IF9vcHRpb25zJHRocmVzaG9sZDtcbiAgdmFyIG1hdGNoZWRJdGVtcyA9IGl0ZW1zLnJlZHVjZShyZWR1Y2VJdGVtc1RvUmFua2VkLCBbXSk7XG4gIHJldHVybiBtYXRjaGVkSXRlbXMuc29ydChzb3J0UmFua2VkSXRlbXMpLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBpdGVtID0gX3JlZi5pdGVtO1xuICAgIHJldHVybiBpdGVtO1xuICB9KTtcblxuICBmdW5jdGlvbiByZWR1Y2VJdGVtc1RvUmFua2VkKG1hdGNoZXMsIGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIF9nZXRIaWdoZXN0UmFua2luZyA9IGdldEhpZ2hlc3RSYW5raW5nKGl0ZW0sIGtleXMsIHZhbHVlLCBvcHRpb25zKSxcbiAgICAgICAgcmFua2VkSXRlbSA9IF9nZXRIaWdoZXN0UmFua2luZy5yYW5rZWRJdGVtLFxuICAgICAgICByYW5rID0gX2dldEhpZ2hlc3RSYW5raW5nLnJhbmssXG4gICAgICAgIGtleUluZGV4ID0gX2dldEhpZ2hlc3RSYW5raW5nLmtleUluZGV4LFxuICAgICAgICBfZ2V0SGlnaGVzdFJhbmtpbmcka2UgPSBfZ2V0SGlnaGVzdFJhbmtpbmcua2V5VGhyZXNob2xkLFxuICAgICAgICBrZXlUaHJlc2hvbGQgPSBfZ2V0SGlnaGVzdFJhbmtpbmcka2UgPT09IHZvaWQgMCA/IHRocmVzaG9sZCA6IF9nZXRIaWdoZXN0UmFua2luZyRrZTtcblxuICAgIGlmIChyYW5rID49IGtleVRocmVzaG9sZCkge1xuICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgcmFua2VkSXRlbTogcmFua2VkSXRlbSxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgcmFuazogcmFuayxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlJbmRleDoga2V5SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG59XG4vKipcbiAqIEdldHMgdGhlIGhpZ2hlc3QgcmFua2luZyBmb3IgdmFsdWUgZm9yIHRoZSBnaXZlbiBpdGVtIGJhc2VkIG9uIGl0cyB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBrZXlzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgaXRlbSB0byByYW5rXG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzIC0gdGhlIGtleXMgdG8gZ2V0IHZhbHVlcyBmcm9tIHRoZSBpdGVtIGZvciB0aGUgcmFua2luZ1xuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIHJhbmsgYWdhaW5zdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRvIGNvbnRyb2wgdGhlIHJhbmtpbmdcbiAqIEByZXR1cm4ge3tyYW5rOiBOdW1iZXIsIGtleUluZGV4OiBOdW1iZXIsIGtleVRocmVzaG9sZDogTnVtYmVyfX0gLSB0aGUgaGlnaGVzdCByYW5raW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRIaWdoZXN0UmFua2luZyhpdGVtLCBrZXlzLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIWtleXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gZW5kcyB1cCBiZWluZyBkdXBsaWNhdGUgb2YgJ2l0ZW0nIGluIG1hdGNoZXMgYnV0IGNvbnNpc3RlbnRcbiAgICAgIHJhbmtlZEl0ZW06IGl0ZW0sXG4gICAgICByYW5rOiBnZXRNYXRjaFJhbmtpbmcoaXRlbSwgdmFsdWUsIG9wdGlvbnMpLFxuICAgICAga2V5SW5kZXg6IC0xLFxuICAgICAga2V5VGhyZXNob2xkOiBvcHRpb25zLnRocmVzaG9sZFxuICAgIH07XG4gIH1cblxuICB2YXIgdmFsdWVzVG9SYW5rID0gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpO1xuICByZXR1cm4gdmFsdWVzVG9SYW5rLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIF9yZWYzLCBpKSB7XG4gICAgdmFyIHJhbmsgPSBfcmVmMi5yYW5rLFxuICAgICAgICBrZXlJbmRleCA9IF9yZWYyLmtleUluZGV4LFxuICAgICAgICBrZXlUaHJlc2hvbGQgPSBfcmVmMi5rZXlUaHJlc2hvbGQ7XG4gICAgdmFyIGl0ZW1WYWx1ZSA9IF9yZWYzLml0ZW1WYWx1ZSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXM7XG4gICAgdmFyIG5ld1JhbmsgPSBnZXRNYXRjaFJhbmtpbmcoaXRlbVZhbHVlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgdmFyIG1pblJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1pblJhbmtpbmcsXG4gICAgICAgIG1heFJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1heFJhbmtpbmcsXG4gICAgICAgIHRocmVzaG9sZCA9IGF0dHJpYnV0ZXMudGhyZXNob2xkO1xuXG4gICAgaWYgKG5ld1JhbmsgPCBtaW5SYW5raW5nICYmIG5ld1JhbmsgPj0gcmFua2luZ3MuTUFUQ0hFUykge1xuICAgICAgbmV3UmFuayA9IG1pblJhbmtpbmc7XG4gICAgfSBlbHNlIGlmIChuZXdSYW5rID4gbWF4UmFua2luZykge1xuICAgICAgbmV3UmFuayA9IG1heFJhbmtpbmc7XG4gICAgfVxuXG4gICAgaWYgKG5ld1JhbmsgPiByYW5rKSB7XG4gICAgICByYW5rID0gbmV3UmFuaztcbiAgICAgIGtleUluZGV4ID0gaTtcbiAgICAgIGtleVRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmFua2VkSXRlbTogaXRlbVZhbHVlLFxuICAgICAgcmFuazogcmFuayxcbiAgICAgIGtleUluZGV4OiBrZXlJbmRleCxcbiAgICAgIGtleVRocmVzaG9sZDoga2V5VGhyZXNob2xkXG4gICAgfTtcbiAgfSwge1xuICAgIHJhbms6IHJhbmtpbmdzLk5PX01BVENILFxuICAgIGtleUluZGV4OiAtMSxcbiAgICBrZXlUaHJlc2hvbGQ6IG9wdGlvbnMudGhyZXNob2xkXG4gIH0pO1xufVxuLyoqXG4gKiBHaXZlcyBhIHJhbmtpbmdzIHNjb3JlIGJhc2VkIG9uIGhvdyB3ZWxsIHRoZSB0d28gc3RyaW5ncyBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBmb3IgdGhlIG1hdGNoIChsaWtlIGtlZXBEaWFjcml0aWNzIGZvciBjb21wYXJpc29uKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJhbmtpbmcgZm9yIGhvdyB3ZWxsIHN0cmluZ1RvUmFuayBtYXRjaGVzIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE1hdGNoUmFua2luZyh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIG9wdGlvbnMpIHtcbiAgLyogZXNsaW50IGNvbXBsZXhpdHk6WzIsIDEyXSAqL1xuICB0ZXN0U3RyaW5nID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbih0ZXN0U3RyaW5nLCBvcHRpb25zKTtcbiAgc3RyaW5nVG9SYW5rID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbihzdHJpbmdUb1JhbmssIG9wdGlvbnMpOyAvLyB0b28gbG9uZ1xuXG4gIGlmIChzdHJpbmdUb1JhbmsubGVuZ3RoID4gdGVzdFN0cmluZy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH0gLy8gY2FzZSBzZW5zaXRpdmUgZXF1YWxzXG5cblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkNBU0VfU0VOU0lUSVZFX0VRVUFMO1xuICB9XG5cbiAgdmFyIGNhc2VSYW5rID0gZ2V0Q2FzZVJhbmtpbmcodGVzdFN0cmluZyk7XG4gIHZhciBpc1BhcnRpYWwgPSBpc1BhcnRpYWxPZkNhc2UodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFuayk7XG4gIHZhciBpc0Nhc2VkQWNyb255bSA9IGlzQ2FzZUFjcm9ueW0odGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFuayk7IC8vIExvd2VyIGNhc2luZyBiZWZvcmUgZnVydGhlciBjb21wYXJpc29uXG5cbiAgdGVzdFN0cmluZyA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgc3RyaW5nVG9SYW5rID0gc3RyaW5nVG9SYW5rLnRvTG93ZXJDYXNlKCk7IC8vIGNhc2UgaW5zZW5zaXRpdmUgZXF1YWxzXG5cbiAgaWYgKHRlc3RTdHJpbmcgPT09IHN0cmluZ1RvUmFuaykge1xuICAgIHJldHVybiByYW5raW5ncy5FUVVBTCArIGNhc2VSYW5rO1xuICB9IC8vIHN0YXJ0cyB3aXRoXG5cblxuICBpZiAodGVzdFN0cmluZy5pbmRleE9mKHN0cmluZ1RvUmFuaykgPT09IDApIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RBUlRTX1dJVEggKyBjYXNlUmFuaztcbiAgfSAvLyB3b3JkIHN0YXJ0cyB3aXRoXG5cblxuICBpZiAodGVzdFN0cmluZy5pbmRleE9mKFwiIFwiICsgc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuV09SRF9TVEFSVFNfV0lUSCArIGNhc2VSYW5rO1xuICB9IC8vIGlzIGEgcGFydCBpbnNpZGUgYSBjYXNlZCBzdHJpbmdcblxuXG4gIGlmIChpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RSSU5HX0NBU0UgKyBjYXNlUmFuaztcbiAgfSAvLyBpcyBhY3JvbnltIGZvciBhIGNhc2VkIHN0cmluZ1xuXG5cbiAgaWYgKGNhc2VSYW5rID4gMCAmJiBpc0Nhc2VkQWNyb255bSkge1xuICAgIHJldHVybiByYW5raW5ncy5TVFJJTkdfQ0FTRV9BQ1JPTllNICsgY2FzZVJhbms7XG4gIH0gLy8gY29udGFpbnNcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQ09OVEFJTlMgKyBjYXNlUmFuaztcbiAgfSBlbHNlIGlmIChzdHJpbmdUb1JhbmsubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gSWYgdGhlIG9ubHkgY2hhcmFjdGVyIGluIHRoZSBnaXZlbiBzdHJpbmdUb1JhbmtcbiAgICAvLyAgIGlzbid0IGV2ZW4gY29udGFpbmVkIGluIHRoZSB0ZXN0U3RyaW5nLCB0aGVuXG4gICAgLy8gICBpdCdzIGRlZmluaXRlbHkgbm90IGEgbWF0Y2guXG4gICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICB9IC8vIGFjcm9ueW1cblxuXG4gIGlmIChnZXRBY3JvbnltKHRlc3RTdHJpbmcpLmluZGV4T2Yoc3RyaW5nVG9SYW5rKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQUNST05ZTSArIGNhc2VSYW5rO1xuICB9IC8vIHdpbGwgcmV0dXJuIGEgbnVtYmVyIGJldHdlZW4gcmFua2luZ3MuTUFUQ0hFUyBhbmRcbiAgLy8gcmFua2luZ3MuTUFUQ0hFUyArIDEgZGVwZW5kaW5nICBvbiBob3cgY2xvc2Ugb2YgYSBtYXRjaCBpdCBpcy5cblxuXG4gIHJldHVybiBnZXRDbG9zZW5lc3NSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuayk7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhY3JvbnltIGZvciBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgZm9yIHdoaWNoIHRvIHByb2R1Y2UgdGhlIGFjcm9ueW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBhY3JvbnltXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBY3JvbnltKHN0cmluZykge1xuICB2YXIgYWNyb255bSA9ICcnO1xuICB2YXIgd29yZHNJblN0cmluZyA9IHN0cmluZy5zcGxpdCgnICcpO1xuICB3b3Jkc0luU3RyaW5nLmZvckVhY2goZnVuY3Rpb24gKHdvcmRJblN0cmluZykge1xuICAgIHZhciBzcGxpdEJ5SHlwaGVuV29yZHMgPSB3b3JkSW5TdHJpbmcuc3BsaXQoJy0nKTtcbiAgICBzcGxpdEJ5SHlwaGVuV29yZHMuZm9yRWFjaChmdW5jdGlvbiAoc3BsaXRCeUh5cGhlbldvcmQpIHtcbiAgICAgIGFjcm9ueW0gKz0gc3BsaXRCeUh5cGhlbldvcmQuc3Vic3RyKDAsIDEpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGFjcm9ueW07XG59XG4vKipcbiAqIFJldHVybnMgYSBzY29yZSBiYXNlIG9uIHRoZSBjYXNlIG9mIHRoZSB0ZXN0U3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHRoZSByYW5raW5nLFxuICogYmFzZWQgb24gdGhlIGNhc2UgYmV0d2VlbiAwIGFuZCAxIGZvciBob3cgdGhlIHRlc3RTdHJpbmcgbWF0Y2hlcyB0aGUgY2FzZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2FzZVJhbmtpbmcodGVzdFN0cmluZykge1xuICB2YXIgY29udGFpbnNVcHBlckNhc2UgPSB0ZXN0U3RyaW5nLnRvTG93ZXJDYXNlKCkgIT09IHRlc3RTdHJpbmc7XG4gIHZhciBjb250YWluc0Rhc2ggPSB0ZXN0U3RyaW5nLmluZGV4T2YoJy0nKSA+PSAwO1xuICB2YXIgY29udGFpbnNVbmRlcnNjb3JlID0gdGVzdFN0cmluZy5pbmRleE9mKCdfJykgPj0gMDtcblxuICBpZiAoIWNvbnRhaW5zVXBwZXJDYXNlICYmICFjb250YWluc1VuZGVyc2NvcmUgJiYgY29udGFpbnNEYXNoKSB7XG4gICAgcmV0dXJuIGNhc2VSYW5raW5ncy5LRUJBQjtcbiAgfVxuXG4gIGlmICghY29udGFpbnNVcHBlckNhc2UgJiYgY29udGFpbnNVbmRlcnNjb3JlICYmICFjb250YWluc0Rhc2gpIHtcbiAgICByZXR1cm4gY2FzZVJhbmtpbmdzLlNOQUtFO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5zVXBwZXJDYXNlICYmICFjb250YWluc0Rhc2ggJiYgIWNvbnRhaW5zVW5kZXJzY29yZSkge1xuICAgIHZhciBzdGFydHNXaXRoVXBwZXJDYXNlID0gdGVzdFN0cmluZ1swXS50b1VwcGVyQ2FzZSgpID09PSB0ZXN0U3RyaW5nWzBdO1xuXG4gICAgaWYgKHN0YXJ0c1dpdGhVcHBlckNhc2UpIHtcbiAgICAgIHJldHVybiBjYXNlUmFua2luZ3MuUEFTQ0FMO1xuICAgIH1cblxuICAgIHJldHVybiBjYXNlUmFua2luZ3MuQ0FNRUw7XG4gIH1cblxuICByZXR1cm4gY2FzZVJhbmtpbmdzLk5PX0NBU0U7XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIG9uZSBvZiB0aGUgY2FzZSBwYXJ0cyBpbiB0aGUgdGVzdFN0cmluZyAod29ya3Mgd2l0aCBhbnkgc3RyaW5nIGNhc2UpXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiBpc1BhcnRpYWxPZkNhc2UoJ2hlbGxvV29ybGQnLCAnd29ybGQnLCBjYXNlUmFua2luZ3MuQ0FNRUwpXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBmYWxzZVxuICogaXNQYXJ0aWFsT2ZDYXNlKCdoZWxsb1dvcmxkJywgJ293b3JsJywgY2FzZVJhbmtpbmdzLkNBTUVMKVxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHBhcmFtIHtOdW1iZXJ9IGNhc2VSYW5raW5nIC0gdGhlIHJhbmtpbmcgc2NvcmUgYmFzZWQgb24gY2FzZSBvZiB0ZXN0U3RyaW5nXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGUgc3RyaW5nVG9SYW5rIGlzIG9uZSBvZiB0aGUgY2FzZSBwYXJ0cyBpbiB0aGUgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gaXNQYXJ0aWFsT2ZDYXNlKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmtpbmcpIHtcbiAgdmFyIHRlc3RJbmRleCA9IHRlc3RTdHJpbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZ1RvUmFuay50b0xvd2VyQ2FzZSgpKTtcblxuICBzd2l0Y2ggKGNhc2VSYW5raW5nKSB7XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuU05BS0U6XG4gICAgICByZXR1cm4gdGVzdFN0cmluZ1t0ZXN0SW5kZXggLSAxXSA9PT0gJ18nO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuS0VCQUI6XG4gICAgICByZXR1cm4gdGVzdFN0cmluZ1t0ZXN0SW5kZXggLSAxXSA9PT0gJy0nO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuUEFTQ0FMOlxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLkNBTUVMOlxuICAgICAgcmV0dXJuIHRlc3RJbmRleCAhPT0gLTEgJiYgdGVzdFN0cmluZ1t0ZXN0SW5kZXhdID09PSB0ZXN0U3RyaW5nW3Rlc3RJbmRleF0udG9VcHBlckNhc2UoKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbi8qKlxuICogQ2hlY2sgaWYgc3RyaW5nVG9SYW5rIGlzIGFuIGFjcm9ueW0gZm9yIGEgcGFydGlhbCBjYXNlXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiBpc0Nhc2VBY3JvbnltKCdzdXBlcl9kdXBlcl9maWxlJywgJ3NkZicsIGNhc2VSYW5raW5ncy5TTkFLRSlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgYWNyb255bSB0byB0ZXN0XG4gKiBAcGFyYW0ge051bWJlcn0gY2FzZVJhbmsgLSB0aGUgcmFua2luZyBvZiB0aGUgY2FzZVxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIHN0cmluZ1RvUmFuayBpcyBhbiBhY3JvbnltIGZvciB0aGUgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gaXNDYXNlQWNyb255bSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5rKSB7XG4gIHZhciBzcGxpdFZhbHVlID0gbnVsbDtcblxuICBzd2l0Y2ggKGNhc2VSYW5rKSB7XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuU05BS0U6XG4gICAgICBzcGxpdFZhbHVlID0gJ18nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5LRUJBQjpcbiAgICAgIHNwbGl0VmFsdWUgPSAnLSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLlBBU0NBTDpcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5DQU1FTDpcbiAgICAgIHNwbGl0VmFsdWUgPSAvKD89W0EtWl0pLztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHNwbGl0VmFsdWUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHNwbGl0VGVzdFN0cmluZyA9IHRlc3RTdHJpbmcuc3BsaXQoc3BsaXRWYWx1ZSk7XG4gIHJldHVybiBzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKS5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChjb3JyZWN0LCBjaGFyLCBjaGFySW5kZXgpIHtcbiAgICB2YXIgc3BsaXRJdGVtID0gc3BsaXRUZXN0U3RyaW5nW2NoYXJJbmRleF07XG4gICAgcmV0dXJuIGNvcnJlY3QgJiYgc3BsaXRJdGVtICYmIHNwbGl0SXRlbVswXS50b0xvd2VyQ2FzZSgpID09PSBjaGFyO1xuICB9LCB0cnVlKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHNjb3JlIGJhc2VkIG9uIGhvdyBzcHJlYWQgYXBhcnQgdGhlXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIHN0cmluZ1RvUmFuayBhcmUgd2l0aGluIHRoZSB0ZXN0U3RyaW5nLlxuICogQSBudW1iZXIgY2xvc2UgdG8gcmFua2luZ3MuTUFUQ0hFUyByZXByZXNlbnRzIGEgbG9vc2UgbWF0Y2guIEEgbnVtYmVyIGNsb3NlXG4gKiB0byByYW5raW5ncy5NQVRDSEVTICsgMSByZXByZXNlbnRzIGEgdGlnaHRlciBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICogcmFua2luZ3MuTUFUQ0hFUyArIDEgZm9yIGhvdyB3ZWxsIHN0cmluZ1RvUmFuayBtYXRjaGVzIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKSB7XG4gIHZhciBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgPSAwO1xuICB2YXIgY2hhck51bWJlciA9IDA7XG5cbiAgZnVuY3Rpb24gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKG1hdGNoQ2hhciwgc3RyaW5nLCBpbmRleCkge1xuICAgIGZvciAodmFyIGogPSBpbmRleDsgaiA8IHN0cmluZy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHN0cmluZ0NoYXIgPSBzdHJpbmdbal07XG5cbiAgICAgIGlmIChzdHJpbmdDaGFyID09PSBtYXRjaENoYXIpIHtcbiAgICAgICAgbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50ICs9IDE7XG4gICAgICAgIHJldHVybiBqICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSYW5raW5nKHNwcmVhZCkge1xuICAgIHZhciBpbk9yZGVyUGVyY2VudGFnZSA9IG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCAvIHN0cmluZ1RvUmFuay5sZW5ndGg7XG4gICAgdmFyIHJhbmtpbmcgPSByYW5raW5ncy5NQVRDSEVTICsgaW5PcmRlclBlcmNlbnRhZ2UgKiAoMSAvIHNwcmVhZCk7XG4gICAgcmV0dXJuIHJhbmtpbmc7XG4gIH1cblxuICB2YXIgZmlyc3RJbmRleCA9IGZpbmRNYXRjaGluZ0NoYXJhY3RlcihzdHJpbmdUb1JhbmtbMF0sIHRlc3RTdHJpbmcsIDApO1xuXG4gIGlmIChmaXJzdEluZGV4IDwgMCkge1xuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfVxuXG4gIGNoYXJOdW1iZXIgPSBmaXJzdEluZGV4O1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgc3RyaW5nVG9SYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoQ2hhciA9IHN0cmluZ1RvUmFua1tpXTtcbiAgICBjaGFyTnVtYmVyID0gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKG1hdGNoQ2hhciwgdGVzdFN0cmluZywgY2hhck51bWJlcik7XG4gICAgdmFyIGZvdW5kID0gY2hhck51bWJlciA+IC0xO1xuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzcHJlYWQgPSBjaGFyTnVtYmVyIC0gZmlyc3RJbmRleDtcbiAgcmV0dXJuIGdldFJhbmtpbmcoc3ByZWFkKTtcbn1cbi8qKlxuICogU29ydHMgaXRlbXMgdGhhdCBoYXZlIGEgcmFuaywgaW5kZXgsIGFuZCBrZXlJbmRleFxuICogQHBhcmFtIHtPYmplY3R9IGEgLSB0aGUgZmlyc3QgaXRlbSB0byBzb3J0XG4gKiBAcGFyYW0ge09iamVjdH0gYiAtIHRoZSBzZWNvbmQgaXRlbSB0byBzb3J0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IC0xIGlmIGEgc2hvdWxkIGNvbWUgZmlyc3QsIDEgaWYgYiBzaG91bGQgY29tZSBmaXJzdFxuICogTm90ZTogd2lsbCBuZXZlciByZXR1cm4gMFxuICovXG5cblxuZnVuY3Rpb24gc29ydFJhbmtlZEl0ZW1zKGEsIGIpIHtcbiAgdmFyIGFGaXJzdCA9IC0xO1xuICB2YXIgYkZpcnN0ID0gMTtcbiAgdmFyIGFSYW5rZWRJdGVtID0gYS5yYW5rZWRJdGVtLFxuICAgICAgYVJhbmsgPSBhLnJhbmssXG4gICAgICBhS2V5SW5kZXggPSBhLmtleUluZGV4O1xuICB2YXIgYlJhbmtlZEl0ZW0gPSBiLnJhbmtlZEl0ZW0sXG4gICAgICBiUmFuayA9IGIucmFuayxcbiAgICAgIGJLZXlJbmRleCA9IGIua2V5SW5kZXg7XG5cbiAgaWYgKGFSYW5rID09PSBiUmFuaykge1xuICAgIGlmIChhS2V5SW5kZXggPT09IGJLZXlJbmRleCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhhUmFua2VkSXRlbSkubG9jYWxlQ29tcGFyZShiUmFua2VkSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhS2V5SW5kZXggPCBiS2V5SW5kZXggPyBhRmlyc3QgOiBiRmlyc3Q7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhUmFuayA+IGJSYW5rID8gYUZpcnN0IDogYkZpcnN0O1xuICB9XG59XG4vKipcbiAqIFByZXBhcmVzIHZhbHVlIGZvciBjb21wYXJpc29uIGJ5IHN0cmluZ2lmeWluZyBpdCwgcmVtb3ZpbmcgZGlhY3JpdGljcyAoaWYgc3BlY2lmaWVkKVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNsZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHtrZWVwRGlhY3JpdGljczogd2hldGhlciB0byByZW1vdmUgZGlhY3JpdGljc31cbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHByZXBhcmVkIHZhbHVlXG4gKi9cblxuXG5mdW5jdGlvbiBwcmVwYXJlVmFsdWVGb3JDb21wYXJpc29uKHZhbHVlLCBfcmVmNCkge1xuICB2YXIga2VlcERpYWNyaXRpY3MgPSBfcmVmNC5rZWVwRGlhY3JpdGljcztcbiAgdmFsdWUgPSBcIlwiICsgdmFsdWU7IC8vIHRvU3RyaW5nXG5cbiAgaWYgKCFrZWVwRGlhY3JpdGljcykge1xuICAgIHZhbHVlID0gcmVtb3ZlQWNjZW50cyh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdldHMgdmFsdWUgZm9yIGtleSBpbiBpdGVtIGF0IGFyYml0cmFyaWx5IG5lc3RlZCBrZXlwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIHRoZSBpdGVtXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0ga2V5IC0gdGhlIHBvdGVudGlhbGx5IG5lc3RlZCBrZXlwYXRoIG9yIHByb3BlcnR5IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZShzKSBhdCB0aGUgbmVzdGVkIGtleXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEl0ZW1WYWx1ZXMoaXRlbSwga2V5KSB7XG4gIGlmIChfdHlwZW9mKGtleSkgPT09ICdvYmplY3QnKSB7XG4gICAga2V5ID0ga2V5LmtleTtcbiAgfVxuXG4gIHZhciB2YWx1ZTtcblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbHVlID0ga2V5KGl0ZW0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgIC8vIGhhbmRsZSBuZXN0ZWQga2V5c1xuICAgIHZhbHVlID0ga2V5LnNwbGl0KCcuJykucmVkdWNlKGZ1bmN0aW9uIChpdGVtT2JqLCBuZXN0ZWRLZXkpIHtcbiAgICAgIHJldHVybiBpdGVtT2JqID8gaXRlbU9ialtuZXN0ZWRLZXldIDogbnVsbDtcbiAgICB9LCBpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGl0ZW1ba2V5XTtcbiAgfSAvLyBjb25jYXQgYmVjYXVzZSBgdmFsdWVgIGNhbiBiZSBhIHN0cmluZyBvciBhbiBhcnJheVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIHJldHVybiB2YWx1ZSAhPSBudWxsID8gW10uY29uY2F0KHZhbHVlKSA6IG51bGw7XG59XG4vKipcbiAqIEdldHMgYWxsIHRoZSB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBrZXlzIGluIHRoZSBnaXZlbiBpdGVtIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlIHZhbHVlc1xuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSB0aGUgaXRlbSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgd2lsbCBiZSByZXRyaWV2ZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgLSB0aGUga2V5cyB0byB1c2UgdG8gcmV0cmlldmUgdGhlIHZhbHVlc1xuICogQHJldHVybiB7QXJyYXl9IG9iamVjdHMgd2l0aCB7aXRlbVZhbHVlLCBhdHRyaWJ1dGVzfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhbGxWYWxzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVzID0gZ2V0SXRlbVZhbHVlcyhpdGVtLCBrZXkpO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1WYWx1ZSkge1xuICAgICAgICBhbGxWYWxzLnB1c2goe1xuICAgICAgICAgIGl0ZW1WYWx1ZTogaXRlbVZhbHVlLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGdldEtleUF0dHJpYnV0ZXMoa2V5KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxWYWxzO1xuICB9LCBbXSk7XG59XG4vKipcbiAqIEdldHMgYWxsIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgZ2l2ZW4ga2V5XG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGtleSAtIHRoZSBrZXkgZnJvbSB3aGljaCB0aGUgYXR0cmlidXRlcyB3aWxsIGJlIHJldHJpZXZlZFxuICogQHJldHVybiB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5J3MgYXR0cmlidXRlc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0S2V5QXR0cmlidXRlcyhrZXkpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAga2V5ID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBtYXhSYW5raW5nOiBJbmZpbml0eSxcbiAgICBtaW5SYW5raW5nOiAtSW5maW5pdHlcbiAgfSwga2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTb3J0ZXI7XG5leHBvcnQgeyByYW5raW5ncyB9OyIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4uL3J1bnRpbWVcIjtcbnZhciBTUEVDSUFMX0FUVFJJQlVURV9TRVRURVJTID0gL14oaHRtbHx0ZXh0fGNzcykkLztcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRycyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVzLCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG5cbiAgICBpZiAoU1BFQ0lBTF9BVFRSSUJVVEVfU0VUVEVSUy50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbGVtZW50W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUgPT09IHRydWUgPyBrZXkgOiBcIlwiICsgdmFsdWUpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4uL3J1bnRpbWVcIjtcbnZhciBDVVNUT01fUFJPUEVSVFlfUkVHRVggPSAvXi0tLztcbnZhciBERUZBVUxUX1NUWUxFUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7XG52YXIgVkVORE9SX1BSRUZJWEVTID0gW1wiLXdlYmtpdC1cIiwgXCItbW96LVwiLCBcIi1vLVwiLCBcIi1tcy1cIl07XG52YXIgcHJvcGVydHlOYW1lQ2FjaGUgPSB7fTtcbnZhciBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcbnZhciBESVJFQ1RMWV9BQ0NFU1NJQkxFX1NFVFRFUlMgPSAvc2Nyb2xsKFRvcHxMZWZ0KS9pO1xudmFyIEhBU19QSVhFTFNfVU5JVCA9IC9weCQvO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XTtcbiAgfVxuXG4gIGlmIChwcm9wZXJ0eSBpbiBERUZBVUxUX1NUWUxFUykge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgVkVORE9SX1BSRUZJWEVTLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZWZpeGVkTmFtZSA9IFwiXCIuY29uY2F0KFZFTkRPUl9QUkVGSVhFU1tpXSkuY29uY2F0KHByb3BlcnR5KTtcblxuICAgIGlmIChwcmVmaXhlZE5hbWUgaW4gREVGQVVMVF9TVFlMRVMpIHtcbiAgICAgIHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XSA9IHByZWZpeGVkTmFtZTtcbiAgICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldID0gcHJvcGVydHk7XG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50cywgc3R5bGVzKSB7XG4gIHZhciBzdHlsZWRFbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHMpID8gZWxlbWVudHMgOiBbZWxlbWVudHNdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHN0eWxlZEVsZW1lbnRzW2ldO1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkoc3R5bGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG5cbiAgICAgIGlmIChESVJFQ1RMWV9BQ0NFU1NJQkxFX1NFVFRFUlMudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgZWxlbWVudFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzW3Byb3BlcnR5XSA9PT0gXCJudW1iZXJcIiAmJiAhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QocHJvcGVydHkpKSB7XG4gICAgICAgIHZhbHVlICs9IFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgcHJvcGVydHkgPSBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICBzdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbWVudCkge1xuICB2YXIgcHNldWRvRWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgdmFyIHZpZXcgPSBudWxsICE9PSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgJiYgZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICB2aWV3ID0gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBwc2V1ZG9FbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIHZhciBwc2V1ZG9FbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB2YXIgY2FzdGVkRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUy50ZXN0KHByb3BlcnR5KSkge1xuICAgIHJldHVybiBjYXN0ZWRFbGVtZW50W3Byb3BlcnR5XTtcbiAgfVxuXG4gIGlmICghQ1VTVE9NX1BST1BFUlRZX1JFR0VYLnRlc3QocHJvcGVydHkpKSB7XG4gICAgcHJvcGVydHkgPSBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoY2FzdGVkRWxlbWVudCwgcHNldWRvRWxlbWVudCk7XG4gIHZhciB2YWx1ZSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCBzdHlsZXNbcHJvcGVydHldO1xuXG4gIGlmIChcIm9wYWNpdHlcIiA9PT0gcHJvcGVydHkpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwiXCIgPyBcIjFcIiA6IHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KHByb3BlcnR5KSAmJiBIQVNfUElYRUxTX1VOSVQudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUucmVwbGFjZShIQVNfUElYRUxTX1VOSVQsIFwiXCIpLCAxMCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgc3R5bGUpIHtcbiAgdmFyIGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSBzdHlsZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgXCJub25lXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICB1cGRhdGVEaXNwbGF5KGVsZW1lbnQsIFwiXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gIH07XG59IiwiaW1wb3J0IHsgc3BsaXRTdHJpbmdWYWx1ZSB9IGZyb20gXCIuL3V0aWxzXCI7XG52YXIgbGlzdGVuZXJSZWdpc3RyeSA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gb24oZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuICB2YXIgdHlwZXMgPSBzcGxpdFN0cmluZ1ZhbHVlKHR5cGUpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKG51bGwgPT09IG5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBldmVudFR5cGUgPSB0eXBlc1tqXTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KG5vZGUpO1xuXG4gICAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgICBsaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgbGlzdGVuZXJSZWdpc3RyeS5zZXQobm9kZSwgbGlzdGVuZXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyc1tldmVudFR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzW2V2ZW50VHlwZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmYoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuICB2YXIgdHlwZXMgPSBzcGxpdFN0cmluZ1ZhbHVlKHR5cGUpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdHlwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKG51bGwgPT09IG5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBldmVudFR5cGUgPSB0eXBlc1tqXTtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KG5vZGUpO1xuXG4gICAgICBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQgJiYgbGlzdGVuZXJzW2V2ZW50VHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgIGlmICgtMSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gb25jZShlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaW50ZXJtZWRpYXRlID0gZnVuY3Rpb24gaW50ZXJtZWRpYXRlKGV2ZW50KSB7XG4gICAgaGFuZGxlcihldmVudCk7XG4gICAgb2ZmKGVsZW1lbnQsIHR5cGUsIGludGVybWVkaWF0ZSk7XG4gIH07XG5cbiAgb24oZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgcmV0dXJuIGludGVybWVkaWF0ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgaGFuZGxlcikge1xuICBpZiAobnVsbCA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGludGVybWVkaWF0ZSA9IGZ1bmN0aW9uIGludGVybWVkaWF0ZShldmVudCkge1xuICAgIHZhciBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0ID0gZmluZERlbGVnYXRlZFRhcmdldChlbGVtZW50LCBldmVudC50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgIGlmIChudWxsICE9PSBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0KSB7XG4gICAgICBoYW5kbGVyKGV2ZW50LCBtYXRjaGVkRGVsZWdhdGVkVGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgb24oZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgcmV0dXJuIGludGVybWVkaWF0ZTtcbn1cblxuZnVuY3Rpb24gZmluZERlbGVnYXRlZFRhcmdldChkZWxlZ2F0ZUVsZW1lbnQsIGN1cnJlbnRUYXJnZXQsIHNlbGVjdG9yKSB7XG4gIHZhciBub2RlID0gY3VycmVudFRhcmdldDtcblxuICB3aGlsZSAobnVsbCAhPT0gbm9kZSAmJiBub2RlICE9PSBkZWxlZ2F0ZUVsZW1lbnQpIHtcbiAgICBpZiAobm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlcihlbGVtZW50LCB0eXBlKSB7XG4gIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQodHlwZSwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICBkZXRhaWw6IGRhdGFcbiAgfSk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHR5cGUsIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsICEhYXJncy5idWJibGVzLCAhIWFyZ3MuY2FuY2VsYWJsZSwgYXJncy5kZXRhaWwpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMaXN0ZW5lcnMoZWxlbWVudCkge1xuICByZXR1cm4gbGlzdGVuZXJSZWdpc3RyeS5nZXQoZWxlbWVudCkgfHwge307XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSBcIi4vYXR0clwiO1xuaW1wb3J0IHsgc2V0U3R5bGVzIH0gZnJvbSBcIi4vY3NzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIHZhciBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICB2YXIgY2hpbGRyZW4gPSBkb2MuYm9keS5jaGlsZHJlbjtcblxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgcGFyc2UgSFRNTCB3aXRoIGV4YWN0bHkgb25lIHZhbGlkIHJvb3QgZWxlbWVudC4gQSB2YWxpZCBlbGVtZW50IGNhbiBzdGFuZCBvbiBpdHMgb3duIGluIHRoZSBib2R5LlwiKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlblswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSkge1xuICB2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBlbGVtZW50ID0gY3JlYXRlVW5zdHlsZWRFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMuY3NzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVuc3R5bGVkRWxlbWVudCh0eXBlKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGVsZW1lbnQgPSAtMSAhPT0gdHlwZS5pbmRleE9mKFwiPFwiKSA/IHBhcnNlSHRtbCh0eXBlKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIHNldEF0dHJzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5odG1sICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGxpc3RbaV0ucGFyZW50Tm9kZTtcblxuICAgIGlmIChudWxsICE9PSBwYXJlbnROb2RlKSB7XG4gICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3RbaV0pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KGVsZW1lbnQpIHtcbiAgdmFyIGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNFbGVtZW50KGxpc3RbaV0pKSB7XG4gICAgICBsaXN0W2ldLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShlbGVtZW50LCByZXBsYWNlbWVudCkge1xuICB2YXIgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICBpZiAobnVsbCAhPT0gcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBhZGphY2VudFBvc2l0aW9uLCBpbnNlcnRJbnRvLCBpbnNlcnRSZWZlcmVuY2UpIHtcbiAgaWYgKHR5cGVvZiBpbnNlcnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZWZlcmVuY2UuaW5zZXJ0QWRqYWNlbnRIVE1MKGFkamFjZW50UG9zaXRpb24sIGluc2VydCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluc2VydEludG8gPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGlzdCA9IEFycmF5LmlzQXJyYXkoaW5zZXJ0KSA/IGluc2VydCA6IFtpbnNlcnRdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGluc2VydEludG8uaW5zZXJ0QmVmb3JlKGxpc3RbaV0sIGluc2VydFJlZmVyZW5jZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImJlZm9yZWVuZFwiLCByZWZlcmVuY2UsIG51bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmQocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJhZnRlcmJlZ2luXCIsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLmZpcnN0RWxlbWVudENoaWxkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmUocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJiZWZvcmViZWdpblwiLCByZWZlcmVuY2UucGFyZW50RWxlbWVudCwgcmVmZXJlbmNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZnRlcihyZWZlcmVuY2UsIGluc2VydCkge1xuICBpbnNlcnRFbGVtZW50KHJlZmVyZW5jZSwgaW5zZXJ0LCBcImFmdGVyZW5kXCIsIHJlZmVyZW5jZS5wYXJlbnRFbGVtZW50LCByZWZlcmVuY2UubmV4dEVsZW1lbnRTaWJsaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGFkZCkge1xuICBlbGVtZW50LmNsYXNzTGlzdFthZGQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0oY2xhc3NOYW1lKTtcbn0iLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbC9kb21cIjtcblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXMoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBudWxsID09PSBzZWxlY3RvciB8fCBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBhY2Nlc3Nvcikge1xuICB2YXIgaW5kZXhhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIHZhciBzaWJsaW5nID0gaW5kZXhhYmxlRWxlbWVudFthY2Nlc3Nvcl07XG4gIHZhciBsaXN0ID0gW107XG5cbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKSB7XG4gICAgICBsaXN0LnB1c2goc2libGluZyk7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmdbYWNjZXNzb3JdO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIGZldGNoU2luZ2xlU2libGluZyhlbGVtZW50LCBzZWxlY3RvciwgYWNjZXNzb3IpIHtcbiAgdmFyIGluZGV4YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICB2YXIgc2libGluZyA9IGluZGV4YWJsZUVsZW1lbnRbYWNjZXNzb3JdO1xuXG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmdbYWNjZXNzb3JdO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRPbmUoc2VsZWN0b3IpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobGlzdCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdChsaXN0LCBzZWxlY3Rvcikge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gIWUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAtMSAhPT0gc2VsZWN0b3IuaW5kZXhPZihlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlICE9PSBzZWxlY3RvcjtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50KSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgdmFyIGxpc3QgPSBbXTtcbiAgdmFyIGNoaWxkID0gcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChlbGVtZW50TWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpKSB7XG4gICAgICBsaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RDaGlsZChwYXJlbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICB2YXIgY2hpbGQgPSBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXYoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaFNpbmdsZVNpYmxpbmcoZWxlbWVudCwgc2VsZWN0b3IsIFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KGVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hTaW5nbGVTaWJsaW5nKGVsZW1lbnQsIHNlbGVjdG9yLCBcIm5leHRFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmV2QWxsKGVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gZmV0Y2hBbGxTaWJsaW5ncyhlbGVtZW50LCBzZWxlY3RvciwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHRBbGwoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBcIm5leHRFbGVtZW50U2libGluZ1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaWJsaW5ncyhlbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgdmFyIGxpc3QgPSBbXTtcbiAgdmFyIHNpYmxpbmcgPSBudWxsO1xuXG4gIGlmIChudWxsICE9PSBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICBzaWJsaW5nID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICB9XG5cbiAgd2hpbGUgKG51bGwgIT09IHNpYmxpbmcpIHtcbiAgICBpZiAoc2libGluZyAhPT0gZWxlbWVudCAmJiBlbGVtZW50TWF0Y2hlcyhzaWJsaW5nLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChzaWJsaW5nKTtcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHZhciByb290RWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICB3aGlsZSAobnVsbCAhPT0gcGFyZW50ICYmIHJvb3RFbGVtZW50ICE9PSBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZEVsZW1lbnQocGFyZW50LCBub2RlKSB7XG4gIHZhciBwb2ludGVyID0gbm9kZTtcblxuICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgIGlmIChwb2ludGVyID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvaW50ZXIgPSBwb2ludGVyLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PT0gXCJcIiA/IFtdIDogdmFsdWUudHJpbSgpLnNwbGl0KC8gKy8pO1xufSIsImltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vcnVudGltZVwiO1xuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSh0YXJnZXQpIHtcbiAgaWYgKDAgPT09IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGlmICgxIDwgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IDAgOiBhcmd1bWVudHMubGVuZ3RoIC0gMSkpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICByZXN1bHQgPSBtZXJnZShyZXN1bHQsIGkgKyAxIDwgMSB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgKyAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2kgKyAxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBzb3VyY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gIHZhciBzb3VyY2VUeXBlID0gdHlwZU9mKHNvdXJjZSk7XG4gIHZhciB0YXJnZXRUeXBlID0gdHlwZU9mKHRhcmdldCk7XG5cbiAgaWYgKHNvdXJjZVR5cGUgPT09IHRhcmdldFR5cGUgfHwgXCJudWxsXCIgPT09IHNvdXJjZVR5cGUgfHwgXCJudWxsXCIgPT09IHRhcmdldFR5cGUpIHtcbiAgICBpZiAoXCJhcnJheVwiID09PSB0YXJnZXRUeXBlKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChcIm9iamVjdFwiID09PSB0YXJnZXRUeXBlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQgPyBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pIDogc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2FmZVBhcnNlSnNvbih2YWx1ZSkge1xuICB0cnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSB2YWx1ZS50cmltKCk7XG4gICAgICByZXR1cm4gY29udGVudCAhPT0gXCJcIiA/IEpTT04ucGFyc2UoY29udGVudCkgOiBudWxsO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgSlNPTiBjb250ZW50OiBcIi5jb25jYXQoZS5tZXNzYWdlKSwgZSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUVsZW1lbnRBc0pzb24oZWxlbWVudCkge1xuICByZXR1cm4gc2FmZVBhcnNlSnNvbigoZWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiKS5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKS5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKS5yZXBsYWNlKC8mYW1wOy9nLCBcIiZcIikpO1xufSIsImZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDsgfSBlbHNlIHsgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyB2YXIgYSA9IFtudWxsXTsgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpOyB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7IHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpOyBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTsgcmV0dXJuIGluc3RhbmNlOyB9OyB9IHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZmluZCB9IGZyb20gXCIuLi9kb20vdHJhdmVyc2VcIjtcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gXCIuLi9leHRlbmRcIjtcbmltcG9ydCB7IHBhcnNlRWxlbWVudEFzSnNvbiB9IGZyb20gXCIuLi9qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gbW91bnQoc2VsZWN0b3IsIG1vdW50YWJsZSwgb3B0aW9ucykge1xuICBkb01vdW50KGZpbmQoc2VsZWN0b3IpLCBtb3VudGFibGUsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50TGF6eShzZWxlY3RvciwgaW1wb3J0ZXIsIG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnRzID0gZmluZChzZWxlY3Rvcik7XG5cbiAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbXBvcnRlcigpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIHJldHVybiBkb01vdW50KGVsZW1lbnRzLCBtb2R1bGUuZGVmYXVsdCwgb3B0aW9ucyk7XG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiTW91bnRpbmcgb2YgY29tcG9uZW50IG9mIHBhdGggJ1wiLmNvbmNhdChzZWxlY3RvciwgXCInIGZhaWxlZDogXCIpLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZG9Nb3VudChlbGVtZW50cywgbW91bnRhYmxlLCByYXdPcHRpb25zKSB7XG4gIHZhciBtb3VudGFibGVBbnkgPSBtb3VudGFibGU7XG4gIHZhciBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICB0eXBlOiBcImZ1bmNcIlxuICB9LCByYXdPcHRpb25zIHx8IHt9KTtcbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChcImpzeFwiID09PSBvcHRpb25zLnR5cGUpIHtcbiAgICAgIHZhciBvcHRzID0gb3B0aW9ucztcbiAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICB2YXIgcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBtb3VudCBvbiBjb250YWluZXIgd2l0aG91dCBwYXJlbnQuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0cy5oeWRyYXRlKSB7XG4gICAgICAgIHBhcmFtcyA9IGV4dGVuZChwYXJhbXMsIHBhcnNlRWxlbWVudEFzSnNvbihub2RlKSB8fCB7fSk7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQobW91bnRhYmxlLCBwYXJhbXMpLCBwYXJlbnQsIG9wdHMuaHlkcmF0ZSA/IG5vZGUgOiB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSBpZiAoXCJjbGFzc1wiID09PSBvcHRpb25zLnR5cGUpIHtcbiAgICAgIHZhciBzdGFuZGFsb25lT3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHZhciBtb3VudGVkID0gX2NvbnN0cnVjdChtb3VudGFibGVBbnksIFtub2RlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0YW5kYWxvbmVPcHRpb25zLnBhcmFtcyB8fCBbXSkpKTtcblxuICAgICAgbW91bnRlZC5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfc3RhbmRhbG9uZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgbW91bnRhYmxlLmFwcGx5KHZvaWQgMCwgW25vZGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3N0YW5kYWxvbmVPcHRpb25zLnBhcmFtcyB8fCBbXSkpKTtcbiAgICB9XG4gIH0pO1xufSIsImlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICB2YXIgZWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gZWxlbWVudFByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50UHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkodmFsdWUsIHByb3BlcnR5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3BlcnR5KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gdHlwZU9mKHZhbHVlKSB7XG4gIHZhciBtYXRjaCA9IC9eXFxbb2JqZWN0ICguKj8pXSQvLmV4ZWMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIHJldHVybiBtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkgOiBcIm9iamVjdFwiO1xufSIsInZhciBuLFxuICAgIGwsXG4gICAgdSxcbiAgICB0LFxuICAgIGksXG4gICAgciA9IHt9LFxuICAgIGYgPSBbXSxcbiAgICBvID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8Xi0tL2k7XG5cbmZ1bmN0aW9uIGUobiwgbCkge1xuICBmb3IgKHZhciB1IGluIGwpIHtcbiAgICBuW3VdID0gbFt1XTtcbiAgfVxuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBjKG4pIHtcbiAgdmFyIGwgPSBuLnBhcmVudE5vZGU7XG4gIGwgJiYgbC5yZW1vdmVDaGlsZChuKTtcbn1cblxuZnVuY3Rpb24gcyhuLCBsLCB1KSB7XG4gIHZhciB0LFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBmLFxuICAgICAgbyA9IGFyZ3VtZW50cztcbiAgaWYgKGwgPSBlKHt9LCBsKSwgYXJndW1lbnRzLmxlbmd0aCA+IDMpIGZvciAodSA9IFt1XSwgdCA9IDM7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIHtcbiAgICB1LnB1c2gob1t0XSk7XG4gIH1cbiAgaWYgKG51bGwgIT0gdSAmJiAobC5jaGlsZHJlbiA9IHUpLCBudWxsICE9IG4gJiYgbnVsbCAhPSBuLmRlZmF1bHRQcm9wcykgZm9yIChpIGluIG4uZGVmYXVsdFByb3BzKSB7XG4gICAgdm9pZCAwID09PSBsW2ldICYmIChsW2ldID0gbi5kZWZhdWx0UHJvcHNbaV0pO1xuICB9XG4gIHJldHVybiBmID0gbC5rZXksIG51bGwgIT0gKHIgPSBsLnJlZikgJiYgZGVsZXRlIGwucmVmLCBudWxsICE9IGYgJiYgZGVsZXRlIGwua2V5LCBhKG4sIGwsIGYsIHIpO1xufVxuXG5mdW5jdGlvbiBhKGwsIHUsIHQsIGkpIHtcbiAgdmFyIHIgPSB7XG4gICAgdHlwZTogbCxcbiAgICBwcm9wczogdSxcbiAgICBrZXk6IHQsXG4gICAgcmVmOiBpLFxuICAgIF9fazogbnVsbCxcbiAgICBfX3A6IG51bGwsXG4gICAgX19iOiAwLFxuICAgIF9fZTogbnVsbCxcbiAgICBsOiBudWxsLFxuICAgIF9fYzogbnVsbCxcbiAgICBjb25zdHJ1Y3Rvcjogdm9pZCAwXG4gIH07XG4gIHJldHVybiBuLnZub2RlICYmIG4udm5vZGUociksIHI7XG59XG5cbmZ1bmN0aW9uIGgoKSB7XG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gdihuKSB7XG4gIHJldHVybiBuLmNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBwKG4pIHtcbiAgaWYgKG51bGwgPT0gbiB8fCBcImJvb2xlYW5cIiA9PSB0eXBlb2YgbikgcmV0dXJuIG51bGw7XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBuIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIG4pIHJldHVybiBhKG51bGwsIG4sIG51bGwsIG51bGwpO1xuXG4gIGlmIChudWxsICE9IG4uX19lIHx8IG51bGwgIT0gbi5fX2MpIHtcbiAgICB2YXIgbCA9IGEobi50eXBlLCBuLnByb3BzLCBuLmtleSwgbnVsbCk7XG4gICAgcmV0dXJuIGwuX19lID0gbi5fX2UsIGw7XG4gIH1cblxuICByZXR1cm4gbjtcbn1cblxuZnVuY3Rpb24geShuLCBsKSB7XG4gIHRoaXMucHJvcHMgPSBuLCB0aGlzLmNvbnRleHQgPSBsO1xufVxuXG5mdW5jdGlvbiBkKG4sIGwpIHtcbiAgaWYgKG51bGwgPT0gbCkgcmV0dXJuIG4uX19wID8gZChuLl9fcCwgbi5fX3AuX19rLmluZGV4T2YobikgKyAxKSA6IG51bGw7XG5cbiAgZm9yICh2YXIgdTsgbCA8IG4uX19rLmxlbmd0aDsgbCsrKSB7XG4gICAgaWYgKG51bGwgIT0gKHUgPSBuLl9fa1tsXSkgJiYgbnVsbCAhPSB1Ll9fZSkgcmV0dXJuIHUuX19lO1xuICB9XG5cbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbi50eXBlID8gZChuKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIG0obikge1xuICB2YXIgbCwgdTtcblxuICBpZiAobnVsbCAhPSAobiA9IG4uX19wKSAmJiBudWxsICE9IG4uX19jKSB7XG4gICAgZm9yIChuLl9fZSA9IG4uX19jLmJhc2UgPSBudWxsLCBsID0gMDsgbCA8IG4uX19rLmxlbmd0aDsgbCsrKSB7XG4gICAgICBpZiAobnVsbCAhPSAodSA9IG4uX19rW2xdKSAmJiBudWxsICE9IHUuX19lKSB7XG4gICAgICAgIG4uX19lID0gbi5fX2MuYmFzZSA9IHUuX19lO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbShuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3KHQpIHtcbiAgIXQuX19kICYmICh0Ll9fZCA9ICEwKSAmJiAxID09PSBsLnB1c2godCkgJiYgKG4uZGVib3VuY2VSZW5kZXJpbmcgfHwgdSkoZyk7XG59XG5cbmZ1bmN0aW9uIGcoKSB7XG4gIHZhciBuO1xuXG4gIGZvciAobC5zb3J0KGZ1bmN0aW9uIChuLCBsKSB7XG4gICAgcmV0dXJuIGwuX192Ll9fYiAtIG4uX192Ll9fYjtcbiAgfSk7IG4gPSBsLnBvcCgpOykge1xuICAgIG4uX19kICYmIG4uZm9yY2VVcGRhdGUoITEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGsobiwgbCwgdSwgdCwgaSwgbywgZSwgcywgYSkge1xuICB2YXIgaCxcbiAgICAgIHYsXG4gICAgICB5LFxuICAgICAgbSxcbiAgICAgIHcsXG4gICAgICBnLFxuICAgICAgayxcbiAgICAgIGIsXG4gICAgICB4ID0gbC5fX2sgfHwgXyhsLnByb3BzLmNoaWxkcmVuLCBsLl9fayA9IFtdLCBwLCAhMCksXG4gICAgICBDID0gdSAmJiB1Ll9fayB8fCBmLFxuICAgICAgUCA9IEMubGVuZ3RoO1xuXG4gIGZvciAocyA9PSByICYmIChzID0gbnVsbCAhPSBvID8gb1swXSA6IFAgPyBkKHUsIDApIDogbnVsbCksIHYgPSAwOyB2IDwgeC5sZW5ndGg7IHYrKykge1xuICAgIGlmIChudWxsICE9IChoID0geFt2XSA9IHAoeFt2XSkpKSB7XG4gICAgICBpZiAoaC5fX3AgPSBsLCBoLl9fYiA9IGwuX19iICsgMSwgbnVsbCA9PT0gKG0gPSBDW3ZdKSB8fCBtICYmIGgua2V5ID09IG0ua2V5ICYmIGgudHlwZSA9PT0gbS50eXBlKSBDW3ZdID0gdm9pZCAwO2Vsc2UgZm9yICh5ID0gMDsgeSA8IFA7IHkrKykge1xuICAgICAgICBpZiAoKG0gPSBDW3ldKSAmJiBoLmtleSA9PSBtLmtleSAmJiBoLnR5cGUgPT09IG0udHlwZSkge1xuICAgICAgICAgIENbeV0gPSB2b2lkIDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBtID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHcgPSBOKG4sIGgsIG0gPSBtIHx8IHIsIHQsIGksIG8sIGUsIG51bGwsIHMsIGEpLCAoeSA9IGgucmVmKSAmJiBtLnJlZiAhPSB5ICYmIChiIHx8IChiID0gW10pKS5wdXNoKHksIGguX19jIHx8IHcsIGgpLCBudWxsICE9IHcpIHtcbiAgICAgICAgaWYgKG51bGwgPT0gayAmJiAoayA9IHcpLCBudWxsICE9IGgubCkgdyA9IGgubCwgaC5sID0gbnVsbDtlbHNlIGlmIChvID09IG0gfHwgdyAhPSBzIHx8IG51bGwgPT0gdy5wYXJlbnROb2RlKSBuOiBpZiAobnVsbCA9PSBzIHx8IHMucGFyZW50Tm9kZSAhPT0gbikgbi5hcHBlbmRDaGlsZCh3KTtlbHNlIHtcbiAgICAgICAgICBmb3IgKGcgPSBzLCB5ID0gMDsgKGcgPSBnLm5leHRTaWJsaW5nKSAmJiB5IDwgUDsgeSArPSAyKSB7XG4gICAgICAgICAgICBpZiAoZyA9PSB3KSBicmVhayBuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG4uaW5zZXJ0QmVmb3JlKHcsIHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgPSB3Lm5leHRTaWJsaW5nLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwudHlwZSAmJiAobC5sID0gdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGwuX19lID0gaywgbnVsbCAhPSBvICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbC50eXBlKSBmb3IgKHYgPSBvLmxlbmd0aDsgdi0tOykge1xuICAgIG51bGwgIT0gb1t2XSAmJiBjKG9bdl0pO1xuICB9XG5cbiAgZm9yICh2ID0gUDsgdi0tOykge1xuICAgIG51bGwgIT0gQ1t2XSAmJiB6KENbdl0sIENbdl0pO1xuICB9XG5cbiAgaWYgKGIpIGZvciAodiA9IDA7IHYgPCBiLmxlbmd0aDsgdisrKSB7XG4gICAgaihiW3ZdLCBiWysrdl0sIGJbKyt2XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXyhuLCBsLCB1LCB0KSB7XG4gIGlmIChudWxsID09IGwgJiYgKGwgPSBbXSksIG51bGwgPT0gbiB8fCBcImJvb2xlYW5cIiA9PSB0eXBlb2YgbikgdCAmJiBsLnB1c2gobnVsbCk7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuKSkgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKSB7XG4gICAgXyhuW2ldLCBsLCB1LCB0KTtcbiAgfSBlbHNlIGwucHVzaCh1ID8gdShuKSA6IG4pO1xuICByZXR1cm4gbDtcbn1cblxuZnVuY3Rpb24gYihuLCBsLCB1LCB0LCBpKSB7XG4gIHZhciByO1xuXG4gIGZvciAociBpbiB1KSB7XG4gICAgciBpbiBsIHx8IEMobiwgciwgbnVsbCwgdVtyXSwgdCk7XG4gIH1cblxuICBmb3IgKHIgaW4gbCkge1xuICAgIGkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsW3JdIHx8IFwidmFsdWVcIiA9PT0gciB8fCBcImNoZWNrZWRcIiA9PT0gciB8fCB1W3JdID09PSBsW3JdIHx8IEMobiwgciwgbFtyXSwgdVtyXSwgdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24geChuLCBsLCB1KSB7XG4gIFwiLVwiID09PSBsWzBdID8gbi5zZXRQcm9wZXJ0eShsLCB1KSA6IG5bbF0gPSBcIm51bWJlclwiID09IHR5cGVvZiB1ICYmICExID09PSBvLnRlc3QobCkgPyB1ICsgXCJweFwiIDogdTtcbn1cblxuZnVuY3Rpb24gQyhuLCBsLCB1LCB0LCBpKSB7XG4gIHZhciByLCBmLCBvLCBlLCBjO1xuICBpZiAoXCJrZXlcIiA9PT0gKGwgPSBpID8gXCJjbGFzc05hbWVcIiA9PT0gbCA/IFwiY2xhc3NcIiA6IGwgOiBcImNsYXNzXCIgPT09IGwgPyBcImNsYXNzTmFtZVwiIDogbCkgfHwgXCJjaGlsZHJlblwiID09PSBsKSA7ZWxzZSBpZiAoXCJzdHlsZVwiID09PSBsKSB7XG4gICAgaWYgKHIgPSBuLnN0eWxlLCBcInN0cmluZ1wiID09IHR5cGVvZiB1KSByLmNzc1RleHQgPSB1O2Vsc2Uge1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgKHIuY3NzVGV4dCA9IFwiXCIsIHQgPSBudWxsKSwgdCkgZm9yIChmIGluIHQpIHtcbiAgICAgICAgdSAmJiBmIGluIHUgfHwgeChyLCBmLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh1KSBmb3IgKG8gaW4gdSkge1xuICAgICAgICB0ICYmIHVbb10gPT09IHRbb10gfHwgeChyLCBvLCB1W29dKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJvXCIgPT09IGxbMF0gJiYgXCJuXCIgPT09IGxbMV0pIGUgPSBsICE9PSAobCA9IGwucmVwbGFjZSgvQ2FwdHVyZSQvLCBcIlwiKSksIGMgPSBsLnRvTG93ZXJDYXNlKCksIGwgPSAoYyBpbiBuID8gYyA6IGwpLnNsaWNlKDIpLCB1ID8gKHQgfHwgbi5hZGRFdmVudExpc3RlbmVyKGwsIFAsIGUpLCAobi51IHx8IChuLnUgPSB7fSkpW2xdID0gdSkgOiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCwgUCwgZSk7ZWxzZSBpZiAoXCJsaXN0XCIgIT09IGwgJiYgXCJ0YWdOYW1lXCIgIT09IGwgJiYgIWkgJiYgbCBpbiBuKSB7XG4gICAgaWYgKG4ubGVuZ3RoICYmIFwidmFsdWVcIiA9PSBsKSBmb3IgKGwgPSBuLmxlbmd0aDsgbC0tOykge1xuICAgICAgbi5vcHRpb25zW2xdLnNlbGVjdGVkID0gbi5vcHRpb25zW2xdLnZhbHVlID09IHU7XG4gICAgfSBlbHNlIG5bbF0gPSBudWxsID09IHUgPyBcIlwiIDogdTtcbiAgfSBlbHNlIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdSAmJiBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIgIT09IGwgJiYgKGwgIT09IChsID0gbC5yZXBsYWNlKC9eeGxpbms6Py8sIFwiXCIpKSA/IG51bGwgPT0gdSB8fCAhMSA9PT0gdSA/IG4ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGwudG9Mb3dlckNhc2UoKSkgOiBuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBsLnRvTG93ZXJDYXNlKCksIHUpIDogbnVsbCA9PSB1IHx8ICExID09PSB1ID8gbi5yZW1vdmVBdHRyaWJ1dGUobCkgOiBuLnNldEF0dHJpYnV0ZShsLCB1KSk7XG59XG5cbmZ1bmN0aW9uIFAobCkge1xuICByZXR1cm4gdGhpcy51W2wudHlwZV0obi5ldmVudCA/IG4uZXZlbnQobCkgOiBsKTtcbn1cblxuZnVuY3Rpb24gTihsLCB1LCB0LCBpLCByLCBmLCBvLCBjLCBzLCBhKSB7XG4gIHZhciBoLFxuICAgICAgZCxcbiAgICAgIG0sXG4gICAgICB3LFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICB4LFxuICAgICAgQyxcbiAgICAgIFAsXG4gICAgICBOLFxuICAgICAgVCA9IHUudHlwZTtcbiAgaWYgKHZvaWQgMCAhPT0gdS5jb25zdHJ1Y3RvcikgcmV0dXJuIG51bGw7XG4gIChoID0gbi5fX2IpICYmIGgodSk7XG5cbiAgdHJ5IHtcbiAgICBuOiBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBUKSB7XG4gICAgICBpZiAoQyA9IHUucHJvcHMsIFAgPSAoaCA9IFQuY29udGV4dFR5cGUpICYmIGlbaC5fX2NdLCBOID0gaCA/IFAgPyBQLnByb3BzLnZhbHVlIDogaC5fX3AgOiBpLCB0Ll9fYyA/IHggPSAoZCA9IHUuX19jID0gdC5fX2MpLl9fcCA9IGQuX19FIDogKFQucHJvdG90eXBlICYmIFQucHJvdG90eXBlLnJlbmRlciA/IHUuX19jID0gZCA9IG5ldyBUKEMsIE4pIDogKHUuX19jID0gZCA9IG5ldyB5KEMsIE4pLCBkLmNvbnN0cnVjdG9yID0gVCwgZC5yZW5kZXIgPSBBKSwgUCAmJiBQLnN1YihkKSwgZC5wcm9wcyA9IEMsIGQuc3RhdGUgfHwgKGQuc3RhdGUgPSB7fSksIGQuY29udGV4dCA9IE4sIGQuX19uID0gaSwgbSA9IGQuX19kID0gITAsIGQuX19oID0gW10pLCBudWxsID09IGQuX19zICYmIChkLl9fcyA9IGQuc3RhdGUpLCBudWxsICE9IFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICYmIGUoZC5fX3MgPT0gZC5zdGF0ZSA/IGQuX19zID0gZSh7fSwgZC5fX3MpIDogZC5fX3MsIFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKEMsIGQuX19zKSksIG0pIG51bGwgPT0gVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJiYgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxNb3VudCAmJiBkLmNvbXBvbmVudFdpbGxNb3VudCgpLCBudWxsICE9IGQuY29tcG9uZW50RGlkTW91bnQgJiYgby5wdXNoKGQpO2Vsc2Uge1xuICAgICAgICBpZiAobnVsbCA9PSBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAmJiBudWxsID09IGMgJiYgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgZC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKEMsIE4pLCAhYyAmJiBudWxsICE9IGQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICYmICExID09PSBkLnNob3VsZENvbXBvbmVudFVwZGF0ZShDLCBkLl9fcywgTikpIHtcbiAgICAgICAgICBkLnByb3BzID0gQywgZC5zdGF0ZSA9IGQuX19zLCBkLl9fZCA9ICExLCBkLl9fdiA9IHUsIHUuX19lID0gdC5fX2UsIHUuX19rID0gdC5fX2s7XG4gICAgICAgICAgYnJlYWsgbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG51bGwgIT0gZC5jb21wb25lbnRXaWxsVXBkYXRlICYmIGQuY29tcG9uZW50V2lsbFVwZGF0ZShDLCBkLl9fcywgTik7XG4gICAgICB9XG5cbiAgICAgIGZvciAodyA9IGQucHJvcHMsIGcgPSBkLnN0YXRlLCBkLmNvbnRleHQgPSBOLCBkLnByb3BzID0gQywgZC5zdGF0ZSA9IGQuX19zLCAoaCA9IG4uX19yKSAmJiBoKHUpLCBkLl9fZCA9ICExLCBkLl9fdiA9IHUsIGQuX19QID0gbCwgXyhudWxsICE9IChoID0gZC5yZW5kZXIoZC5wcm9wcywgZC5zdGF0ZSwgZC5jb250ZXh0KSkgJiYgaC50eXBlID09IHYgJiYgbnVsbCA9PSBoLmtleSA/IGgucHJvcHMuY2hpbGRyZW4gOiBoLCB1Ll9fayA9IFtdLCBwLCAhMCksIG51bGwgIT0gZC5nZXRDaGlsZENvbnRleHQgJiYgKGkgPSBlKGUoe30sIGkpLCBkLmdldENoaWxkQ29udGV4dCgpKSksIG0gfHwgbnVsbCA9PSBkLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlIHx8IChiID0gZC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh3LCBnKSksIGsobCwgdSwgdCwgaSwgciwgZiwgbywgcywgYSksIGQuYmFzZSA9IHUuX19lOyBoID0gZC5fX2gucG9wKCk7KSB7XG4gICAgICAgIGguY2FsbChkKTtcbiAgICAgIH1cblxuICAgICAgbSB8fCBudWxsID09IHcgfHwgbnVsbCA9PSBkLmNvbXBvbmVudERpZFVwZGF0ZSB8fCBkLmNvbXBvbmVudERpZFVwZGF0ZSh3LCBnLCBiKSwgeCAmJiAoZC5fX0UgPSBkLl9fcCA9IG51bGwpO1xuICAgIH0gZWxzZSB1Ll9fZSA9ICQodC5fX2UsIHUsIHQsIGksIHIsIGYsIG8sIGEpO1xuXG4gICAgKGggPSBuLmRpZmZlZCkgJiYgaCh1KTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4uX19lKGwsIHUsIHQpO1xuICB9XG5cbiAgcmV0dXJuIHUuX19lO1xufVxuXG5mdW5jdGlvbiBUKGwsIHUpIHtcbiAgZm9yICh2YXIgdDsgdCA9IGwucG9wKCk7KSB7XG4gICAgdHJ5IHtcbiAgICAgIHQuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB9IGNhdGNoIChsKSB7XG4gICAgICBuLl9fZShsLCB0Ll9fdik7XG4gICAgfVxuICB9XG5cbiAgbi5fX2MgJiYgbi5fX2ModSk7XG59XG5cbmZ1bmN0aW9uICQobiwgbCwgdSwgdCwgaSwgbywgZSwgYykge1xuICB2YXIgcyxcbiAgICAgIGEsXG4gICAgICBoLFxuICAgICAgdixcbiAgICAgIHAgPSB1LnByb3BzLFxuICAgICAgeSA9IGwucHJvcHM7XG4gIGlmIChpID0gXCJzdmdcIiA9PT0gbC50eXBlIHx8IGksIG51bGwgPT0gbiAmJiBudWxsICE9IG8pIGZvciAocyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSB7XG4gICAgaWYgKG51bGwgIT0gKGEgPSBvW3NdKSAmJiAobnVsbCA9PT0gbC50eXBlID8gMyA9PT0gYS5ub2RlVHlwZSA6IGEubG9jYWxOYW1lID09PSBsLnR5cGUpKSB7XG4gICAgICBuID0gYSwgb1tzXSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobnVsbCA9PSBuKSB7XG4gICAgaWYgKG51bGwgPT09IGwudHlwZSkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHkpO1xuICAgIG4gPSBpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbC50eXBlKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlKSwgbyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbnVsbCA9PT0gbC50eXBlID8gcCAhPT0geSAmJiAobi5kYXRhID0geSkgOiBsICE9PSB1ICYmIChudWxsICE9IG8gJiYgKG8gPSBmLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksIGggPSAocCA9IHUucHJvcHMgfHwgcikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIHYgPSB5LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBjIHx8ICh2IHx8IGgpICYmICh2ICYmIGggJiYgdi5fX2h0bWwgPT0gaC5fX2h0bWwgfHwgKG4uaW5uZXJIVE1MID0gdiAmJiB2Ll9faHRtbCB8fCBcIlwiKSksIGIobiwgeSwgcCwgaSwgYyksIHYgfHwgayhuLCBsLCB1LCB0LCBcImZvcmVpZ25PYmplY3RcIiAhPT0gbC50eXBlICYmIGksIG8sIGUsIHIsIGMpLCBjIHx8IChcInZhbHVlXCIgaW4geSAmJiB2b2lkIDAgIT09IHkudmFsdWUgJiYgeS52YWx1ZSAhPT0gbi52YWx1ZSAmJiAobi52YWx1ZSA9IG51bGwgPT0geS52YWx1ZSA/IFwiXCIgOiB5LnZhbHVlKSwgXCJjaGVja2VkXCIgaW4geSAmJiB2b2lkIDAgIT09IHkuY2hlY2tlZCAmJiB5LmNoZWNrZWQgIT09IG4uY2hlY2tlZCAmJiAobi5jaGVja2VkID0geS5jaGVja2VkKSkpLCBuO1xufVxuXG5mdW5jdGlvbiBqKGwsIHUsIHQpIHtcbiAgdHJ5IHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwgPyBsKHUpIDogbC5jdXJyZW50ID0gdTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4uX19lKGwsIHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHoobCwgdSwgdCkge1xuICB2YXIgaSwgciwgZjtcblxuICBpZiAobi51bm1vdW50ICYmIG4udW5tb3VudChsKSwgKGkgPSBsLnJlZikgJiYgaihpLCBudWxsLCB1KSwgdCB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGwudHlwZSB8fCAodCA9IG51bGwgIT0gKHIgPSBsLl9fZSkpLCBsLl9fZSA9IGwubCA9IG51bGwsIG51bGwgIT0gKGkgPSBsLl9fYykpIHtcbiAgICBpZiAoaS5jb21wb25lbnRXaWxsVW5tb3VudCkgdHJ5IHtcbiAgICAgIGkuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICB9IGNhdGNoIChsKSB7XG4gICAgICBuLl9fZShsLCB1KTtcbiAgICB9XG4gICAgaS5iYXNlID0gaS5fX1AgPSBudWxsO1xuICB9XG5cbiAgaWYgKGkgPSBsLl9faykgZm9yIChmID0gMDsgZiA8IGkubGVuZ3RoOyBmKyspIHtcbiAgICBpW2ZdICYmIHooaVtmXSwgdSwgdCk7XG4gIH1cbiAgbnVsbCAhPSByICYmIGMocik7XG59XG5cbmZ1bmN0aW9uIEEobiwgbCwgdSkge1xuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLCB1KTtcbn1cblxuZnVuY3Rpb24gRChsLCB1LCBpKSB7XG4gIHZhciBvLCBlLCBjO1xuICBuLl9fcCAmJiBuLl9fcChsLCB1KSwgZSA9IChvID0gaSA9PT0gdCkgPyBudWxsIDogaSAmJiBpLl9fayB8fCB1Ll9faywgbCA9IHModiwgbnVsbCwgW2xdKSwgYyA9IFtdLCBOKHUsIG8gPyB1Ll9fayA9IGwgOiAoaSB8fCB1KS5fX2sgPSBsLCBlIHx8IHIsIHIsIHZvaWQgMCAhPT0gdS5vd25lclNWR0VsZW1lbnQsIGkgJiYgIW8gPyBbaV0gOiBlID8gbnVsbCA6IGYuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpLCBjLCAhMSwgaSB8fCByLCBvKSwgVChjLCBsKTtcbn1cblxuZnVuY3Rpb24gSChuLCBsKSB7XG4gIEQobiwgbCwgdCk7XG59XG5cbmZ1bmN0aW9uIEkobiwgbCkge1xuICByZXR1cm4gbCA9IGUoZSh7fSwgbi5wcm9wcyksIGwpLCBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAobC5jaGlsZHJlbiA9IGYuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKSwgYShuLnR5cGUsIGwsIGwua2V5IHx8IG4ua2V5LCBsLnJlZiB8fCBuLnJlZik7XG59XG5cbmZ1bmN0aW9uIEwobikge1xuICB2YXIgbCA9IHt9LFxuICAgICAgdSA9IHtcbiAgICBfX2M6IFwiX19jQ1wiICsgaSsrLFxuICAgIF9fcDogbixcbiAgICBDb25zdW1lcjogZnVuY3Rpb24gQ29uc3VtZXIobiwgbCkge1xuICAgICAgcmV0dXJuIG4uY2hpbGRyZW4obCk7XG4gICAgfSxcbiAgICBQcm92aWRlcjogZnVuY3Rpb24gUHJvdmlkZXIobikge1xuICAgICAgdmFyIHQsXG4gICAgICAgICAgaSA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQgfHwgKHQgPSBbXSwgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsW3UuX19jXSA9IGksIGw7XG4gICAgICB9LCB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHQuc29tZShmdW5jdGlvbiAobCkge1xuICAgICAgICAgIGwuX19QICYmIChsLmNvbnRleHQgPSBuLnZhbHVlLCB3KGwpKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLnN1YiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHQucHVzaChuKTtcbiAgICAgICAgdmFyIGwgPSBuLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXG4gICAgICAgIG4uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5zcGxpY2UodC5pbmRleE9mKG4pLCAxKSwgbCAmJiBsLmNhbGwobik7XG4gICAgICAgIH07XG4gICAgICB9KSwgbi5jaGlsZHJlbjtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlID0gdSwgdTtcbn1cblxubiA9IHt9LCB5LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChuLCBsKSB7XG4gIHZhciB1ID0gdGhpcy5fX3MgIT09IHRoaXMuc3RhdGUgJiYgdGhpcy5fX3MgfHwgKHRoaXMuX19zID0gZSh7fSwgdGhpcy5zdGF0ZSkpO1xuICAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBuIHx8IChuID0gbih1LCB0aGlzLnByb3BzKSkpICYmIGUodSwgbiksIG51bGwgIT0gbiAmJiB0aGlzLl9fdiAmJiAobCAmJiB0aGlzLl9faC5wdXNoKGwpLCB3KHRoaXMpKTtcbn0sIHkucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGwsXG4gICAgICB1LFxuICAgICAgdCxcbiAgICAgIGkgPSB0aGlzLl9fdixcbiAgICAgIHIgPSB0aGlzLl9fdi5fX2UsXG4gICAgICBmID0gdGhpcy5fX1A7XG4gIGYgJiYgKGwgPSAhMSAhPT0gbiwgdSA9IFtdLCB0ID0gTihmLCBpLCBlKHt9LCBpKSwgdGhpcy5fX24sIHZvaWQgMCAhPT0gZi5vd25lclNWR0VsZW1lbnQsIG51bGwsIHUsIGwsIG51bGwgPT0gciA/IGQoaSkgOiByKSwgVCh1LCBpKSwgdCAhPSByICYmIG0oaSkpLCBuICYmIG4oKTtcbn0sIHkucHJvdG90eXBlLnJlbmRlciA9IHYsIGwgPSBbXSwgdSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJvbWlzZSA/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSkgOiBzZXRUaW1lb3V0LCBuLl9fZSA9IGZ1bmN0aW9uIChuLCBsLCB1KSB7XG4gIGZvciAodmFyIHQ7IGwgPSBsLl9fcDspIHtcbiAgICBpZiAoKHQgPSBsLl9fYykgJiYgIXQuX19wKSB0cnkge1xuICAgICAgaWYgKHQuY29uc3RydWN0b3IgJiYgbnVsbCAhPSB0LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcikgdC5zZXRTdGF0ZSh0LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSk7ZWxzZSB7XG4gICAgICAgIGlmIChudWxsID09IHQuY29tcG9uZW50RGlkQ2F0Y2gpIGNvbnRpbnVlO1xuICAgICAgICB0LmNvbXBvbmVudERpZENhdGNoKG4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHcodC5fX0UgPSB0KTtcbiAgICB9IGNhdGNoIChsKSB7XG4gICAgICBuID0gbDtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuO1xufSwgdCA9IHIsIGkgPSAwO1xuZXhwb3J0IHsgRCBhcyByZW5kZXIsIEggYXMgaHlkcmF0ZSwgcyBhcyBjcmVhdGVFbGVtZW50LCBzIGFzIGgsIHYgYXMgRnJhZ21lbnQsIGggYXMgY3JlYXRlUmVmLCB5IGFzIENvbXBvbmVudCwgSSBhcyBjbG9uZUVsZW1lbnQsIEwgYXMgY3JlYXRlQ29udGV4dCwgXyBhcyB0b0NoaWxkQXJyYXksIHogYXMgX3VubW91bnQsIG4gYXMgb3B0aW9ucyB9OyIsImltcG9ydCB7IG9wdGlvbnMgYXMgbiB9IGZyb20gXCJwcmVhY3RcIjtcbnZhciB0LFxuICAgIHIsXG4gICAgdSA9IFtdLFxuICAgIGkgPSBuLl9fcjtcblxubi5fX3IgPSBmdW5jdGlvbiAobikge1xuICBpICYmIGkobiksIHQgPSAwLCAociA9IG4uX19jKS5fX0ggJiYgKHIuX19ILnQgPSB3KHIuX19ILnQpKTtcbn07XG5cbnZhciBvID0gbi5kaWZmZWQ7XG5cbm4uZGlmZmVkID0gZnVuY3Rpb24gKG4pIHtcbiAgbyAmJiBvKG4pO1xuICB2YXIgdCA9IG4uX19jO1xuXG4gIGlmICh0KSB7XG4gICAgdmFyIHIgPSB0Ll9fSDtcbiAgICByICYmIChyLnUgPSB3KHIudSkpO1xuICB9XG59O1xuXG52YXIgZiA9IG4udW5tb3VudDtcblxuZnVuY3Rpb24gYyh0KSB7XG4gIG4uX19oICYmIG4uX19oKHIpO1xuICB2YXIgdSA9IHIuX19IIHx8IChyLl9fSCA9IHtcbiAgICBpOiBbXSxcbiAgICB0OiBbXSxcbiAgICB1OiBbXVxuICB9KTtcbiAgcmV0dXJuIHQgPj0gdS5pLmxlbmd0aCAmJiB1LmkucHVzaCh7fSksIHUuaVt0XTtcbn1cblxuZnVuY3Rpb24gZShuKSB7XG4gIHJldHVybiBhKHEsIG4pO1xufVxuXG5mdW5jdGlvbiBhKG4sIHUsIGkpIHtcbiAgdmFyIG8gPSBjKHQrKyk7XG4gIHJldHVybiBvLl9fYyB8fCAoby5fX2MgPSByLCBvLm8gPSBbaSA/IGkodSkgOiBxKG51bGwsIHUpLCBmdW5jdGlvbiAodCkge1xuICAgIHZhciByID0gbihvLm9bMF0sIHQpO1xuICAgIG8ub1swXSAhPT0gciAmJiAoby5vWzBdID0gciwgby5fX2Muc2V0U3RhdGUoe30pKTtcbiAgfV0pLCBvLm87XG59XG5cbmZ1bmN0aW9uIHYobiwgdSkge1xuICB2YXIgaSA9IGModCsrKTtcbiAgRihpLnYsIHUpICYmIChpLm8gPSBuLCBpLnYgPSB1LCByLl9fSC50LnB1c2goaSksIF8ocikpO1xufVxuXG5mdW5jdGlvbiBtKG4sIHUpIHtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIEYoaS52LCB1KSAmJiAoaS5vID0gbiwgaS52ID0gdSwgci5fX0gudS5wdXNoKGkpKTtcbn1cblxuZnVuY3Rpb24gcChuKSB7XG4gIHJldHVybiBzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogblxuICAgIH07XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gbChuLCByLCB1KSB7XG4gIHZhciBpID0gYyh0KyspO1xuICBGKGkudiwgdSkgJiYgKGkudiA9IHUsIG4gJiYgKG4uY3VycmVudCA9IHIoKSkpO1xufVxuXG5mdW5jdGlvbiBzKG4sIHIpIHtcbiAgdmFyIHUgPSBjKHQrKyk7XG4gIHJldHVybiBGKHUudiwgcikgPyAodS52ID0gciwgdS5tID0gbiwgdS5vID0gbigpKSA6IHUubztcbn1cblxuZnVuY3Rpb24gZChuLCB0KSB7XG4gIHJldHVybiBzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbjtcbiAgfSwgdCk7XG59XG5cbmZ1bmN0aW9uIHkobikge1xuICB2YXIgdSA9IHIuY29udGV4dFtuLl9fY107XG4gIGlmICghdSkgcmV0dXJuIG4uX19wO1xuICB2YXIgaSA9IGModCsrKTtcbiAgcmV0dXJuIG51bGwgPT0gaS5vICYmIChpLm8gPSAhMCwgdS5zdWIocikpLCB1LnByb3BzLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBUKHQsIHIpIHtcbiAgbi51c2VEZWJ1Z1ZhbHVlICYmIG4udXNlRGVidWdWYWx1ZShyID8gcih0KSA6IHQpO1xufVxuXG5uLnVubW91bnQgPSBmdW5jdGlvbiAobikge1xuICBmICYmIGYobik7XG4gIHZhciB0ID0gbi5fX2M7XG5cbiAgaWYgKHQpIHtcbiAgICB2YXIgciA9IHQuX19IO1xuICAgIHIgJiYgci5pLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuLnAgJiYgbi5wKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBfID0gZnVuY3Rpb24gXygpIHt9O1xuXG5mdW5jdGlvbiBnKCkge1xuICB1LnNvbWUoZnVuY3Rpb24gKG4pIHtcbiAgICBuLmwgPSAhMSwgbi5fX1AgJiYgKG4uX19ILnQgPSB3KG4uX19ILnQpKTtcbiAgfSksIHUgPSBbXTtcbn1cblxuZnVuY3Rpb24gdyhuKSB7XG4gIHJldHVybiBuLmZvckVhY2goQSksIG4uZm9yRWFjaChFKSwgW107XG59XG5cbmZ1bmN0aW9uIEEobikge1xuICBuLnAgJiYgbi5wKCk7XG59XG5cbmZ1bmN0aW9uIEUobikge1xuICB2YXIgdCA9IG4ubygpO1xuICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgKG4ucCA9IHQpO1xufVxuXG5mdW5jdGlvbiBGKG4sIHQpIHtcbiAgcmV0dXJuICFuIHx8IHQuc29tZShmdW5jdGlvbiAodCwgcikge1xuICAgIHJldHVybiB0ICE9PSBuW3JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcShuLCB0KSB7XG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyB0KG4pIDogdDtcbn1cblxuXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIChfID0gZnVuY3Rpb24gXyh0KSB7XG4gICF0LmwgJiYgKHQubCA9ICEwKSAmJiAxID09PSB1LnB1c2godCkgJiYgKG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiB0KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHIpLCBjYW5jZWxBbmltYXRpb25GcmFtZSh1KSwgc2V0VGltZW91dChuKTtcbiAgICB9LFxuICAgICAgICByID0gc2V0VGltZW91dCh0LCAxMDApLFxuICAgICAgICB1ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpO1xuICB9KShnKTtcbn0pO1xuZXhwb3J0IHsgZSBhcyB1c2VTdGF0ZSwgYSBhcyB1c2VSZWR1Y2VyLCB2IGFzIHVzZUVmZmVjdCwgbSBhcyB1c2VMYXlvdXRFZmZlY3QsIHAgYXMgdXNlUmVmLCBsIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsIHMgYXMgdXNlTWVtbywgZCBhcyB1c2VDYWxsYmFjaywgeSBhcyB1c2VDb250ZXh0LCBUIGFzIHVzZURlYnVnVmFsdWUgfTsiLCJ2YXIgY2hhcmFjdGVyTWFwID0ge1xuICBcIsOAXCI6IFwiQVwiLFxuICBcIsOBXCI6IFwiQVwiLFxuICBcIsOCXCI6IFwiQVwiLFxuICBcIsODXCI6IFwiQVwiLFxuICBcIsOEXCI6IFwiQVwiLFxuICBcIsOFXCI6IFwiQVwiLFxuICBcIuG6pFwiOiBcIkFcIixcbiAgXCLhuq5cIjogXCJBXCIsXG4gIFwi4bqyXCI6IFwiQVwiLFxuICBcIuG6tFwiOiBcIkFcIixcbiAgXCLhurZcIjogXCJBXCIsXG4gIFwiw4ZcIjogXCJBRVwiLFxuICBcIuG6plwiOiBcIkFcIixcbiAgXCLhurBcIjogXCJBXCIsXG4gIFwiyIJcIjogXCJBXCIsXG4gIFwiw4dcIjogXCJDXCIsXG4gIFwi4biIXCI6IFwiQ1wiLFxuICBcIsOIXCI6IFwiRVwiLFxuICBcIsOJXCI6IFwiRVwiLFxuICBcIsOKXCI6IFwiRVwiLFxuICBcIsOLXCI6IFwiRVwiLFxuICBcIuG6vlwiOiBcIkVcIixcbiAgXCLhuJZcIjogXCJFXCIsXG4gIFwi4buAXCI6IFwiRVwiLFxuICBcIuG4lFwiOiBcIkVcIixcbiAgXCLhuJxcIjogXCJFXCIsXG4gIFwiyIZcIjogXCJFXCIsXG4gIFwiw4xcIjogXCJJXCIsXG4gIFwiw41cIjogXCJJXCIsXG4gIFwiw45cIjogXCJJXCIsXG4gIFwiw49cIjogXCJJXCIsXG4gIFwi4biuXCI6IFwiSVwiLFxuICBcIsiKXCI6IFwiSVwiLFxuICBcIsOQXCI6IFwiRFwiLFxuICBcIsORXCI6IFwiTlwiLFxuICBcIsOSXCI6IFwiT1wiLFxuICBcIsOTXCI6IFwiT1wiLFxuICBcIsOUXCI6IFwiT1wiLFxuICBcIsOVXCI6IFwiT1wiLFxuICBcIsOWXCI6IFwiT1wiLFxuICBcIsOYXCI6IFwiT1wiLFxuICBcIuG7kFwiOiBcIk9cIixcbiAgXCLhuYxcIjogXCJPXCIsXG4gIFwi4bmSXCI6IFwiT1wiLFxuICBcIsiOXCI6IFwiT1wiLFxuICBcIsOZXCI6IFwiVVwiLFxuICBcIsOaXCI6IFwiVVwiLFxuICBcIsObXCI6IFwiVVwiLFxuICBcIsOcXCI6IFwiVVwiLFxuICBcIsOdXCI6IFwiWVwiLFxuICBcIsOgXCI6IFwiYVwiLFxuICBcIsOhXCI6IFwiYVwiLFxuICBcIsOiXCI6IFwiYVwiLFxuICBcIsOjXCI6IFwiYVwiLFxuICBcIsOkXCI6IFwiYVwiLFxuICBcIsOlXCI6IFwiYVwiLFxuICBcIuG6pVwiOiBcImFcIixcbiAgXCLhuq9cIjogXCJhXCIsXG4gIFwi4bqzXCI6IFwiYVwiLFxuICBcIuG6tVwiOiBcImFcIixcbiAgXCLhurdcIjogXCJhXCIsXG4gIFwiw6ZcIjogXCJhZVwiLFxuICBcIuG6p1wiOiBcImFcIixcbiAgXCLhurFcIjogXCJhXCIsXG4gIFwiyINcIjogXCJhXCIsXG4gIFwiw6dcIjogXCJjXCIsXG4gIFwi4biJXCI6IFwiY1wiLFxuICBcIsOoXCI6IFwiZVwiLFxuICBcIsOpXCI6IFwiZVwiLFxuICBcIsOqXCI6IFwiZVwiLFxuICBcIsOrXCI6IFwiZVwiLFxuICBcIuG6v1wiOiBcImVcIixcbiAgXCLhuJdcIjogXCJlXCIsXG4gIFwi4buBXCI6IFwiZVwiLFxuICBcIuG4lVwiOiBcImVcIixcbiAgXCLhuJ1cIjogXCJlXCIsXG4gIFwiyIdcIjogXCJlXCIsXG4gIFwiw6xcIjogXCJpXCIsXG4gIFwiw61cIjogXCJpXCIsXG4gIFwiw65cIjogXCJpXCIsXG4gIFwiw69cIjogXCJpXCIsXG4gIFwi4bivXCI6IFwiaVwiLFxuICBcIsiLXCI6IFwiaVwiLFxuICBcIsOwXCI6IFwiZFwiLFxuICBcIsOxXCI6IFwiblwiLFxuICBcIsOyXCI6IFwib1wiLFxuICBcIsOzXCI6IFwib1wiLFxuICBcIsO0XCI6IFwib1wiLFxuICBcIsO1XCI6IFwib1wiLFxuICBcIsO2XCI6IFwib1wiLFxuICBcIsO4XCI6IFwib1wiLFxuICBcIuG7kVwiOiBcIm9cIixcbiAgXCLhuY1cIjogXCJvXCIsXG4gIFwi4bmTXCI6IFwib1wiLFxuICBcIsiPXCI6IFwib1wiLFxuICBcIsO5XCI6IFwidVwiLFxuICBcIsO6XCI6IFwidVwiLFxuICBcIsO7XCI6IFwidVwiLFxuICBcIsO8XCI6IFwidVwiLFxuICBcIsO9XCI6IFwieVwiLFxuICBcIsO/XCI6IFwieVwiLFxuICBcIsSAXCI6IFwiQVwiLFxuICBcIsSBXCI6IFwiYVwiLFxuICBcIsSCXCI6IFwiQVwiLFxuICBcIsSDXCI6IFwiYVwiLFxuICBcIsSEXCI6IFwiQVwiLFxuICBcIsSFXCI6IFwiYVwiLFxuICBcIsSGXCI6IFwiQ1wiLFxuICBcIsSHXCI6IFwiY1wiLFxuICBcIsSIXCI6IFwiQ1wiLFxuICBcIsSJXCI6IFwiY1wiLFxuICBcIsSKXCI6IFwiQ1wiLFxuICBcIsSLXCI6IFwiY1wiLFxuICBcIsSMXCI6IFwiQ1wiLFxuICBcIsSNXCI6IFwiY1wiLFxuICBcIkPMhlwiOiBcIkNcIixcbiAgXCJjzIZcIjogXCJjXCIsXG4gIFwixI5cIjogXCJEXCIsXG4gIFwixI9cIjogXCJkXCIsXG4gIFwixJBcIjogXCJEXCIsXG4gIFwixJFcIjogXCJkXCIsXG4gIFwixJJcIjogXCJFXCIsXG4gIFwixJNcIjogXCJlXCIsXG4gIFwixJRcIjogXCJFXCIsXG4gIFwixJVcIjogXCJlXCIsXG4gIFwixJZcIjogXCJFXCIsXG4gIFwixJdcIjogXCJlXCIsXG4gIFwixJhcIjogXCJFXCIsXG4gIFwixJlcIjogXCJlXCIsXG4gIFwixJpcIjogXCJFXCIsXG4gIFwixJtcIjogXCJlXCIsXG4gIFwixJxcIjogXCJHXCIsXG4gIFwix7RcIjogXCJHXCIsXG4gIFwixJ1cIjogXCJnXCIsXG4gIFwix7VcIjogXCJnXCIsXG4gIFwixJ5cIjogXCJHXCIsXG4gIFwixJ9cIjogXCJnXCIsXG4gIFwixKBcIjogXCJHXCIsXG4gIFwixKFcIjogXCJnXCIsXG4gIFwixKJcIjogXCJHXCIsXG4gIFwixKNcIjogXCJnXCIsXG4gIFwixKRcIjogXCJIXCIsXG4gIFwixKVcIjogXCJoXCIsXG4gIFwixKZcIjogXCJIXCIsXG4gIFwixKdcIjogXCJoXCIsXG4gIFwi4biqXCI6IFwiSFwiLFxuICBcIuG4q1wiOiBcImhcIixcbiAgXCLEqFwiOiBcIklcIixcbiAgXCLEqVwiOiBcImlcIixcbiAgXCLEqlwiOiBcIklcIixcbiAgXCLEq1wiOiBcImlcIixcbiAgXCLErFwiOiBcIklcIixcbiAgXCLErVwiOiBcImlcIixcbiAgXCLErlwiOiBcIklcIixcbiAgXCLEr1wiOiBcImlcIixcbiAgXCLEsFwiOiBcIklcIixcbiAgXCLEsVwiOiBcImlcIixcbiAgXCLEslwiOiBcIklKXCIsXG4gIFwixLNcIjogXCJpalwiLFxuICBcIsS0XCI6IFwiSlwiLFxuICBcIsS1XCI6IFwialwiLFxuICBcIsS2XCI6IFwiS1wiLFxuICBcIsS3XCI6IFwia1wiLFxuICBcIuG4sFwiOiBcIktcIixcbiAgXCLhuLFcIjogXCJrXCIsXG4gIFwiS8yGXCI6IFwiS1wiLFxuICBcImvMhlwiOiBcImtcIixcbiAgXCLEuVwiOiBcIkxcIixcbiAgXCLEulwiOiBcImxcIixcbiAgXCLEu1wiOiBcIkxcIixcbiAgXCLEvFwiOiBcImxcIixcbiAgXCLEvVwiOiBcIkxcIixcbiAgXCLEvlwiOiBcImxcIixcbiAgXCLEv1wiOiBcIkxcIixcbiAgXCLFgFwiOiBcImxcIixcbiAgXCLFgVwiOiBcImxcIixcbiAgXCLFglwiOiBcImxcIixcbiAgXCLhuL5cIjogXCJNXCIsXG4gIFwi4bi/XCI6IFwibVwiLFxuICBcIk3MhlwiOiBcIk1cIixcbiAgXCJtzIZcIjogXCJtXCIsXG4gIFwixYNcIjogXCJOXCIsXG4gIFwixYRcIjogXCJuXCIsXG4gIFwixYVcIjogXCJOXCIsXG4gIFwixYZcIjogXCJuXCIsXG4gIFwixYdcIjogXCJOXCIsXG4gIFwixYhcIjogXCJuXCIsXG4gIFwixYlcIjogXCJuXCIsXG4gIFwiTsyGXCI6IFwiTlwiLFxuICBcIm7MhlwiOiBcIm5cIixcbiAgXCLFjFwiOiBcIk9cIixcbiAgXCLFjVwiOiBcIm9cIixcbiAgXCLFjlwiOiBcIk9cIixcbiAgXCLFj1wiOiBcIm9cIixcbiAgXCLFkFwiOiBcIk9cIixcbiAgXCLFkVwiOiBcIm9cIixcbiAgXCLFklwiOiBcIk9FXCIsXG4gIFwixZNcIjogXCJvZVwiLFxuICBcIlDMhlwiOiBcIlBcIixcbiAgXCJwzIZcIjogXCJwXCIsXG4gIFwixZRcIjogXCJSXCIsXG4gIFwixZVcIjogXCJyXCIsXG4gIFwixZZcIjogXCJSXCIsXG4gIFwixZdcIjogXCJyXCIsXG4gIFwixZhcIjogXCJSXCIsXG4gIFwixZlcIjogXCJyXCIsXG4gIFwiUsyGXCI6IFwiUlwiLFxuICBcInLMhlwiOiBcInJcIixcbiAgXCLIklwiOiBcIlJcIixcbiAgXCLIk1wiOiBcInJcIixcbiAgXCLFmlwiOiBcIlNcIixcbiAgXCLFm1wiOiBcInNcIixcbiAgXCLFnFwiOiBcIlNcIixcbiAgXCLFnVwiOiBcInNcIixcbiAgXCLFnlwiOiBcIlNcIixcbiAgXCLImFwiOiBcIlNcIixcbiAgXCLImVwiOiBcInNcIixcbiAgXCLFn1wiOiBcInNcIixcbiAgXCLFoFwiOiBcIlNcIixcbiAgXCLFoVwiOiBcInNcIixcbiAgXCLFolwiOiBcIlRcIixcbiAgXCLFo1wiOiBcInRcIixcbiAgXCLIm1wiOiBcInRcIixcbiAgXCLImlwiOiBcIlRcIixcbiAgXCLFpFwiOiBcIlRcIixcbiAgXCLFpVwiOiBcInRcIixcbiAgXCLFplwiOiBcIlRcIixcbiAgXCLFp1wiOiBcInRcIixcbiAgXCJUzIZcIjogXCJUXCIsXG4gIFwidMyGXCI6IFwidFwiLFxuICBcIsWoXCI6IFwiVVwiLFxuICBcIsWpXCI6IFwidVwiLFxuICBcIsWqXCI6IFwiVVwiLFxuICBcIsWrXCI6IFwidVwiLFxuICBcIsWsXCI6IFwiVVwiLFxuICBcIsWtXCI6IFwidVwiLFxuICBcIsWuXCI6IFwiVVwiLFxuICBcIsWvXCI6IFwidVwiLFxuICBcIsWwXCI6IFwiVVwiLFxuICBcIsWxXCI6IFwidVwiLFxuICBcIsWyXCI6IFwiVVwiLFxuICBcIsWzXCI6IFwidVwiLFxuICBcIsiWXCI6IFwiVVwiLFxuICBcIsiXXCI6IFwidVwiLFxuICBcIlbMhlwiOiBcIlZcIixcbiAgXCJ2zIZcIjogXCJ2XCIsXG4gIFwixbRcIjogXCJXXCIsXG4gIFwixbVcIjogXCJ3XCIsXG4gIFwi4bqCXCI6IFwiV1wiLFxuICBcIuG6g1wiOiBcIndcIixcbiAgXCJYzIZcIjogXCJYXCIsXG4gIFwieMyGXCI6IFwieFwiLFxuICBcIsW2XCI6IFwiWVwiLFxuICBcIsW3XCI6IFwieVwiLFxuICBcIsW4XCI6IFwiWVwiLFxuICBcIlnMhlwiOiBcIllcIixcbiAgXCJ5zIZcIjogXCJ5XCIsXG4gIFwixblcIjogXCJaXCIsXG4gIFwixbpcIjogXCJ6XCIsXG4gIFwixbtcIjogXCJaXCIsXG4gIFwixbxcIjogXCJ6XCIsXG4gIFwixb1cIjogXCJaXCIsXG4gIFwixb5cIjogXCJ6XCIsXG4gIFwixb9cIjogXCJzXCIsXG4gIFwixpJcIjogXCJmXCIsXG4gIFwixqBcIjogXCJPXCIsXG4gIFwixqFcIjogXCJvXCIsXG4gIFwixq9cIjogXCJVXCIsXG4gIFwixrBcIjogXCJ1XCIsXG4gIFwix41cIjogXCJBXCIsXG4gIFwix45cIjogXCJhXCIsXG4gIFwix49cIjogXCJJXCIsXG4gIFwix5BcIjogXCJpXCIsXG4gIFwix5FcIjogXCJPXCIsXG4gIFwix5JcIjogXCJvXCIsXG4gIFwix5NcIjogXCJVXCIsXG4gIFwix5RcIjogXCJ1XCIsXG4gIFwix5VcIjogXCJVXCIsXG4gIFwix5ZcIjogXCJ1XCIsXG4gIFwix5dcIjogXCJVXCIsXG4gIFwix5hcIjogXCJ1XCIsXG4gIFwix5lcIjogXCJVXCIsXG4gIFwix5pcIjogXCJ1XCIsXG4gIFwix5tcIjogXCJVXCIsXG4gIFwix5xcIjogXCJ1XCIsXG4gIFwi4buoXCI6IFwiVVwiLFxuICBcIuG7qVwiOiBcInVcIixcbiAgXCLhubhcIjogXCJVXCIsXG4gIFwi4bm5XCI6IFwidVwiLFxuICBcIse6XCI6IFwiQVwiLFxuICBcIse7XCI6IFwiYVwiLFxuICBcIse8XCI6IFwiQUVcIixcbiAgXCLHvVwiOiBcImFlXCIsXG4gIFwix75cIjogXCJPXCIsXG4gIFwix79cIjogXCJvXCIsXG4gIFwiw55cIjogXCJUSFwiLFxuICBcIsO+XCI6IFwidGhcIixcbiAgXCLhuZRcIjogXCJQXCIsXG4gIFwi4bmVXCI6IFwicFwiLFxuICBcIuG5pFwiOiBcIlNcIixcbiAgXCLhuaVcIjogXCJzXCIsXG4gIFwiWMyBXCI6IFwiWFwiLFxuICBcInjMgVwiOiBcInhcIixcbiAgXCLQg1wiOiBcItCTXCIsXG4gIFwi0ZNcIjogXCLQs1wiLFxuICBcItCMXCI6IFwi0JpcIixcbiAgXCLRnFwiOiBcItC6XCIsXG4gIFwiQcyLXCI6IFwiQVwiLFxuICBcImHMi1wiOiBcImFcIixcbiAgXCJFzItcIjogXCJFXCIsXG4gIFwiZcyLXCI6IFwiZVwiLFxuICBcIknMi1wiOiBcIklcIixcbiAgXCJpzItcIjogXCJpXCIsXG4gIFwix7hcIjogXCJOXCIsXG4gIFwix7lcIjogXCJuXCIsXG4gIFwi4buSXCI6IFwiT1wiLFxuICBcIuG7k1wiOiBcIm9cIixcbiAgXCLhuZBcIjogXCJPXCIsXG4gIFwi4bmRXCI6IFwib1wiLFxuICBcIuG7qlwiOiBcIlVcIixcbiAgXCLhu6tcIjogXCJ1XCIsXG4gIFwi4bqAXCI6IFwiV1wiLFxuICBcIuG6gVwiOiBcIndcIixcbiAgXCLhu7JcIjogXCJZXCIsXG4gIFwi4buzXCI6IFwieVwiLFxuICBcIsiAXCI6IFwiQVwiLFxuICBcIsiBXCI6IFwiYVwiLFxuICBcIsiEXCI6IFwiRVwiLFxuICBcIsiFXCI6IFwiZVwiLFxuICBcIsiIXCI6IFwiSVwiLFxuICBcIsiJXCI6IFwiaVwiLFxuICBcIsiMXCI6IFwiT1wiLFxuICBcIsiNXCI6IFwib1wiLFxuICBcIsiQXCI6IFwiUlwiLFxuICBcIsiRXCI6IFwiclwiLFxuICBcIsiUXCI6IFwiVVwiLFxuICBcIsiVXCI6IFwidVwiLFxuICBcIkLMjFwiOiBcIkJcIixcbiAgXCJizIxcIjogXCJiXCIsXG4gIFwixIzMo1wiOiBcIkNcIixcbiAgXCLEjcyjXCI6IFwiY1wiLFxuICBcIsOKzIxcIjogXCJFXCIsXG4gIFwiw6rMjFwiOiBcImVcIixcbiAgXCJGzIxcIjogXCJGXCIsXG4gIFwiZsyMXCI6IFwiZlwiLFxuICBcIsemXCI6IFwiR1wiLFxuICBcIsenXCI6IFwiZ1wiLFxuICBcIsieXCI6IFwiSFwiLFxuICBcIsifXCI6IFwiaFwiLFxuICBcIkrMjFwiOiBcIkpcIixcbiAgXCLHsFwiOiBcImpcIixcbiAgXCLHqFwiOiBcIktcIixcbiAgXCLHqVwiOiBcImtcIixcbiAgXCJNzIxcIjogXCJNXCIsXG4gIFwibcyMXCI6IFwibVwiLFxuICBcIlDMjFwiOiBcIlBcIixcbiAgXCJwzIxcIjogXCJwXCIsXG4gIFwiUcyMXCI6IFwiUVwiLFxuICBcInHMjFwiOiBcInFcIixcbiAgXCLFmMypXCI6IFwiUlwiLFxuICBcIsWZzKlcIjogXCJyXCIsXG4gIFwi4bmmXCI6IFwiU1wiLFxuICBcIuG5p1wiOiBcInNcIixcbiAgXCJWzIxcIjogXCJWXCIsXG4gIFwidsyMXCI6IFwidlwiLFxuICBcIlfMjFwiOiBcIldcIixcbiAgXCJ3zIxcIjogXCJ3XCIsXG4gIFwiWMyMXCI6IFwiWFwiLFxuICBcInjMjFwiOiBcInhcIixcbiAgXCJZzIxcIjogXCJZXCIsXG4gIFwiecyMXCI6IFwieVwiLFxuICBcIkHMp1wiOiBcIkFcIixcbiAgXCJhzKdcIjogXCJhXCIsXG4gIFwiQsynXCI6IFwiQlwiLFxuICBcImLMp1wiOiBcImJcIixcbiAgXCLhuJBcIjogXCJEXCIsXG4gIFwi4biRXCI6IFwiZFwiLFxuICBcIsioXCI6IFwiRVwiLFxuICBcIsipXCI6IFwiZVwiLFxuICBcIsaQzKdcIjogXCJFXCIsXG4gIFwiyZvMp1wiOiBcImVcIixcbiAgXCLhuKhcIjogXCJIXCIsXG4gIFwi4bipXCI6IFwiaFwiLFxuICBcIknMp1wiOiBcIklcIixcbiAgXCJpzKdcIjogXCJpXCIsXG4gIFwixpfMp1wiOiBcIklcIixcbiAgXCLJqMynXCI6IFwiaVwiLFxuICBcIk3Mp1wiOiBcIk1cIixcbiAgXCJtzKdcIjogXCJtXCIsXG4gIFwiT8ynXCI6IFwiT1wiLFxuICBcIm/Mp1wiOiBcIm9cIixcbiAgXCJRzKdcIjogXCJRXCIsXG4gIFwiccynXCI6IFwicVwiLFxuICBcIlXMp1wiOiBcIlVcIixcbiAgXCJ1zKdcIjogXCJ1XCIsXG4gIFwiWMynXCI6IFwiWFwiLFxuICBcInjMp1wiOiBcInhcIixcbiAgXCJazKdcIjogXCJaXCIsXG4gIFwiesynXCI6IFwielwiXG59O1xudmFyIGNoYXJzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyTWFwKS5qb2luKCd8Jyk7XG52YXIgYWxsQWNjZW50cyA9IG5ldyBSZWdFeHAoY2hhcnMsICdnJyk7XG52YXIgZmlyc3RBY2NlbnQgPSBuZXcgUmVnRXhwKGNoYXJzLCAnJyk7XG5cbnZhciByZW1vdmVBY2NlbnRzID0gZnVuY3Rpb24gcmVtb3ZlQWNjZW50cyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGFsbEFjY2VudHMsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBjaGFyYWN0ZXJNYXBbbWF0Y2hdO1xuICB9KTtcbn07XG5cbnZhciBoYXNBY2NlbnRzID0gZnVuY3Rpb24gaGFzQWNjZW50cyhzdHJpbmcpIHtcbiAgcmV0dXJuICEhc3RyaW5nLm1hdGNoKGZpcnN0QWNjZW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlQWNjZW50cztcbm1vZHVsZS5leHBvcnRzLmhhcyA9IGhhc0FjY2VudHM7XG5tb2R1bGUuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmVBY2NlbnRzOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdGZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=