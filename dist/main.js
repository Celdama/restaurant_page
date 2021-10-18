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
const landscapeImg = document.querySelector('.landscape-img');
const portraitImg = document.querySelector('.portrait-img');

const landscapeURLs = [
  'https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1581375279144-bb3b381c7046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  'https://images.unsplash.com/photo-1581375221876-8f287f7cd2cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1581375383680-7101dc5cb5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1539&q=80',
];

const portraitURLs = [
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
  'https://images.unsplash.com/photo-1517355806904-a4458978d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
  'https://images.unsplash.com/photo-1531171421955-98c62fcd562f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80',
  'https://images.unsplash.com/photo-1531171491537-435164f3d486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1622219770326-d72a22862986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
];

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  landscapeImg.style.background = `url("${landscapeURLs[random]}") no-repeat center`;
}, 5000);

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  portraitImg.style.background = `url("${portraitURLs[random]}") no-repeat center`;
}, 6000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFCQUFxQjtBQUM5RCxDQUFDO0FBQ0Q7QUFDQSxhQUFhLCtEQUFrQjtBQUMvQixhQUFhLCtEQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2FwcGVuZEVsZW1lbnRUb1BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvZm9vdGVyTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbWFpbk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tZW51TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL25hdk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnNNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCA9IChwYXJlbnQsIC4uLmFyZ3MpID0+IHtcclxuICBhcmdzLmZvckVhY2goKGFyZykgPT4ge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGFyZy5lbCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRFbGVtZW50VG9QYXJlbnQ7XHJcbiIsImNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIHRleHQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBlbC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TmF2QmFyRG93biA9ICgpID0+IHtcclxuICBjb25zdCBkYXlzRnJvbU5vdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gYCR7bW9udGggKyAxfS8ke2RheX0vJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9vdGVyID0gZWxlbWVudEZhY3RvcnkoJ2Zvb3RlcicsICcnLCAnZm9vdGVyJyk7XHJcbiAgY29uc3QgbmF2RG93bkhvbWUgPSBlbGVtZW50RmFjdG9yeSgnbmF2JywgJycsICdtZW51LWRvd24taG9tZScpO1xyXG4gIGNvbnN0IHVsTmF2RG93bkhvbWUgPSBlbGVtZW50RmFjdG9yeSgndWwnLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJycpO1xyXG4gIGNvbnN0IHNlY29uZExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdTb2NpYWwgTWVkaWEnLCAnZG93bi1sZWZ0Jyk7XHJcbiAgY29uc3Qgc2Vjb25kTGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgZGF5c0Zyb21Ob3coKSwgJ2Rvd24tcmlnaHQnKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZpcnN0TGkuZWwsIGZpcnN0TGluayk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHNlY29uZExpLmVsLCBzZWNvbmRMaW5rKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHVsTmF2RG93bkhvbWUuZWwsIGZpcnN0TGksIHNlY29uZExpKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobmF2RG93bkhvbWUuZWwsIHVsTmF2RG93bkhvbWUpO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChmb290ZXIuZWwsIG5hdkRvd25Ib21lKTtcclxuXHJcbiAgcmV0dXJuIGZvb3Rlci5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXZCYXJEb3duO1xyXG4iLCJpbXBvcnQgZGlzcGxheU5hdkJhclVwcGVyIGZyb20gJy4vbmF2TW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlNYWluQ29udGVudCBmcm9tICcuL21haW5Nb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU5hdkJhckRvd24gZnJvbSAnLi9mb290ZXJNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU91clJlc2VydmF0aW9uIGZyb20gJy4vcmVzZXJ2YXRpb25zTW9kdWxlJztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgZGlzcGxheUhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZGlzcGxheU91clJlc2VydmF0aW9uKCk7XHJcbiAgY29uc3QgbmF2ID0gZGlzcGxheU5hdkJhclVwcGVyKCk7XHJcbiAgY29uc3QgbWFpbiA9IGRpc3BsYXlNYWluQ29udGVudCgpLm1haW5Db250ZW50LmVsO1xyXG4gIGNvbnN0IGZvb3RlciA9IGRpc3BsYXlOYXZCYXJEb3duKCk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lUGFnZTtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5cclxuY29uc3QgZGlzcGxheU1haW5Db250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ21haW4nLCAnJywgJ21haW4tY29udGVudCcpO1xyXG4gIGNvbnN0IHdyYXBwZXJDb250ZW50ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnd3JhcHBlci1jb250ZW50Jyk7XHJcbiAgY29uc3QgY29udGVudExvZ28gPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLWxvZ28nKTtcclxuICBjb25zdCBjb250ZW50U2xvZ2FuID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1zbG9nYW4nKTtcclxuICBjb25zdCBjb250ZW50SW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLWltYWdlJyk7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBlbGVtZW50RmFjdG9yeSgnaDInLCAnSEVCRScsICcnKTtcclxuXHJcbiAgY29uc3Qgc2xvZ2FuID0gZWxlbWVudEZhY3RvcnkoJ2gzJywgJ1ZlZ2V0YXJpYW4gY3Vpc2luZSB3aXRob3V0IGRvZ21hcyBvciBjb21wbGV4ZXMuJywgJycpO1xyXG5cclxuICBjb25zdCBsYW5kc2NhcGVJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ2xhbmRzY2FwZS1pbWcnKTtcclxuICBjb25zdCBwb3J0cmFpdEltYWdlID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAncG9ydHJhaXQtaW1nJyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50TG9nby5lbCwgbG9nbyk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRTbG9nYW4uZWwsIHNsb2dhbik7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRJbWFnZS5lbCwgbGFuZHNjYXBlSW1hZ2UsIHBvcnRyYWl0SW1hZ2UpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQod3JhcHBlckNvbnRlbnQuZWwsIGNvbnRlbnRMb2dvLCBjb250ZW50U2xvZ2FuLCBjb250ZW50SW1hZ2UpO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChtYWluQ29udGVudC5lbCwgd3JhcHBlckNvbnRlbnQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFpbkNvbnRlbnQsXHJcbiAgICB3cmFwcGVyQ29udGVudCxcclxuICAgIGNvbnRlbnRMb2dvLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWFpbkNvbnRlbnQ7XHJcbiIsImltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGRpc3BsYXlNYWluQ29udGVudCBmcm9tICcuL21haW5Nb2R1bGUnO1xyXG5cclxuY29uc3QgZm9vZHMgPSBbXHJcbiAgWydTbmFja3MnLCAnU29wYSBQaG8nLCAnUcO8b3JuIGFuZCBjdXJyeSBjcm9xdWV0dGUnXSxcclxuICBbJ1N0YXJ0ZXJzJywgJ1N3ZWV0IHBvdGF0byBjYXJwYWNjaW8sIHJlZCBvbmlvbiwgZmV0YSBjaGVlc2UsIGZyaWVkIGNvcm4sIGJsYWNrIG9saXZlcywgeXV6dSB2aW5haWdyZXR0ZSwgb3JhbmdlIHBvd2RlciBhbmQgd2F0ZXJjcmVzcycsICdBcnRpY2hva2UgaGVhcnQgc3R1ZmZlZCB3aXRoIHZlZ2FuIGZvaWUgZ3JhcyBhbmQgaG9sbGFuZGFpc2Ugc2F1Y2UnXSxcclxuICBbJ1ByaW5jaXBhbCcsICdHcmVlbiBjdXJyeSByaWNlIHdpdGggY29yaWFuZGVyIGFuZCBsaW1lJywgJ1JhdmlvbGlzIGRlIGJvcnJhamEgcmVsbGVub3MgZGUgY2FsYWJhemEgY29uIG1hbnRlcXVpbGxhIGRlIHNhbHZpYSB5IGxpbcOzbiddLFxyXG4gIFsnRGVzc2VydHMnLCAnQmxhY2sgYmVlciBhbmQgbGlxdW9yaWNlIHNwb25nZSBjYWtlLCBob21lbWFkZSBxdWluY2UgamVsbHksIGFsbW9uZCBpY2UgY3JlYW0gYW5kIHdoaXRlIGNob2NvbGF0ZSBzb3VwLicsICdTcGljZWQgbWFuZ28gYW5kIHBhc3Npb24gZnJ1aXQgc291cCddLFxyXG5dO1xyXG5cclxuY29uc3QgZGlzcGxheU91ck1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlck1lbnUgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd3cmFwcGVyLW1lbnUnKTtcclxuICBjb25zdCBwcmljZU1lbnUgPSBlbGVtZW50RmFjdG9yeSgncCcsICcyMywwMCQgcGVyIHBlcnNvbicsICdwcmljZS1tZW51Jyk7XHJcbiAgY29uc3Qgc3Bhbk1lbnUgPSBlbGVtZW50RmFjdG9yeSgnc3BhbicsICdNRU5VJywgJ3NwYW4tbWVudScpO1xyXG4gIGNvbnN0IHRpdGxlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdoMScsICdUYXN0aW5nJywgJ3RpdGxlLW1lbnUnKTtcclxuICBjb25zdCBpbWdNZW51ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnaW1nLW1lbnUnKTtcclxuICBjb25zdCBtZW51ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWVudScpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZGlzcGxheU1haW5Db250ZW50KCkuY29udGVudExvZ287XHJcblxyXG4gIGxvZ28uZWwuY2xhc3NMaXN0LmFkZCgnbWVudS1sb2dvJyk7XHJcblxyXG4gIGZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2gyJywgYCR7Zm9vZFswXX1gLCAnbWVudS1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBlbGVtZW50RmFjdG9yeSgndWwnLCAnJywgJ21lbnUtZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IGZpcnN0Q2hvaWNlID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgYCR7Zm9vZFsxXX1gLCAnY2hvaWNlLW1lbnUnKTtcclxuICAgIGNvbnN0IHNlY29uZENob2ljZSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsIGAke2Zvb2RbMl19YCwgJ2Nob2ljZS1tZW51Jyk7XHJcblxyXG4gICAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG1lbnVEZXNjcmlwdGlvbi5lbCwgZmlyc3RDaG9pY2UsIHNlY29uZENob2ljZSk7XHJcblxyXG4gICAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG1lbnUuZWwsIG1lbnVTZWN0aW9uLCBtZW51RGVzY3JpcHRpb24pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzY3JvbGxSb3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsb2dvLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHt3aW5kb3cucGFnZVlPZmZzZXQgLyA2fWRlZylgO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNjcm9sbFJvdGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh3cmFwcGVyTWVudS5lbCwgcHJpY2VNZW51LCBzcGFuTWVudSwgdGl0bGVNZW51LCBpbWdNZW51LCBtZW51LCBsb2dvKTtcclxuXHJcbiAgcmV0dXJuIHdyYXBwZXJNZW51LmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU91ck1lbnU7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlOYXZCYXJVcHBlciA9ICgpID0+IHtcclxuICBjb25zdCBuYXZVcHBlckhvbWUgPSBlbGVtZW50RmFjdG9yeSgnbmF2JywgJycsICdtZW51LXVwcGVyLWhvbWUnKTtcclxuICBjb25zdCB1bE5hdlVwcGVySG9tZSA9IGVsZW1lbnRGYWN0b3J5KCd1bCcsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnZmlyc3QtbGknKTtcclxuICBjb25zdCBzZWNvbmRMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnc2Vjb25kLWxpJyk7XHJcbiAgY29uc3QgdGhpcmRMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAndGhpcmQtbGknKTtcclxuICBjb25zdCBmaXJzdExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdIb21lJywgJ3VwcGVyLWxlZnQnKTtcclxuICBjb25zdCBzZWNvbmRMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnUmVzZXJ2YXRpb25zJywgJ3VwcGVyLWNlbnRlcicpO1xyXG4gIGNvbnN0IHRoaXJkTGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1Rhc3RpbmcgbWVudScsICd1cHBlci1yaWdodCcpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZmlyc3RMaS5lbCwgZmlyc3RMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoc2Vjb25kTGkuZWwsIHNlY29uZExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh0aGlyZExpLmVsLCB0aGlyZExpbmspO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodWxOYXZVcHBlckhvbWUuZWwsIGZpcnN0TGksIHNlY29uZExpLCB0aGlyZExpKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG5hdlVwcGVySG9tZS5lbCwgdWxOYXZVcHBlckhvbWUpO1xyXG5cclxuICByZXR1cm4gbmF2VXBwZXJIb21lLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdkJhclVwcGVyO1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCByZXNlcnZhdGlvbnMgPSBbXHJcbiAgWydSZXNlcnZhdGlvbnMnLCAnQm9vayB5b3VyIHRhYmxlIG9ubGluZSBvciBieSBjYWxsaW5nIDk3NiAzNSA5MCAxMSBmcm9tIDEwOjAwaCB0byAxNTozMGguJ10sXHJcbiAgWydUYWtlIG1lIGF3YXknLCAnT3JkZXIgeW91ciBtZWFsIGF0IFrDoW1wYXRlIGFuZCByZWNlaXZlIGl0IHdoZXJldmVyIHlvdSB3YW50IChtaWRkYXkgTW9uLVNhdCwgZXZlbmluZ3MgVGh1LVNhdCkuIE9yIG9yZGVyIGl0IG9uIDk3NiAzNSA5MCAxMSBhbmQgY29tZSBhbmQgcGljayBpdCB1cCBhdCBvdXIgcmVzdGF1cmFudC4nXSxcclxuXTtcclxuXHJcbmNvbnN0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyUmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgnaGVhZGVyJywgJycsICd3cmFwcGVyLXJlc2VydmF0aW9uJyk7XHJcbiAgY29uc3QgY29udGVudFJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnY29udGVudC1yZXNlcnZhdGlvbicpO1xyXG4gIC8vIGNvbnN0IHRpdGxlUmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgnaDEnLCAnUmVzZXJ2YXRpb25zJywgJ3RpdGxlLXJlc2VydmF0aW9uJyk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBlbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJ1gnLCAnY2xvc2UtcmVzZXJ2YXRpb24tYnRuJyk7XHJcblxyXG4gIHJlc2VydmF0aW9ucy5mb3JFYWNoKChyZXNlcnZhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdGl0bGVSZXNlcnZhdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdoMicsIGAke3Jlc2VydmF0aW9uWzBdfWAsICd0aXRsZS1yZXNlcnZhdGlvbicpO1xyXG4gICAgY29uc3QgZGVzY3JpYmVSZXNlcnZhdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdwJywgYCR7cmVzZXJ2YXRpb25bMV19YCwgJ2Rlc2NyaWJlLXJlc2VydmF0aW9uJyk7XHJcblxyXG4gICAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGNvbnRlbnRSZXNlcnZhdGlvbi5lbCwgdGl0bGVSZXNlcnZhdGlvbiwgZGVzY3JpYmVSZXNlcnZhdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50UmVzZXJ2YXRpb24uZWwsIGNsb3NlQnRuKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQod3JhcHBlclJlc2VydmF0aW9uLmVsLCBjb250ZW50UmVzZXJ2YXRpb24pO1xyXG5cclxuICByZXR1cm4gd3JhcHBlclJlc2VydmF0aW9uLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU91clJlc2VydmF0aW9uO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SG9tZVBhZ2UgZnJvbSAnLi9tb2R1bGVzL2hvbWVNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU91ck1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnVNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU1haW5Db250ZW50IGZyb20gJy4vbW9kdWxlcy9tYWluTW9kdWxlJztcclxuXHJcbmRpc3BsYXlIb21lUGFnZSgpO1xyXG5cclxuY29uc3QgZmlyc3ROYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLWxlZnQnKTtcclxuY29uc3Qgc2Vjb25kTmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1jZW50ZXInKTtcclxuY29uc3QgdGhpcmROYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLXJpZ2h0Jyk7XHJcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xyXG5jb25zdCByZXNlcnZhdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlci1yZXNlcnZhdGlvbicpO1xyXG5jb25zdCBjbG9zZVJlc2VydmF0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1yZXNlcnZhdGlvbi1idG4nKTtcclxuY29uc3QgbGFuZHNjYXBlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRzY2FwZS1pbWcnKTtcclxuY29uc3QgcG9ydHJhaXRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydHJhaXQtaW1nJyk7XHJcblxyXG5jb25zdCBsYW5kc2NhcGVVUkxzID0gW1xyXG4gICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTM3NTMyMTIyNC03OWRhNmZkMzJmNmU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NzAmcT04MCcsXHJcbiAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgxMzc1Mjc5MTQ0LWJiM2IzODFjNzA0Nj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQ3MSZxPTgwJyxcclxuICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODEzNzUyMjE4NzYtOGYyODdmN2NkMmNjP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDY5JnE9ODAnLFxyXG4gICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MTM3NTM4MzY4MC03MTAxZGM1Y2I1ZjQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NjkmcT04MCcsXHJcbiAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgxMzQ5NTE4NzcxLTIwMDU1YjJhN2IyND9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUzOSZxPTgwJyxcclxuXTtcclxuXHJcbmNvbnN0IHBvcnRyYWl0VVJMcyA9IFtcclxuICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjg4MjU4NzExMTUtMzU4MWE1Mzg3OTE5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MTUmcT04MCcsXHJcbiAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3MzU1ODA2OTA0LWE0NDU4OTc4ZDZkMz9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODEzJnE9ODAnLFxyXG4gICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTE3MTQyMTk1NS05OGM2MmZjZDU2MmY/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwNCZxPTgwJyxcclxuICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzExNzE0OTE1MzctNDM1MTY0ZjNkNDg2P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MCcsXHJcbiAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIyMjE5NzcwMzI2LWQ3MmEyMjg2Mjk4Nj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODAnLFxyXG5dO1xyXG5cclxuY29uc3QgcmFuZG9tSW50ZWdlckluUmFuZ2UgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblxyXG53aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGNvbnN0IHJhbmRvbSA9IHJhbmRvbUludGVnZXJJblJhbmdlKDAsIDQpO1xyXG4gIGxhbmRzY2FwZUltZy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7bGFuZHNjYXBlVVJMc1tyYW5kb21dfVwiKSBuby1yZXBlYXQgY2VudGVyYDtcclxufSwgNTAwMCk7XHJcblxyXG53aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGNvbnN0IHJhbmRvbSA9IHJhbmRvbUludGVnZXJJblJhbmdlKDAsIDQpO1xyXG4gIHBvcnRyYWl0SW1nLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiJHtwb3J0cmFpdFVSTHNbcmFuZG9tXX1cIikgbm8tcmVwZWF0IGNlbnRlcmA7XHJcbn0sIDYwMDApO1xyXG5cclxuY29uc3QgaG9tZSA9IGRpc3BsYXlNYWluQ29udGVudCgpLndyYXBwZXJDb250ZW50LmVsO1xyXG5jb25zdCBtZW51ID0gZGlzcGxheU91ck1lbnUoKTtcclxuXHJcbmZpcnN0TmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59KTtcclxuXHJcbnNlY29uZE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXJ2YXRpb25Db250ZW50LnN0eWxlLnRvcCA9ICcwJSc7XHJcbn0pO1xyXG5cclxuY2xvc2VSZXNlcnZhdGlvbkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXJ2YXRpb25Db250ZW50LnN0eWxlLnRvcCA9ICctNDYlJztcclxufSk7XHJcblxyXG50aGlyZE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==