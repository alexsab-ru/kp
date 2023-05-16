document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
        lang: {},
        getLang() {
            fetch('data/translate.json')
            .then(response => response.json())
            .then(data => {
                const param = new URLSearchParams(location.search.substring(1));
                if(!param.get('lang')){
                    this.lang = data.ru
                }else if(!Object.keys(data).includes(param.get('lang'))){
                    this.lang = data.ru
                }else{
                    this.lang = data[param.get('lang')]
                }
            })
        }
	}))
	Alpine.store('state', {
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false,
	})
})