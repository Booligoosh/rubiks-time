var startDown = false;
var startUp = false;
var inspectionStarted = false;
var solveStarted = false;
var inspection;
var inspectionTimer;
var solve;
var solveTimer;

function showScreen1() {
  document.getElementById("screen1").style.display = "block";
  document.getElementById("screen2").style.display = "none";
}

function showScreen2() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
}

function startInspection() {
  var x = 1;  // 1 Second
  inspection = inspection - 1;
  document.getElementById("numbers").innerHTML = inspection.toString();
  if (inspection === 0) {
    solve = 0;
    startTimer();
    clearTimeout(inspectionTimer);
  }
  inspectionTimer = setTimeout(startInspection, x*1000);
}

function startTimer() {
  var x = 1;  // 1 thousandth of a second
  solve = solve + 1;
  document.getElementById("numbers").innerHTML = solve.toString();
  solveTimer = setTimeout(startTimer, x);
}

function stopTimer() {
  clearTimeout(solveTimer);
}

function spaceDown() {
  if (event.keyCode === 32) {
    if (startDown === false) {
      showScreen2();
      startDown = true;
    }
    if (inspectionStarted === true) {
      solve = 0;
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
