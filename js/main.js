/*
 * Class for main
 */
class Main {
    constructor() {
        // initialize palyer info
        this.playerInfo = new PlayerInfo();

        // initialize new board object
        this.board = new Board();
    }
}

/*
 * fucntion to get the board object
 */
Main.prototype.getBoard = function() {
    return this.board;
}

/*
 * fucntion to get the playerInfo object
 */
Main.prototype.getPlayerInfo = function() {
    return this.playerInfo;
}

/*
 * fucntion to initialize UI
 */
Main.prototype.initUI = function() {
    var board = this.getBoard();
    var boardContainer = $("#board");

    // Initialize board layout
    board.initLayout(boardContainer);
}

/*
 * fucntion to initialize the getName
 */
Main.prototype.init = function() {
    // initialize UI
    this.initUI();

    // register event handlers
    this.registerEvents();
}

/*
 * fucntion to register events
 */
Main.prototype.registerEvents = function() {
    this.registerPlayerClickEvent();
}

/*
 * fuction to register click on buttons
 */
Main.prototype.registerPlayerClickEvent = function() {
    var self = this;

    // register event for click on button
    $(".gameButton").on("click", function(e) {
        var element = $(this);

        // extract the row and column information
        var row  = element.data("row");
        var col = element.data("col");

        // Added to the bottom row and column in the matrix
        var currentRow = self.addToMatrix(row, col);

        if(currentRow > 5) {
            alert("Row is full");
            return;
        }

        self.updateColor(currentRow);

        if(self.checkWin()) {
            return;
        }

        self.updateCurrentPlayer();
    });
}

Main.prototype.updateColor = function(row) {
    var playerInfo = this.getPlayerInfo();

    // get the color for current player
    var currentPlayer = playerInfo.getCurrentPlayer();
    var color = currentPlayer.getColor();

    // select the element according to row
    var query = "*[data-row='"+row+"']";
    var element = $("#board").find(query);

    // add the color class to element
    element.addClass(color);
}

/*
 * function to add to matix
 */
Main.prototype.addToMatrix = function(row, col) {
    var board = this.getBoard();
    var playerInfo = this.getPlayerInfo();
    var currentPlayer = playerInfo.getCurrentPlayer();
    var currentPlayerNumber = currentPlayer.getNumber();

    // update matrix to the player
    var currentRow = board.addToMatrix(row, col, currentPlayerNumber);

    return currentRow;
}

/*
 * function check to game win
 */
Main.prototype.checkWin = function() {
    var board = this.getBoard();

    // check the game is won
    if(board.verticalWin() || board.horizontalWin() || board.diagonalWin()) {
        alert("won");
        return true;
    } else if(board.draw()) { //check if it is draw
        alert("draw");
        return true;
    }

    return false;
}


/*
 * function check to update the currentpalyer
 */
Main.prototype.updateCurrentPlayer = function() {
    var playerInfo = this.getPlayerInfo();
    playerInfo.updateCurrentPlayer();
}


// Initialize main on document ready
$(document).ready(function() {
    var main = new Main();
    main.init();
});
