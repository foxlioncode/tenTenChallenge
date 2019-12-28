// ====================================================================================================
function renderTimeDisplay () {
    var currentTime = new Date()
    document.getElementById('current-time').innerHTML = 
        `
        ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}
        `;
    // document.getElementById('current-time').innerHTML = currentTime;
    // document.getElementById('current-time').innerHTML = currentTime.getTime();
}

// setInterval(renderTimeDisplay,1000);

// ====================================================================================================



var totalSeconds = 0;

function increaseSeconds () {
    totalSeconds++
    document.getElementById('current-time').innerHTML = totalSeconds;
}



// secondsDisplay();

var startTimer = () => {
    var secondsDisplay = setInterval(increaseSeconds(), 1);
}

function renderTimer() {
}

function stopTimer () {
    clearInterval(startTimer);
}

function resetTimer () {
}


