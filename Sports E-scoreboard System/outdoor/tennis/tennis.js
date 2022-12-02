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
teamaScore = document.querySelector("#teama-points");
teambScore = document.querySelector("#teamb-points");

aset1 = document.querySelector("#aset1");
aset2 = document.querySelector("#aset2");
aset3 = document.querySelector("#aset3");
aset4 = document.querySelector("#aset4");
aset5 = document.querySelector("#aset5");

bset1 = document.querySelector("#bset1");
bset2 = document.querySelector("#bset2");
bset3 = document.querySelector("#bset3");
bset4 = document.querySelector("#bset4");
bset5 = document.querySelector("#bset5");

aset1score = 0;
aset2score = 0;
aset3score = 0;
aset4score = 0;
aset5score = 0;

bset1score = 0;
bset2score = 0;
bset3score = 0;
bset4score = 0;
bset5score = 0;

ascorePoint = 0;
bscorePoint = 0;

/* teama */
function aadd0() {
	ascorePoint = 0;
	teamaScore.innerHTML = "0"+ ascorePoint;
};
function aadd15() {
	ascorePoint = 15;
	teamaScore.innerHTML = ascorePoint;
};
function aadd30() {
	ascorePoint = 30;
	teamaScore.innerHTML = ascorePoint;
};
function aadd40() {
	ascorePoint = 40;
	teamaScore.innerHTML = ascorePoint;
};
function aaddA() {
	teamaScore.innerHTML = "A";
};

function areset() {
	ascorePoint = 0;
	teamaScore.innerHTML = "0"+ ascorePoint;
}

function aaddset1() {
	aset1score ++;
	aset1.innerHTML = aset1score;
}
function asubset1() {
	if (aset1score > 0) {
		aset1score --;
		aset1.innerHTML = aset1score;
	}
}
function aaddset2() {
	aset2score ++;
	aset2.innerHTML = aset2score;
}
function asubset2() {
	if (aset2score > 0) {
		aset2score --;
		aset2.innerHTML = aset2score;
	}
}
function aaddset3() {
	aset3score ++;
	aset3.innerHTML = aset3score;
}
function asubset3() {
	if (aset3score > 0) {
		aset3score --;
		aset3.innerHTML = aset3score;
	}
}
function aaddset4() {
	aset4score ++;
	aset4.innerHTML = aset4score;
}
function asubset4() {
	if (aset4score > 0) {
		aset4score --;
		aset4.innerHTML = aset4score;
	}
}
function aaddset5() {
	aset5score ++;
	aset5.innerHTML = aset5score;
}
function asubset5() {
	if (aset5score > 0) {
		aset5score --;
		aset5.innerHTML = aset5score;
	}
}
function a1reset() {
	aset1score = 0;
	aset2score = 0;
	aset3score = 0;
	aset4score = 0;
	aset5score = 0;
	aset1.innerHTML = aset1score;
	aset2.innerHTML = aset2score;
	aset3.innerHTML = aset3score;
	aset4.innerHTML = aset4score;
	aset5.innerHTML = aset5score;
}

/* Team b */
function badd0() {
	bscorePoint = 0;
	teambScore.innerHTML = "0"+ bscorePoint;
};
function badd15() {
	bscorePoint = 15;
	teambScore.innerHTML = bscorePoint;
};
function badd30() {
	bscorePoint = 30;
	teambScore.innerHTML = bscorePoint;
};
function badd40() {
	bscorePoint = 40;
	teambScore.innerHTML = bscorePoint;
};
function baddA() {
	teambScore.innerHTML = "A";
};

function breset() {
	bscorePoint = 0;
	teambScore.innerHTML = "0"+ bscorePoint;
}

function baddset1() {
	bset1score ++;
	bset1.innerHTML = bset1score;
}
function bsubset1() {
	if (bset1score > 0) {
		bset1score --;
		bset1.innerHTML = bset1score;
	}
}
function baddset2() {
	bset2score ++;
	bset2.innerHTML = bset2score;
}
function bsubset2() {
	if (bset2score > 0) {
		bset2score --;
		bset2.innerHTML = bset2score;
	}
}
function baddset3() {
	bset3score ++;
	bset3.innerHTML = bset3score;
}
function bsubset3() {
	if (bset3score > 0) {
		bset3score --;
		bset3.innerHTML = bset3score;
	}
}
function baddset4() {
	bset4score ++;
	bset4.innerHTML = bset4score;
}
function bsubset4() {
	if (bset4score > 0) {
		bset4score --;
		bset4.innerHTML = bset4score;
	}
}
function baddset5() {
	bset5score ++;
	bset5.innerHTML = bset5score;
}
function bsubset5() {
	if (bset5score > 0) {
		bset5score --;
		bset5.innerHTML = bset5score;
	}
}
function b1reset() {
	bset1score = 0;
	bset2score = 0;
	bset3score = 0;
	bset4score = 0;
	bset5score = 0;
	bset1.innerHTML = bset1score;
	bset2.innerHTML = bset2score;
	bset3.innerHTML = bset3score;
	bset4.innerHTML = bset4score;
	bset5.innerHTML = bset5score;
}

