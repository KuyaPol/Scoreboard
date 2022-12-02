$(document).ready(function(){
	$("#swplayerName, #swplayerName1").on('change', function(){
		$(".swData").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#displayAll, #displayAll1").click( function(){
		$("#timerOne").show();
		$("#timerTwo").show();
		$("#timerThree").show();
		$("#timerFour").show();
		$("#timerFive").show();
		$("#timerSix").show();
		$("#timerSeven").show();
		$("#timerEight").show();
		$("#timerNine").show();
		$("#timerTen").show();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displayHide, #displayHide1").click( function(){
		$("#timerOne").hide();
		$("#timerTwo").hide();
		$("#timerThree").hide();
		$("#timerFour").hide();
		$("#timerFive").hide();
		$("#timerSix").hide();
		$("#timerSeven").hide();
		$("#timerEight").hide();
		$("#timerNine").hide();
		$("#timerTen").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#displayOne, #displayOne1").click( function(){
		$("#displayOnediv").toggle();
		$("#" + $(this).val()).fadeIn(100);
	})
	$("#displayTwo, #displayTwo1").click( function(){
		$("#displayTwodiv").toggle();
		$("#displayThreediv").toggle();
		$(".swButton").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#displaypt1, #display1pt1").click( function(){
		$("#timerOne").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt2, #display1pt2").click( function(){
		$("#timerTwo").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt3, #display1pt3").click( function(){
		$("#timerThree").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt4, #display1pt4").click( function(){
		$("#timerFour").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt5, #display1pt5").click( function(){
		$("#timerFive").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt6, #display1pt6").click( function(){
		$("#timerSix").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt7, #display1pt7").click( function(){
		$("#timerSeven").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt8, #display1pt8").click( function(){
		$("#timerEight").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt9, #display1pt9").click( function(){
		$("#timerNine").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaypt10, #display1pt10").click( function(){
		$("#timerTen").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
});

/* PLAYER 1 */

var swonenameInput = document.getElementById('sw-player1');
swoneName = document.querySelector("#sw-player1-name");

swonenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swoneName.innerHTML = swonenameInput.value;
		document.getElementById('sw-player1-drop').innerHTML 
	= swonenameInput.value;
		document.getElementById('sw1-player1-drop').innerHTML 
	= swonenameInput.value;
	}
});
/* TIMER1 */

let offset = 0,
  paused = true;

render();
  
function startStopwatch(evt) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}

function stopStopwatch(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
  }
}

function resetStopwatch(evt) {
  if (paused) {
    offset = 0;
    render();
  } else {
    offset = -Date.now();
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  document.querySelector('#timer-milisecond-p1').value = format(value, 1, 1000, 3);
  document.querySelector('#timer-second-p1').value = format(value, 1000, 60, 2);
  document.querySelector('#timer-minute-p1').value = format(value, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p1').value = format(value, 1, 1000, 3);
  document.querySelector('#timer1-second-p1').value = format(value, 1000, 60, 2);
  document.querySelector('#timer1-minute-p1').value = format(value, 60000, 60, 2);
  
  document.querySelector('#sw-player1-scoremili').innerHTML = format(value, 1, 1000, 3);
  document.querySelector('#sw-player1-scoresec').innerHTML = format(value, 1000, 60, 2);
  document.querySelector('#sw-player1-scoremin').innerHTML = format(value, 60000, 60, 2);
  
  document.querySelector('#sw-player1-timermili').value = format(value, 1, 1000, 3);
  document.querySelector('#sw-player1-timersec').value = format(value, 1000, 60, 2);
  document.querySelector('#sw-player1-timermin').value = format(value, 60000, 60, 2);

  if(!paused) {
    requestAnimationFrame(render);
  }
}

/* PLAYER 2 */

var swtwonameInput = document.getElementById('sw-player2');
swtwoName = document.querySelector("#sw-player2-name");

swtwonameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swtwoName.innerHTML = swtwonameInput.value;
		document.getElementById('sw-player2-drop').innerHTML 
	= swtwonameInput.value;
		document.getElementById('sw1-player2-drop').innerHTML 
	= swtwonameInput.value;
	}
});

/* TIMER2 */

let offset1 = 0,
  paused1 = true;

render1();
  
function start1Stopwatch(evt) {
  if (paused1) {
    paused1 = false;
    offset1 -= Date.now();
    render1();
  }
}

function stop1Stopwatch(evt) {
  if (!paused1) {
    paused1 = true;
    offset1 += Date.now();
  }
}

function reset1Stopwatch(evt) {
  if (paused1) {
    offset1 = 0;
    render1();
  } else {
    offset1 = -Date.now();
  }
}

function format1(value1, scale, modulo, padding) {
  value1 = Math.floor(value1 / scale) % modulo;
  return value1.toString().padStart(padding, 0);
}

function render1() {
  var value1 = paused1 ? offset1 : Date.now() + offset1;

  document.querySelector('#timer-milisecond-p2').value = format1(value1, 1, 1000, 3);
  document.querySelector('#timer-second-p2').value = format1(value1, 1000, 60, 2);
  document.querySelector('#timer-minute-p2').value = format1(value1, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p2').value = format1(value1, 1, 1000, 3);
  document.querySelector('#timer1-second-p2').value = format1(value1, 1000, 60, 2);
  document.querySelector('#timer1-minute-p2').value = format1(value1, 60000, 60, 2);
  
  document.querySelector('#sw-player2-scoremili').innerHTML = format1(value1, 1, 1000, 3);
  document.querySelector('#sw-player2-scoresec').innerHTML = format1(value1, 1000, 60, 2);
  document.querySelector('#sw-player2-scoremin').innerHTML = format1(value1, 60000, 60, 2);
  
  document.querySelector('#sw-player2-timermili').value = format1(value1, 1, 1000, 3);
  document.querySelector('#sw-player2-timersec').value = format1(value1, 1000, 60, 2);
  document.querySelector('#sw-player2-timermin').value = format1(value1, 60000, 60, 2);

  if(!paused1) {
    requestAnimationFrame(render1);
  }
}

/* PLAYER 3 */

var swthreenameInput = document.getElementById('sw-player3');
swthreeName = document.querySelector("#sw-player3-name");

swthreenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swthreeName.innerHTML = swthreenameInput.value;
		document.getElementById('sw-player3-drop').innerHTML 
	= swthreenameInput.value;
		document.getElementById('sw1-player3-drop').innerHTML 
	= swthreenameInput.value;
	}
});

/* TIMER3 */

let offset2 = 0,
  paused2 = true;

render2();
  
function start2Stopwatch(evt) {
  if (paused2) {
    paused2 = false;
    offset2 -= Date.now();
    render2();
  }
}

function stop2Stopwatch(evt) {
  if (!paused2) {
    paused2 = true;
    offset2 += Date.now();
  }
}

function reset2Stopwatch(evt) {
  if (paused2) {
    offset2 = 0;
    render2();
  } else {
    offset2 = -Date.now();
  }
}

function format2(value2, scale, modulo, padding) {
  value2 = Math.floor(value2 / scale) % modulo;
  return value2.toString().padStart(padding, 0);
}

function render2() {
  var value2 = paused2 ? offset2 : Date.now() + offset2;

  document.querySelector('#timer-milisecond-p3').value = format2(value2, 1, 1000, 3);
  document.querySelector('#timer-second-p3').value = format2(value2, 1000, 60, 2);
  document.querySelector('#timer-minute-p3').value = format2(value2, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p3').value = format2(value2, 1, 1000, 3);
  document.querySelector('#timer1-second-p3').value = format2(value2, 1000, 60, 2);
  document.querySelector('#timer1-minute-p3').value = format2(value2, 60000, 60, 2);
  
  document.querySelector('#sw-player3-scoremili').innerHTML = format2(value2, 1, 1000, 3);
  document.querySelector('#sw-player3-scoresec').innerHTML = format2(value2, 1000, 60, 2);
  document.querySelector('#sw-player3-scoremin').innerHTML = format2(value2, 60000, 60, 2);
  
  document.querySelector('#sw-player3-timermili').value = format2(value2, 1, 1000, 3);
  document.querySelector('#sw-player3-timersec').value = format2(value2, 1000, 60, 2);
  document.querySelector('#sw-player3-timermin').value = format2(value2, 60000, 60, 2);

  if(!paused2) {
    requestAnimationFrame(render2);
  }
}

/* PLAYER 4 */

var swfournameInput = document.getElementById('sw-player4');
swfourName = document.querySelector("#sw-player4-name");

swfournameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swfourName.innerHTML = swfournameInput.value;
		document.getElementById('sw-player4-drop').innerHTML 
	= swfournameInput.value;
		document.getElementById('sw1-player4-drop').innerHTML 
	= swfournameInput.value;
	}
});

/* TIMER4 */

let offset3 = 0,
  paused3 = true;

render3();
  
function start3Stopwatch(evt) {
  if (paused3) {
    paused3 = false;
    offset3 -= Date.now();
    render3();
  }
}

function stop3Stopwatch(evt) {
  if (!paused3) {
    paused3 = true;
    offset3 += Date.now();
  }
}

function reset3Stopwatch(evt) {
  if (paused3) {
    offset3 = 0;
    render3();
  } else {
    offset3 = -Date.now();
  }
}

function format3(value3, scale, modulo, padding) {
  value3 = Math.floor(value3 / scale) % modulo;
  return value3.toString().padStart(padding, 0);
}

function render3() {
  var value3 = paused3 ? offset3 : Date.now() + offset3;

  document.querySelector('#timer-milisecond-p4').value = format3(value3, 1, 1000, 3);
  document.querySelector('#timer-second-p4').value = format3(value3, 1000, 60, 2);
  document.querySelector('#timer-minute-p4').value = format3(value3, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p4').value = format3(value3, 1, 1000, 3);
  document.querySelector('#timer1-second-p4').value = format3(value3, 1000, 60, 2);
  document.querySelector('#timer1-minute-p4').value = format3(value3, 60000, 60, 2);
  
  document.querySelector('#sw-player4-scoremili').innerHTML = format3(value3, 1, 1000, 3);
  document.querySelector('#sw-player4-scoresec').innerHTML = format3(value3, 1000, 60, 2);
  document.querySelector('#sw-player4-scoremin').innerHTML = format3(value3, 60000, 60, 2);
  
  document.querySelector('#sw-player4-timermili').value = format3(value3, 1, 1000, 3);
  document.querySelector('#sw-player4-timersec').value = format3(value3, 1000, 60, 2);
  document.querySelector('#sw-player4-timermin').value = format3(value3, 60000, 60, 2);

  if(!paused3) {
    requestAnimationFrame(render3);
  }
}

/* PLAYER 5 */

var swfivenameInput = document.getElementById('sw-player5');
swfiveName = document.querySelector("#sw-player5-name");

swfivenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swfiveName.innerHTML = swfivenameInput.value;
		document.getElementById('sw-player5-drop').innerHTML 
	= swfivenameInput.value;
		document.getElementById('sw1-player5-drop').innerHTML 
	= swfivenameInput.value;
	}
});

/* TIMER5 */

let offset4 = 0,
  paused4 = true;

render4();
  
function start4Stopwatch(evt) {
  if (paused4) {
    paused4 = false;
    offset4 -= Date.now();
    render4();
  }
}

function stop4Stopwatch(evt) {
  if (!paused4) {
    paused4 = true;
    offset4 += Date.now();
  }
}

function reset4Stopwatch(evt) {
  if (paused4) {
    offset4 = 0;
    render4();
  } else {
    offset4 = -Date.now();
  }
}

function format4(value4, scale, modulo, padding) {
  value4 = Math.floor(value4 / scale) % modulo;
  return value4.toString().padStart(padding, 0);
}

function render4() {
  var value4 = paused4 ? offset4 : Date.now() + offset4;

  document.querySelector('#timer-milisecond-p5').value = format4(value4, 1, 1000, 3);
  document.querySelector('#timer-second-p5').value = format4(value4, 1000, 60, 2);
  document.querySelector('#timer-minute-p5').value = format4(value4, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p5').value = format4(value4, 1, 1000, 3);
  document.querySelector('#timer1-second-p4').value = format4(value4, 1000, 60, 2);
  document.querySelector('#timer1-minute-p4').value = format4(value4, 60000, 60, 2);
  
  document.querySelector('#sw-player5-scoremili').innerHTML = format4(value4, 1, 1000, 3);
  document.querySelector('#sw-player5-scoresec').innerHTML = format4(value4, 1000, 60, 2);
  document.querySelector('#sw-player5-scoremin').innerHTML = format4(value4, 60000, 60, 2);
  
  document.querySelector('#sw-player5-timermili').value = format4(value4, 1, 1000, 3);
  document.querySelector('#sw-player5-timersec').value = format4(value4, 1000, 60, 2);
  document.querySelector('#sw-player5-timermin').value = format4(value4, 60000, 60, 2);

  if(!paused4) {
    requestAnimationFrame(render4);
  }
}

/* PLAYER 6 */

var swsixnameInput = document.getElementById('sw-player6');
swsixName = document.querySelector("#sw-player6-name");

swsixnameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swsixName.innerHTML = swsixnameInput.value;
		document.getElementById('sw-player6-drop').innerHTML 
	= swsixnameInput.value;
		document.getElementById('sw1-player6-drop').innerHTML 
	= swsixnameInput.value;
	}
});

/* TIMER6 */

let offset5 = 0,
  paused5 = true;

render5();
  
function start5Stopwatch(evt) {
  if (paused5) {
    paused5 = false;
    offset5 -= Date.now();
    render5();
  }
}

function stop5Stopwatch(evt) {
  if (!paused5) {
    paused5 = true;
    offset5 += Date.now();
  }
}

function reset5Stopwatch(evt) {
  if (paused5) {
    offset5 = 0;
    render5();
  } else {
    offset5 = -Date.now();
  }
}

function format5(value5, scale, modulo, padding) {
  value5 = Math.floor(value5 / scale) % modulo;
  return value5.toString().padStart(padding, 0);
}

function render5() {
  var value5 = paused5 ? offset5 : Date.now() + offset5;

  document.querySelector('#timer-milisecond-p6').value = format5(value5, 1, 1000, 3);
  document.querySelector('#timer-second-p6').value = format5(value5, 1000, 60, 2);
  document.querySelector('#timer-minute-p6').value = format5(value5, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p6').value = format5(value5, 1, 1000, 3);
  document.querySelector('#timer1-second-p6').value = format5(value5, 1000, 60, 2);
  document.querySelector('#timer1-minute-p6').value = format5(value5, 60000, 60, 2);
  
  document.querySelector('#sw-player6-scoremili').innerHTML = format5(value5, 1, 1000, 3);
  document.querySelector('#sw-player6-scoresec').innerHTML = format5(value5, 1000, 60, 2);
  document.querySelector('#sw-player6-scoremin').innerHTML = format5(value5, 60000, 60, 2);
  
  document.querySelector('#sw-player6-timermili').value = format5(value5, 1, 1000, 3);
  document.querySelector('#sw-player6-timersec').value = format5(value5, 1000, 60, 2);
  document.querySelector('#sw-player6-timermin').value = format5(value5, 60000, 60, 2);

  if(!paused5) {
    requestAnimationFrame(render5);
  }
}

/* PLAYER 7 */

var swsevennameInput = document.getElementById('sw-player7');
swsevenName = document.querySelector("#sw-player7-name");

swsevennameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swsevenName.innerHTML = swsevennameInput.value;
		document.getElementById('sw-player7-drop').innerHTML 
	= swsevennameInput.value;
		document.getElementById('sw1-player7-drop').innerHTML 
	= swsevennameInput.value;
	}
});

/* TIMER7 */

let offset6 = 0,
  paused6 = true;

render6();
  
function start6Stopwatch(evt) {
  if (paused6) {
    paused6 = false;
    offset6 -= Date.now();
    render6();
  }
}

function stop6Stopwatch(evt) {
  if (!paused6) {
    paused6 = true;
    offset6 += Date.now();
  }
}

function reset6Stopwatch(evt) {
  if (paused6) {
    offset6 = 0;
    render6();
  } else {
    offset6 = -Date.now();
  }
}

function format6(value6, scale, modulo, padding) {
  value6 = Math.floor(value6 / scale) % modulo;
  return value6.toString().padStart(padding, 0);
}

function render6() {
  var value6 = paused6 ? offset6 : Date.now() + offset6;

  document.querySelector('#timer-milisecond-p7').value = format6(value6, 1, 1000, 3);
  document.querySelector('#timer-second-p7').value = format6(value6, 1000, 60, 2);
  document.querySelector('#timer-minute-p7').value = format6(value6, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p7').value = format6(value6, 1, 1000, 3);
  document.querySelector('#timer1-second-p7').value = format6(value6, 1000, 60, 2);
  document.querySelector('#timer1-minute-p7').value = format6(value6, 60000, 60, 2);
  
  document.querySelector('#sw-player7-scoremili').innerHTML = format6(value6, 1, 1000, 3);
  document.querySelector('#sw-player7-scoresec').innerHTML = format6(value6, 1000, 60, 2);
  document.querySelector('#sw-player7-scoremin').innerHTML = format6(value6, 60000, 60, 2);
  
  document.querySelector('#sw-player7-timermili').value = format6(value6, 1, 1000, 3);
  document.querySelector('#sw-player7-timersec').value = format6(value6, 1000, 60, 2);
  document.querySelector('#sw-player7-timermin').value = format6(value6, 60000, 60, 2);

  if(!paused6) {
    requestAnimationFrame(render6);
  }
}

/* PLAYER 8 */

var sweightnameInput = document.getElementById('sw-player8');
sweightName = document.querySelector("#sw-player8-name");

sweightnameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		sweightName.innerHTML = sweightnameInput.value;
		document.getElementById('sw-player8-drop').innerHTML 
	= sweightnameInput.value;
		document.getElementById('sw1-player8-drop').innerHTML 
	= sweightnameInput.value;
	}
});

/* TIMER8 */

let offset7 = 0,
  paused7 = true;

render7();
  
function start7Stopwatch(evt) {
  if (paused7) {
    paused7 = false;
    offset7 -= Date.now();
    render7();
  }
}

function stop7Stopwatch(evt) {
  if (!paused7) {
    paused7 = true;
    offset7 += Date.now();
  }
}

function reset7Stopwatch(evt) {
  if (paused7) {
    offset7 = 0;
    render7();
  } else {
    offset7 = -Date.now();
  }
}

function format7(value7, scale, modulo, padding) {
  value7 = Math.floor(value7 / scale) % modulo;
  return value7.toString().padStart(padding, 0);
}

function render7() {
  var value7 = paused7 ? offset7 : Date.now() + offset7;

  document.querySelector('#timer-milisecond-p8').value = format7(value7, 1, 1000, 3);
  document.querySelector('#timer-second-p8').value = format7(value7, 1000, 60, 2);
  document.querySelector('#timer-minute-p8').value = format7(value7, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p8').value = format7(value7, 1, 1000, 3);
  document.querySelector('#timer1-second-p8').value = format7(value7, 1000, 60, 2);
  document.querySelector('#timer1-minute-p8').value = format7(value7, 60000, 60, 2);
  
  document.querySelector('#sw-player8-scoremili').innerHTML = format7(value7, 1, 1000, 3);
  document.querySelector('#sw-player8-scoresec').innerHTML = format7(value7, 1000, 60, 2);
  document.querySelector('#sw-player8-scoremin').innerHTML = format7(value7, 60000, 60, 2);
  
  document.querySelector('#sw-player8-timermili').value = format7(value7, 1, 1000, 3);
  document.querySelector('#sw-player8-timersec').value = format7(value7, 1000, 60, 2);
  document.querySelector('#sw-player8-timermin').value = format7(value7, 60000, 60, 2);

  if(!paused7) {
    requestAnimationFrame(render7);
  }
}

/* PLAYER 9 */

var swninenameInput = document.getElementById('sw-player9');
swnineName = document.querySelector("#sw-player9-name");

swninenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swnineName.innerHTML = swninenameInput.value;
		document.getElementById('sw-player9-drop').innerHTML 
	= swninenameInput.value;
		document.getElementById('sw1-player9-drop').innerHTML 
	= swninenameInput.value;
	}
});

/* TIMER9 */

let offset8 = 0,
  paused8 = true;

render8();
  
function start8Stopwatch(evt) {
  if (paused8) {
    paused8 = false;
    offset8 -= Date.now();
    render8();
  }
}

function stop8Stopwatch(evt) {
  if (!paused8) {
    paused8 = true;
    offset8 += Date.now();
  }
}

function reset8Stopwatch(evt) {
  if (paused8) {
    offset8 = 0;
    render8();
  } else {
    offset8 = -Date.now();
  }
}

function format8(value8, scale, modulo, padding) {
  value8 = Math.floor(value8 / scale) % modulo;
  return value8.toString().padStart(padding, 0);
}

function render8() {
  var value8 = paused8 ? offset8 : Date.now() + offset8;

  document.querySelector('#timer-milisecond-p9').value = format8(value8, 1, 1000, 3);
  document.querySelector('#timer-second-p9').value = format8(value8, 1000, 60, 2);
  document.querySelector('#timer-minute-p9').value = format8(value8, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p9').value = format8(value8, 1, 1000, 3);
  document.querySelector('#timer1-second-p9').value = format8(value8, 1000, 60, 2);
  document.querySelector('#timer1-minute-p9').value = format8(value8, 60000, 60, 2);
  
  document.querySelector('#sw-player9-scoremili').innerHTML = format8(value8, 1, 1000, 3);
  document.querySelector('#sw-player9-scoresec').innerHTML = format8(value8, 1000, 60, 2);
  document.querySelector('#sw-player9-scoremin').innerHTML = format8(value8, 60000, 60, 2);
  
  document.querySelector('#sw-player9-timermili').value = format8(value8, 1, 1000, 3);
  document.querySelector('#sw-player9-timersec').value = format8(value8, 1000, 60, 2);
  document.querySelector('#sw-player9-timermin').value = format8(value8, 60000, 60, 2);

  if(!paused8) {
    requestAnimationFrame(render8);
  }
}

/* PLAYER 10 */

var swtennameInput = document.getElementById('sw-player10');
swtenName = document.querySelector("#sw-player10-name");

swtennameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		swtenName.innerHTML = swtennameInput.value;
		document.getElementById('sw-player10-drop').innerHTML 
	= swtennameInput.value;
		document.getElementById('sw1-player10-drop').innerHTML 
	= swtennameInput.value;
	}
});

/* TIMER10 */

let offset9 = 0,
  paused9 = true;

render9();
  
function start9Stopwatch(evt) {
  if (paused9) {
    paused9 = false;
    offset9 -= Date.now();
    render9();
  }
}

function stop9Stopwatch(evt) {
  if (!paused9) {
    paused9 = true;
    offset9 += Date.now();
  }
}

function reset9Stopwatch(evt) {
  if (paused9) {
    offset9 = 0;
    render9();
  } else {
    offset9 = -Date.now();
  }
}

function format9(value9, scale, modulo, padding) {
  value9 = Math.floor(value9 / scale) % modulo;
  return value9.toString().padStart(padding, 0);
}

function render9() {
  var value9 = paused9 ? offset9 : Date.now() + offset9;

  document.querySelector('#timer-milisecond-p10').value = format8(value9, 1, 1000, 3);
  document.querySelector('#timer-second-p10').value = format8(value9, 1000, 60, 2);
  document.querySelector('#timer-minute-p10').value = format8(value9, 60000, 60, 2);
  
  document.querySelector('#timer1-milisecond-p10').value = format8(value9, 1, 1000, 3);
  document.querySelector('#timer1-second-p10').value = format8(value9, 1000, 60, 2);
  document.querySelector('#timer1-minute-p10').value = format8(value9, 60000, 60, 2);
  
  document.querySelector('#sw-player10-scoremili').innerHTML = format8(value9, 1, 1000, 3);
  document.querySelector('#sw-player10-scoresec').innerHTML = format8(value9, 1000, 60, 2);
  document.querySelector('#sw-player10-scoremin').innerHTML = format8(value9, 60000, 60, 2);
  
  document.querySelector('#sw-player10-timermili').value = format8(value9, 1, 1000, 3);
  document.querySelector('#sw-player10-timersec').value = format8(value9, 1000, 60, 2);
  document.querySelector('#sw-player10-timermin').value = format8(value9, 60000, 60, 2);

  if(!paused9) {
    requestAnimationFrame(render9);
  }
}

/* KEYBOARD EVENT */

function timerStartll() {
	startStopwatch();
	start1Stopwatch();
	start2Stopwatch();
	start3Stopwatch();
	start4Stopwatch();
	start5Stopwatch();
	start6Stopwatch();
	start7Stopwatch();
	start8Stopwatch();
	start9Stopwatch();
}
function timerStopll() {
	stopStopwatch();
	stop1Stopwatch();
	stop2Stopwatch();
	stop3Stopwatch();
	stop4Stopwatch();
	stop5Stopwatch();
	stop6Stopwatch();
	stop7Stopwatch();
	stop8Stopwatch();
	stop9Stopwatch();
}
function timerResetll() {
	resetStopwatch();
	reset1Stopwatch();
	reset2Stopwatch();
	reset3Stopwatch();
	reset4Stopwatch();
	reset5Stopwatch();
	reset6Stopwatch();
	reset7Stopwatch();
	reset8Stopwatch();
	reset9Stopwatch();
}
document.addEventListener('keydown', (event) =>{
	if (event.key == '1'){
		event.preventDefault();
		stopStopwatch();
	}
	if (event.key == '2'){
		event.preventDefault();
		stop1Stopwatch();
	}
	if (event.key == '3'){
		event.preventDefault();
		stop2Stopwatch();
	}
	if (event.key == '4'){
		event.preventDefault();
		stop3Stopwatch();
	}
	if (event.key == '5'){
		event.preventDefault();
		stop4Stopwatch();
	}
	if (event.key == '6'){
		event.preventDefault();
		stop5Stopwatch();
	}
	if (event.key == '7'){
		event.preventDefault();
		stop6Stopwatch();
	}
	if (event.key == '8'){
		event.preventDefault();
		stop7Stopwatch();
	}
	if (event.key == '9'){
		event.preventDefault();
		stop8Stopwatch();
	}
	if (event.key == '0'){
		event.preventDefault();
		stop9Stopwatch();
	}
});