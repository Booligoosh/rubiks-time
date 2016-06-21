if (document.cookie === "") {
  var startDown = false;
  var startUp = false;
  var inspectionStarted = false;
  var solveStarted = false;
  var currentScreen = 1;
  var prevScreen;
  var screenBeforeStats;
  var backgroundNum = 0;
  var backgroundRGBs = ["229, 57, 53", "244, 81, 30", "57, 73, 171", "67, 160, 71", "255, 179, 0", "117, 117, 117"];
  var backgroundNames = ["Red", "Orange", "Blue", "Green", "Yellow", "Grey"];
  var backgroundRGB = "229, 57, 53";
  var backgroundName = "Red";
  var solves = [];
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
  var solvesListLoop;
  var chartLoop;
  var chartArray;
}
else {
  //Normal init with cookie vars missing
  var startDown = false;
  var startUp = false;
  var inspectionStarted = false;
  var solveStarted = false;
  var currentScreen = 1;
  var prevScreen;
  var screenBeforeStats;
  var backgroundRGBs = ["229, 57, 53", "244, 81, 30", "57, 73, 171", "67, 160, 71", "255, 179, 0", "117, 117, 117"];
  var backgroundNames = ["Red", "Orange", "Blue", "Green", "Yellow", "Grey"];
  var backgroundRGB;
  var backgroundName;
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
  var solvesListLoop;
  var chartLoop;
  var chartArray;
  //Cookie vars
  var cookiesList = document.cookie.split("|");
  var inspectionStartOn = Number(cookiesList[1]);
  document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
  var backgroundNum = Number(cookiesList[2]);
  backgroundChange();
  var solves = cookiesList[3].split(',');
}

function showScreen(num) {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "none";
  document.getElementById("screen4").style.display = "none";
  document.getElementById("screen5").style.display = "none";
  document.getElementById("screen6").style.display = "none";
  document.getElementById("screen" + num).style.display = "block";
  prevScreen = currentScreen;
  currentScreen = num;
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
  clearTimeout(inspectionTimer);
  solveInterval = 10;  // 10 thousandths of a second (1 hundredth)
  solve = solve + 1;
  document.getElementById("numbers").innerHTML = clockify(solve);
  solveTimer = setTimeout(startSolve, solveInterval);
}

function stopSolve() {
  clearTimeout(solveTimer);
  solves.push(solve);
  updateCookies();
  document.getElementById("screen2sub").style.display = "block";
  document.getElementById("screen2sub").innerHTML = "Ready";
  document.getElementById("numbers").innerHTML = clockify(solves[solves.length - 1]);
  newSolve();
}

function clockify(num) {
  var minRaw = num / 6000;
  var min = Math.floor(minRaw);
  var secRaw = (minRaw - min) * 60;
  var sec = Math.floor(secRaw);
  var hundRaw = (secRaw - sec) * 100;
  var hund = Math.floor(hundRaw);
  if (min.toString().length <  2) {
    min = "0" + min;
  }
  if (sec.toString().length <  2) {
    sec = "0" + sec;
  }
  if (hund.toString().length <  2) {
    hund = "0" + hund;
  }
  return(min + ":" + sec + ":" + hund);
}

function spaceDown() {
  if (event.keyCode === 32) {
    if (startDown === false) {
      showScreen(2);
      document.getElementById("screen2sub").style.display = "none";
      document.getElementById("numbers").innerHTML = "Ready";
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
    document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/left.svg";
    showScreen(3);
  }
  else {
    document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/gear.svg";
    showScreen(prevScreen);
  }
}

function statsClicked() {
  if (document.getElementById("screen4").style.display === "none" && document.getElementById("screen5").style.display === "none" && document.getElementById("screen6").style.display === "none") {
    document.getElementById("stats").src = "https://booligoosh.github.io/rubiks-time/left.svg";
    screenBeforeStats = currentScreen;
    showScreen(4);
  }
  else if (document.getElementById("screen4").style.display === "none") {
    showScreen(4);
  }
  else {
    document.getElementById("stats").src = "https://booligoosh.github.io/rubiks-time/stats.svg";
    showScreen(screenBeforeStats);
  }
}

function solvesList() {
  document.getElementById("solveslist").innerHTML = "";
  solvesListLoop = -1;
  while (solvesListLoop < solves.length - 1) {
    solvesListLoop = solvesListLoop + 1;
    addToSolvesDisplay(clockify(solves[solvesListLoop]));
  }
  showScreen(5);
}

function moreStats() {
  chartArray = [['Solve number', 'Time (seconds)']];
  chartLoop = 0;
  while (chartLoop < solves.length) {
    chartArray.push(["Solve " + (chartLoop + 1), Number(solves[chartLoop]) / 100]);
    chartLoop = chartLoop + 1;
  }
  showScreen(6);
  //google.charts.load('current', {'packages':['corechart']});
  //google.charts.setOnLoadCallback(drawChart);
  drawChart();
}

function addToSolvesDisplay(data) {
  var h2 = document.createElement("h2");
  var t = document.createTextNode(data);
  h2.appendChild(t);
  document.getElementById("solveslist").appendChild(h2);
  document.getElementById("solvescount").innerHTML = solves.length + " solves so far.";
}

function iPlus() {
  inspectionStartOn = inspectionStartOn + 1;
  document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
  updateCookies();
}

function iMinus() {
  if (inspectionStartOn != 0) {
    inspectionStartOn = inspectionStartOn - 1;
    document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
    updateCookies();
  }
}

function cLeft() {
  backgroundNum = backgroundNum - 1;
  if (backgroundNum === -1) {
    backgroundNum = 5;
  }
  backgroundChange();
  updateCookies();
}

function cRight() {
  backgroundNum = backgroundNum + 1;
  if (backgroundNum === 6) {
    backgroundNum = 0;
  }
  backgroundChange();
  updateCookies();
}

function backgroundChange() {
  backgroundRGB = backgroundRGBs[backgroundNum];
  backgroundName = backgroundNames[backgroundNum];
  document.getElementById("body").style = "background-image: linear-gradient( rgba(" + backgroundRGB + ", 0.75), rgba(" + backgroundRGB + ", 0.75) ), url('https://booligoosh.github.io/rubiks-time/beach.jpg');";
  document.getElementById("color").innerHTML = backgroundName;
}

function updateCookies() {
    document.cookie = "cookies= |" + inspectionStartOn + "|" + backgroundNum + "|" + solves.join();
}

function newSolve() {
  startDown = false;
  startUp = false;
  inspectionStarted = false;
  solveStarted = false;
}

//GOOGLE CHARTS SCRIPTS
      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartArray);

        var options = {
          title: 'Solves over time',
          //curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph'));

        chart.draw(data, options);
      }
