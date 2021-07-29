const fontsArr = [
    "Impact,Charcoal,sans-serif",
    "Brush Script MT, cursive",
    "Luminari, fantasy",
    "Comic Sans MS, cursive",
    "American Typewriter, serif"
];

const fontWeight = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
];


const beautifyBtn = document.getElementById('beautifierBtn');
const body = document.querySelector('body');
const name = document.getElementById('name');



beautifyBtn.addEventListener('click', function () {
    let randomFontFamily = fontsArr[Math.floor(Math.random() * fontsArr.length)];
    let randomFontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)];


    beautifyBtn.style.color = randomColor()
    beautifyBtn.style.backgroundColor = randomColor()
    name.style.color = beautifyBtn.style.backgroundColor
    body.style.backgroundColor = randomColor()

    name.style.fontFamily = randomFontFamily
    name.style.fontWeight = randomFontWeight
    name.style.opacity = Math.random()
})





