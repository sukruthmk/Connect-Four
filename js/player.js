/*
 * Class to access player specific information
 */
class Player {
    /*
     * Constructor to initialize values
     */
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

/*
 * Function to get the name of the player
 */
Player.prototype.getName = function() {
    return this.name;
}

/*
 * Function to get the color of player
 */
Player.prototype.getColor = function() {
    return this.color;
}

/*
 * Function to set the name of player
 */
Player.prototype.setName = function(name) {
    this.name = name;
}

/*
 * Function to set the color of player
 */
Player.prototype.setColor = function(color) {
    this.color = color;
}
