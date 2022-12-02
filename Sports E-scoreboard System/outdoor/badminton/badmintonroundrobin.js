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
		$("#" + $(this).val()).fadeIn(100);
	}).change();

});
});

teamaScore = document.querySelector("#teama-score");
teambScore = document.querySelector("#teamb-score");
teamaSet = document.querySelector("#teama-set");
teambSet = document.querySelector("#teamb-set");

let ascorePoint = 0;
let bscorePoint = 0;

let atscorePoint = 0;
let btscorePoint = 0;

periodNum = document.querySelector("#period");

pPoint = 0;

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
function aaddSet(){
	if (atscorePoint < 100) {
		atscorePoint++;
		atscorePoint = (atscorePoint < 10) ? "0" + atscorePoint : atscorePoint;
		teamaSet.innerHTML = atscorePoint;
	}
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
function asubSet() {
	if (atscorePoint < 100 && atscorePoint > 0) {
		atscorePoint--;
		atscorePoint = (atscorePoint < 10) ? "0" + atscorePoint : atscorePoint;
		teamaSet.innerHTML = atscorePoint;
	}
};

/* GUEST ADD */
function baddOne() {
	bscorePoint++;
	bscorePoint = (bscorePoint < 10) ? "0" + bscorePoint : bscorePoint;
	bscorePoint = (bscorePoint >= 10) ? "" + bscorePoint : bscorePoint;
	teambScore.innerHTML = bscorePoint;
};
function baddSet() {
	if (btscorePoint < 100) {
		btscorePoint++;
		btscorePoint = (btscorePoint < 10) ? "0" + btscorePoint : btscorePoint;
		teambSet.innerHTML = btscorePoint;
	}
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
function bsubSet(){
	if (btscorePoint < 100 && btscorePoint > 0) {
		btscorePoint--;
		btscorePoint = (btscorePoint < 10) ? "0" + btscorePoint : btscorePoint;
		teambSet.innerHTML = btscorePoint;
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

/* PERIOD */
function paddOne() {
	if (pPoint < 10) {
	pPoint++;
	periodNum.innerHTML = pPoint;
	}
};
function psubOne() {
	if (pPoint > 0) {
	pPoint--;
	periodNum.innerHTML = pPoint;
	}
};
