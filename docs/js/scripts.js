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
    body.classList.add('overflow-hidden');
    body.style.paddingRight = '17px';
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
  body.classList.remove('overflow-hidden');
  body.style.paddingRight = '0px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpXHJcbmNvbnN0IHNjcm9sbENoYW5nZSA9IDFcclxuY29uc3QgYWRkX2NsYXNzX29uX3Njcm9sbCA9ICgpID0+IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdiZy1kYXJrJywgJ3NoYWRvdy1ibHVlJywgJ3NoYWRvdy1sZycpXHJcbmNvbnN0IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwgPSAoKSA9PiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctZGFyaycsICdzaGFkb3ctYmx1ZScsICdzaGFkb3ctbGcnKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7IFxyXG4gIHNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGlmIChzY3JvbGxwb3MgPj0gc2Nyb2xsQ2hhbmdlKSB7IGFkZF9jbGFzc19vbl9zY3JvbGwoKSB9XHJcbiAgZWxzZSB7IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwoKSB9ICBcclxufSlcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuY29uc3QgcXVhbGl0eUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1YWxpdHktaXRlbScpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby1tb2RhbCcpO1xyXG5jb25zdCBiYWRUZXh0ID0gJ9Cg0LDRgdGB0LrQsNC20LjRgtC1INC90LDQvCwg0YfRgtC+INCy0LDQvCDQvdC10L/QvtC90Y/RgtC90L4g0LjQu9C4INGH0YLQviDQvdGD0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0LIg0L3QsNGIINC/0YDQvtC10LrRgiwg0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINCS0LDRiNC1IOKdpO+4jyEnO1xyXG5jb25zdCBnb29kVGV4dCA9ICc8YiBjbGFzcz1cInRleHQtYm9sZCBibG9jayB0ZXh0LTJ4bCBtYi00XCI+0KHQv9Cw0YHQuNCx0L4g0LfQsCDQvtGG0LXQvdC60YMhPC9iPiDQlNCw0LLQsNC50YLQtSDQv9C+0LPQvtCy0L7RgNC40LwsINC60LDQuiDQvNGLINC80L7QttC10Lwg0LLQvdC10LTRgNC40YLRjCDQvdCw0YjRgyDRgdC40YHRgtC10LzRgyDQsiDQktCw0Ygg0LHQuNC30L3QtdGBINC/0YDQvtGG0LXRgdGBLiDQntGB0YLQsNCy0YzRgtC1INC60L7QvdGC0LDQutGCINC4INGD0LrQsNC20LjRgtC1INCy0YDQtdC80Y8g0LrQvtCz0LTQsCDRg9C00L7QsdC90L4g0YEg0JLQsNC80Lgg0YHQstGP0LfQsNGC0YzRgdGPLic7XHJcblxyXG5xdWFsaXR5TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuXHRsaW5rLm9uY2xpY2sgPSBlID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHF1YWxpdHkgPSBsaW5rLmRhdGFzZXQucXVhbGl0eTtcclxuXHRcdGlmICghcXVhbGl0eSB8fCBxdWFsaXR5IDwgMSB8fCBxdWFsaXR5ID4gNSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0XHRjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRjb25zdCBpY29uID0gbGluay5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJIVE1MO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignI2ljb24nKS5pbm5lckhUTUwgPSBpY29uO1xyXG5cdFx0Y29uc3QgdGV4dGFyZWEgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cdFx0Y29uc3QgaW5wdXRUaW1lID0gbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRpbWVcIl0nKTtcclxuXHRcdGNvbnN0IHRleHRCbG9jayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuXHRcdHN3aXRjaCAocXVhbGl0eSkge1xyXG5cdFx0XHRjYXNlICc0JzpcclxuXHRcdFx0Y2FzZSAnNSc6XHJcblx0XHRcdFx0dGV4dEJsb2NrLmlubmVySFRNTCA9IGdvb2RUZXh0O1xyXG5cdFx0XHRcdHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGlucHV0VGltZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHRcdFx0XHRpbnB1dFRpbWUudmFsdWUgPSBob3VyICsnOicrIG1pbnV0ZXM7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRleHRCbG9jay5pbm5lckhUTUwgPSBiYWRUZXh0O1xyXG5cdFx0XHRcdHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGlucHV0VGltZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuXHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzE3cHgnO1xyXG5cdH1cclxufSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1vdmVybGF5JykuZm9yRWFjaChlbCA9PiB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuXHRcdGlmKGV2ZW50LmtleSA9PSAnRXNjYXBlJyl7XHJcblx0XHRcdGNsb3NlTW9kYWwoZWwpXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudC50YXJnZXQuZGF0YXNldC5jbG9zZSlcclxuXHRcdGlmKHR5cGVvZiBldmVudC50YXJnZXQuZGF0YXNldC5jbG9zZSAhPSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdGNsb3NlTW9kYWwoZWwpXHJcblx0XHR9XHJcblx0fSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpe1xyXG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcblx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9kb2NzL2pzL3NjcmlwdHNcIjogMCxcblx0XCJkb2NzL2Nzcy9zdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX2xhcmF2ZWxfbWl4XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZG9jcy9jc3Mvc3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3NzL2FwcC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic2Nyb2xscG9zIiwid2luZG93Iiwic2Nyb2xsWSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbENoYW5nZSIsImFkZF9jbGFzc19vbl9zY3JvbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVfY2xhc3Nfb25fc2Nyb2xsIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJxdWFsaXR5TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImJhZFRleHQiLCJnb29kVGV4dCIsImZvckVhY2giLCJsaW5rIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1YWxpdHkiLCJkYXRhc2V0IiwiZGF0ZSIsIkRhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImljb24iLCJpbm5lckhUTUwiLCJ0ZXh0YXJlYSIsImlucHV0VGltZSIsInRleHRCbG9jayIsInZhbHVlIiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJlbCIsImV2ZW50Iiwia2V5IiwiY2xvc2VNb2RhbCIsInRhcmdldCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==