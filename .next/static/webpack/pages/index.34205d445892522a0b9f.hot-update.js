webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);




//  import Navbar from "../components/navbar";
// import React, { Component } from "react";

 //1. here getInitialProps using 'class' COMPONENT
// class xyz extends Component {
// 	static async getInitialProps() {
// 		console.log("i am GetinitialProps rendering ...");
// 		return { abc: "abc" };
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h2>Hello i am Index page </h2>
// 			</div>
// 		);
// 	}
// }
//2. here getInitialProps using 'functional' COMPONENT

var xyz = function xyz(_ref) {
  var posts = _ref.posts,
      error = _ref.error;
  console.log("i am Index and i am rendering ...");
  var lis;

  if (!error) {
    lis = posts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/post?id=".concat(post.id),
          as: "/p/".concat(id),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
            children: post.title
          })
        })
      }, post.id);
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
      children: "Hello i am Index page "
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", {
      children: !error ? lis : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
        children: error
      })
    })]
  });
};

xyz.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://jsonplaceholder.typicode.com/posts");

        case 3:
          res = _context.sent;
          data = res.data;
          return _context.abrupt("return", {
            posts: data
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            error: "not found !"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 8]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (xyz);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsieHl6IiwicG9zdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsaXMiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQSxNQUFJQyxHQUFKOztBQUNBLE1BQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1hHLE9BQUcsR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNmO0FBQUEsK0JBQ0MsOERBQUMsZ0RBQUQ7QUFBTSxjQUFJLHFCQUFjQSxJQUFJLENBQUNDLEVBQW5CLENBQVY7QUFBbUMsWUFBRSxlQUFRQSxFQUFSLENBQXJDO0FBQUEsaUNBQ0M7QUFBQSxzQkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBREQ7QUFERCxTQUFTRixJQUFJLENBQUNDLEVBQWQsQ0FEZTtBQUFBLEtBQVYsQ0FBTjtBQU9BOztBQUVELHNCQUNDO0FBQUEsNEJBRUM7QUFBQTtBQUFBLE1BRkQsZUFJQztBQUFBLGdCQUFLLENBQUNOLEtBQUQsR0FBU0csR0FBVCxnQkFBZTtBQUFBLGtCQUFLSDtBQUFMO0FBQXBCLE1BSkQ7QUFBQSxJQUREO0FBUUEsQ0FyQkQ7O0FBdUJBRixHQUFHLENBQUNVLGVBQUosaU1BQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFSkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDRDQUFWLENBRkk7O0FBQUE7QUFFaEJDLGFBRmdCO0FBR1pDLGNBSFksR0FHSEQsR0FIRyxDQUdaQyxJQUhZO0FBQUEsMkNBS2I7QUFBRWIsaUJBQUssRUFBRWE7QUFBVCxXQUxhOztBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQVFiO0FBQUVaLGlCQUFLLEVBQUU7QUFBVCxXQVJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRCO0FBWWVGLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0MjA1ZDQ0NTg5MjUyMmEwYjlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLzEuIGhlcmUgZ2V0SW5pdGlhbFByb3BzIHVzaW5nICdjbGFzcycgQ09NUE9ORU5UXHJcblxyXG4vLyBjbGFzcyB4eXogZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyBcdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhcImkgYW0gR2V0aW5pdGlhbFByb3BzIHJlbmRlcmluZyAuLi5cIik7XHJcbi8vIFx0XHRyZXR1cm4geyBhYmM6IFwiYWJjXCIgfTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdHJlbmRlcigpIHtcclxuLy8gXHRcdHJldHVybiAoXHJcbi8vIFx0XHRcdDxkaXY+XHJcbi8vIFx0XHRcdFx0PGgyPkhlbGxvIGkgYW0gSW5kZXggcGFnZSA8L2gyPlxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLzIuIGhlcmUgZ2V0SW5pdGlhbFByb3BzIHVzaW5nICdmdW5jdGlvbmFsJyBDT01QT05FTlRcclxuXHJcbmNvbnN0IHh5eiA9ICh7IHBvc3RzLCBlcnJvciB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2coXCJpIGFtIEluZGV4IGFuZCBpIGFtIHJlbmRlcmluZyAuLi5cIik7XHJcblx0bGV0IGxpcztcclxuXHRpZiAoIWVycm9yKSB7XHJcblx0XHRsaXMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuXHRcdFx0PGxpIGtleT17cG9zdC5pZH0+XHJcblx0XHRcdFx0PExpbmsgaHJlZj17YC9wb3N0P2lkPSR7cG9zdC5pZH1gfSBhcz17YC9wLyR7aWR9YH0+XHJcblx0XHRcdFx0XHQ8YT57cG9zdC50aXRsZX08L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0ey8qIDxOYXZiYXIgLz4gKi99XHJcblx0XHRcdDxoMj5IZWxsbyBpIGFtIEluZGV4IHBhZ2UgPC9oMj5cclxuXHJcblx0XHRcdDx1bD57IWVycm9yID8gbGlzIDogPGxpPntlcnJvcn08L2xpPn08L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbnh5ei5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IHJlcztcclxuXHJcblx0XHRyZXR1cm4geyBwb3N0czogZGF0YSB9O1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZXJyKTtcclxuXHRcdHJldHVybiB7IGVycm9yOiBcIm5vdCBmb3VuZCAhXCIgfTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB4eXo7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=