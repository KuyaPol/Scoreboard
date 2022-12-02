$(document).ready(function(){
	$("#chplayerName").on('change', function(){
		$(".chData").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayerVsone, #chplayerVsonesub").on('change', function(){
		$(".chVs, chDtwo").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

	$("#chplayerVstwo, #chplayerVstwosub").on('change', function(){
		$(".chVstwo").hide();
		$("#" + $(this).val()).fadeIn(100);
	}).change();


	$("#chplayeroneRed, #chplayerxoneRed, #chplayeryoneRed").click( function(){
		$(".choneEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayertwoRed, #chplayerxtwoRed, #chplayerytwoRed").click( function(){
		$(".chtwoEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayerthreeRed, #chplayerxthreeRed, #chplayerythreeRed").click( function(){
		$(".chthreeEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayerfourRed, #chplayerxfourRed, #chplayeryfourRed").click( function(){
		$(".chfourEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayerfiveRed, #chplayerxfiveRed, #chplayeryfiveRed").click( function(){
		$(".chfiveEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayersixRed, #chplayerxsixRed, #chplayerysixRed").click( function(){
		$(".chsixEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayersevenRed, #chplayerxsevenRed, #chplayerysevenRed").click( function(){
		$(".chsevenEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();
	$("#chplayereightRed, #chplayerxeightRed, #chplayeryeightRed").click( function(){
		$(".cheightEliminate").toggle();
		$("#" + $(this).val()).fadeIn(100);
	}).change();

});

/* PLAYER 1 */
chxoneScore = document.querySelector("#ch-playerx1-score");
chyoneScore = document.querySelector("#ch-playery1-score");

let chonescorePoint = 0;

function choneAdd (){
	chonescorePoint++;
	chxoneScore.innerHTML = chonescorePoint;
	chyoneScore.innerHTML = chonescorePoint;
};
function choneAddhalf (){
	chonescorePoint = chonescorePoint + .5;
	chxoneScore.innerHTML = chonescorePoint;
	chyoneScore.innerHTML = chonescorePoint;
};
function choneSub(){
	if(chonescorePoint > .5) {
		chonescorePoint--;
		chxoneScore.innerHTML = chonescorePoint;
		chyoneScore.innerHTML = chonescorePoint;
	}
};
function choneSubhalf (){
	if(chonescorePoint > .4) {
		chonescorePoint = chonescorePoint - .5;
		chxoneScore.innerHTML = chonescorePoint;
		chyoneScore.innerHTML = chonescorePoint;
	}
};

/* input text/num */
var chonenameInput = document.getElementById('ch-player1-name');
var choneeloInput = document.getElementById('ch-player1-elo');
chxoneName = document.querySelector("#ch-playerx1-name");
chyoneName = document.querySelector("#ch-playery1-name");
chxoneElo = document.querySelector("#ch-playerx1-elo");
chyoneElo = document.querySelector("#ch-playery1-elo");


chonenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxoneName.innerHTML = chonenameInput.value;
		chyoneName.innerHTML = chonenameInput.value;
		document.getElementById('ch-playerx1').innerHTML 
	= chonenameInput.value;
		document.getElementById('ch-playery1').innerHTML 
	= chonenameInput.value;
		document.getElementById('ch-player1').innerHTML 
	= chonenameInput.value;
	}
});
choneeloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxoneElo.innerHTML = choneeloInput.value;
		chyoneElo.innerHTML = choneeloInput.value;
	}
});

var chonescoreInput = document.getElementById('ch-player1-score');

chonescoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chonescoreInput.value > 0) {
		chonescorePoint = chonescoreInput.value;
		chxoneScore.innerHTML = chonescorePoint;
		chyoneScore.innerHTML = chonescorePoint;
		} 
	} else {
			chonescorePoint = 0;
			chxoneScore.innerHTML = chonescorePoint;
			chyoneScore.innerHTML = chonescorePoint;
		}
});

var choneReset = document.querySelector("#ch1-reset");

choneReset.addEventListener('click', ()=>{
	chonescorePoint = chonescorePoint - chonescorePoint;
	$(".choneEliminate").hide();
	chonenameInput.value = '';
	choneeloInput.value = '';
	chonescoreInput.value = '';
	chxoneName.innerHTML = "Player 1";
	chyoneName.innerHTML = "Player 1";
	chxoneScore.innerHTML = chonescorePoint;
	chyoneScore.innerHTML = chonescorePoint;
	document.getElementById('ch-playerx1').innerHTML 
	= "Player 1";
		document.getElementById('ch-playery1').innerHTML 
	= "Player 1";
		document.getElementById('ch-player1').innerHTML 
	= "Player 1";
});

/* PLAYER 2 */

chxtwoScore = document.querySelector("#ch-playerx2-score");
chytwoScore = document.querySelector("#ch-playery2-score");

let chtwoscorePoint = 0;

function chtwoAdd(){
	chtwoscorePoint++;
	chxtwoScore.innerHTML = chtwoscorePoint;
	chytwoScore.innerHTML = chtwoscorePoint;
};
function chtwoAddhalf(){
	chtwoscorePoint = chtwoscorePoint + .5;
	chxtwoScore.innerHTML = chtwoscorePoint;
	chytwoScore.innerHTML = chtwoscorePoint;
};
function chtwoSub(){
	if(chtwoscorePoint > .5) {
		chtwoscorePoint--;
		chxtwoScore.innerHTML = chtwoscorePoint;
		chytwoScore.innerHTML = chtwoscorePoint;
	}
};
function chtwoSubhalf(){
	if(chtwoscorePoint > .4) {
		chtwoscorePoint = chtwoscorePoint - .5;
		chxtwoScore.innerHTML = chtwoscorePoint;
		chytwoScore.innerHTML = chtwoscorePoint;
	}
};

/* input text/num */
var chtwonameInput = document.getElementById('ch-player2-name');
var chtwoeloInput = document.getElementById('ch-player2-elo');
chxtwoName = document.querySelector("#ch-playerx2-name");
chytwoName = document.querySelector("#ch-playery2-name");
chxtwoElo = document.querySelector("#ch-playerx2-elo");
chytwoElo = document.querySelector("#ch-playery2-elo");


chtwonameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxtwoName.innerHTML = chtwonameInput.value;
		chytwoName.innerHTML = chtwonameInput.value;
		document.getElementById('ch-playerx2').innerHTML 
	= chtwonameInput.value;
		document.getElementById('ch-playery2').innerHTML 
	= chtwonameInput.value;
		document.getElementById('ch-player2').innerHTML 
	= chtwonameInput.value;
	}
});
chtwoeloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxtwoElo.innerHTML = chtwoeloInput.value;
		chytwoElo.innerHTML = chtwoeloInput.value;
	}
});

var chtwoscoreInput = document.getElementById('ch-player2-score');

chtwoscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chtwoscoreInput.value > 0) {
		chtwoscorePoint = chtwoscoreInput.value;
		chxtwoScore.innerHTML = chtwoscorePoint;
		chytwoScore.innerHTML = chtwoscorePoint;
		} 
	} else {
			chtwoscorePoint = 0;
			chxtwoScore.innerHTML = chtwoscorePoint;
			chytwoScore.innerHTML = chtwoscorePoint;
		}
});

var chtwoReset = document.querySelector("#ch2-reset");

chtwoReset.addEventListener('click', ()=>{
	chtwoscorePoint = chtwoscorePoint - chtwoscorePoint;
	$(".chtwoEliminate").hide();
	chtwonameInput.value = '';
	chtwoeloInput.value = '';
	chtwoscoreInput.value = '';
	chxtwoName.innerHTML = "Player 2";
	chytwoName.innerHTML = "Player 2";
	chxtwoScore.innerHTML = chtwoscorePoint;
	chytwoScore.innerHTML = chtwoscorePoint;
	document.getElementById('ch-playerx2').innerHTML 
	= "Player 2";
		document.getElementById('ch-playery2').innerHTML 
	= "Player 2";
		document.getElementById('ch-player2').innerHTML 
	= "Player 2";
});

/* PLAYER 3 */

chxthreeScore = document.querySelector("#ch-playerx3-score");
chythreeScore = document.querySelector("#ch-playery3-score");

let chthreescorePoint = 0;

function chthreeAdd(){
	chthreescorePoint++;
	chxthreeScore.innerHTML = chthreescorePoint;
	chythreeScore.innerHTML = chthreescorePoint;
};
function chthreeAddhalf(){
	chthreescorePoint = chthreescorePoint + .5;
	chxthreeScore.innerHTML = chthreescorePoint;
	chythreeScore.innerHTML = chthreescorePoint;
};
function chthreeSub(){
	if(chthreescorePoint > .5) {
		chthreescorePoint--;
		chxthreeScore.innerHTML = chthreescorePoint;
		chythreeScore.innerHTML = chthreescorePoint;
	}
};
function chthreeSubhalf(){
	if(chthreescorePoint > .4) {
		chthreescorePoint = chthreescorePoint - .5;
		chxthreeScore.innerHTML = chthreescorePoint;
		chythreeScore.innerHTML = chthreescorePoint;
	}
};

/* input text/num */
var chthreenameInput = document.getElementById('ch-player3-name');
var chthreeeloInput = document.getElementById('ch-player3-elo');
chxthreeName = document.querySelector("#ch-playerx3-name");
chythreeName = document.querySelector("#ch-playery3-name");
chxthreeElo = document.querySelector("#ch-playerx3-elo");
chythreeElo = document.querySelector("#ch-playery3-elo");


chthreenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxthreeName.innerHTML = chthreenameInput.value;
		chythreeName.innerHTML = chthreenameInput.value;
		document.getElementById('ch-playerx3').innerHTML 
	= chthreenameInput.value;
		document.getElementById('ch-playery3').innerHTML 
	= chthreenameInput.value;
		document.getElementById('ch-player3').innerHTML 
	= chthreenameInput.value;
	}
});
chthreeeloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxthreeElo.innerHTML = chthreeeloInput.value;
		chythreeElo.innerHTML = chthreeeloInput.value;
	}
});

var chthreescoreInput = document.getElementById('ch-player3-score');

chthreescoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chthreescoreInput.value > 0) {
		chthreescorePoint = chthreescoreInput.value;
		chxthreeScore.innerHTML = chthreescorePoint;
		chythreeScore.innerHTML = chthreescorePoint;
		} 
	} else {
			chthreescorePoint = 0;
			chxthreeScore.innerHTML = chthreescorePoint;
			chythreeScore.innerHTML = chthreescorePoint;
		}
});

var chthreeReset = document.querySelector("#ch3-reset");

chthreeReset.addEventListener('click', ()=>{
	chthreescorePoint = chthreescorePoint - chthreescorePoint;
	$(".chthreeEliminate").hide();
	chthreenameInput.value = '';
	chthreeeloInput.value = '';
	chthreescoreInput.value = '';
	chxthreeName.innerHTML = "Player 3";
	chythreeName.innerHTML = "Player 3";
	chxthreeScore.innerHTML = chthreescorePoint;
	chythreeScore.innerHTML = chthreescorePoint;
	document.getElementById('ch-playerx3').innerHTML 
	= "Player 3";
		document.getElementById('ch-playery3').innerHTML 
	= "Player 3";
		document.getElementById('ch-player3').innerHTML 
	= "Player 3";
});


/* PLAYER 4 */

chxfourScore = document.querySelector("#ch-playerx4-score");
chyfourScore = document.querySelector("#ch-playery4-score");

let chfourscorePoint = 0;

function chfourAdd(){
	chfourscorePoint++;
	chxfourScore.innerHTML = chfourscorePoint;
	chyfourScore.innerHTML = chfourscorePoint;
};
function chfourAddhalf(){
	chfourscorePoint = chfourscorePoint + .5;
	chxfourScore.innerHTML = chfourscorePoint;
	chyfourScore.innerHTML = chfourscorePoint;
};
function chfourSub(){
	if(chfourscorePoint > .5) {
		chfourscorePoint--;
		chxfourScore.innerHTML = chfourscorePoint;
		chyfourScore.innerHTML = chfourscorePoint;
	}
};
function chfourSubhalf(){
	if(chfourscorePoint > .4) {
		chfourscorePoint = chfourscorePoint - .5;
		chxfourScore.innerHTML = chfourscorePoint;
		chyfourScore.innerHTML = chfourscorePoint;
	}
};

/* input text/num */
var chfournameInput = document.getElementById('ch-player4-name');
var chfoureloInput = document.getElementById('ch-player4-elo');
chxfourName = document.querySelector("#ch-playerx4-name");
chyfourName = document.querySelector("#ch-playery4-name");
chxfourElo = document.querySelector("#ch-playerx4-elo");
chyfourElo = document.querySelector("#ch-playery4-elo");


chfournameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxfourName.innerHTML = chfournameInput.value;
		chyfourName.innerHTML = chfournameInput.value;
		document.getElementById('ch-playerx4').innerHTML 
	= chfournameInput.value;
		document.getElementById('ch-playery4').innerHTML 
	= chfournameInput.value;
		document.getElementById('ch-player4').innerHTML 
	= chfournameInput.value;
	}
});
chfoureloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxfourElo.innerHTML = chfoureloInput.value;
		chyfourElo.innerHTML = chfoureloInput.value;
	}
});

var chfourscoreInput = document.getElementById('ch-player4-score');

chfourscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chfourscoreInput.value > 0) {
		chfourscorePoint = chfourscoreInput.value;
		chxfourScore.innerHTML = chfourscorePoint;
		chyfourScore.innerHTML = chfourscorePoint;
		} 
	} else {
			chfourscorePoint = 0;
			chxfourScore.innerHTML = chfourscorePoint;
			chyfourScore.innerHTML = chfourscorePoint;
		}
});

var chfourReset = document.querySelector("#ch4-reset");

chfourReset.addEventListener('click', ()=>{
	chfourscorePoint = chfourscorePoint - chfourscorePoint;
	$(".chfourEliminate").hide();
	chfournameInput.value = '';
	chfoureloInput.value = '';
	chfourscoreInput.value = '';
	chxfourName.innerHTML = "Player 4";
	chyfourName.innerHTML = "Player 4";
	chxfourScore.innerHTML = chfourscorePoint;
	chyfourScore.innerHTML = chfourscorePoint;
	document.getElementById('ch-playerx4').innerHTML 
	= "Player 4";
		document.getElementById('ch-playery4').innerHTML 
	= "Player 4";
		document.getElementById('ch-player4').innerHTML 
	= "Player 4";
});

/* PLAYER 5 */

chxfiveScore = document.querySelector("#ch-playerx5-score");
chyfiveScore = document.querySelector("#ch-playery5-score");

let chfivescorePoint = 0;

function chfiveAdd(){
	chfivescorePoint++;
	chxfiveScore.innerHTML = chfivescorePoint;
	chyfiveScore.innerHTML = chfivescorePoint;
};
function chfiveAddhalf(){
	chfivescorePoint = chfivescorePoint + .5;
	chxfiveScore.innerHTML = chfivescorePoint;
	chyfiveScore.innerHTML = chfivescorePoint;
};
function chfiveSub(){
	if(chfivescorePoint > .5) {
		chfivescorePoint--;
		chxfiveScore.innerHTML = chfivescorePoint;
		chyfiveScore.innerHTML = chfivescorePoint;
	}
};
function chfiveSubhalf(){
	if(chfivescorePoint > .4) {
		chfivescorePoint = chfivescorePoint - .5;
		chxfiveScore.innerHTML = chfivescorePoint;
		chyfiveScore.innerHTML = chfivescorePoint;
	}
};

/* input text/num */
var chfivenameInput = document.getElementById('ch-player5-name');
var chfiveeloInput = document.getElementById('ch-player5-elo');
chxfiveName = document.querySelector("#ch-playerx5-name");
chyfiveName = document.querySelector("#ch-playery5-name");
chxfiveElo = document.querySelector("#ch-playerx5-elo");
chyfiveElo = document.querySelector("#ch-playery5-elo");


chfivenameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxfiveName.innerHTML = chfivenameInput.value;
		chyfiveName.innerHTML = chfivenameInput.value;
		document.getElementById('ch-playerx5').innerHTML 
	= chfivenameInput.value;
		document.getElementById('ch-playery5').innerHTML 
	= chfivenameInput.value;
		document.getElementById('ch-player5').innerHTML 
	= chfivenameInput.value;
	}
});
chfiveeloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxfiveElo.innerHTML = chfiveeloInput.value;
		chyfiveElo.innerHTML = chfiveeloInput.value;
	}
});

var chfivescoreInput = document.getElementById('ch-player5-score');

chfivescoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chfivescoreInput.value > 0) {
		chfivescorePoint = chfivescoreInput.value;
		chxfiveScore.innerHTML = chfivescorePoint;
		chyfiveScore.innerHTML = chfivescorePoint;
		} 
	} else {
			chfivescorePoint = 0;
			chxfiveScore.innerHTML = chfivescorePoint;
			chyfiveScore.innerHTML = chfivescorePoint;
		}
});

var chfiveReset = document.querySelector("#ch5-reset");

chfiveReset.addEventListener('click', ()=>{
	chfivescorePoint = chfivescorePoint - chfivescorePoint;
	$(".chfiveEliminate").hide();
	chfivenameInput.value = '';
	chfiveeloInput.value = '';
	chfivescoreInput.value = '';
	chxfiveName.innerHTML = "Player 5";
	chyfiveName.innerHTML = "Player 5";
	chxfiveScore.innerHTML = chfivescorePoint;
	chyfiveScore.innerHTML = chfivescorePoint;
	document.getElementById('ch-playerx5').innerHTML 
	= "Player 5";
		document.getElementById('ch-playery5').innerHTML 
	= "Player 5";
		document.getElementById('ch-player5').innerHTML 
	= "Player 5";
});

/* PLAYER 6 */

chxsixScore = document.querySelector("#ch-playerx6-score");
chysixScore = document.querySelector("#ch-playery6-score");

let chsixscorePoint = 0;

function chsixAdd(){
	chsixscorePoint++;
	chxsixScore.innerHTML = chsixscorePoint;
	chysixScore.innerHTML = chsixscorePoint;
};
function chsixAddhalf(){
	chsixscorePoint = chsixscorePoint + .5;
	chxsixScore.innerHTML = chsixscorePoint;
	chysixScore.innerHTML = chsixscorePoint;
};
function chsixSub(){
	if(chsixscorePoint > .5) {
		chsixscorePoint--;
		chxsixScore.innerHTML = chsixscorePoint;
		chysixScore.innerHTML = chsixscorePoint;
	}
};
function chsixSubhalf(){
	if(chsixscorePoint > .4) {
		chsixscorePoint = chsixscorePoint - .5;
		chxsixScore.innerHTML = chsixscorePoint;
		chysixScore.innerHTML = chsixscorePoint;
	}
};

/* input text/num */
var chsixnameInput = document.getElementById('ch-player6-name');
var chsixeloInput = document.getElementById('ch-player6-elo');
chxsixName = document.querySelector("#ch-playerx6-name");
chysixName = document.querySelector("#ch-playery6-name");
chxsixElo = document.querySelector("#ch-playerx6-elo");
chysixElo = document.querySelector("#ch-playery6-elo");


chsixnameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxsixName.innerHTML = chsixnameInput.value;
		chysixName.innerHTML = chsixnameInput.value;
		document.getElementById('ch-playerx6').innerHTML 
	= chsixnameInput.value;
		document.getElementById('ch-playery6').innerHTML 
	= chsixnameInput.value;
		document.getElementById('ch-player6').innerHTML 
	= chsixnameInput.value;
	}
});
chsixeloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxsixElo.innerHTML = chsixeloInput.value;
		chysixElo.innerHTML = chsixeloInput.value;
	}
});

var chsixscoreInput = document.getElementById('ch-player6-score');

chsixscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chsixscoreInput.value > 0) {
		chsixscorePoint = chsixscoreInput.value;
		chxsixScore.innerHTML = chsixscorePoint;
		chysixScore.innerHTML = chsixscorePoint;
		} 
	} else {
			chsixscorePoint = 0;
			chxsixScore.innerHTML = chsixscorePoint;
			chysixScore.innerHTML = chsixscorePoint;
		}
});

var chsixReset = document.querySelector("#ch6-reset");

chsixReset.addEventListener('click', ()=>{
	chsixscorePoint = chsixscorePoint - chsixscorePoint;
	$(".chsixEliminate").hide();
	chsixnameInput.value = '';
	chsixeloInput.value = '';
	chsixscoreInput.value = '';
	chxsixName.innerHTML = "Player 6";
	chysixName.innerHTML = "Player 6";
	chxsixScore.innerHTML = chsixscorePoint;
	chysixScore.innerHTML = chsixscorePoint;
	document.getElementById('ch-playerx6').innerHTML 
	= "Player 6";
		document.getElementById('ch-playery6').innerHTML 
	= "Player 6";
		document.getElementById('ch-player6').innerHTML 
	= "Player 6";
});

/* PLAYER 7 */

chxsevenScore = document.querySelector("#ch-playerx7-score");
chysevenScore = document.querySelector("#ch-playery7-score");

let chsevenscorePoint = 0;

function chsevenAdd(){
	chsevenscorePoint++;
	chxsevenScore.innerHTML = chsevenscorePoint;
	chysevenScore.innerHTML = chsevenscorePoint;
};
function chsevenAddhalf(){
	chsevenscorePoint = chsevenscorePoint + .5;
	chxsevenScore.innerHTML = chsevenscorePoint;
	chysevenScore.innerHTML = chsevenscorePoint;
};
function chsevenSub(){
	if(chsevenscorePoint > .5) {
		chsevenscorePoint--;
		chxsevenScore.innerHTML = chsevenscorePoint;
		chysevenScore.innerHTML = chsevenscorePoint;
	}
};
function chsevenSubhalf(){
	if(chsevenscorePoint > .4) {
		chsevenscorePoint = chsevenscorePoint - .5;
		chxsevenScore.innerHTML = chsevenscorePoint;
		chysevenScore.innerHTML = chsevenscorePoint;
	}
};

/* input text/num */
var chsevennameInput = document.getElementById('ch-player7-name');
var chseveneloInput = document.getElementById('ch-player7-elo');
chxsevenName = document.querySelector("#ch-playerx7-name");
chysevenName = document.querySelector("#ch-playery7-name");
chxsevenElo = document.querySelector("#ch-playerx7-elo");
chysevenElo = document.querySelector("#ch-playery7-elo");


chsevennameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxsevenName.innerHTML = chsevennameInput.value;
		chysevenName.innerHTML = chsevennameInput.value;
		document.getElementById('ch-playerx7').innerHTML 
	= chsevennameInput.value;
		document.getElementById('ch-playery7').innerHTML 
	= chsevennameInput.value;
		document.getElementById('ch-player7').innerHTML 
	= chsevennameInput.value;
	}
});
chseveneloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxsevenElo.innerHTML = chseveneloInput.value;
		chysevenElo.innerHTML = chseveneloInput.value;
	}
});

var chsevenscoreInput = document.getElementById('ch-player7-score');

chsevenscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (chsevenscoreInput.value > 0) {
		chsevenscorePoint = chsevenscoreInput.value;
		chxsevenScore.innerHTML = chsevenscorePoint;
		chysevenScore.innerHTML = chsevenscorePoint;
		} 
	} else {
			chsevenscorePoint = 0;
			chxsevenScore.innerHTML = chsevenscorePoint;
			chysevenScore.innerHTML = chsevenscorePoint;
		}
});

var chsevenReset = document.querySelector("#ch7-reset");

chsevenReset.addEventListener('click', ()=>{
	chsevenscorePoint = chsevenscorePoint - chsevenscorePoint;
	$(".chsevenEliminate").hide();
	chsevennameInput.value = '';
	chseveneloInput.value = '';
	chsevenscoreInput.value = '';
	chxsevenName.innerHTML = "Player 7";
	chysevenName.innerHTML = "Player 7";
	chxsevenScore.innerHTML = chsevenscorePoint;
	chysevenScore.innerHTML = chsevenscorePoint;
	document.getElementById('ch-playerx7').innerHTML 
	= "Player 7";
		document.getElementById('ch-playery7').innerHTML 
	= "Player 7";
		document.getElementById('ch-player7').innerHTML 
	= "Player 7";
});

/* PLAYER 8 */

chxeightScore = document.querySelector("#ch-playerx8-score");
chyeightScore = document.querySelector("#ch-playery8-score");

let cheightscorePoint = 0;

function cheightAdd(){
	cheightscorePoint++;
	chxeightScore.innerHTML = cheightscorePoint;
	chyeightScore.innerHTML = cheightscorePoint;
};
function cheightAddhalf(){
	cheightscorePoint = cheightscorePoint + .5;
	chxeightScore.innerHTML = cheightscorePoint;
	chyeightScore.innerHTML = cheightscorePoint;
};
function cheightSub(){
	if(cheightscorePoint > .5) {
		cheightscorePoint--;
		chxeightScore.innerHTML = cheightscorePoint;
		chyeightScore.innerHTML = cheightscorePoint;
	}
};
function cheightSubhalf(){
	if(cheightscorePoint > .4) {
		cheightscorePoint = cheightscorePoint - .5;
		chxeightScore.innerHTML = cheightscorePoint;
		chyeightScore.innerHTML = cheightscorePoint;
	}
};

/* input text/num */
var cheightnameInput = document.getElementById('ch-player8-name');
var cheighteloInput = document.getElementById('ch-player8-elo');
chxeightName = document.querySelector("#ch-playerx8-name");
chyeightName = document.querySelector("#ch-playery8-name");
chxeightElo = document.querySelector("#ch-playerx8-elo");
chyeightElo = document.querySelector("#ch-playery8-elo");

cheightnameInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxeightName.innerHTML = cheightnameInput.value;
		chyeightName.innerHTML = cheightnameInput.value;
		document.getElementById('ch-playerx8').innerHTML 
	= cheightnameInput.value;
		document.getElementById('ch-playery8').innerHTML 
	= cheightnameInput.value;
		document.getElementById('ch-player8').innerHTML 
	= cheightnameInput.value;
	}
});

cheighteloInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		chxeightElo.innerHTML = cheighteloInput.value;
		chyeightElo.innerHTML = cheighteloInput.value;
	}
});

var cheightscoreInput = document.getElementById('ch-player8-score');

cheightscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (cheightscoreInput.value > 0) {
		cheightscorePoint = cheightscoreInput.value;
		chxeightScore.innerHTML = cheightscorePoint;
		chyeightScore.innerHTML = cheightscorePoint;
		} 
	} else {
			cheightscorePoint = 0;
			chxeightScore.innerHTML = cheightscorePoint;
			chyeightScore.innerHTML = cheightscorePoint;
		}
});

var cheightReset = document.querySelector("#ch8-reset");

cheightReset.addEventListener('click', ()=>{
	cheightscorePoint = cheightscorePoint - cheightscorePoint;
	$(".cheightEliminate").hide();
	cheightnameInput.value = '';
	cheighteloInput.value = '';
	cheightscoreInput.value = '';
	chxeightName.innerHTML = "Player 8";
	chyeightName.innerHTML = "Player 8";
	chxeightScore.innerHTML = cheightscorePoint;
	chyeightScore.innerHTML = cheightscorePoint;
	document.getElementById('ch-playerx8').innerHTML 
	= "Player 8";
		document.getElementById('ch-playery8').innerHTML 
	= "Player 8";
		document.getElementById('ch-player8').innerHTML 
	= "Player 8";
});

/* input score */
var cheightscoreInput = document.getElementById('ch-player8-score');

cheightscoreInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (cheightscoreInput.value > 0) {
		cheightscorePoint = cheightscoreInput.value;
		chxeightScore.innerHTML = cheightscorePoint;
		chyeightScore.innerHTML = cheightscorePoint;
		} 
	} else {
			cheightscorePoint = 0;
			chxeightScore.innerHTML = cheightscorePoint;
			chyeightScore.innerHTML = cheightscorePoint;
		}
});

/* EDIT GAME/DELAY & UNDER ELO */

var editGamedelay = document.querySelector('#edit-game-delay');
var editUnderelo = document.querySelector('#edit-under-elo');

editGamedelay.addEventListener('click', ()=>{
	let inputgNum = prompt("How many games?", 2);
	let inputdNum = prompt("What is your delay time?", 0);
	if (inputgNum > 0 && inputdNum > -.99) {
		document.getElementById('ch-game-display').innerHTML 
		= "G" + inputgNum + " d" + inputdNum;
	}
	else {
		alert("Invalid input. Try Again");
	}
});

editUnderelo.addEventListener('click', ()=>{
	let inputuNum = prompt("Under what elo?", 1200);
	if (inputuNum > 0) {
		document.getElementById('ch-under-elo').innerHTML 
		= "U" + inputuNum;
	}
	else {
		alert("Invalid input. Try Again");
	}
});
