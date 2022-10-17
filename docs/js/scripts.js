/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _one_page_scroll_master_one_page_scroll_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-page-scroll-master/one-page-scroll.esm */ "./src/js/one-page-scroll-master/one-page-scroll.esm.js");
// document.querySelectorAll('*').forEach(el => {
// 	const dataset = el.dataset
// 	if(dataset.duration){
// 		el.style.transitionDuration = dataset.duration+'ms'
// 	}
// })

var el = document.querySelectorAll('section');
var app = new _one_page_scroll_master_one_page_scroll_esm__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: el
});

/***/ }),

/***/ "./src/js/one-page-scroll-master/one-page-scroll.esm.js":
/*!**************************************************************!*\
  !*** ./src/js/one-page-scroll-master/one-page-scroll.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
* one-page-scroll 0.2.5
* https://github.com/huihuimoe/one-page-scroll
* Released under the MIT license
*/
var simpleThrottling = function simpleThrottling(callback, time) {
  var calledTime = 0;
  return function (n) {
    var now = Date.now();

    if (calledTime + time < now) {
      calledTime = now;
      callback(n);
    }
  };
};

var _init = function init() {
  var style = "body{overflow: hidden}.one-page-scroll--page{width: 100%;height: 100%;overflow: hidden;touch-action: none;position: absolute}";
  var css = new Blob([style], {
    type: 'text/css'
  });
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', URL.createObjectURL(css));
  document.head.appendChild(link);

  _init = function init() {};
};

var onePageScroll = /*#__PURE__*/function () {
  function onePageScroll() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        el = _ref.el,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? 600 : _ref$time,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? 'ease-out' : _ref$easing,
        _ref$loop = _ref.loop,
        loop = _ref$loop === void 0 ? false : _ref$loop,
        throttling = _ref.throttling;

    _classCallCheck(this, onePageScroll);

    _init();

    if (!el || !el.length) {
      throw new Error('el is undefined');
    }

    this.time = time;
    this.easing = easing;
    this.loop = loop;
    this.pageTotal = el.length;
    this.active = 1;
    throttling = throttling || time;
    this._el = [].slice.call(el);

    this._el.forEach(function (el, index) {
      if (index == 0) {
        el.classList.add('active');
      }

      el.classList.add('one-page-scroll--page');
      el.style.transform = "translateY(".concat(index * 100, "%)");
    }); // this._hash = this._el.map((el, i) => el.getAttribute('name') || i + 1);
    // const findHash = () => location.hash === '' ? 1 : this._hash.findIndex((hash, i) => {
    //     if ([
    //             '#' + hash,
    //             '#' + (i + 1)
    //         ].includes(location.hash)) {
    //         return true;
    //     }
    // }) + 1;
    // this.goto(findHash());


    var wrapGoto = function wrapGoto(n) {
      return _this["goto"](n);
    };

    this._goto = throttling ? simpleThrottling(wrapGoto, throttling) : wrapGoto;
    window.addEventListener('popstate', function (e) {
      var hashIndex = findHash();

      if (hashIndex) {
        _this["goto"](hashIndex, true);
      }
    });
    ['keydown', 'mousewheel', 'DOMMouseScroll', 'touchstart'].map(function (e) {
      return document.addEventListener(e, _this);
    });
  }

  _createClass(onePageScroll, [{
    key: "goto",
    value: function goto(n) {
      var _this2 = this;

      if (n > this.pageTotal || n < 1) {
        this.loop ? n = 1 : n = this.active;
      }

      if (n !== this.active) {
        this._el.forEach(function (el, index) {
          var style = el.style;
          el.classList.remove('active');
          style.transition = "transform ".concat(_this2.time, "ms ").concat(_this2.easing);
          style.transform = "translateY(".concat((index - n + 1) * 100, "%)");
        });

        this._el[this.active - 1].dispatchEvent(new CustomEvent('outview'));

        this._el[n - 1].dispatchEvent(new CustomEvent('inview'));

        this.active = n; // !arguments[1] && history.replaceState({}, '', '#' + this._hash[n - 1]);
      }

      this._el[n - 1].classList.add('active');

      return this;
    }
  }, {
    key: "next",
    value: function next() {
      return this["goto"](this.active + 1);
    }
  }, {
    key: "prev",
    value: function prev() {
      return this["goto"](this.active - 1);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      var _this3 = this;

      var handleKeyDown = function handleKeyDown(e) {
        switch (e.keyCode) {
          case 33:
          case 38:
            _this3._goto(_this3.active - 1);

            break;

          case 32:
          case 34:
          case 40:
            _this3._goto(_this3.active + 1);

            break;

          case 36:
            _this3._goto(1);

            break;

          case 35:
            _this3._goto(_this3.pageTotal);

            break;
        }
      };

      var handleMouseWheel = function handleMouseWheel(e) {
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

        if (delta < 0) {
          _this3._goto(_this3.active + 1);
        } else {
          _this3._goto(_this3.active - 1);
        }
      };

      var handleTouchStart = function handleTouchStart(e) {
        var touches = e.touches;

        if (touches && touches.length) {
          _this3._touchStartY = touches[0].pageY;
          document.addEventListener('touchmove', _this3);
        }
      };

      var handleTouchMove = function handleTouchMove(e) {
        var touches = e.touches;

        if (touches && touches.length) {
          e.preventDefault();
          var deltaY = _this3._touchStartY - touches[0].pageY;

          if (deltaY >= 50) {
            _this3._goto(_this3.active + 1);
          }

          if (deltaY <= -50) {
            _this3._goto(_this3.active - 1);
          }

          if (Math.abs(deltaY) >= 50) {
            document.removeEventListener('touchmove', _this3);
          }
        }
      };

      switch (e.type) {
        case 'keydown':
          handleKeyDown(e);
          break;

        case 'mousewheel':
        case 'DOMMouseScroll':
          handleMouseWheel(e);
          break;

        case 'touchstart':
          handleTouchStart(e);
          break;

        case 'touchmove':
          handleTouchMove(e);
      }
    }
  }]);

  return onePageScroll;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onePageScroll);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/js/scripts": 0,
/******/ 			"docs/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstarter_laravel_mix"] = self["webpackChunkstarter_laravel_mix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/css/styles"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/css/styles"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC8uL3NyYy9qcy9vbmUtcGFnZS1zY3JvbGwtbWFzdGVyL29uZS1wYWdlLXNjcm9sbC5lc20uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC8uL3NyYy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWwgPT4ge1xyXG4vLyBcdGNvbnN0IGRhdGFzZXQgPSBlbC5kYXRhc2V0XHJcbi8vIFx0aWYoZGF0YXNldC5kdXJhdGlvbil7XHJcbi8vIFx0XHRlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkYXRhc2V0LmR1cmF0aW9uKydtcydcclxuLy8gXHR9XHJcbi8vIH0pXHJcblxyXG5pbXBvcnQgb25lUGFnZVNjcm9sbCBmcm9tICcuL29uZS1wYWdlLXNjcm9sbC1tYXN0ZXIvb25lLXBhZ2Utc2Nyb2xsLmVzbSdcclxuXHJcbnZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxudmFyIGFwcCA9IG5ldyBvbmVQYWdlU2Nyb2xsKHtcclxuXHRlbDogZWxcclxufSk7IiwiLyohXG4qIG9uZS1wYWdlLXNjcm9sbCAwLjIuNVxuKiBodHRwczovL2dpdGh1Yi5jb20vaHVpaHVpbW9lL29uZS1wYWdlLXNjcm9sbFxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiovXG5jb25zdCBzaW1wbGVUaHJvdHRsaW5nID0gKGNhbGxiYWNrLCB0aW1lKSA9PiB7XG4gICAgbGV0IGNhbGxlZFRpbWUgPSAwO1xuICAgIHJldHVybiBuID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGNhbGxlZFRpbWUgKyB0aW1lIDwgbm93KSB7XG4gICAgICAgICAgICBjYWxsZWRUaW1lID0gbm93O1xuICAgICAgICAgICAgY2FsbGJhY2sobik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmxldCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gYGJvZHl7b3ZlcmZsb3c6IGhpZGRlbn0ub25lLXBhZ2Utc2Nyb2xsLS1wYWdle3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtvdmVyZmxvdzogaGlkZGVuO3RvdWNoLWFjdGlvbjogbm9uZTtwb3NpdGlvbjogYWJzb2x1dGV9YDtcbiAgICBjb25zdCBjc3MgPSBuZXcgQmxvYihbc3R5bGVdLCB7IHR5cGU6ICd0ZXh0L2NzcycgfSk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoY3NzKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgIH07XG59O1xuY2xhc3Mgb25lUGFnZVNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Ioe2VsLCB0aW1lID0gNjAwLCBlYXNpbmcgPSAnZWFzZS1vdXQnLCBsb29wID0gZmFsc2UsIHRocm90dGxpbmd9ID0ge30pIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBpZiAoIWVsIHx8ICFlbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZWwgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMucGFnZVRvdGFsID0gZWwubGVuZ3RoO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IDE7XG4gICAgICAgIHRocm90dGxpbmcgPSB0aHJvdHRsaW5nIHx8IHRpbWU7XG4gICAgICAgIHRoaXMuX2VsID0gW10uc2xpY2UuY2FsbChlbCk7XG4gICAgICAgIHRoaXMuX2VsLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoaW5kZXggPT0gMCl7XG5cdFx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnb25lLXBhZ2Utc2Nyb2xsLS1wYWdlJyk7XG4gICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkeyBpbmRleCAqIDEwMCB9JSlgO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5faGFzaCA9IHRoaXMuX2VsLm1hcCgoZWwsIGkpID0+IGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8IGkgKyAxKTtcbiAgICAgICAgLy8gY29uc3QgZmluZEhhc2ggPSAoKSA9PiBsb2NhdGlvbi5oYXNoID09PSAnJyA/IDEgOiB0aGlzLl9oYXNoLmZpbmRJbmRleCgoaGFzaCwgaSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKFtcbiAgICAgICAgLy8gICAgICAgICAgICAgJyMnICsgaGFzaCxcbiAgICAgICAgLy8gICAgICAgICAgICAgJyMnICsgKGkgKyAxKVxuICAgICAgICAvLyAgICAgICAgIF0uaW5jbHVkZXMobG9jYXRpb24uaGFzaCkpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSkgKyAxO1xuICAgICAgICAvLyB0aGlzLmdvdG8oZmluZEhhc2goKSk7XG4gICAgICAgIGNvbnN0IHdyYXBHb3RvID0gbiA9PiB0aGlzLmdvdG8obik7XG4gICAgICAgIHRoaXMuX2dvdG8gPSB0aHJvdHRsaW5nID8gc2ltcGxlVGhyb3R0bGluZyh3cmFwR290bywgdGhyb3R0bGluZykgOiB3cmFwR290bztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNoSW5kZXggPSBmaW5kSGFzaCgpO1xuICAgICAgICAgICAgaWYgKGhhc2hJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ290byhoYXNoSW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgJ21vdXNld2hlZWwnLFxuICAgICAgICAgICAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgICAgICAgICAgICd0b3VjaHN0YXJ0J1xuICAgICAgICBdLm1hcChlID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZSwgdGhpcykpO1xuICAgIH1cbiAgICBnb3RvKG4pIHtcbiAgICAgICAgaWYgKG4gPiB0aGlzLnBhZ2VUb3RhbCB8fCBuIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5sb29wID8gbiA9IDEgOiBuID0gdGhpcy5hY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHsgdGhpcy50aW1lIH1tcyAkeyB0aGlzLmVhc2luZyB9YDtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkeyAoaW5kZXggLSBuICsgMSkgKiAxMDAgfSUpYDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZWxbdGhpcy5hY3RpdmUgLSAxXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3V0dmlldycpKTtcbiAgICAgICAgICAgIHRoaXMuX2VsW24gLSAxXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW52aWV3JykpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBuO1xuICAgICAgICAgICAgLy8gIWFyZ3VtZW50c1sxXSAmJiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsICcjJyArIHRoaXMuX2hhc2hbbiAtIDFdKTtcbiAgICAgICAgfVxuXHRcdFx0XHR0aGlzLl9lbFtuLTFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgfVxuICAgIHByZXYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgKyAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290bygxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLnBhZ2VUb3RhbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlV2hlZWwgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGUud2hlZWxEZWx0YSB8fCAtZS5kZXRhaWwpKTtcbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGUudG91Y2hlcztcbiAgICAgICAgICAgIGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG91Y2hTdGFydFkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBlLnRvdWNoZXM7XG4gICAgICAgICAgICBpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSB0aGlzLl90b3VjaFN0YXJ0WSAtIHRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWSA+PSA1MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkZWx0YVkgPD0gLTUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlICdrZXlkb3duJzpcbiAgICAgICAgICAgIGhhbmRsZUtleURvd24oZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V3aGVlbCc6XG4gICAgICAgIGNhc2UgJ0RPTU1vdXNlU2Nyb2xsJzpcbiAgICAgICAgICAgIGhhbmRsZU1vdXNlV2hlZWwoZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgICAgICBoYW5kbGVUb3VjaFN0YXJ0KGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgICAgICBoYW5kbGVUb3VjaE1vdmUoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uZVBhZ2VTY3JvbGw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvZG9jcy9qcy9zY3JpcHRzXCI6IDAsXG5cdFwiZG9jcy9jc3Mvc3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfbGFyYXZlbF9taXhcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkb2NzL2Nzcy9zdHlsZXNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Nzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIm9uZVBhZ2VTY3JvbGwiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsInNpbXBsZVRocm90dGxpbmciLCJjYWxsYmFjayIsInRpbWUiLCJjYWxsZWRUaW1lIiwibiIsIm5vdyIsIkRhdGUiLCJpbml0Iiwic3R5bGUiLCJjc3MiLCJCbG9iIiwidHlwZSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZWFzaW5nIiwibG9vcCIsInRocm90dGxpbmciLCJsZW5ndGgiLCJFcnJvciIsInBhZ2VUb3RhbCIsImFjdGl2ZSIsIl9lbCIsInNsaWNlIiwiY2FsbCIsImZvckVhY2giLCJpbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInRyYW5zZm9ybSIsIndyYXBHb3RvIiwiX2dvdG8iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhc2hJbmRleCIsImZpbmRIYXNoIiwibWFwIiwicmVtb3ZlIiwidHJhbnNpdGlvbiIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaGFuZGxlTW91c2VXaGVlbCIsImRlbHRhIiwiTWF0aCIsIm1heCIsIm1pbiIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJoYW5kbGVUb3VjaFN0YXJ0IiwidG91Y2hlcyIsIl90b3VjaFN0YXJ0WSIsInBhZ2VZIiwiaGFuZGxlVG91Y2hNb3ZlIiwicHJldmVudERlZmF1bHQiLCJkZWx0YVkiLCJhYnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==