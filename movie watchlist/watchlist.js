const watchList = JSON.parse(localStorage.getItem("watchlist")) || []
const watchListDiv = document.getElementById('movie-container')

if(watchList.length === 0){
    watchListDiv.innerHTML = `<p class="empty-watchlist">Your watchlist is looking a little                                     empty...</p>
                            <div class="empty-block">
                                <a href="index.html"><img src="images/add.png"/></a>
                                <p>Let’s add some movies!</p>
                            </div>`
} else renderWatchlist()


async function renderWatchlist(){
    let watchListHtml = ''
         for( let item of watchList){
             const response = await fetch(`https://www.omdbapi.com/?i=${item}&page=1&apikey=76667b48`)
             const data = await response.json()
             watchListHtml += `<div class="movie-description">
                                    <img class="poster" src="${data.Poster}"/>
                                    <div class="movie-info">
                                        <div class="main-info">
                                            <h3>${data.Title}</h3>
                                            <img class="star" src="images/star.png"/>         
                                            <p class="rating">${data.imdbRating}</p>
                                    </div>
                                    <div class="specification">
                                         <p>${data.Runtime}</p>
                                         <p>${data.Genre}</p>
                                              <div class="remove-div">
                                                  <img class="remove-btn" id="${data.imdbID}"
                                                  onclick="removeMovie(${data.imdbID})"
                                                  src="images/remove.png"/>
                                                 <p>Remove</p>
                                             </div>      
                                     </div>
                                     <p class="plot">${data.Plot}</p>
                                 </div>
                        </div>`
         }
        
        watchListDiv.innerHTML = watchListHtml
}

//removing movies//

function removeMovie(data) {
    watchList.map(item => {
        if(data.id === item){
            watchList.splice(item, 1)
        }
    })
    localStorage.setItem("watchlist", JSON.stringify(watchList))
    renderWatchlist()
    if(watchList.length === 0){
        location.reload()
    }
}