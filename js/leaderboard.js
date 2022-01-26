function Player(myName, myDate, myScore) {
    this.name = myName;
    this.date = myDate;
    this.score = myScore;
}

// Create new players
player1 = new Player("Thomas", "01/23/18", 201);
player2 = new Player("Michael", "03/24/17", 943);
player3 = new Player("Lisa", "06/04/18", 79); 
Players = [player1, player2, player3];

function displayLeaderboard() {
    let theExport = ""; 
    Players.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score);
    Players.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>');
    document.getElementById("thingy").innerHTML = theExport; //Why have good ID's when you can have bad ones? | Who needs children when we can use innerHTML?
}

displayLeaderboard();