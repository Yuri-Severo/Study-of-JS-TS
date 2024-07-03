const clock = document.querySelector('.clock');
const initialize = document.querySelector('.initialize');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');


initialize.addEventListener('click', () => {
    const time = createHour();
    timeCounter(time);
})

pause.addEventListener('click', () => {
    alert('pausing...');
})

reset.addEventListener('click', () => {
    alert('reseting...');
})

function timeCounter(time) {
    time = setInterval( () => {
        clock.innerHTML; 
    },1000)

    setTimeout( () => clearInterval(time), 5000);
}

function createHour() {
    const date = new Date();
    date.toLocaleTimeString('pt-Br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    date.setHours(0, 0, 0);
    const time = date.toLocaleTimeString();
    return time;
}