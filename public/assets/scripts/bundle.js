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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/scripts/start.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_start__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/start.js":
/*!******************************!*\
  !*** ./src/scripts/start.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const setAnimation = (el, type, className, time = 0) => {\n  switch (type) {\n    case \"add\":\n      {\n        setTimeout(() => {\n          el.classList.add(className);\n        }, time);\n        break;\n      }\n\n    case \"remove\":\n      {\n        setTimeout(() => {\n          el.classList.remove(className);\n        }, time);\n        break;\n      }\n  }\n};\n\nconst contentLineEl = document.querySelector(\".start__line--content\");\nconst downbarLineEl = document.querySelector(\".start__line--downbar\");\nconst downbarTitleLineEl = document.querySelector(\".start__downbar__text__line--title\");\nconst downbarTitleEl = document.querySelector(\".start__downbar__text--title\");\nconst downbarAuthorLineEl = document.querySelector(\".start__downbar__text__line--author\");\nconst downbarAuthorEl = document.querySelector(\".start__downbar__text--author\");\nconst downbarTitleOverlayEl = document.querySelector(\".start__downbar__text__overlay--title\");\nconst downbarAuthorOverlayEl = document.querySelector(\".start__downbar__text__overlay--author\");\nconst downbarEls = document.querySelectorAll(\".start__downbar__container\");\nconst downbarTitleContainerEl = document.querySelector(\".start__downbar__container--title\");\nsetAnimation(contentLineEl, \"add\", \"start__line--content--active\", 2400);\nsetAnimation(contentLineEl, \"add\", `start__line--active`, 3000);\nsetAnimation(downbarLineEl, \"add\", \"start__line--downbar--active\", 3400);\nsetAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3500);\nsetAnimation(downbarTitleEl, \"add\", \"start__downbar__text--visible\", 3600);\nsetAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3700);\nsetAnimation(downbarAuthorEl, \"add\", \"start__downbar__text--visible\", 3800);\nsetAnimation(downbarLineEl, \"add\", \"start__line--active\", 4000);\nsetAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--active\", 4100);\nsetAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--active\", 4300);\nsetAnimation(downbarTitleOverlayEl, \"add\", \"start__downbar__text__overlay--active\", 4500);\nsetAnimation(downbarAuthorOverlayEl, \"add\", \"start__downbar__text__overlay--active\", 4700);\nsetAnimation(downbarAuthorLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5800);\nsetAnimation(downbarTitleLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5900);\nsetAnimation(downbarLineEl, \"remove\", \"start__line--downbar--active\", 6000);\nsetAnimation(contentLineEl, \"remove\", \"start__line--content--active\", 6300);\ndownbarEls.forEach(item => {\n  setAnimation(item, \"add\", \"start__downbar__container--move\", 7000);\n});\nsetAnimation(downbarAuthorEl, \"add\", \"visibility-hidden\", 7000);\nsetAnimation(downbarAuthorOverlayEl, \"add\", \"visibility-visble\", 7000);\nsetAnimation(downbarTitleContainerEl, \"add\", \"start__downbar__container--title--invisible\", 7000);\nsetTimeout(() => {\n  document.querySelectorAll(\".start__downbar__text__overlay__letter\").forEach((item, index) => {\n    shuffleText(item, index + 1);\n  });\n}, 7500);\n\nconst shuffleText = (el, time) => {\n  const initialLetter = el.textContent;\n  const interval = setInterval(function shuffle() {\n    el.textContent = String.fromCharCode(33 + Math.round(Math.random() * 99));\n    return shuffle;\n  }(), 10);\n  setTimeout(() => {\n    clearInterval(interval);\n    el.textContent = initialLetter;\n\n    if (initialLetter === \"o\") {\n      document.querySelector(\".start__downbar__container--author\").classList.add(\"start__downbar__container--move-away\");\n      const children = document.querySelectorAll(\".start__content__p\");\n\n      for (let i = 0; i < children.length; i++) {\n        setTimeout(() => {\n          children[i].classList.add(\"start__content_p--move-up\");\n          return moveLeft(children[i], i);\n        }, 2200 + i * 200);\n      }\n\n      const moveLeft = (el, index) => {\n        setTimeout(() => {\n          el.classList.add(\"start__content_p--mov-left\");\n        }, 100);\n\n        if (index === 2) {\n          setTimeout(() => {\n            document.querySelector(\".start__icon\").classList.add(\"opacity-visible\");\n            const children = document.querySelectorAll(\".side-bar__icon\");\n\n            for (let i = 0; i < children.length; i++) {\n              displayIcon(children[i], i);\n            }\n          }, 150);\n        }\n      };\n    }\n  }, time * 250);\n};\n\nconst displayIcon = (el, index) => {\n  setTimeout(() => {\n    el.classList.add(\"side-bar__icon--intitial\");\n  }, index * 250);\n};\n\n//# sourceURL=webpack:///./src/scripts/start.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });