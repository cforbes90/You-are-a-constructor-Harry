// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
var letter = require("./letter");
var display = [];
var Word = function (Rumpelstiltskin) {

    this.letterObjects = [];

    this.makeWord = function () {
        this.display=[];
        for (i = 0; i < Rumpelstiltskin.length; i++) {
            var  newLetter = new letter(Rumpelstiltskin.charAt(i));
            this.letterObjects.push(newLetter);
            //console.log("This is console log in makeWord");
            console.log(newLetter);
        }
    }
    this.showWordGuess = function (userGuess) {
        for (i = 0; i < this.letterObjects.length; i++) {
            if (userGuess == this.letterObjects[i].char[0]) {
                console.log("userGuess", userGuess)
                this.charCheck();
                this.charGuessed();
               
            }
        }
    }
    this.showWordEndGame = function () {
        for (i = 0; i < this.letterObjects.length; i++) {
            this.display.push(this.letterObjects[i].char[0]);
            //console.log("this following is letterobjectsi char 0");
            console.log(this.letterObjects[i].char[0]);
            // console.log("the following is display");
            // console.log(this.display[i]);
        }
        console.log("The next was this.display");

        console.log(this.display);
        console.log("The previous was this.display");
        var joined = this.display.join("");
        console.log(joined);
        return joined;
        


    }

}
module.exports = Word; 