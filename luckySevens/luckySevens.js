function playGame() {
	var begBet = Number(document.forms["luckySevens"]["begBet"].value);
	if (begBet <= 0) {
		alert("Starting bet must be greater than zero.");
		document.forms["luckySevens"]["begBet"].value = "";
		document.forms["luckySevens"]["begBet"].focus();
		return false;
	}
	var winArray = [begBet];
	var rollCounter = 0;
	for (var gameMoney = begBet; gameMoney >= 1; rollCounter++) {
		dieOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dieTwo = Math.ceil(Math.random() * (1 + 6 - 1));
		if (Number(dieOne + dieTwo) == 7) {
			gameMoney += 4;
			winArray[winArray.length] = gameMoney;
		} else {
			gameMoney -= 1;
			winArray[winArray.length] = gameMoney;
		}
	}
	var maxWin = 0;
	for (var indexCounter = 0; indexCounter < winArray.length; indexCounter++) {
		if (winArray[indexCounter] > maxWin) {
			maxWin = winArray[indexCounter];
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = ("$" + begBet.toFixed(2));
	document.getElementById("totalRolls").innerText = rollCounter;
	document.getElementById("highAmount").innerText = ("$" + maxWin.toFixed(2));
	document.getElementById("highRollCount").innerText = winArray.indexOf(maxWin);
	document.getElementById("submitButton").innerText = "Play Again";
	document.forms["luckySevens"]["begBet"].focus();
}