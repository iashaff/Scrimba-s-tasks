import {characterData} from 'data.js'
import {Character} from 'character.js'

let monstersArray = ["orc", "demon", "goblin"];
let btnAttack = document.getElementById('attack-button')

function getNewMonster(){
    let nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData): {}
}


function attack(){
    wizard.setDiceHtml()
    monster.setDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if(wizard.dead){
        endGame()
    } else if (monster.dead){
        btnAttack.setAttribute("disabled","")
        if(monstersArray.length > 0){
            setTimeout(()=>{
              monster = getNewMonster() 
              render()
              btnAttack.removeAttribute("disabled")  
            },1500)
        } else {
            endGame()
            }
    }
}

function endGame(){
    btnAttack.setAttribute("disabled","")
    const endMessage = wizard.health === 0 && monster.health === 0 
        ? `No victors - all creatures are dead`
        : wizard.health > 0 ? `The Wizard Wins` 
        : `The monsters are Victorious`  
    
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️" 
        setTimeout(()=>{
              document.body.innerHTML = 
                `<div class="end-game">
                    <h2>Game Over</h2>
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>` 
        },1500)
    }

btnAttack.addEventListener('click', attack )

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

function render(){
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml() 
}

render()

