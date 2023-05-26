import langs from './translate';
let param = new URLSearchParams(location.search.substring(1)).get('lang');

document.addEventListener('alpine:init', (data) => {
	Alpine.data('data', () => ({
		param,
		langs: JSON.parse(langs),
		init() {
			if(!this.param){
				this.lang = this.langs.ru;
				this.param = 'ru';
			}else if(!Object.keys(this.langs).includes(this.param)){
				this.lang = this.langs.ru;
				this.param = 'ru';
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
	Alpine.store('state', {
		param,
		// isModalOpen: false,
		// isTypeModalOpen: false,
		// isResponseModalOpen: false,
	})
})