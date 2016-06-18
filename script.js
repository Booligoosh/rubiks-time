var startDown = false;
var startUp = true;
var inspectionStarted = false;
var solveStarted = false;


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
    if (startDown === true) {
      startInspection();
    }
  }
}
