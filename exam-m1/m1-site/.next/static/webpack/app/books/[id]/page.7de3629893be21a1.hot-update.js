"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/[id]/page",{

/***/ "(app-pages-browser)/./src/app/books/[id]/page.tsx":
/*!*************************************!*\
  !*** ./src/app/books/[id]/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_BookCardDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BookCardDetail */ \"(app-pages-browser)/./src/app/components/BookCardDetail.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Modal */ \"(app-pages-browser)/./src/app/components/Modal.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ \"(app-pages-browser)/./src/app/components/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar BookDetailsPage = function() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2), book = _useState[0], setBook = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState1[0], setIsModalOpen = _useState1[1];\n    var loadBook = function() {\n        fetch(\"http://localhost:3001/books/\".concat(id)).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            setBook(data);\n        });\n    };\n    var handleDelete = function() {\n        fetch(\"http://localhost:3001/books/\".concat(id), {\n            method: \"DELETE\"\n        }).then(function() {});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBook();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Book Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            book ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCardDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                book: book\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                onClick: function() {\n                    return setIsModalOpen(true);\n                },\n                children: \"Supprimer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isModalOpen,\n                title: \"Confirmation de suppression\",\n                onCancel: function() {\n                    return setIsModalOpen(false);\n                },\n                onClose: function() {\n                    return setIsModalOpen(false);\n                },\n                onOk: handleDelete,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xcates-vous s\\xfbr de vouloir supprimer ce livre ?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BookDetailsPage, \"rekaxWUvA0lj+oOBWT4HPWWzOao=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"BookDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQ087QUFFTTtBQUNkO0FBQ0U7QUFDZjtBQUVsQyxJQUFNTSxrQkFBc0I7O0lBQ3hCLElBQU0sS0FBU0osMERBQVNBLEdBQWhCSztJQUNSLElBQXdCTixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLFFBQXpCTyxPQUFpQlAsY0FBWFEsVUFBV1I7SUFDeEIsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUF4Q1MsY0FBK0JULGVBQWxCVSxpQkFBa0JWO0lBRXRDLElBQU1XLFdBQVc7UUFDYkMsTUFBTSwrQkFBa0MsT0FBSE4sS0FDaENPLElBQUksQ0FBQyxTQUFDQzttQkFBYUEsU0FBU0MsSUFBSTtXQUNoQ0YsSUFBSSxDQUFDLFNBQUNHO1lBQ0hSLFFBQVFRO1FBQ1o7SUFFUjtJQUVBLElBQU1DLGVBQWU7UUFDakJMLE1BQU0sK0JBQWtDLE9BQUhOLEtBQU07WUFBRVksUUFBUTtRQUFTLEdBQ3pETCxJQUFJLENBQUMsWUFFTjtJQUNSO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ05ZO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0k7OzBCQUNJLDhEQUFDUTswQkFBRzs7Ozs7O1lBQ0haLHFCQUNHLDhEQUFDTCxrRUFBY0E7Z0JBQUNLLE1BQU1BOzs7OztzQ0FFdEIsOERBQUNhOzBCQUFFOzs7Ozs7MEJBRVAsOERBQUNoQixzREFBTUE7Z0JBQUNpQixTQUFTOzJCQUFNWCxlQUFlOzswQkFBTzs7Ozs7OzBCQUM3Qyw4REFBQ1Asb0RBQUtBO2dCQUNGbUIsUUFBUWI7Z0JBQ1JjLE9BQU07Z0JBQ05DLFVBQVU7MkJBQU1kLGVBQWU7O2dCQUMvQmUsU0FBUzsyQkFBTWYsZUFBZTs7Z0JBQzlCZ0IsTUFBTVQ7MEJBRU4sNEVBQUNHOzhCQUFFOzs7Ozs7Ozs7Ozs7O0FBSW5CO0dBN0NNZjs7UUFDYUosc0RBQVNBOzs7S0FEdEJJO0FBK0NOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeD9iN2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Cb29rTW9kZWxcIjtcclxuaW1wb3J0IEJvb2tDYXJkRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jvb2tDYXJkRGV0YWlsXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTW9kYWxcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB7ICB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5cclxuY29uc3QgQm9va0RldGFpbHNQYWdlOiBGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2Jvb2ssIHNldEJvb2tdID0gdXNlU3RhdGU8Qm9va01vZGVsPigpO1xyXG4gICAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEJvb2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ib29rcy8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Qm9vayhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYm9va3MvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRCb29rKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+Qm9vayBEZXRhaWxzPC9oMT5cclxuICAgICAgICAgICAge2Jvb2sgPyAoXHJcbiAgICAgICAgICAgICAgICA8Qm9va0NhcmREZXRhaWwgYm9vaz17Ym9va30gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4odHJ1ZSl9PlN1cHByaW1lcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbmZpcm1hdGlvbiBkZSBzdXBwcmVzc2lvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgb25Paz17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD7DinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBzdXBwcmltZXIgY2UgbGl2cmUgPzwvcD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rRGV0YWlsc1BhZ2U7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiQm9va0NhcmREZXRhaWwiLCJNb2RhbCIsIkJ1dHRvbiIsIkJvb2tEZXRhaWxzUGFnZSIsImlkIiwiYm9vayIsInNldEJvb2siLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwibG9hZEJvb2siLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaGFuZGxlRGVsZXRlIiwibWV0aG9kIiwiaDEiLCJwIiwib25DbGljayIsImlzT3BlbiIsInRpdGxlIiwib25DYW5jZWwiLCJvbkNsb3NlIiwib25PayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/[id]/page.tsx\n"));

/***/ })

});