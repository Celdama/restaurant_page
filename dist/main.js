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
  const daysFromNow = () => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return `${month + 1}/${day}/${year}`;
  };

  const footer = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('footer', '', 'footer');
  const navDownHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', '', 'menu-down-home');
  const ulNavDownHome = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', '');
  const firstLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  const secondLi = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('li', '', '');
  const firstLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Social Media', 'down-left');
  const secondLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', daysFromNow(), 'down-right');

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
/* harmony import */ var _reservationsModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservationsModule */ "./src/modules/reservationsModule.js");





const content = document.getElementById('content');

const displayHomePage = () => {
  const reservation = (0,_reservationsModule__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const nav = (0,_navModule__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const main = (0,_mainModule__WEBPACK_IMPORTED_MODULE_1__["default"])().mainContent.el;
  const footer = (0,_footerModule__WEBPACK_IMPORTED_MODULE_2__["default"])();

  content.appendChild(reservation);
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

  const slogan = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'Vegetarian cuisine without dogmas or complexes.', '');

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
    contentLogo,
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
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appendElementToParent */ "./src/appendElementToParent.js");
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _mainModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainModule */ "./src/modules/mainModule.js");




const foods = [
  ['Snacks', 'Sopa Pho', 'Qüorn and curry croquette'],
  ['Starters', 'Sweet potato carpaccio, red onion, feta cheese, fried corn, black olives, yuzu vinaigrette, orange powder and watercress', 'Artichoke heart stuffed with vegan foie gras and hollandaise sauce'],
  ['Principal', 'Green curry rice with coriander and lime', 'Raviolis de borraja rellenos de calabaza con mantequilla de salvia y limón'],
  ['Desserts', 'Black beer and liquorice sponge cake, homemade quince jelly, almond ice cream and white chocolate soup.', 'Spiced mango and passion fruit soup'],
];

const displayOurMenu = () => {
  const wrapperMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('div', '', 'wrapper-menu');
  const priceMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('p', '23,00$ per person', 'price-menu');
  const spanMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('span', 'MENU', 'span-menu');
  const titleMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('h1', 'Tasting', 'title-menu');
  const imgMenu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('div', '', 'img-menu');
  const menu = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('div', '', 'menu');

  const logo = (0,_mainModule__WEBPACK_IMPORTED_MODULE_2__["default"])().contentLogo;

  logo.el.classList.add('menu-logo');

  foods.forEach((food) => {
    const menuSection = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('h2', `${food[0]}`, 'menu-section');
    const menuDescription = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('ul', '', 'menu-description');
    const firstChoice = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('li', `${food[1]}`, 'choice-menu');
    const secondChoice = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('li', `${food[2]}`, 'choice-menu');

    (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_0__["default"])(menuDescription.el, firstChoice, secondChoice);

    (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_0__["default"])(menu.el, menuSection, menuDescription);
  });

  const scrollRotate = () => {
    logo.el.style.transform = `rotate(${window.pageYOffset / 6}deg)`;
  };

  window.onscroll = () => {
    scrollRotate();
  };

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperMenu.el, priceMenu, spanMenu, titleMenu, imgMenu, menu, logo);

  return wrapperMenu.el;
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
  const secondLink = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'Reservations', 'upper-center');
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
/* harmony import */ var _appendElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appendElementToParent */ "./src/appendElementToParent.js");



const reservations = [
  ['Reservations', 'Book your table online or by calling 976 35 90 11 from 10:00h to 15:30h.'],
  ['Take me away', 'Order your meal at Zámpate and receive it wherever you want (midday Mon-Sat, evenings Thu-Sat). Or order it on 976 35 90 11 and come and pick it up at our restaurant.'],
];

const displayOurReservation = () => {
  const wrapperReservation = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('header', '', 'wrapper-reservation');
  const contentReservation = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'content-reservation');
  // const titleReservation = elementFactory('h1', 'Reservations', 'title-reservation');
  const closeBtn = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'X', 'close-reservation-btn');

  reservations.forEach((reservation) => {
    const titleReservation = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', `${reservation[0]}`, 'title-reservation');
    const describeReservation = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('p', `${reservation[1]}`, 'describe-reservation');

    (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(contentReservation.el, titleReservation, describeReservation);
  });

  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(contentReservation.el, closeBtn);
  (0,_appendElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapperReservation.el, contentReservation);

  return wrapperReservation.el;
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
/* harmony import */ var _modules_mainModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mainModule */ "./src/modules/mainModule.js");




(0,_modules_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"])();

const firstNavLink = document.querySelector('.upper-left');
const secondNavLink = document.querySelector('.upper-center');
const thirdNavLink = document.querySelector('.upper-right');
const mainContent = document.querySelector('.main-content');
const reservationContent = document.querySelector('.wrapper-reservation');
const closeReservationContent = document.querySelector('.close-reservation-btn');

const home = (0,_modules_mainModule__WEBPACK_IMPORTED_MODULE_2__["default"])().wrapperContent.el;
const menu = (0,_modules_menuModule__WEBPACK_IMPORTED_MODULE_1__["default"])();

firstNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(home);
});

secondNavLink.addEventListener('click', () => {
  reservationContent.style.top = '0%';
});

closeReservationContent.addEventListener('click', () => {
  reservationContent.style.top = '-46%';
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQy9CLGFBQWEsK0RBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYXBwZW5kRWxlbWVudFRvUGFyZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9lbGVtZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9mb290ZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvaG9tZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tYWluTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbmF2TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uc01vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwZW5kRWxlbWVudFRvUGFyZW50ID0gKHBhcmVudCwgLi4uYXJncykgPT4ge1xyXG4gIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnLmVsKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEVsZW1lbnRUb1BhcmVudDtcclxuIiwiY29uc3QgZWxlbWVudEZhY3RvcnkgPSAodHlwZSwgdGV4dCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudEZhY3Rvcnk7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlOYXZCYXJEb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRheXNGcm9tTm93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXkgPSBkLmdldERhdGUoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiBgJHttb250aCArIDF9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBlbGVtZW50RmFjdG9yeSgnZm9vdGVyJywgJycsICdmb290ZXInKTtcclxuICBjb25zdCBuYXZEb3duSG9tZSA9IGVsZW1lbnRGYWN0b3J5KCduYXYnLCAnJywgJ21lbnUtZG93bi1ob21lJyk7XHJcbiAgY29uc3QgdWxOYXZEb3duSG9tZSA9IGVsZW1lbnRGYWN0b3J5KCd1bCcsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnJyk7XHJcbiAgY29uc3Qgc2Vjb25kTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1NvY2lhbCBNZWRpYScsICdkb3duLWxlZnQnKTtcclxuICBjb25zdCBzZWNvbmRMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCBkYXlzRnJvbU5vdygpLCAnZG93bi1yaWdodCcpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZmlyc3RMaS5lbCwgZmlyc3RMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoc2Vjb25kTGkuZWwsIHNlY29uZExpbmspO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodWxOYXZEb3duSG9tZS5lbCwgZmlyc3RMaSwgc2Vjb25kTGkpO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChuYXZEb3duSG9tZS5lbCwgdWxOYXZEb3duSG9tZSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZvb3Rlci5lbCwgbmF2RG93bkhvbWUpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdkJhckRvd247XHJcbiIsImltcG9ydCBkaXNwbGF5TmF2QmFyVXBwZXIgZnJvbSAnLi9uYXZNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU1haW5Db250ZW50IGZyb20gJy4vbWFpbk1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TmF2QmFyRG93biBmcm9tICcuL2Zvb3Rlck1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5T3VyUmVzZXJ2YXRpb24gZnJvbSAnLi9yZXNlcnZhdGlvbnNNb2R1bGUnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5jb25zdCBkaXNwbGF5SG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb24gPSBkaXNwbGF5T3VyUmVzZXJ2YXRpb24oKTtcclxuICBjb25zdCBuYXYgPSBkaXNwbGF5TmF2QmFyVXBwZXIoKTtcclxuICBjb25zdCBtYWluID0gZGlzcGxheU1haW5Db250ZW50KCkubWFpbkNvbnRlbnQuZWw7XHJcbiAgY29uc3QgZm9vdGVyID0gZGlzcGxheU5hdkJhckRvd24oKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TWFpbkNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnbWFpbicsICcnLCAnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3Qgd3JhcHBlckNvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd3cmFwcGVyLWNvbnRlbnQnKTtcclxuICBjb25zdCBjb250ZW50TG9nbyA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4tbG9nbycpO1xyXG4gIGNvbnN0IGNvbnRlbnRTbG9nYW4gPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLXNsb2dhbicpO1xyXG4gIGNvbnN0IGNvbnRlbnRJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4taW1hZ2UnKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGVsZW1lbnRGYWN0b3J5KCdoMicsICdIRUJFJywgJycpO1xyXG5cclxuICBjb25zdCBzbG9nYW4gPSBlbGVtZW50RmFjdG9yeSgnaDMnLCAnVmVnZXRhcmlhbiBjdWlzaW5lIHdpdGhvdXQgZG9nbWFzIG9yIGNvbXBsZXhlcy4nLCAnJyk7XHJcblxyXG4gIGNvbnN0IGxhbmRzY2FwZUltYWdlID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbGFuZHNjYXBlLWltZycpO1xyXG4gIGNvbnN0IHBvcnRyYWl0SW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdwb3J0cmFpdC1pbWcnKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRMb2dvLmVsLCBsb2dvKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudFNsb2dhbi5lbCwgc2xvZ2FuKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudEltYWdlLmVsLCBsYW5kc2NhcGVJbWFnZSwgcG9ydHJhaXRJbWFnZSk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh3cmFwcGVyQ29udGVudC5lbCwgY29udGVudExvZ28sIGNvbnRlbnRTbG9nYW4sIGNvbnRlbnRJbWFnZSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG1haW5Db250ZW50LmVsLCB3cmFwcGVyQ29udGVudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYWluQ29udGVudCxcclxuICAgIHdyYXBwZXJDb250ZW50LFxyXG4gICAgY29udGVudExvZ28sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNYWluQ29udGVudDtcclxuIiwiaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5pbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgZGlzcGxheU1haW5Db250ZW50IGZyb20gJy4vbWFpbk1vZHVsZSc7XHJcblxyXG5jb25zdCBmb29kcyA9IFtcclxuICBbJ1NuYWNrcycsICdTb3BhIFBobycsICdRw7xvcm4gYW5kIGN1cnJ5IGNyb3F1ZXR0ZSddLFxyXG4gIFsnU3RhcnRlcnMnLCAnU3dlZXQgcG90YXRvIGNhcnBhY2NpbywgcmVkIG9uaW9uLCBmZXRhIGNoZWVzZSwgZnJpZWQgY29ybiwgYmxhY2sgb2xpdmVzLCB5dXp1IHZpbmFpZ3JldHRlLCBvcmFuZ2UgcG93ZGVyIGFuZCB3YXRlcmNyZXNzJywgJ0FydGljaG9rZSBoZWFydCBzdHVmZmVkIHdpdGggdmVnYW4gZm9pZSBncmFzIGFuZCBob2xsYW5kYWlzZSBzYXVjZSddLFxyXG4gIFsnUHJpbmNpcGFsJywgJ0dyZWVuIGN1cnJ5IHJpY2Ugd2l0aCBjb3JpYW5kZXIgYW5kIGxpbWUnLCAnUmF2aW9saXMgZGUgYm9ycmFqYSByZWxsZW5vcyBkZSBjYWxhYmF6YSBjb24gbWFudGVxdWlsbGEgZGUgc2FsdmlhIHkgbGltw7NuJ10sXHJcbiAgWydEZXNzZXJ0cycsICdCbGFjayBiZWVyIGFuZCBsaXF1b3JpY2Ugc3BvbmdlIGNha2UsIGhvbWVtYWRlIHF1aW5jZSBqZWxseSwgYWxtb25kIGljZSBjcmVhbSBhbmQgd2hpdGUgY2hvY29sYXRlIHNvdXAuJywgJ1NwaWNlZCBtYW5nbyBhbmQgcGFzc2lvbiBmcnVpdCBzb3VwJ10sXHJcbl07XHJcblxyXG5jb25zdCBkaXNwbGF5T3VyTWVudSA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3dyYXBwZXItbWVudScpO1xyXG4gIGNvbnN0IHByaWNlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdwJywgJzIzLDAwJCBwZXIgcGVyc29uJywgJ3ByaWNlLW1lbnUnKTtcclxuICBjb25zdCBzcGFuTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdzcGFuJywgJ01FTlUnLCAnc3Bhbi1tZW51Jyk7XHJcbiAgY29uc3QgdGl0bGVNZW51ID0gZWxlbWVudEZhY3RvcnkoJ2gxJywgJ1Rhc3RpbmcnLCAndGl0bGUtbWVudScpO1xyXG4gIGNvbnN0IGltZ01lbnUgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdpbWctbWVudScpO1xyXG4gIGNvbnN0IG1lbnUgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtZW51Jyk7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkaXNwbGF5TWFpbkNvbnRlbnQoKS5jb250ZW50TG9nbztcclxuXHJcbiAgbG9nby5lbC5jbGFzc0xpc3QuYWRkKCdtZW51LWxvZ28nKTtcclxuXHJcbiAgZm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBlbGVtZW50RmFjdG9yeSgnaDInLCBgJHtmb29kWzBdfWAsICdtZW51LXNlY3Rpb24nKTtcclxuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCd1bCcsICcnLCAnbWVudS1kZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZmlyc3RDaG9pY2UgPSBlbGVtZW50RmFjdG9yeSgnbGknLCBgJHtmb29kWzFdfWAsICdjaG9pY2UtbWVudScpO1xyXG4gICAgY29uc3Qgc2Vjb25kQ2hvaWNlID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgYCR7Zm9vZFsyXX1gLCAnY2hvaWNlLW1lbnUnKTtcclxuXHJcbiAgICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWVudURlc2NyaXB0aW9uLmVsLCBmaXJzdENob2ljZSwgc2Vjb25kQ2hvaWNlKTtcclxuXHJcbiAgICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWVudS5lbCwgbWVudVNlY3Rpb24sIG1lbnVEZXNjcmlwdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFJvdGF0ZSA9ICgpID0+IHtcclxuICAgIGxvZ28uZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3dpbmRvdy5wYWdlWU9mZnNldCAvIDZ9ZGVnKWA7XHJcbiAgfTtcclxuXHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsUm90YXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHdyYXBwZXJNZW51LmVsLCBwcmljZU1lbnUsIHNwYW5NZW51LCB0aXRsZU1lbnUsIGltZ01lbnUsIG1lbnUsIGxvZ28pO1xyXG5cclxuICByZXR1cm4gd3JhcHBlck1lbnUuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5T3VyTWVudTtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5cclxuY29uc3QgZGlzcGxheU5hdkJhclVwcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdlVwcGVySG9tZSA9IGVsZW1lbnRGYWN0b3J5KCduYXYnLCAnJywgJ21lbnUtdXBwZXItaG9tZScpO1xyXG4gIGNvbnN0IHVsTmF2VXBwZXJIb21lID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICdmaXJzdC1saScpO1xyXG4gIGNvbnN0IHNlY29uZExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICdzZWNvbmQtbGknKTtcclxuICBjb25zdCB0aGlyZExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICd0aGlyZC1saScpO1xyXG4gIGNvbnN0IGZpcnN0TGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ0hvbWUnLCAndXBwZXItbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdSZXNlcnZhdGlvbnMnLCAndXBwZXItY2VudGVyJyk7XHJcbiAgY29uc3QgdGhpcmRMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnVGFzdGluZyBtZW51JywgJ3VwcGVyLXJpZ2h0Jyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChmaXJzdExpLmVsLCBmaXJzdExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChzZWNvbmRMaS5lbCwgc2Vjb25kTGluayk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHRoaXJkTGkuZWwsIHRoaXJkTGluayk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh1bE5hdlVwcGVySG9tZS5lbCwgZmlyc3RMaSwgc2Vjb25kTGksIHRoaXJkTGkpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobmF2VXBwZXJIb21lLmVsLCB1bE5hdlVwcGVySG9tZSk7XHJcblxyXG4gIHJldHVybiBuYXZVcHBlckhvbWUuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TmF2QmFyVXBwZXI7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IHJlc2VydmF0aW9ucyA9IFtcclxuICBbJ1Jlc2VydmF0aW9ucycsICdCb29rIHlvdXIgdGFibGUgb25saW5lIG9yIGJ5IGNhbGxpbmcgOTc2IDM1IDkwIDExIGZyb20gMTA6MDBoIHRvIDE1OjMwaC4nXSxcclxuICBbJ1Rha2UgbWUgYXdheScsICdPcmRlciB5b3VyIG1lYWwgYXQgWsOhbXBhdGUgYW5kIHJlY2VpdmUgaXQgd2hlcmV2ZXIgeW91IHdhbnQgKG1pZGRheSBNb24tU2F0LCBldmVuaW5ncyBUaHUtU2F0KS4gT3Igb3JkZXIgaXQgb24gOTc2IDM1IDkwIDExIGFuZCBjb21lIGFuZCBwaWNrIGl0IHVwIGF0IG91ciByZXN0YXVyYW50LiddLFxyXG5dO1xyXG5cclxuY29uc3QgZGlzcGxheU91clJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXJSZXNlcnZhdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdoZWFkZXInLCAnJywgJ3dyYXBwZXItcmVzZXJ2YXRpb24nKTtcclxuICBjb25zdCBjb250ZW50UmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdjb250ZW50LXJlc2VydmF0aW9uJyk7XHJcbiAgLy8gY29uc3QgdGl0bGVSZXNlcnZhdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdoMScsICdSZXNlcnZhdGlvbnMnLCAndGl0bGUtcmVzZXJ2YXRpb24nKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnWCcsICdjbG9zZS1yZXNlcnZhdGlvbi1idG4nKTtcclxuXHJcbiAgcmVzZXJ2YXRpb25zLmZvckVhY2goKHJlc2VydmF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2gyJywgYCR7cmVzZXJ2YXRpb25bMF19YCwgJ3RpdGxlLXJlc2VydmF0aW9uJyk7XHJcbiAgICBjb25zdCBkZXNjcmliZVJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ3AnLCBgJHtyZXNlcnZhdGlvblsxXX1gLCAnZGVzY3JpYmUtcmVzZXJ2YXRpb24nKTtcclxuXHJcbiAgICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudFJlc2VydmF0aW9uLmVsLCB0aXRsZVJlc2VydmF0aW9uLCBkZXNjcmliZVJlc2VydmF0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRSZXNlcnZhdGlvbi5lbCwgY2xvc2VCdG4pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh3cmFwcGVyUmVzZXJ2YXRpb24uZWwsIGNvbnRlbnRSZXNlcnZhdGlvbik7XHJcblxyXG4gIHJldHVybiB3cmFwcGVyUmVzZXJ2YXRpb24uZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5T3VyUmVzZXJ2YXRpb247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlIb21lUGFnZSBmcm9tICcuL21vZHVsZXMvaG9tZU1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5T3VyTWVudSBmcm9tICcuL21vZHVsZXMvbWVudU1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL21haW5Nb2R1bGUnO1xyXG5cclxuZGlzcGxheUhvbWVQYWdlKCk7XHJcblxyXG5jb25zdCBmaXJzdE5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBwZXItbGVmdCcpO1xyXG5jb25zdCBzZWNvbmROYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLWNlbnRlcicpO1xyXG5jb25zdCB0aGlyZE5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBwZXItcmlnaHQnKTtcclxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XHJcbmNvbnN0IHJlc2VydmF0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyLXJlc2VydmF0aW9uJyk7XHJcbmNvbnN0IGNsb3NlUmVzZXJ2YXRpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXJlc2VydmF0aW9uLWJ0bicpO1xyXG5cclxuY29uc3QgaG9tZSA9IGRpc3BsYXlNYWluQ29udGVudCgpLndyYXBwZXJDb250ZW50LmVsO1xyXG5jb25zdCBtZW51ID0gZGlzcGxheU91ck1lbnUoKTtcclxuXHJcbmZpcnN0TmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59KTtcclxuXHJcbnNlY29uZE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXJ2YXRpb25Db250ZW50LnN0eWxlLnRvcCA9ICcwJSc7XHJcbn0pO1xyXG5cclxuY2xvc2VSZXNlcnZhdGlvbkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXJ2YXRpb25Db250ZW50LnN0eWxlLnRvcCA9ICctNDYlJztcclxufSk7XHJcblxyXG50aGlyZE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==