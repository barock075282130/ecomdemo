"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./components/product/action/AddCart.jsx":
/*!***********************************************!*\
  !*** ./components/product/action/AddCart.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cart */ \"(app-pages-browser)/./node_modules/cart/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst AddCart = (param)=>{\n    let { productId, detail, price, image } = param;\n    _s();\n    const { addToCart } = (0,cart__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-full py-2 bg-blue-100 text-blue-50 rounded-md hover:bg-blue-600 hover:text-white duration-300 font-semibold\",\n        onClick: ()=>addToCart({\n                productId,\n                detail,\n                price,\n                image\n            }),\n        children: \"Add to cart\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\action\\\\AddCart.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddCart, \"YPx5musMedcmtt2OkzMtHcKllYw=\", false, function() {\n    return [\n        cart__WEBPACK_IMPORTED_MODULE_1__.useCart\n    ];\n});\n_c = AddCart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCart);\nvar _c;\n$RefreshReg$(_c, \"AddCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9hY3Rpb24vQWRkQ2FydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEI7QUFFOUIsTUFBTUMsVUFBVTtRQUFDLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRTs7SUFDbEQsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR04sNkNBQU9BO0lBQzdCLHFCQUNFLDhEQUFDTztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBS0gsVUFBVTtnQkFBQ0o7Z0JBQVVDO2dCQUFPQztnQkFBT0M7WUFBSztrQkFDdkQ7Ozs7OztBQUlMO0dBVk1KOztRQUNrQkQseUNBQU9BOzs7S0FEekJDO0FBWU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L2FjdGlvbi9BZGRDYXJ0LmpzeD8xODk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiY2FydFwiXHJcblxyXG5jb25zdCBBZGRDYXJ0ID0gKHsgcHJvZHVjdElkLCBkZXRhaWwsIHByaWNlLCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRUb0NhcnQgfSA9IHVzZUNhcnQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIFxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtNTAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGR1cmF0aW9uLTMwMCBmb250LXNlbWlib2xkXCJcclxuICAgICAgb25DbGljaz17KCk9PiBhZGRUb0NhcnQoe3Byb2R1Y3RJZCxkZXRhaWwscHJpY2UsIGltYWdlfSl9XHJcbiAgICA+XHJcbiAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENhcnQiXSwibmFtZXMiOlsidXNlQ2FydCIsIkFkZENhcnQiLCJwcm9kdWN0SWQiLCJkZXRhaWwiLCJwcmljZSIsImltYWdlIiwiYWRkVG9DYXJ0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/action/AddCart.jsx\n"));

/***/ })

});