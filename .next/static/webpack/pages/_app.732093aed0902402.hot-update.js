"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignUpForm.jsx":
/*!***************************************!*\
  !*** ./src/components/SignUpForm.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignUpForm\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SignUpForm() {\n    _s();\n    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"relative isolate mt-8 flex items-center pr-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: id,\n                className: \"sr-only\",\n                children: \"Envia tu Email, Msjs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agustino\\\\Desktop\\\\agustinlopez\\\\src\\\\components\\\\SignUpForm.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agustino\\\\Desktop\\\\agustinlopez\\\\src\\\\components\\\\SignUpForm.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agustino\\\\Desktop\\\\agustinlopez\\\\src\\\\components\\\\SignUpForm.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Agustino\\\\Desktop\\\\agustinlopez\\\\src\\\\components\\\\SignUpForm.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUpForm, \"WhsuKpSQZEWeFcB7gWlfDRQktoQ=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useId\n    ];\n});\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduVXBGb3JtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUVlO0FBRXJDLFNBQVNFLGFBQWE7O0lBQzNCLElBQUlDLEtBQUtILDRDQUFLQTtJQUVkLHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQU1DLFNBQVNKO2dCQUFJRSxXQUFVOzBCQUFVOzs7Ozs7MEJBS3hDLDhEQUFDRztnQkFBSUgsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRztnQkFBSUgsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCLENBQUM7R0FkZUg7O1FBQ0xGLHdDQUFLQTs7O0tBREFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZ25VcEZvcm0uanN4P2FkNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lnblVwRm9ybSgpIHtcclxuICBsZXQgaWQgPSB1c2VJZCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpc29sYXRlIG10LTggZmxleCBpdGVtcy1jZW50ZXIgcHItMVwiPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICBFbnZpYSB0dSBFbWFpbCwgTXNqcyBcclxuICAgICAgPC9sYWJlbD5cclxuICAgIFxyXG4gICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgLXotMTAgcm91bmRlZC1sZyB0cmFuc2l0aW9uIHBlZXItZm9jdXM6cmluZy00IHBlZXItZm9jdXM6cmluZy1za3ktMzAwLzE1XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIC16LTEwIHJvdW5kZWQtbGcgYmctd2hpdGUvMi41IHJpbmctMSByaW5nLXdoaXRlLzE1IHRyYW5zaXRpb24gcGVlci1mb2N1czpyaW5nLXNreS0zMDBcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlSWQiLCJCdXR0b24iLCJTaWduVXBGb3JtIiwiaWQiLCJmb3JtIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SignUpForm.jsx\n"));

/***/ })

});