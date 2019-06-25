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





 // import {login} from "../core/api";

 // import Markdown from 'react-markdown';

var List = function List(_ref) {
  var show = _ref.show;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    as: "/p/".concat(show.id),
    href: "/post?id=".concat(show.id)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, show.name)));
};

function aa() {
  login({
    loginName: "15701571076",
    passWord: "12345q"
  }).then(function (res) {});
}

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    onClick: aa,
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
  }, "h1{color:red;}li{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1EsQUFHK0IsQUFHTSxVQUZwQixNQUdBIiwiZmlsZSI6IkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7bG9naW59IGZyb20gXCIuLi9jb3JlL2FwaVwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbi8vIGltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmNvbnN0IExpc3QgPSAoeyBzaG93IH0pID0+IChcclxuICA8bGk+XHJcbiAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxyXG4gICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2xpPlxyXG4pXHJcbmZ1bmN0aW9uIGFhKCkge1xyXG4gIGxvZ2luKHtcclxuICAgIGxvZ2luTmFtZTogXCIxNTcwMTU3MTA3NlwiLFxyXG4gICAgcGFzc1dvcmQ6IFwiMTIzNDVxXCJcclxuICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gIH0pXHJcbn1cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcblxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDEgb25DbGljaz17YWF9PkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXHJcbiAgICAgICAgPExpc3Qga2V5PXtzaG93LmlkfSBzaG93PXtzaG93fT48L0xpc3Q+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7XHJcbiAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=D:\\vue-project\\hello-world\\hello-next\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.5817111109cd8133b7b0.hot-update.js.map