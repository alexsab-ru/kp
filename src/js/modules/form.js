const $$ = function (name) { return document.querySelectorAll(name) };

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
// AGREE CHECKBOX
// Проверка на состояние чекбокса, показ/скрытие ошибки
$$("input[name=agree]").forEach(function (element) {
	let errorMes = element.parentElement.querySelector('#agree')
	element.addEventListener('change', e => {
		if(!e.target.checked){
			errorMes.classList.remove('hidden')
		}else{
			errorMes.classList.add('hidden')
		}
	});
});
// показ ошибки, если чекбокс не установлен
const showErrorAgree = (agree) => {
	agree.parentElement.querySelector('#agree').classList.remove('hidden');
}

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
// Показ ошибки
const showErrorTextarea = (textarea, message) => {
	textarea.nextSibling.nextElementSibling.innerText = message;
	textarea.nextSibling.nextElementSibling.classList.remove('hidden');
	textarea.focus();
}

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

// FORMS
// Отправка всех форм
$$('form').forEach(form => {
	const btn = form.querySelector('input[type="submit"]');
	form.onsubmit = async event => {
		event.preventDefault();
		stateBtn(btn, 'Отправляем...', true);

		const formType = form.dataset.type; //тип формы (для оценок)
		const agree = form.querySelector('[name="agree"]');

		// если плохая оценка и textarea пустая - фронт
		if(formType && formType == 'bad'){
			const textarea = form.querySelector('textarea');
			if (!textarea.value.length) {
				showErrorTextarea(textarea, `Поле обязательно для заполнения и минимальное количество символов - ${minLengthTextareaField}`);
				stateBtn(btn, 'Отправить');
				return;
			}
		}
		// если флажок не установлен - фронт
		// if (!agree.checked) {
		// 	showErrorAgree(agree);
		// 	stateBtn(btn, 'Отправить');
		// 	return;
		// }
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
			stateBtn(btn, 'Отправить');
			if (data.answer == 'required') {
				showErrorMes(form, data.field, data.message);
				return;
			}
			console.log(data);
			form.reset();
		})
		.catch(error => {
			console.error("Ошибка отправки данных формы: " + error);
		});
		return false;
	}
})