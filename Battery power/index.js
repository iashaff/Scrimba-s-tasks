const energyLevel = document.getElementById('energy');
const action = document.getElementById('action');
const playMusic = document.getElementById('play');
const playGame = document.getElementById('game');
const charge = document.getElementById('charging');
const stopCharge = document.getElementById('charge-end')



//Set timer for spending battery energy

 let timerId = setInterval(spendEnergy, 1000);


 function spendEnergy() {
     energyLevel.value -= 0.2
 }



let chargeTime //variable for the charging interval
let musicTime //variable for the music interval
let gameTime //variable for the game interval

// Charging battery
charge.addEventListener('click', function (){
    clearInterval(timerId)
    clearInterval(musicTime)
    clearInterval(gameTime)
    
    chargeTime = setInterval(function(){
            energyLevel.value += 0.5
    }, 1000)          
})



playMusic.addEventListener('click', function() {
    clearInterval(timerId)
    clearInterval(chargeTime)
    clearInterval(gameTime)
    
    musicTime = setInterval(function(){
        energyLevel.value -= 0.4
    }, 1000)
})

playGame.addEventListener('click', function() {
    clearInterval(timerId)
    clearInterval(musicTime)
    clearInterval(chargeTime)
    
    gameTime = setInterval(function(){
        
        energyLevel.value -=0.7
    }, 1000)
})

stopCharge.addEventListener('click', function(){
    clearInterval(chargeTime)
    timerId = setInterval(spendEnergy, 1000)
})