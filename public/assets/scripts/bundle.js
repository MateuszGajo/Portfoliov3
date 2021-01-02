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

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalState */ \"./src/scripts/globalState.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const aboutSection = document.querySelector(\".about\");\n  const titleEl = document.querySelector(\".about__title__text\");\n  const aboutStartPosition = aboutSection.offsetTop;\n\n  const aboutModule = (() => {\n    let state = {\n      isSectionStart: false\n    };\n    const pub = {};\n\n    pub.changeState = newState => {\n      state = newState;\n    };\n\n    pub.getState = () => state;\n\n    return pub;\n  })();\n\n  const setAnimation = (el, type, className, time = 0, styles) => {\n    switch (type) {\n      case \"add\":\n        {\n          return setTimeout(() => {\n            el.classList.add(className);\n          }, time);\n        }\n\n      case \"remove\":\n        {\n          return setTimeout(() => {\n            el.classList.remove(className);\n          }, time);\n        }\n\n      case \"style\":\n        {\n          return setTimeout(() => {\n            styles.forEach(item => {\n              const {\n                key,\n                value\n              } = item;\n              el.style[key] = value;\n            });\n          }, time);\n        }\n    }\n  };\n\n  const startSection = () => {\n    setAnimation(titleEl, \"add\", \"opacity-visible\", 370);\n    setAnimation(titleEl, \"add\", \"about__title__text--active\", 600);\n  };\n\n  document.addEventListener(\"scroll\", () => {\n    const {\n      scrollBack\n    } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n    const {\n      isSectionStart\n    } = aboutModule.getState();\n\n    if (window.pageYOffset === aboutStartPosition && scrollBack && !isSectionStart) {\n      aboutModule.changeState({ ...aboutModule.getState(),\n        isSectionStart: true\n      });\n      startSection();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/about.js?");

/***/ }),

/***/ "./src/scripts/globalState.js":
/*!************************************!*\
  !*** ./src/scripts/globalState.js ***!
  \************************************/
/*! exports provided: globalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalState\", function() { return globalState; });\nconst globalState = (() => {\n  let state = {\n    allowScroll: true,\n    windowHeight: window.innerHeight,\n    scrollPosition: 0,\n    scrollBack: false\n  };\n  const pub = {};\n\n  pub.changeState = newState => {\n    state = newState;\n  };\n\n  pub.getState = () => state;\n\n  return pub;\n})();\n\n//# sourceURL=webpack:///./src/scripts/globalState.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/scripts/scroll.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ \"./src/scripts/start.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_start__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ \"./src/scripts/skills.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/scripts/about.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalState */ \"./src/scripts/globalState.js\");\n\n\nconst scrollModule = (() => {\n  let state = {\n    scrollBlock: false\n  };\n  const pub = {};\n\n  pub.changeState = newState => {\n    state = newState;\n  };\n\n  pub.getState = () => state;\n\n  return pub;\n})();\n\nsetTimeout(function () {\n  window.scrollTo(0, 0);\n  _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n    scrollBack: true\n  });\n}, 40);\n\nconst scrollDown = () => {\n  const {\n    scrollBlock\n  } = scrollModule.getState();\n  const {\n    windowHeight,\n    scrollPosition\n  } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n\n  if (!scrollBlock) {\n    const newScrollPosition = scrollPosition + windowHeight;\n    window.scroll({\n      top: newScrollPosition,\n      left: 0,\n      behavior: \"smooth\"\n    });\n    _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n      scrollPosition: newScrollPosition\n    });\n    scrollModule.changeState({ ...scrollModule.getState(),\n      scrollBlock: true\n    });\n    setTimeout(() => {\n      scrollModule.changeState({ ...scrollModule.getState(),\n        scrollBlock: false\n      });\n    }, 500);\n  }\n};\n\nconst scrollUp = () => {\n  const {\n    scrollBlock\n  } = scrollModule.getState();\n  const {\n    windowHeight,\n    scrollPosition\n  } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n\n  if (!scrollBlock) {\n    const newScrollPosition = scrollPosition - windowHeight;\n    window.scroll({\n      top: newScrollPosition,\n      left: 0,\n      behavior: \"smooth\"\n    });\n    _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n      scrollPosition: newScrollPosition\n    });\n    scrollModule.changeState({ ...scrollModule.getState(),\n      scrollBlock: true\n    });\n    setTimeout(() => {\n      scrollModule.changeState({ ...scrollModule.getState(),\n        scrollBlock: false\n      });\n    }, 500);\n  }\n};\n\nconst checkScrollDirection = e => {\n  const {\n    allowScroll\n  } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n\n  if (allowScroll) {\n    if (e.wheelDelta > 0) {\n      scrollUp();\n    } else {\n      scrollDown();\n    }\n  }\n};\n\ndocument.addEventListener(\"wheel\", checkScrollDirection);\n\n//# sourceURL=webpack:///./src/scripts/scroll.js?");

/***/ }),

/***/ "./src/scripts/skills.js":
/*!*******************************!*\
  !*** ./src/scripts/skills.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalState */ \"./src/scripts/globalState.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const skillsDescriptionTitleEl = document.querySelector(\".skills__description__title\");\n  const windowHeight = window.innerHeight;\n  const windowWidth = window.innerWidth;\n  const skillsSection = document.querySelector(\".skills\");\n  const SkillsDescriptionTextEl = document.querySelector(\".skills__description__text\");\n  const techonologiesLine = document.querySelector(\".skills__technologies__line\");\n  const technologiesLineOverlay = document.querySelector(\".skills__technologies__line__overlay\");\n  const technologiesEl = document.querySelector(\".skills__technologies\");\n  const skillsItems = document.querySelectorAll(\".skills__technologies__wrapper__container\");\n  const itemPoint = document.querySelector(\".skills__technologies__wrapper__container__point__circle--big\");\n  const marginEl = document.querySelector(\".skills__technologies__margin\");\n  const technologiesStart = skillsSection.offsetTop + technologiesEl.offsetTop;\n  const skillsItemsSorted = [].map.call(skillsItems, function (el) {\n    return el;\n  }).sort((a, b) => {\n    return a.offsetTop - b.offsetTop;\n  });\n\n  const skillsModule = (() => {\n    let state = {\n      isSectionStart: false,\n      i: 0,\n      last: skillsItemsSorted.length,\n      animation: {\n        index: null,\n        date: null\n      },\n      autoScrollTimeout: null,\n      autoScroll: null,\n      isUserScroll: false,\n      animationStarted: false,\n      animationEnded: false\n    };\n    const pub = {};\n\n    pub.changeState = newState => {\n      state = newState;\n    };\n\n    pub.getState = () => {\n      return state;\n    };\n\n    return pub;\n  })();\n\n  const setAnimation = (el, type, className, time = 0, styles) => {\n    switch (type) {\n      case \"add\":\n        {\n          return setTimeout(() => {\n            el.classList.add(className);\n          }, time);\n        }\n\n      case \"remove\":\n        {\n          return setTimeout(() => {\n            el.classList.remove(className);\n          }, time);\n        }\n\n      case \"style\":\n        {\n          return setTimeout(() => {\n            styles.forEach(item => {\n              const {\n                key,\n                value\n              } = item;\n              el.style[key] = value;\n            });\n          }, time);\n        }\n    }\n  };\n\n  const keys = {\n    37: 1,\n    38: 1,\n    39: 1,\n    40: 1\n  };\n\n  function preventDefault(e) {\n    e.preventDefault();\n  }\n\n  function preventDefaultForScrollKeys(e) {\n    if (keys[e.keyCode]) {\n      preventDefault(e);\n      return false;\n    }\n  }\n\n  let supportsPassive = false;\n\n  try {\n    window.addEventListener(\"test\", null, Object.defineProperty({}, \"passive\", {\n      get: function () {\n        supportsPassive = true;\n      }\n    }));\n  } catch (e) {}\n\n  const wheelOpt = supportsPassive ? {\n    passive: false\n  } : false;\n  const wheelEvent = \"onwheel\" in document.createElement(\"div\") ? \"wheel\" : \"mousewheel\";\n\n  function disableScroll() {\n    skillsSection.addEventListener(\"DOMMouseScroll\", preventDefault, false); // older FF\n\n    skillsSection.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop\n\n    skillsSection.addEventListener(\"touchmove\", preventDefault, wheelOpt); // mobile\n\n    skillsSection.addEventListener(\"keydown\", preventDefaultForScrollKeys, false);\n  }\n\n  disableScroll();\n\n  function enableScroll() {\n    skillsSection.removeEventListener(\"DOMMouseScroll\", preventDefault, false);\n    skillsSection.removeEventListener(wheelEvent, preventDefault, wheelOpt);\n    skillsSection.removeEventListener(\"touchmove\", preventDefault, wheelOpt);\n    skillsSection.removeEventListener(\"keydown\", preventDefaultForScrollKeys, false);\n  }\n\n  const startSection = () => {\n    setAnimation(skillsDescriptionTitleEl, \"add\", \"opacity-visible\", 200);\n    setAnimation(skillsDescriptionTitleEl, \"style\", \"\", 600, [{\n      key: \"left\",\n      value: \"20%\"\n    }, {\n      key: \"bottom\",\n      value: `${windowHeight - SkillsDescriptionTextEl.offsetTop + 10}px`\n    }, {\n      key: \"transform\",\n      value: `translateX(-50%) scale(1)`\n    }]);\n    setAnimation(SkillsDescriptionTextEl, \"add\", \"skills__description__text--active\", 1800);\n    setAnimation(SkillsDescriptionTextEl, \"add\", \"skills__description__text--active\", 1800);\n    setAnimation(technologiesEl, \"add\", \"opacity-visible\", 2200);\n    setAnimation(skillsItemsSorted[0], \"add\", \"skills__technologies__wrapper__container--active\", 2400);\n    setAnimation(techonologiesLine, \"add\", \"skills__technologies__line--active\", 3200);\n    setAnimation(technologiesLineOverlay, \"style\", \"\", 3300, [{\n      key: \"height\",\n      value: windowHeight / 2 - skillsItemsSorted[0].offsetHeight / 2 + windowHeight / 3 + \"px\"\n    }]);\n    setTimeout(() => {\n      techonologiesLine.classList.remove(\"skills__technologies__line--tranistion\");\n      const autoScroll = setInterval(() => {\n        technologiesEl.scrollBy({\n          top: 10,\n          behavior: \"smooth\"\n        });\n      }, 80);\n      skillsModule.changeState({ ...skillsModule.getState(),\n        autoScroll,\n        animationStarted: true\n      });\n    }, 4600);\n    setTimeout(() => {\n      enableScroll();\n      const {\n        scrollPosition\n      } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n\n      if (scrollPosition === technologiesStart) {\n        _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n          allowScroll: false\n        });\n      }\n    }, 4650);\n  };\n\n  technologiesEl.addEventListener(\"wheel\", e => {\n    techonologiesLine.classList.add(\"skills__technologies__line--tranistion\");\n    skillsModule.changeState({ ...skillsModule.getState(),\n      isUserScroll: true\n    });\n  });\n\n  const clearAsyncFun = ({\n    animation,\n    isUserScroll,\n    autoScrollTimeout,\n    autoScroll\n  }) => {\n    if (animation.index && new Date().getTime() - animation.date.getTime() < 300) {\n      clearTimeout(animation.index);\n    }\n\n    if (isUserScroll) {\n      clearInterval(autoScroll);\n      clearTimeout(autoScrollTimeout);\n    }\n  };\n\n  const scrollSection = ({\n    scrollCenter,\n    lastElementPosition,\n    i,\n    last,\n    autoScrollTimeout,\n    e,\n    isUserScroll,\n    autoScroll\n  }) => {\n    const {\n      animationEnded\n    } = skillsModule.getState();\n    const lineScroll = windowHeight / 1.2 + e.target.scrollTop;\n    const elementCenter = skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;\n    const itemPointHeight = itemPoint.offsetHeight;\n    const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;\n    const newScrollPosition = scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;\n    const marginHeight = marginEl.offsetHeight;\n\n    if (!animationEnded) {\n      if (lineScroll > lastElementPosition) {\n        if (newScrollPosition > lastElementPosition) {\n          technologiesLineOverlay.style.height = lastElementPosition - marginHeight + \"px\";\n          setAnimation(skillsItemsSorted[i], \"add\", \"skills__technologies__wrapper__container--active\", 0);\n          clearInterval(autoScroll);\n          clearTimeout(autoScrollTimeout);\n          disableScroll();\n          skillsModule.changeState({ ...skillsModule.getState(),\n            animationEnded: true\n          });\n          setTimeout(() => {\n            _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n              allowScroll: true\n            });\n          }, 1500);\n        } else technologiesLineOverlay.style.height = newScrollPosition + \"px\";\n\n        techonologiesLine.style.height = lastElementPosition - marginHeight + \"px\";\n      } else if (scrollCenter > triggerPoint) {\n        technologiesLineOverlay.style.height = triggerPoint + windowHeight / 3;\n        +\"px\";\n\n        if (isUserScroll) {\n          setAnimation(skillsItemsSorted[i], \"add\", \"skills__technologies__wrapper__container--active\", 1000);\n          skillsItemsSorted[i].classList.add(\"skills__technologies__wrapper__container--active\");\n        } else {\n          skillsItemsSorted[i].classList.add(\"skills__technologies__wrapper__container--active\");\n        }\n\n        const index = setAnimation(technologiesLineOverlay, \"style\", \"\", 300, [{\n          key: \"height\",\n          value: newScrollPosition + \"px\"\n        }]);\n        const date = new Date();\n        skillsModule.changeState({ ...skillsModule.getState(),\n          animation: {\n            index,\n            date\n          }\n        });\n        if (i < last - 1) skillsModule.changeState({ ...skillsModule.getState(),\n          i: i + 1\n        });\n      } else {\n        technologiesLineOverlay.style.height = newScrollPosition + \"px\";\n        techonologiesLine.style.height = lineScroll + \"px\";\n      }\n    }\n  };\n\n  const hidenLastElement = ({\n    i,\n    scrollCenter\n  }) => {\n    if (i > 0) {\n      const previousElementCenter = skillsItemsSorted[i - 1].offsetTop + skillsItemsSorted[i - 1].offsetHeight / 2;\n\n      if (scrollCenter > previousElementCenter + windowHeight / 2.75) {\n        skillsItemsSorted[i - 1].classList.add(\"skills__technologies__wrapper__container--deactive\");\n      }\n    }\n  };\n\n  const addInterval = ({\n    isUserScroll,\n    scrollCenter,\n    lastElementPosition\n  }) => {\n    if (isUserScroll && scrollCenter < lastElementPosition) {\n      const autoScrollTimeout = setTimeout(() => {\n        techonologiesLine.classList.remove(\"skills__technologies__line--tranistion\");\n        const autoScroll = setInterval(() => {\n          technologiesEl.scrollBy({\n            top: 10,\n            behavior: \"smooth\"\n          });\n        }, 80);\n        skillsModule.changeState({ ...skillsModule.getState(),\n          autoScroll\n        });\n      }, 1200);\n      skillsModule.changeState({ ...skillsModule.getState(),\n        autoScrollTimeout\n      });\n    }\n\n    skillsModule.changeState({ ...skillsModule.getState(),\n      isUserScroll: false\n    });\n  };\n\n  technologiesEl.addEventListener(\"scroll\", e => {\n    const {\n      i,\n      animation,\n      isUserScroll,\n      last,\n      autoScrollTimeout,\n      autoScroll\n    } = skillsModule.getState();\n    const scrollCenter = windowHeight / 2 + e.target.scrollTop;\n    const lastElementPosition = skillsItemsSorted[last - 1].offsetTop;\n    clearAsyncFun({\n      animation,\n      isUserScroll,\n      autoScrollTimeout,\n      autoScroll\n    });\n    scrollSection({\n      scrollCenter,\n      lastElementPosition,\n      i,\n      last,\n      autoScrollTimeout,\n      e,\n      isUserScroll,\n      autoScroll\n    });\n    hidenLastElement({\n      i,\n      scrollCenter\n    });\n    addInterval({\n      isUserScroll,\n      scrollCenter,\n      lastElementPosition\n    });\n  });\n  document.addEventListener(\"scroll\", e => {\n    const {\n      isSectionStart,\n      animationStarted,\n      animationEnded\n    } = skillsModule.getState();\n    const {\n      scrollBack\n    } = _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState();\n\n    if (window.pageYOffset === technologiesStart && !isSectionStart && scrollBack) {\n      console.log(\"startujemy\");\n      startSection();\n      skillsModule.changeState({ ...skillsModule.getState(),\n        isSectionStart: true\n      });\n    }\n\n    if (window.pageYOffset === technologiesStart && animationStarted && !animationEnded) {\n      _globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].changeState({ ..._globalState__WEBPACK_IMPORTED_MODULE_0__[\"globalState\"].getState(),\n        allowScroll: false\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/skills.js?");

/***/ }),

/***/ "./src/scripts/start.js":
/*!******************************!*\
  !*** ./src/scripts/start.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"DOMContentLoaded\", () => {\n  const setAnimation = (el, type, className, time = 0) => {\n    switch (type) {\n      case \"add\":\n        {\n          setTimeout(() => {\n            el.classList.add(className);\n          }, time);\n          break;\n        }\n\n      case \"remove\":\n        {\n          setTimeout(() => {\n            el.classList.remove(className);\n          }, time);\n          break;\n        }\n    }\n  };\n\n  const contentLineEl = document.querySelector(\".start__line--content\");\n  const downbarLineEl = document.querySelector(\".start__line--downbar\");\n  const downbarTitleLineEl = document.querySelector(\".start__downbar__text__line--title\");\n  const downbarTitleEl = document.querySelector(\".start__downbar__text--title\");\n  const downbarAuthorLineEl = document.querySelector(\".start__downbar__text__line--author\");\n  const downbarAuthorEl = document.querySelector(\".start__downbar__text--author\");\n  const downbarTitleOverlayEl = document.querySelector(\".start__downbar__text__overlay--title\");\n  const downbarAuthorOverlayEl = document.querySelector(\".start__downbar__text__overlay--author\");\n  const downbarEls = document.querySelectorAll(\".start__downbar__container\");\n  const downbarTitleContainerEl = document.querySelector(\".start__downbar__container--title\");\n  setAnimation(contentLineEl, \"add\", \"height-max\", 2400);\n  setAnimation(contentLineEl, \"add\", `start__line--active`, 3000);\n  setAnimation(downbarLineEl, \"add\", \"start__line--downbar--active\", 3400);\n  setAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3500);\n  setAnimation(downbarTitleEl, \"add\", \"opacity-visible\", 3600);\n  setAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--draw-active\", 3700);\n  setAnimation(downbarAuthorEl, \"add\", \"opacity-visible\", 3800);\n  setAnimation(downbarLineEl, \"add\", \"start__line--active\", 4000);\n  setAnimation(downbarTitleLineEl, \"add\", \"start__downbar__text__line--active\", 4100);\n  setAnimation(downbarAuthorLineEl, \"add\", \"start__downbar__text__line--active\", 4300);\n  setAnimation(downbarTitleOverlayEl, \"add\", \"width-max\", 4500);\n  setAnimation(downbarAuthorOverlayEl, \"add\", \"width-max\", 4700);\n  setAnimation(downbarAuthorLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5800);\n  setAnimation(downbarTitleLineEl, \"remove\", \"start__downbar__text__line--draw-active\", 5900);\n  setAnimation(downbarLineEl, \"remove\", \"start__line--downbar--active\", 6000);\n  setAnimation(contentLineEl, \"remove\", \"height-max\", 6300);\n  downbarEls.forEach(item => {\n    setAnimation(item, \"add\", \"start__downbar__container--move\", 7000);\n  });\n  setAnimation(downbarAuthorEl, \"add\", \"visibility-hidden\", 7000);\n  setAnimation(downbarAuthorOverlayEl, \"add\", \"visibility-visble\", 7000);\n  setAnimation(downbarTitleContainerEl, \"add\", \"start__downbar__container--title--invisible\", 7000);\n  setTimeout(() => {\n    document.querySelectorAll(\".start__downbar__text__overlay__letter\").forEach((item, index) => {\n      shuffleText(item, index + 1);\n    });\n  }, 7500);\n\n  const shuffleText = (el, time) => {\n    const initialLetter = el.textContent;\n    const interval = setInterval(function shuffle() {\n      el.textContent = String.fromCharCode(33 + Math.round(Math.random() * 99));\n      return shuffle;\n    }(), 10);\n    setTimeout(() => {\n      clearInterval(interval);\n      el.textContent = initialLetter;\n\n      if (initialLetter === \"o\") {\n        document.querySelector(\".start__downbar__container--author\").classList.add(\"start__downbar__container--move-away\");\n        const children = document.querySelectorAll(\".start__content__p\");\n\n        for (let i = 0; i < children.length; i++) {\n          setTimeout(() => {\n            children[i].classList.add(\"start__content_p--move-up\");\n            return moveLeft(children[i], i);\n          }, 2200 + i * 200);\n        }\n\n        const moveLeft = (el, index) => {\n          setTimeout(() => {\n            el.classList.add(\"start__content_p--mov-left\");\n          }, 100);\n\n          if (index === 2) {\n            setTimeout(() => {\n              document.querySelector(\".start__icon\").classList.add(\"opacity-visible\");\n              const children = document.querySelectorAll(\".side-bar__icon\");\n\n              for (let i = 0; i < children.length; i++) {\n                displayIcon(children[i], i);\n              }\n            }, 150);\n          }\n        };\n      }\n    }, time * 250);\n  };\n\n  const displayIcon = (el, index) => {\n    setTimeout(() => {\n      el.classList.add(\"side-bar__icon--intitial\");\n    }, index * 250);\n  };\n});\n\n//# sourceURL=webpack:///./src/scripts/start.js?");

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