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








let dataContainer = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-global-data");

if (dataContainer === null) {
  throw new Error("Can't run Gluggi, as the global gluggi data is missing.");
}

let data = Object(mojave_json__WEBPACK_IMPORTED_MODULE_1__["parseElementAsJson"])(dataContainer);
let router = new _gluggi_GluggiRouter__WEBPACK_IMPORTED_MODULE_5__["GluggiRouter"](data.url);
let contentView = Object(mojave_dom_traverse__WEBPACK_IMPORTED_MODULE_0__["findOne"])(".gluggi-content-view");
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-container", _gluggi_sidebar__WEBPACK_IMPORTED_MODULE_6__["initSidebarVisibilityToggle"]);
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-sidebar-content-data", _gluggi_SidebarContent__WEBPACK_IMPORTED_MODULE_7__["SidebarContent"], {
  type: "jsx",
  params: {
    router
  }
});
Object(mojave_mount__WEBPACK_IMPORTED_MODULE_2__["mount"])(".gluggi-data-container-usages", _gluggi_ComponentUsages__WEBPACK_IMPORTED_MODULE_3__["ComponentUsages"], {
  type: "jsx",
  params: {
    router
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
  let component = props.component;
  let isActive = true === props.active;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link ".concat(isActive ? " gluggi-active" : ""),
    href: props.router.component(component)
  }, isActive && Object(_icon__WEBPACK_IMPORTED_MODULE_1__["icon"])(_icon_active_svg__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, true !== props.shortName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " ".concat(component.name), props.children, "page" === component.type ? Object(_icon__WEBPACK_IMPORTED_MODULE_1__["icon"])(_icon_external_svg__WEBPACK_IMPORTED_MODULE_3__["default"], "isolated view") : ""));
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

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, dependencies.direct.map(component => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ComponentLink__WEBPACK_IMPORTED_MODULE_2__["ComponentLink"], {
    component: component,
    router: router
  }))), showTransitive && dependencies.transitive.map(component => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ComponentLink__WEBPACK_IMPORTED_MODULE_2__["ComponentLink"], {
    component: component,
    router: router
  }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_transitive_svg__WEBPACK_IMPORTED_MODULE_5__["default"], "transitive dependency")))));
}

function ComponentUsages(props) {
  let [open, setOpen] = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let [transitive, setTransitive] = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let hasTransitiveDependencies = props.dependencies.transitive.length + props.usages.transitive.length > 0;
  let dependenciesCount = props.dependencies.direct.length;
  let usagesCount = props.usages.direct.length;

  if (transitive) {
    dependenciesCount += props.dependencies.transitive.length;
    usagesCount += props.usages.transitive.length;
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-action-usages ".concat(open ? "is-open" : "")
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    type: "button",
    class: "gluggi-action",
    onClick: () => setOpen(!open)
  }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_usages_svg__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-action-label"
  }, "Usages")), open && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-overview"
  }, hasTransitiveDependencies && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    type: "button",
    class: "gluggi-usages-transitive-toggle",
    onClick: () => setTransitive(!transitive)
  }, Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_transitive_svg__WEBPACK_IMPORTED_MODULE_5__["default"]), transitive ? "hide transitive" : "show transitive"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-list"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Dependencies (".concat(dependenciesCount, ")")), renderList(props.dependencies, transitive, props.router)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "gluggi-usages-list"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Usages (".concat(usagesCount, ")")), renderList(props.usages, transitive, props.router))));
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
class GluggiRouter {
  constructor(prefix) {
    this.prefix = prefix;
  }

  home() {
    return this.prefix;
  }

  component(component) {
    return "".concat(this.prefix).concat(component.type, "/").concat(component.key);
  }

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
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./assets/js/gluggi/icon.tsx");
/* harmony import */ var _icon_active_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/active.svg */ "./assets/icon/active.svg");
/* harmony import */ var _icon_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/search.svg */ "./assets/icon/search.svg");
/* harmony import */ var _icon_external_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon/external.svg */ "./assets/icon/external.svg");
/* harmony import */ var _icon_error_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icon/error.svg */ "./assets/icon/error.svg");









function renderComponent(component) {
  let showFullName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    class: "gluggi-component-link ".concat(component.active ? " gluggi-active" : ""),
    href: component.url
  }, component.active && Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_active_svg__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-name"
  }, showFullName && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "gluggi-component-type"
  }, component.type), " ".concat(component.name), component.error && Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_error_svg__WEBPACK_IMPORTED_MODULE_7__["default"], component.error), "page" === component.type ? Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_external_svg__WEBPACK_IMPORTED_MODULE_6__["default"]) : "")));
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
      onInput: e => setQuery(e.currentTarget.value)
    }), Object(_icon__WEBPACK_IMPORTED_MODULE_3__["icon"])(_icon_search_svg__WEBPACK_IMPORTED_MODULE_5__["default"]))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "gluggi-components"
    }, search ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
      type: search,
      showFullName: true,
      emptyText: "No matches"
    }) : props.types.map(type => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(GluggiType, {
      type: type
    })))];
  }

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    href: props.router.home(),
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
  let button = Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["createUnstyledElement"])("button", {
    class: "gluggi-sidebar-toggle",
    html: "<span class=\"gluggi-default\">".concat(_icon_menu_svg__WEBPACK_IMPORTED_MODULE_3__["default"], "</span><span class=\"gluggi-toggled\">").concat(_icon_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"], "</span>")
  });
  let isToggled = false;
  Object(mojave_dom_manipulate__WEBPACK_IMPORTED_MODULE_1__["prepend"])(container, button);
  Object(mojave_dom_events__WEBPACK_IMPORTED_MODULE_0__["on"])(button, "click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1Z2dpLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2FjdGl2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uL2Vycm9yLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi9leHRlcm5hbC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vbWVudS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi90cmFuc2l0aXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbi91c2FnZXMuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9Db21wb25lbnRMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL0NvbXBvbmVudFVzYWdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9HbHVnZ2lSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9TaWRlYmFyQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsdWdnaS9mdWxsLXNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2x1Z2dpL2ljb24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nbHVnZ2kvc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0Y2gtc29ydGVyL2Rpc3QvbWF0Y2gtc29ydGVyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9hdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2phdmUvZG9tL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9kb20vbWFuaXB1bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS90cmF2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2RvbS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL2pzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS9tb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3BvbHlmaWxsL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9qYXZlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vamF2ZS90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZW1vdmUtYWNjZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dsdWdnaS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIxMFxcXCIgdmlld0JveD1cXFwiMCAwIDEzIDEwXFxcIj5cXG4gIDxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTcuNjU5IDBsLS44MjguOSAzLjczMiAzLjQ5M0gwdjEuMjE4aDEwLjU2NUw2LjgzMSA5LjEwNWwuODI4LjkgNS4zNDEtNXpcXFwiLz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIxNC44MjlcXFwiIGhlaWdodD1cXFwiMTQuODI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTQuODI5IDE0LjgyOFxcXCI+XFxuICA8ZyBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiPlxcbiAgICA8cGF0aCBkPVxcXCJNMTMuNDE0IDEuNDE0bC0xMiAxMlxcXCIvPlxcbiAgICA8cGF0aCBkPVxcXCJNMS40MTQgMS40MTRsMTIgMTJcXFwiLz5cXG4gIDwvZz5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGNsYXNzPVxcXCJmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGVcXFwiPjxwYXRoIGQ9XFxcIk0xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHpcXFwiPjwvcGF0aD48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCI5XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxM1xcXCI+PC9saW5lPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjE3XFxcIiB4Mj1cXFwiMTJcXFwiIHkyPVxcXCIxN1xcXCI+PC9saW5lPjwvc3ZnPlwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjE2LjI2NFxcXCIgaGVpZ2h0PVxcXCIxNi4yNjNcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNi4yNjQgMTYuMjYzXFxcIj5cXG4gIDxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTUuNDE2IDMuNzc2bC4wNTEgMS4yMjIgNS4xMS0uMTY5LTcuNDcgNy40Ny44NjEuODYgNy40Ny03LjQ3LS4xNjkgNS4xMSAxLjIyMi4wNTIuMjQxLTcuMzEyelxcXCIvPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMTRcXFwiPlxcbiAgPGcgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBmaWxsPVxcXCJub25lXFxcIj5cXG4gICAgPHBhdGggZD1cXFwiTTEgN2gxOE0xIDFoMThNMSAxM2gxOFxcXCIvPlxcbiAgPC9nPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjEzLjgxMVxcXCIgaGVpZ2h0PVxcXCIxMy44MTFcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMy44MTEgMTMuODExXFxcIj5cXG4gIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0yLjI1IC0yLjI1KVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPlxcbiAgICA8Y2lyY2xlIGN4PVxcXCI1LjQ3MlxcXCIgY3k9XFxcIjUuNDcyXFxcIiByPVxcXCI1LjQ3MlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMyAzKVxcXCIvPlxcbiAgICA8cGF0aCBkPVxcXCJNMTUgMTVsLTIuMjk2LTIuMjk2XFxcIi8+XFxuICA8L2c+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBjbGFzcz1cXFwiZmVhdGhlciBmZWF0aGVyLWdpdC1icmFuY2hcXFwiPjxsaW5lIHgxPVxcXCI2XFxcIiB5MT1cXFwiM1xcXCIgeDI9XFxcIjZcXFwiIHkyPVxcXCIxNVxcXCI+PC9saW5lPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiNlxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNlxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48cGF0aCBkPVxcXCJNMTggOWE5IDkgMCAwIDEtOSA5XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBjbGFzcz1cXFwiZmVhdGhlciBmZWF0aGVyLWxheWVyc1xcXCI+PHBvbHlnb24gcG9pbnRzPVxcXCIxMiAyIDIgNyAxMiAxMiAyMiA3IDEyIDJcXFwiPjwvcG9seWdvbj48cG9seWxpbmUgcG9pbnRzPVxcXCIyIDE3IDEyIDIyIDIyIDE3XFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjIgMTIgMTIgMTcgMjIgMTJcXFwiPjwvcG9seWxpbmU+PC9zdmc+XCIiLCJpbXBvcnQgeyBmaW5kT25lIH0gZnJvbSBcIm1vamF2ZS9kb20vdHJhdmVyc2VcIjtcbmltcG9ydCB7IHBhcnNlRWxlbWVudEFzSnNvbiB9IGZyb20gXCJtb2phdmUvanNvblwiO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwibW9qYXZlL21vdW50XCI7XG5pbXBvcnQgeyBDb21wb25lbnRVc2FnZXMgfSBmcm9tIFwiLi9nbHVnZ2kvQ29tcG9uZW50VXNhZ2VzXCI7XG5pbXBvcnQgeyBpbml0VG9nZ2xlRnVsbFNjcmVlbiB9IGZyb20gXCIuL2dsdWdnaS9mdWxsLXNjcmVlblwiO1xuaW1wb3J0IHsgR2x1Z2dpUm91dGVyIH0gZnJvbSBcIi4vZ2x1Z2dpL0dsdWdnaVJvdXRlclwiO1xuaW1wb3J0IHsgaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlIH0gZnJvbSBcIi4vZ2x1Z2dpL3NpZGViYXJcIjtcbmltcG9ydCB7IFNpZGViYXJDb250ZW50IH0gZnJvbSBcIi4vZ2x1Z2dpL1NpZGViYXJDb250ZW50XCI7XG5sZXQgZGF0YUNvbnRhaW5lciA9IGZpbmRPbmUoXCIuZ2x1Z2dpLWdsb2JhbC1kYXRhXCIpO1xuXG5pZiAoZGF0YUNvbnRhaW5lciA9PT0gbnVsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBydW4gR2x1Z2dpLCBhcyB0aGUgZ2xvYmFsIGdsdWdnaSBkYXRhIGlzIG1pc3NpbmcuXCIpO1xufVxuXG5sZXQgZGF0YSA9IHBhcnNlRWxlbWVudEFzSnNvbihkYXRhQ29udGFpbmVyKTtcbmxldCByb3V0ZXIgPSBuZXcgR2x1Z2dpUm91dGVyKGRhdGEudXJsKTtcbmxldCBjb250ZW50VmlldyA9IGZpbmRPbmUoXCIuZ2x1Z2dpLWNvbnRlbnQtdmlld1wiKTtcbm1vdW50KFwiLmdsdWdnaS1jb250YWluZXJcIiwgaW5pdFNpZGViYXJWaXNpYmlsaXR5VG9nZ2xlKTtcbm1vdW50KFwiLmdsdWdnaS1zaWRlYmFyLWNvbnRlbnQtZGF0YVwiLCBTaWRlYmFyQ29udGVudCwge1xuICB0eXBlOiBcImpzeFwiLFxuICBwYXJhbXM6IHtcbiAgICByb3V0ZXJcbiAgfVxufSk7XG5tb3VudChcIi5nbHVnZ2ktZGF0YS1jb250YWluZXItdXNhZ2VzXCIsIENvbXBvbmVudFVzYWdlcywge1xuICB0eXBlOiBcImpzeFwiLFxuICBwYXJhbXM6IHtcbiAgICByb3V0ZXJcbiAgfVxufSk7XG5cbmlmIChudWxsICE9PSBjb250ZW50Vmlldykge1xuICBtb3VudChcIi5nbHVnZ2ktdG9nZ2xlLWZ1bGxzY3JlZW5cIiwgaW5pdFRvZ2dsZUZ1bGxTY3JlZW4sIHtcbiAgICBwYXJhbXM6IFtjb250ZW50Vmlld11cbiAgfSk7XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgYXJyb3dJY29uIGZyb20gXCIuLi8uLi9pY29uL2FjdGl2ZS5zdmdcIjtcbmltcG9ydCBleHRlcm5hbEljb24gZnJvbSBcIi4uLy4uL2ljb24vZXh0ZXJuYWwuc3ZnXCI7XG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50TGluayhwcm9wcykge1xuICBsZXQgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICBsZXQgaXNBY3RpdmUgPSB0cnVlID09PSBwcm9wcy5hY3RpdmU7XG4gIHJldHVybiBoKFwiYVwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1saW5rIFwiLmNvbmNhdChpc0FjdGl2ZSA/IFwiIGdsdWdnaS1hY3RpdmVcIiA6IFwiXCIpLFxuICAgIGhyZWY6IHByb3BzLnJvdXRlci5jb21wb25lbnQoY29tcG9uZW50KVxuICB9LCBpc0FjdGl2ZSAmJiBpY29uKGFycm93SWNvbiksIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LW5hbWVcIlxuICB9LCB0cnVlICE9PSBwcm9wcy5zaG9ydE5hbWUgJiYgaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1jb21wb25lbnQtdHlwZVwiXG4gIH0sIGNvbXBvbmVudC50eXBlKSwgXCIgXCIuY29uY2F0KGNvbXBvbmVudC5uYW1lKSwgcHJvcHMuY2hpbGRyZW4sIFwicGFnZVwiID09PSBjb21wb25lbnQudHlwZSA/IGljb24oZXh0ZXJuYWxJY29uLCBcImlzb2xhdGVkIHZpZXdcIikgOiBcIlwiKSk7XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50TGluayB9IGZyb20gXCIuL0NvbXBvbmVudExpbmtcIjtcbmltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgdXNhZ2VzSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi91c2FnZXMuc3ZnXCI7XG5pbXBvcnQgdHJhbnNpdGl2ZUljb24gZnJvbSBcIi4uLy4uL2ljb24vdHJhbnNpdGl2ZS5zdmdcIjtcblxuZnVuY3Rpb24gcmVuZGVyTGlzdChkZXBlbmRlbmNpZXMsIHNob3dUcmFuc2l0aXZlLCByb3V0ZXIpIHtcbiAgaWYgKCFkZXBlbmRlbmNpZXMuZGlyZWN0Lmxlbmd0aCAmJiAoIXNob3dUcmFuc2l0aXZlIHx8ICFkZXBlbmRlbmNpZXMudHJhbnNpdGl2ZS5sZW5ndGgpKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLWRlcGVuZGVuY2llcy1lbXB0eVwiXG4gICAgfSwgXCJcXHUyMDE0XCIpO1xuICB9XG5cbiAgcmV0dXJuIGgoXCJ1bFwiLCBudWxsLCBkZXBlbmRlbmNpZXMuZGlyZWN0Lm1hcChjb21wb25lbnQgPT4gaChcImxpXCIsIG51bGwsIGgoQ29tcG9uZW50TGluaywge1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIHJvdXRlcjogcm91dGVyXG4gIH0pKSksIHNob3dUcmFuc2l0aXZlICYmIGRlcGVuZGVuY2llcy50cmFuc2l0aXZlLm1hcChjb21wb25lbnQgPT4gaChcImxpXCIsIG51bGwsIGgoQ29tcG9uZW50TGluaywge1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIHJvdXRlcjogcm91dGVyXG4gIH0sIGljb24odHJhbnNpdGl2ZUljb24sIFwidHJhbnNpdGl2ZSBkZXBlbmRlbmN5XCIpKSkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudFVzYWdlcyhwcm9wcykge1xuICBsZXQgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3RyYW5zaXRpdmUsIHNldFRyYW5zaXRpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgaGFzVHJhbnNpdGl2ZURlcGVuZGVuY2llcyA9IHByb3BzLmRlcGVuZGVuY2llcy50cmFuc2l0aXZlLmxlbmd0aCArIHByb3BzLnVzYWdlcy50cmFuc2l0aXZlLmxlbmd0aCA+IDA7XG4gIGxldCBkZXBlbmRlbmNpZXNDb3VudCA9IHByb3BzLmRlcGVuZGVuY2llcy5kaXJlY3QubGVuZ3RoO1xuICBsZXQgdXNhZ2VzQ291bnQgPSBwcm9wcy51c2FnZXMuZGlyZWN0Lmxlbmd0aDtcblxuICBpZiAodHJhbnNpdGl2ZSkge1xuICAgIGRlcGVuZGVuY2llc0NvdW50ICs9IHByb3BzLmRlcGVuZGVuY2llcy50cmFuc2l0aXZlLmxlbmd0aDtcbiAgICB1c2FnZXNDb3VudCArPSBwcm9wcy51c2FnZXMudHJhbnNpdGl2ZS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWFjdGlvbi11c2FnZXMgXCIuY29uY2F0KG9wZW4gPyBcImlzLW9wZW5cIiA6IFwiXCIpXG4gIH0sIGgoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWFjdGlvblwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldE9wZW4oIW9wZW4pXG4gIH0sIGljb24odXNhZ2VzSWNvbiksIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktYWN0aW9uLWxhYmVsXCJcbiAgfSwgXCJVc2FnZXNcIikpLCBvcGVuICYmIGgoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS11c2FnZXMtb3ZlcnZpZXdcIlxuICB9LCBoYXNUcmFuc2l0aXZlRGVwZW5kZW5jaWVzICYmIGgoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXVzYWdlcy10cmFuc2l0aXZlLXRvZ2dsZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFRyYW5zaXRpdmUoIXRyYW5zaXRpdmUpXG4gIH0sIGljb24odHJhbnNpdGl2ZUljb24pLCB0cmFuc2l0aXZlID8gXCJoaWRlIHRyYW5zaXRpdmVcIiA6IFwic2hvdyB0cmFuc2l0aXZlXCIpLCBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktdXNhZ2VzLWxpc3RcIlxuICB9LCBoKFwiaDNcIiwgbnVsbCwgXCJEZXBlbmRlbmNpZXMgKFwiLmNvbmNhdChkZXBlbmRlbmNpZXNDb3VudCwgXCIpXCIpKSwgcmVuZGVyTGlzdChwcm9wcy5kZXBlbmRlbmNpZXMsIHRyYW5zaXRpdmUsIHByb3BzLnJvdXRlcikpLCBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktdXNhZ2VzLWxpc3RcIlxuICB9LCBoKFwiaDNcIiwgbnVsbCwgXCJVc2FnZXMgKFwiLmNvbmNhdCh1c2FnZXNDb3VudCwgXCIpXCIpKSwgcmVuZGVyTGlzdChwcm9wcy51c2FnZXMsIHRyYW5zaXRpdmUsIHByb3BzLnJvdXRlcikpKSk7XG59IiwiZXhwb3J0IGNsYXNzIEdsdWdnaVJvdXRlciB7XG4gIGNvbnN0cnVjdG9yKHByZWZpeCkge1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgaG9tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXg7XG4gIH1cblxuICBjb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMucHJlZml4KS5jb25jYXQoY29tcG9uZW50LnR5cGUsIFwiL1wiKS5jb25jYXQoY29tcG9uZW50LmtleSk7XG4gIH1cblxufSIsImltcG9ydCB7IGgsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJztcbmltcG9ydCB7IGljb24gfSBmcm9tIFwiLi9pY29uXCI7XG5pbXBvcnQgYXJyb3dJY29uIGZyb20gXCIuLi8uLi9pY29uL2FjdGl2ZS5zdmdcIjtcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gXCIuLi8uLi9pY29uL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBleHRlcm5hbEljb24gZnJvbSBcIi4uLy4uL2ljb24vZXh0ZXJuYWwuc3ZnXCI7XG5pbXBvcnQgZXJyb3JJY29uIGZyb20gXCIuLi8uLi9pY29uL2Vycm9yLnN2Z1wiO1xuXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGxldCBzaG93RnVsbE5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICByZXR1cm4gaChcImxpXCIsIG51bGwsIGgoXCJhXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LWxpbmsgXCIuY29uY2F0KGNvbXBvbmVudC5hY3RpdmUgPyBcIiBnbHVnZ2ktYWN0aXZlXCIgOiBcIlwiKSxcbiAgICBocmVmOiBjb21wb25lbnQudXJsXG4gIH0sIGNvbXBvbmVudC5hY3RpdmUgJiYgaWNvbihhcnJvd0ljb24pLCBoKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1uYW1lXCJcbiAgfSwgc2hvd0Z1bGxOYW1lICYmIGgoXCJzcGFuXCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LXR5cGVcIlxuICB9LCBjb21wb25lbnQudHlwZSksIFwiIFwiLmNvbmNhdChjb21wb25lbnQubmFtZSksIGNvbXBvbmVudC5lcnJvciAmJiBpY29uKGVycm9ySWNvbiwgY29tcG9uZW50LmVycm9yKSwgXCJwYWdlXCIgPT09IGNvbXBvbmVudC50eXBlID8gaWNvbihleHRlcm5hbEljb24pIDogXCJcIikpKTtcbn1cblxuZnVuY3Rpb24gR2x1Z2dpVHlwZShwcm9wcykge1xuICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudFwiXG4gIH0sIGgoXCJoMlwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC10aXRsZVwiXG4gIH0sIHByb3BzLnR5cGUudGl0bGUpLCBwcm9wcy50eXBlLmNvbXBvbmVudHMubGVuZ3RoID4gMCA/IGgoXCJ1bFwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLWNvbXBvbmVudC1saXN0XCJcbiAgfSwgcHJvcHMudHlwZS5jb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgISFwcm9wcy5zaG93RnVsbE5hbWUpKSkgOiBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50LWVtcHR5XCJcbiAgfSwgcHJvcHMuZW1wdHlUZXh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyQ29udGVudChwcm9wcykge1xuICBsZXQgY29udGVudCA9IFtoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJnbHVnZ2ktZW1wdHlcIlxuICB9LCBcIlRoZXJlIGFyZSBubyBjb21wb25lbnRzLlwiKV07XG5cbiAgaWYgKHByb3BzLnR5cGVzLmxlbmd0aCkge1xuICAgIGxldCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBzZWFyY2ggPSBudWxsO1xuXG4gICAgaWYgKFwiXCIgIT09IHF1ZXJ5LnRyaW0oKSkge1xuICAgICAgc2VhcmNoID0ge1xuICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0c1wiLFxuICAgICAgICBjb21wb25lbnRzOiBtYXRjaFNvcnRlcihmbGF0dGVuVHlwZXMocHJvcHMudHlwZXMpLCBxdWVyeS50cmltKCksIHtcbiAgICAgICAgICBrZXlzOiBbXCJuYW1lXCJdXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRlbnQgPSBbaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktc2VhcmNoXCJcbiAgICB9LCBoKFwibGFiZWxcIiwge1xuICAgICAgY2xhc3M6IFwiZ2x1Z2dpLXNlYXJjaC13aWRnZXRcIlxuICAgIH0sIGgoXCJpbnB1dFwiLCB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGNsYXNzOiBcImdsdWdnaS1zZWFyY2gtaW5wdXRcIixcbiAgICAgIGlkOiBcImNvbXBvbmVudC1maWx0ZXJcIixcbiAgICAgIHZhbHVlOiBxdWVyeSxcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgb25JbnB1dDogZSA9PiBzZXRRdWVyeShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfSksIGljb24oc2VhcmNoSWNvbikpKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJnbHVnZ2ktY29tcG9uZW50c1wiXG4gICAgfSwgc2VhcmNoID8gaChHbHVnZ2lUeXBlLCB7XG4gICAgICB0eXBlOiBzZWFyY2gsXG4gICAgICBzaG93RnVsbE5hbWU6IHRydWUsXG4gICAgICBlbXB0eVRleHQ6IFwiTm8gbWF0Y2hlc1wiXG4gICAgfSkgOiBwcm9wcy50eXBlcy5tYXAodHlwZSA9PiBoKEdsdWdnaVR5cGUsIHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSkpXTtcbiAgfVxuXG4gIHJldHVybiBoKEZyYWdtZW50LCBudWxsLCBoKFwiYVwiLCB7XG4gICAgaHJlZjogcHJvcHMucm91dGVyLmhvbWUoKSxcbiAgICBjbGFzczogXCJnbHVnZ2ktdGl0bGVcIlxuICB9LCBwcm9wcy50aXRsZSksIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVHlwZXModHlwZXMpIHtcbiAgbGV0IGZsYXR0ZW5lZCA9IFtdO1xuICB0eXBlcy5mb3JFYWNoKHR5cGUgPT4gdHlwZS5jb21wb25lbnRzLmZvckVhY2goYyA9PiBmbGF0dGVuZWQucHVzaChjKSkpO1xuICByZXR1cm4gZmxhdHRlbmVkO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyB0b2dnbGVDbGFzcyB9IGZyb20gXCJtb2phdmUvZG9tL21hbmlwdWxhdGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9nZ2xlRnVsbFNjcmVlbihidXR0b24sIGNvbnRlbnRWaWV3KSB7XG4gIGxldCBmdWxsc2NyZWVuID0gZmFsc2U7XG4gIG9uKGJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZnVsbHNjcmVlbiA9ICFmdWxsc2NyZWVuO1xuICAgIHRvZ2dsZUNsYXNzKGNvbnRlbnRWaWV3LCBcImlzLWZ1bGxzY3JlZW5cIiwgZnVsbHNjcmVlbik7XG4gICAgdG9nZ2xlQ2xhc3MoYnV0dG9uLCBcImdsdWdnaS1pcy1hY3RpdmVcIiwgZnVsbHNjcmVlbik7XG4gIH0pO1xufSIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gaWNvbihpY29uU3ZnLCB0aXRsZSkge1xuICByZXR1cm4gaChcInNwYW5cIiwge1xuICAgIGNsYXNzOiBcImdsdWdnaS1pY29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogaWNvblN2Z1xuICAgIH0sXG4gICAgdGl0bGU6IHRpdGxlXG4gIH0pO1xufSIsImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vamF2ZS9kb20vZXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVVbnN0eWxlZEVsZW1lbnQsIHByZXBlbmQsIHRvZ2dsZUNsYXNzIH0gZnJvbSBcIm1vamF2ZS9kb20vbWFuaXB1bGF0ZVwiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9jbG9zZS5zdmdcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vLi4vaWNvbi9tZW51LnN2Z1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaWRlYmFyVmlzaWJpbGl0eVRvZ2dsZShjb250YWluZXIpIHtcbiAgbGV0IGJ1dHRvbiA9IGNyZWF0ZVVuc3R5bGVkRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiZ2x1Z2dpLXNpZGViYXItdG9nZ2xlXCIsXG4gICAgaHRtbDogXCI8c3BhbiBjbGFzcz1cXFwiZ2x1Z2dpLWRlZmF1bHRcXFwiPlwiLmNvbmNhdChtZW51SWNvbiwgXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImdsdWdnaS10b2dnbGVkXFxcIj5cIikuY29uY2F0KGNsb3NlSWNvbiwgXCI8L3NwYW4+XCIpXG4gIH0pO1xuICBsZXQgaXNUb2dnbGVkID0gZmFsc2U7XG4gIHByZXBlbmQoY29udGFpbmVyLCBidXR0b24pO1xuICBvbihidXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlzVG9nZ2xlZCA9ICFpc1RvZ2dsZWQ7XG4gICAgdG9nZ2xlQ2xhc3MoY29udGFpbmVyLCBcImdsdWdnaS1pcy10b2dnbGVkXCIsIGlzVG9nZ2xlZCk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHJlbW92ZUFjY2VudHMgZnJvbSAncmVtb3ZlLWFjY2VudHMnO1xudmFyIHJhbmtpbmdzID0ge1xuICBDQVNFX1NFTlNJVElWRV9FUVVBTDogOSxcbiAgRVFVQUw6IDgsXG4gIFNUQVJUU19XSVRIOiA3LFxuICBXT1JEX1NUQVJUU19XSVRIOiA2LFxuICBTVFJJTkdfQ0FTRTogNSxcbiAgU1RSSU5HX0NBU0VfQUNST05ZTTogNCxcbiAgQ09OVEFJTlM6IDMsXG4gIEFDUk9OWU06IDIsXG4gIE1BVENIRVM6IDEsXG4gIE5PX01BVENIOiAwXG59O1xudmFyIGNhc2VSYW5raW5ncyA9IHtcbiAgQ0FNRUw6IDAuOCxcbiAgUEFTQ0FMOiAwLjYsXG4gIEtFQkFCOiAwLjQsXG4gIFNOQUtFOiAwLjIsXG4gIE5PX0NBU0U6IDBcbn07XG5tYXRjaFNvcnRlci5yYW5raW5ncyA9IHJhbmtpbmdzO1xubWF0Y2hTb3J0ZXIuY2FzZVJhbmtpbmdzID0gY2FzZVJhbmtpbmdzO1xuLyoqXG4gKiBUYWtlcyBhbiBhcnJheSBvZiBpdGVtcyBhbmQgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSBpdGVtcyB0aGF0IG1hdGNoIHRoZSBnaXZlbiB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSB0aGUgaXRlbXMgdG8gc29ydFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIHVzZSBmb3IgcmFua2luZ1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTb21lIG9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBzb3J0ZXJcbiAqIEByZXR1cm4ge0FycmF5fSAtIHRoZSBuZXcgc29ydGVkIGFycmF5XG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hTb3J0ZXIoaXRlbXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gbm90IHBlcmZvcm1pbmcgYW55IHNlYXJjaC9zb3J0IGlmIHZhbHVlKHNlYXJjaCB0ZXJtKSBpcyBlbXB0eVxuXG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIGl0ZW1zO1xuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAga2V5cyA9IF9vcHRpb25zLmtleXMsXG4gICAgICBfb3B0aW9ucyR0aHJlc2hvbGQgPSBfb3B0aW9ucy50aHJlc2hvbGQsXG4gICAgICB0aHJlc2hvbGQgPSBfb3B0aW9ucyR0aHJlc2hvbGQgPT09IHZvaWQgMCA/IHJhbmtpbmdzLk1BVENIRVMgOiBfb3B0aW9ucyR0aHJlc2hvbGQ7XG4gIHZhciBtYXRjaGVkSXRlbXMgPSBpdGVtcy5yZWR1Y2UocmVkdWNlSXRlbXNUb1JhbmtlZCwgW10pO1xuICByZXR1cm4gbWF0Y2hlZEl0ZW1zLnNvcnQoc29ydFJhbmtlZEl0ZW1zKS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgaXRlbSA9IF9yZWYuaXRlbTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVkdWNlSXRlbXNUb1JhbmtlZChtYXRjaGVzLCBpdGVtLCBpbmRleCkge1xuICAgIHZhciBfZ2V0SGlnaGVzdFJhbmtpbmcgPSBnZXRIaWdoZXN0UmFua2luZyhpdGVtLCBrZXlzLCB2YWx1ZSwgb3B0aW9ucyksXG4gICAgICAgIHJhbmtlZEl0ZW0gPSBfZ2V0SGlnaGVzdFJhbmtpbmcucmFua2VkSXRlbSxcbiAgICAgICAgcmFuayA9IF9nZXRIaWdoZXN0UmFua2luZy5yYW5rLFxuICAgICAgICBrZXlJbmRleCA9IF9nZXRIaWdoZXN0UmFua2luZy5rZXlJbmRleCxcbiAgICAgICAgX2dldEhpZ2hlc3RSYW5raW5nJGtlID0gX2dldEhpZ2hlc3RSYW5raW5nLmtleVRocmVzaG9sZCxcbiAgICAgICAga2V5VGhyZXNob2xkID0gX2dldEhpZ2hlc3RSYW5raW5nJGtlID09PSB2b2lkIDAgPyB0aHJlc2hvbGQgOiBfZ2V0SGlnaGVzdFJhbmtpbmcka2U7XG5cbiAgICBpZiAocmFuayA+PSBrZXlUaHJlc2hvbGQpIHtcbiAgICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAgIHJhbmtlZEl0ZW06IHJhbmtlZEl0ZW0sXG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIHJhbms6IHJhbmssXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAga2V5SW5kZXg6IGtleUluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxufVxuLyoqXG4gKiBHZXRzIHRoZSBoaWdoZXN0IHJhbmtpbmcgZm9yIHZhbHVlIGZvciB0aGUgZ2l2ZW4gaXRlbSBiYXNlZCBvbiBpdHMgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5c1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGl0ZW0gdG8gcmFua1xuICogQHBhcmFtIHtBcnJheX0ga2V5cyAtIHRoZSBrZXlzIHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgaXRlbSBmb3IgdGhlIHJhbmtpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byByYW5rIGFnYWluc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0byBjb250cm9sIHRoZSByYW5raW5nXG4gKiBAcmV0dXJuIHt7cmFuazogTnVtYmVyLCBrZXlJbmRleDogTnVtYmVyLCBrZXlUaHJlc2hvbGQ6IE51bWJlcn19IC0gdGhlIGhpZ2hlc3QgcmFua2luZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0SGlnaGVzdFJhbmtpbmcoaXRlbSwga2V5cywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFrZXlzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGVuZHMgdXAgYmVpbmcgZHVwbGljYXRlIG9mICdpdGVtJyBpbiBtYXRjaGVzIGJ1dCBjb25zaXN0ZW50XG4gICAgICByYW5rZWRJdGVtOiBpdGVtLFxuICAgICAgcmFuazogZ2V0TWF0Y2hSYW5raW5nKGl0ZW0sIHZhbHVlLCBvcHRpb25zKSxcbiAgICAgIGtleUluZGV4OiAtMSxcbiAgICAgIGtleVRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGRcbiAgICB9O1xuICB9XG5cbiAgdmFyIHZhbHVlc1RvUmFuayA9IGdldEFsbFZhbHVlc1RvUmFuayhpdGVtLCBrZXlzKTtcbiAgcmV0dXJuIHZhbHVlc1RvUmFuay5yZWR1Y2UoZnVuY3Rpb24gKF9yZWYyLCBfcmVmMywgaSkge1xuICAgIHZhciByYW5rID0gX3JlZjIucmFuayxcbiAgICAgICAga2V5SW5kZXggPSBfcmVmMi5rZXlJbmRleCxcbiAgICAgICAga2V5VGhyZXNob2xkID0gX3JlZjIua2V5VGhyZXNob2xkO1xuICAgIHZhciBpdGVtVmFsdWUgPSBfcmVmMy5pdGVtVmFsdWUsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuICAgIHZhciBuZXdSYW5rID0gZ2V0TWF0Y2hSYW5raW5nKGl0ZW1WYWx1ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIHZhciBtaW5SYW5raW5nID0gYXR0cmlidXRlcy5taW5SYW5raW5nLFxuICAgICAgICBtYXhSYW5raW5nID0gYXR0cmlidXRlcy5tYXhSYW5raW5nLFxuICAgICAgICB0aHJlc2hvbGQgPSBhdHRyaWJ1dGVzLnRocmVzaG9sZDtcblxuICAgIGlmIChuZXdSYW5rIDwgbWluUmFua2luZyAmJiBuZXdSYW5rID49IHJhbmtpbmdzLk1BVENIRVMpIHtcbiAgICAgIG5ld1JhbmsgPSBtaW5SYW5raW5nO1xuICAgIH0gZWxzZSBpZiAobmV3UmFuayA+IG1heFJhbmtpbmcpIHtcbiAgICAgIG5ld1JhbmsgPSBtYXhSYW5raW5nO1xuICAgIH1cblxuICAgIGlmIChuZXdSYW5rID4gcmFuaykge1xuICAgICAgcmFuayA9IG5ld1Jhbms7XG4gICAgICBrZXlJbmRleCA9IGk7XG4gICAgICBrZXlUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmtlZEl0ZW06IGl0ZW1WYWx1ZSxcbiAgICAgIHJhbms6IHJhbmssXG4gICAgICBrZXlJbmRleDoga2V5SW5kZXgsXG4gICAgICBrZXlUaHJlc2hvbGQ6IGtleVRocmVzaG9sZFxuICAgIH07XG4gIH0sIHtcbiAgICByYW5rOiByYW5raW5ncy5OT19NQVRDSCxcbiAgICBrZXlJbmRleDogLTEsXG4gICAga2V5VGhyZXNob2xkOiBvcHRpb25zLnRocmVzaG9sZFxuICB9KTtcbn1cbi8qKlxuICogR2l2ZXMgYSByYW5raW5ncyBzY29yZSBiYXNlZCBvbiBob3cgd2VsbCB0aGUgdHdvIHN0cmluZ3MgbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nVG9SYW5rIC0gdGhlIHN0cmluZyB0byByYW5rXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgZm9yIHRoZSBtYXRjaCAobGlrZSBrZWVwRGlhY3JpdGljcyBmb3IgY29tcGFyaXNvbilcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByYW5raW5nIGZvciBob3cgd2VsbCBzdHJpbmdUb1JhbmsgbWF0Y2hlcyB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRNYXRjaFJhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBvcHRpb25zKSB7XG4gIC8qIGVzbGludCBjb21wbGV4aXR5OlsyLCAxMl0gKi9cbiAgdGVzdFN0cmluZyA9IHByZXBhcmVWYWx1ZUZvckNvbXBhcmlzb24odGVzdFN0cmluZywgb3B0aW9ucyk7XG4gIHN0cmluZ1RvUmFuayA9IHByZXBhcmVWYWx1ZUZvckNvbXBhcmlzb24oc3RyaW5nVG9SYW5rLCBvcHRpb25zKTsgLy8gdG9vIGxvbmdcblxuICBpZiAoc3RyaW5nVG9SYW5rLmxlbmd0aCA+IHRlc3RTdHJpbmcubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLk5PX01BVENIO1xuICB9IC8vIGNhc2Ugc2Vuc2l0aXZlIGVxdWFsc1xuXG5cbiAgaWYgKHRlc3RTdHJpbmcgPT09IHN0cmluZ1RvUmFuaykge1xuICAgIHJldHVybiByYW5raW5ncy5DQVNFX1NFTlNJVElWRV9FUVVBTDtcbiAgfVxuXG4gIHZhciBjYXNlUmFuayA9IGdldENhc2VSYW5raW5nKHRlc3RTdHJpbmcpO1xuICB2YXIgaXNQYXJ0aWFsID0gaXNQYXJ0aWFsT2ZDYXNlKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmspO1xuICB2YXIgaXNDYXNlZEFjcm9ueW0gPSBpc0Nhc2VBY3JvbnltKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgY2FzZVJhbmspOyAvLyBMb3dlciBjYXNpbmcgYmVmb3JlIGZ1cnRoZXIgY29tcGFyaXNvblxuXG4gIHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIHN0cmluZ1RvUmFuayA9IHN0cmluZ1RvUmFuay50b0xvd2VyQ2FzZSgpOyAvLyBjYXNlIGluc2Vuc2l0aXZlIGVxdWFsc1xuXG4gIGlmICh0ZXN0U3RyaW5nID09PSBzdHJpbmdUb1JhbmspIHtcbiAgICByZXR1cm4gcmFua2luZ3MuRVFVQUwgKyBjYXNlUmFuaztcbiAgfSAvLyBzdGFydHMgd2l0aFxuXG5cbiAgaWYgKHRlc3RTdHJpbmcuaW5kZXhPZihzdHJpbmdUb1JhbmspID09PSAwKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLlNUQVJUU19XSVRIICsgY2FzZVJhbms7XG4gIH0gLy8gd29yZCBzdGFydHMgd2l0aFxuXG5cbiAgaWYgKHRlc3RTdHJpbmcuaW5kZXhPZihcIiBcIiArIHN0cmluZ1RvUmFuaykgIT09IC0xKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLldPUkRfU1RBUlRTX1dJVEggKyBjYXNlUmFuaztcbiAgfSAvLyBpcyBhIHBhcnQgaW5zaWRlIGEgY2FzZWQgc3RyaW5nXG5cblxuICBpZiAoaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLlNUUklOR19DQVNFICsgY2FzZVJhbms7XG4gIH0gLy8gaXMgYWNyb255bSBmb3IgYSBjYXNlZCBzdHJpbmdcblxuXG4gIGlmIChjYXNlUmFuayA+IDAgJiYgaXNDYXNlZEFjcm9ueW0pIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RSSU5HX0NBU0VfQUNST05ZTSArIGNhc2VSYW5rO1xuICB9IC8vIGNvbnRhaW5zXG5cblxuICBpZiAodGVzdFN0cmluZy5pbmRleE9mKHN0cmluZ1RvUmFuaykgIT09IC0xKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkNPTlRBSU5TICsgY2FzZVJhbms7XG4gIH0gZWxzZSBpZiAoc3RyaW5nVG9SYW5rLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIElmIHRoZSBvbmx5IGNoYXJhY3RlciBpbiB0aGUgZ2l2ZW4gc3RyaW5nVG9SYW5rXG4gICAgLy8gICBpc24ndCBldmVuIGNvbnRhaW5lZCBpbiB0aGUgdGVzdFN0cmluZywgdGhlblxuICAgIC8vICAgaXQncyBkZWZpbml0ZWx5IG5vdCBhIG1hdGNoLlxuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfSAvLyBhY3JvbnltXG5cblxuICBpZiAoZ2V0QWNyb255bSh0ZXN0U3RyaW5nKS5pbmRleE9mKHN0cmluZ1RvUmFuaykgIT09IC0xKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkFDUk9OWU0gKyBjYXNlUmFuaztcbiAgfSAvLyB3aWxsIHJldHVybiBhIG51bWJlciBiZXR3ZWVuIHJhbmtpbmdzLk1BVENIRVMgYW5kXG4gIC8vIHJhbmtpbmdzLk1BVENIRVMgKyAxIGRlcGVuZGluZyAgb24gaG93IGNsb3NlIG9mIGEgbWF0Y2ggaXQgaXMuXG5cblxuICByZXR1cm4gZ2V0Q2xvc2VuZXNzUmFua2luZyh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmspO1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYWNyb255bSBmb3IgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIGZvciB3aGljaCB0byBwcm9kdWNlIHRoZSBhY3JvbnltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgYWNyb255bVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QWNyb255bShzdHJpbmcpIHtcbiAgdmFyIGFjcm9ueW0gPSAnJztcbiAgdmFyIHdvcmRzSW5TdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyAnKTtcbiAgd29yZHNJblN0cmluZy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkSW5TdHJpbmcpIHtcbiAgICB2YXIgc3BsaXRCeUh5cGhlbldvcmRzID0gd29yZEluU3RyaW5nLnNwbGl0KCctJyk7XG4gICAgc3BsaXRCeUh5cGhlbldvcmRzLmZvckVhY2goZnVuY3Rpb24gKHNwbGl0QnlIeXBoZW5Xb3JkKSB7XG4gICAgICBhY3JvbnltICs9IHNwbGl0QnlIeXBoZW5Xb3JkLnN1YnN0cigwLCAxKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBhY3JvbnltO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc2NvcmUgYmFzZSBvbiB0aGUgY2FzZSBvZiB0aGUgdGVzdFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiB0aGUgcmFua2luZyxcbiAqIGJhc2VkIG9uIHRoZSBjYXNlIGJldHdlZW4gMCBhbmQgMSBmb3IgaG93IHRoZSB0ZXN0U3RyaW5nIG1hdGNoZXMgdGhlIGNhc2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENhc2VSYW5raW5nKHRlc3RTdHJpbmcpIHtcbiAgdmFyIGNvbnRhaW5zVXBwZXJDYXNlID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpICE9PSB0ZXN0U3RyaW5nO1xuICB2YXIgY29udGFpbnNEYXNoID0gdGVzdFN0cmluZy5pbmRleE9mKCctJykgPj0gMDtcbiAgdmFyIGNvbnRhaW5zVW5kZXJzY29yZSA9IHRlc3RTdHJpbmcuaW5kZXhPZignXycpID49IDA7XG5cbiAgaWYgKCFjb250YWluc1VwcGVyQ2FzZSAmJiAhY29udGFpbnNVbmRlcnNjb3JlICYmIGNvbnRhaW5zRGFzaCkge1xuICAgIHJldHVybiBjYXNlUmFua2luZ3MuS0VCQUI7XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zVXBwZXJDYXNlICYmIGNvbnRhaW5zVW5kZXJzY29yZSAmJiAhY29udGFpbnNEYXNoKSB7XG4gICAgcmV0dXJuIGNhc2VSYW5raW5ncy5TTkFLRTtcbiAgfVxuXG4gIGlmIChjb250YWluc1VwcGVyQ2FzZSAmJiAhY29udGFpbnNEYXNoICYmICFjb250YWluc1VuZGVyc2NvcmUpIHtcbiAgICB2YXIgc3RhcnRzV2l0aFVwcGVyQ2FzZSA9IHRlc3RTdHJpbmdbMF0udG9VcHBlckNhc2UoKSA9PT0gdGVzdFN0cmluZ1swXTtcblxuICAgIGlmIChzdGFydHNXaXRoVXBwZXJDYXNlKSB7XG4gICAgICByZXR1cm4gY2FzZVJhbmtpbmdzLlBBU0NBTDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FzZVJhbmtpbmdzLkNBTUVMO1xuICB9XG5cbiAgcmV0dXJuIGNhc2VSYW5raW5ncy5OT19DQVNFO1xufVxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHN0cmluZ1RvUmFuayBpcyBvbmUgb2YgdGhlIGNhc2UgcGFydHMgaW4gdGhlIHRlc3RTdHJpbmcgKHdvcmtzIHdpdGggYW55IHN0cmluZyBjYXNlKVxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogaXNQYXJ0aWFsT2ZDYXNlKCdoZWxsb1dvcmxkJywgJ3dvcmxkJywgY2FzZVJhbmtpbmdzLkNBTUVMKVxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgZmFsc2VcbiAqIGlzUGFydGlhbE9mQ2FzZSgnaGVsbG9Xb3JsZCcsICdvd29ybCcsIGNhc2VSYW5raW5ncy5DQU1FTClcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEBwYXJhbSB7TnVtYmVyfSBjYXNlUmFua2luZyAtIHRoZSByYW5raW5nIHNjb3JlIGJhc2VkIG9uIGNhc2Ugb2YgdGVzdFN0cmluZ1xuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIHN0cmluZ1RvUmFuayBpcyBvbmUgb2YgdGhlIGNhc2UgcGFydHMgaW4gdGhlIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzUGFydGlhbE9mQ2FzZSh0ZXN0U3RyaW5nLCBzdHJpbmdUb1JhbmssIGNhc2VSYW5raW5nKSB7XG4gIHZhciB0ZXN0SW5kZXggPSB0ZXN0U3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKSk7XG5cbiAgc3dpdGNoIChjYXNlUmFua2luZykge1xuICAgIGNhc2UgY2FzZVJhbmtpbmdzLlNOQUtFOlxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdbdGVzdEluZGV4IC0gMV0gPT09ICdfJztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLktFQkFCOlxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdbdGVzdEluZGV4IC0gMV0gPT09ICctJztcblxuICAgIGNhc2UgY2FzZVJhbmtpbmdzLlBBU0NBTDpcbiAgICBjYXNlIGNhc2VSYW5raW5ncy5DQU1FTDpcbiAgICAgIHJldHVybiB0ZXN0SW5kZXggIT09IC0xICYmIHRlc3RTdHJpbmdbdGVzdEluZGV4XSA9PT0gdGVzdFN0cmluZ1t0ZXN0SW5kZXhdLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4vKipcbiAqIENoZWNrIGlmIHN0cmluZ1RvUmFuayBpcyBhbiBhY3JvbnltIGZvciBhIHBhcnRpYWwgY2FzZVxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogaXNDYXNlQWNyb255bSgnc3VwZXJfZHVwZXJfZmlsZScsICdzZGYnLCBjYXNlUmFua2luZ3MuU05BS0UpXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nVG9SYW5rIC0gdGhlIGFjcm9ueW0gdG8gdGVzdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNhc2VSYW5rIC0gdGhlIHJhbmtpbmcgb2YgdGhlIGNhc2VcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZSBzdHJpbmdUb1JhbmsgaXMgYW4gYWNyb255bSBmb3IgdGhlIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQ2FzZUFjcm9ueW0odGVzdFN0cmluZywgc3RyaW5nVG9SYW5rLCBjYXNlUmFuaykge1xuICB2YXIgc3BsaXRWYWx1ZSA9IG51bGw7XG5cbiAgc3dpdGNoIChjYXNlUmFuaykge1xuICAgIGNhc2UgY2FzZVJhbmtpbmdzLlNOQUtFOlxuICAgICAgc3BsaXRWYWx1ZSA9ICdfJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBjYXNlUmFua2luZ3MuS0VCQUI6XG4gICAgICBzcGxpdFZhbHVlID0gJy0nO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGNhc2VSYW5raW5ncy5QQVNDQUw6XG4gICAgY2FzZSBjYXNlUmFua2luZ3MuQ0FNRUw6XG4gICAgICBzcGxpdFZhbHVlID0gLyg/PVtBLVpdKS87XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBzcGxpdFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBzcGxpdFRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnNwbGl0KHNwbGl0VmFsdWUpO1xuICByZXR1cm4gc3RyaW5nVG9SYW5rLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoY29ycmVjdCwgY2hhciwgY2hhckluZGV4KSB7XG4gICAgdmFyIHNwbGl0SXRlbSA9IHNwbGl0VGVzdFN0cmluZ1tjaGFySW5kZXhdO1xuICAgIHJldHVybiBjb3JyZWN0ICYmIHNwbGl0SXRlbSAmJiBzcGxpdEl0ZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gY2hhcjtcbiAgfSwgdHJ1ZSk7XG59XG4vKipcbiAqIFJldHVybnMgYSBzY29yZSBiYXNlZCBvbiBob3cgc3ByZWFkIGFwYXJ0IHRoZVxuICogY2hhcmFjdGVycyBmcm9tIHRoZSBzdHJpbmdUb1JhbmsgYXJlIHdpdGhpbiB0aGUgdGVzdFN0cmluZy5cbiAqIEEgbnVtYmVyIGNsb3NlIHRvIHJhbmtpbmdzLk1BVENIRVMgcmVwcmVzZW50cyBhIGxvb3NlIG1hdGNoLiBBIG51bWJlciBjbG9zZVxuICogdG8gcmFua2luZ3MuTUFUQ0hFUyArIDEgcmVwcmVzZW50cyBhIHRpZ2h0ZXIgbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ30gdGVzdFN0cmluZyAtIHRoZSBzdHJpbmcgdG8gdGVzdCBhZ2FpbnN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nVG9SYW5rIC0gdGhlIHN0cmluZyB0byByYW5rXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIGJldHdlZW4gcmFua2luZ3MuTUFUQ0hFUyBhbmRcbiAqIHJhbmtpbmdzLk1BVENIRVMgKyAxIGZvciBob3cgd2VsbCBzdHJpbmdUb1JhbmsgbWF0Y2hlcyB0ZXN0U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDbG9zZW5lc3NSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaykge1xuICB2YXIgbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50ID0gMDtcbiAgdmFyIGNoYXJOdW1iZXIgPSAwO1xuXG4gIGZ1bmN0aW9uIGZpbmRNYXRjaGluZ0NoYXJhY3RlcihtYXRjaENoYXIsIHN0cmluZywgaW5kZXgpIHtcbiAgICBmb3IgKHZhciBqID0gaW5kZXg7IGogPCBzdHJpbmcubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBzdHJpbmdDaGFyID0gc3RyaW5nW2pdO1xuXG4gICAgICBpZiAoc3RyaW5nQ2hhciA9PT0gbWF0Y2hDaGFyKSB7XG4gICAgICAgIG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCArPSAxO1xuICAgICAgICByZXR1cm4gaiArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFua2luZyhzcHJlYWQpIHtcbiAgICB2YXIgaW5PcmRlclBlcmNlbnRhZ2UgPSBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgLyBzdHJpbmdUb1JhbmsubGVuZ3RoO1xuICAgIHZhciByYW5raW5nID0gcmFua2luZ3MuTUFUQ0hFUyArIGluT3JkZXJQZXJjZW50YWdlICogKDEgLyBzcHJlYWQpO1xuICAgIHJldHVybiByYW5raW5nO1xuICB9XG5cbiAgdmFyIGZpcnN0SW5kZXggPSBmaW5kTWF0Y2hpbmdDaGFyYWN0ZXIoc3RyaW5nVG9SYW5rWzBdLCB0ZXN0U3RyaW5nLCAwKTtcblxuICBpZiAoZmlyc3RJbmRleCA8IDApIHtcbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH1cblxuICBjaGFyTnVtYmVyID0gZmlyc3RJbmRleDtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IHN0cmluZ1RvUmFuay5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtYXRjaENoYXIgPSBzdHJpbmdUb1JhbmtbaV07XG4gICAgY2hhck51bWJlciA9IGZpbmRNYXRjaGluZ0NoYXJhY3RlcihtYXRjaENoYXIsIHRlc3RTdHJpbmcsIGNoYXJOdW1iZXIpO1xuICAgIHZhciBmb3VuZCA9IGNoYXJOdW1iZXIgPiAtMTtcblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgICB9XG4gIH1cblxuICB2YXIgc3ByZWFkID0gY2hhck51bWJlciAtIGZpcnN0SW5kZXg7XG4gIHJldHVybiBnZXRSYW5raW5nKHNwcmVhZCk7XG59XG4vKipcbiAqIFNvcnRzIGl0ZW1zIHRoYXQgaGF2ZSBhIHJhbmssIGluZGV4LCBhbmQga2V5SW5kZXhcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIC0gdGhlIGZpcnN0IGl0ZW0gdG8gc29ydFxuICogQHBhcmFtIHtPYmplY3R9IGIgLSB0aGUgc2Vjb25kIGl0ZW0gdG8gc29ydFxuICogQHJldHVybiB7TnVtYmVyfSAtMSBpZiBhIHNob3VsZCBjb21lIGZpcnN0LCAxIGlmIGIgc2hvdWxkIGNvbWUgZmlyc3RcbiAqIE5vdGU6IHdpbGwgbmV2ZXIgcmV0dXJuIDBcbiAqL1xuXG5cbmZ1bmN0aW9uIHNvcnRSYW5rZWRJdGVtcyhhLCBiKSB7XG4gIHZhciBhRmlyc3QgPSAtMTtcbiAgdmFyIGJGaXJzdCA9IDE7XG4gIHZhciBhUmFua2VkSXRlbSA9IGEucmFua2VkSXRlbSxcbiAgICAgIGFSYW5rID0gYS5yYW5rLFxuICAgICAgYUtleUluZGV4ID0gYS5rZXlJbmRleDtcbiAgdmFyIGJSYW5rZWRJdGVtID0gYi5yYW5rZWRJdGVtLFxuICAgICAgYlJhbmsgPSBiLnJhbmssXG4gICAgICBiS2V5SW5kZXggPSBiLmtleUluZGV4O1xuXG4gIGlmIChhUmFuayA9PT0gYlJhbmspIHtcbiAgICBpZiAoYUtleUluZGV4ID09PSBiS2V5SW5kZXgpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoYVJhbmtlZEl0ZW0pLmxvY2FsZUNvbXBhcmUoYlJhbmtlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYUtleUluZGV4IDwgYktleUluZGV4ID8gYUZpcnN0IDogYkZpcnN0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYVJhbmsgPiBiUmFuayA/IGFGaXJzdCA6IGJGaXJzdDtcbiAgfVxufVxuLyoqXG4gKiBQcmVwYXJlcyB2YWx1ZSBmb3IgY29tcGFyaXNvbiBieSBzdHJpbmdpZnlpbmcgaXQsIHJlbW92aW5nIGRpYWNyaXRpY3MgKGlmIHNwZWNpZmllZClcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjbGVhblxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB7a2VlcERpYWNyaXRpY3M6IHdoZXRoZXIgdG8gcmVtb3ZlIGRpYWNyaXRpY3N9XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBwcmVwYXJlZCB2YWx1ZVxuICovXG5cblxuZnVuY3Rpb24gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbih2YWx1ZSwgX3JlZjQpIHtcbiAgdmFyIGtlZXBEaWFjcml0aWNzID0gX3JlZjQua2VlcERpYWNyaXRpY3M7XG4gIHZhbHVlID0gXCJcIiArIHZhbHVlOyAvLyB0b1N0cmluZ1xuXG4gIGlmICgha2VlcERpYWNyaXRpY3MpIHtcbiAgICB2YWx1ZSA9IHJlbW92ZUFjY2VudHModmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBHZXRzIHZhbHVlIGZvciBrZXkgaW4gaXRlbSBhdCBhcmJpdHJhcmlseSBuZXN0ZWQga2V5cGF0aFxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSB0aGUgaXRlbVxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IGtleSAtIHRoZSBwb3RlbnRpYWxseSBuZXN0ZWQga2V5cGF0aCBvciBwcm9wZXJ0eSBjYWxsYmFja1xuICogQHJldHVybiB7QXJyYXl9IC0gYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWUocykgYXQgdGhlIG5lc3RlZCBrZXlwYXRoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRJdGVtVmFsdWVzKGl0ZW0sIGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICBrZXkgPSBrZXkua2V5O1xuICB9XG5cbiAgdmFyIHZhbHVlO1xuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUgPSBrZXkoaXRlbSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgLy8gaGFuZGxlIG5lc3RlZCBrZXlzXG4gICAgdmFsdWUgPSBrZXkuc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gKGl0ZW1PYmosIG5lc3RlZEtleSkge1xuICAgICAgcmV0dXJuIGl0ZW1PYmogPyBpdGVtT2JqW25lc3RlZEtleV0gOiBudWxsO1xuICAgIH0sIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gaXRlbVtrZXldO1xuICB9IC8vIGNvbmNhdCBiZWNhdXNlIGB2YWx1ZWAgY2FuIGJlIGEgc3RyaW5nIG9yIGFuIGFycmF5XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBbXS5jb25jYXQodmFsdWUpIDogbnVsbDtcbn1cbi8qKlxuICogR2V0cyBhbGwgdGhlIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGtleXMgaW4gdGhlIGdpdmVuIGl0ZW0gYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UgdmFsdWVzXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIHRoZSBpdGVtIGZyb20gd2hpY2ggdGhlIHZhbHVlcyB3aWxsIGJlIHJldHJpZXZlZFxuICogQHBhcmFtIHtBcnJheX0ga2V5cyAtIHRoZSBrZXlzIHRvIHVzZSB0byByZXRyaWV2ZSB0aGUgdmFsdWVzXG4gKiBAcmV0dXJuIHtBcnJheX0gb2JqZWN0cyB3aXRoIHtpdGVtVmFsdWUsIGF0dHJpYnV0ZXN9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBbGxWYWx1ZXNUb1JhbmsoaXRlbSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFsbFZhbHMsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBnZXRJdGVtVmFsdWVzKGl0ZW0sIGtleSk7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbVZhbHVlKSB7XG4gICAgICAgIGFsbFZhbHMucHVzaCh7XG4gICAgICAgICAgaXRlbVZhbHVlOiBpdGVtVmFsdWUsXG4gICAgICAgICAgYXR0cmlidXRlczogZ2V0S2V5QXR0cmlidXRlcyhrZXkpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFZhbHM7XG4gIH0sIFtdKTtcbn1cbi8qKlxuICogR2V0cyBhbGwgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBnaXZlbiBrZXlcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30ga2V5IC0gdGhlIGtleSBmcm9tIHdoaWNoIHRoZSBhdHRyaWJ1dGVzIHdpbGwgYmUgcmV0cmlldmVkXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkncyBhdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRLZXlBdHRyaWJ1dGVzKGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICBrZXkgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIG1heFJhbmtpbmc6IEluZmluaXR5LFxuICAgIG1pblJhbmtpbmc6IC1JbmZpbml0eVxuICB9LCBrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNvcnRlcjtcbmV4cG9ydCB7IHJhbmtpbmdzIH07IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi4vcnVudGltZVwiO1xuY29uc3QgU1BFQ0lBTF9BVFRSSUJVVEVfU0VUVEVSUyA9IC9eKGh0bWx8dGV4dHxjc3MpJC87XG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cnMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVzLCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcblxuICAgIGlmIChTUEVDSUFMX0FUVFJJQlVURV9TRVRURVJTLnRlc3Qoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSA9PT0gdHJ1ZSA/IGtleSA6IFwiXCIgKyB2YWx1ZSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgaGFzT3duUHJvcGVydHkgfSBmcm9tIFwiLi4vcnVudGltZVwiO1xuY29uc3QgQ1VTVE9NX1BST1BFUlRZX1JFR0VYID0gL14tLS87XG5jb25zdCBERUZBVUxUX1NUWUxFUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7XG5jb25zdCBWRU5ET1JfUFJFRklYRVMgPSBbXCItd2Via2l0LVwiLCBcIi1tb3otXCIsIFwiLW8tXCIsIFwiLW1zLVwiXTtcbmNvbnN0IHByb3BlcnR5TmFtZUNhY2hlID0ge307XG5jb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcbmNvbnN0IERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUyA9IC9zY3JvbGwoVG9wfExlZnQpL2k7XG5jb25zdCBIQVNfUElYRUxTX1VOSVQgPSAvcHgkLztcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHkocHJvcGVydHkpIHtcbiAgaWYgKHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XSkge1xuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVDYWNoZVtwcm9wZXJ0eV07XG4gIH1cblxuICBpZiAocHJvcGVydHkgaW4gREVGQVVMVF9TVFlMRVMpIHtcbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFZFTkRPUl9QUkVGSVhFUy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IFwiXCIuY29uY2F0KFZFTkRPUl9QUkVGSVhFU1tpXSkuY29uY2F0KHByb3BlcnR5KTtcblxuICAgIGlmIChwcmVmaXhlZE5hbWUgaW4gREVGQVVMVF9TVFlMRVMpIHtcbiAgICAgIHByb3BlcnR5TmFtZUNhY2hlW3Byb3BlcnR5XSA9IHByZWZpeGVkTmFtZTtcbiAgICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgcHJvcGVydHlOYW1lQ2FjaGVbcHJvcGVydHldID0gcHJvcGVydHk7XG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50cywgc3R5bGVzKSB7XG4gIGxldCBzdHlsZWRFbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHMpID8gZWxlbWVudHMgOiBbZWxlbWVudHNdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZWxlbWVudCA9IHN0eWxlZEVsZW1lbnRzW2ldO1xuICAgIGxldCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG5cbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkoc3R5bGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG5cbiAgICAgIGlmIChESVJFQ1RMWV9BQ0NFU1NJQkxFX1NFVFRFUlMudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgZWxlbWVudFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChDVVNUT01fUFJPUEVSVFlfUkVHRVgudGVzdChwcm9wZXJ0eSkpIHtcbiAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzW3Byb3BlcnR5XSA9PT0gXCJudW1iZXJcIiAmJiAhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QocHJvcGVydHkpKSB7XG4gICAgICAgIHZhbHVlICs9IFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgcHJvcGVydHkgPSBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgICBzdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbWVudCkge1xuICBsZXQgcHNldWRvRWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgbGV0IHZpZXcgPSBudWxsICE9PSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgJiYgZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICB2aWV3ID0gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBwc2V1ZG9FbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGxldCBwc2V1ZG9FbGVtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICBsZXQgY2FzdGVkRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKERJUkVDVExZX0FDQ0VTU0lCTEVfU0VUVEVSUy50ZXN0KHByb3BlcnR5KSkge1xuICAgIHJldHVybiBjYXN0ZWRFbGVtZW50W3Byb3BlcnR5XTtcbiAgfVxuXG4gIGlmICghQ1VTVE9NX1BST1BFUlRZX1JFR0VYLnRlc3QocHJvcGVydHkpKSB7XG4gICAgcHJvcGVydHkgPSBub3JtYWxpemVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH1cblxuICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlcyhjYXN0ZWRFbGVtZW50LCBwc2V1ZG9FbGVtZW50KTtcbiAgY29uc3QgdmFsdWUgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgc3R5bGVzW3Byb3BlcnR5XTtcblxuICBpZiAoXCJvcGFjaXR5XCIgPT09IHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcIlwiID8gXCIxXCIgOiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFJU19OT05fRElNRU5TSU9OQUwudGVzdChwcm9wZXJ0eSkgJiYgSEFTX1BJWEVMU19VTklULnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoSEFTX1BJWEVMU19VTklULCBcIlwiKSwgMTApO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KGVsZW1lbnQsIHN0eWxlKSB7XG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSBzdHlsZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIHVwZGF0ZURpc3BsYXkoZWxlbWVudCwgXCJub25lXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICB1cGRhdGVEaXNwbGF5KGVsZW1lbnQsIFwiXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChlbGVtZW50KSB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgfTtcbn0iLCJpbXBvcnQgeyBzcGxpdFN0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmNvbnN0IGxpc3RlbmVyUmVnaXN0cnkgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIG9uKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuICBjb25zdCB0eXBlcyA9IHNwbGl0U3RyaW5nVmFsdWUodHlwZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0eXBlcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGxpc3RbaV07XG5cbiAgICAgIGlmIChudWxsID09PSBub2RlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBldmVudFR5cGUgPSB0eXBlc1tqXTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgbGV0IGxpc3RlbmVycyA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KG5vZGUpO1xuXG4gICAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgICBsaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgbGlzdGVuZXJSZWdpc3RyeS5zZXQobm9kZSwgbGlzdGVuZXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyc1tldmVudFR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzW2V2ZW50VHlwZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmYoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG4gIGNvbnN0IHR5cGVzID0gc3BsaXRTdHJpbmdWYWx1ZSh0eXBlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHR5cGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBub2RlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKG51bGwgPT09IG5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IHR5cGVzW2pdO1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBsaXN0ZW5lclJlZ2lzdHJ5LmdldChub2RlKTtcblxuICAgICAgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmVyc1tldmVudFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgIGlmICgtMSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRUeXBlXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gb25jZShlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmIChudWxsID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpbnRlcm1lZGlhdGUgPSBldmVudCA9PiB7XG4gICAgaGFuZGxlcihldmVudCk7XG4gICAgb2ZmKGVsZW1lbnQsIHR5cGUsIGludGVybWVkaWF0ZSk7XG4gIH07XG5cbiAgb24oZWxlbWVudCwgdHlwZSwgaW50ZXJtZWRpYXRlKTtcbiAgcmV0dXJuIGludGVybWVkaWF0ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgaGFuZGxlcikge1xuICBpZiAobnVsbCA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaW50ZXJtZWRpYXRlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQgPSBmaW5kRGVsZWdhdGVkVGFyZ2V0KGVsZW1lbnQsIGV2ZW50LnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgaWYgKG51bGwgIT09IG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQpIHtcbiAgICAgIGhhbmRsZXIoZXZlbnQsIG1hdGNoZWREZWxlZ2F0ZWRUYXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBvbihlbGVtZW50LCB0eXBlLCBpbnRlcm1lZGlhdGUpO1xuICByZXR1cm4gaW50ZXJtZWRpYXRlO1xufVxuXG5mdW5jdGlvbiBmaW5kRGVsZWdhdGVkVGFyZ2V0KGRlbGVnYXRlRWxlbWVudCwgY3VycmVudFRhcmdldCwgc2VsZWN0b3IpIHtcbiAgbGV0IG5vZGUgPSBjdXJyZW50VGFyZ2V0O1xuXG4gIHdoaWxlIChudWxsICE9PSBub2RlICYmIG5vZGUgIT09IGRlbGVnYXRlRWxlbWVudCkge1xuICAgIGlmIChub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKGVsZW1lbnQsIHR5cGUpIHtcbiAgbGV0IGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cbiAgaWYgKG51bGwgPT09IGVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBldmVudCA9IGNyZWF0ZUV2ZW50KHR5cGUsIHtcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgZGV0YWlsOiBkYXRhXG4gIH0pO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlLCBhcmdzKSB7XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsICEhYXJncy5idWJibGVzLCAhIWFyZ3MuY2FuY2VsYWJsZSwgYXJncy5kZXRhaWwpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMaXN0ZW5lcnMoZWxlbWVudCkge1xuICByZXR1cm4gbGlzdGVuZXJSZWdpc3RyeS5nZXQoZWxlbWVudCkgfHwge307XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSBcIi4vYXR0clwiO1xuaW1wb3J0IHsgc2V0U3R5bGVzIH0gZnJvbSBcIi4vY3NzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBkb2MuYm9keS5jaGlsZHJlbjtcblxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgcGFyc2UgSFRNTCB3aXRoIGV4YWN0bHkgb25lIHZhbGlkIHJvb3QgZWxlbWVudC4gQSB2YWxpZCBlbGVtZW50IGNhbiBzdGFuZCBvbiBpdHMgb3duIGluIHRoZSBib2R5LlwiKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlblswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSkge1xuICBsZXQgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVVbnN0eWxlZEVsZW1lbnQodHlwZSwgYXR0cmlidXRlcyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMuY3NzICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgYXR0cmlidXRlcy5jc3MpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5zdHlsZWRFbGVtZW50KHR5cGUpIHtcbiAgbGV0IGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICBjb25zdCBlbGVtZW50ID0gLTEgIT09IHR5cGUuaW5kZXhPZihcIjxcIikgPyBwYXJzZUh0bWwodHlwZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBzZXRBdHRycyhlbGVtZW50LCBhdHRyaWJ1dGVzKTtcblxuICBpZiAoYXR0cmlidXRlcy50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXMuaHRtbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBpZiAobnVsbCA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IGxpc3RbaV0ucGFyZW50Tm9kZTtcblxuICAgIGlmIChudWxsICE9PSBwYXJlbnROb2RlKSB7XG4gICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3RbaV0pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KGVsZW1lbnQpIHtcbiAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoZWxlbWVudCkgPyBlbGVtZW50IDogW2VsZW1lbnRdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc0VsZW1lbnQobGlzdFtpXSkpIHtcbiAgICAgIGxpc3RbaV0uaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGVsZW1lbnQsIHJlcGxhY2VtZW50KSB7XG4gIGxldCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gIGlmIChudWxsICE9PSBwYXJlbnROb2RlKSB7XG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIGFkamFjZW50UG9zaXRpb24sIGluc2VydEludG8sIGluc2VydFJlZmVyZW5jZSkge1xuICBpZiAodHlwZW9mIGluc2VydCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlZmVyZW5jZS5pbnNlcnRBZGphY2VudEhUTUwoYWRqYWNlbnRQb3NpdGlvbiwgaW5zZXJ0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5zZXJ0SW50byA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KGluc2VydCkgPyBpbnNlcnQgOiBbaW5zZXJ0XTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpbnNlcnRJbnRvLmluc2VydEJlZm9yZShsaXN0W2ldLCBpbnNlcnRSZWZlcmVuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJiZWZvcmVlbmRcIiwgcmVmZXJlbmNlLCBudWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYWZ0ZXJiZWdpblwiLCByZWZlcmVuY2UsIHJlZmVyZW5jZS5maXJzdEVsZW1lbnRDaGlsZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlKHJlZmVyZW5jZSwgaW5zZXJ0KSB7XG4gIGluc2VydEVsZW1lbnQocmVmZXJlbmNlLCBpbnNlcnQsIFwiYmVmb3JlYmVnaW5cIiwgcmVmZXJlbmNlLnBhcmVudEVsZW1lbnQsIHJlZmVyZW5jZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXIocmVmZXJlbmNlLCBpbnNlcnQpIHtcbiAgaW5zZXJ0RWxlbWVudChyZWZlcmVuY2UsIGluc2VydCwgXCJhZnRlcmVuZFwiLCByZWZlcmVuY2UucGFyZW50RWxlbWVudCwgcmVmZXJlbmNlLm5leHRFbGVtZW50U2libGluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lLCBhZGQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3RbYWRkID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKGNsYXNzTmFtZSk7XG59IiwiaW1wb3J0IFwiLi4vcG9seWZpbGwvZG9tXCI7XG5cbmZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVzKGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICByZXR1cm4gbnVsbCA9PT0gc2VsZWN0b3IgfHwgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbGxTaWJsaW5ncyhlbGVtZW50LCBzZWxlY3RvciwgYWNjZXNzb3IpIHtcbiAgbGV0IGluZGV4YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICBsZXQgc2libGluZyA9IGluZGV4YWJsZUVsZW1lbnRbYWNjZXNzb3JdO1xuICBjb25zdCBsaXN0ID0gW107XG5cbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKSB7XG4gICAgICBsaXN0LnB1c2goc2libGluZyk7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmdbYWNjZXNzb3JdO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIGZldGNoU2luZ2xlU2libGluZyhlbGVtZW50LCBzZWxlY3RvciwgYWNjZXNzb3IpIHtcbiAgbGV0IGluZGV4YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICBsZXQgc2libGluZyA9IGluZGV4YWJsZUVsZW1lbnRbYWNjZXNzb3JdO1xuXG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmdbYWNjZXNzb3JdO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gIGxldCBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRPbmUoc2VsZWN0b3IpIHtcbiAgbGV0IGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobGlzdCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGxpc3QuZmlsdGVyKGUgPT4gZS5tYXRjaGVzKHNlbGVjdG9yKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm90KGxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiAhZS5tYXRjaGVzKHNlbGVjdG9yKSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiAtMSAhPT0gc2VsZWN0b3IuaW5kZXhPZihlKSk7XG4gIH1cblxuICByZXR1cm4gbGlzdC5maWx0ZXIoZSA9PiBlICE9PSBzZWxlY3Rvcik7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGVsZW1lbnRNYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpIHtcbiAgICAgIGxpc3QucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdENoaWxkKHBhcmVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoZWxlbWVudE1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldihlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoU2luZ2xlU2libGluZyhlbGVtZW50LCBzZWxlY3RvciwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHQoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaFNpbmdsZVNpYmxpbmcoZWxlbWVudCwgc2VsZWN0b3IsIFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXZBbGwoZWxlbWVudCkge1xuICBsZXQgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIHJldHVybiBmZXRjaEFsbFNpYmxpbmdzKGVsZW1lbnQsIHNlbGVjdG9yLCBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dEFsbChlbGVtZW50KSB7XG4gIGxldCBzZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgcmV0dXJuIGZldGNoQWxsU2libGluZ3MoZWxlbWVudCwgc2VsZWN0b3IsIFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNpYmxpbmdzKGVsZW1lbnQpIHtcbiAgbGV0IHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBjb25zdCBsaXN0ID0gW107XG4gIGxldCBzaWJsaW5nID0gbnVsbDtcblxuICBpZiAobnVsbCAhPT0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgc2libGluZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgfVxuXG4gIHdoaWxlIChudWxsICE9PSBzaWJsaW5nKSB7XG4gICAgaWYgKHNpYmxpbmcgIT09IGVsZW1lbnQgJiYgZWxlbWVudE1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKSB7XG4gICAgICBsaXN0LnB1c2goc2libGluZyk7XG4gICAgfVxuXG4gICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICBsZXQgcm9vdEVsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgd2hpbGUgKG51bGwgIT09IHBhcmVudCAmJiByb290RWxlbWVudCAhPT0gcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbGRFbGVtZW50KHBhcmVudCwgbm9kZSkge1xuICBsZXQgcG9pbnRlciA9IG5vZGU7XG5cbiAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICBpZiAocG9pbnRlciA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwb2ludGVyID0gcG9pbnRlci5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59XG5leHBvcnQgZnVuY3Rpb24gc3BsaXRTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT09IFwiXCIgPyBbXSA6IHZhbHVlLnRyaW0oKS5zcGxpdCgvICsvKTtcbn0iLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gXCIuL3J1bnRpbWVcIjtcbmltcG9ydCB7IHR5cGVPZiB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UodGFyZ2V0KSB7XG4gIGlmICgwID09PSAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAxKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBpZiAoMSA8IChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDEpKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRhcmdldDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IDAgOiBhcmd1bWVudHMubGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgcmVzdWx0ID0gbWVyZ2UocmVzdWx0LCBpICsgMSA8IDEgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpICsgMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpICsgMV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb25zdCBzb3VyY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gIGNvbnN0IHNvdXJjZVR5cGUgPSB0eXBlT2Yoc291cmNlKTtcbiAgY29uc3QgdGFyZ2V0VHlwZSA9IHR5cGVPZih0YXJnZXQpO1xuXG4gIGlmIChzb3VyY2VUeXBlID09PSB0YXJnZXRUeXBlIHx8IFwibnVsbFwiID09PSBzb3VyY2VUeXBlIHx8IFwibnVsbFwiID09PSB0YXJnZXRUeXBlKSB7XG4gICAgaWYgKFwiYXJyYXlcIiA9PT0gdGFyZ2V0VHlwZSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoXCJvYmplY3RcIiA9PT0gdGFyZ2V0VHlwZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQgPyBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pIDogc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoKSB7XG4gIGxldCB0YXJnZXQgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzb3VyY2UgPSBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBmdW5jdGlvbiBzYWZlUGFyc2VKc29uKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdmFsdWUudHJpbSgpO1xuICAgICAgcmV0dXJuIGNvbnRlbnQgIT09IFwiXCIgPyBKU09OLnBhcnNlKGNvbnRlbnQpIDogbnVsbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IHBhcnNlIEpTT04gY29udGVudDogXCIuY29uY2F0KGUubWVzc2FnZSksIGUpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFbGVtZW50QXNKc29uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHNhZmVQYXJzZUpzb24oKGVsZW1lbnQudGV4dENvbnRlbnQgfHwgXCJcIikucmVwbGFjZSgvJmx0Oy9nLCBcIjxcIikucmVwbGFjZSgvJmd0Oy9nLCBcIj5cIikucmVwbGFjZSgvJmFtcDsvZywgXCImXCIpKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmaW5kIH0gZnJvbSBcIi4uL2RvbS90cmF2ZXJzZVwiO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSBcIi4uL2V4dGVuZFwiO1xuaW1wb3J0IHsgcGFyc2VFbGVtZW50QXNKc29uIH0gZnJvbSBcIi4uL2pzb25cIjtcbmV4cG9ydCBmdW5jdGlvbiBtb3VudChzZWxlY3RvciwgbW91bnRhYmxlLCBvcHRpb25zKSB7XG4gIGRvTW91bnQoZmluZChzZWxlY3RvciksIG1vdW50YWJsZSwgb3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRMYXp5KHNlbGVjdG9yLCBpbXBvcnRlciwgb3B0aW9ucykge1xuICBsZXQgZWxlbWVudHMgPSBmaW5kKHNlbGVjdG9yKTtcblxuICBpZiAoIWVsZW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGltcG9ydGVyKCkudGhlbihtb2R1bGUgPT4gZG9Nb3VudChlbGVtZW50cywgbW9kdWxlLmRlZmF1bHQsIG9wdGlvbnMpLCBlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiTW91bnRpbmcgb2YgY29tcG9uZW50IG9mIHBhdGggJ1wiLmNvbmNhdChzZWxlY3RvciwgXCInIGZhaWxlZDogXCIpLmNvbmNhdChlcnJvci5tZXNzYWdlKSwgZXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gZG9Nb3VudChlbGVtZW50cywgbW91bnRhYmxlLCByYXdPcHRpb25zKSB7XG4gIGxldCBtb3VudGFibGVBbnkgPSBtb3VudGFibGU7XG4gIGxldCBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICB0eXBlOiBcImZ1bmNcIlxuICB9LCByYXdPcHRpb25zIHx8IHt9KTtcbiAgZWxlbWVudHMuZm9yRWFjaChub2RlID0+IHtcbiAgICBpZiAoXCJqc3hcIiA9PT0gb3B0aW9ucy50eXBlKSB7XG4gICAgICBsZXQgb3B0cyA9IG9wdGlvbnM7XG4gICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IHBhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgbW91bnQgb24gY29udGFpbmVyIHdpdGhvdXQgcGFyZW50LlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdHMuaHlkcmF0ZSkge1xuICAgICAgICBwYXJhbXMgPSBleHRlbmQocGFyYW1zLCBwYXJzZUVsZW1lbnRBc0pzb24obm9kZSkgfHwge30pO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KG1vdW50YWJsZSwgcGFyYW1zKSwgcGFyZW50LCBvcHRzLmh5ZHJhdGUgPyBub2RlIDogdW5kZWZpbmVkKTtcbiAgICB9IGVsc2UgaWYgKFwiY2xhc3NcIiA9PT0gb3B0aW9ucy50eXBlKSB7XG4gICAgICBsZXQgc3RhbmRhbG9uZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgY29uc3QgbW91bnRlZCA9IG5ldyBtb3VudGFibGVBbnkobm9kZSwgLi4uKHN0YW5kYWxvbmVPcHRpb25zLnBhcmFtcyB8fCBbXSkpO1xuICAgICAgbW91bnRlZC5pbml0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFuZGFsb25lT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBtb3VudGFibGUobm9kZSwgLi4uKHN0YW5kYWxvbmVPcHRpb25zLnBhcmFtcyB8fCBbXSkpO1xuICAgIH1cbiAgfSk7XG59IiwiaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gIGNvbnN0IGVsZW1lbnRQcm90b3R5cGUgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IGVsZW1lbnRQcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudFByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KHZhbHVlLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBwcm9wZXJ0eSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZih2YWx1ZSkge1xuICBjb25zdCBtYXRjaCA9IC9eXFxbb2JqZWN0ICguKj8pXSQvLmV4ZWMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIHJldHVybiBtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkgOiBcIm9iamVjdFwiO1xufSIsInZhciBuLFxuICAgIGwsXG4gICAgdSxcbiAgICB0LFxuICAgIGksXG4gICAgciA9IHt9LFxuICAgIGYgPSBbXSxcbiAgICBvID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8Xi0tL2k7XG5cbmZ1bmN0aW9uIGUobiwgbCkge1xuICBmb3IgKHZhciB1IGluIGwpIG5bdV0gPSBsW3VdO1xuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBjKG4pIHtcbiAgdmFyIGwgPSBuLnBhcmVudE5vZGU7XG4gIGwgJiYgbC5yZW1vdmVDaGlsZChuKTtcbn1cblxuZnVuY3Rpb24gcyhuLCBsLCB1KSB7XG4gIHZhciB0LFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBmLFxuICAgICAgbyA9IGFyZ3VtZW50cztcbiAgaWYgKGwgPSBlKHt9LCBsKSwgYXJndW1lbnRzLmxlbmd0aCA+IDMpIGZvciAodSA9IFt1XSwgdCA9IDM7IHQgPCBhcmd1bWVudHMubGVuZ3RoOyB0KyspIHUucHVzaChvW3RdKTtcbiAgaWYgKG51bGwgIT0gdSAmJiAobC5jaGlsZHJlbiA9IHUpLCBudWxsICE9IG4gJiYgbnVsbCAhPSBuLmRlZmF1bHRQcm9wcykgZm9yIChpIGluIG4uZGVmYXVsdFByb3BzKSB2b2lkIDAgPT09IGxbaV0gJiYgKGxbaV0gPSBuLmRlZmF1bHRQcm9wc1tpXSk7XG4gIHJldHVybiBmID0gbC5rZXksIG51bGwgIT0gKHIgPSBsLnJlZikgJiYgZGVsZXRlIGwucmVmLCBudWxsICE9IGYgJiYgZGVsZXRlIGwua2V5LCBhKG4sIGwsIGYsIHIpO1xufVxuXG5mdW5jdGlvbiBhKGwsIHUsIHQsIGkpIHtcbiAgdmFyIHIgPSB7XG4gICAgdHlwZTogbCxcbiAgICBwcm9wczogdSxcbiAgICBrZXk6IHQsXG4gICAgcmVmOiBpLFxuICAgIF9fazogbnVsbCxcbiAgICBfX3A6IG51bGwsXG4gICAgX19iOiAwLFxuICAgIF9fZTogbnVsbCxcbiAgICBsOiBudWxsLFxuICAgIF9fYzogbnVsbCxcbiAgICBjb25zdHJ1Y3Rvcjogdm9pZCAwXG4gIH07XG4gIHJldHVybiBuLnZub2RlICYmIG4udm5vZGUociksIHI7XG59XG5cbmZ1bmN0aW9uIGgoKSB7XG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gdihuKSB7XG4gIHJldHVybiBuLmNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBwKG4pIHtcbiAgaWYgKG51bGwgPT0gbiB8fCBcImJvb2xlYW5cIiA9PSB0eXBlb2YgbikgcmV0dXJuIG51bGw7XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBuIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIG4pIHJldHVybiBhKG51bGwsIG4sIG51bGwsIG51bGwpO1xuXG4gIGlmIChudWxsICE9IG4uX19lIHx8IG51bGwgIT0gbi5fX2MpIHtcbiAgICB2YXIgbCA9IGEobi50eXBlLCBuLnByb3BzLCBuLmtleSwgbnVsbCk7XG4gICAgcmV0dXJuIGwuX19lID0gbi5fX2UsIGw7XG4gIH1cblxuICByZXR1cm4gbjtcbn1cblxuZnVuY3Rpb24geShuLCBsKSB7XG4gIHRoaXMucHJvcHMgPSBuLCB0aGlzLmNvbnRleHQgPSBsO1xufVxuXG5mdW5jdGlvbiBkKG4sIGwpIHtcbiAgaWYgKG51bGwgPT0gbCkgcmV0dXJuIG4uX19wID8gZChuLl9fcCwgbi5fX3AuX19rLmluZGV4T2YobikgKyAxKSA6IG51bGw7XG5cbiAgZm9yICh2YXIgdTsgbCA8IG4uX19rLmxlbmd0aDsgbCsrKSBpZiAobnVsbCAhPSAodSA9IG4uX19rW2xdKSAmJiBudWxsICE9IHUuX19lKSByZXR1cm4gdS5fX2U7XG5cbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbi50eXBlID8gZChuKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIG0obikge1xuICB2YXIgbCwgdTtcblxuICBpZiAobnVsbCAhPSAobiA9IG4uX19wKSAmJiBudWxsICE9IG4uX19jKSB7XG4gICAgZm9yIChuLl9fZSA9IG4uX19jLmJhc2UgPSBudWxsLCBsID0gMDsgbCA8IG4uX19rLmxlbmd0aDsgbCsrKSBpZiAobnVsbCAhPSAodSA9IG4uX19rW2xdKSAmJiBudWxsICE9IHUuX19lKSB7XG4gICAgICBuLl9fZSA9IG4uX19jLmJhc2UgPSB1Ll9fZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBtKG4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHcodCkge1xuICAhdC5fX2QgJiYgKHQuX19kID0gITApICYmIDEgPT09IGwucHVzaCh0KSAmJiAobi5kZWJvdW5jZVJlbmRlcmluZyB8fCB1KShnKTtcbn1cblxuZnVuY3Rpb24gZygpIHtcbiAgdmFyIG47XG5cbiAgZm9yIChsLnNvcnQoZnVuY3Rpb24gKG4sIGwpIHtcbiAgICByZXR1cm4gbC5fX3YuX19iIC0gbi5fX3YuX19iO1xuICB9KTsgbiA9IGwucG9wKCk7KSBuLl9fZCAmJiBuLmZvcmNlVXBkYXRlKCExKTtcbn1cblxuZnVuY3Rpb24gayhuLCBsLCB1LCB0LCBpLCBvLCBlLCBzLCBhKSB7XG4gIHZhciBoLFxuICAgICAgdixcbiAgICAgIHksXG4gICAgICBtLFxuICAgICAgdyxcbiAgICAgIGcsXG4gICAgICBrLFxuICAgICAgYixcbiAgICAgIHggPSBsLl9fayB8fCBfKGwucHJvcHMuY2hpbGRyZW4sIGwuX19rID0gW10sIHAsICEwKSxcbiAgICAgIEMgPSB1ICYmIHUuX19rIHx8IGYsXG4gICAgICBQID0gQy5sZW5ndGg7XG5cbiAgZm9yIChzID09IHIgJiYgKHMgPSBudWxsICE9IG8gPyBvWzBdIDogUCA/IGQodSwgMCkgOiBudWxsKSwgdiA9IDA7IHYgPCB4Lmxlbmd0aDsgdisrKSBpZiAobnVsbCAhPSAoaCA9IHhbdl0gPSBwKHhbdl0pKSkge1xuICAgIGlmIChoLl9fcCA9IGwsIGguX19iID0gbC5fX2IgKyAxLCBudWxsID09PSAobSA9IENbdl0pIHx8IG0gJiYgaC5rZXkgPT0gbS5rZXkgJiYgaC50eXBlID09PSBtLnR5cGUpIENbdl0gPSB2b2lkIDA7ZWxzZSBmb3IgKHkgPSAwOyB5IDwgUDsgeSsrKSB7XG4gICAgICBpZiAoKG0gPSBDW3ldKSAmJiBoLmtleSA9PSBtLmtleSAmJiBoLnR5cGUgPT09IG0udHlwZSkge1xuICAgICAgICBDW3ldID0gdm9pZCAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHcgPSBOKG4sIGgsIG0gPSBtIHx8IHIsIHQsIGksIG8sIGUsIG51bGwsIHMsIGEpLCAoeSA9IGgucmVmKSAmJiBtLnJlZiAhPSB5ICYmIChiIHx8IChiID0gW10pKS5wdXNoKHksIGguX19jIHx8IHcsIGgpLCBudWxsICE9IHcpIHtcbiAgICAgIGlmIChudWxsID09IGsgJiYgKGsgPSB3KSwgbnVsbCAhPSBoLmwpIHcgPSBoLmwsIGgubCA9IG51bGw7ZWxzZSBpZiAobyA9PSBtIHx8IHcgIT0gcyB8fCBudWxsID09IHcucGFyZW50Tm9kZSkgbjogaWYgKG51bGwgPT0gcyB8fCBzLnBhcmVudE5vZGUgIT09IG4pIG4uYXBwZW5kQ2hpbGQodyk7ZWxzZSB7XG4gICAgICAgIGZvciAoZyA9IHMsIHkgPSAwOyAoZyA9IGcubmV4dFNpYmxpbmcpICYmIHkgPCBQOyB5ICs9IDIpIGlmIChnID09IHcpIGJyZWFrIG47XG5cbiAgICAgICAgbi5pbnNlcnRCZWZvcmUodywgcyk7XG4gICAgICB9XG4gICAgICBzID0gdy5uZXh0U2libGluZywgXCJmdW5jdGlvblwiID09IHR5cGVvZiBsLnR5cGUgJiYgKGwubCA9IHcpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsLl9fZSA9IGssIG51bGwgIT0gbyAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGwudHlwZSkgZm9yICh2ID0gby5sZW5ndGg7IHYtLTspIG51bGwgIT0gb1t2XSAmJiBjKG9bdl0pO1xuXG4gIGZvciAodiA9IFA7IHYtLTspIG51bGwgIT0gQ1t2XSAmJiB6KENbdl0sIENbdl0pO1xuXG4gIGlmIChiKSBmb3IgKHYgPSAwOyB2IDwgYi5sZW5ndGg7IHYrKykgaihiW3ZdLCBiWysrdl0sIGJbKyt2XSk7XG59XG5cbmZ1bmN0aW9uIF8obiwgbCwgdSwgdCkge1xuICBpZiAobnVsbCA9PSBsICYmIChsID0gW10pLCBudWxsID09IG4gfHwgXCJib29sZWFuXCIgPT0gdHlwZW9mIG4pIHQgJiYgbC5wdXNoKG51bGwpO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkobikpIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKykgXyhuW2ldLCBsLCB1LCB0KTtlbHNlIGwucHVzaCh1ID8gdShuKSA6IG4pO1xuICByZXR1cm4gbDtcbn1cblxuZnVuY3Rpb24gYihuLCBsLCB1LCB0LCBpKSB7XG4gIHZhciByO1xuXG4gIGZvciAociBpbiB1KSByIGluIGwgfHwgQyhuLCByLCBudWxsLCB1W3JdLCB0KTtcblxuICBmb3IgKHIgaW4gbCkgaSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGxbcl0gfHwgXCJ2YWx1ZVwiID09PSByIHx8IFwiY2hlY2tlZFwiID09PSByIHx8IHVbcl0gPT09IGxbcl0gfHwgQyhuLCByLCBsW3JdLCB1W3JdLCB0KTtcbn1cblxuZnVuY3Rpb24geChuLCBsLCB1KSB7XG4gIFwiLVwiID09PSBsWzBdID8gbi5zZXRQcm9wZXJ0eShsLCB1KSA6IG5bbF0gPSBcIm51bWJlclwiID09IHR5cGVvZiB1ICYmICExID09PSBvLnRlc3QobCkgPyB1ICsgXCJweFwiIDogdTtcbn1cblxuZnVuY3Rpb24gQyhuLCBsLCB1LCB0LCBpKSB7XG4gIHZhciByLCBmLCBvLCBlLCBjO1xuICBpZiAoXCJrZXlcIiA9PT0gKGwgPSBpID8gXCJjbGFzc05hbWVcIiA9PT0gbCA/IFwiY2xhc3NcIiA6IGwgOiBcImNsYXNzXCIgPT09IGwgPyBcImNsYXNzTmFtZVwiIDogbCkgfHwgXCJjaGlsZHJlblwiID09PSBsKSA7ZWxzZSBpZiAoXCJzdHlsZVwiID09PSBsKSB7XG4gICAgaWYgKHIgPSBuLnN0eWxlLCBcInN0cmluZ1wiID09IHR5cGVvZiB1KSByLmNzc1RleHQgPSB1O2Vsc2Uge1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgKHIuY3NzVGV4dCA9IFwiXCIsIHQgPSBudWxsKSwgdCkgZm9yIChmIGluIHQpIHUgJiYgZiBpbiB1IHx8IHgociwgZiwgXCJcIik7XG4gICAgICBpZiAodSkgZm9yIChvIGluIHUpIHQgJiYgdVtvXSA9PT0gdFtvXSB8fCB4KHIsIG8sIHVbb10pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcIm9cIiA9PT0gbFswXSAmJiBcIm5cIiA9PT0gbFsxXSkgZSA9IGwgIT09IChsID0gbC5yZXBsYWNlKC9DYXB0dXJlJC8sIFwiXCIpKSwgYyA9IGwudG9Mb3dlckNhc2UoKSwgbCA9IChjIGluIG4gPyBjIDogbCkuc2xpY2UoMiksIHUgPyAodCB8fCBuLmFkZEV2ZW50TGlzdGVuZXIobCwgUCwgZSksIChuLnUgfHwgKG4udSA9IHt9KSlbbF0gPSB1KSA6IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLCBQLCBlKTtlbHNlIGlmIChcImxpc3RcIiAhPT0gbCAmJiBcInRhZ05hbWVcIiAhPT0gbCAmJiAhaSAmJiBsIGluIG4pIHtcbiAgICBpZiAobi5sZW5ndGggJiYgXCJ2YWx1ZVwiID09IGwpIGZvciAobCA9IG4ubGVuZ3RoOyBsLS07KSBuLm9wdGlvbnNbbF0uc2VsZWN0ZWQgPSBuLm9wdGlvbnNbbF0udmFsdWUgPT0gdTtlbHNlIG5bbF0gPSBudWxsID09IHUgPyBcIlwiIDogdTtcbiAgfSBlbHNlIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdSAmJiBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIgIT09IGwgJiYgKGwgIT09IChsID0gbC5yZXBsYWNlKC9eeGxpbms6Py8sIFwiXCIpKSA/IG51bGwgPT0gdSB8fCAhMSA9PT0gdSA/IG4ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGwudG9Mb3dlckNhc2UoKSkgOiBuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBsLnRvTG93ZXJDYXNlKCksIHUpIDogbnVsbCA9PSB1IHx8ICExID09PSB1ID8gbi5yZW1vdmVBdHRyaWJ1dGUobCkgOiBuLnNldEF0dHJpYnV0ZShsLCB1KSk7XG59XG5cbmZ1bmN0aW9uIFAobCkge1xuICByZXR1cm4gdGhpcy51W2wudHlwZV0obi5ldmVudCA/IG4uZXZlbnQobCkgOiBsKTtcbn1cblxuZnVuY3Rpb24gTihsLCB1LCB0LCBpLCByLCBmLCBvLCBjLCBzLCBhKSB7XG4gIHZhciBoLFxuICAgICAgZCxcbiAgICAgIG0sXG4gICAgICB3LFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICB4LFxuICAgICAgQyxcbiAgICAgIFAsXG4gICAgICBOLFxuICAgICAgVCA9IHUudHlwZTtcbiAgaWYgKHZvaWQgMCAhPT0gdS5jb25zdHJ1Y3RvcikgcmV0dXJuIG51bGw7XG4gIChoID0gbi5fX2IpICYmIGgodSk7XG5cbiAgdHJ5IHtcbiAgICBuOiBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBUKSB7XG4gICAgICBpZiAoQyA9IHUucHJvcHMsIFAgPSAoaCA9IFQuY29udGV4dFR5cGUpICYmIGlbaC5fX2NdLCBOID0gaCA/IFAgPyBQLnByb3BzLnZhbHVlIDogaC5fX3AgOiBpLCB0Ll9fYyA/IHggPSAoZCA9IHUuX19jID0gdC5fX2MpLl9fcCA9IGQuX19FIDogKFQucHJvdG90eXBlICYmIFQucHJvdG90eXBlLnJlbmRlciA/IHUuX19jID0gZCA9IG5ldyBUKEMsIE4pIDogKHUuX19jID0gZCA9IG5ldyB5KEMsIE4pLCBkLmNvbnN0cnVjdG9yID0gVCwgZC5yZW5kZXIgPSBBKSwgUCAmJiBQLnN1YihkKSwgZC5wcm9wcyA9IEMsIGQuc3RhdGUgfHwgKGQuc3RhdGUgPSB7fSksIGQuY29udGV4dCA9IE4sIGQuX19uID0gaSwgbSA9IGQuX19kID0gITAsIGQuX19oID0gW10pLCBudWxsID09IGQuX19zICYmIChkLl9fcyA9IGQuc3RhdGUpLCBudWxsICE9IFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICYmIGUoZC5fX3MgPT0gZC5zdGF0ZSA/IGQuX19zID0gZSh7fSwgZC5fX3MpIDogZC5fX3MsIFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKEMsIGQuX19zKSksIG0pIG51bGwgPT0gVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJiYgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxNb3VudCAmJiBkLmNvbXBvbmVudFdpbGxNb3VudCgpLCBudWxsICE9IGQuY29tcG9uZW50RGlkTW91bnQgJiYgby5wdXNoKGQpO2Vsc2Uge1xuICAgICAgICBpZiAobnVsbCA9PSBULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAmJiBudWxsID09IGMgJiYgbnVsbCAhPSBkLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgJiYgZC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKEMsIE4pLCAhYyAmJiBudWxsICE9IGQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICYmICExID09PSBkLnNob3VsZENvbXBvbmVudFVwZGF0ZShDLCBkLl9fcywgTikpIHtcbiAgICAgICAgICBkLnByb3BzID0gQywgZC5zdGF0ZSA9IGQuX19zLCBkLl9fZCA9ICExLCBkLl9fdiA9IHUsIHUuX19lID0gdC5fX2UsIHUuX19rID0gdC5fX2s7XG4gICAgICAgICAgYnJlYWsgbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG51bGwgIT0gZC5jb21wb25lbnRXaWxsVXBkYXRlICYmIGQuY29tcG9uZW50V2lsbFVwZGF0ZShDLCBkLl9fcywgTik7XG4gICAgICB9XG5cbiAgICAgIGZvciAodyA9IGQucHJvcHMsIGcgPSBkLnN0YXRlLCBkLmNvbnRleHQgPSBOLCBkLnByb3BzID0gQywgZC5zdGF0ZSA9IGQuX19zLCAoaCA9IG4uX19yKSAmJiBoKHUpLCBkLl9fZCA9ICExLCBkLl9fdiA9IHUsIGQuX19QID0gbCwgXyhudWxsICE9IChoID0gZC5yZW5kZXIoZC5wcm9wcywgZC5zdGF0ZSwgZC5jb250ZXh0KSkgJiYgaC50eXBlID09IHYgJiYgbnVsbCA9PSBoLmtleSA/IGgucHJvcHMuY2hpbGRyZW4gOiBoLCB1Ll9fayA9IFtdLCBwLCAhMCksIG51bGwgIT0gZC5nZXRDaGlsZENvbnRleHQgJiYgKGkgPSBlKGUoe30sIGkpLCBkLmdldENoaWxkQ29udGV4dCgpKSksIG0gfHwgbnVsbCA9PSBkLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlIHx8IChiID0gZC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh3LCBnKSksIGsobCwgdSwgdCwgaSwgciwgZiwgbywgcywgYSksIGQuYmFzZSA9IHUuX19lOyBoID0gZC5fX2gucG9wKCk7KSBoLmNhbGwoZCk7XG5cbiAgICAgIG0gfHwgbnVsbCA9PSB3IHx8IG51bGwgPT0gZC5jb21wb25lbnREaWRVcGRhdGUgfHwgZC5jb21wb25lbnREaWRVcGRhdGUodywgZywgYiksIHggJiYgKGQuX19FID0gZC5fX3AgPSBudWxsKTtcbiAgICB9IGVsc2UgdS5fX2UgPSAkKHQuX19lLCB1LCB0LCBpLCByLCBmLCBvLCBhKTtcblxuICAgIChoID0gbi5kaWZmZWQpICYmIGgodSk7XG4gIH0gY2F0Y2ggKGwpIHtcbiAgICBuLl9fZShsLCB1LCB0KTtcbiAgfVxuXG4gIHJldHVybiB1Ll9fZTtcbn1cblxuZnVuY3Rpb24gVChsLCB1KSB7XG4gIGZvciAodmFyIHQ7IHQgPSBsLnBvcCgpOykgdHJ5IHtcbiAgICB0LmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH0gY2F0Y2ggKGwpIHtcbiAgICBuLl9fZShsLCB0Ll9fdik7XG4gIH1cblxuICBuLl9fYyAmJiBuLl9fYyh1KTtcbn1cblxuZnVuY3Rpb24gJChuLCBsLCB1LCB0LCBpLCBvLCBlLCBjKSB7XG4gIHZhciBzLFxuICAgICAgYSxcbiAgICAgIGgsXG4gICAgICB2LFxuICAgICAgcCA9IHUucHJvcHMsXG4gICAgICB5ID0gbC5wcm9wcztcbiAgaWYgKGkgPSBcInN2Z1wiID09PSBsLnR5cGUgfHwgaSwgbnVsbCA9PSBuICYmIG51bGwgIT0gbykgZm9yIChzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIGlmIChudWxsICE9IChhID0gb1tzXSkgJiYgKG51bGwgPT09IGwudHlwZSA/IDMgPT09IGEubm9kZVR5cGUgOiBhLmxvY2FsTmFtZSA9PT0gbC50eXBlKSkge1xuICAgIG4gPSBhLCBvW3NdID0gbnVsbDtcbiAgICBicmVhaztcbiAgfVxuXG4gIGlmIChudWxsID09IG4pIHtcbiAgICBpZiAobnVsbCA9PT0gbC50eXBlKSByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoeSk7XG4gICAgbiA9IGkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBsLnR5cGUpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUpLCBvID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBudWxsID09PSBsLnR5cGUgPyBwICE9PSB5ICYmIChuLmRhdGEgPSB5KSA6IGwgIT09IHUgJiYgKG51bGwgIT0gbyAmJiAobyA9IGYuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSwgaCA9IChwID0gdS5wcm9wcyB8fCByKS5kYW5nZXJvdXNseVNldElubmVySFRNTCwgdiA9IHkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGMgfHwgKHYgfHwgaCkgJiYgKHYgJiYgaCAmJiB2Ll9faHRtbCA9PSBoLl9faHRtbCB8fCAobi5pbm5lckhUTUwgPSB2ICYmIHYuX19odG1sIHx8IFwiXCIpKSwgYihuLCB5LCBwLCBpLCBjKSwgdiB8fCBrKG4sIGwsIHUsIHQsIFwiZm9yZWlnbk9iamVjdFwiICE9PSBsLnR5cGUgJiYgaSwgbywgZSwgciwgYyksIGMgfHwgKFwidmFsdWVcIiBpbiB5ICYmIHZvaWQgMCAhPT0geS52YWx1ZSAmJiB5LnZhbHVlICE9PSBuLnZhbHVlICYmIChuLnZhbHVlID0gbnVsbCA9PSB5LnZhbHVlID8gXCJcIiA6IHkudmFsdWUpLCBcImNoZWNrZWRcIiBpbiB5ICYmIHZvaWQgMCAhPT0geS5jaGVja2VkICYmIHkuY2hlY2tlZCAhPT0gbi5jaGVja2VkICYmIChuLmNoZWNrZWQgPSB5LmNoZWNrZWQpKSksIG47XG59XG5cbmZ1bmN0aW9uIGoobCwgdSwgdCkge1xuICB0cnkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbCA/IGwodSkgOiBsLmN1cnJlbnQgPSB1O1xuICB9IGNhdGNoIChsKSB7XG4gICAgbi5fX2UobCwgdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24geihsLCB1LCB0KSB7XG4gIHZhciBpLCByLCBmO1xuXG4gIGlmIChuLnVubW91bnQgJiYgbi51bm1vdW50KGwpLCAoaSA9IGwucmVmKSAmJiBqKGksIG51bGwsIHUpLCB0IHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbC50eXBlIHx8ICh0ID0gbnVsbCAhPSAociA9IGwuX19lKSksIGwuX19lID0gbC5sID0gbnVsbCwgbnVsbCAhPSAoaSA9IGwuX19jKSkge1xuICAgIGlmIChpLmNvbXBvbmVudFdpbGxVbm1vdW50KSB0cnkge1xuICAgICAgaS5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgIH0gY2F0Y2ggKGwpIHtcbiAgICAgIG4uX19lKGwsIHUpO1xuICAgIH1cbiAgICBpLmJhc2UgPSBpLl9fUCA9IG51bGw7XG4gIH1cblxuICBpZiAoaSA9IGwuX19rKSBmb3IgKGYgPSAwOyBmIDwgaS5sZW5ndGg7IGYrKykgaVtmXSAmJiB6KGlbZl0sIHUsIHQpO1xuICBudWxsICE9IHIgJiYgYyhyKTtcbn1cblxuZnVuY3Rpb24gQShuLCBsLCB1KSB7XG4gIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sIHUpO1xufVxuXG5mdW5jdGlvbiBEKGwsIHUsIGkpIHtcbiAgdmFyIG8sIGUsIGM7XG4gIG4uX19wICYmIG4uX19wKGwsIHUpLCBlID0gKG8gPSBpID09PSB0KSA/IG51bGwgOiBpICYmIGkuX19rIHx8IHUuX19rLCBsID0gcyh2LCBudWxsLCBbbF0pLCBjID0gW10sIE4odSwgbyA/IHUuX19rID0gbCA6IChpIHx8IHUpLl9fayA9IGwsIGUgfHwgciwgciwgdm9pZCAwICE9PSB1Lm93bmVyU1ZHRWxlbWVudCwgaSAmJiAhbyA/IFtpXSA6IGUgPyBudWxsIDogZi5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksIGMsICExLCBpIHx8IHIsIG8pLCBUKGMsIGwpO1xufVxuXG5mdW5jdGlvbiBIKG4sIGwpIHtcbiAgRChuLCBsLCB0KTtcbn1cblxuZnVuY3Rpb24gSShuLCBsKSB7XG4gIHJldHVybiBsID0gZShlKHt9LCBuLnByb3BzKSwgbCksIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIChsLmNoaWxkcmVuID0gZi5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikpLCBhKG4udHlwZSwgbCwgbC5rZXkgfHwgbi5rZXksIGwucmVmIHx8IG4ucmVmKTtcbn1cblxuZnVuY3Rpb24gTChuKSB7XG4gIHZhciBsID0ge30sXG4gICAgICB1ID0ge1xuICAgIF9fYzogXCJfX2NDXCIgKyBpKyssXG4gICAgX19wOiBuLFxuICAgIENvbnN1bWVyOiBmdW5jdGlvbiBDb25zdW1lcihuLCBsKSB7XG4gICAgICByZXR1cm4gbi5jaGlsZHJlbihsKTtcbiAgICB9LFxuICAgIFByb3ZpZGVyOiBmdW5jdGlvbiBQcm92aWRlcihuKSB7XG4gICAgICB2YXIgdCxcbiAgICAgICAgICBpID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLmdldENoaWxkQ29udGV4dCB8fCAodCA9IFtdLCB0aGlzLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxbdS5fX2NdID0gaSwgbDtcbiAgICAgIH0sIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdC5zb21lKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgbC5fX1AgJiYgKGwuY29udGV4dCA9IG4udmFsdWUsIHcobCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuc3ViID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdC5wdXNoKG4pO1xuICAgICAgICB2YXIgbCA9IG4uY29tcG9uZW50V2lsbFVubW91bnQ7XG5cbiAgICAgICAgbi5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0LnNwbGljZSh0LmluZGV4T2YobiksIDEpLCBsICYmIGwuY2FsbChuKTtcbiAgICAgICAgfTtcbiAgICAgIH0pLCBuLmNoaWxkcmVuO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGUgPSB1LCB1O1xufVxuXG5uID0ge30sIHkucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKG4sIGwpIHtcbiAgdmFyIHUgPSB0aGlzLl9fcyAhPT0gdGhpcy5zdGF0ZSAmJiB0aGlzLl9fcyB8fCAodGhpcy5fX3MgPSBlKHt9LCB0aGlzLnN0YXRlKSk7XG4gIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIG4gfHwgKG4gPSBuKHUsIHRoaXMucHJvcHMpKSkgJiYgZSh1LCBuKSwgbnVsbCAhPSBuICYmIHRoaXMuX192ICYmIChsICYmIHRoaXMuX19oLnB1c2gobCksIHcodGhpcykpO1xufSwgeS5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAobikge1xuICB2YXIgbCxcbiAgICAgIHUsXG4gICAgICB0LFxuICAgICAgaSA9IHRoaXMuX192LFxuICAgICAgciA9IHRoaXMuX192Ll9fZSxcbiAgICAgIGYgPSB0aGlzLl9fUDtcbiAgZiAmJiAobCA9ICExICE9PSBuLCB1ID0gW10sIHQgPSBOKGYsIGksIGUoe30sIGkpLCB0aGlzLl9fbiwgdm9pZCAwICE9PSBmLm93bmVyU1ZHRWxlbWVudCwgbnVsbCwgdSwgbCwgbnVsbCA9PSByID8gZChpKSA6IHIpLCBUKHUsIGkpLCB0ICE9IHIgJiYgbShpKSksIG4gJiYgbigpO1xufSwgeS5wcm90b3R5cGUucmVuZGVyID0gdiwgbCA9IFtdLCB1ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBQcm9taXNlID8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKSA6IHNldFRpbWVvdXQsIG4uX19lID0gZnVuY3Rpb24gKG4sIGwsIHUpIHtcbiAgZm9yICh2YXIgdDsgbCA9IGwuX19wOykgaWYgKCh0ID0gbC5fX2MpICYmICF0Ll9fcCkgdHJ5IHtcbiAgICBpZiAodC5jb25zdHJ1Y3RvciAmJiBudWxsICE9IHQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKSB0LnNldFN0YXRlKHQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKTtlbHNlIHtcbiAgICAgIGlmIChudWxsID09IHQuY29tcG9uZW50RGlkQ2F0Y2gpIGNvbnRpbnVlO1xuICAgICAgdC5jb21wb25lbnREaWRDYXRjaChuKTtcbiAgICB9XG4gICAgcmV0dXJuIHcodC5fX0UgPSB0KTtcbiAgfSBjYXRjaCAobCkge1xuICAgIG4gPSBsO1xuICB9XG5cbiAgdGhyb3cgbjtcbn0sIHQgPSByLCBpID0gMDtcbmV4cG9ydCB7IEQgYXMgcmVuZGVyLCBIIGFzIGh5ZHJhdGUsIHMgYXMgY3JlYXRlRWxlbWVudCwgcyBhcyBoLCB2IGFzIEZyYWdtZW50LCBoIGFzIGNyZWF0ZVJlZiwgeSBhcyBDb21wb25lbnQsIEkgYXMgY2xvbmVFbGVtZW50LCBMIGFzIGNyZWF0ZUNvbnRleHQsIF8gYXMgdG9DaGlsZEFycmF5LCB6IGFzIF91bm1vdW50LCBuIGFzIG9wdGlvbnMgfTsiLCJpbXBvcnQgeyBvcHRpb25zIGFzIG4gfSBmcm9tIFwicHJlYWN0XCI7XG52YXIgdCxcbiAgICByLFxuICAgIHUgPSBbXSxcbiAgICBpID0gbi5fX3I7XG5cbm4uX19yID0gZnVuY3Rpb24gKG4pIHtcbiAgaSAmJiBpKG4pLCB0ID0gMCwgKHIgPSBuLl9fYykuX19IICYmIChyLl9fSC50ID0gdyhyLl9fSC50KSk7XG59O1xuXG52YXIgbyA9IG4uZGlmZmVkO1xuXG5uLmRpZmZlZCA9IGZ1bmN0aW9uIChuKSB7XG4gIG8gJiYgbyhuKTtcbiAgdmFyIHQgPSBuLl9fYztcblxuICBpZiAodCkge1xuICAgIHZhciByID0gdC5fX0g7XG4gICAgciAmJiAoci51ID0gdyhyLnUpKTtcbiAgfVxufTtcblxudmFyIGYgPSBuLnVubW91bnQ7XG5cbmZ1bmN0aW9uIGModCkge1xuICBuLl9faCAmJiBuLl9faChyKTtcbiAgdmFyIHUgPSByLl9fSCB8fCAoci5fX0ggPSB7XG4gICAgaTogW10sXG4gICAgdDogW10sXG4gICAgdTogW11cbiAgfSk7XG4gIHJldHVybiB0ID49IHUuaS5sZW5ndGggJiYgdS5pLnB1c2goe30pLCB1LmlbdF07XG59XG5cbmZ1bmN0aW9uIGUobikge1xuICByZXR1cm4gYShxLCBuKTtcbn1cblxuZnVuY3Rpb24gYShuLCB1LCBpKSB7XG4gIHZhciBvID0gYyh0KyspO1xuICByZXR1cm4gby5fX2MgfHwgKG8uX19jID0gciwgby5vID0gW2kgPyBpKHUpIDogcShudWxsLCB1KSwgZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgciA9IG4oby5vWzBdLCB0KTtcbiAgICBvLm9bMF0gIT09IHIgJiYgKG8ub1swXSA9IHIsIG8uX19jLnNldFN0YXRlKHt9KSk7XG4gIH1dKSwgby5vO1xufVxuXG5mdW5jdGlvbiB2KG4sIHUpIHtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIEYoaS52LCB1KSAmJiAoaS5vID0gbiwgaS52ID0gdSwgci5fX0gudC5wdXNoKGkpLCBfKHIpKTtcbn1cblxuZnVuY3Rpb24gbShuLCB1KSB7XG4gIHZhciBpID0gYyh0KyspO1xuICBGKGkudiwgdSkgJiYgKGkubyA9IG4sIGkudiA9IHUsIHIuX19ILnUucHVzaChpKSk7XG59XG5cbmZ1bmN0aW9uIHAobikge1xuICByZXR1cm4gcyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQ6IG5cbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGwobiwgciwgdSkge1xuICB2YXIgaSA9IGModCsrKTtcbiAgRihpLnYsIHUpICYmIChpLnYgPSB1LCBuICYmIChuLmN1cnJlbnQgPSByKCkpKTtcbn1cblxuZnVuY3Rpb24gcyhuLCByKSB7XG4gIHZhciB1ID0gYyh0KyspO1xuICByZXR1cm4gRih1LnYsIHIpID8gKHUudiA9IHIsIHUubSA9IG4sIHUubyA9IG4oKSkgOiB1Lm87XG59XG5cbmZ1bmN0aW9uIGQobiwgdCkge1xuICByZXR1cm4gcyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG47XG4gIH0sIHQpO1xufVxuXG5mdW5jdGlvbiB5KG4pIHtcbiAgdmFyIHUgPSByLmNvbnRleHRbbi5fX2NdO1xuICBpZiAoIXUpIHJldHVybiBuLl9fcDtcbiAgdmFyIGkgPSBjKHQrKyk7XG4gIHJldHVybiBudWxsID09IGkubyAmJiAoaS5vID0gITAsIHUuc3ViKHIpKSwgdS5wcm9wcy52YWx1ZTtcbn1cblxuZnVuY3Rpb24gVCh0LCByKSB7XG4gIG4udXNlRGVidWdWYWx1ZSAmJiBuLnVzZURlYnVnVmFsdWUociA/IHIodCkgOiB0KTtcbn1cblxubi51bm1vdW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgZiAmJiBmKG4pO1xuICB2YXIgdCA9IG4uX19jO1xuXG4gIGlmICh0KSB7XG4gICAgdmFyIHIgPSB0Ll9fSDtcbiAgICByICYmIHIuaS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbi5wICYmIG4ucCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgXyA9IGZ1bmN0aW9uIF8oKSB7fTtcblxuZnVuY3Rpb24gZygpIHtcbiAgdS5zb21lKGZ1bmN0aW9uIChuKSB7XG4gICAgbi5sID0gITEsIG4uX19QICYmIChuLl9fSC50ID0gdyhuLl9fSC50KSk7XG4gIH0pLCB1ID0gW107XG59XG5cbmZ1bmN0aW9uIHcobikge1xuICByZXR1cm4gbi5mb3JFYWNoKEEpLCBuLmZvckVhY2goRSksIFtdO1xufVxuXG5mdW5jdGlvbiBBKG4pIHtcbiAgbi5wICYmIG4ucCgpO1xufVxuXG5mdW5jdGlvbiBFKG4pIHtcbiAgdmFyIHQgPSBuLm8oKTtcbiAgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIChuLnAgPSB0KTtcbn1cblxuZnVuY3Rpb24gRihuLCB0KSB7XG4gIHJldHVybiAhbiB8fCB0LnNvbWUoZnVuY3Rpb24gKHQsIHIpIHtcbiAgICByZXR1cm4gdCAhPT0gbltyXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHEobiwgdCkge1xuICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ID8gdChuKSA6IHQ7XG59XG5cblwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiAoXyA9IGZ1bmN0aW9uIF8odCkge1xuICAhdC5sICYmICh0LmwgPSAhMCkgJiYgMSA9PT0gdS5wdXNoKHQpICYmIChuLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAobikge1xuICAgIHZhciB0ID0gZnVuY3Rpb24gdCgpIHtcbiAgICAgIGNsZWFyVGltZW91dChyKSwgY2FuY2VsQW5pbWF0aW9uRnJhbWUodSksIHNldFRpbWVvdXQobik7XG4gICAgfSxcbiAgICAgICAgciA9IHNldFRpbWVvdXQodCwgMTAwKSxcbiAgICAgICAgdSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0KTtcbiAgfSkoZyk7XG59KTtcbmV4cG9ydCB7IGUgYXMgdXNlU3RhdGUsIGEgYXMgdXNlUmVkdWNlciwgdiBhcyB1c2VFZmZlY3QsIG0gYXMgdXNlTGF5b3V0RWZmZWN0LCBwIGFzIHVzZVJlZiwgbCBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLCBzIGFzIHVzZU1lbW8sIGQgYXMgdXNlQ2FsbGJhY2ssIHkgYXMgdXNlQ29udGV4dCwgVCBhcyB1c2VEZWJ1Z1ZhbHVlIH07IiwidmFyIGNoYXJhY3Rlck1hcCA9IHtcbiAgXCLDgFwiOiBcIkFcIixcbiAgXCLDgVwiOiBcIkFcIixcbiAgXCLDglwiOiBcIkFcIixcbiAgXCLDg1wiOiBcIkFcIixcbiAgXCLDhFwiOiBcIkFcIixcbiAgXCLDhVwiOiBcIkFcIixcbiAgXCLhuqRcIjogXCJBXCIsXG4gIFwi4bquXCI6IFwiQVwiLFxuICBcIuG6slwiOiBcIkFcIixcbiAgXCLhurRcIjogXCJBXCIsXG4gIFwi4bq2XCI6IFwiQVwiLFxuICBcIsOGXCI6IFwiQUVcIixcbiAgXCLhuqZcIjogXCJBXCIsXG4gIFwi4bqwXCI6IFwiQVwiLFxuICBcIsiCXCI6IFwiQVwiLFxuICBcIsOHXCI6IFwiQ1wiLFxuICBcIuG4iFwiOiBcIkNcIixcbiAgXCLDiFwiOiBcIkVcIixcbiAgXCLDiVwiOiBcIkVcIixcbiAgXCLDilwiOiBcIkVcIixcbiAgXCLDi1wiOiBcIkVcIixcbiAgXCLhur5cIjogXCJFXCIsXG4gIFwi4biWXCI6IFwiRVwiLFxuICBcIuG7gFwiOiBcIkVcIixcbiAgXCLhuJRcIjogXCJFXCIsXG4gIFwi4bicXCI6IFwiRVwiLFxuICBcIsiGXCI6IFwiRVwiLFxuICBcIsOMXCI6IFwiSVwiLFxuICBcIsONXCI6IFwiSVwiLFxuICBcIsOOXCI6IFwiSVwiLFxuICBcIsOPXCI6IFwiSVwiLFxuICBcIuG4rlwiOiBcIklcIixcbiAgXCLIilwiOiBcIklcIixcbiAgXCLDkFwiOiBcIkRcIixcbiAgXCLDkVwiOiBcIk5cIixcbiAgXCLDklwiOiBcIk9cIixcbiAgXCLDk1wiOiBcIk9cIixcbiAgXCLDlFwiOiBcIk9cIixcbiAgXCLDlVwiOiBcIk9cIixcbiAgXCLDllwiOiBcIk9cIixcbiAgXCLDmFwiOiBcIk9cIixcbiAgXCLhu5BcIjogXCJPXCIsXG4gIFwi4bmMXCI6IFwiT1wiLFxuICBcIuG5klwiOiBcIk9cIixcbiAgXCLIjlwiOiBcIk9cIixcbiAgXCLDmVwiOiBcIlVcIixcbiAgXCLDmlwiOiBcIlVcIixcbiAgXCLDm1wiOiBcIlVcIixcbiAgXCLDnFwiOiBcIlVcIixcbiAgXCLDnVwiOiBcIllcIixcbiAgXCLDoFwiOiBcImFcIixcbiAgXCLDoVwiOiBcImFcIixcbiAgXCLDolwiOiBcImFcIixcbiAgXCLDo1wiOiBcImFcIixcbiAgXCLDpFwiOiBcImFcIixcbiAgXCLDpVwiOiBcImFcIixcbiAgXCLhuqVcIjogXCJhXCIsXG4gIFwi4bqvXCI6IFwiYVwiLFxuICBcIuG6s1wiOiBcImFcIixcbiAgXCLhurVcIjogXCJhXCIsXG4gIFwi4bq3XCI6IFwiYVwiLFxuICBcIsOmXCI6IFwiYWVcIixcbiAgXCLhuqdcIjogXCJhXCIsXG4gIFwi4bqxXCI6IFwiYVwiLFxuICBcIsiDXCI6IFwiYVwiLFxuICBcIsOnXCI6IFwiY1wiLFxuICBcIuG4iVwiOiBcImNcIixcbiAgXCLDqFwiOiBcImVcIixcbiAgXCLDqVwiOiBcImVcIixcbiAgXCLDqlwiOiBcImVcIixcbiAgXCLDq1wiOiBcImVcIixcbiAgXCLhur9cIjogXCJlXCIsXG4gIFwi4biXXCI6IFwiZVwiLFxuICBcIuG7gVwiOiBcImVcIixcbiAgXCLhuJVcIjogXCJlXCIsXG4gIFwi4bidXCI6IFwiZVwiLFxuICBcIsiHXCI6IFwiZVwiLFxuICBcIsOsXCI6IFwiaVwiLFxuICBcIsOtXCI6IFwiaVwiLFxuICBcIsOuXCI6IFwiaVwiLFxuICBcIsOvXCI6IFwiaVwiLFxuICBcIuG4r1wiOiBcImlcIixcbiAgXCLIi1wiOiBcImlcIixcbiAgXCLDsFwiOiBcImRcIixcbiAgXCLDsVwiOiBcIm5cIixcbiAgXCLDslwiOiBcIm9cIixcbiAgXCLDs1wiOiBcIm9cIixcbiAgXCLDtFwiOiBcIm9cIixcbiAgXCLDtVwiOiBcIm9cIixcbiAgXCLDtlwiOiBcIm9cIixcbiAgXCLDuFwiOiBcIm9cIixcbiAgXCLhu5FcIjogXCJvXCIsXG4gIFwi4bmNXCI6IFwib1wiLFxuICBcIuG5k1wiOiBcIm9cIixcbiAgXCLIj1wiOiBcIm9cIixcbiAgXCLDuVwiOiBcInVcIixcbiAgXCLDulwiOiBcInVcIixcbiAgXCLDu1wiOiBcInVcIixcbiAgXCLDvFwiOiBcInVcIixcbiAgXCLDvVwiOiBcInlcIixcbiAgXCLDv1wiOiBcInlcIixcbiAgXCLEgFwiOiBcIkFcIixcbiAgXCLEgVwiOiBcImFcIixcbiAgXCLEglwiOiBcIkFcIixcbiAgXCLEg1wiOiBcImFcIixcbiAgXCLEhFwiOiBcIkFcIixcbiAgXCLEhVwiOiBcImFcIixcbiAgXCLEhlwiOiBcIkNcIixcbiAgXCLEh1wiOiBcImNcIixcbiAgXCLEiFwiOiBcIkNcIixcbiAgXCLEiVwiOiBcImNcIixcbiAgXCLEilwiOiBcIkNcIixcbiAgXCLEi1wiOiBcImNcIixcbiAgXCLEjFwiOiBcIkNcIixcbiAgXCLEjVwiOiBcImNcIixcbiAgXCJDzIZcIjogXCJDXCIsXG4gIFwiY8yGXCI6IFwiY1wiLFxuICBcIsSOXCI6IFwiRFwiLFxuICBcIsSPXCI6IFwiZFwiLFxuICBcIsSQXCI6IFwiRFwiLFxuICBcIsSRXCI6IFwiZFwiLFxuICBcIsSSXCI6IFwiRVwiLFxuICBcIsSTXCI6IFwiZVwiLFxuICBcIsSUXCI6IFwiRVwiLFxuICBcIsSVXCI6IFwiZVwiLFxuICBcIsSWXCI6IFwiRVwiLFxuICBcIsSXXCI6IFwiZVwiLFxuICBcIsSYXCI6IFwiRVwiLFxuICBcIsSZXCI6IFwiZVwiLFxuICBcIsSaXCI6IFwiRVwiLFxuICBcIsSbXCI6IFwiZVwiLFxuICBcIsScXCI6IFwiR1wiLFxuICBcIse0XCI6IFwiR1wiLFxuICBcIsSdXCI6IFwiZ1wiLFxuICBcIse1XCI6IFwiZ1wiLFxuICBcIsSeXCI6IFwiR1wiLFxuICBcIsSfXCI6IFwiZ1wiLFxuICBcIsSgXCI6IFwiR1wiLFxuICBcIsShXCI6IFwiZ1wiLFxuICBcIsSiXCI6IFwiR1wiLFxuICBcIsSjXCI6IFwiZ1wiLFxuICBcIsSkXCI6IFwiSFwiLFxuICBcIsSlXCI6IFwiaFwiLFxuICBcIsSmXCI6IFwiSFwiLFxuICBcIsSnXCI6IFwiaFwiLFxuICBcIuG4qlwiOiBcIkhcIixcbiAgXCLhuKtcIjogXCJoXCIsXG4gIFwixKhcIjogXCJJXCIsXG4gIFwixKlcIjogXCJpXCIsXG4gIFwixKpcIjogXCJJXCIsXG4gIFwixKtcIjogXCJpXCIsXG4gIFwixKxcIjogXCJJXCIsXG4gIFwixK1cIjogXCJpXCIsXG4gIFwixK5cIjogXCJJXCIsXG4gIFwixK9cIjogXCJpXCIsXG4gIFwixLBcIjogXCJJXCIsXG4gIFwixLFcIjogXCJpXCIsXG4gIFwixLJcIjogXCJJSlwiLFxuICBcIsSzXCI6IFwiaWpcIixcbiAgXCLEtFwiOiBcIkpcIixcbiAgXCLEtVwiOiBcImpcIixcbiAgXCLEtlwiOiBcIktcIixcbiAgXCLEt1wiOiBcImtcIixcbiAgXCLhuLBcIjogXCJLXCIsXG4gIFwi4bixXCI6IFwia1wiLFxuICBcIkvMhlwiOiBcIktcIixcbiAgXCJrzIZcIjogXCJrXCIsXG4gIFwixLlcIjogXCJMXCIsXG4gIFwixLpcIjogXCJsXCIsXG4gIFwixLtcIjogXCJMXCIsXG4gIFwixLxcIjogXCJsXCIsXG4gIFwixL1cIjogXCJMXCIsXG4gIFwixL5cIjogXCJsXCIsXG4gIFwixL9cIjogXCJMXCIsXG4gIFwixYBcIjogXCJsXCIsXG4gIFwixYFcIjogXCJsXCIsXG4gIFwixYJcIjogXCJsXCIsXG4gIFwi4bi+XCI6IFwiTVwiLFxuICBcIuG4v1wiOiBcIm1cIixcbiAgXCJNzIZcIjogXCJNXCIsXG4gIFwibcyGXCI6IFwibVwiLFxuICBcIsWDXCI6IFwiTlwiLFxuICBcIsWEXCI6IFwiblwiLFxuICBcIsWFXCI6IFwiTlwiLFxuICBcIsWGXCI6IFwiblwiLFxuICBcIsWHXCI6IFwiTlwiLFxuICBcIsWIXCI6IFwiblwiLFxuICBcIsWJXCI6IFwiblwiLFxuICBcIk7MhlwiOiBcIk5cIixcbiAgXCJuzIZcIjogXCJuXCIsXG4gIFwixYxcIjogXCJPXCIsXG4gIFwixY1cIjogXCJvXCIsXG4gIFwixY5cIjogXCJPXCIsXG4gIFwixY9cIjogXCJvXCIsXG4gIFwixZBcIjogXCJPXCIsXG4gIFwixZFcIjogXCJvXCIsXG4gIFwixZJcIjogXCJPRVwiLFxuICBcIsWTXCI6IFwib2VcIixcbiAgXCJQzIZcIjogXCJQXCIsXG4gIFwicMyGXCI6IFwicFwiLFxuICBcIsWUXCI6IFwiUlwiLFxuICBcIsWVXCI6IFwiclwiLFxuICBcIsWWXCI6IFwiUlwiLFxuICBcIsWXXCI6IFwiclwiLFxuICBcIsWYXCI6IFwiUlwiLFxuICBcIsWZXCI6IFwiclwiLFxuICBcIlLMhlwiOiBcIlJcIixcbiAgXCJyzIZcIjogXCJyXCIsXG4gIFwiyJJcIjogXCJSXCIsXG4gIFwiyJNcIjogXCJyXCIsXG4gIFwixZpcIjogXCJTXCIsXG4gIFwixZtcIjogXCJzXCIsXG4gIFwixZxcIjogXCJTXCIsXG4gIFwixZ1cIjogXCJzXCIsXG4gIFwixZ5cIjogXCJTXCIsXG4gIFwiyJhcIjogXCJTXCIsXG4gIFwiyJlcIjogXCJzXCIsXG4gIFwixZ9cIjogXCJzXCIsXG4gIFwixaBcIjogXCJTXCIsXG4gIFwixaFcIjogXCJzXCIsXG4gIFwixaJcIjogXCJUXCIsXG4gIFwixaNcIjogXCJ0XCIsXG4gIFwiyJtcIjogXCJ0XCIsXG4gIFwiyJpcIjogXCJUXCIsXG4gIFwixaRcIjogXCJUXCIsXG4gIFwixaVcIjogXCJ0XCIsXG4gIFwixaZcIjogXCJUXCIsXG4gIFwixadcIjogXCJ0XCIsXG4gIFwiVMyGXCI6IFwiVFwiLFxuICBcInTMhlwiOiBcInRcIixcbiAgXCLFqFwiOiBcIlVcIixcbiAgXCLFqVwiOiBcInVcIixcbiAgXCLFqlwiOiBcIlVcIixcbiAgXCLFq1wiOiBcInVcIixcbiAgXCLFrFwiOiBcIlVcIixcbiAgXCLFrVwiOiBcInVcIixcbiAgXCLFrlwiOiBcIlVcIixcbiAgXCLFr1wiOiBcInVcIixcbiAgXCLFsFwiOiBcIlVcIixcbiAgXCLFsVwiOiBcInVcIixcbiAgXCLFslwiOiBcIlVcIixcbiAgXCLFs1wiOiBcInVcIixcbiAgXCLIllwiOiBcIlVcIixcbiAgXCLIl1wiOiBcInVcIixcbiAgXCJWzIZcIjogXCJWXCIsXG4gIFwidsyGXCI6IFwidlwiLFxuICBcIsW0XCI6IFwiV1wiLFxuICBcIsW1XCI6IFwid1wiLFxuICBcIuG6glwiOiBcIldcIixcbiAgXCLhuoNcIjogXCJ3XCIsXG4gIFwiWMyGXCI6IFwiWFwiLFxuICBcInjMhlwiOiBcInhcIixcbiAgXCLFtlwiOiBcIllcIixcbiAgXCLFt1wiOiBcInlcIixcbiAgXCLFuFwiOiBcIllcIixcbiAgXCJZzIZcIjogXCJZXCIsXG4gIFwiecyGXCI6IFwieVwiLFxuICBcIsW5XCI6IFwiWlwiLFxuICBcIsW6XCI6IFwielwiLFxuICBcIsW7XCI6IFwiWlwiLFxuICBcIsW8XCI6IFwielwiLFxuICBcIsW9XCI6IFwiWlwiLFxuICBcIsW+XCI6IFwielwiLFxuICBcIsW/XCI6IFwic1wiLFxuICBcIsaSXCI6IFwiZlwiLFxuICBcIsagXCI6IFwiT1wiLFxuICBcIsahXCI6IFwib1wiLFxuICBcIsavXCI6IFwiVVwiLFxuICBcIsawXCI6IFwidVwiLFxuICBcIseNXCI6IFwiQVwiLFxuICBcIseOXCI6IFwiYVwiLFxuICBcIsePXCI6IFwiSVwiLFxuICBcIseQXCI6IFwiaVwiLFxuICBcIseRXCI6IFwiT1wiLFxuICBcIseSXCI6IFwib1wiLFxuICBcIseTXCI6IFwiVVwiLFxuICBcIseUXCI6IFwidVwiLFxuICBcIseVXCI6IFwiVVwiLFxuICBcIseWXCI6IFwidVwiLFxuICBcIseXXCI6IFwiVVwiLFxuICBcIseYXCI6IFwidVwiLFxuICBcIseZXCI6IFwiVVwiLFxuICBcIseaXCI6IFwidVwiLFxuICBcIsebXCI6IFwiVVwiLFxuICBcIsecXCI6IFwidVwiLFxuICBcIuG7qFwiOiBcIlVcIixcbiAgXCLhu6lcIjogXCJ1XCIsXG4gIFwi4bm4XCI6IFwiVVwiLFxuICBcIuG5uVwiOiBcInVcIixcbiAgXCLHulwiOiBcIkFcIixcbiAgXCLHu1wiOiBcImFcIixcbiAgXCLHvFwiOiBcIkFFXCIsXG4gIFwix71cIjogXCJhZVwiLFxuICBcIse+XCI6IFwiT1wiLFxuICBcIse/XCI6IFwib1wiLFxuICBcIsOeXCI6IFwiVEhcIixcbiAgXCLDvlwiOiBcInRoXCIsXG4gIFwi4bmUXCI6IFwiUFwiLFxuICBcIuG5lVwiOiBcInBcIixcbiAgXCLhuaRcIjogXCJTXCIsXG4gIFwi4bmlXCI6IFwic1wiLFxuICBcIljMgVwiOiBcIlhcIixcbiAgXCJ4zIFcIjogXCJ4XCIsXG4gIFwi0INcIjogXCLQk1wiLFxuICBcItGTXCI6IFwi0LNcIixcbiAgXCLQjFwiOiBcItCaXCIsXG4gIFwi0ZxcIjogXCLQulwiLFxuICBcIkHMi1wiOiBcIkFcIixcbiAgXCJhzItcIjogXCJhXCIsXG4gIFwiRcyLXCI6IFwiRVwiLFxuICBcImXMi1wiOiBcImVcIixcbiAgXCJJzItcIjogXCJJXCIsXG4gIFwiacyLXCI6IFwiaVwiLFxuICBcIse4XCI6IFwiTlwiLFxuICBcIse5XCI6IFwiblwiLFxuICBcIuG7klwiOiBcIk9cIixcbiAgXCLhu5NcIjogXCJvXCIsXG4gIFwi4bmQXCI6IFwiT1wiLFxuICBcIuG5kVwiOiBcIm9cIixcbiAgXCLhu6pcIjogXCJVXCIsXG4gIFwi4burXCI6IFwidVwiLFxuICBcIuG6gFwiOiBcIldcIixcbiAgXCLhuoFcIjogXCJ3XCIsXG4gIFwi4buyXCI6IFwiWVwiLFxuICBcIuG7s1wiOiBcInlcIixcbiAgXCLIgFwiOiBcIkFcIixcbiAgXCLIgVwiOiBcImFcIixcbiAgXCLIhFwiOiBcIkVcIixcbiAgXCLIhVwiOiBcImVcIixcbiAgXCLIiFwiOiBcIklcIixcbiAgXCLIiVwiOiBcImlcIixcbiAgXCLIjFwiOiBcIk9cIixcbiAgXCLIjVwiOiBcIm9cIixcbiAgXCLIkFwiOiBcIlJcIixcbiAgXCLIkVwiOiBcInJcIixcbiAgXCLIlFwiOiBcIlVcIixcbiAgXCLIlVwiOiBcInVcIixcbiAgXCJCzIxcIjogXCJCXCIsXG4gIFwiYsyMXCI6IFwiYlwiLFxuICBcIsSMzKNcIjogXCJDXCIsXG4gIFwixI3Mo1wiOiBcImNcIixcbiAgXCLDisyMXCI6IFwiRVwiLFxuICBcIsOqzIxcIjogXCJlXCIsXG4gIFwiRsyMXCI6IFwiRlwiLFxuICBcImbMjFwiOiBcImZcIixcbiAgXCLHplwiOiBcIkdcIixcbiAgXCLHp1wiOiBcImdcIixcbiAgXCLInlwiOiBcIkhcIixcbiAgXCLIn1wiOiBcImhcIixcbiAgXCJKzIxcIjogXCJKXCIsXG4gIFwix7BcIjogXCJqXCIsXG4gIFwix6hcIjogXCJLXCIsXG4gIFwix6lcIjogXCJrXCIsXG4gIFwiTcyMXCI6IFwiTVwiLFxuICBcIm3MjFwiOiBcIm1cIixcbiAgXCJQzIxcIjogXCJQXCIsXG4gIFwicMyMXCI6IFwicFwiLFxuICBcIlHMjFwiOiBcIlFcIixcbiAgXCJxzIxcIjogXCJxXCIsXG4gIFwixZjMqVwiOiBcIlJcIixcbiAgXCLFmcypXCI6IFwiclwiLFxuICBcIuG5plwiOiBcIlNcIixcbiAgXCLhuadcIjogXCJzXCIsXG4gIFwiVsyMXCI6IFwiVlwiLFxuICBcInbMjFwiOiBcInZcIixcbiAgXCJXzIxcIjogXCJXXCIsXG4gIFwid8yMXCI6IFwid1wiLFxuICBcIljMjFwiOiBcIlhcIixcbiAgXCJ4zIxcIjogXCJ4XCIsXG4gIFwiWcyMXCI6IFwiWVwiLFxuICBcInnMjFwiOiBcInlcIixcbiAgXCJBzKdcIjogXCJBXCIsXG4gIFwiYcynXCI6IFwiYVwiLFxuICBcIkLMp1wiOiBcIkJcIixcbiAgXCJizKdcIjogXCJiXCIsXG4gIFwi4biQXCI6IFwiRFwiLFxuICBcIuG4kVwiOiBcImRcIixcbiAgXCLIqFwiOiBcIkVcIixcbiAgXCLIqVwiOiBcImVcIixcbiAgXCLGkMynXCI6IFwiRVwiLFxuICBcIsmbzKdcIjogXCJlXCIsXG4gIFwi4bioXCI6IFwiSFwiLFxuICBcIuG4qVwiOiBcImhcIixcbiAgXCJJzKdcIjogXCJJXCIsXG4gIFwiacynXCI6IFwiaVwiLFxuICBcIsaXzKdcIjogXCJJXCIsXG4gIFwiyajMp1wiOiBcImlcIixcbiAgXCJNzKdcIjogXCJNXCIsXG4gIFwibcynXCI6IFwibVwiLFxuICBcIk/Mp1wiOiBcIk9cIixcbiAgXCJvzKdcIjogXCJvXCIsXG4gIFwiUcynXCI6IFwiUVwiLFxuICBcInHMp1wiOiBcInFcIixcbiAgXCJVzKdcIjogXCJVXCIsXG4gIFwidcynXCI6IFwidVwiLFxuICBcIljMp1wiOiBcIlhcIixcbiAgXCJ4zKdcIjogXCJ4XCIsXG4gIFwiWsynXCI6IFwiWlwiLFxuICBcInrMp1wiOiBcInpcIlxufTtcbnZhciBjaGFycyA9IE9iamVjdC5rZXlzKGNoYXJhY3Rlck1hcCkuam9pbignfCcpO1xudmFyIGFsbEFjY2VudHMgPSBuZXcgUmVnRXhwKGNoYXJzLCAnZycpO1xudmFyIGZpcnN0QWNjZW50ID0gbmV3IFJlZ0V4cChjaGFycywgJycpO1xuXG52YXIgcmVtb3ZlQWNjZW50cyA9IGZ1bmN0aW9uIHJlbW92ZUFjY2VudHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShhbGxBY2NlbnRzLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyTWFwW21hdGNoXTtcbiAgfSk7XG59O1xuXG52YXIgaGFzQWNjZW50cyA9IGZ1bmN0aW9uIGhhc0FjY2VudHMoc3RyaW5nKSB7XG4gIHJldHVybiAhIXN0cmluZy5tYXRjaChmaXJzdEFjY2VudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUFjY2VudHM7XG5tb2R1bGUuZXhwb3J0cy5oYXMgPSBoYXNBY2NlbnRzO1xubW9kdWxlLmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlQWNjZW50czsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BmQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDclZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9