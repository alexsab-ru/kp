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
var scrollpos = window.scrollY;
var header = document.querySelector("header");
var scrollChange = 1;

var add_class_on_scroll = function add_class_on_scroll() {
  return header.classList.add('bg-dark', 'shadow-blue', 'shadow-lg');
};

var remove_class_on_scroll = function remove_class_on_scroll() {
  return header.classList.remove('bg-dark', 'shadow-blue', 'shadow-lg');
};

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

var elements = document.querySelectorAll('section');
var page = null;

function init() {
  var winWidth = window.innerWidth;

  if (winWidth > 1280) {
    elements.forEach(function (el) {
      el.classList.remove('!translate-y-0');
    });
    page = new _one_page_scroll_master_one_page_scroll_esm__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: elements,
      throttling: 1000
    });
    document.body.removeAttribute('style');
  } else {
    page = null;
    elements.forEach(function (el) {
      el.classList.remove('one-page-scroll--page');
      el.classList.add('!translate-y-0');
      el.classList.add('active');
      el.removeAttribute('style');
    });
    document.body.style.overflow = 'auto';
  }
} //init()


window.addEventListener('resize', function (event) {//init()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL2pzL29uZS1wYWdlLXNjcm9sbC1tYXN0ZXIvb25lLXBhZ2Utc2Nyb2xsLmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL3Njc3MvYXBwLnNjc3M/OGU3NCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsID0+IHtcclxuLy8gXHRjb25zdCBkYXRhc2V0ID0gZWwuZGF0YXNldFxyXG4vLyBcdGlmKGRhdGFzZXQuZHVyYXRpb24pe1xyXG4vLyBcdFx0ZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZGF0YXNldC5kdXJhdGlvbisnbXMnXHJcbi8vIFx0fVxyXG4vLyB9KVxyXG5cclxubGV0IHNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIilcclxuY29uc3Qgc2Nyb2xsQ2hhbmdlID0gMVxyXG5jb25zdCBhZGRfY2xhc3Nfb25fc2Nyb2xsID0gKCkgPT4gaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JnLWRhcmsnLCAnc2hhZG93LWJsdWUnLCAnc2hhZG93LWxnJylcclxuY29uc3QgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCA9ICgpID0+IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1kYXJrJywgJ3NoYWRvdy1ibHVlJywgJ3NoYWRvdy1sZycpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgXHJcbiAgc2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgaWYgKHNjcm9sbHBvcyA+PSBzY3JvbGxDaGFuZ2UpIHsgYWRkX2NsYXNzX29uX3Njcm9sbCgpIH1cclxuICBlbHNlIHsgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCgpIH0gIFxyXG59KVxyXG5cclxuXHJcbmltcG9ydCBvbmVQYWdlU2Nyb2xsIGZyb20gJy4vb25lLXBhZ2Utc2Nyb2xsLW1hc3Rlci9vbmUtcGFnZS1zY3JvbGwuZXNtJ1xyXG5cclxuY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XHJcbmxldCBwYWdlID0gbnVsbDtcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRjb25zdCB3aW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdGlmKHdpbldpZHRoID4gMTI4MCl7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnIXRyYW5zbGF0ZS15LTAnKVxyXG5cdFx0fSlcclxuXHRcdHBhZ2UgPSBuZXcgb25lUGFnZVNjcm9sbCh7XHJcblx0XHRcdGVsOiBlbGVtZW50cyxcclxuXHRcdFx0dGhyb3R0bGluZzogMTAwMFxyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG5cdH1lbHNle1xyXG5cdFx0cGFnZSA9IG51bGw7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnb25lLXBhZ2Utc2Nyb2xsLS1wYWdlJylcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnIXRyYW5zbGF0ZS15LTAnKVxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuXHRcdH0pXHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0bydcclxuXHR9XHJcbn1cclxuXHJcbi8vaW5pdCgpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZXZlbnQgPT4ge1xyXG5cdC8vaW5pdCgpXHJcbn0pIiwiLyohXG4qIG9uZS1wYWdlLXNjcm9sbCAwLjIuNVxuKiBodHRwczovL2dpdGh1Yi5jb20vaHVpaHVpbW9lL29uZS1wYWdlLXNjcm9sbFxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiovXG5jb25zdCBzaW1wbGVUaHJvdHRsaW5nID0gKGNhbGxiYWNrLCB0aW1lKSA9PiB7XG4gICAgbGV0IGNhbGxlZFRpbWUgPSAwO1xuICAgIHJldHVybiBuID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGNhbGxlZFRpbWUgKyB0aW1lIDwgbm93KSB7XG4gICAgICAgICAgICBjYWxsZWRUaW1lID0gbm93O1xuICAgICAgICAgICAgY2FsbGJhY2sobik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmxldCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0gYGJvZHl7b3ZlcmZsb3c6IGhpZGRlbn0ub25lLXBhZ2Utc2Nyb2xsLS1wYWdle3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtvdmVyZmxvdzogaGlkZGVuO3RvdWNoLWFjdGlvbjogbm9uZTtwb3NpdGlvbjogYWJzb2x1dGV9YDtcbiAgICBjb25zdCBjc3MgPSBuZXcgQmxvYihbc3R5bGVdLCB7IHR5cGU6ICd0ZXh0L2NzcycgfSk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoY3NzKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgIH07XG59O1xuY2xhc3Mgb25lUGFnZVNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Ioe2VsLCB0aW1lID0gNjAwLCBlYXNpbmcgPSAnZWFzZS1vdXQnLCBsb29wID0gZmFsc2UsIHRocm90dGxpbmd9ID0ge30pIHtcblx0XHRcdGlmICghZWwgfHwgIWVsLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoJ2VsIGlzIHVuZGVmaW5lZCcpO1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGluaXQoKTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmc7XG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMucGFnZVRvdGFsID0gZWwubGVuZ3RoO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IDE7XG4gICAgICAgIHRocm90dGxpbmcgPSB0aHJvdHRsaW5nIHx8IHRpbWU7XG4gICAgICAgIHRoaXMuX2VsID0gW10uc2xpY2UuY2FsbChlbCk7XG4gICAgICAgIHRoaXMuX2VsLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoaW5kZXggPT0gMCl7XG5cdFx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnb25lLXBhZ2Utc2Nyb2xsLS1wYWdlJyk7XG4gICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkeyBpbmRleCAqIDEwMCB9JSlgO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5faGFzaCA9IHRoaXMuX2VsLm1hcCgoZWwsIGkpID0+IGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8IGkgKyAxKTtcbiAgICAgICAgLy8gY29uc3QgZmluZEhhc2ggPSAoKSA9PiBsb2NhdGlvbi5oYXNoID09PSAnJyA/IDEgOiB0aGlzLl9oYXNoLmZpbmRJbmRleCgoaGFzaCwgaSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKFtcbiAgICAgICAgLy8gICAgICAgICAgICAgJyMnICsgaGFzaCxcbiAgICAgICAgLy8gICAgICAgICAgICAgJyMnICsgKGkgKyAxKVxuICAgICAgICAvLyAgICAgICAgIF0uaW5jbHVkZXMobG9jYXRpb24uaGFzaCkpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSkgKyAxO1xuICAgICAgICAvLyB0aGlzLmdvdG8oZmluZEhhc2goKSk7XG4gICAgICAgIGNvbnN0IHdyYXBHb3RvID0gbiA9PiB0aGlzLmdvdG8obik7XG4gICAgICAgIHRoaXMuX2dvdG8gPSB0aHJvdHRsaW5nID8gc2ltcGxlVGhyb3R0bGluZyh3cmFwR290bywgdGhyb3R0bGluZykgOiB3cmFwR290bztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNoSW5kZXggPSBmaW5kSGFzaCgpO1xuICAgICAgICAgICAgaWYgKGhhc2hJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ290byhoYXNoSW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgJ21vdXNld2hlZWwnLFxuICAgICAgICAgICAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgICAgICAgICAgICd0b3VjaHN0YXJ0J1xuICAgICAgICBdLm1hcChlID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZSwgdGhpcykpO1xuICAgIH1cbiAgICBnb3RvKG4pIHtcbiAgICAgICAgaWYgKG4gPiB0aGlzLnBhZ2VUb3RhbCB8fCBuIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5sb29wID8gbiA9IDEgOiBuID0gdGhpcy5hY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsLnN0eWxlO1xuXHRcdFx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHsgdGhpcy50aW1lIH1tcyAkeyB0aGlzLmVhc2luZyB9YDtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkeyAoaW5kZXggLSBuICsgMSkgKiAxMDAgfSUpYDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZWxbdGhpcy5hY3RpdmUgLSAxXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3V0dmlldycpKTtcbiAgICAgICAgICAgIHRoaXMuX2VsW24gLSAxXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW52aWV3JykpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBuO1xuICAgICAgICAgICAgLy8gIWFyZ3VtZW50c1sxXSAmJiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsICcjJyArIHRoaXMuX2hhc2hbbiAtIDFdKTtcbiAgICAgICAgfVxuXHRcdFx0XHR0aGlzLl9lbFtuLTFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgfVxuICAgIHByZXYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgKyAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290bygxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLnBhZ2VUb3RhbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlV2hlZWwgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGUud2hlZWxEZWx0YSB8fCAtZS5kZXRhaWwpKTtcbiAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGUudG91Y2hlcztcbiAgICAgICAgICAgIGlmICh0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG91Y2hTdGFydFkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBlLnRvdWNoZXM7XG4gICAgICAgICAgICBpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSB0aGlzLl90b3VjaFN0YXJ0WSAtIHRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhWSA+PSA1MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkZWx0YVkgPD0gLTUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlICdrZXlkb3duJzpcbiAgICAgICAgICAgIGhhbmRsZUtleURvd24oZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V3aGVlbCc6XG4gICAgICAgIGNhc2UgJ0RPTU1vdXNlU2Nyb2xsJzpcbiAgICAgICAgICAgIGhhbmRsZU1vdXNlV2hlZWwoZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG91Y2hzdGFydCc6XG4gICAgICAgICAgICBoYW5kbGVUb3VjaFN0YXJ0KGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgICAgICBoYW5kbGVUb3VjaE1vdmUoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uZVBhZ2VTY3JvbGw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvZG9jcy9qcy9zY3JpcHRzXCI6IDAsXG5cdFwiZG9jcy9jc3Mvc3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfbGFyYXZlbF9taXhcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkb2NzL2Nzcy9zdHlsZXNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Nzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInNjcm9sbHBvcyIsIndpbmRvdyIsInNjcm9sbFkiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxDaGFuZ2UiLCJhZGRfY2xhc3Nfb25fc2Nyb2xsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlX2NsYXNzX29uX3Njcm9sbCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmVQYWdlU2Nyb2xsIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFnZSIsImluaXQiLCJ3aW5XaWR0aCIsImlubmVyV2lkdGgiLCJmb3JFYWNoIiwiZWwiLCJ0aHJvdHRsaW5nIiwiYm9keSIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJldmVudCIsInNpbXBsZVRocm90dGxpbmciLCJjYWxsYmFjayIsInRpbWUiLCJjYWxsZWRUaW1lIiwibiIsIm5vdyIsIkRhdGUiLCJjc3MiLCJCbG9iIiwidHlwZSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZWFzaW5nIiwibG9vcCIsImxlbmd0aCIsInBhZ2VUb3RhbCIsImFjdGl2ZSIsIl9lbCIsInNsaWNlIiwiY2FsbCIsImluZGV4IiwidHJhbnNmb3JtIiwid3JhcEdvdG8iLCJfZ290byIsImUiLCJoYXNoSW5kZXgiLCJmaW5kSGFzaCIsIm1hcCIsInRyYW5zaXRpb24iLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImhhbmRsZU1vdXNlV2hlZWwiLCJkZWx0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwiaGFuZGxlVG91Y2hTdGFydCIsInRvdWNoZXMiLCJfdG91Y2hTdGFydFkiLCJwYWdlWSIsImhhbmRsZVRvdWNoTW92ZSIsInByZXZlbnREZWZhdWx0IiwiZGVsdGFZIiwiYWJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=