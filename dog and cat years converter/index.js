
let years = document.getElementById('input');
let resultYears = document.getElementById('result');
let convertDogButton = document.getElementById('dogbtn');
let convertCatButton = document.getElementById('catbtn');
let counter = 1;

/*
For dog years convertor was used this formula:
You need to multiply the natural logarithm of the dog's age by 16 and add 31. This formula gives a very accurate match for the age of a person and a dog.
*/

convertDogButton.addEventListener("click", () => {
    if (isNaN(years.value) == false && years.value >= 1 && years.value <= 100) {
        counter = 16 * Math.log(years.value) + 31;
        resultYears.innerHTML = `<h1>I'm  ${Math.round(counter)} years dog old</h1>` + `<img src="image/dog.jpg">`
    } else if (years.value > 100) {
        resultYears.innerHTML = `<h1>Believe me, you shouldn't know it!</h1>` + `<img src="image/old-dog.jpg">`
    } else resultYears.innerHTML = `<h1>Sorry, I need a number from 1 to count</h1>`
});

/*
For cat years convertor was used this formula:
The first year of a cat's life is equal to the whole 15 years of a person's life, the second is equal to 24 years of life, and every subsequent year you simply add 4 years of life.
*/

convertCatButton.addEventListener("click", () => {
    if (isNaN(years.value) == true || years.value < 1) {
        resultYears.innerHTML = `<h1>Sorry, I need a number from 1 to count</h1>`
    } else if (years.value > 100) {
        resultYears.innerHTML = `<h1>Believe me, you shouldn't know it!</h1>` + `<img src="image/scared-cat.jpg">`
    } else if (years.value == 1) {
        resultYears.innerHTML = `<h1>I'm 15 years cat old</h1>` + `<img src="image/cat.jpg">`
    } else if (years.value == 2) {
        resultYears.innerHTML = `<h1>I'm 24 years cat old</h1>` + `<img src="image/cat.jpg">`
    } else {
        const catAge = 24
        counter = catAge + (Number(years.value) - 2) * 4
        resultYears.innerHTML = `<h1>I'm  ${counter} years cat old</h1>` + `<img src = "image/cat.jpg">`
    }
})

