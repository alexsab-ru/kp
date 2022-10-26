/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

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
var body = document.body;
var qualityLinks = document.querySelectorAll('.quality-item');
var modal = document.getElementById('video-modal');
var badText = 'Расскажите нам, что вам непонятно или что нужно добавить в наш проект, чтобы получить Ваше ❤️!';
var goodText = '<b class="text-bold block text-2xl mb-4">Спасибо за оценку!</b> Давайте поговорим, как мы можем внедрить нашу систему в Ваш бизнес процесс. Оставьте контакт и укажите время когда удобно с Вами связаться.';
qualityLinks.forEach(function (link) {
  link.onclick = function (e) {
    e.preventDefault();
    var quality = link.dataset.quality;

    if (!quality || quality < 1 || quality > 5) {
      return;
    }

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var icon = link.querySelector('span').innerHTML;
    modal.querySelector('#icon').innerHTML = icon;
    var textarea = modal.querySelector('textarea');
    var inputTime = modal.querySelector('input[type="time"]');
    var textBlock = modal.querySelector('p');

    switch (quality) {
      case '4':
      case '5':
        textBlock.innerHTML = goodText;
        textarea.classList.add('hidden');
        inputTime.classList.remove('hidden');
        inputTime.value = hour + ':' + minutes;
        break;

      default:
        textBlock.innerHTML = badText;
        textarea.classList.remove('hidden');
        inputTime.classList.add('hidden');
        break;
    }

    modal.classList.remove('hidden');
    body.classList.add('overflow-hidden', 'lg:pr-[17px]');
  };
});
document.querySelectorAll('.modal-overlay').forEach(function (el) {
  document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
      closeModal(el);
    }
  });
  el.addEventListener('click', function (event) {
    //console.log(event.target.dataset.close)
    if (typeof event.target.dataset.close != 'undefined') {
      closeModal(el);
    }
  });
});

function closeModal(modal) {
  modal.classList.add('hidden');
  body.classList.remove('overflow-hidden', 'lg:pr-[17px]');
}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2RvY3MvanMvc2NyaXB0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBdkI7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLENBQXJCOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7RUFBQSxPQUFNSixNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFNBQXJCLEVBQWdDLGFBQWhDLEVBQStDLFdBQS9DLENBQU47QUFBQSxDQUE1Qjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCO0VBQUEsT0FBTVAsTUFBTSxDQUFDSyxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixTQUF4QixFQUFtQyxhQUFuQyxFQUFrRCxXQUFsRCxDQUFOO0FBQUEsQ0FBL0I7O0FBQ0FWLE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztFQUMzQ1osU0FBUyxHQUFHQyxNQUFNLENBQUNDLE9BQW5COztFQUNBLElBQUlGLFNBQVMsSUFBSU0sWUFBakIsRUFBK0I7SUFBRUMsbUJBQW1CO0VBQUksQ0FBeEQsTUFDSztJQUFFRyxzQkFBc0I7RUFBSTtBQUNsQyxDQUpEO0FBTUEsSUFBTUcsSUFBSSxHQUFHVCxRQUFRLENBQUNTLElBQXRCO0FBRUEsSUFBTUMsWUFBWSxHQUFHVixRQUFRLENBQUNXLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHWixRQUFRLENBQUNhLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZDtBQUNBLElBQU1DLE9BQU8sR0FBRyxnR0FBaEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsNk1BQWpCO0FBRUFMLFlBQVksQ0FBQ00sT0FBYixDQUFxQixVQUFBQyxJQUFJLEVBQUk7RUFDNUJBLElBQUksQ0FBQ0MsT0FBTCxHQUFlLFVBQUFDLENBQUMsRUFBSTtJQUNuQkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBTUMsT0FBTyxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYUQsT0FBN0I7O0lBQ0EsSUFBSSxDQUFDQSxPQUFELElBQVlBLE9BQU8sR0FBRyxDQUF0QixJQUEyQkEsT0FBTyxHQUFHLENBQXpDLEVBQTRDO01BQzNDO0lBQ0E7O0lBQ0QsSUFBTUUsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtJQUNBLElBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxRQUFMLEVBQWI7SUFDQSxJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssVUFBTCxFQUFoQjtJQUNBLElBQU1DLElBQUksR0FBR1osSUFBSSxDQUFDaEIsYUFBTCxDQUFtQixNQUFuQixFQUEyQjZCLFNBQXhDO0lBQ0FsQixLQUFLLENBQUNYLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI2QixTQUE3QixHQUF5Q0QsSUFBekM7SUFDQSxJQUFNRSxRQUFRLEdBQUduQixLQUFLLENBQUNYLGFBQU4sQ0FBb0IsVUFBcEIsQ0FBakI7SUFDQSxJQUFNK0IsU0FBUyxHQUFHcEIsS0FBSyxDQUFDWCxhQUFOLENBQW9CLG9CQUFwQixDQUFsQjtJQUNBLElBQU1nQyxTQUFTLEdBQUdyQixLQUFLLENBQUNYLGFBQU4sQ0FBb0IsR0FBcEIsQ0FBbEI7O0lBQ0EsUUFBUW9CLE9BQVI7TUFDQyxLQUFLLEdBQUw7TUFDQSxLQUFLLEdBQUw7UUFDQ1ksU0FBUyxDQUFDSCxTQUFWLEdBQXNCZixRQUF0QjtRQUNBZ0IsUUFBUSxDQUFDM0IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsUUFBdkI7UUFDQTJCLFNBQVMsQ0FBQzVCLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCO1FBQ0F5QixTQUFTLENBQUNFLEtBQVYsR0FBa0JULElBQUksR0FBRSxHQUFOLEdBQVdFLE9BQTdCO1FBQ0E7O01BQ0Q7UUFDQ00sU0FBUyxDQUFDSCxTQUFWLEdBQXNCaEIsT0FBdEI7UUFDQWlCLFFBQVEsQ0FBQzNCLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLFFBQTFCO1FBQ0F5QixTQUFTLENBQUM1QixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixRQUF4QjtRQUNBO0lBWkY7O0lBY0FPLEtBQUssQ0FBQ1IsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsUUFBdkI7SUFDQUUsSUFBSSxDQUFDTCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsaUJBQW5CLEVBQXNDLGNBQXRDO0VBQ0EsQ0E5QkQ7QUErQkEsQ0FoQ0Q7QUFrQ0FMLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDSyxPQUE1QyxDQUFvRCxVQUFBbUIsRUFBRSxFQUFJO0VBQ3pEbkMsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBNEIsS0FBSyxFQUFJO0lBQzdDLElBQUdBLEtBQUssQ0FBQ0MsR0FBTixJQUFhLFFBQWhCLEVBQXlCO01BQ3hCQyxVQUFVLENBQUNILEVBQUQsQ0FBVjtJQUNBO0VBQ0QsQ0FKRDtFQU1BQSxFQUFFLENBQUMzQixnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFBNEIsS0FBSyxFQUFJO0lBQ3JDO0lBQ0EsSUFBRyxPQUFPQSxLQUFLLENBQUNHLE1BQU4sQ0FBYWpCLE9BQWIsQ0FBcUJrQixLQUE1QixJQUFxQyxXQUF4QyxFQUFvRDtNQUNuREYsVUFBVSxDQUFDSCxFQUFELENBQVY7SUFDQTtFQUNELENBTEQ7QUFNQSxDQWJEOztBQWVBLFNBQVNHLFVBQVQsQ0FBb0IxQixLQUFwQixFQUEwQjtFQUN6QkEsS0FBSyxDQUFDUixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtFQUNBSSxJQUFJLENBQUNMLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixpQkFBdEIsRUFBeUMsY0FBekM7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEVEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84ZTc0Iiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIilcclxuY29uc3Qgc2Nyb2xsQ2hhbmdlID0gMVxyXG5jb25zdCBhZGRfY2xhc3Nfb25fc2Nyb2xsID0gKCkgPT4gaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JnLWRhcmsnLCAnc2hhZG93LWJsdWUnLCAnc2hhZG93LWxnJylcclxuY29uc3QgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCA9ICgpID0+IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1kYXJrJywgJ3NoYWRvdy1ibHVlJywgJ3NoYWRvdy1sZycpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgXHJcbiAgc2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgaWYgKHNjcm9sbHBvcyA+PSBzY3JvbGxDaGFuZ2UpIHsgYWRkX2NsYXNzX29uX3Njcm9sbCgpIH1cclxuICBlbHNlIHsgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCgpIH0gIFxyXG59KVxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG5jb25zdCBxdWFsaXR5TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVhbGl0eS1pdGVtJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLW1vZGFsJyk7XHJcbmNvbnN0IGJhZFRleHQgPSAn0KDQsNGB0YHQutCw0LbQuNGC0LUg0L3QsNC8LCDRh9GC0L4g0LLQsNC8INC90LXQv9C+0L3Rj9GC0L3QviDQuNC70Lgg0YfRgtC+INC90YPQttC90L4g0LTQvtCx0LDQstC40YLRjCDQsiDQvdCw0Ygg0L/RgNC+0LXQutGCLCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0JLQsNGI0LUg4p2k77iPISc7XHJcbmNvbnN0IGdvb2RUZXh0ID0gJzxiIGNsYXNzPVwidGV4dC1ib2xkIGJsb2NrIHRleHQtMnhsIG1iLTRcIj7QodC/0LDRgdC40LHQviDQt9CwINC+0YbQtdC90LrRgyE8L2I+INCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCwg0LrQsNC6INC80Ysg0LzQvtC20LXQvCDQstC90LXQtNGA0LjRgtGMINC90LDRiNGDINGB0LjRgdGC0LXQvNGDINCyINCS0LDRiCDQsdC40LfQvdC10YEg0L/RgNC+0YbQtdGB0YEuINCe0YHRgtCw0LLRjNGC0LUg0LrQvtC90YLQsNC60YIg0Lgg0YPQutCw0LbQuNGC0LUg0LLRgNC10LzRjyDQutC+0LPQtNCwINGD0LTQvtCx0L3QviDRgSDQktCw0LzQuCDRgdCy0Y/Qt9Cw0YLRjNGB0Y8uJztcclxuXHJcbnF1YWxpdHlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG5cdGxpbmsub25jbGljayA9IGUgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcXVhbGl0eSA9IGxpbmsuZGF0YXNldC5xdWFsaXR5O1xyXG5cdFx0aWYgKCFxdWFsaXR5IHx8IHF1YWxpdHkgPCAxIHx8IHF1YWxpdHkgPiA1KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdGNvbnN0IGljb24gPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUw7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLmlubmVySFRNTCA9IGljb247XHJcblx0XHRjb25zdCB0ZXh0YXJlYSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblx0XHRjb25zdCBpbnB1dFRpbWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpO1xyXG5cdFx0Y29uc3QgdGV4dEJsb2NrID0gbW9kYWwucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cdFx0c3dpdGNoIChxdWFsaXR5KSB7XHJcblx0XHRcdGNhc2UgJzQnOlxyXG5cdFx0XHRjYXNlICc1JzpcclxuXHRcdFx0XHR0ZXh0QmxvY2suaW5uZXJIVE1MID0gZ29vZFRleHQ7XHJcblx0XHRcdFx0dGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRcdFx0aW5wdXRUaW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGlucHV0VGltZS52YWx1ZSA9IGhvdXIgKyc6JysgbWludXRlcztcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGV4dEJsb2NrLmlubmVySFRNTCA9IGJhZFRleHQ7XHJcblx0XHRcdFx0dGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHRcdFx0aW5wdXRUaW1lLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicsICdsZzpwci1bMTdweF0nKTtcclxuXHR9XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtb3ZlcmxheScpLmZvckVhY2goZWwgPT4ge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcblx0XHRpZihldmVudC5rZXkgPT0gJ0VzY2FwZScpe1xyXG5cdFx0XHRjbG9zZU1vZGFsKGVsKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2xvc2UpXHJcblx0XHRpZih0eXBlb2YgZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2xvc2UgIT0gJ3VuZGVmaW5lZCcpe1xyXG5cdFx0XHRjbG9zZU1vZGFsKGVsKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcclxuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicsICdsZzpwci1bMTdweF0nKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9kb2NzL2pzL3NjcmlwdHNcIjogMCxcblx0XCJkb2NzL2Nzcy9zdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX2xhcmF2ZWxfbWl4XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZG9jcy9jc3Mvc3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3NzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic2Nyb2xscG9zIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbENoYW5nZSIsImFkZF9jbGFzc19vbl9zY3JvbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVfY2xhc3Nfb25fc2Nyb2xsIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJxdWFsaXR5TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImJhZFRleHQiLCJnb29kVGV4dCIsImZvckVhY2giLCJsaW5rIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1YWxpdHkiLCJkYXRhc2V0IiwiZGF0ZSIsIkRhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImljb24iLCJpbm5lckhUTUwiLCJ0ZXh0YXJlYSIsImlucHV0VGltZSIsInRleHRCbG9jayIsInZhbHVlIiwiZWwiLCJldmVudCIsImtleSIsImNsb3NlTW9kYWwiLCJ0YXJnZXQiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=