/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appendElementToParent.js":
/*!**************************************!*\
  !*** ./src/appendElementToParent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appendElementToParent = (parent, ...args) => {
  args.forEach((arg) => {
    parent.appendChild(arg.el);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendElementToParent);


/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elementFactory = (type, text, className) => {
  const el = document.createElement(type);
  el.textContent = text;
  if (className) {
    el.classList.add(`${className}`);
  }

  return {
    el,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementFactory);


/***/ }),

/***/ "./src/footerModule.js":
/*!*****************************!*\
  !*** ./src/footerModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendElementToParent */ "./src/appendElementToParent.js");



const displayNavBarDown = () => {
  const footer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('footer', '', '');
  const navDownHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', '', 'menu-down-home');
  const ulNavDownHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', '');
  const firstLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  const secondLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  const firstLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Social Media', 'down-left');
  const secondLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', Date.now(), 'down-right');

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(firstLi.el, firstLink);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(secondLi.el, secondLink);

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(ulNavDownHome.el, firstLi, secondLi);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(navDownHome.el, ulNavDownHome);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(footer.el, navDownHome);

  return footer.el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNavBarDown);


/***/ }),

/***/ "./src/homeModule.js":
/*!***************************!*\
  !*** ./src/homeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navModule */ "./src/navModule.js");
/* harmony import */ var _mainModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainModule */ "./src/mainModule.js");
/* harmony import */ var _footerModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerModule */ "./src/footerModule.js");




const content = document.getElementById('content');

const displayHomePage = () => {
  const nav = (0,_navModule__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const main = (0,_mainModule__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const footer = (0,_footerModule__WEBPACK_IMPORTED_MODULE_2__["default"])();

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHomePage);


/***/ }),

/***/ "./src/mainModule.js":
/*!***************************!*\
  !*** ./src/mainModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendElementToParent */ "./src/appendElementToParent.js");



const displayMainContent = () => {
  const mainContent = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('main', '', '');
  const contentLogo = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'main-logo');
  const contentSlogan = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'main-slogan');
  const contentImage = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'main-image');

  const logo = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'HEBE', '');

  const slogan = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'Vegetarian cuisine without', '');

  const landscapeImage = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'landscape-img');
  const portraitImage = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'portrait-img');

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(contentLogo.el, logo);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(contentSlogan.el, slogan);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(contentImage.el, landscapeImage, portraitImage);

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(mainContent.el, contentLogo, contentSlogan, contentImage);

  return mainContent.el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMainContent);


/***/ }),

/***/ "./src/navModule.js":
/*!**************************!*\
  !*** ./src/navModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendElementToParent */ "./src/appendElementToParent.js");



const displayNavBarUpper = () => {
  const navUpperHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', '', 'menu-upper-home');
  const ulNavUpperHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', '');
  const firstLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'first-li');
  const secondLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'second-li');
  const thirdLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'third-li');
  const firstLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Our menu', 'upper-left');
  const secondLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Reservations and orders', 'upper-center');
  const thirdLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Tasting menu', 'upper-right');

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(firstLi.el, firstLink);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(secondLi.el, secondLink);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(thirdLi.el, thirdLink);

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(ulNavUpperHome.el, firstLi, secondLi, thirdLi);

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(navUpperHome.el, ulNavUpperHome);

  return navUpperHome.el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNavBarUpper);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeModule */ "./src/homeModule.js");


(0,_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ05yQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pnQjtBQUNjO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQWM7QUFDL0Isc0JBQXNCLDJEQUFjO0FBQ3BDLHdCQUF3QiwyREFBYztBQUN0QyxrQkFBa0IsMkRBQWM7QUFDaEMsbUJBQW1CLDJEQUFjO0FBQ2pDLG9CQUFvQiwyREFBYztBQUNsQyxxQkFBcUIsMkRBQWM7QUFDbkM7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWTtBQUNDO0FBQ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNEQUFrQjtBQUNoQyxlQUFlLHVEQUFrQjtBQUNqQyxpQkFBaUIseURBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDYztBQUM1RDtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFjO0FBQ3BDLHNCQUFzQiwyREFBYztBQUNwQyx3QkFBd0IsMkRBQWM7QUFDdEMsdUJBQXVCLDJEQUFjO0FBQ3JDO0FBQ0EsZUFBZSwyREFBYztBQUM3QjtBQUNBLGlCQUFpQiwyREFBYztBQUMvQjtBQUNBLHlCQUF5QiwyREFBYztBQUN2Qyx3QkFBd0IsMkRBQWM7QUFDdEM7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJZO0FBQ2M7QUFDNUQ7QUFDQTtBQUNBLHVCQUF1QiwyREFBYztBQUNyQyx5QkFBeUIsMkRBQWM7QUFDdkMsa0JBQWtCLDJEQUFjO0FBQ2hDLG1CQUFtQiwyREFBYztBQUNqQyxrQkFBa0IsMkRBQWM7QUFDaEMsb0JBQW9CLDJEQUFjO0FBQ2xDLHFCQUFxQiwyREFBYztBQUNuQyxvQkFBb0IsMkRBQWM7QUFDbEM7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7OztVQ3hCbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUMzQztBQUNBLHVEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2FwcGVuZEVsZW1lbnRUb1BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Zvb3Rlck1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWFpbk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgPSAocGFyZW50LCAuLi5hcmdzKSA9PiB7XHJcbiAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcmcuZWwpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kRWxlbWVudFRvUGFyZW50O1xyXG4iLCJjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVsLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50RmFjdG9yeTtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlOYXZCYXJEb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXInLCAnJywgJycpO1xyXG4gIGNvbnN0IG5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS1kb3duLWhvbWUnKTtcclxuICBjb25zdCB1bE5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICcnKTtcclxuICBjb25zdCBzZWNvbmRMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnU29jaWFsIE1lZGlhJywgJ2Rvd24tbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsIERhdGUubm93KCksICdkb3duLXJpZ2h0Jyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChmaXJzdExpLmVsLCBmaXJzdExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChzZWNvbmRMaS5lbCwgc2Vjb25kTGluayk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh1bE5hdkRvd25Ib21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG5hdkRvd25Ib21lLmVsLCB1bE5hdkRvd25Ib21lKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZm9vdGVyLmVsLCBuYXZEb3duSG9tZSk7XHJcblxyXG4gIHJldHVybiBmb290ZXIuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TmF2QmFyRG93bjtcclxuIiwiaW1wb3J0IGRpc3BsYXlOYXZCYXJVcHBlciBmcm9tICcuL25hdk1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlOYXZCYXJEb3duIGZyb20gJy4vZm9vdGVyTW9kdWxlJztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgZGlzcGxheUhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRpc3BsYXlOYXZCYXJVcHBlcigpO1xyXG4gIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbkNvbnRlbnQoKTtcclxuICBjb25zdCBmb290ZXIgPSBkaXNwbGF5TmF2QmFyRG93bigpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZVBhZ2U7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TWFpbkNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnbWFpbicsICcnLCAnJyk7XHJcbiAgY29uc3QgY29udGVudExvZ28gPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLWxvZ28nKTtcclxuICBjb25zdCBjb250ZW50U2xvZ2FuID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1zbG9nYW4nKTtcclxuICBjb25zdCBjb250ZW50SW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLWltYWdlJyk7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBlbGVtZW50RmFjdG9yeSgnaDInLCAnSEVCRScsICcnKTtcclxuXHJcbiAgY29uc3Qgc2xvZ2FuID0gZWxlbWVudEZhY3RvcnkoJ2gzJywgJ1ZlZ2V0YXJpYW4gY3Vpc2luZSB3aXRob3V0JywgJycpO1xyXG5cclxuICBjb25zdCBsYW5kc2NhcGVJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ2xhbmRzY2FwZS1pbWcnKTtcclxuICBjb25zdCBwb3J0cmFpdEltYWdlID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAncG9ydHJhaXQtaW1nJyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50TG9nby5lbCwgbG9nbyk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRTbG9nYW4uZWwsIHNsb2dhbik7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRJbWFnZS5lbCwgbGFuZHNjYXBlSW1hZ2UsIHBvcnRyYWl0SW1hZ2UpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWFpbkNvbnRlbnQuZWwsIGNvbnRlbnRMb2dvLCBjb250ZW50U2xvZ2FuLCBjb250ZW50SW1hZ2UpO1xyXG5cclxuICByZXR1cm4gbWFpbkNvbnRlbnQuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWFpbkNvbnRlbnQ7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TmF2QmFyVXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2VXBwZXJIb21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS11cHBlci1ob21lJyk7XHJcbiAgY29uc3QgdWxOYXZVcHBlckhvbWUgPSBlbGVtZW50RmFjdG9yeSgndWwnLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ2ZpcnN0LWxpJyk7XHJcbiAgY29uc3Qgc2Vjb25kTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3NlY29uZC1saScpO1xyXG4gIGNvbnN0IHRoaXJkTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3RoaXJkLWxpJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnT3VyIG1lbnUnLCAndXBwZXItbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdSZXNlcnZhdGlvbnMgYW5kIG9yZGVycycsICd1cHBlci1jZW50ZXInKTtcclxuICBjb25zdCB0aGlyZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdUYXN0aW5nIG1lbnUnLCAndXBwZXItcmlnaHQnKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZpcnN0TGkuZWwsIGZpcnN0TGluayk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHNlY29uZExpLmVsLCBzZWNvbmRMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodGhpcmRMaS5lbCwgdGhpcmRMaW5rKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHVsTmF2VXBwZXJIb21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSwgdGhpcmRMaSk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChuYXZVcHBlckhvbWUuZWwsIHVsTmF2VXBwZXJIb21lKTtcclxuXHJcbiAgcmV0dXJuIG5hdlVwcGVySG9tZS5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXZCYXJVcHBlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhvbWVQYWdlIGZyb20gJy4vaG9tZU1vZHVsZSc7XHJcblxyXG5kaXNwbGF5SG9tZVBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9