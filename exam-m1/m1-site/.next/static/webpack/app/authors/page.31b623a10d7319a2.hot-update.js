"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/page",{

/***/ "(app-pages-browser)/./src/app/components/Author/AuthorCard.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/Author/AuthorCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Authors/Authors.module.css */ \"(app-pages-browser)/./src/app/styles/Authors/Authors.module.css\");\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// AuthorCard.tsx\n\n\n\nfunction AuthorCard(param) {\n    var id = param.id, nom = param.nom, photo = param.photo, nbr_livres_ecrits = param.nbr_livres_ecrits, moyenne_avis = param.moyenne_avis, deleteAuthor = param.deleteAuthor, triggerEdit = param.triggerEdit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-card\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: photo,\n                alt: nom,\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-photo\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-name\"]),\n                children: nom\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-books\"]),\n                children: [\n                    \"Books Written: \",\n                    nbr_livres_ecrits\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-rating\"]),\n                children: [\n                    \"Average Rating: \",\n                    moyenne_avis.toFixed(1)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return deleteAuthor(id);\n                },\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"delete-button\"]),\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return triggerEdit(id);\n                },\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"edit-button\"]),\n                children: \"Edit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = AuthorCard;\nvar _c;\n$RefreshReg$(_c, \"AuthorCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdXRob3IvQXV0aG9yQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCOztBQUNTO0FBQ21DO0FBYTlDLFNBQVNFLFdBQVcsS0FRakI7UUFQaEJDLEtBRGlDLE1BQ2pDQSxJQUNBQyxNQUZpQyxNQUVqQ0EsS0FDQUMsUUFIaUMsTUFHakNBLE9BQ0FDLG9CQUppQyxNQUlqQ0EsbUJBQ0FDLGVBTGlDLE1BS2pDQSxjQUNBQyxlQU5pQyxNQU1qQ0EsY0FDQUMsY0FQaUMsTUFPakNBO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdWLDBGQUFxQjs7MEJBQ25DLDhEQUFDVztnQkFBSUMsS0FBS1I7Z0JBQU9TLEtBQUtWO2dCQUFLTyxXQUFXViwyRkFBc0I7Ozs7OzswQkFDNUQsOERBQUNjO2dCQUFHSixXQUFXViwwRkFBcUI7MEJBQUdHOzs7Ozs7MEJBQ3ZDLDhEQUFDWTtnQkFBRUwsV0FBV1YsMkZBQXNCOztvQkFBRTtvQkFBZ0JLOzs7Ozs7OzBCQUN0RCw4REFBQ1U7Z0JBQUVMLFdBQVdWLDRGQUF1Qjs7b0JBQUU7b0JBQWlCTSxhQUFhVSxPQUFPLENBQUM7Ozs7Ozs7MEJBRTdFLDhEQUFDQztnQkFBT0MsU0FBUzsyQkFBTVgsYUFBYUw7O2dCQUFLUSxXQUFXViw0RkFBdUI7MEJBQUU7Ozs7OzswQkFHN0UsOERBQUNpQjtnQkFBT0MsU0FBUzsyQkFBTVYsWUFBWU47O2dCQUFLUSxXQUFXViwwRkFBcUI7MEJBQUU7Ozs7Ozs7Ozs7OztBQUtoRjtLQXhCd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdXRob3IvQXV0aG9yQ2FyZC50c3g/NzdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBdXRob3JDYXJkLnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BdXRob3JzL0F1dGhvcnMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmludGVyZmFjZSBBdXRob3JDYXJkUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbm9tOiBzdHJpbmc7XHJcbiAgcGhvdG86IHN0cmluZztcclxuICBuYnJfbGl2cmVzX2Vjcml0czogbnVtYmVyO1xyXG4gIG1veWVubmVfYXZpczogbnVtYmVyO1xyXG4gIGRlbGV0ZUF1dGhvcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgdHJpZ2dlckVkaXQ6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JDYXJkKHtcclxuICBpZCxcclxuICBub20sXHJcbiAgcGhvdG8sXHJcbiAgbmJyX2xpdnJlc19lY3JpdHMsXHJcbiAgbW95ZW5uZV9hdmlzLFxyXG4gIGRlbGV0ZUF1dGhvcixcclxuICB0cmlnZ2VyRWRpdFxyXG59OiBBdXRob3JDYXJkUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvci1jYXJkXCJdfT5cclxuICAgICAgPGltZyBzcmM9e3Bob3RvfSBhbHQ9e25vbX0gY2xhc3NOYW1lPXtzdHlsZXNbXCJhdXRob3ItcGhvdG9cIl19IC8+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvci1uYW1lXCJdfT57bm9tfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aG9yLWJvb2tzXCJdfT5Cb29rcyBXcml0dGVuOiB7bmJyX2xpdnJlc19lY3JpdHN9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvci1yYXRpbmdcIl19PkF2ZXJhZ2UgUmF0aW5nOiB7bW95ZW5uZV9hdmlzLnRvRml4ZWQoMSl9PC9wPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVBdXRob3IoaWQpfSBjbGFzc05hbWU9e3N0eWxlc1tcImRlbGV0ZS1idXR0b25cIl19PlxyXG4gICAgICAgIERlbGV0ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0cmlnZ2VyRWRpdChpZCl9IGNsYXNzTmFtZT17c3R5bGVzW1wiZWRpdC1idXR0b25cIl19PlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkF1dGhvckNhcmQiLCJpZCIsIm5vbSIsInBob3RvIiwibmJyX2xpdnJlc19lY3JpdHMiLCJtb3llbm5lX2F2aXMiLCJkZWxldGVBdXRob3IiLCJ0cmlnZ2VyRWRpdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgzIiwicCIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Author/AuthorCard.tsx\n"));

/***/ })

});