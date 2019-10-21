// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
var userInput = "";

var Letter = function (char) {
    this.char = char.charAt(0);
    this.guessed = false;
    this.charGuessed = function () {
        if (this.guessed === true) {
            console.log("----------")
            console.log(this.char)
            console.log("-----------");
        } else {
            console.log("_");
        }

    }
    this.charCheck = function (char) {
        if (this.char == userGuess) {
            this.guessed = true;
            console.log("True!!!");
            return true;
        } else {
            return false;
        }
    }
    //Because of the names in the array have a space that has to be dealt with. 
    this.spaceCheck = function (char) {
        if (this.char == " ") {
            this.guessed = true;

        } else {
            this.guessed = false;
        }

    };
    this.showLetter = function () {
        return this.char;
    };
};
module.exports = Letter;