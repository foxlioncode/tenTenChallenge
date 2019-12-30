// ====================================================================================================
var totalMilliSeconds = 0;
var totalSeconds = 0;
var totalMinutes = 0;
var totalHours = 0;
var leadingZero;

var timerCountUp;
var alreadyRunning = false;

function renderTimer(item) {
  document.getElementById("current-time").innerHTML = item;
}

function timerFunction() {
  totalMilliSeconds++;

  if (totalMilliSeconds == 10) {
    totalMilliSeconds = 0;
    totalSeconds++;
  } else if (totalSeconds == 60) {
    totalSeconds = 0;
    totalMinutes++;
  } else if (totalMinutes == 60) {
    totalMinutes = 0;
    totalHours++;
  }

  renderTimer(
    `${(leadingZero = (totalHours < 10) ? "0" : "")}${totalHours}h
     ${(leadingZero = (totalMinutes < 10) ? "0" : "")}${totalMinutes}m
     ${(leadingZero = (totalSeconds < 10) ? "0" : "")}${totalSeconds}s
     ${totalMilliSeconds}`
  );
}

function startTimer() {
  if (alreadyRunning) {
  } else {
    alreadyRunning = true;
    timerCountUp = setInterval(timerFunction, 100);
  }
}

function stopTimer() {
  alreadyRunning = false;
  clearInterval(timerCountUp);
  renderTimer("STOP");
  setTimeout(() => {
    renderTimer(
        `${(leadingZero = (totalHours < 10) ? "0" : "")}${totalHours}h
        ${(leadingZero = (totalMinutes < 10) ? "0" : "")}${totalMinutes}m
        ${(leadingZero = (totalSeconds < 10) ? "0" : "")}${totalSeconds}s
        ${totalMilliSeconds}`
    );
  }, 250);
}

function resetTimer() {
  stopTimer();
  totalMilliSeconds = 0;
  totalSeconds = 0;
  totalMinutes = 0;
  totalHours = 0;
  renderTimer("RESET");
  setTimeout(() => {
    renderTimer(
        `${(leadingZero = (totalHours < 10) ? "0" : "")}${totalHours}h
        ${(leadingZero = (totalMinutes < 10) ? "0" : "")}${totalMinutes}m
        ${(leadingZero = (totalSeconds < 10) ? "0" : "")}${totalSeconds}s
        ${totalMilliSeconds}`
    );
  }, 250);
}
