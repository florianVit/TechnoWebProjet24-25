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

/***/ "(app-pages-browser)/./src/app/providers/books.tsx":
/*!*************************************!*\
  !*** ./src/app/providers/books.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useBookProviders: function() { return /* binding */ useBookProviders; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar useBookProviders = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var getAuthorNameById = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(id) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/authors/by-id/find/\".concat(id))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            2,\n                            response.data.nom\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorNameById(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var loadBooks = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, booksWithAuthorNames, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/books\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            Promise.all(response.data.map(function() {\n                                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(book) {\n                                    var authorName;\n                                    return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                                        switch(_state.label){\n                                            case 0:\n                                                return [\n                                                    4,\n                                                    getAuthorNameById(book.authorId.toString())\n                                                ];\n                                            case 1:\n                                                authorName = _state.sent();\n                                                return [\n                                                    2,\n                                                    (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__._)({}, book), {\n                                                        authorName: authorName\n                                                    })\n                                                ];\n                                        }\n                                    });\n                                });\n                                return function(book) {\n                                    return _ref.apply(this, arguments);\n                                };\n                            }()))\n                        ];\n                    case 2:\n                        booksWithAuthorNames = _state.sent();\n                        setBooks(booksWithAuthorNames);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function loadBooks() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createAuthor = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(name) {\n            var error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/authors/create-author\", {\n                                nom: name,\n                                photo: \"\",\n                                nbr_livres_ecrits: 0,\n                                moyenne_avis: 0,\n                                biographie: \"\"\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createAuthor(name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getAuthorIdByName = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(name) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/authors/by-name/find/\".concat(name))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (response.data.length > 0) {\n                            return [\n                                2,\n                                response.data[0].id\n                            ];\n                        }\n                        return [\n                            2,\n                            null\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getAuthorIdByName(name) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var incrementAuthorBooksCount = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(authorId, book) {\n            var response, newNbrLivresEcrits, updatedListeLivre, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/authors/by-id/find/\".concat(authorId))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        newNbrLivresEcrits = response.data.nbr_livres_ecrits + 1;\n                        updatedListeLivre = response.data.liste_livre ? (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__._)(response.data.liste_livre).concat([\n                            book\n                        ]) : [\n                            book\n                        ];\n                        console.log(\"Updated liste livre:\");\n                        console.log(updatedListeLivre);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:3001/authors/update-author/\".concat(authorId), {\n                                nom: response.data.nom,\n                                photo: response.data.photo,\n                                nbr_livres_ecrits: newNbrLivresEcrits,\n                                moyenne_avis: response.data.moyenne_avis,\n                                biographie: response.data.biographie,\n                                liste_livre: updatedListeLivre\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function incrementAuthorBooksCount(authorId, book) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onCreate = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(title, publicationDate, authorName) {\n            var authorId, response, book, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            getAuthorIdByName(authorName)\n                        ];\n                    case 1:\n                        authorId = _state.sent();\n                        if (!!authorId) return [\n                            3,\n                            4\n                        ];\n                        return [\n                            4,\n                            createAuthor(authorName)\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            4,\n                            getAuthorIdByName(authorName)\n                        ];\n                    case 3:\n                        authorId = _state.sent();\n                        _state.label = 4;\n                    case 4:\n                        if (!authorId) {\n                            console.error(\"Author ID is undefined\");\n                            return [\n                                2\n                            ];\n                        }\n                        _state.label = 5;\n                    case 5:\n                        _state.trys.push([\n                            5,\n                            8,\n                            ,\n                            9\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/books\", {\n                                title: title,\n                                publicationDate: publicationDate,\n                                authorId: authorId.toString()\n                            })\n                        ];\n                    case 6:\n                        response = _state.sent();\n                        book = {\n                            id: response.data.id,\n                            title: title,\n                            publicationDate: publicationDate\n                        };\n                        return [\n                            4,\n                            incrementAuthorBooksCount(authorId, book)\n                        ];\n                    case 7:\n                        _state.sent();\n                        loadBooks();\n                        return [\n                            3,\n                            9\n                        ];\n                    case 8:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            9\n                        ];\n                    case 9:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onCreate(title, publicationDate, authorName) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        books: books,\n        loadBooks: loadBooks,\n        onCreate: onCreate\n    };\n};\n_s(useBookProviders, \"/iW9mSwgc4d+8Agrl++FSS1ccl8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvdmlkZXJzL2Jvb2tzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBRzFCLElBQU1FLG1CQUFtQjs7SUFDOUIsSUFBMEJELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDRSxRQUFtQkYsY0FBWkcsV0FBWUg7SUFFMUIsSUFBTUk7bUJBQW9CLDRFQUFPQztnQkFFdkJDLFVBRUNDOzs7Ozs7Ozs7O3dCQUZVOzs0QkFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyw0Q0FBK0MsT0FBSEg7Ozt3QkFBdkVDLFdBQVc7d0JBQ2pCOzs0QkFBT0EsU0FBU0csSUFBSSxDQUFDQyxHQUFHOzs7d0JBQ2pCSDt3QkFDUEksUUFBUUosS0FBSyxDQUFDQTs7Ozs7Ozs7Ozs7UUFFbEI7d0JBUE1ILGtCQUEyQkM7Ozs7SUFTakMsSUFBTU87bUJBQVk7Z0JBRVJOLFVBQ0FPLHNCQUtDTjs7Ozs7Ozs7Ozt3QkFOVTs7NEJBQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQWM7Ozt3QkFBeENGLFdBQVc7d0JBQ1k7OzRCQUFNUSxRQUFRQyxHQUFHLENBQUNULFNBQVNHLElBQUksQ0FBQ08sR0FBRzsyQ0FBQyw0RUFBT0M7d0NBQ2hFQzs7OztnREFBYTs7b0RBQU1kLGtCQUFrQmEsS0FBS0UsUUFBUSxDQUFDQyxRQUFROzs7Z0RBQTNERixhQUFhO2dEQUNuQjs7b0RBQU8sc0lBQUtEO3dEQUFNQyxZQUFBQTs7Ozs7Z0NBQ3BCO2dEQUh3RUQ7Ozs7Ozt3QkFBbEVKLHVCQUF1Qjt3QkFJN0JWLFNBQVNVOzs7Ozs7d0JBQ0ZOO3dCQUNQSSxRQUFRSixLQUFLLENBQUNBOzs7Ozs7Ozs7OztRQUVsQjt3QkFYTUs7Ozs7SUFhTixJQUFNUzttQkFBZSw0RUFBT0M7Z0JBU2pCZjs7Ozs7Ozs7Ozt3QkFQUDs7NEJBQU1SLDZDQUFLQSxDQUFDd0IsSUFBSSxDQUFDLCtDQUErQztn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X05fRS8uL3NyYy9hcHAvcHJvdmlkZXJzL2Jvb2tzLnRzeD85NDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Cb29rTW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VCb29rUHJvdmlkZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGU8Qm9va01vZGVsW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0QXV0aG9yTmFtZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRob3JzL2J5LWlkL2ZpbmQvJHtpZH1gKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubm9tO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZEJvb2tzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8Qm9va01vZGVsW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYm9va3MnKTtcclxuICAgICAgY29uc3QgYm9va3NXaXRoQXV0aG9yTmFtZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXNwb25zZS5kYXRhLm1hcChhc3luYyAoYm9vaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGhvck5hbWUgPSBhd2FpdCBnZXRBdXRob3JOYW1lQnlJZChib29rLmF1dGhvcklkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmJvb2ssIGF1dGhvck5hbWUgfTtcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRCb29rcyhib29rc1dpdGhBdXRob3JOYW1lcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVBdXRob3IgPSBhc3luYyAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aG9ycy9jcmVhdGUtYXV0aG9yJywge1xyXG4gICAgICAgIG5vbTogbmFtZSxcclxuICAgICAgICBwaG90bzogJycsXHJcbiAgICAgICAgbmJyX2xpdnJlc19lY3JpdHM6IDAsXHJcbiAgICAgICAgbW95ZW5uZV9hdmlzOiAwLFxyXG4gICAgICAgIGJpb2dyYXBoaWU6ICcnIFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEF1dGhvcklkQnlOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRob3JzL2J5LW5hbWUvZmluZC8ke25hbWV9YCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVswXS5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudEF1dGhvckJvb2tzQ291bnQgPSBhc3luYyAoYXV0aG9ySWQ6IHN0cmluZywgYm9vazogeyBpZDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBwdWJsaWNhdGlvbkRhdGU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGhvcnMvYnktaWQvZmluZC8ke2F1dGhvcklkfWApO1xyXG4gICAgICBjb25zdCBuZXdOYnJMaXZyZXNFY3JpdHMgPSByZXNwb25zZS5kYXRhLm5icl9saXZyZXNfZWNyaXRzICsgMTtcclxuICAgICAgY29uc3QgdXBkYXRlZExpc3RlTGl2cmUgPSByZXNwb25zZS5kYXRhLmxpc3RlX2xpdnJlID8gWy4uLnJlc3BvbnNlLmRhdGEubGlzdGVfbGl2cmUsIGJvb2tdIDogW2Jvb2tdO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZWQgbGlzdGUgbGl2cmU6XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cGRhdGVkTGlzdGVMaXZyZSk7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGhvcnMvdXBkYXRlLWF1dGhvci8ke2F1dGhvcklkfWAsIHtcclxuICAgICAgICBub206IHJlc3BvbnNlLmRhdGEubm9tLFxyXG4gICAgICAgIHBob3RvOiByZXNwb25zZS5kYXRhLnBob3RvLFxyXG4gICAgICAgIG5icl9saXZyZXNfZWNyaXRzOiBuZXdOYnJMaXZyZXNFY3JpdHMsXHJcbiAgICAgICAgbW95ZW5uZV9hdmlzOiByZXNwb25zZS5kYXRhLm1veWVubmVfYXZpcyxcclxuICAgICAgICBiaW9ncmFwaGllOiByZXNwb25zZS5kYXRhLmJpb2dyYXBoaWUsXHJcbiAgICAgICAgbGlzdGVfbGl2cmU6IHVwZGF0ZWRMaXN0ZUxpdnJlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGl0bGU6IHN0cmluZywgcHVibGljYXRpb25EYXRlOiBzdHJpbmcsIGF1dGhvck5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IGF1dGhvcklkID0gYXdhaXQgZ2V0QXV0aG9ySWRCeU5hbWUoYXV0aG9yTmFtZSk7XHJcbiAgICBpZiAoIWF1dGhvcklkKSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZUF1dGhvcihhdXRob3JOYW1lKTtcclxuICAgICAgYXV0aG9ySWQgPSBhd2FpdCBnZXRBdXRob3JJZEJ5TmFtZShhdXRob3JOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWF1dGhvcklkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRob3IgSUQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYm9va3MnLCB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgcHVibGljYXRpb25EYXRlLFxyXG4gICAgICAgIGF1dGhvcklkOiBhdXRob3JJZC50b1N0cmluZygpXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib29rID0geyBpZDogcmVzcG9uc2UuZGF0YS5pZCwgdGl0bGUsIHB1YmxpY2F0aW9uRGF0ZSB9O1xyXG4gICAgICBhd2FpdCBpbmNyZW1lbnRBdXRob3JCb29rc0NvdW50KGF1dGhvcklkLCBib29rKTtcclxuICAgICAgbG9hZEJvb2tzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9va3MsXHJcbiAgICBsb2FkQm9va3MsXHJcbiAgICBvbkNyZWF0ZVxyXG4gIH07XHJcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VCb29rUHJvdmlkZXJzIiwiYm9va3MiLCJzZXRCb29rcyIsImdldEF1dGhvck5hbWVCeUlkIiwiaWQiLCJyZXNwb25zZSIsImVycm9yIiwiZ2V0IiwiZGF0YSIsIm5vbSIsImNvbnNvbGUiLCJsb2FkQm9va3MiLCJib29rc1dpdGhBdXRob3JOYW1lcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJib29rIiwiYXV0aG9yTmFtZSIsImF1dGhvcklkIiwidG9TdHJpbmciLCJjcmVhdGVBdXRob3IiLCJuYW1lIiwicG9zdCIsInBob3RvIiwibmJyX2xpdnJlc19lY3JpdHMiLCJtb3llbm5lX2F2aXMiLCJiaW9ncmFwaGllIiwiZ2V0QXV0aG9ySWRCeU5hbWUiLCJsZW5ndGgiLCJpbmNyZW1lbnRBdXRob3JCb29rc0NvdW50IiwibmV3TmJyTGl2cmVzRWNyaXRzIiwidXBkYXRlZExpc3RlTGl2cmUiLCJsaXN0ZV9saXZyZSIsImxvZyIsInB1dCIsIm9uQ3JlYXRlIiwidGl0bGUiLCJwdWJsaWNhdGlvbkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/providers/books.tsx\n"));

/***/ })

});