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
          as: "/p/".concat(post.id),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsieHl6IiwicG9zdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsaXMiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQSxNQUFJQyxHQUFKOztBQUNBLE1BQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1hHLE9BQUcsR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNmO0FBQUEsK0JBQ0MsOERBQUMsZ0RBQUQ7QUFBTSxjQUFJLHFCQUFjQSxJQUFJLENBQUNDLEVBQW5CLENBQVY7QUFBbUMsWUFBRSxlQUFRRCxJQUFJLENBQUNDLEVBQWIsQ0FBckM7QUFBQSxpQ0FDQztBQUFBLHNCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFERDtBQURELFNBQVNGLElBQUksQ0FBQ0MsRUFBZCxDQURlO0FBQUEsS0FBVixDQUFOO0FBT0E7O0FBRUQsc0JBQ0M7QUFBQSw0QkFFQztBQUFBO0FBQUEsTUFGRCxlQUlDO0FBQUEsZ0JBQUssQ0FBQ04sS0FBRCxHQUFTRyxHQUFULGdCQUFlO0FBQUEsa0JBQUtIO0FBQUw7QUFBcEIsTUFKRDtBQUFBLElBREQ7QUFRQSxDQXJCRDs7QUF1QkFGLEdBQUcsQ0FBQ1UsZUFBSixpTUFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVKQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsQ0FGSTs7QUFBQTtBQUVoQkMsYUFGZ0I7QUFHWkMsY0FIWSxHQUdIRCxHQUhHLENBR1pDLElBSFk7QUFBQSwyQ0FLYjtBQUFFYixpQkFBSyxFQUFFYTtBQUFULFdBTGE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBUWI7QUFBRVosaUJBQUssRUFBRTtBQUFULFdBUmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdEI7QUFZZUYsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI1NWE4ZDUwM2Y4YmY1YzJkMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICBpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vMS4gaGVyZSBnZXRJbml0aWFsUHJvcHMgdXNpbmcgJ2NsYXNzJyBDT01QT05FTlRcclxuXHJcbi8vIGNsYXNzIHh5eiBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vIFx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwiaSBhbSBHZXRpbml0aWFsUHJvcHMgcmVuZGVyaW5nIC4uLlwiKTtcclxuLy8gXHRcdHJldHVybiB7IGFiYzogXCJhYmNcIiB9O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0cmVuZGVyKCkge1xyXG4vLyBcdFx0cmV0dXJuIChcclxuLy8gXHRcdFx0PGRpdj5cclxuLy8gXHRcdFx0XHQ8aDI+SGVsbG8gaSBhbSBJbmRleCBwYWdlIDwvaDI+XHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0KTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vMi4gaGVyZSBnZXRJbml0aWFsUHJvcHMgdXNpbmcgJ2Z1bmN0aW9uYWwnIENPTVBPTkVOVFxyXG5cclxuY29uc3QgeHl6ID0gKHsgcG9zdHMsIGVycm9yIH0pID0+IHtcclxuXHRjb25zb2xlLmxvZyhcImkgYW0gSW5kZXggYW5kIGkgYW0gcmVuZGVyaW5nIC4uLlwiKTtcclxuXHRsZXQgbGlzO1xyXG5cdGlmICghZXJyb3IpIHtcclxuXHRcdGxpcyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG5cdFx0XHQ8bGkga2V5PXtwb3N0LmlkfT5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3Q/aWQ9JHtwb3N0LmlkfWB9IGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG5cdFx0XHRcdFx0PGE+e3Bvc3QudGl0bGV9PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9saT5cclxuXHRcdCkpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHsvKiA8TmF2YmFyIC8+ICovfVxyXG5cdFx0XHQ8aDI+SGVsbG8gaSBhbSBJbmRleCBwYWdlIDwvaDI+XHJcblxyXG5cdFx0XHQ8dWw+eyFlcnJvciA/IGxpcyA6IDxsaT57ZXJyb3J9PC9saT59PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG54eXouZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSByZXM7XHJcblxyXG5cdFx0cmV0dXJuIHsgcG9zdHM6IGRhdGEgfTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRyZXR1cm4geyBlcnJvcjogXCJub3QgZm91bmQgIVwiIH07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeHl6O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9