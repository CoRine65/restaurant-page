/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\n//module for contacts\nfunction contactPage() {\n  //grab the main content container\n  var content = document.getElementById(\"content\");\n\n  //create a div to hold our contact info\n  var contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"contact\");\n\n  //create a heading\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"Contact Page\";\n\n  //creating contacts\n  var phoneNumber = document.createElement(\"div\");\n  phoneNumber.textContent = \"123-456-7890\";\n  var email = document.createElement(\"div\");\n  email.textContent = \"webpackRestaurant@email.com\";\n\n  //append to contact div\n  contactContainer.appendChild(heading);\n  contactContainer.appendChild(phoneNumber);\n  contactContainer.appendChild(email);\n\n  //append to main content\n  content.appendChild(contactContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n//home page detail\nfunction homePage() {\n  // grab the content div\n  var content = document.getElementById(\"content\");\n\n  //create homepage elements\n  var headline = document.createElement(\"h2\");\n  headline.textContent = \"Welcome the Webpack Restaurant!\";\n  var descpription = document.createElement(\"p\");\n  descpription.textContent = \"We server delicious food and provide a cozy atmosphere.\";\n\n  //append the content div\n  content.appendChild(headline);\n  content.appendChild(descpription);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log(\"Hello from Webpack!\");\n\n//importing from the homepage.js into here\n\n\n\n\n// grab the main container\nvar content = document.getElementById(\"content\");\n\n//grab the buttons we created on the html\nvar homeBtn = document.getElementById(\"home-btn\");\nvar menuBtn = document.getElementById(\"menu-btn\");\nvar contactBtn = document.getElementById(\"contact-btn\");\n\n//utility function to clear and load each new page\nfunction loadPage(pageFunction) {\n  content.innerHTML = \"\"; //clears previous content so it won't stack\n  pageFunction();\n}\n\n//event Listeners for tab switching\nhomeBtn.addEventListener(\"click\", function () {\n  loadPage(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\nmenuBtn.addEventListener(\"click\", function () {\n  loadPage(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\ncontactBtn.addEventListener(\"click\", function () {\n  loadPage(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n//default load\nloadPage(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n//exporting the menu function\n\nfunction menuPage() {\n  //grab the main content container\n  var content = document.getElementById(\"content\");\n\n  //div to hold to the menu items\n  var menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu\");\n\n  //create a heading\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"Our Menu\";\n\n  //menu items \n  var item1 = document.createElement(\"div\");\n  item1.textContent = \"Margherita Pizza: $10\";\n  var item2 = document.createElement(\"div\");\n  item2.textContent = \"Classic Cheeseburger: $8\";\n\n  //appending to MENU CONTAINER\n  menuContainer.appendChild(heading);\n  menuContainer.appendChild(item1);\n  menuContainer.appendChild(item2);\n\n  //appending to the main container\n  content.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;