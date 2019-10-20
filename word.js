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
            //console.log("Below is letterObjects.length");
            //console.log(this.letterObjects.length);
            //console.log("This.aletter Objects is below from Make word function");
            //console.log(this.letterObjects);
        }
    }
    this.showWordGuess = function (userGuess) {
        for (i = 0; i < this.letterObjects.length; i++) {
            if (userGuess == this.letterObjects[i].char[0]) {
                console.log("letter objects in showWOrdGuess",this.letterObjects[i].char[0])
                this.letterObjects[i].char[0].charCheck(userGuess);
               // this.charGuessed();
               
            }
            console.log("This shows, showWordGuess was activated, but failed to find the letter");
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
        console.log("This was the word you were looking for: " +joined);
        return joined;
        


    }

}
module.exports = Word; 