
class Item {
    constructor (films) {
        let { title, poster, rating } = films;
        this.title = title;
        this.poster = poster;
        this.rating = rating;
    }
    
    render () {
        return `<div class="bkg-filmlist"><div class="filmlist">
        <img class="film-poster" src="${this.poster}" alt="${this.title}">
        <h2>${this.title}</h2>
        <p>${this.rating}</p>
        </div><div>`
    }
}

 class ItemList {
     constructor (container = '.filmbase') {
         this.films = [];
         this.base = [];
         this.container = document.querySelector(container);
         this._fetchBase ();
         this._render ();
     }
     
     _fetchBase () {
         this.films = 
           [{ title: 'Jaws', poster: 'img/jaws.jpg', rating: '7/10' },    
            { title: 'Aliens', poster: 'img/alien.jpg', rating: '10/10' },    
            { title: 'Bad Santa', poster: 'img/badsanta.jpg', rating: '7/10' },    
            { title: 'Casablanca', poster: 'img/casablanca.jpg', rating: '7/10' },    
            { title: 'Ghost', poster: 'img/ghost.jpg', rating: '7/10' },    
            { title: 'Twister', poster: 'img/twister.jpg', rating: '7/10' },      
            { title: 'Legally Blonde', poster: 'img/legallyblonde.jpg', rating: '7/10' },    
            { title: 'Elf', poster: 'img/elf.jpg', rating: '7/10' },    
            { title: 'Zoolander', poster: 'img/zoolander.jpg', rating: '7/10' }];
     }
     
     _render () {
         for (let filmsEl of this.films) {
             const item = new Item(filmsEl);
             this.base.push(item);
             this.container.insertAdjacentHTML('beforeend', item.render())
         }
     }
   
 }
 const list = new ItemList;



