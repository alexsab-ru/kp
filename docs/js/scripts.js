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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL2pzL29uZS1wYWdlLXNjcm9sbC1tYXN0ZXIvb25lLXBhZ2Utc2Nyb2xsLmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4Ly4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbCA9PiB7XHJcbi8vIFx0Y29uc3QgZGF0YXNldCA9IGVsLmRhdGFzZXRcclxuLy8gXHRpZihkYXRhc2V0LmR1cmF0aW9uKXtcclxuLy8gXHRcdGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGRhdGFzZXQuZHVyYXRpb24rJ21zJ1xyXG4vLyBcdH1cclxuLy8gfSlcclxuXHJcbmxldCBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpXHJcbmNvbnN0IHNjcm9sbENoYW5nZSA9IDFcclxuY29uc3QgYWRkX2NsYXNzX29uX3Njcm9sbCA9ICgpID0+IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdiZy1kYXJrJywgJ3NoYWRvdy1ibHVlJywgJ3NoYWRvdy1sZycpXHJcbmNvbnN0IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwgPSAoKSA9PiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctZGFyaycsICdzaGFkb3ctYmx1ZScsICdzaGFkb3ctbGcnKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7IFxyXG4gIHNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGlmIChzY3JvbGxwb3MgPj0gc2Nyb2xsQ2hhbmdlKSB7IGFkZF9jbGFzc19vbl9zY3JvbGwoKSB9XHJcbiAgZWxzZSB7IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwoKSB9ICBcclxufSlcclxuXHJcblxyXG5pbXBvcnQgb25lUGFnZVNjcm9sbCBmcm9tICcuL29uZS1wYWdlLXNjcm9sbC1tYXN0ZXIvb25lLXBhZ2Utc2Nyb2xsLmVzbSdcclxuXHJcbmNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG5sZXQgcGFnZSA9IG51bGw7XHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0Y29uc3Qgd2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRpZih3aW5XaWR0aCA+IDEyODApe1xyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJyF0cmFuc2xhdGUteS0wJylcclxuXHRcdH0pXHJcblx0XHRwYWdlID0gbmV3IG9uZVBhZ2VTY3JvbGwoe1xyXG5cdFx0XHRlbDogZWxlbWVudHMsXHJcblx0XHRcdHRocm90dGxpbmc6IDEwMDBcclxuXHRcdH0pO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuXHR9ZWxzZXtcclxuXHRcdHBhZ2UgPSBudWxsO1xyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29uZS1wYWdlLXNjcm9sbC0tcGFnZScpXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJyF0cmFuc2xhdGUteS0wJylcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nXHJcblx0fVxyXG59XHJcblxyXG4vL2luaXQoKVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcclxuXHQvL2luaXQoKVxyXG59KSIsIi8qIVxuKiBvbmUtcGFnZS1zY3JvbGwgMC4yLjVcbiogaHR0cHM6Ly9naXRodWIuY29tL2h1aWh1aW1vZS9vbmUtcGFnZS1zY3JvbGxcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qL1xuY29uc3Qgc2ltcGxlVGhyb3R0bGluZyA9IChjYWxsYmFjaywgdGltZSkgPT4ge1xuICAgIGxldCBjYWxsZWRUaW1lID0gMDtcbiAgICByZXR1cm4gbiA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChjYWxsZWRUaW1lICsgdGltZSA8IG5vdykge1xuICAgICAgICAgICAgY2FsbGVkVGltZSA9IG5vdztcbiAgICAgICAgICAgIGNhbGxiYWNrKG4pO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5sZXQgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IGBib2R5e292ZXJmbG93OiBoaWRkZW59Lm9uZS1wYWdlLXNjcm9sbC0tcGFnZXt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7b3ZlcmZsb3c6IGhpZGRlbjt0b3VjaC1hY3Rpb246IG5vbmU7cG9zaXRpb246IGFic29sdXRlfWA7XG4gICAgY29uc3QgY3NzID0gbmV3IEJsb2IoW3N0eWxlXSwgeyB0eXBlOiAndGV4dC9jc3MnIH0pO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGNzcykpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICB9O1xufTtcbmNsYXNzIG9uZVBhZ2VTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKHtlbCwgdGltZSA9IDYwMCwgZWFzaW5nID0gJ2Vhc2Utb3V0JywgbG9vcCA9IGZhbHNlLCB0aHJvdHRsaW5nfSA9IHt9KSB7XG5cdFx0XHRpZiAoIWVsIHx8ICFlbC5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKCdlbCBpcyB1bmRlZmluZWQnKTtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRpbml0KCk7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nO1xuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xuICAgICAgICB0aGlzLnBhZ2VUb3RhbCA9IGVsLmxlbmd0aDtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAxO1xuICAgICAgICB0aHJvdHRsaW5nID0gdGhyb3R0bGluZyB8fCB0aW1lO1xuICAgICAgICB0aGlzLl9lbCA9IFtdLnNsaWNlLmNhbGwoZWwpO1xuICAgICAgICB0aGlzLl9lbC5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdGlmKGluZGV4ID09IDApe1xuXHRcdFx0XHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29uZS1wYWdlLXNjcm9sbC0tcGFnZScpO1xuICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsgaW5kZXggKiAxMDAgfSUpYDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuX2hhc2ggPSB0aGlzLl9lbC5tYXAoKGVsLCBpKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCBpICsgMSk7XG4gICAgICAgIC8vIGNvbnN0IGZpbmRIYXNoID0gKCkgPT4gbG9jYXRpb24uaGFzaCA9PT0gJycgPyAxIDogdGhpcy5faGFzaC5maW5kSW5kZXgoKGhhc2gsIGkpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChbXG4gICAgICAgIC8vICAgICAgICAgICAgICcjJyArIGhhc2gsXG4gICAgICAgIC8vICAgICAgICAgICAgICcjJyArIChpICsgMSlcbiAgICAgICAgLy8gICAgICAgICBdLmluY2x1ZGVzKGxvY2F0aW9uLmhhc2gpKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pICsgMTtcbiAgICAgICAgLy8gdGhpcy5nb3RvKGZpbmRIYXNoKCkpO1xuICAgICAgICBjb25zdCB3cmFwR290byA9IG4gPT4gdGhpcy5nb3RvKG4pO1xuICAgICAgICB0aGlzLl9nb3RvID0gdGhyb3R0bGluZyA/IHNpbXBsZVRocm90dGxpbmcod3JhcEdvdG8sIHRocm90dGxpbmcpIDogd3JhcEdvdG87XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzaEluZGV4ID0gZmluZEhhc2goKTtcbiAgICAgICAgICAgIGlmIChoYXNoSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG8oaGFzaEluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFtcbiAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgICdtb3VzZXdoZWVsJyxcbiAgICAgICAgICAgICdET01Nb3VzZVNjcm9sbCcsXG4gICAgICAgICAgICAndG91Y2hzdGFydCdcbiAgICAgICAgXS5tYXAoZSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGUsIHRoaXMpKTtcbiAgICB9XG4gICAgZ290byhuKSB7XG4gICAgICAgIGlmIChuID4gdGhpcy5wYWdlVG90YWwgfHwgbiA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMubG9vcCA/IG4gPSAxIDogbiA9IHRoaXMuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuICE9PSB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fZWwuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbC5zdHlsZTtcblx0XHRcdFx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7IHRoaXMudGltZSB9bXMgJHsgdGhpcy5lYXNpbmcgfWA7XG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsgKGluZGV4IC0gbiArIDEpICogMTAwIH0lKWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2VsW3RoaXMuYWN0aXZlIC0gMV0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ291dHZpZXcnKSk7XG4gICAgICAgICAgICB0aGlzLl9lbFtuIC0gMV0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ludmlldycpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbjtcbiAgICAgICAgICAgIC8vICFhcmd1bWVudHNbMV0gJiYgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCAnIycgKyB0aGlzLl9oYXNoW24gLSAxXSk7XG4gICAgICAgIH1cblx0XHRcdFx0dGhpcy5fZWxbbi0xXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290byh0aGlzLmFjdGl2ZSArIDEpO1xuICAgIH1cbiAgICBwcmV2KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvKHRoaXMuYWN0aXZlIC0gMSk7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5hY3RpdmUgLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgICAgIHRoaXMuX2dvdG8odGhpcy5wYWdlVG90YWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVdoZWVsID0gZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSk7XG4gICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnQgPSBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBlLnRvdWNoZXM7XG4gICAgICAgICAgICBpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvdWNoU3RhcnRZID0gdG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZS50b3VjaGVzO1xuICAgICAgICAgICAgaWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gdGhpcy5fdG91Y2hTdGFydFkgLSB0b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YVkgPj0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ290byh0aGlzLmFjdGl2ZSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFZIDw9IC01MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nb3RvKHRoaXMuYWN0aXZlIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0YVkpID49IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAna2V5ZG93bic6XG4gICAgICAgICAgICBoYW5kbGVLZXlEb3duKGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNld2hlZWwnOlxuICAgICAgICBjYXNlICdET01Nb3VzZVNjcm9sbCc6XG4gICAgICAgICAgICBoYW5kbGVNb3VzZVdoZWVsKGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICAgICAgaGFuZGxlVG91Y2hTdGFydChlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICAgICAgaGFuZGxlVG91Y2hNb3ZlKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBvbmVQYWdlU2Nyb2xsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2RvY3MvanMvc2NyaXB0c1wiOiAwLFxuXHRcImRvY3MvY3NzL3N0eWxlc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX2xhcmF2ZWxfbWl4XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfbGFyYXZlbF9taXhcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkb2NzL2Nzcy9zdHlsZXNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvYXBwLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZG9jcy9jc3Mvc3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Njc3MvYXBwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzY3JvbGxwb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsQ2hhbmdlIiwiYWRkX2NsYXNzX29uX3Njcm9sbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZV9jbGFzc19vbl9zY3JvbGwiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib25lUGFnZVNjcm9sbCIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhZ2UiLCJpbml0Iiwid2luV2lkdGgiLCJpbm5lcldpZHRoIiwiZm9yRWFjaCIsImVsIiwidGhyb3R0bGluZyIsImJvZHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdHlsZSIsIm92ZXJmbG93IiwiZXZlbnQiLCJzaW1wbGVUaHJvdHRsaW5nIiwiY2FsbGJhY2siLCJ0aW1lIiwiY2FsbGVkVGltZSIsIm4iLCJub3ciLCJEYXRlIiwiY3NzIiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImVhc2luZyIsImxvb3AiLCJsZW5ndGgiLCJwYWdlVG90YWwiLCJhY3RpdmUiLCJfZWwiLCJzbGljZSIsImNhbGwiLCJpbmRleCIsInRyYW5zZm9ybSIsIndyYXBHb3RvIiwiX2dvdG8iLCJlIiwiaGFzaEluZGV4IiwiZmluZEhhc2giLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJoYW5kbGVNb3VzZVdoZWVsIiwiZGVsdGEiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWxEZWx0YSIsImRldGFpbCIsImhhbmRsZVRvdWNoU3RhcnQiLCJ0b3VjaGVzIiwiX3RvdWNoU3RhcnRZIiwicGFnZVkiLCJoYW5kbGVUb3VjaE1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhWSIsImFicyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9