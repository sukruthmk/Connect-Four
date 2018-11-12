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

        // set constants
        this.maxRow = 6;
        this.maxCol = 7;
        this.connectToWin = 4;
    }
}

/*
 * function to initialize the board ui
 */
Board.prototype.initLayout = function(element) {
    for (var row = 0; row < this.maxRow; row++) {
        var tr = $("<tr></tr>");
        for (var col = 0; col < this.maxCol; col++) {
            var td = $("<td></td>");
            var button = $("<button class='gameButton'>");
            button.data("row", this.maxRow - 1 - row);
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
    var currentRow = this.maxRow;

    // find the bottom row in the matrix with empty value
    for (var i = 0; i < this.maxRow; i++) {
        if (matrix[i][col] == 0) {
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

/*
 * function to update count when oldvalue == currentvalue
 */
Board.prototype.updateCount = function(oldValue, currentValue, count) {
    if (currentValue != 0 && currentValue == oldValue) {
        count++;
    } else {
        count = 1;
    }

    return count;
}


/*
 * function to check vertical win of martrix
 */
Board.prototype.verticalWin = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;

    // loop vertically
    for (var col = 0; col < this.maxCol; col++) {
        for (var row = 0; row < this.maxRow; row++) {
            currentValue = matrix[row][col];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;
        }

        // reset old values
        count = 1;
        oldValue = null;
    }

    return false;
}

/*
 * function to check horizontal win of martrix
 */
Board.prototype.horizontalWin = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;

    // loop horizontally
    for (var row = 0; row < this.maxRow; row++) {
        for (var col = 0; col < this.maxCol; col++) {
            currentValue = matrix[row][col];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;
        }

        // reset old values
        count = 1;
        oldValue = null;
    }

    return false;
}

/*
 * function to check diagonal win of martrix
 */
Board.prototype.diagonalWin = function() {
    // iterate all diagonal possibilities
    var bottomRight = this.diagonalBottomRight();
    var bottomLeft = this.diagonalBottomLeft();
    var topRight = this.diagonalTopRight();
    var topLeft = this.diagonalTopLeft();

    // return result if any one contains true
    return bottomRight || bottomLeft || topRight || topLeft;
}

/*
 * function to check diagonal win from bottom right
 */
Board.prototype.diagonalBottomRight = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;
    var matrix = this.getMatrix();

    for (var row = 0; row < this.maxRow; row++) {
        var currentRow = row;
        var currentCol = 0;
        while (currentRow <= this.maxRow && currentCol <= this.maxCol) {
            currentValue = matrix[currentRow][currentCol];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;

            // update pointers diagonally
            currentRow++;
            currentCol++;
        }

        count = 1;
        oldValue = null;
    }

    return false;
}

/*
 * function to check diagonal win from bottom left
 */
Board.prototype.diagonalBottomLeft = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;
    var matrix = this.getMatrix();

    for (var row = 0; row < this.maxRow; row++) {
        var currentRow = row;
        var currentCol = 0;
        while (currentRow >= 0 && currentCol <= this.maxCol) {
            currentValue = matrix[currentRow][currentCol];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;

            // update pointers diagonally
            currentRow--;
            currentCol++;
        }

        count = 1;
        oldValue = null;
    }

    return false;
}

/*
 * function to check diagonal win from bottom left
 */
Board.prototype.diagonalTopRight = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;
    var matrix = this.getMatrix();

    for (var col = 0; row < this.maxCol; col++) {
        var currentRow = 0;
        var currentCol = col;
        while (currentRow <= this.maxRow && currentCol <= this.maxCol) {
            currentValue = matrix[currentRow][currentCol];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;

            // update pointers diagonally
            currentRow++;
            currentCol++;
        }

        count = 1;
        oldValue = null;
    }

    return false;
}

/*
 * function to check diagonal win from bottom left
 */
Board.prototype.diagonalTopRight = function() {
    var oldValue = null;
    var count = 1;
    var currentValue = null;
    var matrix = this.getMatrix();

    for (var col = 0; row < this.maxCol; col++) {
        var currentRow = this.maxRow - 1;
        var currentCol = col;
        while (currentRow >= 0 && currentCol <= this.maxCol) {
            currentValue = matrix[currentRow][currentCol];

            // update count value based on oldValue and currentValue comparision
            count = this.updateCount(oldValue, currentValue, count);

            // check if there are enough connections to win
            if (count >= this.connectToWin) {
                return true;
            }

            // assign current value to old value to compare next time
            oldValue = currentValue;

            // update pointers diagonally
            currentRow--;
            currentCol++;
        }

        count = 1;
        oldValue = null;
    }

    return false;
}


/*
 * function to check if game is draw
 */
Board.prototype.draw = function() {
    var matrix = this.getMatrix();

    // check if all the values are filled in matrix
    for (var row = 0; row < this.maxRow; row++) {
        for (var col = 0; col < this.maxCol; col++) {
            if (martrix[row][col] == 0) {
                return false;
            }
        }
    }

    return true;
}
