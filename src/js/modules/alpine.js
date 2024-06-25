import langs from './translate';
const locale = new URLSearchParams(location.search.substring(1)).get('lang');
if(locale){
	localStorage.setItem('lang', locale)
}
let param = localStorage.getItem('lang') || 'ru';

document.addEventListener('alpine:init', (data) => {
	Alpine.data('data', () => ({
		param,
		langs: JSON.parse(langs),
		init() {
			if(!this.param){
				this.lang = this.langs.ru;
				this.param = 'ru';
				localStorage.setItem('lang', 'ru')
			}else if(!Object.keys(this.langs).includes(this.param)){
				this.lang = this.langs.ru;
				this.param = 'ru';
				localStorage.setItem('lang', 'ru')
			}else{
				this.lang = this.langs[this.param];
			}
		},
		lang: {},
		findWords(str, key, slice = 0, target = ' '){
			if(str !== undefined){
				try {
					if(str){
						if(slice){
							return str.split(target).slice(slice).join(' ');
						}
						return str.split(target)[key];
					}
					
				} catch (error) {
				   console.log(error); 
				}
			}
		}
	}))
	Alpine.data('dealerForm', () => ({
		dealers: [],
		showAlert: false,
		alertMessage: '',
		toggleAlert(show) {
			this.showAlert = show;
		},
		addDealer() {
			this.toggleAlert(false);
			this.dealers.push({
				name: "",
				website: "",
				legal_name: "",
				legal_inn: "",
				legal_city: "",
				legal_city_where: "",
				brand: "",
				address_short: "",
				address_full: "",
				phone: "",
				email: "",
				shedule: "",
				map: {
						zoom: "",
						balloon: "",
						position: []
				},
				avn_feed: "",
				emails: {
						dealer: [],
						marketing: [],
				},
				links: {
						maps: [],
						social: [],
						messanger: [],
						other: [],
				}
			});
		},
		removeDealer(index) {
			this.dealers.splice(index, 1);
		},
		addEmail(category) {
			this.dealer.emails[category].push('');
		},
		removeEmail(category, index) {
			this.dealer.emails[category].splice(index, 1);
		},
		addLink(category) {
			this.dealer.links[category].push('');
		},
		removeLink(category, index) {
			this.dealer.links[category].splice(index, 1);
		},
		async submitForm() {
			try {
				const response = await fetch('https://alexsab.ru/sites/save/qr/', {
						method: 'POST',
						mode: 'cors',
						cache: 'no-cache',
						credentials: 'same-origin',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(this.dealers)
				});

				if (!response.ok) {
						throw new Error('Ошибка при отправке формы');
				}

				alert('Данные успешно отправлены');
				this.toggleAlert(true);
				this.alertMessage = 'Данные успешно отправлены';
			} catch (error) {
				alert(error);
				this.toggleAlert(true);
				this.alertMessage = 'Данные успешно отправлены';
			}
		}
	}))
	Alpine.store('state', {
		param,
		// isModalOpen: false,
		// isTypeModalOpen: false,
		// isResponseModalOpen: false,
	})
})