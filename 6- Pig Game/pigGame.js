// Global Variables
var scores, roundScore, activePlayer, gamePlaying, dice1, dice2 , lastDice, winScore, inputScore;
// Initialize
onInit();

function onInit() {
	// Clear Global Variables
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	dice1 = 0;
	dice2 = 0;
	lastDice = 0;
	// Clear Scores
	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;
	// Clear Current Scores
	document.querySelector("#current-0").textContent = 0;
	document.querySelector("#current-1").textContent = 0;
	// Set Player Names
	document.getElementById("name-0").textContent = "Yagmur";
	document.getElementById("name-1").textContent = "Serhat";
	// Clear Dice Images
	document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
	// Clear Active Button
	document.querySelector(".player-1-panel").classList.remove("active");
	// Clear Status
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	// Set Game Playing Statu
	gamePlaying = true;
}
// New Game Button - Event
document.querySelector(".btn-new").addEventListener("click", onInit);
// Roll Dice Button - Event
document.querySelector(".btn-roll").addEventListener("click", function() {
	if (gamePlaying) {
		// Create a Random Number for Dice
		dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
		// Change Dice Image 
		document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-1").src = "/image/dice-" + dice1 + ".png";
		
		document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-2").src = "/image/dice-" + dice2 + ".png";
		
		// Dice Control
		if (dice1 === 6 && dice2 === 6) {
			document.querySelector("#score-" + activePlayer).textContent = 0;
			nextPlayer();
		} else if (dice1 !== 1 && dice2 !== 1) {
			roundScore += dice1 + dice2;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}

	}
});
// Hold Button - Event
document.querySelector(".btn-hold").addEventListener("click", function() {
	if (gamePlaying) {
		// Add Current Score in Player Total Score
		scores[activePlayer] += roundScore;
		document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
		// Set Winning Score
		inputScore = document.querySelector(".final-score").value;
		if(inputScore){ winScore = inputScore; } 
		else{ winScore = 100; }
		// Score Control
		if (scores[activePlayer] >= winScore) {
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.querySelector(".dice-1").style.display = "none";
			document.querySelector(".dice-2").style.display = "none";
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});
// Next Player
function nextPlayer() {
	// Clear Current Scores
	lastDice = 0;
	roundScore = 0;
	document.getElementById("current-" + activePlayer).textContent = "0";
	// Change Active Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	// Change Active Toggle
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
	// Clear Dice Images
	document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}
