/*
 * Class for board operations
 */
class Board {
    /*
     * Constructor to initialize board matrix
     */
    constructor() {
        this.matrix = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
    }
}

/*
 * function to initialize the board ui
 */
Board.prototype.initLayout = function(element) {
    for (var row = 0; row < 6; row++) {
        var tr = $("<tr></tr>");
        for (var col = 0; col < 7; col++) {
            var td = $("<td><button class='button'></td>");
            tr.append(td);
        }

        element.append(tr);
    }
}

/*
 * function to get the value of board matrix
 */
Board.prototype.getMatrix = function() {
    return this.matrix;
}
