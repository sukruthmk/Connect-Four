/*
 * Class to config player information
 */
class PlayerInfo {
    constructor() {
        // create two new player variables
        var player1 = new Player("Player 1", "black", 1);
        var player2 = new Player("Player 2", "red", 2);

        // initialize data to class variables
        this.player1 = player1;
        this.player2 = player2;
        this.startingPlayer = player1;

        // set current player i.e player1
        this.currentPlayer = player1;
    }
}

/*
 * function to get the object of player 1
 */
PlayerInfo.prototype.getPlayer1 = function() {
    return this.player1;
}

/*
 * function to get the object of player 2
 */
PlayerInfo.prototype.getPlayer2 = function() {
    return this.player2;
}

/*
 * function to get the current palyer object
 */
PlayerInfo.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
}

/*
 * function to set the current palyer object
 */
PlayerInfo.prototype.setCurrentPlayer = function(player) {
    this.currentPlayer = player;
}

/*
 * function to update/swap current player object
 */
PlayerInfo.prototype.updateCurrentPlayer = function() {
    var currentPlayer = this.getCurrentPlayer();

    // check if it is first player
    if (currentpalyer == this.getPlayer1()) {
        // swap the turn to second player
        this.setCurrentPlayer(this.getPlayer2());
    } else {
        // swap the turn to first player
        this.setCurrentPlayer(this.getPlayer1());
    }
}
