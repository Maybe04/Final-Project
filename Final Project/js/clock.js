const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace(){
    //now const variable is not global its loacal to the method
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes /60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours /60) * 360) +90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    var time = padTwo(hours) + ":" + padTwo(minutes) + ":" + padTwo(seconds);
    const digitalClockFace = document.querySelector('.time');
    digitalClockFace.innerHTML = time;
}

function padTwo(number){
    return (number < 10 ? '0' : '') + number;
}
//1000 milliseconds is one second
setInterval(setClockFace,1000);