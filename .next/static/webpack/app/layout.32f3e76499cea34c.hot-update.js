"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eb2da256d3c7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzg1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlYjJkYTI1NmQzYzdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navigation.js":
/*!**************************************!*\
  !*** ./app/components/navigation.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth-context */ \"(app-pages-browser)/./app/context/auth-context.js\");\n/* harmony import */ var _barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GiHamburgerMenu!=!react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillCloseCircle_react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillCloseCircle!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const { user, googleSignIn, logOut } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__.UserAuth)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSignIn = async ()=>{\n        try {\n            await googleSignIn();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleSignOut = async ()=>{\n        try {\n            await logOut();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuthentication = async ()=>{\n            await new Promise((resolve)=>setTimeout(resolve, 50));\n            setLoading(false);\n        };\n        checkAuthentication();\n    }, [\n        user\n    ]);\n    let nav = [\n        {\n            url: \"/\",\n            label: \"Home\"\n        },\n        {\n            url: \"/record\",\n            label: \"Add Record\"\n        },\n        {\n            url: \"/reports\",\n            label: \"Reports\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-900 p-4 flex items-center z-20 h-20 sticky top-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex w-full select-none justify-start font-playfair text-2xl text-slate-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold\",\n                        children: \"Duft.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    \"Mo\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setOpenMenu(true),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiHamburgerMenu, {\n                    className: \"text-white text-2xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow-lg fixed inset-20 right-0 top-0 bottom-0 z-30 flex flex-col overflow-auto bg-white text-lg text-slate-900 transition-all duration-300 ease-in-out sm:text-xl \".concat(openMenu ? \"translate-x-0\" : \"translate-x-[100vw]\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between border-b border-solid border-slate-200 p-4\",\n                        children: [\n                            loading ? null : user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"h-12 w-12 rounded-full object-cover\",\n                                        src: user === null || user === void 0 ? void 0 : user.photoURL\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-slate-600 text-sm\",\n                                        children: [\n                                            \"Hello, \",\n                                            user === null || user === void 0 ? void 0 : user.displayName,\n                                            \"!\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-slate-600 text-sm\",\n                                children: \"Hello, Guest!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setOpenMenu(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillCloseCircle_react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillCloseCircle, {\n                                    className: \"text-3xl text-red-500\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col text-sm\",\n                        children: nav.map(function(nav, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"border-b\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"p-4 w-full block\",\n                                    href: nav.url,\n                                    children: nav.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-auto w-full flex justify-center p-4 bg-slate-100\",\n                        children: loading ? null : !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSignIn,\n                            className: \"bg-red-500 w-full text-sm px-4 py-2.5 text-white rounded-md\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSignOut,\n                            className: \"bg-red-500 w-full text-sm px-4 py-2.5 text-white rounded-md\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chinoyoung/Code/duft/app/components/navigation.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"x5SbkzsUk9S1N5lMqbwI4595VdA=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDdEI7QUFDc0I7QUFDRjtBQUNFO0FBRW5ELE1BQU1PLGFBQWE7O0lBQ2pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHTiwrREFBUUE7SUFDL0MsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNYyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNTjtRQUNSLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLE1BQU1HLGdCQUFnQjtRQUNwQixJQUFJO1lBQ0YsTUFBTVQ7UUFDUixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0Isc0JBQXNCO1lBQzFCLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTO1lBQ25EVixXQUFXO1FBQ2I7UUFDQVE7SUFDRixHQUFHO1FBQUNaO0tBQUs7SUFFVCxJQUFJZ0IsTUFBTTtRQUNSO1lBQ0VDLEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFLRCxXQUFVO2tDQUFZOzs7Ozs7b0JBQVk7Ozs7Ozs7MEJBRzFDLDhEQUFDRTtnQkFBT0MsU0FBUyxJQUFNakIsWUFBWTswQkFDakMsNEVBQUNULGtHQUFlQTtvQkFBQ3VCLFdBQVU7Ozs7Ozs7Ozs7OzBCQUc3Qiw4REFBQ0Q7Z0JBQ0NDLFdBQVcsdUtBRVYsT0FEQ2YsV0FBVyxrQkFBa0I7O2tDQUcvQiw4REFBQ2M7d0JBQUlDLFdBQVU7OzRCQUNaakIsVUFBVSxPQUFPSCxxQkFDaEIsOERBQUNtQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUNDSixXQUFVO3dDQUNWSyxHQUFHLEVBQUV6QixpQkFBQUEsMkJBQUFBLEtBQU0wQixRQUFROzs7Ozs7a0RBRXJCLDhEQUFDTDt3Q0FBS0QsV0FBVTs7NENBQXlCOzRDQUMvQnBCLGlCQUFBQSwyQkFBQUEsS0FBTTJCLFdBQVc7NENBQUM7Ozs7Ozs7Ozs7OzswREFJOUIsOERBQUNOO2dDQUFLRCxXQUFVOzBDQUF5Qjs7Ozs7OzBDQUkzQyw4REFBQ0U7Z0NBQU9DLFNBQVMsSUFBTWpCLFlBQVk7MENBQ2pDLDRFQUFDUixzR0FBaUJBO29DQUFDc0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWpDLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FDWEosSUFBSWEsR0FBRyxDQUFDLFNBQVViLEdBQUcsRUFBRWMsS0FBSzs0QkFDM0IscUJBQ0UsOERBQUNDO2dDQUFlWCxXQUFVOzBDQUN4Qiw0RUFBQ3pCLGtEQUFJQTtvQ0FBQ3lCLFdBQVU7b0NBQW1CWSxNQUFNaEIsSUFBSUMsR0FBRzs4Q0FDN0NELElBQUlFLEtBQUs7Ozs7OzsrQkFGTFk7Ozs7O3dCQU1iOzs7Ozs7a0NBR0YsOERBQUNYO3dCQUFJQyxXQUFVO2tDQUNaakIsVUFBVSxPQUFPLENBQUNILHFCQUNqQiw4REFBQ3NCOzRCQUNDQyxTQUFTaEI7NEJBQ1RhLFdBQVU7c0NBQ1g7Ozs7O3NEQUlELDhEQUFDRTs0QkFDQ0MsU0FBU1o7NEJBQ1RTLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FoSE1yQjtLQUFBQTtBQWtITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzPzEwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVXNlckF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoLWNvbnRleHRcIjtcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHsgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyLCBnb29nbGVTaWduSW4sIGxvZ091dCB9ID0gVXNlckF1dGgoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ29vZ2xlU2lnbkluKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9nT3V0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja0F1dGhlbnRpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTApKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgY2hlY2tBdXRoZW50aWNhdGlvbigpO1xuICB9LCBbdXNlcl0pO1xuXG4gIGxldCBuYXYgPSBbXG4gICAge1xuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIGxhYmVsOiBcIkhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDogXCIvcmVjb3JkXCIsXG4gICAgICBsYWJlbDogXCJBZGQgUmVjb3JkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6IFwiL3JlcG9ydHNcIixcbiAgICAgIGxhYmVsOiBcIlJlcG9ydHNcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS05MDAgcC00IGZsZXggaXRlbXMtY2VudGVyIHotMjAgaC0yMCBzdGlja3kgdG9wLTBcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHNlbGVjdC1ub25lIGp1c3RpZnktc3RhcnQgZm9udC1wbGF5ZmFpciB0ZXh0LTJ4bCB0ZXh0LXNsYXRlLTUwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkR1ZnQuPC9zcGFuPk1vXG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbk1lbnUodHJ1ZSl9PlxuICAgICAgICA8R2lIYW1idXJnZXJNZW51IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIiAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgc2hhZG93LWxnIGZpeGVkIGluc2V0LTIwIHJpZ2h0LTAgdG9wLTAgYm90dG9tLTAgei0zMCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWF1dG8gYmctd2hpdGUgdGV4dC1sZyB0ZXh0LXNsYXRlLTkwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgc206dGV4dC14bCAke1xuICAgICAgICAgIG9wZW5NZW51ID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LVsxMDB2d11cIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcC00XCI+XG4gICAgICAgICAge2xvYWRpbmcgPyBudWxsIDogdXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMiByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LnBob3RvVVJMfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgSGVsbG8sIHt1c2VyPy5kaXNwbGF5TmFtZX0hXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIEhlbGxvLCBHdWVzdCFcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbk1lbnUoZmFsc2UpfT5cbiAgICAgICAgICAgIDxBaUZpbGxDbG9zZUNpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LXJlZC01MDBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNtXCI+XG4gICAgICAgICAge25hdi5tYXAoZnVuY3Rpb24gKG5hdiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInAtNCB3LWZ1bGwgYmxvY2tcIiBocmVmPXtuYXYudXJsfT5cbiAgICAgICAgICAgICAgICAgIHtuYXYubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcC00IGJnLXNsYXRlLTEwMFwiPlxuICAgICAgICAgIHtsb2FkaW5nID8gbnVsbCA6ICF1c2VyID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWduSW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdy1mdWxsIHRleHQtc20gcHgtNCBweS0yLjUgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdy1mdWxsIHRleHQtc20gcHgtNCBweS0yLjUgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlVzZXJBdXRoIiwiR2lIYW1idXJnZXJNZW51IiwiQWlGaWxsQ2xvc2VDaXJjbGUiLCJOYXZpZ2F0aW9uIiwidXNlciIsImdvb2dsZVNpZ25JbiIsImxvZ091dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsImhhbmRsZVNpZ25JbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNpZ25PdXQiLCJjaGVja0F1dGhlbnRpY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibmF2IiwidXJsIiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navigation.js\n"));

/***/ })

});