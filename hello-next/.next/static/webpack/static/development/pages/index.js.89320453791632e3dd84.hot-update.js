webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);






 // import Markdown from 'react-markdown';

var List = function List(_ref) {
  var show = _ref.show;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    as: "/p/".concat(show.id),
    href: "/post?id=".concat(show.id)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, show.name)));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    onCl: true,
    className: "jsx-2998107076"
  }, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-2998107076"
  }, props.shows.map(function (show) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(List, {
      key: show.id,
      show: show
    });
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2998107076"
  }, "h1{color:red;}li{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlksQUFHK0IsQUFHTSxVQUZwQixNQUdBIiwiZmlsZSI6IkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5jb25zdCBMaXN0ID0oe3Nob3d9KSA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbilcclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMSBvbkNsPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXHJcbiAgICAgICAgPExpc3QgIGtleT17c2hvdy5pZH0gc2hvdz17c2hvd30+PC9MaXN0PlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\vue-project\\hello-world\\hello-next\\pages\\index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.89320453791632e3dd84.hot-update.js.map