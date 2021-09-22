// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const player1ScoreResult = document.getElementById('player1Scoreboard');
const player2ScoreResult = document.getElementById('player2Scoreboard');
const playerOrderTurn = document.getElementById('message');
const player1Dice = document.getElementById('player1Dice');
const player2Dice  = document.getElementById('player2Dice');

window.onload = whoStartGame()

function chageBtn (){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener('click', function() {
   let randomNumber =  Math.floor(Math.random() * 6) + 1
    if(player1Turn){
        player1Score += randomNumber
        player1ScoreResult.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        playerOrderTurn.textContent = "Player 2 turn"
        
        
    } else {
        player2Score += randomNumber
        player2ScoreResult.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        playerOrderTurn.textContent = "Player 1 turn"
         
    }
    
    if (player1Score >= 20){
        playerOrderTurn.textContent = "Player 1 has won!"
        chageBtn ()
    } else if (player2Score >= 20) {
        playerOrderTurn.textContent = "Player 2 has won!"
        chageBtn ()
    }
    
   player1Turn = !player1Turn
}) 


function whoStartGame(){
   player1Dice.classList.remove('active')
   player2Dice.classList.remove('active');
   let currentPlayer = Math.floor(Math.random() * 2) +1
   if (currentPlayer === 1){
       player1Turn = true
       playerOrderTurn.textContent = "Player 1 turn!"
       player1Dice.classList.add('active')
   } else if (currentPlayer === 2){
       player1Turn = false
       playerOrderTurn.textContent  = "Player 2 turn!"
       player2Dice.classList.add('active')
   }
}


function reset () {
    player1Score = 0
    player2Score = 0
    player1ScoreResult.textContent = player1Score
    player2ScoreResult.textContent = player2Score
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    playerOrderTurn.textContent = "Player 1 turn"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    whoStartGame()
}

resetBtn.addEventListener('click', reset)