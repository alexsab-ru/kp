// document.querySelectorAll('*').forEach(el => {
// 	const dataset = el.dataset
// 	if(dataset.duration){
// 		el.style.transitionDuration = dataset.duration+'ms'
// 	}
// })

import onePageScroll from './one-page-scroll-master/one-page-scroll.esm'

var el = document.querySelectorAll('section');
var app = new onePageScroll({
	el: el
});