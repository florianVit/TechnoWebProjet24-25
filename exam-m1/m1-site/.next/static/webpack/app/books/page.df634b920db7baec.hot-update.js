"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/page",{

/***/ "(app-pages-browser)/./src/app/books/page.tsx":
/*!********************************!*\
  !*** ./src/app/books/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Books; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookCard */ \"(app-pages-browser)/./src/app/components/BookCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction Books() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    // Récupère les livres depuis l'API\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/books\").then(function(response) {\n            console.log(response.data);\n            setBooks(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    // on charge les livres au chargement de la page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Books Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            books.map(function(book) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_2__.BookCard, {\n                    book: book\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 28\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Books, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = Books;\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNrQjtBQUVNO0FBRW5DLFNBQVNJOzs7SUFDdEIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFFMUIsbUNBQW1DO0lBQ25DLElBQU1NLFlBQVk7UUFDaEJQLDZDQUFLQSxDQUFDUSxHQUFHLENBQWMsK0JBQStCQyxJQUFJLENBQUMsU0FBQ0M7WUFDMURDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csSUFBSTtZQUN6QlAsU0FBU0ksU0FBU0csSUFBSTtRQUN4QixFQUFHQyxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7WUFDUkosUUFBUUksS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEsZ0RBQWdEO0lBQ2hEYixnREFBU0EsQ0FBQztRQUNSSztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFFSFosTUFBTWEsR0FBRyxDQUFDLFNBQUNDO3FDQUFTLDhEQUFDaEIsMERBQVFBO29CQUFDZ0IsTUFBTUE7Ozs7Ozs7Ozs7Ozs7QUFHM0M7R0F6QndCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jvb2tzL3BhZ2UudHN4PzI5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Cb29rTW9kZWxcIjtcclxuaW1wb3J0IHsgQm9va0NhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb29rQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va3MoKSB7XHJcbiAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxCb29rTW9kZWxbXT4oW10pXHJcblxyXG4gIC8vIFLDqWN1cMOocmUgbGVzIGxpdnJlcyBkZXB1aXMgbCdBUElcclxuICBjb25zdCBsb2FkQm9va3MgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQ8Qm9va01vZGVsW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYm9va3MnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBzZXRCb29rcyhyZXNwb25zZS5kYXRhKVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gb24gY2hhcmdlIGxlcyBsaXZyZXMgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRCb29rcygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+Qm9va3MgUGFnZTwvaDI+XHJcblxyXG4gICAgICB7Ym9va3MubWFwKChib29rKSA9PiA8Qm9va0NhcmQgYm9vaz17Ym9va30gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvb2tDYXJkIiwiQm9va3MiLCJib29rcyIsInNldEJvb2tzIiwibG9hZEJvb2tzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiaDIiLCJtYXAiLCJib29rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});