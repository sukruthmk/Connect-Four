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
    $(".gameButton").on("click", function() {

    });
}

// Initialize main on document ready
$(document).ready(function() {
    var main = new Main();
    main.init();
});
