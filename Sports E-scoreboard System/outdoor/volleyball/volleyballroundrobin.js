$(document).ready(function(){
	$("#home-serve-off").on('click', function(){
			$("#home-serve-on").toggle();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#home-serve-on").on('click', function(){
			$("#home-serve-on").hide();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#guest-serve-off").on('click', function(){
			$("#guest-serve-on").toggle();
			$("#" + $(this).val()).fadeIn(100);
		}).change();
	$("#guest-serve-on").on('click', function(){
			$("#guest-serve-on").hide();
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

homeScore = document.querySelector("#home-score");
guestScore = document.querySelector("#guest-score");
homeFoul = document.querySelector("#home-foul");
guestFoul = document.querySelector("#guest-foul");

let hscorePoint = 0;
let gscorePoint = 0;

let hfscorePoint = 0;
let gfscorePoint = 0;

periodNum = document.querySelector("#period");

let pPoint = 0;

/* COUNTDOWN TIMER */

var timerStart = document.getElementById("timer-start");
var timerReset = document.getElementById("timer-reset");
var timerStop = document.getElementById('timer-stop');

var timer1Start = document.getElementById("timer1-start");
var timer1Reset = document.getElementById("timer1-reset");
var timer1Stop = document.getElementById('timer1-stop');

var timerHour = document.getElementById("timer-hour");
var timerMinute = document.getElementById("timer-minute");
var timerSecond = document.getElementById("timer-second");

var timer1Hour = document.getElementById("timer1-hour");
var timer1Minute = document.getElementById("timer1-minute");
var timer1Second = document.getElementById("timer1-second");

var startTimer = null;

/* HOME ADD */
function haddOne() {
	hscorePoint++;
	hscorePoint = (hscorePoint < 10) ? "0" + hscorePoint : hscorePoint;
	hscorePoint = (hscorePoint >= 10) ? "" + hscorePoint : hscorePoint;
	homeScore.innerHTML = hscorePoint;
};
function haddFoul(){
	if (hfscorePoint < 100) {
		hfscorePoint++;
		hfscorePoint = (hfscorePoint < 10) ? "0" + hfscorePoint : hfscorePoint;
		homeFoul.innerHTML = hfscorePoint;
	}
};

/* HOME SUB */
function hsubOne() {
	if(hscorePoint > 0) {
		hscorePoint--;
		hscorePoint = (hscorePoint < 10) ? "0" + hscorePoint : hscorePoint;
		hscorePoint = (hscorePoint >= 10) ? "" + hscorePoint : hscorePoint;
		homeScore.innerHTML = hscorePoint;
	}
};
function hsubFoul() {
	if (hfscorePoint < 100 && hfscorePoint > 0) {
		hfscorePoint--;
		hfscorePoint = (hfscorePoint < 10) ? "0" + hfscorePoint : hfscorePoint;
		homeFoul.innerHTML = hfscorePoint;
	}
};

/* GUEST ADD */
function gaddOne() {
	gscorePoint++;
	gscorePoint = (gscorePoint < 10) ? "0" + gscorePoint : gscorePoint;
	gscorePoint = (gscorePoint >= 10) ? "" + gscorePoint : gscorePoint;
	guestScore.innerHTML = gscorePoint;
};
function gaddFoul() {
	if (gfscorePoint < 100) {
		gfscorePoint++;
		gfscorePoint = (gfscorePoint < 10) ? "0" + gfscorePoint : gfscorePoint;
		guestFoul.innerHTML = gfscorePoint;
	}
};
/* GUEST SUB */
function gsubOne() {
	if(gscorePoint > 0) {
		gscorePoint--;
		gscorePoint = (gscorePoint < 10) ? "0" + gscorePoint : gscorePoint;
		gscorePoint = (gscorePoint >= 10) ? "" + gscorePoint : gscorePoint;
		guestScore.innerHTML = gscorePoint;
	}
};
function gsubFoul(){
	if (gfscorePoint < 100 && gscorePoint > 0) {
		gfscorePoint--;
		gfscorePoint = (gfscorePoint < 10) ? "0" + gfscorePoint : gfscorePoint;
		gfuestFoul.innerHTML = gfscorePoint;
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
	timer1Second.value = 0
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
	pPoint = (pPoint < 10) ? "0" + pPoint : pPoint;
	periodNum.innerHTML = pPoint;
	}
};
function psubOne() {
	if (pPoint > 0) {
	pPoint--;
	pPoint = (pPoint < 10) ? "0" + pPoint : pPoint;
	periodNum.innerHTML = pPoint;
	}
};