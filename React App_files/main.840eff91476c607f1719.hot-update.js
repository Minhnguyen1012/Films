webpackHotUpdate("main",{

/***/ "./src/pages/NowPlayingPage.js":
/*!*************************************!*\
  !*** ./src/pages/NowPlayingPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componens_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componens/Cards */ "./src/componens/Cards.js");
/* harmony import */ var _componens_Carousels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componens/Carousels */ "./src/componens/Carousels.js");
/* harmony import */ var _componens_PaginationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componens/PaginationBar */ "./src/componens/PaginationBar.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apiService */ "./src/apiService.js");
/* harmony import */ var _componens_PublicNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componens/PublicNavbar */ "./src/componens/PublicNavbar.js");
/* harmony import */ var _componens_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componens/Footer */ "./src/componens/Footer.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/thienminh/Documents/coderschool/films/src/pages/NowPlayingPage.js",
    _s = __webpack_require__.$Refresh$.signature();








const apikey = "8bb27996f17866f8d8aa2ee7f2bb50aa";

const NowPlayingPage = () => {
  _s();

  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [searchInput, setSearchInput] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [pageNum, setPageNum] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const [totalPageNum, setTotalPageNum] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [movieList, setMovieList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const handleSearchChange = value => {
    setSearchInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(searchInput);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (query) return;

    const fetchData = async () => {
      try {
        let url = `movie/now_playing?api_key=${apikey}&language=en-US&page=${pageNum}`; // if (query) url += `&query=${query}`;

        const res = await _apiService__WEBPACK_IMPORTED_MODULE_5__["default"].get(url);
        setMovieList(res.data.results);
        setTotalPageNum(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNum, query]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!query) return;
    console.log("Searching");

    const fetchData = async () => {
      try {
        let url = `search/movie?api_key=${apikey}&language=en-US&page=${pageNum}&query=${query}`;
        const res = await _apiService__WEBPACK_IMPORTED_MODULE_5__["default"].get(url);
        setMovieList(res.data.results);
        setTotalPageNum(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNum, query]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componens_PublicNavbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      loading: loading,
      searchInput: searchInput,
      handleSearchChange: handleSearchChange,
      handleSubmit: handleSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componens_Carousels__WEBPACK_IMPORTED_MODULE_3__["default"], {
      movies: movieList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componens_Cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movies: movieList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componens_PaginationBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageNum: pageNum,
      setPageNum: setPageNum,
      totalPageNum: totalPageNum
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componens_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

_s(NowPlayingPage, "yJiq5+gbyV/aZYUCN14OVORRQMs=");

_c = NowPlayingPage;
/* harmony default export */ __webpack_exports__["default"] = (NowPlayingPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "NowPlayingPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.840eff91476c607f1719.hot-update.js.map