(() => {
	const $$ = function (selector) {
		const elements = document.querySelectorAll(selector);
		const methods = {};
		if(!methods.length) return elements;
		return methods;
	};
	window.$$ = $$;
})();

// const $$ = function(selector) {
// 	return new $$.prototype.init(selector);
// };

// $$.prototype.init = function(selector) {
// 	if(!selector){
// 		return this;
// 	}
// 	Object.assign(this, document.querySelectorAll(selector));
// 	this.length = document.querySelectorAll(selector).length;
// 	console.log(this);
// 	return this;
// };
// $$.prototype.init.prototype = $$.prototype;
// window.$$ = $$;
// export default $$;