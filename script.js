var startDown = false;
var startUp = false;
var inspectionStarted = false;
var solveStarted = false;
var inspection;
var inspectionTimer;


function startInspection() {
  var x = 1;  // 1 Second
  inspection = inspection - 1;
  document.getElementById("numbers").innerHTML = inspection.toString();
  if (inspection === 0) {
    startTimer();
    clearTimeout(inspectionTimer);
  }
  inspectionTimer = setTimeout(startInspection, x*1000);
}

function spaceDown() {
  if (event.keyCode === 32) {
    if (startDown === false) {
      startDown = true;
    }
    if (inspectionStarted === true) {
      startTimer();
    }
    if (solveStarted === true) {
      stopTimer();
    }
  }
}

function spaceUp() {
  if (event.keyCode === 32) {
    if (startDown === true && inspectionStarted === false) {
      inspection = 16;
      startInspection();
    }
  }
}
