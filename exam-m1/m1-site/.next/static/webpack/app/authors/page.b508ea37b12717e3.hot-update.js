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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Authors/Authors.module.css */ \"(app-pages-browser)/./src/app/styles/Authors/Authors.module.css\");\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar AuthorCard = function(param) {\n    var id = param.id, nom = param.nom, photo = param.photo, nbr_livres_ecrits = param.nbr_livres_ecrits, moyenne_avis = param.moyenne_avis, deleteAuthor = param.deleteAuthor, triggerEdit = param.triggerEdit, className = param.className;\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-card\"]), \" \").concat(className || \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: photo,\n                alt: \"\".concat(nom, \"'s photo\"),\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-photo\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-name\"]),\n                children: nom\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"books-count\"]),\n                children: [\n                    \"Books Written: \",\n                    nbr_livres_ecrits\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default().rating),\n                children: [\n                    \"Average Rating: \",\n                    moyenne_avis\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"author-actions\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return triggerEdit(id);\n                        },\n                        className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"edit-button\"]),\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return deleteAuthor(id);\n                        },\n                        className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"delete-button\"]),\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return router.push(\"/authors/\".concat(id));\n                        },\n                        children: \"Details\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(AuthorCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AuthorCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthorCard);\nvar _c;\n$RefreshReg$(_c, \"AuthorCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdXRob3IvQXV0aG9yQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNtQztBQUNqQjtBQXFCNUMsSUFBTUcsYUFBd0M7UUFBR0MsV0FBQUEsSUFBSUMsWUFBQUEsS0FBS0MsY0FBQUEsT0FBT0MsMEJBQUFBLG1CQUFtQkMscUJBQUFBLGNBQWNDLHFCQUFBQSxjQUFjQyxvQkFBQUEsYUFBYUMsa0JBQUFBOztJQUMzSCxJQUFNQyxTQUFTViwwREFBU0E7SUFDeEIscUJBQ0UsOERBQUNXO1FBQUlGLFdBQVcsR0FBNEJBLE9BQXpCViwwRkFBcUIsRUFBQyxLQUFtQixPQUFoQlUsYUFBYTs7MEJBQ3ZELDhEQUFDRztnQkFBSUMsS0FBS1Q7Z0JBQU9VLEtBQUssR0FBTyxPQUFKWCxLQUFJO2dCQUFXTSxXQUFXViwyRkFBc0I7Ozs7OzswQkFDekUsOERBQUNnQjtnQkFBR04sV0FBV1YsMEZBQXFCOzBCQUFHSTs7Ozs7OzBCQUN2Qyw4REFBQ2E7Z0JBQUVQLFdBQVdWLDBGQUFxQjs7b0JBQUU7b0JBQWdCTTs7Ozs7OzswQkFDckQsOERBQUNXO2dCQUFFUCxXQUFXVixrRkFBZ0I7O29CQUFFO29CQUFpQk87Ozs7Ozs7MEJBRWpELDhEQUFDSztnQkFBSUYsV0FBV1YsNkZBQXdCOztrQ0FDdEMsOERBQUNrQjt3QkFBT0MsU0FBUzttQ0FBTVYsWUFBWU47O3dCQUFLTyxXQUFXViwwRkFBcUI7a0NBQUU7Ozs7OztrQ0FHMUUsOERBQUNrQjt3QkFBT0MsU0FBUzttQ0FBTVgsYUFBYUw7O3dCQUFLTyxXQUFXViw0RkFBdUI7a0NBQUU7Ozs7OztrQ0FHN0UsOERBQUNrQjt3QkFBT0MsU0FBUzttQ0FBTVIsT0FBT1MsSUFBSSxDQUFDLFlBQWUsT0FBSGpCOztrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0dBcEJNRDs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBc0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdXRob3IvQXV0aG9yQ2FyZC50c3g/NzdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BdXRob3JzL0F1dGhvcnMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmludGVyZmFjZSBBdXRob3Ige1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbm9tOiBzdHJpbmc7XHJcbiAgcGhvdG86IHN0cmluZztcclxuICBuYnJfbGl2cmVzX2Vjcml0czogbnVtYmVyO1xyXG4gIG1veWVubmVfYXZpczogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aG9yQ2FyZFByb3BzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5vbTogc3RyaW5nO1xyXG4gIHBob3RvOiBzdHJpbmc7XHJcbiAgbmJyX2xpdnJlc19lY3JpdHM6IG51bWJlcjtcclxuICBtb3llbm5lX2F2aXM6IG51bWJlcjtcclxuICBkZWxldGVBdXRob3I6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHRyaWdnZXJFZGl0OiAoYXV0aG9yOiBBdXRob3IpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBdXRob3JDYXJkOiBSZWFjdC5GQzxBdXRob3JDYXJkUHJvcHM+ID0gKHsgaWQsIG5vbSwgcGhvdG8sIG5icl9saXZyZXNfZWNyaXRzLCBtb3llbm5lX2F2aXMsIGRlbGV0ZUF1dGhvciwgdHJpZ2dlckVkaXQsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJhdXRob3ItY2FyZFwiXX0gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgIDxpbWcgc3JjPXtwaG90b30gYWx0PXtgJHtub219J3MgcGhvdG9gfSBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvci1waG90b1wiXX0gLz5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aG9yLW5hbWVcIl19Pntub219PC9oMz5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJib29rcy1jb3VudFwiXX0+Qm9va3MgV3JpdHRlbjoge25icl9saXZyZXNfZWNyaXRzfTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJyYXRpbmdcIl19PkF2ZXJhZ2UgUmF0aW5nOiB7bW95ZW5uZV9hdmlzfTwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhdXRob3ItYWN0aW9uc1wiXX0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0cmlnZ2VyRWRpdChpZCl9IGNsYXNzTmFtZT17c3R5bGVzW1wiZWRpdC1idXR0b25cIl19PlxyXG4gICAgICAgICAgRWRpdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlQXV0aG9yKGlkKX0gY2xhc3NOYW1lPXtzdHlsZXNbXCJkZWxldGUtYnV0dG9uXCJdfT5cclxuICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9hdXRob3JzLyR7aWR9YCl9PkRldGFpbHM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlUm91dGVyIiwiQXV0aG9yQ2FyZCIsImlkIiwibm9tIiwicGhvdG8iLCJuYnJfbGl2cmVzX2Vjcml0cyIsIm1veWVubmVfYXZpcyIsImRlbGV0ZUF1dGhvciIsInRyaWdnZXJFZGl0IiwiY2xhc3NOYW1lIiwicm91dGVyIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Author/AuthorCard.tsx\n"));

/***/ })

});