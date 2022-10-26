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

const qualityLinks = document.querySelectorAll('.quality-item');
const modal = document.getElementById('quality-modal');
const badText = 'Расскажите нам, что вам непонятно или что нужно добавить в наш проект, чтобы получить Ваше ❤️!';
const goodText = '<b class="text-bold block text-2xl mb-4">Спасибо за оценку!</b> Давайте поговорим, как мы можем внедрить нашу систему в Ваш бизнес процесс. Оставьте контакт и укажите время когда удобно с Вами связаться.';

qualityLinks.forEach(link => {
	link.onclick = e => {
		e.preventDefault();
		const quality = link.dataset.quality;
		if (!quality || quality < 1 || quality > 5) {
			return;
		}
		const date = new Date();
		const hour = date.getHours();
		const minutes = date.getMinutes();
		const icon = link.querySelector('span').innerHTML;
		modal.querySelector('#icon').innerHTML = icon;
		const textarea = modal.querySelector('textarea');
		const inputTime = modal.querySelector('input[type="time"]');
		const textBlock = modal.querySelector('p');
		switch (quality) {
			case '4':
			case '5':
				textBlock.innerHTML = goodText;
				textarea.classList.add('hidden');
				inputTime.classList.remove('hidden');
				inputTime.value = hour +':'+ minutes;
				break;		
			default:
				textBlock.innerHTML = badText;
				textarea.classList.remove('hidden');
				inputTime.classList.add('hidden');
				break;
		}
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
	body.classList.remove('overflow-hidden', 'lg:pr-[17px]');
}

const inputMenuBtn = document.getElementById('mobile-toggle-menu-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach(link => {
	link.onclick = e =>{
		inputMenuBtn.checked = false;
	}
})

window.onresize = () => {
	if (window.innerWidth > 1023) {
		inputMenuBtn.checked = false;
	}
}

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