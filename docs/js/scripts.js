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

var elements = document.querySelectorAll('section');
var page = null;

function init() {
  var winWidth = window.innerWidth;

  if (winWidth > 1280) {
    elements.forEach(function (el) {
      el.classList.remove('!translate-y-0');
    });
    page = new _one_page_scroll_master_one_page_scroll_esm__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: elements
    });
    document.body.removeAttribute('style');
  } else {
    page = null;
    elements.forEach(function (el) {
      el.classList.remove('one-page-scroll--page');
      el.classList.add('!translate-y-0');
      el.removeAttribute('style');
    });
    document.body.style.overflow = 'auto';
  }
}

init();
window.addEventListener('resize', function (event) {
  init();
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

    if (!el || !el.length) {
      // throw new Error('el is undefined');
      return;
    }

    _init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvanMvb25lLXBhZ2Utc2Nyb2xsLW1hc3Rlci9vbmUtcGFnZS1zY3JvbGwuZXNtLmpzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsID0+IHtcclxuLy8gXHRjb25zdCBkYXRhc2V0ID0gZWwuZGF0YXNldFxyXG4vLyBcdGlmKGRhdGFzZXQuZHVyYXRpb24pe1xyXG4vLyBcdFx0ZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZGF0YXNldC5kdXJhdGlvbisnbXMnXHJcbi8vIFx0fVxyXG4vLyB9KVxyXG5cclxuaW1wb3J0IG9uZVBhZ2VTY3JvbGwgZnJvbSAnLi9vbmUtcGFnZS1zY3JvbGwtbWFzdGVyL29uZS1wYWdlLXNjcm9sbC5lc20nXHJcblxyXG52YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XHJcbmxldCBwYWdlID0gbnVsbDtcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRjb25zdCB3aW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdGlmKHdpbldpZHRoID4gMTI4MCl7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnIXRyYW5zbGF0ZS15LTAnKVxyXG5cdFx0fSlcclxuXHRcdHBhZ2UgPSBuZXcgb25lUGFnZVNjcm9sbCh7XHJcblx0XHRcdGVsOiBlbGVtZW50c1xyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG5cdH1lbHNle1xyXG5cdFx0cGFnZSA9IG51bGw7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnb25lLXBhZ2Utc2Nyb2xsLS1wYWdlJylcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnIXRyYW5zbGF0ZS15LTAnKVxyXG5cdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0bydcclxuXHR9XHJcbn1cclxuXHJcbmluaXQoKVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcclxuXHRpbml0KClcclxufSkiLCIvKiFcbiogb25lLXBhZ2Utc2Nyb2xsIDAuMi41XG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9odWlodWltb2Uvb25lLXBhZ2Utc2Nyb2xsXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKi9cbmNvbnN0IHNpbXBsZVRocm90dGxpbmcgPSAoY2FsbGJhY2ssIHRpbWUpID0+IHtcbiAgICBsZXQgY2FsbGVkVGltZSA9IDA7XG4gICAgcmV0dXJuIG4gPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoY2FsbGVkVGltZSArIHRpbWUgPCBub3cpIHtcbiAgICAgICAgICAgIGNhbGxlZFRpbWUgPSBub3c7XG4gICAgICAgICAgICBjYWxsYmFjayhuKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xubGV0IGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSBgYm9keXtvdmVyZmxvdzogaGlkZGVufS5vbmUtcGFnZS1zY3JvbGwtLXBhZ2V7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO292ZXJmbG93OiBoaWRkZW47dG91Y2gtYWN0aW9uOiBub25lO3Bvc2l0aW9uOiBhYnNvbHV0ZX1gO1xuICAgIGNvbnN0IGNzcyA9IG5ldyBCbG9iKFtzdHlsZV0sIHsgdHlwZTogJ3RleHQvY3NzJyB9KTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChjc3MpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgfTtcbn07XG5jbGFzcyBvbmVQYWdlU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3Rvcih7ZWwsIHRpbWUgPSA2MDAsIGVhc2luZyA9ICdlYXNlLW91dCcsIGxvb3AgPSBmYWxzZSwgdGhyb3R0bGluZ30gPSB7fSkge1xuXHRcdFx0aWYgKCFlbCB8fCAhZWwubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHRocm93IG5ldyBFcnJvcignZWwgaXMgdW5kZWZpbmVkJyk7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0aW5pdCgpO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmVhc2luZyA9IGVhc2luZztcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5wYWdlVG90YWwgPSBlbC5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gMTtcbiAgICAgICAgdGhyb3R0bGluZyA9IHRocm90dGxpbmcgfHwgdGltZTtcbiAgICAgICAgdGhpcy5fZWwgPSBbXS5zbGljZS5jYWxsKGVsKTtcbiAgICAgICAgdGhpcy5fZWwuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihpbmRleCA9PSAwKXtcblx0XHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvbmUtcGFnZS1zY3JvbGwtLXBhZ2UnKTtcbiAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7IGluZGV4ICogMTAwIH0lKWA7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLl9oYXNoID0gdGhpcy5fZWwubWFwKChlbCwgaSkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgaSArIDEpO1xuICAgICAgICAvLyBjb25zdCBmaW5kSGFzaCA9ICgpID0+IGxvY2F0aW9uLmhhc2ggPT09ICcnID8gMSA6IHRoaXMuX2hhc2guZmluZEluZGV4KChoYXNoLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoW1xuICAgICAgICAvLyAgICAgICAgICAgICAnIycgKyBoYXNoLFxuICAgICAgICAvLyAgICAgICAgICAgICAnIycgKyAoaSArIDEpXG4gICAgICAgIC8vICAgICAgICAgXS5pbmNsdWRlcyhsb2NhdGlvbi5oYXNoKSkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KSArIDE7XG4gICAgICAgIC8vIHRoaXMuZ290byhmaW5kSGFzaCgpKTtcbiAgICAgICAgY29uc3Qgd3JhcEdvdG8gPSBuID0+IHRoaXMuZ290byhuKTtcbiAgICAgICAgdGhpcy5fZ290byA9IHRocm90dGxpbmcgPyBzaW1wbGVUaHJvdHRsaW5nKHdyYXBHb3RvLCB0aHJvdHRsaW5nKSA6IHdyYXBHb3RvO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc2hJbmRleCA9IGZpbmRIYXNoKCk7XG4gICAgICAgICAgICBpZiAoaGFzaEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb3RvKGhhc2hJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBbXG4gICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICAnbW91c2V3aGVlbCcsXG4gICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnLFxuICAgICAgICAgICAgJ3RvdWNoc3RhcnQnXG4gICAgICAgIF0ubWFwKGUgPT4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLCB0aGlzKSk7XG4gICAgfVxuICAgIGdvdG8obikge1xuICAgICAgICBpZiAobiA+IHRoaXMucGFnZVRvdGFsIHx8IG4gPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmxvb3AgPyBuID0gMSA6IG4gPSB0aGlzLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiAhPT0gdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWwuc3R5bGU7XG5cdFx0XHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAkeyB0aGlzLnRpbWUgfW1zICR7IHRoaXMuZWFzaW5nIH1gO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7IChpbmRleCAtIG4gKyAxKSAqIDEwMCB9JSlgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9lbFt0aGlzLmFjdGl2ZSAtIDFdLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvdXR2aWV3JykpO1xuICAgICAgICAgICAgdGhpcy5fZWxbbiAtIDFdLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbnZpZXcnKSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IG47XG4gICAgICAgICAgICAvLyAhYXJndW1lbnRzWzFdICYmIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgJyMnICsgdGhpcy5faGFzaFtuIC0gMV0pO1xuICAgICAgICB9XG5cdFx0XHRcdHRoaXMuX2VsW24tMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdvdG8odGhpcy5hY3RpdmUgKyAxKTtcbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290byh0aGlzLmFjdGl2ZSAtIDEpO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChlKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSArIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMucGFnZVRvdGFsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VXaGVlbCA9IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZS53aGVlbERlbHRhIHx8IC1lLmRldGFpbCkpO1xuICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZS50b3VjaGVzO1xuICAgICAgICAgICAgaWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90b3VjaFN0YXJ0WSA9IHRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGUudG91Y2hlcztcbiAgICAgICAgICAgIGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHRoaXMuX3RvdWNoU3RhcnRZIC0gdG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFZID49IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWSA8PSAtNTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+PSA1MCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2tleWRvd24nOlxuICAgICAgICAgICAgaGFuZGxlS2V5RG93bihlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZXdoZWVsJzpcbiAgICAgICAgY2FzZSAnRE9NTW91c2VTY3JvbGwnOlxuICAgICAgICAgICAgaGFuZGxlTW91c2VXaGVlbChlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b3VjaHN0YXJ0JzpcbiAgICAgICAgICAgIGhhbmRsZVRvdWNoU3RhcnQoZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgICAgIGhhbmRsZVRvdWNoTW92ZShlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb25lUGFnZVNjcm9sbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9kb2NzL2pzL3NjcmlwdHNcIjogMCxcblx0XCJkb2NzL2Nzcy9zdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX2xhcmF2ZWxfbWl4XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZG9jcy9jc3Mvc3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3NzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsib25lUGFnZVNjcm9sbCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFnZSIsImluaXQiLCJ3aW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJib2R5IiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkIiwic3R5bGUiLCJvdmVyZmxvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNpbXBsZVRocm90dGxpbmciLCJjYWxsYmFjayIsInRpbWUiLCJjYWxsZWRUaW1lIiwibiIsIm5vdyIsIkRhdGUiLCJjc3MiLCJCbG9iIiwidHlwZSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZWFzaW5nIiwibG9vcCIsInRocm90dGxpbmciLCJsZW5ndGgiLCJwYWdlVG90YWwiLCJhY3RpdmUiLCJfZWwiLCJzbGljZSIsImNhbGwiLCJpbmRleCIsInRyYW5zZm9ybSIsIndyYXBHb3RvIiwiX2dvdG8iLCJlIiwiaGFzaEluZGV4IiwiZmluZEhhc2giLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVNb3VzZVdoZWVsIiwiZGVsdGEiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsImRldGFpbCIsImhhbmRsZVRvdWNoU3RhcnQiLCJ0b3VjaGVzIiwiX3RvdWNoU3RhcnRZIiwicGFnZVkiLCJoYW5kbGVUb3VjaE1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhWSIsImFicyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9