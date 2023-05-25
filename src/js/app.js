import './modules/alpine'
import Alpine from 'alpinejs';
window.Alpine = Alpine;
window.Alpine.start()

import './modules/helpers';
import './modules/form';
// require('fslightbox');
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './modules/swipe'

const lightbox = GLightbox();

let scrollpos = window.scrollY
const header = document.querySelector("header")
const scrollChange = 1
const add_class_on_scroll = () => header.classList.add('bg-dark', 'shadow-blue', 'shadow-lg')
const remove_class_on_scroll = () => header.classList.remove('bg-dark', 'shadow-blue', 'shadow-lg')
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

const body = document.body;
const ratingLinks = $$('.rating-item');
const modal = document.getElementById('rating-modal');
const policyModal = document.getElementById('policy-modal');
const ratingForm = document.getElementById('rating-form');
const badText = 'Расскажите нам, что вам непонятно или что нужно добавить в наш проект, чтобы получить Ваше ❤️!';
const goodText = '<b class="text-bold block text-2xl mb-4">Спасибо за оценку!</b> Давайте поговорим, как мы можем внедрить нашу систему в Ваш бизнес процесс. Оставьте контакт и укажите время когда удобно с Вами связаться.';

document.querySelector('.policy-popup-link').onclick = e => {
	e.preventDefault();
	policyModal.classList.remove('hidden')
}

ratingLinks.forEach(link => {
	link.onclick = e => {
		e.preventDefault();
		const rating = link.dataset.rating;
		if (!rating || rating < 1 || rating > 5) {
			return;
		}
		const icon = link.querySelector('span').innerHTML;
		modal.querySelector('#icon').innerHTML = icon;
		const inputRating = modal.querySelector('input[name="rating"]');
		const textarea = modal.querySelector('textarea');
		const inputTime = modal.querySelector('input[type="time"]');
		const textBlock = modal.querySelector('p');
		switch (rating) {
			case '4':
			case '5':
				textBlock.innerHTML = goodText;
				textarea.closest('div').classList.add('hidden');
				inputTime.closest('label').classList.remove('hidden');
				break;
			default:
				textBlock.innerHTML = badText;
				textarea.closest('div').classList.remove('hidden');
				inputTime.closest('label').classList.add('hidden');
				break;
		}
		inputRating.value = rating;
		modal.classList.remove('hidden');
		body.classList.add('overflow-hidden', 'lg:pr-[17px]');
	}
})

document.querySelectorAll('.modal-overlay').forEach(el => {
	document.addEventListener('keydown', event => {
		if(event.key == 'Escape'){
			closeModal(el)
		}
	});

	el.addEventListener('click', event => {
		//console.log(event.target.dataset.close)
		if(typeof event.target.dataset.close != 'undefined'){
			closeModal(el)
		}
	})
})

function closeModal(modal){
	modal.classList.add('hidden');
	const form = modal.querySelector('form');
	if(form){
		form.reset();
	}
	document.querySelectorAll('.error-message').forEach(mes => {
		mes.classList.add('hidden');
	});
	body.classList.remove('overflow-hidden', 'lg:pr-[17px]');
}

const inputMenuBtn = document.getElementById('mobile-toggle-menu-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach(link => {
	link.onclick = e =>{
		inputMenuBtn.checked = false;
	}
})

const scrollLinks = document.querySelectorAll("a[href^='#']");
scrollLinks.forEach(link => {
	link.onclick = e =>{
		e.preventDefault()
		const id = link.getAttribute('href')
		if(id === '#' || !id) return;
		scrollIntoElement(id)
		if(link.classList.contains('mobile-menu-link')){
			inputMenuBtn.checked = false;
		}
	}
})

function scrollIntoElement(id){
	document.querySelector(id).scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	duration: 700,
	once: true,
});

const priceTds = document.querySelectorAll('.grid-tr div');
const priceTable = document.querySelector('.price-table');
const setHeightPraceTableTd = () => {
	let h = 0;
	priceTable.removeAttribute('style')
	priceTds.forEach(td => {
		td.style.height = '';
		if(td.clientHeight > h){
			h = td.clientHeight;
		}
	})
	priceTds.forEach(td => {
		td.style.height = h+'px';
	})
	if (window.innerWidth < 1024) {
		priceTable.style.marginTop = '-'+h+'px';
	}
}
setHeightPraceTableTd()

window.onresize = () => {
	if (window.innerWidth > 1023) {
		inputMenuBtn.checked = false;
	}
	setHeightPraceTableTd()
}
