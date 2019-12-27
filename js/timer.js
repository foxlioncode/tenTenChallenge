function renderTimeDisplay () {
    var currentTime = new Date()
    document.getElementById('current-time').innerHTML = currentTime;
}

setInterval(renderTimeDisplay,1000);