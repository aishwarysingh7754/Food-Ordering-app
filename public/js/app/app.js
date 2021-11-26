/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var addToCart = document.querySelectorAll('.add-to-cart');
addToCart.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
  });
});

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: \"+\" and \"-\" must be surrounded by whitespace in calculations.\n   ╷\n51 │     min-height: calc(100vh-86px);\r\n   │                           ^\n   ╵\n  resources\\scss\\app.scss 51:27  root stylesheet\n    at processResult (E:\\foodtracker\\node_modules\\webpack\\lib\\NormalModule.js:748:19)\n    at E:\\foodtracker\\node_modules\\webpack\\lib\\NormalModule.js:850:5\n    at E:\\foodtracker\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at E:\\foodtracker\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (E:\\foodtracker\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at E:\\foodtracker\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (E:\\foodtracker\\node_modules\\sass\\sass.dart.js:96399:16)\n    at render_closure1.call$2 (E:\\foodtracker\\node_modules\\sass\\sass.dart.js:82305:12)\n    at _RootZone.runBinary$3$3 (E:\\foodtracker\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (E:\\foodtracker\\node_modules\\sass\\sass.dart.js:26806:21)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./resources/js/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/scss/app.scss"]();
/******/ 	
/******/ })()
;