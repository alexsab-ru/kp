const togglePackageLinks = document.querySelectorAll('.toggle-package-link');
const packages = document.querySelectorAll('.package');

togglePackageLinks.forEach(link => {
	link.onclick = e => {
		e.preventDefault();
		const id = link.dataset.id;
		if(!id) return;
		togglePackageLinks.forEach(l => {
			l.classList.remove('active');
		})
		link.classList.add('active');
		packages.forEach(pack => {
			pack.classList.remove('active');
		})
		document.querySelector('.package#'+id).classList.add('active')
		// console.log(id);
	}
})

// SWIPE
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function getTouches(evt) {
	return evt.touches || // чистый API JS
	evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
	if ( ! xDown || ! yDown ) {
	return;
}

var xUp = evt.touches[0].clientX;
var yUp = evt.touches[0].clientY;

var xDiff = xDown - xUp;
var yDiff = yDown - yUp;

let activ;

function switchingPackage(left = true){
	if( left ){
		togglePackageLinks.forEach((activeLink, idx) => {
			if(activeLink.classList.contains('active')){
				activ = idx+1;
			}
		})
		if(activ > togglePackageLinks.length - 1){
			activ = 0;
		}
	}else{
		togglePackageLinks.forEach((activeLink, idx) => {
			if(activeLink.classList.contains('active')){
				activ = idx-1;
			}
		})
		if(activ < 0){
			activ = togglePackageLinks.length - 1;
		}
	}
	togglePackageLinks.forEach(l => {
		l.classList.remove('active');
	})
	packages.forEach(pack => {
		pack.classList.remove('active');
	})
	togglePackageLinks[activ].classList.add('active');
	packages[activ].classList.add('active');
}

if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/* отлавливаем разницу в движении */
	if ( xDiff > 0 ) {
		/* swipe влево */
		switchingPackage();
	} else {
		/* swipe вправо */
		switchingPackage(false);
	}
} else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
	if ( yDiff > 0 ) {
	/* swipe вверх */
	} else {
	/* swipe вниз */
	}
}
/* свайп был, обнуляем координаты */
xDown = null;
yDown = null;
};