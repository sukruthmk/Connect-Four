/*
 * Class to config player information
 */
class PlayerInfo {
    constructor() {
        // create two new player variables
        var player1 = new Player("Player 1", "black");
        var player2 = new Player("Player 2", "red");

        // initialize data to class variables
        this.player1 = player1;
        this.player2 = player2;
        this.startingPlayer = player1;
        this.connectToWin = 4;

        // set current player i.e player1
        this.currentPlayer = player1;
    }
}

/*
 * function to get the object of player 1
 */
Player.prototype.getPlayer1 = function() {
    return this.player1;
}

/*
 * function to get the object of player 2
 */
Player.prototype.getPlayer2 = function() {
    return this.player2;
}

/*
 * function to get the current palyer object
 */
Player.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
}
