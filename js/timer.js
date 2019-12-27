var counter = 0;

function renderCounterDisplay () {
    document.getElementById('current-time').innerHTML = counter;
    counter++
}

setInterval(renderCounterDisplay,1000);