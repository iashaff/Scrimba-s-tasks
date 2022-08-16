let deckID = ''
let computerScore = 0
let playerScore = 0
const newDeckBtn = document.getElementById('new-deck')
const drawCardBtn = document.getElementById('two-cards')
const cardsDiv = document.getElementById('cards-div')
const header  = document.getElementById('winner-text')
const totalCards  = document.getElementById('cards-number')
const computerScoreTitle = document.getElementById('computer-score')
const playerScoreTitle = document.getElementById('player-score')



async function handleClick() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await response.json()
    deckID = data.deck_id
    totalCards.textContent = `Remaining cards: ${data.remaining}`       
}

newDeckBtn.addEventListener("click", handleClick)
drawCardBtn.addEventListener('click', draw)

async function draw() {
    const response = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
    const data = await response.json()
    cardsDiv.children[0].innerHTML = `<img src='${data.cards[0].image}'/>` 
    cardsDiv.children[1].innerHTML = `<img src='${data.cards[1].image}'/>` 
    const winnerText = whoIsWinner(data.cards[0], data.cards[1])
    header.textContent = winnerText
    totalCards.textContent = `Remaining cards: ${data.remaining}`
    if(data.remaining === 0){
        drawCardBtn.disabled = true
        endOfGame()
    }   
}

function whoIsWinner(card1, card2){
    const valueObjects = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]

    const card1ValueIndex = valueObjects.indexOf(card1.value)
    const card2ValueIndex = valueObjects.indexOf(card2.value)

    if (card1ValueIndex === card2ValueIndex){
        return `It's a tie!`
    } else if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreTitle.textContent = `Computer score: ${computerScore}`
        return`Computer is a winner`
    } else {
        playerScore++
        playerScoreTitle.textContent = `My score: ${playerScore}`
        return`You are a winner`
    } 
}

function endOfGame() {
    if(computerScore > playerScore) {
        header.textContent = `The computer won the game!`
    } else if (playerScore > computerScore){
        header.textContent = `You won the game!`
    } else header.textContent = `It's a tie game!`

}