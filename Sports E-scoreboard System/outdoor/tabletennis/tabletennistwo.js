$(document).ready(function(){
	$("#teama-serve-off").on('click', function(){
			$("#teama-serve-on").toggle();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#teama-serve-on").on('click', function(){
			$("#teama-serve-on").hide();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#teamb-serve-off").on('click', function(){
			$("#teamb-serve-on").toggle();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#teamb-serve-on").on('click', function(){
			$("#teamb-serve-on").hide();
			$("#" + $(this).val()).fadeIn(100);
		}).change();

$(document).ready(function(){
	$("#displayOne, #displayOne1").click( function(){
		$("#displayOnediv").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displayTwo, #displayTwo1").click( function(){
		$("#displayTwodiv").toggle();
		$("#displayThreediv").toggle();
		$("#displayTwobtn1").toggle();
		$("#displayTwobtn2").toggle();
		$("#displayTwobtn3").toggle();
		$("#displayTwobtn4").toggle();
		$("#displayTwobtn5").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#displayAll, #displayAll1").click( function(){
		$("#setOne").show();
		$("#setTwo").show();
		$("#setThree").show();
		$("#setFour").show();
		$("#setFive").show();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displayHide, #displayHide1").click( function(){
		$("#setOne").hide();
		$("#setTwo").hide();
		$("#setThree").hide();
		$("#setFour").hide();
		$("#setFive").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#displaysetOne, #displaysetOne1").click( function(){
		$("#setOne").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaysetTwo, #displaysetTwo1").click( function(){
		$("#setTwo").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaysetThree, #displaysetThree1").click( function(){
		$("#setThree").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaysetFour, #displaysetFour1").click( function(){
		$("#setFour").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#displaysetFive, #displaysetFive1").click( function(){
		$("#setFive").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();


});
});

teamaScore = document.querySelector("#scoreaOne");
teambScore = document.querySelector("#scorebOne");

teama1Score = document.querySelector("#scoreaTwo");
teamb1Score = document.querySelector("#scorebTwo");

teama2Score = document.querySelector("#scoreaThree");
teamb2Score = document.querySelector("#scorebThree");

teama3Score = document.querySelector("#scoreaFour");
teamb3Score = document.querySelector("#scorebFour");

teama4Score = document.querySelector("#scoreaFive");
teamb4Score = document.querySelector("#scorebFive");


let ascorePoint = 0;
let bscorePoint = 0;

let a1scorePoint = 0;
let b1scorePoint = 0;

let a2scorePoint = 0;
let b2scorePoint = 0;

let a3scorePoint = 0;
let b3scorePoint = 0;

let a4scorePoint = 0;
let b4scorePoint = 0;

/* COUNTDOWN TIMER */

var timerStart = document.getElementById("timer-start");
var timerReset = document.getElementById("timer-reset");
var timerStop = document.getElementById('timer-stop');

var timer1Start = document.getElementById("timer1-start");
var timer1Reset = document.getElementById("timer1-reset");
var timer1Stop = document.getElementById('timer1-stop');

var timerMinute = document.getElementById("timer-minute");
var timerSecond = document.getElementById("timer-second");

var timer1Minute = document.getElementById("timer1-minute");
var timer1Second = document.getElementById("timer1-second");

var startTimer = null;

/* HOME ADD */
function aaddOne() {
	ascorePoint++;
	ascorePoint = (ascorePoint < 10) ? "0" + ascorePoint : ascorePoint;
	ascorePoint = (ascorePoint >= 10) ? "" + ascorePoint : ascorePoint;
	teamaScore.innerHTML = ascorePoint;
};

/* HOME SUB */
function asubOne() {
	if(ascorePoint > 0) {
		ascorePoint--;
		ascorePoint = (ascorePoint < 10) ? "0" + ascorePoint : ascorePoint;
		ascorePoint = (ascorePoint >= 10) ? "" + ascorePoint : ascorePoint;
		teamaScore.innerHTML = ascorePoint;
	}
};
/* GUEST ADD */
function baddOne() {
	bscorePoint++;
	bscorePoint = (bscorePoint < 10) ? "0" + bscorePoint : bscorePoint;
	bscorePoint = (bscorePoint >= 10) ? "" + bscorePoint : bscorePoint;
	teambScore.innerHTML = bscorePoint;
};

/* GUEST SUB */
function bsubOne() {
	if(bscorePoint > 0) {
		bscorePoint--;
		bscorePoint = (bscorePoint < 10) ? "0" + bscorePoint : bscorePoint;
		bscorePoint = (bscorePoint >= 10) ? "" + bscorePoint : bscorePoint;
		teambScore.innerHTML = bscorePoint;
	}
};

/* HOME ADD */
function a1addOne() {
	a1scorePoint++;
	a1scorePoint = (a1scorePoint < 10) ? "0" + a1scorePoint : a1scorePoint;
	a1scorePoint = (a1scorePoint >= 10) ? "" + a1scorePoint : a1scorePoint;
	teama1Score.innerHTML = a1scorePoint;
};

/* HOME SUB */
function a1subOne() {
	if(a1scorePoint > 0) {
		a1scorePoint--;
		a1scorePoint = (a1scorePoint < 10) ? "0" + a1scorePoint : a1scorePoint;
		a1scorePoint = (a1scorePoint >= 10) ? "" + a1scorePoint : a1scorePoint;
		teama1Score.innerHTML = a1scorePoint;
	}
};
/* GUEST ADD */
function b1addOne() {
	b1scorePoint++;
	b1scorePoint = (b1scorePoint < 10) ? "0" + b1scorePoint : b1scorePoint;
	b1scorePoint = (b1scorePoint >= 10) ? "" + b1scorePoint : b1scorePoint;
	teamb1Score.innerHTML = b1scorePoint;
};

/* GUEST SUB */
function b1subOne() {
	if(b1scorePoint > 0) {
		b1scorePoint--;
		b1scorePoint = (b1scorePoint < 10) ? "0" + b1scorePoint : b1scorePoint;
		b1scorePoint = (b1scorePoint >= 10) ? "" + b1scorePoint : b1scorePoint;
		teamb1Score.innerHTML = b1scorePoint;
	}
};

/* HOME ADD */
function a2addOne() {
	a2scorePoint++;
	a2scorePoint = (a2scorePoint < 10) ? "0" + a2scorePoint : a2scorePoint;
	a2scorePoint = (a2scorePoint >= 10) ? "" + a2scorePoint : a2scorePoint;
	teama2Score.innerHTML = a2scorePoint;
};

/* HOME SUB */
function a2subOne() {
	if(a2scorePoint > 0) {
		a2scorePoint--;
		a2scorePoint = (a2scorePoint < 10) ? "0" + a2scorePoint : a2scorePoint;
		a2scorePoint = (a2scorePoint >= 10) ? "" + a2scorePoint : a2scorePoint;
		teama2Score.innerHTML = a2scorePoint;
	}
};
/* GUEST ADD */
function b2addOne() {
	b2scorePoint++;
	b2scorePoint = (b2scorePoint < 10) ? "0" + b2scorePoint : b2scorePoint;
	b2scorePoint = (b2scorePoint >= 10) ? "" + b2scorePoint : b2scorePoint;
	teamb2Score.innerHTML = b2scorePoint;
};

/* GUEST SUB */
function b2subOne() {
	if(b2scorePoint > 0) {
		b2scorePoint--;
		b2scorePoint = (b2scorePoint < 10) ? "0" + b2scorePoint : b2scorePoint;
		b2scorePoint = (b2scorePoint >= 10) ? "" + b2scorePoint : b2scorePoint;
		teamb2Score.innerHTML = b2scorePoint;
	}
};

/* HOME ADD */
function a3addOne() {
	a3scorePoint++;
	a3scorePoint = (a3scorePoint < 10) ? "0" + a3scorePoint : a3scorePoint;
	a3scorePoint = (a3scorePoint >= 10) ? "" + a3scorePoint : a3scorePoint;
	teama3Score.innerHTML = a3scorePoint;
};

/* HOME SUB */
function a3subOne() {
	if(a3scorePoint > 0) {
		a3scorePoint--;
		a3scorePoint = (a3scorePoint < 10) ? "0" + a3scorePoint : a3scorePoint;
		a3scorePoint = (a3scorePoint >= 10) ? "" + a3scorePoint : a3scorePoint;
		teama3Score.innerHTML = a3scorePoint;
	}
};
/* GUEST ADD */
function b3addOne() {
	b3scorePoint++;
	b3scorePoint = (b3scorePoint < 10) ? "0" + b3scorePoint : b3scorePoint;
	b3scorePoint = (b3scorePoint >= 10) ? "" + b3scorePoint : b3scorePoint;
	teamb3Score.innerHTML = b3scorePoint;
};

/* GUEST SUB */
function b3subOne() {
	if(b3scorePoint > 0) {
		b3scorePoint--;
		b3scorePoint = (b3scorePoint < 10) ? "0" + b3scorePoint : b3scorePoint;
		b3scorePoint = (b3scorePoint >= 10) ? "" + b3scorePoint : b3scorePoint;
		teamb3Score.innerHTML = b3scorePoint;
	}
};

/* HOME ADD */
function a4addOne() {
	a4scorePoint++;
	a4scorePoint = (a4scorePoint < 10) ? "0" + a4scorePoint : a4scorePoint;
	a4scorePoint = (a4scorePoint >= 10) ? "" + a4scorePoint : a4scorePoint;
	teama4Score.innerHTML = a4scorePoint;
};

/* HOME SUB */
function a4subOne() {
	if(a4scorePoint > 0) {
		a4scorePoint--;
		a4scorePoint = (a4scorePoint < 10) ? "0" + a4scorePoint : a4scorePoint;
		a4scorePoint = (a4scorePoint >= 10) ? "" + a4scorePoint : a4scorePoint;
		teama4Score.innerHTML = a4scorePoint;
	}
};
/* GUEST ADD */
function b4addOne() {
	b4scorePoint++;
	b4scorePoint = (b4scorePoint < 10) ? "0" + b4scorePoint : b4scorePoint;
	b4scorePoint = (b4scorePoint >= 10) ? "" + b4scorePoint : b4scorePoint;
	teamb4Score.innerHTML = b4scorePoint;
};

/* GUEST SUB */
function b4subOne() {
	if(b4scorePoint > 0) {
		b4scorePoint--;
		b4scorePoint = (b4scorePoint < 10) ? "0" + b4scorePoint : b4scorePoint;
		b4scorePoint = (b4scorePoint >= 10) ? "" + b4scorePoint : b4scorePoint;
		teamb4Score.innerHTML = b4scorePoint;
	}
};



/* TIMER */

function countdownTimer() {
	if(timerMinute.value == 0 && timerSecond.value == 0){
		timerMinute.value = 0;
		timerSecond.value = 0;
		timer1Minute.value = timerMinute.value;
		timer1Second.value = timerSecond.value;
	} else if (timerSecond.value != 0) {
		timerSecond.value--;
		timer1Second.value = timerSecond.value;
	} else if (timerMinute.value != 0 && timerSecond.value == 0) {
		timerSecond.value = 59;
		timerMinute.value--;
		timer1Minute.value = timerMinute.value;
		timer1Second.value = timerSecond.value;
	} 
	document.getElementById('countdownTimer-box').innerHTML 
	= timerMinute.value + " : "  + timerSecond.value;

	return;
}
function countdownTimer1() {
	if(timer1Minute.value == 0 && timer1Second.value == 0){
		timer1Minute.value = 0;
		timer1Second.value = 0;
		timerMinute.value = timer1Minute.value;
		timerSecond.value = timer1Second.value;
	} else if (timer1Second.value != 0) {
		timer1Second.value--;
		timerSecond.value = timer1Second.value;
	} else if (timer1Minute.value != 0 && timer1Second.value == 0) {
		timer1Second.value = 59;
		timer1Minute.value--;
		timerMinute.value = timer1Minute.value;
		timerSecond.value = timer1Second.value;
	} 
	document.getElementById('countdownTimer-box').innerHTML 
	= timer1Minute.value + " : "  + timer1Second.value;

	return;
}

timerStop.addEventListener('click', stopTimer, onClick);
timer1Stop.addEventListener('click', stopTimer, onClick);
function stopTimer() {
	clearInterval(startTimer)
	timerStart.disabled = false;
	timer1Start.disabled = false;
	timerStop.disabled = true;
	timer1Stop.disabled = true;
}
timerStart.addEventListener('click', function() {
	function startInterval() {
		startTimer = setInterval(function() {
			countdownTimer();
		}, 1000);
	}
	startInterval();
	onClick();
	timerStart.disabled = true;
	timer1Start.disabled = true;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
});
timer1Start.addEventListener('click', function() {
	function startInterval() {
		startTimer = setInterval(function() {
			countdownTimer1();
		}, 1000);
	}
	startInterval();
	onClick();
	timerStart.disabled = true;
	timer1Start.disabled = true;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
});

timerReset.addEventListener('click', function() {
	timerMinute.value = 0;
	timerSecond.value = 0;
	timer1Minute.value = 0;
	timer1Second.value = 0;
	stopTimer()
	timerStart.disabled = false;
	timer1Start.disabled = false;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
	document.getElementById('countdownTimer-box').innerHTML 
	= "00:00";
	return;
});
timer1Reset.addEventListener('click', function() {
	timerMinute.value = 0;
	timerSecond.value = 0;
	timer1Minute.value = 0;
	timer1Second.value = 0;
	stopTimer()
	timerStart.disabled = false;
	timer1Start.disabled = false;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
	document.getElementById('countdownTimer-box').innerHTML 
	= "00:00";
	return;
});

function onClick() {
  console.log("Clicked");
  timerStart.disabled = true;
  timer1Start.disabled = true;
}
