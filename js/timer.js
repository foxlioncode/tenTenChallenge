const buttonLogic = require('./buttonLogic')

var testButton = document.getElementById('button01');

console.log(buttonLogic.getButtonState(testButton));

// Render Current Time
var currentTime = document.getElementById('current-time');
var counter = 0

var getCurrentTime = () => {
  // console.log('getCurrentTime()');
  currentTime.innerHTML = counter;
  counter++;
//   button01.setAttribute('buttonState', '1');
//   buttonLogic.getButtonState(button01);
  
  // currentTime.innerHTML = moment().local();
  // console.log(moment().local());
  
  setTimeout(getCurrentTime,1000)
};

// getCurrentTime();

function startTime() {
  var today = moment.tz("Europe/Copenhagen");
//   var today = moment.locale();
  document.getElementById("watch2").innerHTML = today.format("HH:mm:ss");
  document.getElementById("watch1").innerHTML = today.format("DD/MM/YYYY");
  var t = setTimeout(startTime, 500);
}

// startTime();



