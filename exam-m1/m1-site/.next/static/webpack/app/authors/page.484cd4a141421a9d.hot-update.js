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

/***/ "(app-pages-browser)/./src/app/authors/page.tsx":
/*!**********************************!*\
  !*** ./src/app/authors/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_Author_AuthorCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Author/AuthorCard */ \"(app-pages-browser)/./src/app/components/Author/AuthorCard.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* harmony import */ var _components_Author_AuthorForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Author/AuthorForm */ \"(app-pages-browser)/./src/app/components/Author/AuthorForm.tsx\");\n/* harmony import */ var _components_Author_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Author/SearchBar */ \"(app-pages-browser)/./src/app/components/Author/SearchBar.tsx\");\n/* harmony import */ var _styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Authors.module.css */ \"(app-pages-browser)/./src/app/styles/Authors.module.css\");\n/* harmony import */ var _styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Authors() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), authors = _useState[0], setAuthors = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isEditing = _useState1[0], setIsEditing = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), editAuthorId = _useState2[0], setEditAuthorId = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchQuery = _useState3[0], setSearchQuery = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"name\"), 2), sortCriteria = _useState4[0], setSortCriteria = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), isAscending = _useState5[0], setIsAscending = _useState5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchAuthors();\n    }, []);\n    var fetchAuthors = function() {\n        fetch(\"http://localhost:3001/authors/select-all/find\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setAuthors(data);\n        })[\"catch\"](function(error) {\n            return console.error(\"Error fetching authors:\", error);\n        });\n    };\n    var deleteAuthor = function(id) {\n        fetch(\"http://localhost:3001/authors/by-id/delete/\".concat(id), {\n            method: \"DELETE\"\n        }).then(function() {\n            return setAuthors(function(prevAuthors) {\n                return prevAuthors.filter(function(author) {\n                    return author.id !== id;\n                });\n            });\n        })[\"catch\"](function(error) {\n            return console.error(\"Error deleting author:\", error);\n        });\n    };\n    var filteredAuthors = authors.filter(function(author) {\n        return author.nom.toLowerCase().includes(searchQuery.toLowerCase());\n    }).sort(function(a, b) {\n        var order = isAscending ? 1 : -1;\n        if (sortCriteria === \"name\") {\n            return a.nom.localeCompare(b.nom) * order;\n        } else if (sortCriteria === \"books\") {\n            return (b.nbr_livres_ecrits - a.nbr_livres_ecrits) * order;\n        } else if (sortCriteria === \"rating\") {\n            return (b.moyenne_avis - a.moyenne_avis) * order;\n        }\n        return 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"authors-list-title\"]),\n                children: \"Authors Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Author_SearchBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                searchQuery: searchQuery,\n                setSearchQuery: setSearchQuery\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"sort-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Sort By: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: sortCriteria,\n                        onChange: function(e) {\n                            return setSortCriteria(e.target.value);\n                        },\n                        className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"sort-select\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"books\",\n                                children: \"Number of Books\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"rating\",\n                                children: \"Average Rating\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setIsAscending(!isAscending);\n                        },\n                        className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"sort-order-toggle\"]),\n                        children: isAscending ? \"Ascending\" : \"Descending\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"authors-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Authors_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"authors-list\"]),\n                        children: filteredAuthors.map(function(author) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/authors/\".concat(author.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Author_AuthorCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_9__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_10__._)({}, author), {\n                                        deleteAuthor: deleteAuthor,\n                                        triggerEdit: function() {\n                                            setIsEditing(true);\n                                            setEditAuthorId(author.id);\n                                        }\n                                    }), void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this)\n                            }, author.id, false, {\n                                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Author_AuthorForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fetchAuthors: fetchAuthors,\n                        isEditing: isEditing,\n                        editAuthorId: editAuthorId,\n                        setIsEditing: setIsEditing,\n                        setEditAuthorId: setEditAuthorId\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"Bm1Bd6dy/5Iz4cx/L/fKX/3DgVc=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBRXRCO0FBQzRCO0FBQ2Y7QUFDZTtBQUNGO0FBQ0w7QUFZbkMsU0FBU1M7OztJQUN0QixJQUE4QlAsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFXLEVBQUUsT0FBNUNRLFVBQXVCUixjQUFkUyxhQUFjVDtJQUM5QixJQUFrQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXBDVSxZQUEyQlYsZUFBaEJXLGVBQWdCWDtJQUNsQyxJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUF6RFksZUFBaUNaLGVBQW5CYSxrQkFBbUJiO0lBQ3hDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeENjLGNBQStCZCxlQUFsQmUsaUJBQWtCZjtJQUN0QyxJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFlLGFBQXhEZ0IsZUFBaUNoQixlQUFuQmlCLGtCQUFtQmpCO0lBQ3hDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBeENrQixjQUErQmxCLGVBQWxCbUIsaUJBQWtCbkI7SUFFdENELGdEQUFTQSxDQUFDO1FBQ1JxQjtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQU1BLGVBQWU7UUFDbkJDLE1BQU0saURBQ0hDLElBQUksQ0FBQ0MsU0FBQUE7bUJBQVlBLFNBQVNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csU0FBQUE7bUJBQVFoQixXQUFXZ0I7VUFDeEJDLENBQUFBLFFBQUssQ0FBQ0MsU0FBQUE7bUJBQVNDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBOztJQUM3RDtJQUVBLElBQU1FLGVBQWUsU0FBQ0M7UUFDcEJULE1BQU0sOENBQWlELE9BQUhTLEtBQU07WUFBRUMsUUFBUTtRQUFTLEdBQzFFVCxJQUFJLENBQUM7bUJBQU1iLFdBQVd1QixTQUFBQTt1QkFBZUEsWUFBWUMsTUFBTSxDQUFDQyxTQUFBQTsyQkFBVUEsT0FBT0osRUFBRSxLQUFLQTs7O1VBQ2hGSixDQUFBQSxRQUFLLENBQUNDLFNBQUFBO21CQUFTQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTs7SUFDNUQ7SUFFQSxJQUFNUSxrQkFBa0IzQixRQUNyQnlCLE1BQU0sQ0FBQ0MsU0FBQUE7ZUFDTkEsT0FBT0UsR0FBRyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ3hCLFlBQVl1QixXQUFXO09BRTFERSxJQUFJLENBQUMsU0FBQ0MsR0FBR0M7UUFDUixJQUFNQyxRQUFReEIsY0FBYyxJQUFJLENBQUM7UUFDakMsSUFBSUYsaUJBQWlCLFFBQVE7WUFDM0IsT0FBT3dCLEVBQUVKLEdBQUcsQ0FBQ08sYUFBYSxDQUFDRixFQUFFTCxHQUFHLElBQUlNO1FBQ3RDLE9BQU8sSUFBSTFCLGlCQUFpQixTQUFTO1lBQ25DLE9BQU8sQ0FBQ3lCLEVBQUVHLGlCQUFpQixHQUFHSixFQUFFSSxpQkFBaUIsSUFBSUY7UUFDdkQsT0FBTyxJQUFJMUIsaUJBQWlCLFVBQVU7WUFDcEMsT0FBTyxDQUFDeUIsRUFBRUksWUFBWSxHQUFHTCxFQUFFSyxZQUFZLElBQUlIO1FBQzdDO1FBQ0EsT0FBTztJQUNUO0lBRUYscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQzNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM0QztnQkFBR0MsV0FBVzFDLHlGQUE0QjswQkFBRTs7Ozs7OzBCQUc3Qyw4REFBQ0Qsb0VBQVNBO2dCQUFDUyxhQUFhQTtnQkFBYUMsZ0JBQWdCQTs7Ozs7OzBCQUVyRCw4REFBQytCO2dCQUFJRSxXQUFXMUMscUZBQXdCOztrQ0FDdEMsOERBQUMyQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsT0FBT25DO3dCQUNQb0MsVUFBVSxTQUFDQzttQ0FBTXBDLGdCQUFnQm9DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7d0JBQy9DSCxXQUFXMUMsa0ZBQXFCOzswQ0FFaEMsOERBQUNpRDtnQ0FBT0osT0FBTTswQ0FBTzs7Ozs7OzBDQUNyQiw4REFBQ0k7Z0NBQU9KLE9BQU07MENBQVE7Ozs7OzswQ0FDdEIsOERBQUNJO2dDQUFPSixPQUFNOzBDQUFTOzs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDSzt3QkFDQ0MsU0FBUzttQ0FBTXRDLGVBQWUsQ0FBQ0Q7O3dCQUMvQjhCLFdBQVcxQyx3RkFBMkI7a0NBRXJDWSxjQUFjLGNBQWM7Ozs7Ozs7Ozs7OzswQkFLakMsOERBQUM0QjtnQkFBSUUsV0FBVzFDLHdGQUEyQjs7a0NBQ3pDLDhEQUFDd0M7d0JBQUlFLFdBQVcxQyxtRkFBc0I7a0NBQ25DNkIsZ0JBQWdCdUIsR0FBRyxDQUFDeEIsU0FBQUE7aURBQ25CLDhEQUFDakMsaURBQUlBO2dDQUFDMEQsTUFBTSxZQUFzQixPQUFWekIsT0FBT0osRUFBRTswQ0FDL0IsNEVBQUNVOzhDQUNDLDRFQUFDdEMscUVBQVVBLEVBQUFBLG1FQUFBQSxDQUFBQSw4REFBQUEsS0FDTGdDO3dDQUNKTCxjQUFjQTt3Q0FDZCtCLGFBQWE7NENBQ1hqRCxhQUFhOzRDQUNiRSxnQkFBZ0JxQixPQUFPSixFQUFFO3dDQUMzQjs7Ozs7Ozs7Ozs7K0JBUm9DSSxPQUFPSixFQUFFOzs7Ozs7Ozs7OztrQ0FldkQsOERBQUMxQixxRUFBVUE7d0JBQ1RnQixjQUFjQTt3QkFDZFYsV0FBV0E7d0JBQ1hFLGNBQWNBO3dCQUNkRCxjQUFjQTt3QkFDZEUsaUJBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0dBbEd3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL3BhZ2UudHN4P2NmZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQXV0aG9yQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhvci9BdXRob3JDYXJkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBBdXRob3JGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aG9yL0F1dGhvckZvcm0nO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aG9yL1NlYXJjaEJhcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0F1dGhvcnMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgQXV0aG9yIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5vbTogc3RyaW5nO1xyXG4gIHBob3RvOiBzdHJpbmc7XHJcbiAgbmJyX2xpdnJlc19lY3JpdHM6IG51bWJlcjtcclxuICBtb3llbm5lX2F2aXM6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBTb3J0Q3JpdGVyaWEgPSAnbmFtZScgfCAnYm9va3MnIHwgJ3JhdGluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JzKCkge1xyXG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlPEF1dGhvcltdPihbXSk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdEF1dGhvcklkLCBzZXRFZGl0QXV0aG9ySWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NvcnRDcml0ZXJpYSwgc2V0U29ydENyaXRlcmlhXSA9IHVzZVN0YXRlPFNvcnRDcml0ZXJpYT4oJ25hbWUnKTtcclxuICBjb25zdCBbaXNBc2NlbmRpbmcsIHNldElzQXNjZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hBdXRob3JzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEF1dGhvcnMgPSAoKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGhvcnMvc2VsZWN0LWFsbC9maW5kJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHNldEF1dGhvcnMoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhdXRob3JzOicsIGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQXV0aG9yID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aG9ycy9ieS1pZC9kZWxldGUvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gc2V0QXV0aG9ycyhwcmV2QXV0aG9ycyA9PiBwcmV2QXV0aG9ycy5maWx0ZXIoYXV0aG9yID0+IGF1dGhvci5pZCAhPT0gaWQpKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGF1dGhvcjonLCBlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkQXV0aG9ycyA9IGF1dGhvcnNcclxuICAgIC5maWx0ZXIoYXV0aG9yID0+XHJcbiAgICAgIGF1dGhvci5ub20udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgY29uc3Qgb3JkZXIgPSBpc0FzY2VuZGluZyA/IDEgOiAtMTtcclxuICAgICAgaWYgKHNvcnRDcml0ZXJpYSA9PT0gJ25hbWUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubm9tLmxvY2FsZUNvbXBhcmUoYi5ub20pICogb3JkZXI7XHJcbiAgICAgIH0gZWxzZSBpZiAoc29ydENyaXRlcmlhID09PSAnYm9va3MnKSB7XHJcbiAgICAgICAgcmV0dXJuIChiLm5icl9saXZyZXNfZWNyaXRzIC0gYS5uYnJfbGl2cmVzX2Vjcml0cykgKiBvcmRlcjtcclxuICAgICAgfSBlbHNlIGlmIChzb3J0Q3JpdGVyaWEgPT09ICdyYXRpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIChiLm1veWVubmVfYXZpcyAtIGEubW95ZW5uZV9hdmlzKSAqIG9yZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvcnMtbGlzdC10aXRsZVwiXX0+QXV0aG9ycyBQYWdlPC9oMj5cclxuXHJcbiAgICAgIHsvKiBTZWFyY2ggYW5kIFNvcnQgQ29udHJvbHMgKi99XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic29ydC1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxsYWJlbD5Tb3J0IEJ5OiA8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtzb3J0Q3JpdGVyaWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvcnRDcml0ZXJpYShlLnRhcmdldC52YWx1ZSBhcyBTb3J0Q3JpdGVyaWEpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJzb3J0LXNlbGVjdFwiXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmFtZVwiPk5hbWU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib29rc1wiPk51bWJlciBvZiBCb29rczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPkF2ZXJhZ2UgUmF0aW5nPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQXNjZW5kaW5nKCFpc0FzY2VuZGluZyl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInNvcnQtb3JkZXItdG9nZ2xlXCJdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0FzY2VuZGluZyA/ICdBc2NlbmRpbmcnIDogJ0Rlc2NlbmRpbmcnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBBdXRob3JzIExpc3QgYW5kIEZvcm0gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhdXRob3JzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImF1dGhvcnMtbGlzdFwiXX0+XHJcbiAgICAgICAgICB7ZmlsdGVyZWRBdXRob3JzLm1hcChhdXRob3IgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2F1dGhvcnMvJHthdXRob3IuaWR9YH0ga2V5PXthdXRob3IuaWR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEF1dGhvckNhcmRcclxuICAgICAgICAgICAgICAgICAgey4uLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlQXV0aG9yPXtkZWxldGVBdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXJFZGl0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNFZGl0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXRBdXRob3JJZChhdXRob3IuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8QXV0aG9yRm9ybVxyXG4gICAgICAgICAgZmV0Y2hBdXRob3JzPXtmZXRjaEF1dGhvcnN9XHJcbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cclxuICAgICAgICAgIGVkaXRBdXRob3JJZD17ZWRpdEF1dGhvcklkfVxyXG4gICAgICAgICAgc2V0SXNFZGl0aW5nPXtzZXRJc0VkaXRpbmd9XHJcbiAgICAgICAgICBzZXRFZGl0QXV0aG9ySWQ9e3NldEVkaXRBdXRob3JJZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQXV0aG9yQ2FyZCIsIkhlYWRlciIsIkF1dGhvckZvcm0iLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJBdXRob3JzIiwiYXV0aG9ycyIsInNldEF1dGhvcnMiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJlZGl0QXV0aG9ySWQiLCJzZXRFZGl0QXV0aG9ySWQiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5Iiwic29ydENyaXRlcmlhIiwic2V0U29ydENyaXRlcmlhIiwiaXNBc2NlbmRpbmciLCJzZXRJc0FzY2VuZGluZyIsImZldGNoQXV0aG9ycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRlbGV0ZUF1dGhvciIsImlkIiwibWV0aG9kIiwicHJldkF1dGhvcnMiLCJmaWx0ZXIiLCJhdXRob3IiLCJmaWx0ZXJlZEF1dGhvcnMiLCJub20iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwib3JkZXIiLCJsb2NhbGVDb21wYXJlIiwibmJyX2xpdnJlc19lY3JpdHMiLCJtb3llbm5lX2F2aXMiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaHJlZiIsInRyaWdnZXJFZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/page.tsx\n"));

/***/ })

});