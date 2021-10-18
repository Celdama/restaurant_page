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

  const slogan = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'Vegetarian cuisine without dogmas or complexes', '');

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





(0,_modules_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUscUJBQXFCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ05yQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ppQjtBQUNjO0FBQzdEO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQWM7QUFDL0Isc0JBQXNCLDJEQUFjO0FBQ3BDLHdCQUF3QiwyREFBYztBQUN0QyxrQkFBa0IsMkRBQWM7QUFDaEMsbUJBQW1CLDJEQUFjO0FBQ2pDLG9CQUFvQiwyREFBYztBQUNsQyxxQkFBcUIsMkRBQWM7QUFDbkM7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWTtBQUNDO0FBQ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNEQUFrQjtBQUNoQyxlQUFlLHVEQUFrQjtBQUNqQyxpQkFBaUIseURBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmdCO0FBQ2M7QUFDN0Q7QUFDQTtBQUNBLHNCQUFzQiwyREFBYztBQUNwQyx5QkFBeUIsMkRBQWM7QUFDdkMsc0JBQXNCLDJEQUFjO0FBQ3BDLHdCQUF3QiwyREFBYztBQUN0Qyx1QkFBdUIsMkRBQWM7QUFDckM7QUFDQSxlQUFlLDJEQUFjO0FBQzdCO0FBQ0EsaUJBQWlCLDJEQUFjO0FBQy9CO0FBQ0EseUJBQXlCLDJEQUFjO0FBQ3ZDLHdCQUF3QiwyREFBYztBQUN0QztBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkIsRUFBRSxrRUFBcUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjJCO0FBQ2Q7QUFDRDtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQWM7QUFDcEMsb0JBQW9CLDJEQUFjO0FBQ2xDLG1CQUFtQiwyREFBYztBQUNqQyxvQkFBb0IsMkRBQWM7QUFDbEMsa0JBQWtCLDJEQUFjO0FBQ2hDLGVBQWUsMkRBQWM7QUFDN0I7QUFDQSxlQUFlLHVEQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBYyxVQUFVLFFBQVE7QUFDeEQsNEJBQTRCLDJEQUFjO0FBQzFDLHdCQUF3QiwyREFBYyxVQUFVLFFBQVE7QUFDeEQseUJBQXlCLDJEQUFjLFVBQVUsUUFBUTtBQUN6RDtBQUNBLElBQUksa0VBQXFCO0FBQ3pCO0FBQ0EsSUFBSSxrRUFBcUI7QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBd0MsdUJBQXVCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DaUI7QUFDYztBQUM3RDtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFjO0FBQ3JDLHlCQUF5QiwyREFBYztBQUN2QyxrQkFBa0IsMkRBQWM7QUFDaEMsbUJBQW1CLDJEQUFjO0FBQ2pDLGtCQUFrQiwyREFBYztBQUNoQyxvQkFBb0IsMkRBQWM7QUFDbEMscUJBQXFCLDJEQUFjO0FBQ25DLG9CQUFvQiwyREFBYztBQUNsQztBQUNBLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkI7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJhO0FBQy9DO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7OztVQ1JyQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EO0FBQ0Q7QUFDZTtBQUNYO0FBQ3REO0FBQ0EsK0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUFrQjtBQUMvQixvQkFBb0IsdUVBQXFCO0FBQ3pDLGFBQWEsK0RBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2FwcGVuZEVsZW1lbnRUb1BhcmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvZm9vdGVyTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21vZHVsZXMvbWFpbk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9tZW51TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL25hdk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnNNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcGVuZEVsZW1lbnRUb1BhcmVudCA9IChwYXJlbnQsIC4uLmFyZ3MpID0+IHtcclxuICBhcmdzLmZvckVhY2goKGFyZykgPT4ge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGFyZy5lbCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRFbGVtZW50VG9QYXJlbnQ7XHJcbiIsImNvbnN0IGVsZW1lbnRGYWN0b3J5ID0gKHR5cGUsIHRleHQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBlbC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TmF2QmFyRG93biA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBlbGVtZW50RmFjdG9yeSgnZm9vdGVyJywgJycsICdmb290ZXInKTtcclxuICBjb25zdCBuYXZEb3duSG9tZSA9IGVsZW1lbnRGYWN0b3J5KCduYXYnLCAnJywgJ21lbnUtZG93bi1ob21lJyk7XHJcbiAgY29uc3QgdWxOYXZEb3duSG9tZSA9IGVsZW1lbnRGYWN0b3J5KCd1bCcsICcnLCAnJyk7XHJcbiAgY29uc3QgZmlyc3RMaSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsICcnLCAnJyk7XHJcbiAgY29uc3Qgc2Vjb25kTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1NvY2lhbCBNZWRpYScsICdkb3duLWxlZnQnKTtcclxuICBjb25zdCBzZWNvbmRMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCBEYXRlLm5vdygpLCAnZG93bi1yaWdodCcpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZmlyc3RMaS5lbCwgZmlyc3RMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoc2Vjb25kTGkuZWwsIHNlY29uZExpbmspO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodWxOYXZEb3duSG9tZS5lbCwgZmlyc3RMaSwgc2Vjb25kTGkpO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChuYXZEb3duSG9tZS5lbCwgdWxOYXZEb3duSG9tZSk7XHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KGZvb3Rlci5lbCwgbmF2RG93bkhvbWUpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdkJhckRvd247XHJcbiIsImltcG9ydCBkaXNwbGF5TmF2QmFyVXBwZXIgZnJvbSAnLi9uYXZNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU1haW5Db250ZW50IGZyb20gJy4vbWFpbk1vZHVsZSc7XHJcbmltcG9ydCBkaXNwbGF5TmF2QmFyRG93biBmcm9tICcuL2Zvb3Rlck1vZHVsZSc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBuYXYgPSBkaXNwbGF5TmF2QmFyVXBwZXIoKTtcclxuICBjb25zdCBtYWluID0gZGlzcGxheU1haW5Db250ZW50KCkubWFpbkNvbnRlbnQuZWw7XHJcbiAgY29uc3QgZm9vdGVyID0gZGlzcGxheU5hdkJhckRvd24oKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TWFpbkNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnbWFpbicsICcnLCAnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3Qgd3JhcHBlckNvbnRlbnQgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd3cmFwcGVyLWNvbnRlbnQnKTtcclxuICBjb25zdCBjb250ZW50TG9nbyA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4tbG9nbycpO1xyXG4gIGNvbnN0IGNvbnRlbnRTbG9nYW4gPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdtYWluLXNsb2dhbicpO1xyXG4gIGNvbnN0IGNvbnRlbnRJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21haW4taW1hZ2UnKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGVsZW1lbnRGYWN0b3J5KCdoMicsICdIRUJFJywgJycpO1xyXG5cclxuICBjb25zdCBzbG9nYW4gPSBlbGVtZW50RmFjdG9yeSgnaDMnLCAnVmVnZXRhcmlhbiBjdWlzaW5lIHdpdGhvdXQgZG9nbWFzIG9yIGNvbXBsZXhlcycsICcnKTtcclxuXHJcbiAgY29uc3QgbGFuZHNjYXBlSW1hZ2UgPSBlbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdsYW5kc2NhcGUtaW1nJyk7XHJcbiAgY29uc3QgcG9ydHJhaXRJbWFnZSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3BvcnRyYWl0LWltZycpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoY29udGVudExvZ28uZWwsIGxvZ28pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50U2xvZ2FuLmVsLCBzbG9nYW4pO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudChjb250ZW50SW1hZ2UuZWwsIGxhbmRzY2FwZUltYWdlLCBwb3J0cmFpdEltYWdlKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KHdyYXBwZXJDb250ZW50LmVsLCBjb250ZW50TG9nbywgY29udGVudFNsb2dhbiwgY29udGVudEltYWdlKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQobWFpbkNvbnRlbnQuZWwsIHdyYXBwZXJDb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1haW5Db250ZW50LFxyXG4gICAgd3JhcHBlckNvbnRlbnQsXHJcbiAgICBjb250ZW50TG9nbyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1haW5Db250ZW50O1xyXG4iLCJpbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcbmltcG9ydCBlbGVtZW50RmFjdG9yeSBmcm9tICcuLi9lbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBkaXNwbGF5TWFpbkNvbnRlbnQgZnJvbSAnLi9tYWluTW9kdWxlJztcclxuXHJcbmNvbnN0IGZvb2RzID0gW1xyXG4gIFsnU25hY2tzJywgJ1NvcGEgUGhvJywgJ1HDvG9ybiBhbmQgY3VycnkgY3JvcXVldHRlJ10sXHJcbiAgWydTdGFydGVycycsICdTd2VldCBwb3RhdG8gY2FycGFjY2lvLCByZWQgb25pb24sIGZldGEgY2hlZXNlLCBmcmllZCBjb3JuLCBibGFjayBvbGl2ZXMsIHl1enUgdmluYWlncmV0dGUsIG9yYW5nZSBwb3dkZXIgYW5kIHdhdGVyY3Jlc3MnLCAnQXJ0aWNob2tlIGhlYXJ0IHN0dWZmZWQgd2l0aCB2ZWdhbiBmb2llIGdyYXMgYW5kIGhvbGxhbmRhaXNlIHNhdWNlJ10sXHJcbiAgWydQcmluY2lwYWwnLCAnR3JlZW4gY3VycnkgcmljZSB3aXRoIGNvcmlhbmRlciBhbmQgbGltZScsICdSYXZpb2xpcyBkZSBib3JyYWphIHJlbGxlbm9zIGRlIGNhbGFiYXphIGNvbiBtYW50ZXF1aWxsYSBkZSBzYWx2aWEgeSBsaW3Ds24nXSxcclxuICBbJ0Rlc3NlcnRzJywgJ0JsYWNrIGJlZXIgYW5kIGxpcXVvcmljZSBzcG9uZ2UgY2FrZSwgaG9tZW1hZGUgcXVpbmNlIGplbGx5LCBhbG1vbmQgaWNlIGNyZWFtIGFuZCB3aGl0ZSBjaG9jb2xhdGUgc291cC4nLCAnU3BpY2VkIG1hbmdvIGFuZCBwYXNzaW9uIGZydWl0IHNvdXAnXSxcclxuXTtcclxuXHJcbmNvbnN0IGRpc3BsYXlPdXJNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXJNZW51ID0gZWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnd3JhcHBlci1tZW51Jyk7XHJcbiAgY29uc3QgcHJpY2VNZW51ID0gZWxlbWVudEZhY3RvcnkoJ3AnLCAnMjMsMDAkIHBlciBwZXJzb24nLCAncHJpY2UtbWVudScpO1xyXG4gIGNvbnN0IHNwYW5NZW51ID0gZWxlbWVudEZhY3RvcnkoJ3NwYW4nLCAnTUVOVScsICdzcGFuLW1lbnUnKTtcclxuICBjb25zdCB0aXRsZU1lbnUgPSBlbGVtZW50RmFjdG9yeSgnaDEnLCAnVGFzdGluZycsICd0aXRsZS1tZW51Jyk7XHJcbiAgY29uc3QgaW1nTWVudSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ2ltZy1tZW51Jyk7XHJcbiAgY29uc3QgbWVudSA9IGVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ21lbnUnKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGRpc3BsYXlNYWluQ29udGVudCgpLmNvbnRlbnRMb2dvO1xyXG5cclxuICBsb2dvLmVsLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG9nbycpO1xyXG5cclxuICBmb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGVsZW1lbnRGYWN0b3J5KCdoMicsIGAke2Zvb2RbMF19YCwgJ21lbnUtc2VjdGlvbicpO1xyXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZWxlbWVudEZhY3RvcnkoJ3VsJywgJycsICdtZW51LWRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBmaXJzdENob2ljZSA9IGVsZW1lbnRGYWN0b3J5KCdsaScsIGAke2Zvb2RbMV19YCwgJ2Nob2ljZS1tZW51Jyk7XHJcbiAgICBjb25zdCBzZWNvbmRDaG9pY2UgPSBlbGVtZW50RmFjdG9yeSgnbGknLCBgJHtmb29kWzJdfWAsICdjaG9pY2UtbWVudScpO1xyXG5cclxuICAgIGFwcGVuZEVsZW1lbnRUb1BhcmVudChtZW51RGVzY3JpcHRpb24uZWwsIGZpcnN0Q2hvaWNlLCBzZWNvbmRDaG9pY2UpO1xyXG5cclxuICAgIGFwcGVuZEVsZW1lbnRUb1BhcmVudChtZW51LmVsLCBtZW51U2VjdGlvbiwgbWVudURlc2NyaXB0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsUm90YXRlID0gKCkgPT4ge1xyXG4gICAgbG9nby5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7d2luZG93LnBhZ2VZT2Zmc2V0IC8gNn1kZWcpYDtcclxuICB9O1xyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxSb3RhdGUoKTtcclxuICB9O1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQod3JhcHBlck1lbnUuZWwsIHByaWNlTWVudSwgc3Bhbk1lbnUsIHRpdGxlTWVudSwgaW1nTWVudSwgbWVudSwgbG9nbyk7XHJcblxyXG4gIHJldHVybiB3cmFwcGVyTWVudS5lbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlPdXJNZW51O1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5pbXBvcnQgYXBwZW5kRWxlbWVudFRvUGFyZW50IGZyb20gJy4uL2FwcGVuZEVsZW1lbnRUb1BhcmVudCc7XHJcblxyXG5jb25zdCBkaXNwbGF5TmF2QmFyVXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2VXBwZXJIb21lID0gZWxlbWVudEZhY3RvcnkoJ25hdicsICcnLCAnbWVudS11cHBlci1ob21lJyk7XHJcbiAgY29uc3QgdWxOYXZVcHBlckhvbWUgPSBlbGVtZW50RmFjdG9yeSgndWwnLCAnJywgJycpO1xyXG4gIGNvbnN0IGZpcnN0TGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ2ZpcnN0LWxpJyk7XHJcbiAgY29uc3Qgc2Vjb25kTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3NlY29uZC1saScpO1xyXG4gIGNvbnN0IHRoaXJkTGkgPSBlbGVtZW50RmFjdG9yeSgnbGknLCAnJywgJ3RoaXJkLWxpJyk7XHJcbiAgY29uc3QgZmlyc3RMaW5rID0gZWxlbWVudEZhY3RvcnkoJ2EnLCAnSG9tZScsICd1cHBlci1sZWZ0Jyk7XHJcbiAgY29uc3Qgc2Vjb25kTGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1Jlc2VydmF0aW9ucyBhbmQgb3JkZXJzJywgJ3VwcGVyLWNlbnRlcicpO1xyXG4gIGNvbnN0IHRoaXJkTGluayA9IGVsZW1lbnRGYWN0b3J5KCdhJywgJ1Rhc3RpbmcgbWVudScsICd1cHBlci1yaWdodCcpO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoZmlyc3RMaS5lbCwgZmlyc3RMaW5rKTtcclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQoc2Vjb25kTGkuZWwsIHNlY29uZExpbmspO1xyXG4gIGFwcGVuZEVsZW1lbnRUb1BhcmVudCh0aGlyZExpLmVsLCB0aGlyZExpbmspO1xyXG5cclxuICBhcHBlbmRFbGVtZW50VG9QYXJlbnQodWxOYXZVcHBlckhvbWUuZWwsIGZpcnN0TGksIHNlY29uZExpLCB0aGlyZExpKTtcclxuXHJcbiAgYXBwZW5kRWxlbWVudFRvUGFyZW50KG5hdlVwcGVySG9tZS5lbCwgdWxOYXZVcHBlckhvbWUpO1xyXG5cclxuICByZXR1cm4gbmF2VXBwZXJIb21lLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU5hdkJhclVwcGVyO1xyXG4iLCJpbXBvcnQgZWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vZWxlbWVudEZhY3RvcnknO1xyXG5cclxuY29uc3QgZGlzcGxheU91clJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlUmVzZXJ2YXRpb24gPSBlbGVtZW50RmFjdG9yeSgnaDEnLCAnUmVzZXJ2YXRpb25zIHBhZ2VzJywgJ3RpdGxlJyk7XHJcblxyXG4gIHJldHVybiB0aXRsZVJlc2VydmF0aW9uLmVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU91clJlc2VydmF0aW9uO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SG9tZVBhZ2UgZnJvbSAnLi9tb2R1bGVzL2hvbWVNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU91ck1lbnUgZnJvbSAnLi9tb2R1bGVzL21lbnVNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU91clJlc2VydmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbnNNb2R1bGUnO1xyXG5pbXBvcnQgZGlzcGxheU1haW5Db250ZW50IGZyb20gJy4vbW9kdWxlcy9tYWluTW9kdWxlJztcclxuXHJcbmRpc3BsYXlIb21lUGFnZSgpO1xyXG5cclxuY29uc3QgZmlyc3ROYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLWxlZnQnKTtcclxuY29uc3Qgc2Vjb25kTmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cHBlci1jZW50ZXInKTtcclxuY29uc3QgdGhpcmROYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwcGVyLXJpZ2h0Jyk7XHJcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xyXG5cclxuY29uc3QgaG9tZSA9IGRpc3BsYXlNYWluQ29udGVudCgpLndyYXBwZXJDb250ZW50LmVsO1xyXG5jb25zdCByZXNlcnZhdGlvbiA9IGRpc3BsYXlPdXJSZXNlcnZhdGlvbigpO1xyXG5jb25zdCBtZW51ID0gZGlzcGxheU91ck1lbnUoKTtcclxuXHJcbmZpcnN0TmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59KTtcclxuXHJcbnNlY29uZE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbik7XHJcbn0pO1xyXG5cclxudGhpcmROYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=