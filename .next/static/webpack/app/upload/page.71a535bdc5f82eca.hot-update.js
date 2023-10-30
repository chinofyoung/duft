"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/upload/page",{

/***/ "(app-pages-browser)/./app/upload/page.tsx":
/*!*****************************!*\
  !*** ./app/upload/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ \"(app-pages-browser)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list */ \"(app-pages-browser)/./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message */ \"(app-pages-browser)/./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/image */ \"(app-pages-browser)/./node_modules/antd/lib/image/index.js\");\n/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/progress */ \"(app-pages-browser)/./node_modules/antd/lib/progress/index.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./app/firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst UploadImageToStorage = ()=>{\n    _s();\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [downloadURL, setDownloadURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [progressUpload, setProgressUpload] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleSelectedFile = (files)=>{\n        if (files && files[0].size < 10000000) {\n            setImageFile(files[0]);\n            console.log(files[0]);\n        } else {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"File size to large\");\n        }\n    };\n    const handleUploadFile = ()=>{\n        if (imageFile) {\n            const name = imageFile.name;\n            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_3__.storage, \"image/\".concat(name));\n            const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(storageRef, imageFile);\n            uploadTask.on(\"state_changed\", (snapshot)=>{\n                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n                setProgressUpload(progress) // to show progress upload\n                ;\n                switch(snapshot.state){\n                    case \"paused\":\n                        console.log(\"Upload is paused\");\n                        break;\n                    case \"running\":\n                        console.log(\"Upload is running\");\n                        break;\n                }\n            }, (error)=>{\n                antd_lib_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(error.message);\n            }, ()=>{\n                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(uploadTask.snapshot.ref).then((url)=>{\n                    //url is download url of file\n                    setDownloadURL(url);\n                });\n            });\n        } else {\n            antd_lib_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"File not found\");\n        }\n    };\n    const handleRemoveFile = ()=>setImageFile(undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"padded\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-red-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    placeholder: \"Select file to upload\",\n                    accept: \"image/png\",\n                    onChange: (files)=>handleSelectedFile(files.target.files)\n                }, void 0, false, {\n                    fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: [\n                            imageFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                        extra: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                onClick: handleRemoveFile,\n                                                type: \"text\",\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-times\"\n                                                }, void 0, false, void 0, void 0)\n                                            }, \"btnRemoveFile\", false, void 0, void 0)\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item.Meta, {\n                                            title: imageFile.name,\n                                            description: \"Size: \".concat(imageFile.size)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-right mt-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                loading: isUploading,\n                                                type: \"primary\",\n                                                onClick: handleUploadFile,\n                                                children: \"Upload\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_progress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                percent: progressUpload\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true),\n                            downloadURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        src: downloadURL,\n                                        alt: downloadURL,\n                                        style: {\n                                            width: 200,\n                                            height: 200,\n                                            objectFit: \"cover\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: downloadURL\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/chinoyoung/Code/duft/app/upload/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadImageToStorage, \"0nqdggCHdv1syomT2nMxWFXMW24=\");\n_c = UploadImageToStorage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadImageToStorage);\nvar _c;\n$RefreshReg$(_c, \"UploadImageToStorage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNxRCxTQUFTdkM7Ozs7Ozs7Ozs7Ozs7OzRCQUt4QkosNkJBQ0M7O2tEQUNFLDhEQUFDWCxzREFBS0E7d0NBQ0p1RCxLQUFLNUM7d0NBQ0w2QyxLQUFLN0M7d0NBQ0w4QyxPQUFPOzRDQUFFQyxPQUFPOzRDQUFLQyxRQUFROzRDQUFLQyxXQUFXO3dDQUFROzs7Ozs7a0RBRXZELDhEQUFDQztrREFBR2xEOzs7Ozs7OzswQ0FHUiw4REFBQ2tEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQXBITXJEO0tBQUFBO0FBc0hOLCtEQUFlQSxvQkFBb0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VwbG9hZC9wYWdlLnRzeD9mZjhkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgTGlzdCwgbWVzc2FnZSwgSW1hZ2UsIFByb2dyZXNzIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXNSZXN1bWFibGUsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL2ZpcmViYXNlJ1xuXG5jb25zdCBVcGxvYWRJbWFnZVRvU3RvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2ltYWdlRmlsZSwgc2V0SW1hZ2VGaWxlXSA9IHVzZVN0YXRlPEZpbGU+KClcbiAgY29uc3QgW2Rvd25sb2FkVVJMLCBzZXREb3dubG9hZFVSTF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Byb2dyZXNzVXBsb2FkLCBzZXRQcm9ncmVzc1VwbG9hZF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkRmlsZSA9IChmaWxlczogYW55KSA9PiB7XG4gICAgaWYgKGZpbGVzICYmIGZpbGVzWzBdLnNpemUgPCAxMDAwMDAwMCkge1xuICAgICAgc2V0SW1hZ2VGaWxlKGZpbGVzWzBdKVxuXG4gICAgICBjb25zb2xlLmxvZyhmaWxlc1swXSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcignRmlsZSBzaXplIHRvIGxhcmdlJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVVcGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChpbWFnZUZpbGUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBpbWFnZUZpbGUubmFtZVxuICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBgaW1hZ2UvJHtuYW1lfWApXG4gICAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkQnl0ZXNSZXN1bWFibGUoc3RvcmFnZVJlZiwgaW1hZ2VGaWxlKVxuXG4gICAgICB1cGxvYWRUYXNrLm9uKFxuICAgICAgICAnc3RhdGVfY2hhbmdlZCcsXG4gICAgICAgIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID1cbiAgICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDBcblxuICAgICAgICAgIHNldFByb2dyZXNzVXBsb2FkKHByb2dyZXNzKSAvLyB0byBzaG93IHByb2dyZXNzIHVwbG9hZFxuXG4gICAgICAgICAgc3dpdGNoIChzbmFwc2hvdC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAncGF1c2VkJzpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBpcyBwYXVzZWQnKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAncnVubmluZyc6XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGxvYWQgaXMgcnVubmluZycpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBnZXREb3dubG9hZFVSTCh1cGxvYWRUYXNrLnNuYXBzaG90LnJlZikudGhlbigodXJsKSA9PiB7XG4gICAgICAgICAgICAvL3VybCBpcyBkb3dubG9hZCB1cmwgb2YgZmlsZVxuICAgICAgICAgICAgc2V0RG93bmxvYWRVUkwodXJsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ZpbGUgbm90IGZvdW5kJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWxlID0gKCkgPT4gc2V0SW1hZ2VGaWxlKHVuZGVmaW5lZClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGVkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MDBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGZpbGUgdG8gdXBsb2FkXCJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IGhhbmRsZVNlbGVjdGVkRmlsZShmaWxlcy50YXJnZXQuZmlsZXMpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAge2ltYWdlRmlsZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgZXh0cmE9e1tcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT1cImJ0blJlbW92ZUZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT59XG4gICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ltYWdlRmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YFNpemU6ICR7aW1hZ2VGaWxlLnNpemV9YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc1VwbG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWRGaWxlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17cHJvZ3Jlc3NVcGxvYWR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2Rvd25sb2FkVVJMICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17ZG93bmxvYWRVUkx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Rvd25sb2FkVVJMfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgaGVpZ2h0OiAyMDAsIG9iamVjdEZpdDogJ2NvdmVyJyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+e2Rvd25sb2FkVVJMfTwvcD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZVRvU3RvcmFnZSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiTGlzdCIsIm1lc3NhZ2UiLCJJbWFnZSIsIlByb2dyZXNzIiwicmVmIiwidXBsb2FkQnl0ZXNSZXN1bWFibGUiLCJnZXREb3dubG9hZFVSTCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdG9yYWdlIiwiVXBsb2FkSW1hZ2VUb1N0b3JhZ2UiLCJpbWFnZUZpbGUiLCJzZXRJbWFnZUZpbGUiLCJkb3dubG9hZFVSTCIsInNldERvd25sb2FkVVJMIiwiaXNVcGxvYWRpbmciLCJzZXRJc1VwbG9hZGluZyIsInByb2dyZXNzVXBsb2FkIiwic2V0UHJvZ3Jlc3NVcGxvYWQiLCJoYW5kbGVTZWxlY3RlZEZpbGUiLCJmaWxlcyIsInNpemUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVVcGxvYWRGaWxlIiwibmFtZSIsInN0b3JhZ2VSZWYiLCJ1cGxvYWRUYXNrIiwib24iLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJzdGF0ZSIsInRoZW4iLCJ1cmwiLCJoYW5kbGVSZW1vdmVGaWxlIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhY2NlcHQiLCJvbkNoYW5nZSIsInRhcmdldCIsIkl0ZW0iLCJleHRyYSIsIm9uQ2xpY2siLCJpY29uIiwiaSIsIk1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9hZGluZyIsInBlcmNlbnQiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/upload/page.tsx\n"));

/***/ })

});