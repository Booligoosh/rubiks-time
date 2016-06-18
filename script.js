var startDown = false;
var startUp = false;
var inspectionStarted = false;
var solveStarted = false;
var inspection;
var inspectionInterval;
var inspectionTimer;
var solve;
var solveInterval;
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
  inspectionInterval = 1;  // 1 Second
  inspection = inspection - 1;
  document.getElementById("numbers").innerHTML = inspection.toString();
  if (inspection === 0) {
    solve = 0;
    solveStarted = true;
    startSolve();
    clearTimeout(inspectionTimer);
  }
  inspectionTimer = setTimeout(startInspection, inspectionInterval*1000);
}

function stopInspection() {
  clearTimeout(inspectionTimer);
}

function startSolve() {
  solveInterval = 10;  // 10 thousandths of a second (1 hundredth)
  solve = solve + 1;
  document.getElementById("numbers").innerHTML = solve.toString();
  solveTimer = setTimeout(startSolve, solveInterval);
}

function stopSolve() {
  clearTimeout(solveTimer);
}

function spaceDown() {
  if (event.keyCode === 32) {
    if (startDown === false) {
      showScreen2();
      startDown = true;
    }
    if (solveStarted === true) {
      stopSolve();
    }
    if (inspectionStarted === true && solveStarted === false) {
      solve = 0;
      solveStarted = true;
      startSolve();
      clearTimeout(inspectionTimer);
    }
  }
}

function spaceUp() {
  if (event.keyCode === 32) {
    if (startDown === true && inspectionStarted === false) {
      inspection = 16;
      inspectionStarted = true;
      startInspection();
    }
  }
}
