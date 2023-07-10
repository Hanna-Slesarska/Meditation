
const timer = 5;
let amountTimer = timer * 60;

function caculateTime() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTimer/60);
    let seconds = amountTimer%60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdown.textContent = `${minutes} : ${seconds}`;
        amountTimer--;
        if(amountTimer < 0) {
            stopTimer();
            amountTimer = 0;
        }
  
        function stopTimer() {
            clearInterval(timerID);
        }
}
let timerID = setInterval(caculateTime, 1000);


const button = document.querySelector("#myButton");
button.addEventListener('click', function() {
    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
})