// import $$ from './helpers'
import Alpine from 'alpinejs';
window.Alpine = Alpine;
window.Alpine.start()
import langs from './translate'
// PHONE MASK
function maskphone(e) {
	let num = this.value.replace(/^(\+7|8)/g, '').replace(/\D/g, '').split(/(?=.)/),
			i = num.length;
	if (0 <= i) num.unshift('+7');
	if (1 <= i) num.splice(1, 0, ' ');
	if (4 <= i) num.splice(5, 0, ' ');
	if (7 <= i) num.splice(9, 0, '-');
	if (9 <= i) num.splice(12, 0, '-');
	if (11 <= i) num.splice(15, num.length - 15);
	this.value = num.join('');
	// if (num.length == 1 && num[0] == "") {
	// 	this.parentElement.querySelector('small').classList.remove('hidden');
	// 	this.parentElement.querySelector('small').innerText = 'Поле обязательно для заполнения';
	// 	return;
	// } else if(num.length != 15 || [... new Set(num)].length == 1) {
	// 	this.parentElement.querySelector('small').classList.remove('hidden');
	// 	this.parentElement.querySelector('small').innerText = 'Некорректный номер телефона';
	// 	return;
	// }
	this.nextSibling.nextElementSibling.classList.add('hidden');
};
$$("input[name=phone]").forEach(function (element) {
	element.addEventListener('focus', maskphone);
	element.addEventListener('input', maskphone);
});

// TEXTAREA
const minLengthTextareaField = 10; // минимальное кол-во символов
// проверка на минимальное кол-во символов и скрытие ошибки
const checkTextareaLength = (textarea, minLength) => {
	if(textarea.value.length >= minLength){
		textarea.nextSibling.nextElementSibling.classList.add('hidden');
	}
}
// CHANGE textarea для всез браузеров
$$("textarea").forEach(function (textarea) {
	if (textarea.addEventListener) {
		textarea.addEventListener('input', function() {
			// event handling code for sane browsers
			checkTextareaLength(textarea, minLengthTextareaField);
		}, false);
	} else if (textarea.attachEvent) {
		textarea.attachEvent('onpropertychange', function() {
			// IE-specific event handling code
			checkTextareaLength(textarea, minLengthTextareaField);
		});
	}
});

// BUTTON
// Состояние кнопки
const stateBtn = (btn, value, disable = false) => {
	btn.value = value;
	btn.disabled = disable;
}

const showErrorMes = (form, el, text) => {
	let field = form.querySelector(el);
	field.innerText = text;
	field.classList.remove('hidden');
}

const showMessageModal = (messageModal, icon, message) => {
	document.querySelectorAll('.modal-overlay').forEach(el => {
		el.classList.add('hidden');
	});
	messageModal.querySelector('#icon').innerHTML = icon;
	messageModal.querySelector('p').innerHTML = message;
	messageModal.classList.remove('hidden');
}

const param = Alpine.store('state').param;
const lang = JSON.parse(langs)[param] || JSON.parse(langs).ru;

let sendBtn = lang.send; 
let	sendBtnAction = lang.send_btn_action;
let errorText = `<b class="text-bold block text-2xl mb-4">${lang.oops}</b> ${lang.error_text}`;
let successText;
let commentError = lang.comment_error +' '+minLengthTextareaField;
let phoneError = lang.phone_error;
let incorrectPhoneError = lang.incorrect_phone_error;
let agreeError = lang.agree_error;
let thanksForComment = `<b class="text-bold block text-2xl mb-4">${lang.thanks_for_comment}</b> ${lang.thanks_for_comment_text}`;
let thanksForRating = `<b class="text-bold block text-2xl mb-4">${lang.thanks_for_rating}</b> ${lang.thanks_for_rating_text}`;


// AGREE CHECKBOX
// Проверка на состояние чекбокса, показ/скрытие ошибки
$$("input[name=agree]").forEach(function (element) {
	let errorMes = element.parentElement.querySelector('#agree')
	element.addEventListener('change', e => {
		if(!e.target.checked){
			errorMes.innerText = agreeError;
			errorMes.classList.remove('hidden')
		}else{
			errorMes.classList.add('hidden')
		}
	});
});

// FORMS
// Отправка всех форм
$$('form:not(#dealer_form)').forEach(form => {
	const btn = form.querySelector('input[type="submit"]');
	form.onsubmit = async event => {
		event.preventDefault();
		stateBtn(btn, sendBtnAction, true);

		const ratingValue = form.querySelector('input[name="rating"]').value;
		const agree = form.querySelector('[name="agree"]');
		const phone = form.querySelector('[name="phone"]');
		const errorIcon = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path fill="#ed1c24" d="M26,0A26,26,0,1,0,52,26,26,26,0,0,0,26,0Zm9.6,17.5a1.94,1.94,0,0,1,2,2,2,2,0,1,1-2-2Zm-19.2,0a1.94,1.94,0,0,1,2,2,2,2,0,1,1-2-2ZM39.65,40.69a.93.93,0,0,1-.45.11,1,1,0,0,1-.89-.55,13.81,13.81,0,0,0-24.62,0,1,1,0,1,1-1.78-.9,15.8,15.8,0,0,1,28.18,0A1,1,0,0,1,39.65,40.69Z"></path></svg>';
		const successIcon = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path fill="#279548" d="M26,0A26,26,0,1,0,52,26,26,26,0,0,0,26,0Zm9.6,17.5a1.94,1.94,0,0,1,2,2,2,2,0,1,1-2-2Zm-19.2,0a2,2,0,1,1-2,2A2,2,0,0,1,16.4,17.5ZM40.09,32.15a15.8,15.8,0,0,1-28.18,0,1,1,0,0,1,1.78-.9,13.81,13.81,0,0,0,24.62,0,1,1,0,1,1,1.78.9Z"></path></svg>';
		const messageModal = document.getElementById('message-modal');

		// если плохая оценка и textarea пустая - фронт
		if(ratingValue < 4){
			successText = thanksForComment;
			const textarea = form.querySelector('textarea');
			if (!textarea.value.length) {
				showErrorMes(form, '#comment', commentError);
				stateBtn(btn, sendBtn);
				return;
			}
		}else{
			successText = thanksForRating;
			if(!phone.value.length){
				showErrorMes(form, '#phone', phoneError);
				stateBtn(btn, sendBtn);
				return;
			}else{
				const phoneRe = new RegExp(/^\+7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$/);
				if(!phoneRe.test(phone.value)){
					showErrorMes(form, '#phone', incorrectPhoneError);
					stateBtn(btn, sendBtn);
					return;
				}
			}
		}
		// если флажок не установлен - фронт
		if (!agree.checked) {
			showErrorMes(form, '#agree', agreeError);
			stateBtn(btn, sendBtn);
			return;
		}
		let formData = new FormData(form);
		const params = new URLSearchParams([...new FormData(event.target).entries()]);
		formData.append("page_url", window.location.origin + window.location.pathname);
		window.location.search.slice(1).split("&").forEach(function(pair) {
			var param = pair.split("=");
			formData.append(param[0], param[1]);
		});
		for (const pair of formData) {
			params.append(pair[0], pair[1]);
		}
		await fetch('https://alexsab.ru/lead/serm/', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: params,
		})
		.then(res => res.json())
		.then(data => {
			stateBtn(btn, sendBtn);
			if (data.answer == 'required') {
				showErrorMes(form, data.field, data.message);
				return;
			}else if (data.answer == 'ERROR') {
				showMessageModal(messageModal, errorIcon, errorText+'<br>'+data.error);
			}else{
				showMessageModal(messageModal, successIcon, successText);
			}
			// console.log(data);
			form.reset();
		})
		.catch(error => {
			console.error("Ошибка отправки данных формы: " + error);
			showMessageModal(messageModal, errorIcon, errorText+'<br>'+error);
			stateBtn(btn, sendBtn);
		});
		return false;
	}
})