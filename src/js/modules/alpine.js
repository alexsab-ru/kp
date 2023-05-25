document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
        async init() {            
            await fetch('data/translate.json')
            .then(response => response.json())
            .then(async data => {
                const param = new URLSearchParams(location.search.substring(1));
                if(!param.get('lang')){
                    this.lang = await data.ru
                }else if(!Object.keys(data).includes(param.get('lang'))){
                    this.lang = await data.ru
                }else{
                    this.lang = await data[param.get('lang')]
                }
            })            
        },
        lang: {},
        findWord(str, key, slice = 0){
            if(str !== undefined){
                try {
                    if(str){
                        if(slice){
                            return str.split(' ').slice(slice).join(' ')
                        }
                        return str.split(' ')[key];
                    }
                    
                } catch (error) {
                   console.log(error); 
                }
            }
        }
	}))
	Alpine.store('state', {
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false,
	})
})