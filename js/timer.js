// ====================================================================================================
function renderTimeDisplay() {
  var currentTime = new Date();
  document.getElementById("current-time").innerHTML = `
        ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}
        `;
  // document.getElementById('current-time').innerHTML = currentTime;
  // document.getElementById('current-time').innerHTML = currentTime.getTime();
}

// setInterval(renderTimeDisplay,1000);

// ====================================================================================================

var totalSeconds = 0;
var timerCountUp;
var alreadyRunning = false;

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
  //   renderTimer('stopTimer')
  alreadyRunning = false;
  clearInterval(timerCountUp);
}

function resetTimer() {
  renderTimer("resetTimer");
  stopTimer();
  totalSeconds = 0;
  //   renderTimer('RESET');
  renderTimer("RESET");
  setTimeout(() => {
    renderTimer(totalSeconds);
  }, 5000);

  //   setTimeout(renderTimer(totalSeconds), 5000);
}

function renderTimer(item) {
  document.getElementById("current-time").innerHTML = item;
}
