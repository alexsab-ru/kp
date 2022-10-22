// document.querySelectorAll('*').forEach(el => {
// 	const dataset = el.dataset
// 	if(dataset.duration){
// 		el.style.transitionDuration = dataset.duration+'ms'
// 	}
// })

import onePageScroll from './one-page-scroll-master/one-page-scroll.esm'

var elements = document.querySelectorAll('section');
let page = null;
function init() {
	const winWidth = window.innerWidth;
	if(winWidth > 1040){
		elements.forEach(el => {
			el.classList.remove('!translate-y-0')
		})
		page = new onePageScroll({
			el: elements
		});
		document.body.removeAttribute('style')
	}else{
		page = null;
		elements.forEach(el => {
			el.classList.remove('one-page-scroll--page')
			el.classList.add('!translate-y-0')
			el.removeAttribute('style')
		})
		
		document.body.style.overflow = 'auto'
	}
}

init()

window.addEventListener('resize', event => {
	init()
})