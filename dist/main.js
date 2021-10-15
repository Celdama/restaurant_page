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

/***/ "./src/modules/footerModule.js":
/*!*************************************!*\
  !*** ./src/modules/footerModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appendElementToParent */ "./src/appendElementToParent.js");



const displayNavBarDown = () => {
  const footer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('footer', '', 'footer');
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

/***/ "./src/modules/homeModule.js":
/*!***********************************!*\
  !*** ./src/modules/homeModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navModule */ "./src/modules/navModule.js");
/* harmony import */ var _mainModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainModule */ "./src/modules/mainModule.js");
/* harmony import */ var _footerModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footerModule */ "./src/modules/footerModule.js");




const content = document.getElementById('content');

const displayHomePage = () => {
  const nav = (0,_navModule__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const main = (0,_mainModule__WEBPACK_IMPORTED_MODULE_1__["default"])().mainContent.el;
  const footer = (0,_footerModule__WEBPACK_IMPORTED_MODULE_2__["default"])();

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHomePage);


/***/ }),

/***/ "./src/modules/mainModule.js":
/*!***********************************!*\
  !*** ./src/modules/mainModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appendElementToParent */ "./src/appendElementToParent.js");



const displayMainContent = () => {
  const mainContent = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('main', '', 'main-content');
  const wrapperContent = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'wrapper-content');
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

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapperContent.el, contentLogo, contentSlogan, contentImage);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(mainContent.el, wrapperContent);

  return {
    mainContent,
    wrapperContent,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMainContent);


/***/ }),

/***/ "./src/modules/menuModule.js":
/*!***********************************!*\
  !*** ./src/modules/menuModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");


const displayOurMenu = () => {
  const titleMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Menu', 'title');

  return titleMenu.el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayOurMenu);


/***/ }),

/***/ "./src/modules/navModule.js":
/*!**********************************!*\
  !*** ./src/modules/navModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appendElementToParent */ "./src/appendElementToParent.js");



const displayNavBarUpper = () => {
  const navUpperHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', '', 'menu-upper-home');
  const ulNavUpperHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', '');
  const firstLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'first-li');
  const secondLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'second-li');
  const thirdLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', 'third-li');
  const firstLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Home', 'upper-left');
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


/***/ }),

/***/ "./src/modules/reservationsModule.js":
/*!*******************************************!*\
  !*** ./src/modules/reservationsModule.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");


const displayOurReservation = () => {
  const titleReservation = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Reservations pages', 'title');

  return titleReservation.el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayOurReservation);


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
/* harmony import */ var _modules_homeModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homeModule */ "./src/modules/homeModule.js");
/* harmony import */ var _modules_menuModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuModule */ "./src/modules/menuModule.js");
/* harmony import */ var _modules_reservationsModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reservationsModule */ "./src/modules/reservationsModule.js");
/* harmony import */ var _modules_mainModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainModule */ "./src/modules/mainModule.js");





(0,_modules_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"])('home');

const firstNavLink = document.querySelector('.upper-left');
const secondNavLink = document.querySelector('.upper-center');
const thirdNavLink = document.querySelector('.upper-right');
const mainContent = document.querySelector('.main-content');

const home = (0,_modules_mainModule__WEBPACK_IMPORTED_MODULE_3__["default"])().wrapperContent.el;
const reservation = (0,_modules_reservationsModule__WEBPACK_IMPORTED_MODULE_2__["default"])();
const menu = (0,_modules_menuModule__WEBPACK_IMPORTED_MODULE_1__["default"])();

firstNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(home);
});

secondNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(reservation);
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDRDtBQUNlO0FBQ1g7QUFDdEQ7QUFDQSwrREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBQWtCO0FBQy9CLG9CQUFvQix1RUFBcUI7QUFDekMsYUFBYSwrREFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYXBwZW5kRWxlbWVudFRvUGFyZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9mb290ZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvaG9tZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tYWluTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbmF2TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uc01vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwZW5kRWxlbWVudFRvUGFyZW50ID0gKHBhcmVudCwgLi4uYXJncykgPT4ge1xyXG4gIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnLmVsKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEVsZW1lbnRUb1BhcmVudDtcclxuIiwiY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgdGV4dCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudEZhY3Rvcnk7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlOYXZCYXJEb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXInLCAnJywgJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IG5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS1kb3duLWhvbWUnKTtcclxuICBjb25zdCB1bE5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICcnKTtcclxuICBjb25zdCBzZWNvbmRMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnU29jaWFsIE1lZGlhJywgJ2Rvd24tbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsIERhdGUubm93KCksICdkb3duLXJpZ2h0Jyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChmaXJzdExpLmVsLCBmaXJzdExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChzZWNvbmRMaS5lbCwgc2Vjb25kTGluayk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh1bE5hdkRvd25Ib21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG5hdkRvd25Ib21lLmVsLCB1bE5hdkRvd25Ib21lKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZm9vdGVyLmVsLCBuYXZEb3duSG9tZSk7XHJcblxyXG4gIHJldHVybiBmb290ZXIuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TmF2QmFyRG93bjtcclxuIiwiaW1wb3J0IGRpc3BsYXlOYXZCYXJVcHBlciBmcm9tICcuL25hdk1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlOYXZCYXJEb3duIGZyb20gJy4vZm9vdGVyTW9kdWxlJztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgZGlzcGxheUhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRpc3BsYXlOYXZCYXJVcHBlcigpO1xyXG4gIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbkNvbnRlbnQoKS5tYWluQ29udGVudC5lbDtcclxuICBjb25zdCBmb290ZXIgPSBkaXNwbGF5TmF2QmFyRG93bigpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZVBhZ2U7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlNYWluQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdtYWluJywgJycsICdtYWluLWNvbnRlbnQnKTtcclxuICBjb25zdCB3cmFwcGVyQ29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3dyYXBwZXItY29udGVudCcpO1xyXG4gIGNvbnN0IGNvbnRlbnRMb2dvID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1sb2dvJyk7XHJcbiAgY29uc3QgY29udGVudFNsb2dhbiA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4tc2xvZ2FuJyk7XHJcbiAgY29uc3QgY29udGVudEltYWdlID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1pbWFnZScpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZWxlbWVudEZhY3RvcnkoJ2gyJywgJ0hFQkUnLCAnJyk7XHJcblxyXG4gIGNvbnN0IHNsb2dhbiA9IGVsZW1lbnRGYWN0b3J5KCdoMycsICdWZWdldGFyaWFuIGN1aXNpbmUgd2l0aG91dCcsICcnKTtcclxuXHJcbiAgY29uc3QgbGFuZHNjYXBlSW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdsYW5kc2NhcGUtaW1nJyk7XHJcbiAgY29uc3QgcG9ydHJhaXRJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3BvcnRyYWl0LWltZycpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudExvZ28uZWwsIGxvZ28pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50U2xvZ2FuLmVsLCBzbG9nYW4pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50SW1hZ2UuZWwsIGxhbmRzY2FwZUltYWdlLCBwb3J0cmFpdEltYWdlKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHdyYXBwZXJDb250ZW50LmVsLCBjb250ZW50TG9nbywgY29udGVudFNsb2dhbiwgY29udGVudEltYWdlKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWFpbkNvbnRlbnQuZWwsIHdyYXBwZXJDb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1haW5Db250ZW50LFxyXG4gICAgd3JhcHBlckNvbnRlbnQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNYWluQ29udGVudDtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuXHJcbmNvbnN0IGRpc3BsYXlPdXJNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdoMScsICdNZW51JywgJ3RpdGxlJyk7XHJcblxyXG4gIHJldHVybiB0aXRsZU1lbnUuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5T3VyTWVudTtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5cclxuY29uc3QgZGlzcGxheU5hdkJhclVwcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdlVwcGVySG9tZSA9IGVsZW1lbnRGYWN0b3J5KCduYXYnLCAnJywgJ21lbnUtdXBwZXItaG9tZScpO1xyXG4gIGNvbnN0IHVsTmF2VXBwZXJIb21lID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICdmaXJzdC1saScpO1xyXG4gIGNvbnN0IHNlY29uZExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICdzZWNvbmQtbGknKTtcclxuICBjb25zdCB0aGlyZExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICd0aGlyZC1saScpO1xyXG4gIGNvbnN0IGZpcnN0TGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ0hvbWUnLCAndXBwZXItbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdSZXNlcnZhdGlvbnMgYW5kIG9yZGVycycsICd1cHBlci1jZW50ZXInKTtcclxuICBjb25zdCB0aGlyZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdUYXN0aW5nIG1lbnUnLCAndXBwZXItcmlnaHQnKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZpcnN0TGkuZWwsIGZpcnN0TGluayk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHNlY29uZExpLmVsLCBzZWNvbmRMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodGhpcmRMaS5lbCwgdGhpcmRMaW5rKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHVsTmF2VXBwZXJIb21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSwgdGhpcmRMaSk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChuYXZVcHBlckhvbWUuZWwsIHVsTmF2VXBwZXJIb21lKTtcclxuXHJcbiAgcmV0dXJuIG5hdlVwcGVySG9tZS5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXZCYXJVcHBlcjtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuXHJcbmNvbnN0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZVJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2gxJywgJ1Jlc2VydmF0aW9ucyBwYWdlcycsICd0aXRsZScpO1xyXG5cclxuICByZXR1cm4gdGl0bGVSZXNlcnZhdGlvbi5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhvbWVQYWdlIGZyb20gJy4vbW9kdWxlcy9ob21lTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlPdXJNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51TW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbiBmcm9tICcuL21vZHVsZXMvcmVzZXJ2YXRpb25zTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlNYWluQ29udGVudCBmcm9tICcuL21vZHVsZXMvbWFpbk1vZHVsZSc7XHJcblxyXG5kaXNwbGF5SG9tZVBhZ2UoJ2hvbWUnKTtcclxuXHJcbmNvbnN0IGZpcnN0TmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1sZWZ0Jyk7XHJcbmNvbnN0IHNlY29uZE5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBwZXItY2VudGVyJyk7XHJcbmNvbnN0IHRoaXJkTmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1yaWdodCcpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGhvbWUgPSBkaXNwbGF5TWFpbkNvbnRlbnQoKS53cmFwcGVyQ29udGVudC5lbDtcclxuY29uc3QgcmVzZXJ2YXRpb24gPSBkaXNwbGF5T3VyUmVzZXJ2YXRpb24oKTtcclxuY29uc3QgbWVudSA9IGRpc3BsYXlPdXJNZW51KCk7XHJcblxyXG5maXJzdE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxufSk7XHJcblxyXG5zZWNvbmROYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb24pO1xyXG59KTtcclxuXHJcbnRoaXJkTmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9