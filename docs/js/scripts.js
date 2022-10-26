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
var modal = document.getElementById('quality-modal');
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

var inputMenuBtn = document.getElementById('mobile-toggle-menu-btn');
var mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach(function (link) {
  link.onclick = function (e) {
    inputMenuBtn.checked = false;
  };
});

window.onresize = function () {
  if (window.innerWidth > 1023) {
    inputMenuBtn.checked = false;
  }
};

var scrollLinks = document.querySelectorAll("a[href^='#']");
scrollLinks.forEach(function (link) {
  link.onclick = function (e) {
    e.preventDefault();
    var id = link.getAttribute('href');
    if (id === '#' || !id) return;
    scrollIntoElement(id);

    if (link.classList.contains('mobile-menu-link')) {
      inputMenuBtn.checked = false;
    }
  };
});

function scrollIntoElement(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLWxhcmF2ZWwtbWl4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1sYXJhdmVsLW1peC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItbGFyYXZlbC1taXgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpXHJcbmNvbnN0IHNjcm9sbENoYW5nZSA9IDFcclxuY29uc3QgYWRkX2NsYXNzX29uX3Njcm9sbCA9ICgpID0+IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdiZy1kYXJrJywgJ3NoYWRvdy1ibHVlJywgJ3NoYWRvdy1sZycpXHJcbmNvbnN0IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwgPSAoKSA9PiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctZGFyaycsICdzaGFkb3ctYmx1ZScsICdzaGFkb3ctbGcnKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7IFxyXG4gIHNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGlmIChzY3JvbGxwb3MgPj0gc2Nyb2xsQ2hhbmdlKSB7IGFkZF9jbGFzc19vbl9zY3JvbGwoKSB9XHJcbiAgZWxzZSB7IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwoKSB9ICBcclxufSlcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuY29uc3QgcXVhbGl0eUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1YWxpdHktaXRlbScpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFsaXR5LW1vZGFsJyk7XHJcbmNvbnN0IGJhZFRleHQgPSAn0KDQsNGB0YHQutCw0LbQuNGC0LUg0L3QsNC8LCDRh9GC0L4g0LLQsNC8INC90LXQv9C+0L3Rj9GC0L3QviDQuNC70Lgg0YfRgtC+INC90YPQttC90L4g0LTQvtCx0LDQstC40YLRjCDQsiDQvdCw0Ygg0L/RgNC+0LXQutGCLCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0JLQsNGI0LUg4p2k77iPISc7XHJcbmNvbnN0IGdvb2RUZXh0ID0gJzxiIGNsYXNzPVwidGV4dC1ib2xkIGJsb2NrIHRleHQtMnhsIG1iLTRcIj7QodC/0LDRgdC40LHQviDQt9CwINC+0YbQtdC90LrRgyE8L2I+INCU0LDQstCw0LnRgtC1INC/0L7Qs9C+0LLQvtGA0LjQvCwg0LrQsNC6INC80Ysg0LzQvtC20LXQvCDQstC90LXQtNGA0LjRgtGMINC90LDRiNGDINGB0LjRgdGC0LXQvNGDINCyINCS0LDRiCDQsdC40LfQvdC10YEg0L/RgNC+0YbQtdGB0YEuINCe0YHRgtCw0LLRjNGC0LUg0LrQvtC90YLQsNC60YIg0Lgg0YPQutCw0LbQuNGC0LUg0LLRgNC10LzRjyDQutC+0LPQtNCwINGD0LTQvtCx0L3QviDRgSDQktCw0LzQuCDRgdCy0Y/Qt9Cw0YLRjNGB0Y8uJztcclxuXHJcbnF1YWxpdHlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG5cdGxpbmsub25jbGljayA9IGUgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcXVhbGl0eSA9IGxpbmsuZGF0YXNldC5xdWFsaXR5O1xyXG5cdFx0aWYgKCFxdWFsaXR5IHx8IHF1YWxpdHkgPCAxIHx8IHF1YWxpdHkgPiA1KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdGNvbnN0IGljb24gPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lckhUTUw7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLmlubmVySFRNTCA9IGljb247XHJcblx0XHRjb25zdCB0ZXh0YXJlYSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblx0XHRjb25zdCBpbnB1dFRpbWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpO1xyXG5cdFx0Y29uc3QgdGV4dEJsb2NrID0gbW9kYWwucXVlcnlTZWxlY3RvcigncCcpO1xyXG5cdFx0c3dpdGNoIChxdWFsaXR5KSB7XHJcblx0XHRcdGNhc2UgJzQnOlxyXG5cdFx0XHRjYXNlICc1JzpcclxuXHRcdFx0XHR0ZXh0QmxvY2suaW5uZXJIVE1MID0gZ29vZFRleHQ7XHJcblx0XHRcdFx0dGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRcdFx0aW5wdXRUaW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGlucHV0VGltZS52YWx1ZSA9IGhvdXIgKyc6JysgbWludXRlcztcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGV4dEJsb2NrLmlubmVySFRNTCA9IGJhZFRleHQ7XHJcblx0XHRcdFx0dGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHRcdFx0aW5wdXRUaW1lLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicsICdsZzpwci1bMTdweF0nKTtcclxuXHR9XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtb3ZlcmxheScpLmZvckVhY2goZWwgPT4ge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcblx0XHRpZihldmVudC5rZXkgPT0gJ0VzY2FwZScpe1xyXG5cdFx0XHRjbG9zZU1vZGFsKGVsKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2xvc2UpXHJcblx0XHRpZih0eXBlb2YgZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2xvc2UgIT0gJ3VuZGVmaW5lZCcpe1xyXG5cdFx0XHRjbG9zZU1vZGFsKGVsKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKXtcclxuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicsICdsZzpwci1bMTdweF0nKTtcclxufVxyXG5cclxuY29uc3QgaW5wdXRNZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS10b2dnbGUtbWVudS1idG4nKTtcclxuY29uc3QgbW9iaWxlTWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1tZW51LWxpbmsnKTtcclxubW9iaWxlTWVudUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcblx0bGluay5vbmNsaWNrID0gZSA9PntcclxuXHRcdGlucHV0TWVudUJ0bi5jaGVja2VkID0gZmFsc2U7XHJcblx0fVxyXG59KVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjMpIHtcclxuXHRcdGlucHV0TWVudUJ0bi5jaGVja2VkID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzY3JvbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZePScjJ11cIik7XHJcbnNjcm9sbExpbmtzLmZvckVhY2gobGluayA9PiB7XHJcblx0bGluay5vbmNsaWNrID0gZSA9PntcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgaWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcblx0XHRpZihpZCA9PT0gJyMnIHx8ICFpZCkgcmV0dXJuO1xyXG5cdFx0c2Nyb2xsSW50b0VsZW1lbnQoaWQpXHJcblx0XHRpZihsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbW9iaWxlLW1lbnUtbGluaycpKXtcclxuXHRcdFx0aW5wdXRNZW51QnRuLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzY3JvbGxJbnRvRWxlbWVudChpZCl7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0YmVoYXZpb3I6IFwic21vb3RoXCIsXHJcblx0XHRibG9jazogXCJzdGFydFwiXHJcblx0fSk7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvZG9jcy9qcy9zY3JpcHRzXCI6IDAsXG5cdFwiZG9jcy9jc3Mvc3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfbGFyYXZlbF9taXhcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9sYXJhdmVsX21peFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRvY3MvY3NzL3N0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9hcHAuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkb2NzL2Nzcy9zdHlsZXNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Nzcy9hcHAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInNjcm9sbHBvcyIsIndpbmRvdyIsInNjcm9sbFkiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxDaGFuZ2UiLCJhZGRfY2xhc3Nfb25fc2Nyb2xsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlX2NsYXNzX29uX3Njcm9sbCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwicXVhbGl0eUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJiYWRUZXh0IiwiZ29vZFRleHQiLCJmb3JFYWNoIiwibGluayIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJxdWFsaXR5IiwiZGF0YXNldCIsImRhdGUiLCJEYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJpY29uIiwiaW5uZXJIVE1MIiwidGV4dGFyZWEiLCJpbnB1dFRpbWUiLCJ0ZXh0QmxvY2siLCJ2YWx1ZSIsImVsIiwiZXZlbnQiLCJrZXkiLCJjbG9zZU1vZGFsIiwidGFyZ2V0IiwiY2xvc2UiLCJpbnB1dE1lbnVCdG4iLCJtb2JpbGVNZW51TGlua3MiLCJjaGVja2VkIiwib25yZXNpemUiLCJpbm5lcldpZHRoIiwic2Nyb2xsTGlua3MiLCJpZCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9FbGVtZW50IiwiY29udGFpbnMiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siXSwic291cmNlUm9vdCI6IiJ9