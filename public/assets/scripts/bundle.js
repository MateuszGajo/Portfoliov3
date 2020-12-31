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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/scripts/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ \"./src/scripts/start.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_start__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ \"./src/scripts/skills.js\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skills__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// setTimeout(function () {\n//   window.scrollTo(0, 0);\n// }, 30);\nscrollModule = (() => {\n  let state = {\n    scrollPosition: 0,\n    windowHeight: window.innerHeight\n  };\n  const pub = {};\n\n  pub.changeState = newState => {\n    state = newState;\n  };\n\n  pub.getState = () => {\n    return state;\n  };\n\n  return pub;\n})();\n\nconst windowHeight = window.innerHeight;\n\nconst scrollDown = () => window.scrollBy({\n  top: windowHeight,\n  behavior: \"smooth\"\n});\n\nconst scrollUp = () => {\n  window.scrollBy({\n    top: windowHeight * -1,\n    left: 0,\n    behavior: \"smooth\"\n  });\n};\n\nconst checkScrollDirection = e => {\n  if (e.wheelDelta > 0) {\n    scrollUp();\n  } else {\n    scrollDown();\n  }\n};\n\ndocument.addEventListener(\"wheel\", checkScrollDirection);\n\n//# sourceURL=webpack:///./src/scripts/scroll.js?");

/***/ }),

/***/ "./src/scripts/skills.js":
/*!*******************************!*\
  !*** ./src/scripts/skills.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const skillsDescriptionTitleEl = document.querySelector(\".skills__description__title\");\nconst windowHeight = window.innerHeight;\nconst windowWidth = window.innerWidth;\nconst skillsSection = document.querySelector(\".skills\");\nconst SkillsDescriptionTextEl = document.querySelector(\".skills__description__text\");\nconst techonologiesLine = document.querySelector(\".skills__technologies__line\");\nconst technologiesLineOverlay = document.querySelector(\".skills__technologies__line__overlay\");\nconst technologiesEl = document.querySelector(\".skills__technologies\");\nconst skillsItems = document.querySelectorAll(\".skills__technologies__wrapper__container\");\nconst itemPoint = document.querySelector(\".skills__technologies__wrapper__container__point__circle--big\");\nconst marginEl = document.querySelector(\".skills__technologies__margin\");\nconst skillsStartPosition = skillsSection.getBoundingClientRect().y;\nconst endOfSkillsSection = skillsStartPosition + windowHeight;\nconst skillsDescriptionPosition = skillsDescriptionTitleEl.getBoundingClientRect().y;\nconst skillsItemsSorted = [].map.call(skillsItems, function (el) {\n  return el;\n}).sort((a, b) => {\n  return a.offsetTop - b.offsetTop;\n});\nskillsDescriptionTitleEl.style.color = \"red\";\nconst descriptionTitleWidth = skillsDescriptionTitleEl.offsetWidth;\nconst descriptionTitleHeight = skillsDescriptionTitleEl.offsetHeight;\nconst descriptionTitleFromLeft = skillsDescriptionTitleEl.offsetLeft;\nconsole.log(descriptionTitleFromLeft);\n\nif (windowWidth < 450) {\n  const multipler = 1.5;\n  const x = `calc(50vw - ${descriptionTitleWidth * multipler / 2}px - ${descriptionTitleFromLeft}px)`;\n  const y = `\n    ${endOfSkillsSection - skillsDescriptionPosition - descriptionTitleHeight * multipler}px`;\n  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;\n} else if (windowWidth < 550) {\n  const multipler = 2;\n  const x = `calc(50vw - ${descriptionTitleWidth * multipler / 2}px - ${descriptionTitleFromLeft}px)`;\n  const y = `\n    ${endOfSkillsSection - skillsDescriptionPosition - descriptionTitleHeight * multipler}px`;\n  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;\n} else {\n  const multipler = 3;\n  const x = `calc(50vw - ${descriptionTitleWidth * multipler / 2}px - ${descriptionTitleFromLeft}px)`;\n  const y = `\n    ${endOfSkillsSection - skillsDescriptionPosition - descriptionTitleHeight * multipler}px`;\n  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;\n}\n\nconst skillsModule = (() => {\n  let state = {\n    isSectionStart: false,\n    i: 0,\n    last: skillsItemsSorted.length,\n    animation: {\n      index: null,\n      date: null\n    },\n    autoScrollTimeout: null,\n    autoScroll: null,\n    isUserScroll: false\n  };\n  const pub = {};\n\n  pub.changeState = newState => {\n    state = newState;\n  };\n\n  pub.getState = () => {\n    return state;\n  };\n\n  return pub;\n})();\n\nconst setAnimation = (el, type, className, time = 0, styles) => {\n  switch (type) {\n    case \"add\":\n      {\n        return setTimeout(() => {\n          el.classList.add(className);\n        }, time);\n      }\n\n    case \"remove\":\n      {\n        return setTimeout(() => {\n          el.classList.remove(className);\n        }, time);\n      }\n\n    case \"style\":\n      {\n        return setTimeout(() => {\n          el.style[styles.key] = styles.value;\n        }, time);\n      }\n  }\n};\n\nlet autoScroll;\n\nconst startSection = () => {// setAnimation(skillsDescriptionTitleEl, \"add\", \"opacity-visible\", 200);\n  // setAnimation(skillsDescriptionTitleEl, \"style\", \"\", 600, {\n  //   key: \"transform\",\n  //   value: \"translate(0,0) scale(1)\",\n  // });\n  // setAnimation(\n  //   SkillsDescriptionTextEl,\n  //   \"add\",\n  //   \"skills__description__text--active\",\n  //   1800\n  // );\n  // setAnimation(\n  //   SkillsDescriptionTextEl,\n  //   \"add\",\n  //   \"skills__description__text--active\",\n  //   1800\n  // );\n  // setAnimation(\n  //   skillsItemsSorted[0],\n  //   \"add\",\n  //   \"skills__technologies__wrapper__container--active\",\n  //   2100\n  // );\n  // setAnimation(\n  //   techonologiesLine,\n  //   \"add\",\n  //   \"skills__technologies__line--active\",\n  //   3000\n  // );\n  // setTimeout(() => {\n  //   autoScroll = setInterval(() => {\n  //     technologiesEl.scrollBy({\n  //       top: 6,\n  //     });\n  //   }, 60);\n  // }, 2500);\n};\n\nsetAnimation(technologiesLineOverlay, \"style\", \"\", 3100, {\n  key: \"height\",\n  value: windowHeight / 2 + \"px\"\n});\nstartSection();\ntechnologiesEl.addEventListener(\"wheel\", e => {\n  techonologiesLine.classList.add(\"skills__technologies__line--tranistion\");\n  skillsModule.changeState({ ...skillsModule.getState(),\n    isUserScroll: true\n  });\n  isUserScroll = true;\n});\n\nconst clearAsyncFun = ({\n  animation,\n  isUserScroll,\n  autoScrollTimeout,\n  autoScroll\n}) => {\n  if (animation.index && new Date().getTime() - animation.date.getTime() < 300) {\n    clearTimeout(animation.index);\n  }\n\n  if (isUserScroll) {\n    console.log(\"Clear\");\n    console.log(autoScroll);\n    console.log(autoScrollTimeout);\n    clearInterval(autoScroll);\n    clearTimeout(autoScrollTimeout);\n  }\n};\n\nconst scrollSection = ({\n  scrollCenter,\n  lastElementPosition,\n  i,\n  last,\n  autoScrollTimeout,\n  e\n}) => {\n  const lineScroll = windowHeight / 1.2 + e.target.scrollTop;\n  const elementCenter = skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;\n  const itemPointHeight = itemPoint.offsetHeight;\n  const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;\n  const newScrollPosition = scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;\n\n  if (lineScroll > lastElementPosition) {\n    if (newScrollPosition > lastElementPosition) {\n      technologiesLineOverlay.style.height = lastElementPosition + \"px\";\n      setAnimation(skillsItemsSorted[i], \"add\", \"skills__technologies__wrapper__container--active\", 0);\n      clearInterval(autoScroll);\n      clearTimeout(autoScrollTimeout);\n    } else technologiesLineOverlay.style.height = newScrollPosition + \"px\";\n\n    techonologiesLine.style.height = lastElementPosition + \"px\";\n  } else if (scrollCenter > triggerPoint) {\n    technologiesLineOverlay.style.height = triggerPoint + windowHeight / 3;\n    +\"px\";\n    skillsItemsSorted[i].classList.add(\"skills__technologies__wrapper__container--active\");\n    const index = setAnimation(technologiesLineOverlay, \"style\", \"\", 300, {\n      key: \"height\",\n      value: newScrollPosition + \"px\"\n    });\n    const date = new Date();\n    skillsModule.changeState({ ...skillsModule.getState(),\n      animation: {\n        index,\n        date\n      }\n    });\n    if (i < last - 1) skillsModule.changeState({ ...skillsModule.getState(),\n      i: i + 1\n    });\n  } else {\n    technologiesLineOverlay.style.height = newScrollPosition + \"px\";\n    techonologiesLine.style.height = lineScroll + \"px\";\n  }\n};\n\nconst hidenLastElement = ({\n  i,\n  scrollCenter\n}) => {\n  if (i > 0) {\n    const previousElementCenter = skillsItemsSorted[i - 1].offsetTop + skillsItemsSorted[i - 1].offsetHeight / 2;\n\n    if (scrollCenter > previousElementCenter + windowHeight / 2.75) {\n      skillsItemsSorted[i - 1].classList.add(\"skills__technologies__wrapper__container--deactive\");\n    }\n  }\n};\n\nconst addInterval = ({\n  isUserScroll,\n  scrollCenter,\n  lastElementPosition\n}) => {\n  if (isUserScroll && scrollCenter < lastElementPosition) {\n    const autoScrollTimeout = setTimeout(() => {\n      techonologiesLine.classList.remove(\"skills__technologies__line--tranistion\");\n      const autoScroll = setInterval(() => {\n        technologiesEl.scrollBy({\n          top: 10,\n          behavior: \"smooth\"\n        });\n      }, 80);\n      skillsModule.changeState({ ...skillsModule.getState(),\n        autoScroll\n      });\n    }, 1200);\n    skillsModule.changeState({ ...skillsModule.getState(),\n      autoScrollTimeout\n    });\n  }\n\n  skillsModule.changeState({ ...skillsModule.getState(),\n    isUserScroll: false\n  });\n};\n\ntechnologiesEl.addEventListener(\"scroll\", e => {\n  const {\n    i,\n    animation,\n    isUserScroll,\n    last,\n    autoScrollTimeout,\n    autoScroll\n  } = skillsModule.getState();\n  const scrollCenter = windowHeight / 2 + e.target.scrollTop;\n  const lastElementPosition = skillsItemsSorted[last - 1].offsetTop;\n  clearAsyncFun({\n    animation,\n    isUserScroll,\n    autoScrollTimeout,\n    autoScroll\n  });\n  scrollSection({\n    scrollCenter,\n    lastElementPosition,\n    i,\n    last,\n    autoScrollTimeout,\n    e\n  });\n  hidenLastElement({\n    i,\n    scrollCenter\n  });\n  addInterval({\n    isUserScroll,\n    scrollCenter,\n    lastElementPosition\n  });\n});\ndocument.addEventListener(\"scroll\", e => {\n  if (window.pageYOffset === skillsStartPosition && !isSectionStart) {\n    startSection();\n    skillsModule.changeState({ ...skillsModule.getState(),\n      isSectionStart: true\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/scripts/skills.js?");

/***/ }),

/***/ "./src/scripts/start.js":
/*!******************************!*\
  !*** ./src/scripts/start.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const setAnimation = (el, type, className, time = 0) => {\n  switch (type) {\n    case \"add\":\n      {\n        setTimeout(() => {\n          el.classList.add(className);\n        }, time);\n        break;\n      }\n\n    case \"remove\":\n      {\n        setTimeout(() => {\n          el.classList.remove(className);\n        }, time);\n        break;\n      }\n  }\n};\n\nconst contentLineEl = document.querySelector(\".start__line--content\");\nconst downbarLineEl = document.querySelector(\".start__line--downbar\");\nconst downbarTitleLineEl = document.querySelector(\".start__downbar__text__line--title\");\nconst downbarTitleEl = document.querySelector(\".start__downbar__text--title\");\nconst downbarAuthorLineEl = document.querySelector(\".start__downbar__text__line--author\");\nconst downbarAuthorEl = document.querySelector(\".start__downbar__text--author\");\nconst downbarTitleOverlayEl = document.querySelector(\".start__downbar__text__overlay--title\");\nconst downbarAuthorOverlayEl = document.querySelector(\".start__downbar__text__overlay--author\");\nconst downbarEls = document.querySelectorAll(\".start__downbar__container\");\nconst downbarTitleContainerEl = document.querySelector(\".start__downbar__container--title\");\nsetAnimation(contentLineEl, \"add\", \"height-max\", 2400);\nsetAnimation(contentLineEl, \"add\", `start__line--active`, 3000);\nsetAnimation(downbarLineEl, \"add\", \"start__line--downbar--active\", 3400);\nsetAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3500);\nsetAnimation(downbarTitleEl, \"add\", \"opacity-visible\", 3600);\nsetAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3700);\nsetAnimation(downbarAuthorEl, \"add\", \"opacity-visible\", 3800);\nsetAnimation(downbarLineEl, \"add\", \"start__line--active\", 4000);\nsetAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--active\", 4100);\nsetAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--active\", 4300);\nsetAnimation(downbarTitleOverlayEl, \"add\", \"width-max\", 4500);\nsetAnimation(downbarAuthorOverlayEl, \"add\", \"width-max\", 4700);\nsetAnimation(downbarAuthorLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5800);\nsetAnimation(downbarTitleLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5900);\nsetAnimation(downbarLineEl, \"remove\", \"start__line--downbar--active\", 6000);\nsetAnimation(contentLineEl, \"remove\", \"height-max\", 6300);\ndownbarEls.forEach(item => {\n  setAnimation(item, \"add\", \"start__downbar__container--move\", 7000);\n});\nsetAnimation(downbarAuthorEl, \"add\", \"visibility-hidden\", 7000);\nsetAnimation(downbarAuthorOverlayEl, \"add\", \"visibility-visble\", 7000);\nsetAnimation(downbarTitleContainerEl, \"add\", \"start__downbar__container--title--invisible\", 7000);\nsetTimeout(() => {\n  document.querySelectorAll(\".start__downbar__text__overlay__letter\").forEach((item, index) => {\n    shuffleText(item, index + 1);\n  });\n}, 7500);\n\nconst shuffleText = (el, time) => {\n  const initialLetter = el.textContent;\n  const interval = setInterval(function shuffle() {\n    el.textContent = String.fromCharCode(33 + Math.round(Math.random() * 99));\n    return shuffle;\n  }(), 10);\n  setTimeout(() => {\n    clearInterval(interval);\n    el.textContent = initialLetter;\n\n    if (initialLetter === \"o\") {\n      document.querySelector(\".start__downbar__container--author\").classList.add(\"start__downbar__container--move-away\");\n      const children = document.querySelectorAll(\".start__content__p\");\n\n      for (let i = 0; i < children.length; i++) {\n        setTimeout(() => {\n          children[i].classList.add(\"start__content_p--move-up\");\n          return moveLeft(children[i], i);\n        }, 2200 + i * 200);\n      }\n\n      const moveLeft = (el, index) => {\n        setTimeout(() => {\n          el.classList.add(\"start__content_p--mov-left\");\n        }, 100);\n\n        if (index === 2) {\n          setTimeout(() => {\n            document.querySelector(\".start__icon\").classList.add(\"opacity-visible\");\n            const children = document.querySelectorAll(\".side-bar__icon\");\n\n            for (let i = 0; i < children.length; i++) {\n              displayIcon(children[i], i);\n            }\n          }, 150);\n        }\n      };\n    }\n  }, time * 250);\n};\n\nconst displayIcon = (el, index) => {\n  setTimeout(() => {\n    el.classList.add(\"side-bar__icon--intitial\");\n  }, index * 250);\n};\n\n//# sourceURL=webpack:///./src/scripts/start.js?");

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