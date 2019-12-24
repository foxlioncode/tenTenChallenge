// - <https://momentjs.com/>

// Render Current Time
// var currentTime = document.getElementById('current-time');

// var counter = 0

var getCurrentTime = () => {
  // console.log('getCurrentTime()');
  currentTime.innerHTML = counter;
  counter++;
  // currentTime.innerHTML = moment().local();
  // console.log(moment().local());
};

// setTimeout(console.log('YOLO'), 10000);
// setInterval(getCurrentTime(), 1000);

function startTime() {
  var today = moment.tz("Europe/Copenhagen");
  document.getElementById("watch2").innerHTML = today.format("HH:mm:ss");
  document.getElementById("watch1").innerHTML = today.format("DD/MM/YYYY");
  var t = setTimeout(startTime, 500);
}

startTime();
