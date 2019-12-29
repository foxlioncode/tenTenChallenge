// ====================================================================================================
var totalSeconds = 0;
var timerCountUp;
var alreadyRunning = false;

function renderTimer(item) {
  document.getElementById("current-time").innerHTML = item;
}

function timerFunction() {
  totalSeconds++;
  renderTimer(totalSeconds);
}

function startTimer() {
  if (alreadyRunning) {
  } else {
    alreadyRunning = true;
    timerCountUp = setInterval(timerFunction, 1000);
  }
}

function stopTimer() {
  alreadyRunning = false;
  clearInterval(timerCountUp);
}

function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  renderTimer("RESET");
  setTimeout(() => {
    renderTimer(totalSeconds);
  }, 500);
}