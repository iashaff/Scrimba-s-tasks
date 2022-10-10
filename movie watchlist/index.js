const searchBtn = document.getElementById('search-btn')
const inputMovieTitle = document.getElementById('movie-title')
const movieContainer = document.getElementById('movie-container')
const textEl = document.querySelector('.exploring-text')
const movieImg = document.querySelector('.movie-icon')
const watchList = JSON.parse(localStorage.getItem("watchlist")) || []


searchBtn.addEventListener('click', searchForMovie)

 async function searchForMovie() {
   const res = await fetch(`https://www.omdbapi.com/?s=${inputMovieTitle.value}&apikey=76667b48`)
   const data = await res.json()
   
     if (data.Response === 'False'){
         movieImg.style.display = 'none'
         textEl.classList.add('no-data-initial')
         textEl.textContent = `Unable to find what you’re looking for. Please try another search.`
    } else {
       movieImg.style.display = 'none'
       textEl.style.display = 'none'
       renderMovie(data) 
    }
}

    
async function renderMovie(data) {
        
        let movieHtml = ""
        for (let movie of data.Search){
            const res = await fetch (`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=76667b48`)
            const data = await res.json()
            
            
            const {Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot, watchId} = data
             data.watchId = watchList.indexOf(movie.imdbID) === -1 ? false : true
             let text = data.watchId ? "Added" : "Wachtlist"
             let icon = data.watchId ? "images/added-icon.png" : "images/add.png"
             let addFunc = data.watchId ? null : `addMovie(${imdbID})`
            
             
            movieHtml += `<div class="movie-description">
                         <img class="poster" src="${Poster === "N/A" ? 'images/not-found.jpg' : Poster}"/>
                             <div class="movie-info">
                                  <div class="main-info">
                                     <h3>${Title}</h3>
                                     <img class="star" src="images/star.png"/>         
                                     <p class="rating">${imdbRating}</p>
                                </div>
                                      <div class="specification">
                                         <p>${Runtime}</p>
                                        <p>${Genre}</p>
                                              <div class="add-div" id="${imdbID}">
                                                  <img class="add-btn" 
                                                  onclick="${addFunc}"
                                                  src="${icon}"/>
                                                <p>${text}</p>
                                             </div>      
                                     </div>
                                     <p class="plot">${Plot}</p>
                                 </div>
                        </div>`
                        
       }
        movieContainer.innerHTML = movieHtml 
         
 }  


// adding movies in watchlist //


function addMovie(elem){
        watchList.push(elem.id)
          let addedEl = document.getElementById(elem.id)
          addedEl.children[0].src = "images/added-icon.png"
          addedEl.children[0].removeAttribute('onclick')
          addedEl.children[1].textContent = "Added"
    
      
      localStorage.setItem("watchlist", JSON.stringify(watchList))
      
}