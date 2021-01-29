const now = () => ({
    hours: new Date().getHours(), 
    minutes: new Date().getMinutes(), 
    seconds: new Date().getSeconds()
})
console.log(now ());
const getClockTemplate = id => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`

const startClock = () => {
    document.body.innerHTML = getClockTemplate(0)
}

startClock()

const hr = document.querySelector(".clock .hour-hand");
const mn = document.querySelector(".clock .minute-hand");
const sc = document.querySelector(".clock .second-hand");

setInterval(() => {
    let time = now ();
    let houDeg =  270 + (3600 * time.hours + 60 * time.minutes + time.seconds) / 120;
    let minDeg = 270 + (60 * time.minutes + time.seconds) / 10;
    let secDeg = 270 + 6 * time.seconds;
  
hr.style.transform = `rotate(${houDeg}deg)`;
mn.style.transform = `rotate(${minDeg})deg`;
sc.style.transform = `rotate(${secDeg}deg)`;
},1000);

/*
Description:
    Your job is to fix this broken clock!
    Right now it's only right twice a day.

Skills: 
    CSS Transforms, JavaScript Dates, setTimeout()/setInterval(), HTML/CSS in JavaScript

Stretch goals: 
    - Go all out with the styling: a Grandfather clock, a cuckoo clock, an astrological clock?
    - Make a digital clock instead
    - tell the time in different  timezones/on different planets? 🪐👽

*/