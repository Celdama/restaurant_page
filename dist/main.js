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
/* harmony import */ var _images_menu_img_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/menu-img.jpg */ "./src/images/menu-img.jpg");





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
  imgMenu.el.style.background = `url("${_images_menu_img_jpg__WEBPACK_IMPORTED_MODULE_3__}") no-repeat center`;

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


/***/ }),

/***/ "./src/images/landscape/landscape1.png":
/*!*********************************************!*\
  !*** ./src/images/landscape/landscape1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cff8c391828a76b0654.png";

/***/ }),

/***/ "./src/images/landscape/landscape2.png":
/*!*********************************************!*\
  !*** ./src/images/landscape/landscape2.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7007a47c96d01297560.png";

/***/ }),

/***/ "./src/images/landscape/landscape3.png":
/*!*********************************************!*\
  !*** ./src/images/landscape/landscape3.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74f83ea2a7df5e6e223d.png";

/***/ }),

/***/ "./src/images/landscape/landscape4.png":
/*!*********************************************!*\
  !*** ./src/images/landscape/landscape4.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c201f00cd0738e0d158.png";

/***/ }),

/***/ "./src/images/landscape/landscape5.png":
/*!*********************************************!*\
  !*** ./src/images/landscape/landscape5.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a269e59141630ccde2d.png";

/***/ }),

/***/ "./src/images/menu-img.jpg":
/*!*********************************!*\
  !*** ./src/images/menu-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "773346bd169a25ad4904.jpg";

/***/ }),

/***/ "./src/images/portrait/portrait1.png":
/*!*******************************************!*\
  !*** ./src/images/portrait/portrait1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91ff1fff1bab4958349a.png";

/***/ }),

/***/ "./src/images/portrait/portrait2.png":
/*!*******************************************!*\
  !*** ./src/images/portrait/portrait2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7349d34bc361bc97bed2.png";

/***/ }),

/***/ "./src/images/portrait/portrait3.png":
/*!*******************************************!*\
  !*** ./src/images/portrait/portrait3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8508a9c912ec7aaa5827.png";

/***/ }),

/***/ "./src/images/portrait/portrait4.png":
/*!*******************************************!*\
  !*** ./src/images/portrait/portrait4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e7d0b89c5bc54400020.png";

/***/ }),

/***/ "./src/images/portrait/portrait5.png":
/*!*******************************************!*\
  !*** ./src/images/portrait/portrait5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6da2968aae59707ca831.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_landscape_landscape1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/landscape/landscape1.png */ "./src/images/landscape/landscape1.png");
/* harmony import */ var _images_landscape_landscape2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/landscape/landscape2.png */ "./src/images/landscape/landscape2.png");
/* harmony import */ var _images_landscape_landscape3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/landscape/landscape3.png */ "./src/images/landscape/landscape3.png");
/* harmony import */ var _images_landscape_landscape4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/landscape/landscape4.png */ "./src/images/landscape/landscape4.png");
/* harmony import */ var _images_landscape_landscape5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/landscape/landscape5.png */ "./src/images/landscape/landscape5.png");
/* harmony import */ var _images_portrait_portrait1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/portrait/portrait1.png */ "./src/images/portrait/portrait1.png");
/* harmony import */ var _images_portrait_portrait2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/portrait/portrait2.png */ "./src/images/portrait/portrait2.png");
/* harmony import */ var _images_portrait_portrait3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/portrait/portrait3.png */ "./src/images/portrait/portrait3.png");
/* harmony import */ var _images_portrait_portrait4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/portrait/portrait4.png */ "./src/images/portrait/portrait4.png");
/* harmony import */ var _images_portrait_portrait5_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/portrait/portrait5.png */ "./src/images/portrait/portrait5.png");
















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
  _images_landscape_landscape1_png__WEBPACK_IMPORTED_MODULE_3__,
  _images_landscape_landscape2_png__WEBPACK_IMPORTED_MODULE_4__,
  _images_landscape_landscape3_png__WEBPACK_IMPORTED_MODULE_5__,
  _images_landscape_landscape4_png__WEBPACK_IMPORTED_MODULE_6__,
  _images_landscape_landscape5_png__WEBPACK_IMPORTED_MODULE_7__,
];

const portraitURLs = [
  _images_portrait_portrait1_png__WEBPACK_IMPORTED_MODULE_8__,
  _images_portrait_portrait2_png__WEBPACK_IMPORTED_MODULE_9__,
  _images_portrait_portrait3_png__WEBPACK_IMPORTED_MODULE_10__,
  _images_portrait_portrait4_png__WEBPACK_IMPORTED_MODULE_11__,
  _images_portrait_portrait5_png__WEBPACK_IMPORTED_MODULE_12__,
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
  reservationContent.style.top = '-50%';
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1EO0FBQ0Q7QUFDSTtBQUN0RDtBQUMyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzNEO0FBQ3dEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeEQ7QUFDQSwrREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFVO0FBQ1osRUFBRSw2REFBVTtBQUNaLEVBQUUsNkRBQVU7QUFDWixFQUFFLDZEQUFVO0FBQ1osRUFBRSw2REFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQVM7QUFDWCxFQUFFLDJEQUFTO0FBQ1gsRUFBRSw0REFBUztBQUNYLEVBQUUsNERBQVM7QUFDWCxFQUFFLDREQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFCQUFxQjtBQUM5RCxDQUFDO0FBQ0Q7QUFDQSxhQUFhLCtEQUFrQjtBQUMvQixhQUFhLCtEQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2FwcGVuZEVsZW1lbnRUb1BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvZm9vdGVyTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbWFpbk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tZW51TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL25hdk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnNNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgPSAocGFyZW50LCAuLi5hcmdzKSA9PiB7XHJcbiAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcmcuZWwpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kRWxlbWVudFRvUGFyZW50O1xyXG4iLCJjb25zdCBlbGVtZW50RmFjdG9yeSA9ICh0eXBlLCB0ZXh0LCBjbGFzc05hbWUpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVsLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50RmFjdG9yeTtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5cclxuY29uc3QgZGlzcGxheU5hdkJhckRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF5c0Zyb21Ob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgbW9udGggPSBkLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuIGAke21vbnRoICsgMX0vJHtkYXl9LyR7eWVhcn1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvb3RlciA9IGVsZW1lbnRGYWN0b3J5KCdmb290ZXInLCAnJywgJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IG5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS1kb3duLWhvbWUnKTtcclxuICBjb25zdCB1bE5hdkRvd25Ib21lID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICcnKTtcclxuICBjb25zdCBmaXJzdExpID0gZWxlbWVudEZhY3RvcnkoJ2xpJywgJycsICcnKTtcclxuICBjb25zdCBzZWNvbmRMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnU29jaWFsIE1lZGlhJywgJ2Rvd24tbGVmdCcpO1xyXG4gIGNvbnN0IHNlY29uZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsIGRheXNGcm9tTm93KCksICdkb3duLXJpZ2h0Jyk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChmaXJzdExpLmVsLCBmaXJzdExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChzZWNvbmRMaS5lbCwgc2Vjb25kTGluayk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh1bE5hdkRvd25Ib21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG5hdkRvd25Ib21lLmVsLCB1bE5hdkRvd25Ib21lKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZm9vdGVyLmVsLCBuYXZEb3duSG9tZSk7XHJcblxyXG4gIHJldHVybiBmb290ZXIuZWw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TmF2QmFyRG93bjtcclxuIiwiaW1wb3J0IGRpc3BsYXlOYXZCYXJVcHBlciBmcm9tICcuL25hdk1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlOYXZCYXJEb3duIGZyb20gJy4vZm9vdGVyTW9kdWxlJztcclxuaW1wb3J0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uc01vZHVsZSc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByZXNlcnZhdGlvbiA9IGRpc3BsYXlPdXJSZXNlcnZhdGlvbigpO1xyXG4gIGNvbnN0IG5hdiA9IGRpc3BsYXlOYXZCYXJVcHBlcigpO1xyXG4gIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbkNvbnRlbnQoKS5tYWluQ29udGVudC5lbDtcclxuICBjb25zdCBmb290ZXIgPSBkaXNwbGF5TmF2QmFyRG93bigpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZVBhZ2U7XHJcbiIsImltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmRFbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vYXBwZW5kRWxlbWVudFRvUGFyZW50JztcclxuXHJcbmNvbnN0IGRpc3BsYXlNYWluQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdtYWluJywgJycsICdtYWluLWNvbnRlbnQnKTtcclxuICBjb25zdCB3cmFwcGVyQ29udGVudCA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3dyYXBwZXItY29udGVudCcpO1xyXG4gIGNvbnN0IGNvbnRlbnRMb2dvID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1sb2dvJyk7XHJcbiAgY29uc3QgY29udGVudFNsb2dhbiA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4tc2xvZ2FuJyk7XHJcbiAgY29uc3QgY29udGVudEltYWdlID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWFpbi1pbWFnZScpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZWxlbWVudEZhY3RvcnkoJ2gyJywgJ0hFQkUnLCAnJyk7XHJcblxyXG4gIGNvbnN0IHNsb2dhbiA9IGVsZW1lbnRGYWN0b3J5KCdoMycsICdWZWdldGFyaWFuIGN1aXNpbmUgd2l0aG91dCBkb2dtYXMgb3IgY29tcGxleGVzLicsICcnKTtcclxuXHJcbiAgY29uc3QgbGFuZHNjYXBlSW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdsYW5kc2NhcGUtaW1nJyk7XHJcbiAgY29uc3QgcG9ydHJhaXRJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3BvcnRyYWl0LWltZycpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudExvZ28uZWwsIGxvZ28pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50U2xvZ2FuLmVsLCBzbG9nYW4pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50SW1hZ2UuZWwsIGxhbmRzY2FwZUltYWdlLCBwb3J0cmFpdEltYWdlKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHdyYXBwZXJDb250ZW50LmVsLCBjb250ZW50TG9nbywgY29udGVudFNsb2dhbiwgY29udGVudEltYWdlKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWFpbkNvbnRlbnQuZWwsIHdyYXBwZXJDb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1haW5Db250ZW50LFxyXG4gICAgd3JhcHBlckNvbnRlbnQsXHJcbiAgICBjb250ZW50TG9nbyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1haW5Db250ZW50O1xyXG4iLCJpbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcbmltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluTW9kdWxlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlcy9tZW51LWltZy5qcGcnO1xyXG5cclxuY29uc3QgZm9vZHMgPSBbXHJcbiAgWydTbmFja3MnLCAnU29wYSBQaG8nLCAnUcO8b3JuIGFuZCBjdXJyeSBjcm9xdWV0dGUnXSxcclxuICBbJ1N0YXJ0ZXJzJywgJ1N3ZWV0IHBvdGF0byBjYXJwYWNjaW8sIHJlZCBvbmlvbiwgZmV0YSBjaGVlc2UsIGZyaWVkIGNvcm4sIGJsYWNrIG9saXZlcywgeXV6dSB2aW5haWdyZXR0ZSwgb3JhbmdlIHBvd2RlciBhbmQgd2F0ZXJjcmVzcycsICdBcnRpY2hva2UgaGVhcnQgc3R1ZmZlZCB3aXRoIHZlZ2FuIGZvaWUgZ3JhcyBhbmQgaG9sbGFuZGFpc2Ugc2F1Y2UnXSxcclxuICBbJ1ByaW5jaXBhbCcsICdHcmVlbiBjdXJyeSByaWNlIHdpdGggY29yaWFuZGVyIGFuZCBsaW1lJywgJ1JhdmlvbGlzIGRlIGJvcnJhamEgcmVsbGVub3MgZGUgY2FsYWJhemEgY29uIG1hbnRlcXVpbGxhIGRlIHNhbHZpYSB5IGxpbcOzbiddLFxyXG4gIFsnRGVzc2VydHMnLCAnQmxhY2sgYmVlciBhbmQgbGlxdW9yaWNlIHNwb25nZSBjYWtlLCBob21lbWFkZSBxdWluY2UgamVsbHksIGFsbW9uZCBpY2UgY3JlYW0gYW5kIHdoaXRlIGNob2NvbGF0ZSBzb3VwLicsICdTcGljZWQgbWFuZ28gYW5kIHBhc3Npb24gZnJ1aXQgc291cCddLFxyXG5dO1xyXG5cclxuY29uc3QgZGlzcGxheU91ck1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlck1lbnUgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd3cmFwcGVyLW1lbnUnKTtcclxuICBjb25zdCBwcmljZU1lbnUgPSBlbGVtZW50RmFjdG9yeSgncCcsICcyMywwMCQgcGVyIHBlcnNvbicsICdwcmljZS1tZW51Jyk7XHJcbiAgY29uc3Qgc3Bhbk1lbnUgPSBlbGVtZW50RmFjdG9yeSgnc3BhbicsICdNRU5VJywgJ3NwYW4tbWVudScpO1xyXG4gIGNvbnN0IHRpdGxlTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdoMScsICdUYXN0aW5nJywgJ3RpdGxlLW1lbnUnKTtcclxuICBjb25zdCBpbWdNZW51ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnaW1nLW1lbnUnKTtcclxuICBjb25zdCBtZW51ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnbWVudScpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZGlzcGxheU1haW5Db250ZW50KCkuY29udGVudExvZ287XHJcblxyXG4gIGxvZ28uZWwuY2xhc3NMaXN0LmFkZCgnbWVudS1sb2dvJyk7XHJcbiAgaW1nTWVudS5lbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7SW1hZ2V9XCIpIG5vLXJlcGVhdCBjZW50ZXJgO1xyXG5cclxuICBmb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdoMicsIGAke2Zvb2RbMF19YCwgJ21lbnUtc2VjdGlvbicpO1xyXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICdtZW51LWRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBmaXJzdENob2ljZSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsIGAke2Zvb2RbMV19YCwgJ2Nob2ljZS1tZW51Jyk7XHJcbiAgICBjb25zdCBzZWNvbmRDaG9pY2UgPSBlbGVtZW50RmFjdG9yeSgnbGknLCBgJHtmb29kWzJdfWAsICdjaG9pY2UtbWVudScpO1xyXG5cclxuICAgIGFwcGVuZEVsZW1lbnRUb1BhcmVudChtZW51RGVzY3JpcHRpb24uZWwsIGZpcnN0Q2hvaWNlLCBzZWNvbmRDaG9pY2UpO1xyXG5cclxuICAgIGFwcGVuZEVsZW1lbnRUb1BhcmVudChtZW51LmVsLCBtZW51U2VjdGlvbiwgbWVudURlc2NyaXB0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsUm90YXRlID0gKCkgPT4ge1xyXG4gICAgbG9nby5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7d2luZG93LnBhZ2VZT2Zmc2V0IC8gNn1kZWcpYDtcclxuICB9O1xyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxSb3RhdGUoKTtcclxuICB9O1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQod3JhcHBlck1lbnUuZWwsIHByaWNlTWVudSwgc3Bhbk1lbnUsIHRpdGxlTWVudSwgaW1nTWVudSwgbWVudSwgbG9nbyk7XHJcblxyXG4gIHJldHVybiB3cmFwcGVyTWVudS5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlPdXJNZW51O1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TmF2QmFyVXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2VXBwZXJIb21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS11cHBlci1ob21lJyk7XHJcbiAgY29uc3QgdWxOYXZVcHBlckhvbWUgPSBlbGVtZW50RmFjdG9yeSgndWwnLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ2ZpcnN0LWxpJyk7XHJcbiAgY29uc3Qgc2Vjb25kTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3NlY29uZC1saScpO1xyXG4gIGNvbnN0IHRoaXJkTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3RoaXJkLWxpJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnSG9tZScsICd1cHBlci1sZWZ0Jyk7XHJcbiAgY29uc3Qgc2Vjb25kTGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1Jlc2VydmF0aW9ucycsICd1cHBlci1jZW50ZXInKTtcclxuICBjb25zdCB0aGlyZExpbmsgPSBlbGVtZW50RmFjdG9yeSgnYScsICdUYXN0aW5nIG1lbnUnLCAndXBwZXItcmlnaHQnKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZpcnN0TGkuZWwsIGZpcnN0TGluayk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHNlY29uZExpLmVsLCBzZWNvbmRMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodGhpcmRMaS5lbCwgdGhpcmRMaW5rKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHVsTmF2VXBwZXJIb21lLmVsLCBmaXJzdExpLCBzZWNvbmRMaSwgdGhpcmRMaSk7XHJcblxyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChuYXZVcHBlckhvbWUuZWwsIHVsTmF2VXBwZXJIb21lKTtcclxuXHJcbiAgcmV0dXJuIG5hdlVwcGVySG9tZS5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOYXZCYXJVcHBlcjtcclxuIiwiaW1wb3J0IGVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL2VsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi9hcHBlbmRFbGVtZW50VG9QYXJlbnQnO1xyXG5cclxuY29uc3QgcmVzZXJ2YXRpb25zID0gW1xyXG4gIFsnUmVzZXJ2YXRpb25zJywgJ0Jvb2sgeW91ciB0YWJsZSBvbmxpbmUgb3IgYnkgY2FsbGluZyA5NzYgMzUgOTAgMTEgZnJvbSAxMDowMGggdG8gMTU6MzBoLiddLFxyXG4gIFsnVGFrZSBtZSBhd2F5JywgJ09yZGVyIHlvdXIgbWVhbCBhdCBaw6FtcGF0ZSBhbmQgcmVjZWl2ZSBpdCB3aGVyZXZlciB5b3Ugd2FudCAobWlkZGF5IE1vbi1TYXQsIGV2ZW5pbmdzIFRodS1TYXQpLiBPciBvcmRlciBpdCBvbiA5NzYgMzUgOTAgMTEgYW5kIGNvbWUgYW5kIHBpY2sgaXQgdXAgYXQgb3VyIHJlc3RhdXJhbnQuJ10sXHJcbl07XHJcblxyXG5jb25zdCBkaXNwbGF5T3VyUmVzZXJ2YXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlclJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2hlYWRlcicsICcnLCAnd3JhcHBlci1yZXNlcnZhdGlvbicpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZXNlcnZhdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ2NvbnRlbnQtcmVzZXJ2YXRpb24nKTtcclxuICAvLyBjb25zdCB0aXRsZVJlc2VydmF0aW9uID0gZWxlbWVudEZhY3RvcnkoJ2gxJywgJ1Jlc2VydmF0aW9ucycsICd0aXRsZS1yZXNlcnZhdGlvbicpO1xyXG4gIGNvbnN0IGNsb3NlQnRuID0gZWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdYJywgJ2Nsb3NlLXJlc2VydmF0aW9uLWJ0bicpO1xyXG5cclxuICByZXNlcnZhdGlvbnMuZm9yRWFjaCgocmVzZXJ2YXRpb24pID0+IHtcclxuICAgIGNvbnN0IHRpdGxlUmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgnaDInLCBgJHtyZXNlcnZhdGlvblswXX1gLCAndGl0bGUtcmVzZXJ2YXRpb24nKTtcclxuICAgIGNvbnN0IGRlc2NyaWJlUmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgncCcsIGAke3Jlc2VydmF0aW9uWzFdfWAsICdkZXNjcmliZS1yZXNlcnZhdGlvbicpO1xyXG5cclxuICAgIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50UmVzZXJ2YXRpb24uZWwsIHRpdGxlUmVzZXJ2YXRpb24sIGRlc2NyaWJlUmVzZXJ2YXRpb24pO1xyXG4gIH0pO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudFJlc2VydmF0aW9uLmVsLCBjbG9zZUJ0bik7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHdyYXBwZXJSZXNlcnZhdGlvbi5lbCwgY29udGVudFJlc2VydmF0aW9uKTtcclxuXHJcbiAgcmV0dXJuIHdyYXBwZXJSZXNlcnZhdGlvbi5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlPdXJSZXNlcnZhdGlvbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGRpc3BsYXlIb21lUGFnZSBmcm9tICcuL21vZHVsZXMvaG9tZU1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5T3VyTWVudSBmcm9tICcuL21vZHVsZXMvbWVudU1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL21haW5Nb2R1bGUnO1xyXG5cclxuaW1wb3J0IGxhbmRzY2FwZTEgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlL2xhbmRzY2FwZTEucG5nJztcclxuaW1wb3J0IGxhbmRzY2FwZTIgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlL2xhbmRzY2FwZTIucG5nJztcclxuaW1wb3J0IGxhbmRzY2FwZTMgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlL2xhbmRzY2FwZTMucG5nJztcclxuaW1wb3J0IGxhbmRzY2FwZTQgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlL2xhbmRzY2FwZTQucG5nJztcclxuaW1wb3J0IGxhbmRzY2FwZTUgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlL2xhbmRzY2FwZTUucG5nJztcclxuXHJcbmltcG9ydCBwb3J0cmFpdDEgZnJvbSAnLi9pbWFnZXMvcG9ydHJhaXQvcG9ydHJhaXQxLnBuZyc7XHJcbmltcG9ydCBwb3J0cmFpdDIgZnJvbSAnLi9pbWFnZXMvcG9ydHJhaXQvcG9ydHJhaXQyLnBuZyc7XHJcbmltcG9ydCBwb3J0cmFpdDMgZnJvbSAnLi9pbWFnZXMvcG9ydHJhaXQvcG9ydHJhaXQzLnBuZyc7XHJcbmltcG9ydCBwb3J0cmFpdDQgZnJvbSAnLi9pbWFnZXMvcG9ydHJhaXQvcG9ydHJhaXQ0LnBuZyc7XHJcbmltcG9ydCBwb3J0cmFpdDUgZnJvbSAnLi9pbWFnZXMvcG9ydHJhaXQvcG9ydHJhaXQ1LnBuZyc7XHJcblxyXG5kaXNwbGF5SG9tZVBhZ2UoKTtcclxuXHJcbmNvbnN0IGZpcnN0TmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1sZWZ0Jyk7XHJcbmNvbnN0IHNlY29uZE5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBwZXItY2VudGVyJyk7XHJcbmNvbnN0IHRoaXJkTmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1yaWdodCcpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcclxuY29uc3QgcmVzZXJ2YXRpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItcmVzZXJ2YXRpb24nKTtcclxuY29uc3QgY2xvc2VSZXNlcnZhdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcmVzZXJ2YXRpb24tYnRuJyk7XHJcbmNvbnN0IGxhbmRzY2FwZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kc2NhcGUtaW1nJyk7XHJcbmNvbnN0IHBvcnRyYWl0SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRyYWl0LWltZycpO1xyXG5cclxuY29uc3QgbGFuZHNjYXBlVVJMcyA9IFtcclxuICBsYW5kc2NhcGUxLFxyXG4gIGxhbmRzY2FwZTIsXHJcbiAgbGFuZHNjYXBlMyxcclxuICBsYW5kc2NhcGU0LFxyXG4gIGxhbmRzY2FwZTUsXHJcbl07XHJcblxyXG5jb25zdCBwb3J0cmFpdFVSTHMgPSBbXHJcbiAgcG9ydHJhaXQxLFxyXG4gIHBvcnRyYWl0MixcclxuICBwb3J0cmFpdDMsXHJcbiAgcG9ydHJhaXQ0LFxyXG4gIHBvcnRyYWl0NSxcclxuXTtcclxuXHJcbmNvbnN0IHJhbmRvbUludGVnZXJJblJhbmdlID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxud2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICBjb25zdCByYW5kb20gPSByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCA0KTtcclxuICBsYW5kc2NhcGVJbWcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIke2xhbmRzY2FwZVVSTHNbcmFuZG9tXX1cIikgbm8tcmVwZWF0IGNlbnRlcmA7XHJcbn0sIDUwMDApO1xyXG5cclxud2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICBjb25zdCByYW5kb20gPSByYW5kb21JbnRlZ2VySW5SYW5nZSgwLCA0KTtcclxuICBwb3J0cmFpdEltZy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIiR7cG9ydHJhaXRVUkxzW3JhbmRvbV19XCIpIG5vLXJlcGVhdCBjZW50ZXJgO1xyXG59LCA2MDAwKTtcclxuXHJcbmNvbnN0IGhvbWUgPSBkaXNwbGF5TWFpbkNvbnRlbnQoKS53cmFwcGVyQ29udGVudC5lbDtcclxuY29uc3QgbWVudSA9IGRpc3BsYXlPdXJNZW51KCk7XHJcblxyXG5maXJzdE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxufSk7XHJcblxyXG5zZWNvbmROYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2VydmF0aW9uQ29udGVudC5zdHlsZS50b3AgPSAnMCUnO1xyXG59KTtcclxuXHJcbmNsb3NlUmVzZXJ2YXRpb25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2VydmF0aW9uQ29udGVudC5zdHlsZS50b3AgPSAnLTUwJSc7XHJcbn0pO1xyXG5cclxudGhpcmROYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=