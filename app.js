// Timing Events Exercise

// 1
setTimeout(() => {
    const firstDiv = document.querySelector(`#first`);
    const p = document.createElement(`p`);
    p.innerText = `Hi`;
    firstDiv.append(p);
}, 1000);

// 2
setTimeout(() => {
    const timeoutDiv = document.querySelector(`#timeout-nesting`);
    const oneP = document.createElement(`p`);
    oneP.innerText = "One";
    timeoutDiv.append(oneP);
    setTimeout(() => {
        const twoP = document.createElement(`p`);
        twoP.innerText = "Two";
        timeoutDiv.append(twoP);
    }, 1000);
}, 2000);

// 3a
let time = 1;
const clock = setInterval(() => {
    console.log(time);
    time++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(clock);
});

// BONUS
// 4
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

setInterval(() => {
    startingSeconds--;
    const minutes = Math.floor(startingSeconds / 60);
    const seconds = startingSeconds % 60;
    // p4.innerText = `${minutes}:${seconds}`;

    if (seconds < 10) {
        p4.innerText = `${minutes}:0${seconds}`;
    } else {
        p4.innerText = `${minutes}:${seconds}`;
    }

    if (startingSeconds === 0){
        p4.innerText = `TIME IS UP`;
        clearInterval(countdown);
    }
}, 1000);