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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Books; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BookCard */ \"(app-pages-browser)/./src/app/components/BookCard.tsx\");\n/* harmony import */ var _components_SearchBarBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBarBook */ \"(app-pages-browser)/./src/app/components/SearchBarBook.tsx\");\n/* harmony import */ var _components_SortBarBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SortBarBook */ \"(app-pages-browser)/./src/app/components/SortBarBook.tsx\");\n/* harmony import */ var _components_ModalCreateBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ModalCreateBook */ \"(app-pages-browser)/./src/app/components/ModalCreateBook.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Books() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchTerm = _useState1[0], setSearchTerm = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"title\"), 2), sortCriteria = _useState2[0], setSortCriteria = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"asc\"), 2), sortOrder = _useState3[0], setSortOrder = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState4[0], setIsModalOpen = _useState4[1];\n    // Récupère les livres depuis l'API\n    var loadBooks = function() {\n        /*\r\n    axios.get<BookModel[]>('http://localhost:3001/books').then((response) => {\r\n      setBooks(response.data)\r\n    }).catch((error) => {\r\n      console.error(error)\r\n    })\r\n    */ // Liste temporaire de livres en attendant l'API\n        var exampleBooks = [\n            {\n                id: 1,\n                title: \"Book One\",\n                publicationDate: 2021,\n                authorId: 1,\n                note: 4.5,\n                commentaire: \"Great book!\",\n                prix: 19.99,\n                description: \"Description for book one\"\n            },\n            {\n                id: 2,\n                title: \"Book Two\",\n                publicationDate: 2020,\n                authorId: 2,\n                note: 4.0,\n                commentaire: \"Very interesting.\",\n                prix: 15.99,\n                description: \"Description for book two\"\n            },\n            {\n                id: 3,\n                title: \"Book Three\",\n                publicationDate: 2019,\n                authorId: 3,\n                note: 3.5,\n                commentaire: \"Good read.\",\n                prix: 12.99,\n                description: \"Description for book three\"\n            },\n            {\n                id: 4,\n                title: \"Mystery of the Old House\",\n                publicationDate: 2018,\n                authorId: 4,\n                note: 4.8,\n                commentaire: \"Thrilling and suspenseful.\",\n                prix: 22.99,\n                description: \"A mystery novel set in an old house.\"\n            },\n            {\n                id: 5,\n                title: \"Adventures in Space\",\n                publicationDate: 2022,\n                authorId: 5,\n                note: 4.2,\n                commentaire: \"Exciting space adventure.\",\n                prix: 18.99,\n                description: \"A sci-fi adventure through space.\"\n            },\n            {\n                id: 6,\n                title: \"Cooking with Love\",\n                publicationDate: 2017,\n                authorId: 6,\n                note: 4.7,\n                commentaire: \"Delicious recipes.\",\n                prix: 25.99,\n                description: \"A cookbook filled with recipes made with love.\"\n            },\n            {\n                id: 7,\n                title: \"History of Ancient Civilizations\",\n                publicationDate: 2016,\n                authorId: 7,\n                note: 4.3,\n                commentaire: \"Very informative.\",\n                prix: 30.99,\n                description: \"A detailed history of ancient civilizations.\"\n            },\n            {\n                id: 8,\n                title: \"The Art of Painting\",\n                publicationDate: 2015,\n                authorId: 8,\n                note: 4.6,\n                commentaire: \"Inspiring art techniques.\",\n                prix: 28.99,\n                description: \"A guide to painting techniques and styles.\"\n            },\n            {\n                id: 9,\n                title: \"Journey to the Unknown\",\n                publicationDate: 2023,\n                authorId: 9,\n                note: 4.9,\n                commentaire: \"Captivating and mysterious.\",\n                prix: 24.99,\n                description: \"A journey into unknown territories.\"\n            },\n            {\n                id: 10,\n                title: \"The Science of Happiness\",\n                publicationDate: 2014,\n                authorId: 10,\n                note: 4.4,\n                commentaire: \"Insightful and uplifting.\",\n                prix: 20.99,\n                description: \"Exploring the science behind happiness.\"\n            }\n        ];\n        setBooks(exampleBooks);\n    };\n    // on charge les livres au chargement de la page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // Gère le changement de la barre de recherche\n    var handleSearchChange = function(event) {\n        setSearchTerm(event.target.value);\n    };\n    // Gère le changement de critère de tri\n    var handleSortCriteriaChange = function(event) {\n        setSortCriteria(event.target.value);\n    };\n    // Gère le changement d'ordre de tri\n    var handleSortOrderChange = function(event) {\n        setSortOrder(event.target.value);\n    };\n    var onCreate = function(title, publicationDate, author) {\n        var newBook = {\n            id: books.length + 1,\n            title: title,\n            publicationDate: new Date(publicationDate).getFullYear(),\n            authorId: parseInt(author),\n            note: 0,\n            commentaire: \"\",\n            prix: 0,\n            description: \"\"\n        };\n        setBooks((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_7__._)(books).concat([\n            newBook\n        ]));\n    };\n    // Filtre les livres en fonction du terme de recherche\n    var filteredBooks = books.filter(function(book) {\n        return book.title.toLowerCase().includes(searchTerm.toLowerCase());\n    });\n    // Trie les livres en fonction du critère et de l'ordre de tri\n    var sortedBooks = filteredBooks.sort(function(a, b) {\n        if (sortCriteria === \"title\") {\n            return sortOrder === \"asc\" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);\n        } else if (sortCriteria === \"publicationDate\") {\n            return sortOrder === \"asc\" ? a.publicationDate - b.publicationDate : b.publicationDate - a.publicationDate;\n        } else if (sortCriteria === \"note\") {\n            return sortOrder === \"asc\" ? a.note - b.note : b.note - a.note;\n        }\n        return 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Books Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setIsModalOpen(true);\n                },\n                children: \"Create New Book\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModalCreateBook__WEBPACK_IMPORTED_MODULE_5__.ModalCreateBook, {\n                isOpen: isModalOpen,\n                onClose: function() {\n                    return setIsModalOpen(false);\n                },\n                onCreate: onCreate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBarBook__WEBPACK_IMPORTED_MODULE_3__.SearchBarBook, {\n                searchTerm: searchTerm,\n                onSearchChange: handleSearchChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SortBarBook__WEBPACK_IMPORTED_MODULE_4__.SortBarBook, {\n                sortCriteria: sortCriteria,\n                sortOrder: sortOrder,\n                onSortCriteriaChange: handleSortCriteriaChange,\n                onSortOrderChange: handleSortOrderChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            sortedBooks.map(function(book) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_2__.BookCard, {\n                    book: book\n                }, book.id, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 34\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\OneDrive\\\\Bureau\\\\ISEN_2024-2025\\\\techno_web\\\\Projet\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\books\\\\page.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Books, \"yhJF35YvAmBeSuLH1QB7MMeiWqQ=\");\n_c = Books;\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUQ7QUFFUDtBQUNVO0FBQ0o7QUFDUTtBQUVqRCxTQUFTTTs7O0lBQ3RCLElBQTBCTixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWMsRUFBRSxPQUEzQ08sUUFBbUJQLGNBQVpRLFdBQVlSO0lBQzFCLElBQW9DQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBOUNTLGFBQTZCVCxlQUFqQlUsZ0JBQWlCVjtJQUNwQyxJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLGNBQWxEVyxlQUFpQ1gsZUFBbkJZLGtCQUFtQlo7SUFDeEMsSUFBa0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxZQUE1Q2EsWUFBMkJiLGVBQWhCYyxlQUFnQmQ7SUFDbEMsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUF4Q2UsY0FBK0JmLGVBQWxCZ0IsaUJBQWtCaEI7SUFFdEMsbUNBQW1DO0lBQ25DLElBQU1pQixZQUFZO1FBQ2hCOzs7Ozs7SUFNQSxHQUVBLGdEQUFnRDtRQUNoRCxJQUFNQyxlQUE0QjtZQUNoQztnQkFBRUMsSUFBSTtnQkFBR0MsT0FBTztnQkFBWUMsaUJBQWlCO2dCQUFNQyxVQUFVO2dCQUFHQyxNQUFNO2dCQUFLQyxhQUFhO2dCQUFlQyxNQUFNO2dCQUFPQyxhQUFhO1lBQTJCO1lBQzVKO2dCQUFFUCxJQUFJO2dCQUFHQyxPQUFPO2dCQUFZQyxpQkFBaUI7Z0JBQU1DLFVBQVU7Z0JBQUdDLE1BQU07Z0JBQUtDLGFBQWE7Z0JBQXFCQyxNQUFNO2dCQUFPQyxhQUFhO1lBQTJCO1lBQ2xLO2dCQUFFUCxJQUFJO2dCQUFHQyxPQUFPO2dCQUFjQyxpQkFBaUI7Z0JBQU1DLFVBQVU7Z0JBQUdDLE1BQU07Z0JBQUtDLGFBQWE7Z0JBQWNDLE1BQU07Z0JBQU9DLGFBQWE7WUFBNkI7WUFDL0o7Z0JBQUVQLElBQUk7Z0JBQUdDLE9BQU87Z0JBQTRCQyxpQkFBaUI7Z0JBQU1DLFVBQVU7Z0JBQUdDLE1BQU07Z0JBQUtDLGFBQWE7Z0JBQThCQyxNQUFNO2dCQUFPQyxhQUFhO1lBQXVDO1lBQ3ZNO2dCQUFFUCxJQUFJO2dCQUFHQyxPQUFPO2dCQUF1QkMsaUJBQWlCO2dCQUFNQyxVQUFVO2dCQUFHQyxNQUFNO2dCQUFLQyxhQUFhO2dCQUE2QkMsTUFBTTtnQkFBT0MsYUFBYTtZQUFvQztZQUM5TDtnQkFBRVAsSUFBSTtnQkFBR0MsT0FBTztnQkFBcUJDLGlCQUFpQjtnQkFBTUMsVUFBVTtnQkFBR0MsTUFBTTtnQkFBS0MsYUFBYTtnQkFBc0JDLE1BQU07Z0JBQU9DLGFBQWE7WUFBaUQ7WUFDbE07Z0JBQUVQLElBQUk7Z0JBQUdDLE9BQU87Z0JBQW9DQyxpQkFBaUI7Z0JBQU1DLFVBQVU7Z0JBQUdDLE1BQU07Z0JBQUtDLGFBQWE7Z0JBQXFCQyxNQUFNO2dCQUFPQyxhQUFhO1lBQStDO1lBQzlNO2dCQUFFUCxJQUFJO2dCQUFHQyxPQUFPO2dCQUF1QkMsaUJBQWlCO2dCQUFNQyxVQUFVO2dCQUFHQyxNQUFNO2dCQUFLQyxhQUFhO2dCQUE2QkMsTUFBTTtnQkFBT0MsYUFBYTtZQUE2QztZQUN2TTtnQkFBRVAsSUFBSTtnQkFBR0MsT0FBTztnQkFBMEJDLGlCQUFpQjtnQkFBTUMsVUFBVTtnQkFBR0MsTUFBTTtnQkFBS0MsYUFBYTtnQkFBK0JDLE1BQU07Z0JBQU9DLGFBQWE7WUFBc0M7WUFDck07Z0JBQUVQLElBQUk7Z0JBQUlDLE9BQU87Z0JBQTRCQyxpQkFBaUI7Z0JBQU1DLFVBQVU7Z0JBQUlDLE1BQU07Z0JBQUtDLGFBQWE7Z0JBQTZCQyxNQUFNO2dCQUFPQyxhQUFhO1lBQTBDO1NBQzVNO1FBQ0RsQixTQUFTVTtJQUNYO0lBRUEsZ0RBQWdEO0lBQ2hEakIsZ0RBQVNBLENBQUM7UUFDUmdCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsOENBQThDO0lBQzlDLElBQU1VLHFCQUFxQixTQUFDQztRQUMxQmxCLGNBQWNrQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbEM7SUFFQSx1Q0FBdUM7SUFDdkMsSUFBTUMsMkJBQTJCLFNBQUNIO1FBQ2hDaEIsZ0JBQWdCZ0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBRUEsb0NBQW9DO0lBQ3BDLElBQU1FLHdCQUF3QixTQUFDSjtRQUM3QmQsYUFBYWMsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsSUFBTUcsV0FBVyxTQUFDYixPQUFlQyxpQkFBeUJhO1FBQ3hELElBQU1DLFVBQXFCO1lBQ3pCaEIsSUFBSVosTUFBTTZCLE1BQU0sR0FBRztZQUNuQmhCLE9BQUFBO1lBQ0FDLGlCQUFpQixJQUFJZ0IsS0FBS2hCLGlCQUFpQmlCLFdBQVc7WUFDdERoQixVQUFVaUIsU0FBU0w7WUFDbkJYLE1BQU07WUFDTkMsYUFBYTtZQUNiQyxNQUFNO1lBQ05DLGFBQWE7UUFDZjtRQUNBbEIsU0FBUyxvRUFBSUQsY0FBSjtZQUFXNEI7U0FBUTtJQUM5QjtJQUVBLHNEQUFzRDtJQUN0RCxJQUFNSyxnQkFBZ0JqQyxNQUFNa0MsTUFBTSxDQUFDQyxTQUFBQTtlQUNqQ0EsS0FBS3RCLEtBQUssQ0FBQ3VCLFdBQVcsR0FBR0MsUUFBUSxDQUFDbkMsV0FBV2tDLFdBQVc7O0lBRzFELDhEQUE4RDtJQUM5RCxJQUFNRSxjQUFjTCxjQUFjTSxJQUFJLENBQUMsU0FBQ0MsR0FBR0M7UUFDekMsSUFBSXJDLGlCQUFpQixTQUFTO1lBQzVCLE9BQU9FLGNBQWMsUUFBUWtDLEVBQUUzQixLQUFLLENBQUM2QixhQUFhLENBQUNELEVBQUU1QixLQUFLLElBQUk0QixFQUFFNUIsS0FBSyxDQUFDNkIsYUFBYSxDQUFDRixFQUFFM0IsS0FBSztRQUM3RixPQUFPLElBQUlULGlCQUFpQixtQkFBbUI7WUFDN0MsT0FBT0UsY0FBYyxRQUFRa0MsRUFBRTFCLGVBQWUsR0FBRzJCLEVBQUUzQixlQUFlLEdBQUcyQixFQUFFM0IsZUFBZSxHQUFHMEIsRUFBRTFCLGVBQWU7UUFDNUcsT0FBTyxJQUFJVixpQkFBaUIsUUFBUTtZQUNsQyxPQUFPRSxjQUFjLFFBQVFrQyxFQUFFeEIsSUFBSSxHQUFHeUIsRUFBRXpCLElBQUksR0FBR3lCLEVBQUV6QixJQUFJLEdBQUd3QixFQUFFeEIsSUFBSTtRQUNoRTtRQUNBLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDMkI7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBUzsyQkFBTXJDLGVBQWU7OzBCQUFPOzs7Ozs7MEJBQzdDLDhEQUFDWCx3RUFBZUE7Z0JBQ2RpRCxRQUFRdkM7Z0JBQ1J3QyxTQUFTOzJCQUFNdkMsZUFBZTs7Z0JBQzlCaUIsVUFBVUE7Ozs7OzswQkFDViw4REFBQ3VCOzs7OzswQkFDSCw4REFBQ3JELG9FQUFhQTtnQkFBQ00sWUFBWUE7Z0JBQVlnRCxnQkFBZ0I5Qjs7Ozs7OzBCQUN2RCw4REFBQ3ZCLGdFQUFXQTtnQkFDVk8sY0FBY0E7Z0JBQ2RFLFdBQVdBO2dCQUNYNkMsc0JBQXNCM0I7Z0JBQ3RCNEIsbUJBQW1CM0I7Ozs7OztZQUVwQmEsWUFBWWUsR0FBRyxDQUFDLFNBQUNsQjtxQ0FBUyw4REFBQ3hDLDBEQUFRQTtvQkFBZXdDLE1BQU1BO21CQUFmQSxLQUFLdkIsRUFBRTs7Ozs7Ozs7Ozs7O0FBR3ZEO0dBdkd3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ib29rcy9wYWdlLnRzeD8yOTY0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0Jvb2tNb2RlbFwiO1xyXG5pbXBvcnQgeyBCb29rQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Jvb2tDYXJkXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhckJvb2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJCb29rXCI7XHJcbmltcG9ydCB7IFNvcnRCYXJCb29rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU29ydEJhckJvb2tcIjtcclxuaW1wb3J0IHsgTW9kYWxDcmVhdGVCb29rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxDcmVhdGVCb29rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rcygpIHtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tNb2RlbFtdPihbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3NvcnRDcml0ZXJpYSwgc2V0U29ydENyaXRlcmlhXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3RpdGxlJyk7XHJcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2FzYycpO1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBSw6ljdXDDqHJlIGxlcyBsaXZyZXMgZGVwdWlzIGwnQVBJXHJcbiAgY29uc3QgbG9hZEJvb2tzID0gKCkgPT4ge1xyXG4gICAgLypcclxuICAgIGF4aW9zLmdldDxCb29rTW9kZWxbXT4oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ib29rcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldEJvb2tzKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH0pXHJcbiAgICAqL1xyXG5cclxuICAgIC8vIExpc3RlIHRlbXBvcmFpcmUgZGUgbGl2cmVzIGVuIGF0dGVuZGFudCBsJ0FQSVxyXG4gICAgY29uc3QgZXhhbXBsZUJvb2tzOiBCb29rTW9kZWxbXSA9IFtcclxuICAgICAgeyBpZDogMSwgdGl0bGU6IFwiQm9vayBPbmVcIiwgcHVibGljYXRpb25EYXRlOiAyMDIxLCBhdXRob3JJZDogMSwgbm90ZTogNC41LCBjb21tZW50YWlyZTogXCJHcmVhdCBib29rIVwiLCBwcml4OiAxOS45OSwgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGJvb2sgb25lXCIgfSxcclxuICAgICAgeyBpZDogMiwgdGl0bGU6IFwiQm9vayBUd29cIiwgcHVibGljYXRpb25EYXRlOiAyMDIwLCBhdXRob3JJZDogMiwgbm90ZTogNC4wLCBjb21tZW50YWlyZTogXCJWZXJ5IGludGVyZXN0aW5nLlwiLCBwcml4OiAxNS45OSwgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIGJvb2sgdHdvXCIgfSxcclxuICAgICAgeyBpZDogMywgdGl0bGU6IFwiQm9vayBUaHJlZVwiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTksIGF1dGhvcklkOiAzLCBub3RlOiAzLjUsIGNvbW1lbnRhaXJlOiBcIkdvb2QgcmVhZC5cIiwgcHJpeDogMTIuOTksIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBib29rIHRocmVlXCIgfSxcclxuICAgICAgeyBpZDogNCwgdGl0bGU6IFwiTXlzdGVyeSBvZiB0aGUgT2xkIEhvdXNlXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAxOCwgYXV0aG9ySWQ6IDQsIG5vdGU6IDQuOCwgY29tbWVudGFpcmU6IFwiVGhyaWxsaW5nIGFuZCBzdXNwZW5zZWZ1bC5cIiwgcHJpeDogMjIuOTksIGRlc2NyaXB0aW9uOiBcIkEgbXlzdGVyeSBub3ZlbCBzZXQgaW4gYW4gb2xkIGhvdXNlLlwiIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHRpdGxlOiBcIkFkdmVudHVyZXMgaW4gU3BhY2VcIiwgcHVibGljYXRpb25EYXRlOiAyMDIyLCBhdXRob3JJZDogNSwgbm90ZTogNC4yLCBjb21tZW50YWlyZTogXCJFeGNpdGluZyBzcGFjZSBhZHZlbnR1cmUuXCIsIHByaXg6IDE4Ljk5LCBkZXNjcmlwdGlvbjogXCJBIHNjaS1maSBhZHZlbnR1cmUgdGhyb3VnaCBzcGFjZS5cIiB9LFxyXG4gICAgICB7IGlkOiA2LCB0aXRsZTogXCJDb29raW5nIHdpdGggTG92ZVwiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTcsIGF1dGhvcklkOiA2LCBub3RlOiA0LjcsIGNvbW1lbnRhaXJlOiBcIkRlbGljaW91cyByZWNpcGVzLlwiLCBwcml4OiAyNS45OSwgZGVzY3JpcHRpb246IFwiQSBjb29rYm9vayBmaWxsZWQgd2l0aCByZWNpcGVzIG1hZGUgd2l0aCBsb3ZlLlwiIH0sXHJcbiAgICAgIHsgaWQ6IDcsIHRpdGxlOiBcIkhpc3Rvcnkgb2YgQW5jaWVudCBDaXZpbGl6YXRpb25zXCIsIHB1YmxpY2F0aW9uRGF0ZTogMjAxNiwgYXV0aG9ySWQ6IDcsIG5vdGU6IDQuMywgY29tbWVudGFpcmU6IFwiVmVyeSBpbmZvcm1hdGl2ZS5cIiwgcHJpeDogMzAuOTksIGRlc2NyaXB0aW9uOiBcIkEgZGV0YWlsZWQgaGlzdG9yeSBvZiBhbmNpZW50IGNpdmlsaXphdGlvbnMuXCIgfSxcclxuICAgICAgeyBpZDogOCwgdGl0bGU6IFwiVGhlIEFydCBvZiBQYWludGluZ1wiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTUsIGF1dGhvcklkOiA4LCBub3RlOiA0LjYsIGNvbW1lbnRhaXJlOiBcIkluc3BpcmluZyBhcnQgdGVjaG5pcXVlcy5cIiwgcHJpeDogMjguOTksIGRlc2NyaXB0aW9uOiBcIkEgZ3VpZGUgdG8gcGFpbnRpbmcgdGVjaG5pcXVlcyBhbmQgc3R5bGVzLlwiIH0sXHJcbiAgICAgIHsgaWQ6IDksIHRpdGxlOiBcIkpvdXJuZXkgdG8gdGhlIFVua25vd25cIiwgcHVibGljYXRpb25EYXRlOiAyMDIzLCBhdXRob3JJZDogOSwgbm90ZTogNC45LCBjb21tZW50YWlyZTogXCJDYXB0aXZhdGluZyBhbmQgbXlzdGVyaW91cy5cIiwgcHJpeDogMjQuOTksIGRlc2NyaXB0aW9uOiBcIkEgam91cm5leSBpbnRvIHVua25vd24gdGVycml0b3JpZXMuXCIgfSxcclxuICAgICAgeyBpZDogMTAsIHRpdGxlOiBcIlRoZSBTY2llbmNlIG9mIEhhcHBpbmVzc1wiLCBwdWJsaWNhdGlvbkRhdGU6IDIwMTQsIGF1dGhvcklkOiAxMCwgbm90ZTogNC40LCBjb21tZW50YWlyZTogXCJJbnNpZ2h0ZnVsIGFuZCB1cGxpZnRpbmcuXCIsIHByaXg6IDIwLjk5LCBkZXNjcmlwdGlvbjogXCJFeHBsb3JpbmcgdGhlIHNjaWVuY2UgYmVoaW5kIGhhcHBpbmVzcy5cIiB9XHJcbiAgICBdO1xyXG4gICAgc2V0Qm9va3MoZXhhbXBsZUJvb2tzKTtcclxuICB9XHJcblxyXG4gIC8vIG9uIGNoYXJnZSBsZXMgbGl2cmVzIGF1IGNoYXJnZW1lbnQgZGUgbGEgcGFnZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQm9va3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZGUgbGEgYmFycmUgZGUgcmVjaGVyY2hlXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZGUgY3JpdMOocmUgZGUgdHJpXHJcbiAgY29uc3QgaGFuZGxlU29ydENyaXRlcmlhQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFNvcnRDcml0ZXJpYShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEfDqHJlIGxlIGNoYW5nZW1lbnQgZCdvcmRyZSBkZSB0cmlcclxuICBjb25zdCBoYW5kbGVTb3J0T3JkZXJDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0U29ydE9yZGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAodGl0bGU6IHN0cmluZywgcHVibGljYXRpb25EYXRlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBuZXdCb29rOiBCb29rTW9kZWwgPSB7XHJcbiAgICAgIGlkOiBib29rcy5sZW5ndGggKyAxLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgcHVibGljYXRpb25EYXRlOiBuZXcgRGF0ZShwdWJsaWNhdGlvbkRhdGUpLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIGF1dGhvcklkOiBwYXJzZUludChhdXRob3IpLFxyXG4gICAgICBub3RlOiAwLFxyXG4gICAgICBjb21tZW50YWlyZTogXCJcIixcclxuICAgICAgcHJpeDogMCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiXCJcclxuICAgIH07XHJcbiAgICBzZXRCb29rcyhbLi4uYm9va3MsIG5ld0Jvb2tdKTtcclxuICB9O1xyXG5cclxuICAvLyBGaWx0cmUgbGVzIGxpdnJlcyBlbiBmb25jdGlvbiBkdSB0ZXJtZSBkZSByZWNoZXJjaGVcclxuICBjb25zdCBmaWx0ZXJlZEJvb2tzID0gYm9va3MuZmlsdGVyKGJvb2sgPT4gXHJcbiAgICBib29rLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIC8vIFRyaWUgbGVzIGxpdnJlcyBlbiBmb25jdGlvbiBkdSBjcml0w6hyZSBldCBkZSBsJ29yZHJlIGRlIHRyaVxyXG4gIGNvbnN0IHNvcnRlZEJvb2tzID0gZmlsdGVyZWRCb29rcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBpZiAoc29ydENyaXRlcmlhID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHJldHVybiBzb3J0T3JkZXIgPT09ICdhc2MnID8gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpIDogYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpO1xyXG4gICAgfSBlbHNlIGlmIChzb3J0Q3JpdGVyaWEgPT09ICdwdWJsaWNhdGlvbkRhdGUnKSB7XHJcbiAgICAgIHJldHVybiBzb3J0T3JkZXIgPT09ICdhc2MnID8gYS5wdWJsaWNhdGlvbkRhdGUgLSBiLnB1YmxpY2F0aW9uRGF0ZSA6IGIucHVibGljYXRpb25EYXRlIC0gYS5wdWJsaWNhdGlvbkRhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHNvcnRDcml0ZXJpYSA9PT0gJ25vdGUnKSB7XHJcbiAgICAgIHJldHVybiBzb3J0T3JkZXIgPT09ICdhc2MnID8gYS5ub3RlIC0gYi5ub3RlIDogYi5ub3RlIC0gYS5ub3RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+Qm9va3MgUGFnZTwvaDI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4odHJ1ZSl9PkNyZWF0ZSBOZXcgQm9vazwvYnV0dG9uPlxyXG4gICAgICA8TW9kYWxDcmVhdGVCb29rIFxyXG4gICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59IFxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKX0gXHJcbiAgICAgICAgb25DcmVhdGU9e29uQ3JlYXRlfSBcclxuICAgICAgLz48YnIvPlxyXG4gICAgICA8U2VhcmNoQmFyQm9vayBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfSBvblNlYXJjaENoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfSAvPlxyXG4gICAgICA8U29ydEJhckJvb2sgXHJcbiAgICAgICAgc29ydENyaXRlcmlhPXtzb3J0Q3JpdGVyaWF9IFxyXG4gICAgICAgIHNvcnRPcmRlcj17c29ydE9yZGVyfSBcclxuICAgICAgICBvblNvcnRDcml0ZXJpYUNoYW5nZT17aGFuZGxlU29ydENyaXRlcmlhQ2hhbmdlfSBcclxuICAgICAgICBvblNvcnRPcmRlckNoYW5nZT17aGFuZGxlU29ydE9yZGVyQ2hhbmdlfSBcclxuICAgICAgLz5cclxuICAgICAge3NvcnRlZEJvb2tzLm1hcCgoYm9vaykgPT4gPEJvb2tDYXJkIGtleT17Ym9vay5pZH0gYm9vaz17Ym9va30gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvb2tDYXJkIiwiU2VhcmNoQmFyQm9vayIsIlNvcnRCYXJCb29rIiwiTW9kYWxDcmVhdGVCb29rIiwiQm9va3MiLCJib29rcyIsInNldEJvb2tzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzb3J0Q3JpdGVyaWEiLCJzZXRTb3J0Q3JpdGVyaWEiLCJzb3J0T3JkZXIiLCJzZXRTb3J0T3JkZXIiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwibG9hZEJvb2tzIiwiZXhhbXBsZUJvb2tzIiwiaWQiLCJ0aXRsZSIsInB1YmxpY2F0aW9uRGF0ZSIsImF1dGhvcklkIiwibm90ZSIsImNvbW1lbnRhaXJlIiwicHJpeCIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNvcnRDcml0ZXJpYUNoYW5nZSIsImhhbmRsZVNvcnRPcmRlckNoYW5nZSIsIm9uQ3JlYXRlIiwiYXV0aG9yIiwibmV3Qm9vayIsImxlbmd0aCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInBhcnNlSW50IiwiZmlsdGVyZWRCb29rcyIsImZpbHRlciIsImJvb2siLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic29ydGVkQm9va3MiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZGl2IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwib25DbG9zZSIsImJyIiwib25TZWFyY2hDaGFuZ2UiLCJvblNvcnRDcml0ZXJpYUNoYW5nZSIsIm9uU29ydE9yZGVyQ2hhbmdlIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});