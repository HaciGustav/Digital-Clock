// =======Analog clock===========//

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const setClock = () => {
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
    const minute = (second + currentDate.getMinutes()) / 60;
    const hour = (minute + currentDate.getHours()) / 12;
    console.log(second);
    setRotation(secondHand, second);
    console.log(minute);
    setRotation(minuteHand, minute);
    console.log(hour);
    setRotation(hourHand, hour);
};
const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360);
};
setClock();

setInterval(setClock, 1000);

// =======Analog clock END===========//
// ========Digital Clock ============//
const setDigitalClock = () => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const hourDiv = document.querySelector('.hour-div');
    const minuteDiv = document.querySelector('.minute-div');
    const secondDiv = document.querySelector('.second-div');

    hourDiv.innerText = hour;
    if (hourDiv.innerText < 10) {
        hourDiv.innerText = '0' + hour;
    }
    minuteDiv.innerText = minute;
    secondDiv.innerText = second;
};
setDigitalClock();
setInterval(setDigitalClock, 1000);
