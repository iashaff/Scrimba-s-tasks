const getColorBtn = document.getElementById('btn')
const color = document.getElementById('color')
const select = document.getElementById('scheme-select')
const colorsDiv = document.querySelector('.color-scheme')
let colorsArr = []


function renderColors () {
    let colorsScheme = colorsArr.map((item) => {
        return `<div>
                    <div class="colors-box" style="background:${item.hex.value}"></div>
                    <p data-id=${item.hex.value}>${item.hex.value}</p>
                    </div>`
    }).join('')
    colorsDiv.innerHTML = colorsScheme
}



getColorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&mode=${select.value}&count=5`)
        .then (response => response.json())
        .then (data => {
          colorsArr =  data.colors  
          renderColors()
        })
})

colorsDiv.addEventListener('click', copyHex)

function copyHex(e) {
    let target = e.target
    if(target.tagName === 'P') {
        let copyText = e.target.dataset.id
        window.prompt('Copy to clipboard: Ctrl+C, Enter', copyText)
    } else return
}