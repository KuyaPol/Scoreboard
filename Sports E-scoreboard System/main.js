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

/* SHOT CLOCK */
var scStart = document.getElementById("sc-start");
var scReset = document.getElementById("sc-reset");
var scStop = document.getElementById('sc-stop');

var sc1Start = document.getElementById("sc1-start");
var sc1Reset = document.getElementById("sc1-reset");
var sc1Stop = document.getElementById('sc1-stop');

var scSecond = document.getElementById("sc-seconds");

var sc1Second = document.getElementById("sc1-seconds");

var	scTimer = null;


/* COUNTDOWN TIMER */
var	timerStart = document.getElementById('timer-start');
var	timer1Start = document.getElementById('timer1-start');

var timerStop = document.getElementById('timer-stop');
var timer1Stop = document.getElementById('timer1-stop');

var timerReset = document.getElementById('timer-reset');
var timer1Reset = document.getElementById('timer1-reset');

var timerHour = document.getElementById("timer-hour");
var timerMinute = document.getElementById("timer-minute");
var timerSecond = document.getElementById("timer-second");

var timer1Hour = document.getElementById("timer1-hour");
var timer1Minute = document.getElementById("timer1-minute");
var timer1Second = document.getElementById("timer1-second");

var startTimer = null;

/* ADD SUBTRACT FOULS */

/* HOME ADD */
function haddOne(){
	hscorePoint++;
	hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
	hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
	homeScore.innerHTML = hscorePoint;
};
function haddTwo(){
	hscorePoint++, hscorePoint++;
	hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
	hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
	homeScore.innerHTML = hscorePoint;
};
function haddThree(){
	hscorePoint++, hscorePoint++, hscorePoint++;
	hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
	hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
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
function hsubOne(){
	if(hscorePoint > 0) {
		hscorePoint--;
		hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
		hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
		homeScore.innerHTML = hscorePoint;
	}
};
function hsubTwo(){
	if(hscorePoint > 1) {
		hscorePoint--, hscorePoint--;
		hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
		hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
		homeScore.innerHTML = hscorePoint;
	}
};
function hsubThree(){
	if(hscorePoint > 2) {
		hscorePoint--, hscorePoint--, hscorePoint--;
		hscorePoint = (hscorePoint < 10) ? "00" + hscorePoint : hscorePoint;
		hscorePoint = (hscorePoint >= 10) ? "0" + hscorePoint : hscorePoint;
		homeScore.innerHTML = hscorePoint;
	}
};

function hsubFoul(){
	if (hfscorePoint < 100 && hfscorePoint > 0) {
		hfscorePoint--;
		hfscorePoint = (hfscorePoint < 10) ? "0" + hfscorePoint : hfscorePoint;
		homeFoul.innerHTML = hfscorePoint;
	}
};
/* GUEST ADD */
function gaddOne(){
	gscorePoint++;
	gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
	gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
	guestScore.innerHTML = gscorePoint;
};
function gaddTwo(){
	gscorePoint++, gscorePoint++;
	gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
	gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
	guestScore.innerHTML = gscorePoint;
};
function gaddThree(){
	gscorePoint++, gscorePoint++, gscorePoint++;
	gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
	gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
	guestScore.innerHTML = gscorePoint;
};

function gaddFoul(){
	if (gfscorePoint < 100) {
		gfscorePoint++;
		gfscorePoint = (gfscorePoint < 10) ? "0" + gfscorePoint : gfscorePoint;
		guestFoul.innerHTML = gfscorePoint;
	}
};
/* GUEST SUB */
function gsubOne(){
	if(gscorePoint > 0) {
		gscorePoint--;
		gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
		gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
		guestScore.innerHTML = gscorePoint;
	}
};
function gsubTwo(){
	if(gscorePoint > 1) {
		gscorePoint--, gscorePoint--;
		gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
		gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
		guestScore.innerHTML = gscorePoint;
	}
};
function gsubThree(){
	if(gscorePoint > 2) {
		gscorePoint--, gscorePoint--, gscorePoint--;
		gscorePoint = (gscorePoint < 10) ? "00" + gscorePoint : gscorePoint;
		gscorePoint = (gscorePoint >= 10) ? "0" + gscorePoint : gscorePoint;
		guestScore.innerHTML = gscorePoint;
	}
};

function gsubFoul(){
	if (gfscorePoint < 100 && gfscorePoint > 0) {
		gfscorePoint--;
		gfscorePoint = (gfscorePoint < 10) ? "0" + gfscorePoint : gfscorePoint;
		guestFoul.innerHTML = gfscorePoint;
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
		timerHour.value = timer1Hour.value;
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
	=  timer1Minute.value + " : "  + timer1Second.value;
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
function stop1Timer() {
	clearInterval(startTimer)
	timerStart.disabled = false;
	timer1Start.disabled = false;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
		document.getElementById('countdownTimer-box').innerHTML 
	= "00:00";

}
timerStart.addEventListener('click', function() {
	function startInterval() {
		startTimer = setInterval(function(event) {
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
		startTimer = setInterval(function(event) {
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
	stop1Timer();
	timerStart.disabled = false;
	timerStart1.disabled = false;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
	document.getElementById('countdownTimer-box').innerHTML 
	= "00:00";
	return;
});
timer1Reset.addEventListener('click', function() {
	timer1Minute.value = 0;
	timer1Second.value = 0;
	timerMinute.value = 0;
	timerSecond.value = 0;
	stop1Timer();
	timerStart.disabled = false;
	timerStart1.disabled = false;
	timerStop.disabled = false;
	timer1Stop.disabled = false;
	document.getElementById('countdownTimer-box').innerHTML 
	= "00:00";
	return;
});

function onClick() {
  console.log("Clicked");
  timerStart.disabled = true;
}


/* SHOT CLOCK COUNTDOWN */

function shotclockTimer() {
	if(scSecond.value == 0){
		scSecond.value = 0;
		sc1Second.value = scSecond.value;
	} else if (sc1Second.value < 11 && scSecond.value < 11) {
		scSecond.value--;
		sc1Second.value = scSecond.value;
		document.getElementById('shot-clock').innerHTML 
	= "0" + scSecond.value;
	} else if (scSecond.value >= 10) {
		scSecond.value--;
		sc1Second.value = scSecond.value;
		document.getElementById('shot-clock').innerHTML 
	=  scSecond.value;
	}
	
}
function shotclockTimer1() {
	if(sc1Second.value == 0){
		sc1Second.value = 0;
		scSecond.value = sc1Second.value;
	} else if (sc1Second.value < 11 && scSecond.value <11) {
		sc1Second.value--;
		scSecond.value = sc1Second.value;
		document.getElementById('shot-clock').innerHTML 
	= "0" + scSecond.value;
	} else if (sc1Second.value >= 10) {
		sc1Second.value--;
		scSecond.value = sc1Second.value;
		document.getElementById('shot-clock').innerHTML 
	=  scSecond.value;
	}

}

scStop.addEventListener('click', stopscTimer, onClicktwo);
sc1Stop.addEventListener('click', stopscTimer, onClicktwo);
function stopscTimer() {
	clearInterval(scTimer)
	scStart.disabled = false;
	sc1Start.disabled = false;
	scStop.disabled = true;
	sc1Stop.disabled = true;
}
scStart.addEventListener('click', function() {
	function startIntervaltwo() {
		scTimer = setInterval(function() {
			shotclockTimer();
		}, 1000);
	}
	startIntervaltwo();
	onClicktwo();
	scStart.disabled = true;
	sc1Start.disabled = true;
	scStop.disabled = false;
	sc1Stop.disabled = false;
});
sc1Start.addEventListener('click', function() {
	function startIntervaltwo() {
		scTimer = setInterval(function() {
			shotclockTimer1();
		}, 1000);
	}
	startIntervaltwo();
	onClicktwo();
	scStart.disabled = true;
	sc1Start.disabled = true;
	scStop.disabled = false;
	sc1Stop.disabled = false;
});

scReset.addEventListener('click', function() {
	scSecond.value = 0;
	sc1Second.value = 0;
	stopscTimer()
	scStart.disabled = false;
	sc1Start.disabled = false;
	scStop.disabled = false;
	sc1Stop.disabled = false;
	document.getElementById('shot-clock').innerHTML 
	= "00";
	return;
});
sc1Reset.addEventListener('click', function() {
	scSecond.value = 0;
	sc1Second.value = 0;
	stopscTimer()
	scStart.disabled = false;
	sc1Start.disabled = false;
	scStop.disabled = false;
	sc1Stop.disabled = false;
	document.getElementById('shot-clock').innerHTML 
	= "00";
	return;
});

function onClicktwo() {
  console.log("Clicked");
  scStart.disabled = true;
  sc1Start.disabled = true;
}

/* PERIOD */
function paddOne(){
	if (pPoint < 10) {
	pPoint++;
	periodNum.innerHTML = pPoint;
	}
};
function psubOne(){
	if (pPoint > 0) {
	pPoint--;
	periodNum.innerHTML = pPoint;
	}
};
	

