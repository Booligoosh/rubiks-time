var startDown = false;
var startUp = false;
var inspectionStarted = false;
var solveStarted = false;
var backgroundNum = 0;
var backgroundRGBs = ["229, 57, 53", "244, 81, 30", "57, 73, 171", "67, 160, 71", "255, 179, 0", "255, 255, 255"];
var backgroundNames = ["Red", "Orange", "Blue", "Green", "Yellow", "White"];
var backgroundRGB = "229, 57, 53";
var backgroundName = "Red";
var inspectionStartOn = 15;
var inspection;
var inspectionInterval;
var inspectionTimer;
var solve;
var solveMinutes;
var solveSeconds;
var solveHundredths;
var solveSecondsRaw;
var solveHundredthsRaw;
var solveInterval;
var solveTimer;

function showScreen1() {
  document.getElementById("screen1").style.display = "block";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "none";
}

function showScreen2() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
  document.getElementById("screen3").style.display = "none";
}

function showScreen3() {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "block";
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
  solveMinutes = Math.floor(solve / 6000);
  solveSeconds = Math.floor(solve / 100);
  solveSecondsRaw = solve / 100;
  solveHundredthsRaw = (solveSecondsRaw - solveSeconds) * 100;
  solveHundredths = Math.floor(solveHundredthsRaw);
  document.getElementById("numbers").innerHTML = solveMinutes + ":" + solveSeconds + ":" + solveHundredths.toPrecision(2);
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
      inspection = inspectionStartOn + 1;
      inspectionStarted = true;
      startInspection();
    }
  }
}

function gearClicked() {
  if (document.getElementById("screen3").style.display === "none") {
    document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/left.svg"
    showScreen3();
  }
  else {
    document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/gear.svg"
    showScreen1();
  }
}

function iPlus() {
  inspectionStartOn = inspectionStartOn + 1;
  document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
}

function iMinus() {
  inspectionStartOn = inspectionStartOn - 1;
  document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
}

function cLeft() {
  backgroundNum = backgroundNum - 1;
  if (backgroundNum === -1) {
    backgroundNum = 5;
  }
  backgroundChange();
}

function cRight() {
  backgroundNum = backgroundNum + 1;
  if (backgroundNum === 6) {
    backgroundNum = 0;
  }
  backgroundChange();
}

function backgroundChange() {
  backgroundRGB = backgroundRGBs[backgroundNum];
  backgroundName = backgroundNames[backgroundNum];
  document.getElementById("body").style.backgroundImage = "linear-gradient( rgba(" + backgroundRGB + ", 0.75), rgba(" + backgroundRGB + ", 0.75) ), url('http://www.planwallpaper.com/static/images/3D-Beach-Wallpaper-HD-Download.jpg');";
  document.getElementById("color").innerHTML = backgroundName;
}
