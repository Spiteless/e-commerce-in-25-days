webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/jon/code/e-commerce-in-25-days/11-next-ssg/next-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar url = \"https://pokeapi.co/api/v2/pokemon?limit=151\";\nvar headers = {\n  \"Cache-Control\": \"no-cache\"\n};\n\nfunction HomePage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      pokemon = _useState[0],\n      setPokemon = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchPokemon = /*#__PURE__*/function () {\n      var _ref = Object(_Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data, promises, results, pokeData;\n\n        return _Users_jon_code_e_commerce_in_25_days_11_next_ssg_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url);\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                promises = data.results.map(function (result) {\n                  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(result.url);\n                });\n                _context.next = 7;\n                return Promise.all(promises);\n\n              case 7:\n                results = _context.sent;\n                pokeData = results.map(function (r) {\n                  return {\n                    name: r.data.name,\n                    imageUrl: r.data.sprites.front_default\n                  };\n                });\n                setPokemon(pokeData);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchPokemon() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchPokemon();\n  }, []);\n  return pokemon.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: pokemon.map(function (poke) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n          src: poke.imageUrl\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n          children: poke.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, poke.name, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"4D0jkhGq0ZINAQVoOiMhL4+r3a8=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ1cmwiLCJoZWFkZXJzIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwidXNlRWZmZWN0IiwiZmV0Y2hQb2tlbW9uIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwicHJvbWlzZXMiLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwiUHJvbWlzZSIsImFsbCIsInBva2VEYXRhIiwiciIsIm5hbWUiLCJpbWFnZVVybCIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwibGVuZ3RoIiwicG9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLDZDQUFaO0FBQ0EsSUFBTUMsT0FBTyxHQUFHO0FBQ2QsbUJBQWlCO0FBREgsQ0FBaEI7O0FBSUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFHbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVk7QUFBQSxnVkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVVCxHQUFWLENBREo7O0FBQUE7QUFBQTtBQUNYVSxvQkFEVyxvQkFDWEEsSUFEVztBQUdiQyx3QkFIYSxHQUdGRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxNQUFELEVBQVk7QUFDNUMseUJBQU9OLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUssTUFBTSxDQUFDZCxHQUFqQixDQUFQO0FBQ0QsaUJBRmdCLENBSEU7QUFBQTtBQUFBLHVCQU9HZSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWixDQVBIOztBQUFBO0FBT2JDLHVCQVBhO0FBU2JLLHdCQVRhLEdBU0ZMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNLLENBQUQ7QUFBQSx5QkFBUTtBQUNuQ0Msd0JBQUksRUFBRUQsQ0FBQyxDQUFDUixJQUFGLENBQU9TLElBRHNCO0FBRW5DQyw0QkFBUSxFQUFFRixDQUFDLENBQUNSLElBQUYsQ0FBT1csT0FBUCxDQUFlQztBQUZVLG1CQUFSO0FBQUEsaUJBQVosQ0FURTtBQWNuQmpCLDBCQUFVLENBQUNZLFFBQUQsQ0FBVjs7QUFkbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWlYsWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFpQkFBLGdCQUFZO0FBQ2IsR0FuQlEsRUFtQk4sRUFuQk0sQ0FBVDtBQXFCQSxTQUFPSCxPQUFPLENBQUNtQixNQUFSLEdBQWlCLENBQWpCLGdCQUNMO0FBQUEsY0FDR25CLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNXLElBQUQ7QUFBQSwwQkFDWDtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFQSxJQUFJLENBQUNKO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlJLElBQUksQ0FBQ0w7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBVUssSUFBSSxDQUFDTCxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssZ0JBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWRjtBQVlEOztHQXBDUWpCLFE7O0tBQUFBLFE7QUFzQ01BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MVwiO1xuY29uc3QgaGVhZGVycyA9IHtcbiAgXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcbn07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbcG9rZW1vbiwgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFBva2Vtb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXG4gICAgICBjb25zdCBwcm9taXNlcyA9IGRhdGEucmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHJlc3VsdC51cmwpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgIGNvbnN0IHBva2VEYXRhID0gcmVzdWx0cy5tYXAoKHIpID0+ICh7XG4gICAgICAgIG5hbWU6IHIuZGF0YS5uYW1lLFxuICAgICAgICBpbWFnZVVybDogci5kYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICAgIH0pKTtcblxuICAgICAgc2V0UG9rZW1vbihwb2tlRGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoUG9rZW1vbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBva2Vtb24ubGVuZ3RoID4gMCA/IChcbiAgICA8ZGl2PlxuICAgICAge3Bva2Vtb24ubWFwKChwb2tlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtwb2tlLm5hbWV9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwb2tlLmltYWdlVXJsfSAvPlxuICAgICAgICAgIDxwPntwb2tlLm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})