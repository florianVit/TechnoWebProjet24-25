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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Books; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookCard */ \"(app-pages-browser)/./src/app/components/BookCard.tsx\");\n/* harmony import */ var _components_SearchBarBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBarBook */ \"(app-pages-browser)/./src/app/components/SearchBarBook.tsx\");\n/* harmony import */ var _components_SortBarBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SortBarBook */ \"(app-pages-browser)/./src/app/components/SortBarBook.tsx\");\n/* harmony import */ var _components_ModalCreateBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ModalCreateBook */ \"(app-pages-browser)/./src/app/components/ModalCreateBook.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Books() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchTerm = _useState1[0], setSearchTerm = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"title\"), 2), sortCriteria = _useState2[0], setSortCriteria = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"asc\"), 2), sortOrder = _useState3[0], setSortOrder = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState4[0], setIsModalOpen = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState5[0], setTitle = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), author = _useState6[0], setAuthor = _useState6[1];\n    // Récupère les livres depuis l'API\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:3001/books\").then(function(response) {\n            console.log(response.data);\n            setBooks(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    // Liste temporaire de livres en attendant l'API\n    /*\r\n    const exampleBooks: BookModel[] = [\r\n      { id: 1, title: \"Book One\", publicationDate: 2021, authorId: 1, note: 4.5, commentaire: \"Great book!\", prix: 19.99, description: \"Description for book one\" },\r\n      { id: 2, title: \"Book Two\", publicationDate: 2020, authorId: 2, note: 4.0, commentaire: \"Very interesting.\", prix: 15.99, description: \"Description for book two\" },\r\n      { id: 3, title: \"Book Three\", publicationDate: 2019, authorId: 3, note: 3.5, commentaire: \"Good read.\", prix: 12.99, description: \"Description for book three\" },\r\n      { id: 4, title: \"Mystery of the Old House\", publicationDate: 2018, authorId: 4, note: 4.8, commentaire: \"Thrilling and suspenseful.\", prix: 22.99, description: \"A mystery novel set in an old house.\" },\r\n      { id: 5, title: \"Adventures in Space\", publicationDate: 2022, authorId: 5, note: 4.2, commentaire: \"Exciting space adventure.\", prix: 18.99, description: \"A sci-fi adventure through space.\" },\r\n      { id: 6, title: \"Cooking with Love\", publicationDate: 2017, authorId: 6, note: 4.7, commentaire: \"Delicious recipes.\", prix: 25.99, description: \"A cookbook filled with recipes made with love.\" },\r\n      { id: 7, title: \"History of Ancient Civilizations\", publicationDate: 2016, authorId: 7, note: 4.3, commentaire: \"Very informative.\", prix: 30.99, description: \"A detailed history of ancient civilizations.\" },\r\n      { id: 8, title: \"The Art of Painting\", publicationDate: 2015, authorId: 8, note: 4.6, commentaire: \"Inspiring art techniques.\", prix: 28.99, description: \"A guide to painting techniques and styles.\" },\r\n      { id: 9, title: \"Journey to the Unknown\", publicationDate: 2023, authorId: 9, note: 4.9, commentaire: \"Captivating and mysterious.\", prix: 24.99, description: \"A journey into unknown territories.\" },\r\n      { id: 10, title: \"The Science of Happiness\", publicationDate: 2014, authorId: 10, note: 4.4, commentaire: \"Insightful and uplifting.\", prix: 20.99, description: \"Exploring the science behind happiness.\" }\r\n    ];\r\n    setBooks(exampleBooks);*/ };\n    // on charge les livres au chargement de la page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // Gère le changement de la barre de recherche\n    var handleSearchChange = function(event) {\n        setSearchTerm(event.target.value);\n    };\n    // Gère le changement de critère de tri\n    var handleSortCriteriaChange = function(event) {\n        setSortCriteria(event.target.value);\n    };\n    // Gère le changement d'ordre de tri\n    var handleSortOrderChange = function(event) {\n        setSortOrder(event.target.value);\n    };\n    var onCreate = function(title, publicationDate, authorId) {\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3001/books\", {\n            title: title,\n            publicationDate: publicationDate,\n            authorId: authorId\n        }).then(function() {\n            loadBooks();\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    // Création temporaires de livres en attendant l'API\n    /*\r\n    const newBook: BookModel = {\r\n      id: books.length + 1,\r\n      title,\r\n      publicationDate: new Date(publicationDate).getFullYear(),\r\n      authorId: parseInt(author),\r\n      note: 0,\r\n      commentaire: \"\",\r\n      prix: 0,\r\n      description: \"\"\r\n    };\r\n    setBooks([...books, newBook]);*/ };\n    // Filtre les livres en fonction du terme de recherche\n    var filteredBooks = books.filter(function(book) {\n        return book.title.toLowerCase().includes(searchTerm.toLowerCase());\n    });\n    // Trie les livres en fonction du critère et de l'ordre de tri\n    var sortedBooks = filteredBooks.sort(function(a, b) {\n        if (sortCriteria === \"title\") {\n            return sortOrder === \"asc\" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);\n        } else if (sortCriteria === \"publicationDate\") {\n            var dateA = new Date(a.publicationDate).getTime();\n            var dateB = new Date(b.publicationDate).getTime();\n            return sortOrder === \"asc\" ? dateA - dateB : dateB - dateA;\n        } else if (sortCriteria === \"note\") {\n            return sortOrder === \"asc\" ? a.note - b.note : b.note - a.note;\n        }\n        return 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Books Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setIsModalOpen(true);\n                },\n                children: \"Create New Book\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: function() {\n                    return setIsModalOpen(true);\n                },\n                children: \"Cr\\xe9er un livre\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n                isOpen: isModalOpen,\n                title: \"Cr\\xe9er un nouveau livre\",\n                onCancel: function() {\n                    return setIsModalOpen(false);\n                },\n                onClose: function() {\n                    return setIsModalOpen(false);\n                },\n                onOk: handleCreate,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Titre:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: title,\n                                    onChange: function(e) {\n                                        return setTitle(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Auteur:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: author,\n                                    onChange: function(e) {\n                                        return setAuthor(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalCreateBook__WEBPACK_IMPORTED_MODULE_5__.ModalCreateBook, {\n                isOpen: isModalOpen,\n                onClose: function() {\n                    return setIsModalOpen(false);\n                },\n                onCreate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBarBook__WEBPACK_IMPORTED_MODULE_3__.SearchBarBook, {\n                searchTerm: searchTerm,\n                onSearchChange: handleSearchChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SortBarBook__WEBPACK_IMPORTED_MODULE_4__.SortBarBook, {\n                sortCriteria: sortCriteria,\n                sortOrder: sortOrder,\n                onSortCriteriaChange: handleSortCriteriaChange,\n                onSortOrderChange: handleSortOrderChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this),\n            sortedBooks.map(function(book) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_2__.BookCard, {\n                    book: book\n                }, book.id, false, {\n                    fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 34\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ordi999\\\\Desktop\\\\projet_tech\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(Books, \"IoYeiZoKtmP9/xqTs3nc1Mqq2P4=\");\n_c = Books;\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUMrQjtBQUVQO0FBQ1U7QUFDSjtBQUNRO0FBRWpELFNBQVNPOzs7SUFDdEIsSUFBMEJOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDTyxRQUFtQlAsY0FBWlEsV0FBWVI7SUFDMUIsSUFBb0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUE5Q1MsYUFBNkJULGVBQWpCVSxnQkFBaUJWO0lBQ3BDLElBQXdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsY0FBbERXLGVBQWlDWCxlQUFuQlksa0JBQW1CWjtJQUN4QyxJQUFrQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFlBQTVDYSxZQUEyQmIsZUFBaEJjLGVBQWdCZDtJQUNsQyxJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXhDZSxjQUErQmYsZUFBbEJnQixpQkFBa0JoQjtJQUNwQyxJQUEwQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQTVCaUIsUUFBbUJqQixlQUFaa0IsV0FBWWxCO0lBQzFCLElBQTRCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBOUJtQixTQUFxQm5CLGVBQWJvQixZQUFhcEI7SUFFOUIsbUNBQW1DO0lBQ25DLElBQU1xQixZQUFZO1FBQ2hCdEIsNkNBQUtBLENBQUN1QixHQUFHLENBQWMsK0JBQStCQyxJQUFJLENBQUMsU0FBQ0M7WUFDMURDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csSUFBSTtZQUN6Qm5CLFNBQVNnQixTQUFTRyxJQUFJO1FBQ3hCLEVBQUdDLENBQUFBLFFBQUssQ0FBQyxTQUFDQztZQUNSSixRQUFRSSxLQUFLLENBQUNBO1FBQ2hCO0lBRUEsZ0RBQWdEO0lBQ2hEOzs7Ozs7Ozs7Ozs7OzJC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QUFVQTs7Ozs7OzBCQUNWLDhEQUFDbUM7Ozs7OzBCQUNILDhEQUFDcEUsb0VBQWFBO2dCQUFDTSxZQUFZQTtnQkFBWStELGdCQUFnQjFDOzs7Ozs7MEJBQ3ZELDhEQUFDMUIsZ0VBQVdBO2dCQUNWTyxjQUFjQTtnQkFDZEUsV0FBV0E7Z0JBQ1g0RCxzQkFBc0J2QztnQkFDdEJ3QyxtQkFBbUJ2Qzs7Ozs7O1lBRXBCVSxZQUFZOEIsR0FBRyxDQUFDLFNBQUNqQztxQ0FBUyw4REFBQ3hDLDBEQUFRQTtvQkFBZXdDLE1BQU1BO21CQUFmQSxLQUFLa0MsRUFBRTs7Ozs7Ozs7Ozs7O0FBR3ZEO0dBM0l3QnRFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3g/Mjk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Cb29rTW9kZWxcIjtcclxuaW1wb3J0IHsgQm9va0NhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb29rQ2FyZFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXJCb29rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyQm9va1wiO1xyXG5pbXBvcnQgeyBTb3J0QmFyQm9vayB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NvcnRCYXJCb29rXCI7XHJcbmltcG9ydCB7IE1vZGFsQ3JlYXRlQm9vayB9IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQ3JlYXRlQm9va1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va3MoKSB7XHJcbiAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxCb29rTW9kZWxbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtzb3J0Q3JpdGVyaWEsIHNldFNvcnRDcml0ZXJpYV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCd0aXRsZScpO1xyXG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdhc2MnKTtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIFLDqWN1cMOocmUgbGVzIGxpdnJlcyBkZXB1aXMgbCdBUElcclxuICBjb25zdCBsb2FkQm9va3MgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQ8Qm9va01vZGVsW10+KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYm9va3MnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBzZXRCb29rcyhyZXNwb25zZS5kYXRhKVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIExpc3RlIHRlbXBvcmFpcmUgZGUgbGl2cmVzIGVuIGF0dGVuZGFudCBsJ0FQSVxyXG4gICAgLypcclxuICAgIGNvbnN0IGV4YW1wbGVCb29rczogQm9va01vZGVsW10gPSBbXHJcbiAgICAgIHsgaWQ6IDEsIHRpdGxlOiBcIkJvb2sgT25lXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAyMSwgYXV0aG9ySWQ6IDEsIG5vdGU6IDQuNSwgY29tbWVudGFpcmU6IFwiR3JlYXQgYm9vayFcIiwgcHJpeDogMTkuOTksIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBib29rIG9uZVwiIH0sXHJcbiAgICAgIHsgaWQ6IDIsIHRpdGxlOiBcIkJvb2sgVHdvXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAyMCwgYXV0aG9ySWQ6IDIsIG5vdGU6IDQuMCwgY29tbWVudGFpcmU6IFwiVmVyeSBpbnRlcmVzdGluZy5cIiwgcHJpeDogMTUuOTksIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBib29rIHR3b1wiIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHRpdGxlOiBcIkJvb2sgVGhyZWVcIiwgcHVibGljYXRpb25EYXRlOiAyMDE5LCBhdXRob3JJZDogMywgbm90ZTogMy41LCBjb21tZW50YWlyZTogXCJHb29kIHJlYWQuXCIsIHByaXg6IDEyLjk5LCBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgYm9vayB0aHJlZVwiIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHRpdGxlOiBcIk15c3Rlcnkgb2YgdGhlIE9sZCBIb3VzZVwiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTgsIGF1dGhvcklkOiA0LCBub3RlOiA0LjgsIGNvbW1lbnRhaXJlOiBcIlRocmlsbGluZyBhbmQgc3VzcGVuc2VmdWwuXCIsIHByaXg6IDIyLjk5LCBkZXNjcmlwdGlvbjogXCJBIG15c3Rlcnkgbm92ZWwgc2V0IGluIGFuIG9sZCBob3VzZS5cIiB9LFxyXG4gICAgICB7IGlkOiA1LCB0aXRsZTogXCJBZHZlbnR1cmVzIGluIFNwYWNlXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAyMiwgYXV0aG9ySWQ6IDUsIG5vdGU6IDQuMiwgY29tbWVudGFpcmU6IFwiRXhjaXRpbmcgc3BhY2UgYWR2ZW50dXJlLlwiLCBwcml4OiAxOC45OSwgZGVzY3JpcHRpb246IFwiQSBzY2ktZmkgYWR2ZW50dXJlIHRocm91Z2ggc3BhY2UuXCIgfSxcclxuICAgICAgeyBpZDogNiwgdGl0bGU6IFwiQ29va2luZyB3aXRoIExvdmVcIiwgcHVibGljYXRpb25EYXRlOiAyMDE3LCBhdXRob3JJZDogNiwgbm90ZTogNC43LCBjb21tZW50YWlyZTogXCJEZWxpY2lvdXMgcmVjaXBlcy5cIiwgcHJpeDogMjUuOTksIGRlc2NyaXB0aW9uOiBcIkEgY29va2Jvb2sgZmlsbGVkIHdpdGggcmVjaXBlcyBtYWRlIHdpdGggbG92ZS5cIiB9LFxyXG4gICAgICB7IGlkOiA3LCB0aXRsZTogXCJIaXN0b3J5IG9mIEFuY2llbnQgQ2l2aWxpemF0aW9uc1wiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTYsIGF1dGhvcklkOiA3LCBub3RlOiA0LjMsIGNvbW1lbnRhaXJlOiBcIlZlcnkgaW5mb3JtYXRpdmUuXCIsIHByaXg6IDMwLjk5LCBkZXNjcmlwdGlvbjogXCJBIGRldGFpbGVkIGhpc3Rvcnkgb2YgYW5jaWVudCBjaXZpbGl6YXRpb25zLlwiIH0sXHJcbiAgICAgIHsgaWQ6IDgsIHRpdGxlOiBcIlRoZSBBcnQgb2YgUGFpbnRpbmdcIiwgcHVibGljYXRpb25EYXRlOiAyMDE1LCBhdXRob3JJZDogOCwgbm90ZTogNC42LCBjb21tZW50YWlyZTogXCJJbnNwaXJpbmcgYXJ0IHRlY2huaXF1ZXMuXCIsIHByaXg6IDI4Ljk5LCBkZXNjcmlwdGlvbjogXCJBIGd1aWRlIHRvIHBhaW50aW5nIHRlY2huaXF1ZXMgYW5kIHN0eWxlcy5cIiB9LFxyXG4gICAgICB7IGlkOiA5LCB0aXRsZTogXCJKb3VybmV5IHRvIHRoZSBVbmtub3duXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAyMywgYXV0aG9ySWQ6IDksIG5vdGU6IDQuOSwgY29tbWVudGFpcmU6IFwiQ2FwdGl2YXRpbmcgYW5kIG15c3RlcmlvdXMuXCIsIHByaXg6IDI0Ljk5LCBkZXNjcmlwdGlvbjogXCJBIGpvdXJuZXkgaW50byB1bmtub3duIHRlcnJpdG9yaWVzLlwiIH0sXHJcbiAgICAgIHsgaWQ6IDEwLCB0aXRsZTogXCJUaGUgU2NpZW5jZSBvZiBIYXBwaW5lc3NcIiwgcHVibGljYXRpb25EYXRlOiAyMDE0LCBhdXRob3JJZDogMTAsIG5vdGU6IDQuNCwgY29tbWVudGFpcmU6IFwiSW5zaWdodGZ1bCBhbmQgdXBsaWZ0aW5nLlwiLCBwcml4OiAyMC45OSwgZGVzY3JpcHRpb246IFwiRXhwbG9yaW5nIHRoZSBzY2llbmNlIGJlaGluZCBoYXBwaW5lc3MuXCIgfVxyXG4gICAgXTtcclxuICAgIHNldEJvb2tzKGV4YW1wbGVCb29rcyk7Ki9cclxuICB9XHJcblxyXG4gIC8vIG9uIGNoYXJnZSBsZXMgbGl2cmVzIGF1IGNoYXJnZW1lbnQgZGUgbGEgcGFnZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQm9va3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZGUgY3JpdMOocmUgZGUgdHJpXHJcbiAgY29uc3QgaGFuZGxlU29ydENyaXRlcmlhQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFNvcnRDcml0ZXJpYShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZCdvcmRyZSBkZSB0cmlcclxuICBjb25zdCBoYW5kbGVTb3J0T3JkZXJDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0U29ydE9yZGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAodGl0bGU6IHN0cmluZywgcHVibGljYXRpb25EYXRlOiBzdHJpbmcsIGF1dGhvcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ib29rcycsIHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHB1YmxpY2F0aW9uRGF0ZSxcclxuICAgICAgYXV0aG9ySWRcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsb2FkQm9va3MoKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3LDqWF0aW9uIHRlbXBvcmFpcmVzIGRlIGxpdnJlcyBlbiBhdHRlbmRhbnQgbCdBUElcclxuICAgIC8qXHJcbiAgICBjb25zdCBuZXdCb29rOiBCb29rTW9kZWwgPSB7XHJcbiAgICAgIGlkOiBib29rcy5sZW5ndGggKyAxLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgcHVibGljYXRpb25EYXRlOiBuZXcgRGF0ZShwdWJsaWNhdGlvbkRhdGUpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIGF1dGhvcklkOiBwYXJzZUludChhdXRob3IpLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICBjb21tZW50YWlyZTogXCJcIixcclxuICAgICAgcHJpeDogMCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiXCJcclxuICAgIH07XHJcbiAgICBzZXRCb29rcyhbLi4uYm9va3MsIG5ld0Jvb2tdKTsqL1xyXG4gIH07XHJcblxyXG4gIC8vIEZpbHRyZSBsZXMgbGl2cmVzIGVuIGZvbmN0aW9uIGR1IHRlcm1lIGRlIHJlY2hlcmNoZVxyXG4gIGNvbnN0IGZpbHRlcmVkQm9va3MgPSBib29rcy5maWx0ZXIoYm9vayA9PlxyXG4gICAgYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICAvLyBUcmllIGxlcyBsaXZyZXMgZW4gZm9uY3Rpb24gZHUgY3JpdMOocmUgZXQgZGUgbCdvcmRyZSBkZSB0cmlcclxuICBjb25zdCBzb3J0ZWRCb29rcyA9IGZpbHRlcmVkQm9va3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgaWYgKHNvcnRDcml0ZXJpYSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICByZXR1cm4gc29ydE9yZGVyID09PSAnYXNjJyA/IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSA6IGIudGl0bGUubG9jYWxlQ29tcGFyZShhLnRpdGxlKTtcclxuICAgIH0gZWxzZSBpZiAoc29ydENyaXRlcmlhID09PSAncHVibGljYXRpb25EYXRlJykge1xyXG4gICAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEucHVibGljYXRpb25EYXRlKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi5wdWJsaWNhdGlvbkRhdGUpLmdldFRpbWUoKTtcclxuICAgICAgcmV0dXJuIHNvcnRPcmRlciA9PT0gJ2FzYycgPyBkYXRlQSAtIGRhdGVCIDogZGF0ZUIgLSBkYXRlQTtcclxuICAgIH0gZWxzZSBpZiAoc29ydENyaXRlcmlhID09PSAnbm90ZScpIHtcclxuICAgICAgcmV0dXJuIHNvcnRPcmRlciA9PT0gJ2FzYycgPyBhLm5vdGUgLSBiLm5vdGUgOiBiLm5vdGUgLSBhLm5vdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Cb29rcyBQYWdlPC9oMj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3Blbih0cnVlKX0+Q3JlYXRlIE5ldyBCb29rPC9idXR0b24+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4odHJ1ZSl9PkNyw6llciB1biBsaXZyZTwvQnV0dG9uPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxyXG4gICAgICAgIHRpdGxlPVwiQ3LDqWVyIHVuIG5vdXZlYXUgbGl2cmVcIlxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRJc01vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZUNyZWF0ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIFRpdHJlOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgQXV0ZXVyOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17YXV0aG9yfSBvbkNoYW5nZT17KGUpID0+IHNldEF1dGhvcihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsQ3JlYXRlQm9va1xyXG4gICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uQ3JlYXRlPXtvbkNyZWF0ZX1cclxuICAgICAgLz48YnIgLz5cclxuICAgICAgPFNlYXJjaEJhckJvb2sgc2VhcmNoVGVybT17c2VhcmNoVGVybX0gb25TZWFyY2hDaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX0gLz5cclxuICAgICAgPFNvcnRCYXJCb29rXHJcbiAgICAgICAgc29ydENyaXRlcmlhPXtzb3J0Q3JpdGVyaWF9XHJcbiAgICAgICAgc29ydE9yZGVyPXtzb3J0T3JkZXJ9XHJcbiAgICAgICAgb25Tb3J0Q3JpdGVyaWFDaGFuZ2U9e2hhbmRsZVNvcnRDcml0ZXJpYUNoYW5nZX1cclxuICAgICAgICBvblNvcnRPcmRlckNoYW5nZT17aGFuZGxlU29ydE9yZGVyQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICB7c29ydGVkQm9va3MubWFwKChib29rKSA9PiA8Qm9va0NhcmQga2V5PXtib29rLmlkfSBib29rPXtib29rfSAvPil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb29rQ2FyZCIsIlNlYXJjaEJhckJvb2siLCJTb3J0QmFyQm9vayIsIk1vZGFsQ3JlYXRlQm9vayIsIkJvb2tzIiwiYm9va3MiLCJzZXRCb29rcyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic29ydENyaXRlcmlhIiwic2V0U29ydENyaXRlcmlhIiwic29ydE9yZGVyIiwic2V0U29ydE9yZGVyIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInRpdGxlIiwic2V0VGl0bGUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJsb2FkQm9va3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU29ydENyaXRlcmlhQ2hhbmdlIiwiaGFuZGxlU29ydE9yZGVyQ2hhbmdlIiwib25DcmVhdGUiLCJwdWJsaWNhdGlvbkRhdGUiLCJhdXRob3JJZCIsInBvc3QiLCJmaWx0ZXJlZEJvb2tzIiwiZmlsdGVyIiwiYm9vayIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzb3J0ZWRCb29rcyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJkYXRlQSIsIkRhdGUiLCJnZXRUaW1lIiwiZGF0ZUIiLCJub3RlIiwiZGl2IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiQnV0dG9uIiwiTW9kYWwiLCJpc09wZW4iLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbk9rIiwiaGFuZGxlQ3JlYXRlIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJiciIsIm9uU2VhcmNoQ2hhbmdlIiwib25Tb3J0Q3JpdGVyaWFDaGFuZ2UiLCJvblNvcnRPcmRlckNoYW5nZSIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});