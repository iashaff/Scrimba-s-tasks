
const myEmojis = []
const emojiContainer = document.getElementById("emojiContainer");
const pushBtn = document.getElementById("push-btn");
const inputEl = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmoji(){
    let emojiSpan = ""
    
    for (let i = 0; i < myEmojis.length; i++) {
      emojiSpan += `<span>${myEmojis[i]}</span>`
} 
     emojiContainer.innerHTML = emojiSpan 
}

renderEmoji()

pushBtn.addEventListener("click", function(){
    if(inputEl.value){
        myEmojis.push(inputEl.value)
        inputEl.value = ""
    }
    renderEmoji()
})

unshiftBtn.addEventListener("click", function(){
    if(inputEl.value){
        myEmojis.unshift(inputEl.value)
        inputEl.value= ""
    }
    renderEmoji()
} )

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmoji()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmoji()
})