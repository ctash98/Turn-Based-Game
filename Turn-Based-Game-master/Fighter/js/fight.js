//Global Variables
var playerMove;
var enemyMove;
var savedEnemyMove;
var playerHealth = 100;
var enemyHealth = 100;
var totRounds = 0;
var res;
var playByPlay = document.getElementById('announcements');
var playerHealthBar = document.getElementById('playerHealthBar');
var enemyHealthBar = document.getElementById('enemyHealthBar');
var attackButton = document.getElementById('enemyHealthBar');
var attackButton = document.getElementById('attack');
var counterButton = document.getElementById('counter');
var playagain = document.getElementById('playAgain');
//Enable Buttons
function enableButtons () {
	attackButton.disabled = false;
	counterButton.disabled = false;
}
//Add Round
function addRound() {
	totRounds += 1;
}
//Displays Play By Play Announcements
function roundResults (res) {
	playByPlay.innerHTML += res + "<br>";
}
//Affects Health Bars CSS Style
function healthChange() {
	playerHealthBar.style.width = playerHealth + "%";
	enemyHealthBar.style.width =  enemyHealth + "%";
}
/*
//Ends Game (Crude System)
function gameOver() {
	if (playerHealth === 0 || enemyHealth === 0) {
		res = 'gameOver!';
		roundResults(res);
		attackButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = true;
	}
}
*/
//Handle Counter
function counter(y, c) {
	var move = Math.floor((Math.random() * 5));
	if ( move >= 3 && y === 'attack') {
		res = 'Enemy counter was successful! You took 10 damage';
		playerHealth -= 10;
	} else if(move >= 3 && y === 'counter') {
		res = 'Your counter was successful! Enemy took 10 damage';
		enemyHealth -=10
	} else if (move < 3 && y === 'attack') {
		res = 'Enemy counter failed! You dealt 15 damage!';
		enemyHealth -= 15;
	} else if (move < 3 && y === 'counter') {
		res = 'Your counter was not successful! You were delalt 15 damage!';
		playerHealth -= 15;
	}
}
//Random Enemy Move
function enemyMove(id) {
	var move = Math.floor((Math.random()*4)+1);
	if (move <= 3) {
		savedEnemyMove =  'attack';
	} else {
		savedEnemyMove = 'counter';
	};
	res = ('your move is <span>'+ id + '</span> and the enemys move is <span>' + savedEnemyMove + '</span> on round ' + totRounds);
	damageStep(id, savedEnemyMove);
	roundResults(res);
}
//The Magic Happens Here
function damageStep(y, c) {
	if ( y === 'attack' && c === 'attack') {
		res = 'Both you and your enemy took damage';
		if (enemyHealth >= 10 && playerHealth >= 10) {
			enemyHealth -= 10;
			playerHealth -= 10;
		} else {
			enemyHealth = 0;
			playerHealth = 0;
		}
	} else if ( y === 'counter' && c === 'counter') {
		res = 'Defensive stances taken in vain';
	} else if ( y === 'attack' && c === 'counter') {
		res = 'Comp took a defensive stance and prepares to counter';
		counter(y, c);
	} else if ( y === 'counter' && c === 'attack') {
		res = 'You took a defensive stance and prepare to counter';
		counter(y, c);
	}
}
//End Round
function fight(id) {
	addRound();
	enemyMove(id);
	healthChange();
	gameOver();
}
//Ends Game (Crude System)
function gameOver() {
	if (playerHealth === 0 || enemyHealth === 0) {
		res = 'gameOver!';
		roundResults(res);
		attackButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = true;
	}
}
//Startup 
window.onload=enableButtons();