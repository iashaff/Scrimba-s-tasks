const author = document.getElementById('author');
const currency = document.getElementById('currency')
const timeEl = document.querySelector('.time')
const weatherEl = document.getElementById('weather')



// background //

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=city")
.then(response => response.json())
.then(data => {
    let url = data.urls.full
    document.body.style.backgroundImage = `url('${url}')`
    author.textContent = `By: ${data.user.name}`
})
.catch(err => {
    document.body.style.backgroundImage = `url('mountain.jpg')`
    author.textContent = ` By: Casey Horner`
})

// currency //

fetch("https://www.cbr-xml-daily.ru/daily_json.js")
.then(res => res.json())
.then(data => {
    currency.innerHTML = `   <p> ＄${Math.round(data.Valute.USD.Value)} rub </p>
                             <p> € ${Math.round(data.Valute.EUR.Value)} rub</p>
                             <p> ¥ ${Math.round(data.Valute.CNY.Value / data.Valute.CNY.Nominal)} rub</p>`
                            
})
.catch(err => {
    crypto.innerHTML = `<p>Crypto not found</p>`
})



//Time//

function updateTime () {
   const date = new Date()
   timeEl.textContent = date.toLocaleTimeString('en-us', {timeStyle: "short"})
}

setInterval( updateTime, 1000) 

// Weather //

navigator.geolocation.getCurrentPosition((position) => {
 fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
.then(res => res.json())
.then(data => {
   const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   weatherEl.innerHTML = `<div class="temp">
                               <img src="${iconUrl}"/>
                               <p>${Math.round(data.main.temp)}°</p>
                           </div>
                           <p class="location">${data.name}</p>`
  
})
.catch(err => {
   weatherEl.innerHTML = `<p>Not available</p>`
})

})
