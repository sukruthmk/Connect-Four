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
            var td = $("<td></td>");
            var button = $("<button class='gameButton'>");
            button.data("row", 5-row);
            button.data("col", col);
            td.append(button);
            tr.append(td);
        }

        element.append(tr);
    }
}

/*
 * function to add bottom row and column value to matrix
 */
Board.prototype.addToMatrix = function(row, col, number) {
    var matrix = this.getMatrix();
    var currentRow = 6;

    // find the bottom row in the matrix with empty value
    for(var i=0; i<6; i++) {
        if(matrix[i][col] == 0) {
            currentRow = i;
            matrix[i][col] == number;
        }
    }

    return currentRow;
}

/*
 * function to get the value of board matrix
 */
Board.prototype.getMatrix = function() {
    return this.matrix;
}
