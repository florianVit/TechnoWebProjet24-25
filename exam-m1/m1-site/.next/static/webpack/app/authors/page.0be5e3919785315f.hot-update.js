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

/***/ "(app-pages-browser)/./src/app/components/Author/AuthorForm.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/Author/AuthorForm.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorForm; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Authors/Authors.module.css */ \"(app-pages-browser)/./src/app/styles/Authors/Authors.module.css\");\n/* harmony import */ var _styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\nfunction AuthorForm(param) {\n    var fetchAuthors = param.fetchAuthors, isEditing = param.isEditing, editAuthorId = param.editAuthorId, setIsEditing = param.setIsEditing, setEditAuthorId = param.setEditAuthorId;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), nom = _useState[0], setNom = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), photo = _useState1[0], setPhoto = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), nbrLivresEcrits = _useState2[0], setNbrLivresEcrits = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), moyenneAvis = _useState3[0], setMoyenneAvis = _useState3[1];\n    var handleSubmit = function(event) {\n        event.preventDefault();\n        var authorData = {\n            nom: nom,\n            photo: photo,\n            nbr_livres_ecrits: nbrLivresEcrits,\n            moyenne_avis: moyenneAvis\n        };\n        var url = isEditing ? \"http://localhost:3001/authors/update-author/\".concat(editAuthorId) : \"http://localhost:3001/authors/create-author\";\n        var method = isEditing ? \"PUT\" : \"POST\";\n        fetch(url, {\n            method: method,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(authorData)\n        }).then(function(response) {\n            return response.json();\n        }).then(function() {\n            fetchAuthors();\n            resetForm();\n        })[\"catch\"](function(error) {\n            return console.error(\"Error submitting author data:\", error);\n        });\n    };\n    var resetForm = function() {\n        setNom(\"\");\n        setPhoto(\"\");\n        setNbrLivresEcrits(0);\n        setMoyenneAvis(0);\n        setIsEditing(false);\n        setEditAuthorId(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isEditing && editAuthorId) {\n            fetch(\"http://localhost:3001/authors/by-id/\".concat(editAuthorId)).then(function(response) {\n                return response.json();\n            }).then(function(data) {\n                setNom(data.nom);\n                setPhoto(data.photo);\n                setNbrLivresEcrits(data.nbr_livres_ecrits);\n                setMoyenneAvis(data.moyenne_avis);\n            })[\"catch\"](function(error) {\n                return console.error(\"Error fetching author for edit:\", error);\n            });\n        }\n    }, [\n        isEditing,\n        editAuthorId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"add-author-form\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-title\"]),\n                children: isEditing ? \"Edit Author\" : \"Add a New Author\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"nom\",\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-label\"]),\n                children: \"Author Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"nom\",\n                placeholder: \"Enter the author's name\",\n                value: nom,\n                onChange: function(e) {\n                    return setNom(e.target.value);\n                },\n                required: true,\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-input\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"photo\",\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-label\"]),\n                children: \"Photo URL\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"photo\",\n                placeholder: \"Enter the URL of the author's photo\",\n                value: photo,\n                onChange: function(e) {\n                    return setPhoto(e.target.value);\n                },\n                required: true,\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-input\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"nbrLivresEcrits\",\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-label\"]),\n                children: \"Number of Books Written\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"nbrLivresEcrits\",\n                placeholder: \"Enter the number of books written\",\n                value: nbrLivresEcrits,\n                onChange: function(e) {\n                    return setNbrLivresEcrits(Number(e.target.value));\n                },\n                required: true,\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-input\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"moyenneAvis\",\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-label\"]),\n                children: \"Average Rating\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"moyenneAvis\",\n                placeholder: \"Enter the author's average rating\",\n                value: moyenneAvis,\n                onChange: function(e) {\n                    return setMoyenneAvis(Number(e.target.value));\n                },\n                step: \"0.1\",\n                required: true,\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-input\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: (_styles_Authors_Authors_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"form-button\"]),\n                children: isEditing ? \"Edit Author\" : \"Add Author\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leohe\\\\Cours\\\\4eAnnee\\\\TechnologiesWeb\\\\TechnoWebProjet24-25\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\components\\\\Author\\\\AuthorForm.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorForm, \"6j9QU19yfUsUMDmVR9hrKnFaK28=\");\n_c = AuthorForm;\nvar _c;\n$RefreshReg$(_c, \"AuthorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdXRob3IvQXV0aG9yRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNVO0FBVTlDLFNBQVNJLFdBQVcsS0FNakI7UUFMaEJDLGVBRGlDLE1BQ2pDQSxjQUNBQyxZQUZpQyxNQUVqQ0EsV0FDQUMsZUFIaUMsTUFHakNBLGNBQ0FDLGVBSmlDLE1BSWpDQSxjQUNBQyxrQkFMaUMsTUFLakNBOztJQUVBLElBQXNCUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeEJTLE1BQWVULGNBQVZVLFNBQVVWO0lBQ3RCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBNUJXLFFBQW1CWCxlQUFaWSxXQUFZWjtJQUMxQixJQUE4Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWhEYSxrQkFBdUNiLGVBQXRCYyxxQkFBc0JkO0lBQzlDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBeENlLGNBQStCZixlQUFsQmdCLGlCQUFrQmhCO0lBRXRDLElBQU1pQixlQUFlLFNBQUNDO1FBQ3BCQSxNQUFNQyxjQUFjO1FBRXBCLElBQU1DLGFBQWE7WUFBRVgsS0FBQUE7WUFBS0UsT0FBQUE7WUFBT1UsbUJBQW1CUjtZQUFpQlMsY0FBY1A7UUFBWTtRQUUvRixJQUFNUSxNQUFNbEIsWUFDUiwrQ0FBNEQsT0FBYkMsZ0JBQy9DO1FBRUosSUFBTWtCLFNBQVNuQixZQUFZLFFBQVE7UUFFbkNvQixNQUFNRixLQUFLO1lBQ1RDLFFBQUFBO1lBQ0FFLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNUO1FBQ3ZCLEdBQ0dVLElBQUksQ0FBQ0MsU0FBQUE7bUJBQVlBLFNBQVNDLElBQUk7V0FDOUJGLElBQUksQ0FBQztZQUNKMUI7WUFDQTZCO1FBQ0YsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQTttQkFBU0MsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7O0lBQ25FO0lBRUEsSUFBTUYsWUFBWTtRQUNoQnZCLE9BQU87UUFDUEUsU0FBUztRQUNURSxtQkFBbUI7UUFDbkJFLGVBQWU7UUFDZlQsYUFBYTtRQUNiQyxnQkFBZ0I7SUFDbEI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixJQUFJSSxhQUFhQyxjQUFjO1lBQzdCbUIsTUFBTSx1Q0FBb0QsT0FBYm5CLGVBQzFDd0IsSUFBSSxDQUFDQyxTQUFBQTt1QkFBWUEsU0FBU0MsSUFBSTtlQUM5QkYsSUFBSSxDQUFDTyxTQUFBQTtnQkFDSjNCLE9BQU8yQixLQUFLNUIsR0FBRztnQkFDZkcsU0FBU3lCLEtBQUsxQixLQUFLO2dCQUNuQkcsbUJBQW1CdUIsS0FBS2hCLGlCQUFpQjtnQkFDekNMLGVBQWVxQixLQUFLZixZQUFZO1lBQ2xDLEVBQ0NZLENBQUFBLFFBQUssQ0FBQ0MsU0FBQUE7dUJBQVNDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBOztRQUNyRTtJQUNGLEdBQUc7UUFBQzlCO1FBQVdDO0tBQWE7SUFFNUIscUJBQ0UsOERBQUNnQztRQUFLQyxVQUFVdEI7UUFBY3VCLFdBQVd0Qyw4RkFBeUI7OzBCQUM5RCw4REFBQ3VDO2dCQUFHRCxXQUFXdEMseUZBQW9COzBCQUFHRyxZQUFZLGdCQUFnQjs7Ozs7OzBCQUVsRSw4REFBQ3FDO2dCQUFNQyxTQUFRO2dCQUFNSCxXQUFXdEMseUZBQW9COzBCQUFFOzs7Ozs7MEJBQ3RELDhEQUFDMEM7Z0JBQ0RDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLGFBQVk7Z0JBQ1pDLE9BQU92QztnQkFDUHdDLFVBQVUsU0FBQ0M7MkJBQU14QyxPQUFPd0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztnQkFDdENJLFFBQVE7Z0JBQ1JaLFdBQVd0Qyx5RkFBb0I7Ozs7OzswQkFHL0IsOERBQUN3QztnQkFBTUMsU0FBUTtnQkFBUUgsV0FBV3RDLHlGQUFvQjswQkFBRTs7Ozs7OzBCQUN4RCw4REFBQzBDO2dCQUNEQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxhQUFZO2dCQUNaQyxPQUFPckM7Z0JBQ1BzQyxVQUFVLFNBQUNDOzJCQUFNdEMsU0FBU3NDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Z0JBQ3hDSSxRQUFRO2dCQUNSWixXQUFXdEMseUZBQW9COzs7Ozs7MEJBRy9CLDhEQUFDd0M7Z0JBQU1DLFNBQVE7Z0JBQWtCSCxXQUFXdEMseUZBQW9COzBCQUFFOzs7Ozs7MEJBQ2xFLDhEQUFDMEM7Z0JBQ0RDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLGFBQVk7Z0JBQ1pDLE9BQU9uQztnQkFDUG9DLFVBQVUsU0FBQ0M7MkJBQU1wQyxtQkFBbUJ1QyxPQUFPSCxFQUFFQyxNQUFNLENBQUNILEtBQUs7O2dCQUN6REksUUFBUTtnQkFDUlosV0FBV3RDLHlGQUFvQjs7Ozs7OzBCQUcvQiw4REFBQ3dDO2dCQUFNQyxTQUFRO2dCQUFjSCxXQUFXdEMseUZBQW9COzBCQUFFOzs7Ozs7MEJBQzlELDhEQUFDMEM7Z0JBQ0RDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLGFBQVk7Z0JBQ1pDLE9BQU9qQztnQkFDUGtDLFVBQVUsU0FBQ0M7MkJBQU1sQyxlQUFlcUMsT0FBT0gsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztnQkFDckRNLE1BQUs7Z0JBQ0xGLFFBQVE7Z0JBQ1JaLFdBQVd0Qyx5RkFBb0I7Ozs7OzswQkFHL0IsOERBQUNxRDtnQkFDRFYsTUFBSztnQkFDTEwsV0FBV3RDLDBGQUFxQjswQkFFL0JHLFlBQVksZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUFJckM7R0FwSHdCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQXV0aG9yL0F1dGhvckZvcm0udHN4P2Y5OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0F1dGhvcnMvQXV0aG9ycy5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBBdXRob3JGb3JtUHJvcHMge1xyXG4gIGZldGNoQXV0aG9yczogKCkgPT4gdm9pZDtcclxuICBpc0VkaXRpbmc6IGJvb2xlYW47XHJcbiAgZWRpdEF1dGhvcklkOiBzdHJpbmcgfCBudWxsO1xyXG4gIHNldElzRWRpdGluZzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHNldEVkaXRBdXRob3JJZDogKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JGb3JtKHtcclxuICBmZXRjaEF1dGhvcnMsXHJcbiAgaXNFZGl0aW5nLFxyXG4gIGVkaXRBdXRob3JJZCxcclxuICBzZXRJc0VkaXRpbmcsXHJcbiAgc2V0RWRpdEF1dGhvcklkXHJcbn06IEF1dGhvckZvcm1Qcm9wcykge1xyXG4gIGNvbnN0IFtub20sIHNldE5vbV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bob3RvLCBzZXRQaG90b10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ickxpdnJlc0Vjcml0cywgc2V0TmJyTGl2cmVzRWNyaXRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttb3llbm5lQXZpcywgc2V0TW95ZW5uZUF2aXNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGF1dGhvckRhdGEgPSB7IG5vbSwgcGhvdG8sIG5icl9saXZyZXNfZWNyaXRzOiBuYnJMaXZyZXNFY3JpdHMsIG1veWVubmVfYXZpczogbW95ZW5uZUF2aXMgfTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBpc0VkaXRpbmdcclxuICAgICAgPyBgaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGhvcnMvdXBkYXRlLWF1dGhvci8ke2VkaXRBdXRob3JJZH1gXHJcbiAgICAgIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRob3JzL2NyZWF0ZS1hdXRob3InO1xyXG5cclxuICAgIGNvbnN0IG1ldGhvZCA9IGlzRWRpdGluZyA/ICdQVVQnIDogJ1BPU1QnO1xyXG5cclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhdXRob3JEYXRhKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQXV0aG9ycygpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBhdXRob3IgZGF0YTonLCBlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgIHNldE5vbSgnJyk7XHJcbiAgICBzZXRQaG90bygnJyk7XHJcbiAgICBzZXROYnJMaXZyZXNFY3JpdHMoMCk7XHJcbiAgICBzZXRNb3llbm5lQXZpcygwKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICBzZXRFZGl0QXV0aG9ySWQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0VkaXRpbmcgJiYgZWRpdEF1dGhvcklkKSB7XHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aG9ycy9ieS1pZC8ke2VkaXRBdXRob3JJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHNldE5vbShkYXRhLm5vbSk7XHJcbiAgICAgICAgICBzZXRQaG90byhkYXRhLnBob3RvKTtcclxuICAgICAgICAgIHNldE5ickxpdnJlc0Vjcml0cyhkYXRhLm5icl9saXZyZXNfZWNyaXRzKTtcclxuICAgICAgICAgIHNldE1veWVubmVBdmlzKGRhdGEubW95ZW5uZV9hdmlzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhdXRob3IgZm9yIGVkaXQ6JywgZXJyb3IpKTtcclxuICAgIH1cclxuICB9LCBbaXNFZGl0aW5nLCBlZGl0QXV0aG9ySWRdKTsgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXNbXCJhZGQtYXV0aG9yLWZvcm1cIl19PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tdGl0bGVcIl19Pntpc0VkaXRpbmcgPyAnRWRpdCBBdXRob3InIDogJ0FkZCBhIE5ldyBBdXRob3InfTwvaDM+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21cIiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tbGFiZWxcIl19PkF1dGhvciBOYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgaWQ9XCJub21cIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGF1dGhvcidzIG5hbWVcIlxyXG4gICAgICAgIHZhbHVlPXtub219XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWlucHV0XCJdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG90b1wiIGNsYXNzTmFtZT17c3R5bGVzW1wiZm9ybS1sYWJlbFwiXX0+UGhvdG8gVVJMPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgaWQ9XCJwaG90b1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgVVJMIG9mIHRoZSBhdXRob3IncyBwaG90b1wiXHJcbiAgICAgICAgdmFsdWU9e3Bob3RvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvdG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWlucHV0XCJdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYnJMaXZyZXNFY3JpdHNcIiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tbGFiZWxcIl19Pk51bWJlciBvZiBCb29rcyBXcml0dGVuPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBpZD1cIm5ickxpdnJlc0Vjcml0c1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgbnVtYmVyIG9mIGJvb2tzIHdyaXR0ZW5cIlxyXG4gICAgICAgIHZhbHVlPXtuYnJMaXZyZXNFY3JpdHN9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYnJMaXZyZXNFY3JpdHMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0taW5wdXRcIl19XHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1veWVubmVBdmlzXCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWxhYmVsXCJdfT5BdmVyYWdlIFJhdGluZzwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgaWQ9XCJtb3llbm5lQXZpc1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgYXV0aG9yJ3MgYXZlcmFnZSByYXRpbmdcIlxyXG4gICAgICAgIHZhbHVlPXttb3llbm5lQXZpc31cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1veWVubmVBdmlzKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgIHN0ZXA9XCIwLjFcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWlucHV0XCJdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiZm9ybS1idXR0b25cIl19XHJcbiAgICAgICAgPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAnRWRpdCBBdXRob3InIDogJ0FkZCBBdXRob3InfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4pO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJBdXRob3JGb3JtIiwiZmV0Y2hBdXRob3JzIiwiaXNFZGl0aW5nIiwiZWRpdEF1dGhvcklkIiwic2V0SXNFZGl0aW5nIiwic2V0RWRpdEF1dGhvcklkIiwibm9tIiwic2V0Tm9tIiwicGhvdG8iLCJzZXRQaG90byIsIm5ickxpdnJlc0Vjcml0cyIsInNldE5ickxpdnJlc0Vjcml0cyIsIm1veWVubmVBdmlzIiwic2V0TW95ZW5uZUF2aXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aG9yRGF0YSIsIm5icl9saXZyZXNfZWNyaXRzIiwibW95ZW5uZV9hdmlzIiwidXJsIiwibWV0aG9kIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzZXRGb3JtIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkYXRhIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaDMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIk51bWJlciIsInN0ZXAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Author/AuthorForm.tsx\n"));

/***/ })

});