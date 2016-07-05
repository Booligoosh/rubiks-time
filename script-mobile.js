if (localStorage.rubiks == undefined) {
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
  localStorage.rubiks = true;
}
else {
  //Normal init with localStorage vars missing
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
  //localStorage vars
  if (typeof(Storage) !== "undefined") {
    var inspectionStartOn = Number(localStorage.rubiksInspectionStartOn);
    document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
    var backgroundNum = Number(localStorage.rubiksBackgroundNum);
    backgroundChange();
    var solves = localStorage.rubiksSolves.split(',');
  }
  else {
    var cookiesList = document.cookie.split("|");
    var inspectionStartOn = Number(cookiesList[1]);
    document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
    var backgroundNum = Number(cookiesList[2]);
    backgroundChange();
    var solves = cookiesList[3].split(',');
  }

}

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

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
  updateStorage();
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
  return(min + ":" + sec + "." + hund);
}

function spaceDown() {
  if (currentScreen === 1 || currentScreen === 2) {
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
  if (currentScreen === 1 || currentScreen === 2) {
    if (startDown === true && inspectionStarted === false) {
      inspection = inspectionStartOn + 1;
      inspectionStarted = true;
      startInspection();
    }
  }
}

function gearClicked() {
  if (document.getElementById("screen4").style.display === "none" && document.getElementById("screen5").style.display === "none" && document.getElementById("screen6").style.display === "none") {
    if (document.getElementById("screen3").style.display === "none") {
      document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/left.svg";
      showScreen(3);
    }
    else {
      document.getElementById("gear").src = "https://booligoosh.github.io/rubiks-time/gear.svg";
      showScreen(prevScreen);
    }
  }
}

function statsClicked() {
  if (document.getElementById("screen3").style.display === "none") {
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
    chartArray.push(["Solve " + (chartLoop + 1) + " - " + clockify(Number(solves[chartLoop])), Number(solves[chartLoop]) / 100]);
    //OLD CHART FORMAT: chartArray.push(["Solve " + (chartLoop + 1), Number(solves[chartLoop]) / 100]);
    chartLoop = chartLoop + 1;
  }
  showScreen(6);
  document.getElementById("average").innerHTML = "Average - " + clockify(averageOfArray(solves));
  if (solves.length >= 5) {
    var averagesOfFive = averageOfFivesOfArray(solves);
    document.getElementById("currentaverageof5").innerHTML = "Current average of 5 - " + clockify(averagesOfFive[averagesOfFive.length - 1]);
    document.getElementById("bestaverageof5").innerHTML = "Best average of 5 - " + clockify(Array.min(averagesOfFive));
  }
  if (solves.length >= 12) {
    var averagesOfTwelve = averageOfTwelvesOfArray(solves);
    document.getElementById("currentaverageof12").innerHTML = "Current average of 12 - " + clockify(averagesOfTwelve[averagesOfTwelve.length - 1]);
    document.getElementById("bestaverageof12").innerHTML = "Best average of 12 - " + clockify(Array.min(averagesOfTwelve));
  }
  drawChart();
}

function averageOfArray(array) {
  var total = 0;
  var averageLoop = 0;
  while (averageLoop < array.length) {
    total = total + Number(array[averageLoop]);
    averageLoop = averageLoop + 1;
  }
  return(total / array.length);
}

function averageOfFivesOfArray(array) {
  var fiveArray = 0;
  var fiveLoop = 0;
  var averagesOfFive = [];
  while (fiveLoop < array.length - 4) {
    fiveArray = [Number(array[fiveLoop]), Number(array[fiveLoop + 1]), Number(array[fiveLoop + 2]), Number(array[fiveLoop + 3]), Number(array[fiveLoop + 4])];
    averagesOfFive.push(averageOfArray(fiveArray));
    fiveLoop = fiveLoop + 1;
  }
  return(averagesOfFive);
}

function averageOfTwelvesOfArray(array) {
  var twelveArray = 0;
  var twelveLoop = 0;
  var averagesOfTwelve = [];
  while (twelveLoop < array.length - 11) {
    twelveArray = [Number(array[twelveLoop]), Number(array[twelveLoop + 1]), Number(array[twelveLoop + 2]), Number(array[twelveLoop + 3]), Number(array[twelveLoop + 4]), Number(array[twelveLoop + 5]), Number(array[twelveLoop + 6]), Number(array[twelveLoop + 7]), Number(array[twelveLoop + 8]), Number(array[twelveLoop + 9]), Number(array[twelveLoop + 10]), Number(array[twelveLoop + 11])];
    averagesOfTwelve.push(averageOfArray(twelveArray));
    twelveLoop = twelveLoop + 1;
  }
  return(averagesOfTwelve);
}

function addToSolvesDisplay(data) {
  var h6 = document.createElement("h6");
  var att1 = document.createAttribute("id");
  att1.value = "solve" + document.getElementsByTagName("h6").length;
  h6.setAttributeNode(att1);
  var att2 = document.createAttribute("onclick");
  att2.value = "deleteSolve(" + document.getElementsByTagName("h6").length + ")";
  h6.setAttributeNode(att2);
  var t = document.createTextNode(data);
  h6.appendChild(t);
  document.getElementById("solveslist").appendChild(h6);
  document.getElementById("solvescount").innerHTML = solves.length + " solves so far.";
}

function iPlus() {
  inspectionStartOn = inspectionStartOn + 1;
  document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
  updateStorage();
}

function iMinus() {
  if (inspectionStartOn != 0) {
    inspectionStartOn = inspectionStartOn - 1;
    document.getElementById("inspection").innerHTML = inspectionStartOn.toString();
    updateStorage();
  }
}

function cLeft() {
  backgroundNum = backgroundNum - 1;
  if (backgroundNum === -1) {
    backgroundNum = 5;
  }
  backgroundChange();
  updateStorage();
}

function cRight() {
  backgroundNum = backgroundNum + 1;
  if (backgroundNum === 6) {
    backgroundNum = 0;
  }
  backgroundChange();
  updateStorage();
}

function backgroundChange() {
  backgroundRGB = backgroundRGBs[backgroundNum];
  backgroundName = backgroundNames[backgroundNum];
  document.getElementById("body").style = "background-image: linear-gradient( rgba(" + backgroundRGB + ", 0.75), rgba(" + backgroundRGB + ", 0.75) ), url('https://booligoosh.github.io/rubiks-time/beach.jpg');";
  document.getElementById("color").innerHTML = backgroundName;
}

function deleteSolve(index) {
  var r = confirm("You have chosen to delete solve " + Number(index + 1) + " - " + clockify(solves[index]) + "\nAre you sure you want to delete it?");
  if (r == true) {
    solves.splice(index, 1);
    updateStorage();
    solvesList();
  } else {
    
  }
}

function updateStorage() {
    if (typeof(Storage) !== "undefined") {
      localStorage.rubiksInspectionStartOn = inspectionStartOn;
      localStorage.rubiksBackgroundNum = backgroundNum;
      localStorage.rubiksSolves = solves.join();
    } else {
      document.cookie = "cookies= |" + inspectionStartOn + "|" + backgroundNum + "|" + solves.join();
    }
    
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
