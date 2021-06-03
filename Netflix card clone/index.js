
let thumbUpBtn = document.querySelector(".thumbup-btn")
let thumbDownBtn = document.querySelector(".thumbdown-btn");
let plusBtn = document.querySelector(".plus-btn");
let downBtn = document.querySelector(".down-btn");
let moreInfo = document.querySelector(".hidden");
let hiddenDownBtn = document.querySelector(".hidden-down-btn");
let svg = document.querySelector(".plus-svg");
const checkSvg = `<path d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"/>`
const plusSvg = `<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>`


thumbUpBtn.onclick = () => {
    thumbUpBtn.classList.toggle("active-up");
    if (thumbDownBtn.classList.contains("active-down")) {
        thumbDownBtn.classList.remove("active-down")
    }
}

thumbDownBtn.onclick = () => {
    thumbDownBtn.classList.toggle("active-down");
    if (thumbUpBtn.classList.contains("active-up")) {
        thumbUpBtn.classList.remove("active-up")
    }
}

plusBtn.onclick = () => {
    if (svg.classList.contains("active-plus")) {
        svg.classList.remove("active-plus")
        svg.innerHTML = plusSvg;
    } else {
        svg.classList.toggle("active-plus")
        svg.innerHTML = checkSvg;
    }
}

downBtn.onclick = () => {

    if (moreInfo.classList.contains("active-block")) {
        moreInfo.classList.remove("active-block")
    } else moreInfo.classList.toggle("active-block")
}

hiddenDownBtn.onclick = () => {
    moreInfo.classList.remove("active-block");
}