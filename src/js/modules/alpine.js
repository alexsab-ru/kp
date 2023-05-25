document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
        param: new URLSearchParams(location.search.substring(1)).get('lang'),
        async init() {            
            await fetch('data/translate.json')
            .then(response => response.json())
            .then(async data => {
                if(!this.param){
                    this.lang = await data.ru
                    this.param = 'ru'
                }else if(!Object.keys(data).includes(this.param)){
                    this.lang = await data.ru
                    this.param = 'ru'
                }else{
                    this.lang = await data[this.param]
                }
                console.log(this.param);
            })            
        },
        lang: {},
        findWords(str, key, slice = 0, target = ' '){
            if(str !== undefined){
                try {
                    if(str){
                        if(slice){
                            return str.split(target).slice(slice).join(' ')
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
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false,
	})
})