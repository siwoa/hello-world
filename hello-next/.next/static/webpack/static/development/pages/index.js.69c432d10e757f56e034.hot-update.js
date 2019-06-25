webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./core/api.js":
/*!*********************!*\
  !*** ./core/api.js ***!
  \*********************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./core/fetch.js");

var api = 'https://11140b99.cpolar.io/';
var login = function login() {
  Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(api + '/users/login').then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);
  });
};

/***/ }),

/***/ "./core/fetch.js":
/*!***********************!*\
  !*** ./core/fetch.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
imporequire('isomorphic-fetch');
var fetch = fetch(url, {
  // url: 请求地址
  method: "POST",
  // 请求的方法POST/GET等
  headers: {
    // 请求头（可以是Headers对象，也可是JSON对象）
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  // body: , // 请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get或head方法中不能包含body）
  cache: 'default',
  // 是否缓存这个请求
  credentials: 'same-origin',
  //要不要携带 cookie 默认不携带 omit、same-origin 或者 include
  mode: ""
  /*  
      mode,给请求定义一个模式确保请求有效
      same-origin:只在请求同域中资源时成功，其他请求将被拒绝（同源策略）
      cors : 允许请求同域及返回CORS响应头的域中的资源，通常用作跨域请求来从第三方提供的API获取数据
      cors-with-forced-preflight:在发出实际请求前执行preflight检查
      no-cors : 目前不起作用（默认）
    */

}).then(function (resp) {
  /*
      Response 实现了 Body, 可以使用 Body 的 属性和方法:
        resp.type // 包含Response的类型 (例如, basic, cors).
        resp.url // 包含Response的URL.
        resp.status // 状态码
        resp.ok // 表示 Response 的成功还是失败
        resp.headers // 包含此Response所关联的 Headers 对象 可以使用
        resp.clone() // 创建一个Response对象的克隆
        resp.arrayBuffer() // 返回一个被解析为 ArrayBuffer 格式的promise对象
        resp.blob() // 返回一个被解析为 Blob 格式的promise对象
        resp.formData() // 返回一个被解析为 FormData 格式的promise对象
        resp.json() // 返回一个被解析为 Json 格式的promise对象
        resp.text() // 返回一个被解析为 Text 格式的promise对象
  */
  if (resp.status === 200) return resp.json(); // 注： 这里的 resp.json() 返回值不是 js对象，通过 then 后才会得到 js 对象
  // throw New Error('false of json');
}).then(function (json) {
  console.log(json);
}).catch(function (error) {
  consolr.log(error);
});
/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),

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
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/api */ "./core/api.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);







 // import Markdown from 'react-markdown';

var List = function List(_ref) {
  var show = _ref.show;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    as: "/p/".concat(show.id),
    href: "/post?id=".concat(show.id)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, show.name)));
};

function aa() {
  Object(_core_api__WEBPACK_IMPORTED_MODULE_6__["login"])({
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
  }, "h1{color:red;}li{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1EsQUFHK0IsQUFHTSxVQUZwQixNQUdBIiwiZmlsZSI6IkQ6XFx2dWUtcHJvamVjdFxcaGVsbG8td29ybGRcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7bG9naW59IGZyb20gXCIuLi9jb3JlL2FwaVwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbi8vIGltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmNvbnN0IExpc3QgPSAoeyBzaG93IH0pID0+IChcclxuICA8bGk+XHJcbiAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxyXG4gICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2xpPlxyXG4pXHJcbmZ1bmN0aW9uIGFhKCkge1xyXG4gIGxvZ2luKHtcclxuICAgIGxvZ2luTmFtZTogXCIxNTcwMTU3MTA3NlwiLFxyXG4gICAgcGFzc1dvcmQ6IFwiMTIzNDVxXCJcclxuICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gIH0pXHJcbn1cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcblxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDEgb25DbGljaz17YWF9PkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXHJcbiAgICAgICAgPExpc3Qga2V5PXtzaG93LmlkfSBzaG93PXtzaG93fT48L0xpc3Q+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7XHJcbiAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=D:\\vue-project\\hello-world\\hello-next\\pages\\index.js */"));
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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://api.tvmaze.com/search/shows?q=batman');

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
//# sourceMappingURL=index.js.69c432d10e757f56e034.hot-update.js.map