/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hero_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hero-slider */ "./src/js/components/hero-slider.js");
/* harmony import */ var _components_hero_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hero_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_photo_gallery_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/photo-gallery-slider */ "./src/js/components/photo-gallery-slider.js");
/* harmony import */ var _components_photo_gallery_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_photo_gallery_slider__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/components/hero-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/hero-slider.js ***!
  \******************************************/
/***/ (() => {



window.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.hero__slider');
  var slides = document.querySelectorAll('.hero__slide');
  var prev = document.querySelector('.hero__prev');
  var next = document.querySelector('.hero__next');
  var current = document.querySelector('.hero__current-slide');
  var total = document.querySelector('.hero__all-slides');
  var image = document.querySelector('.hero__wrapper');
  var offset = 0;
  var slideIndex = 1;

  if (slides.length < 10) {
    total.textContent = "0".concat(slides.length);
    current.textContent = "0".concat(slideIndex);
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  next.addEventListener('click', function () {
    if (offset == 770 * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += 770;
    }

    image.style.left = "-".concat(offset, "px");

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = "0".concat(slideIndex);
    } else {
      current.textContent = slideIndex;
    }
  });
  prev.addEventListener('click', function () {
    if (offset == 0) {
      offset = 770 * (slides.length - 1);
    } else {
      offset -= 770;
    }

    image.style.left = "-".concat(offset, "px");

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = "0".concat(slideIndex);
    } else {
      current.textContent = slideIndex;
    }
  });
});

/***/ }),

/***/ "./src/js/components/photo-gallery-slider.js":
/*!***************************************************!*\
  !*** ./src/js/components/photo-gallery-slider.js ***!
  \***************************************************/
/***/ (() => {



window.addEventListener('DOMContentLoaded', function () {
  var next = document.querySelector('.photo-gallery__next');
  next.addEventListener('click', function () {
    console.log('push');
  });
});

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
 // import './_vendor';

 // import './_functions';


window.addEventListener('DOMContentLoaded', function () {});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map