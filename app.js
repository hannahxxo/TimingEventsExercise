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
setInterval(() => {
    console.log(time);
    time++;
}, 1000);

// 3b
const stopTime = time
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(time);
});