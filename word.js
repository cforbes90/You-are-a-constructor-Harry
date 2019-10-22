// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
var letter = require("./letter");

var Word = function (Rumpelstiltskin) {
    this.display = [];
    this.winning=0;
    this.displayArray = [];
    this.letterObjects = [];
    this.guesses = 5;
    this.autoAddSpace = function () {
        this.letterObjects.spaceCheck();
    }
    // this.addLife = function (guesses) {
    //     guesses++;
    //     console.log("This is guesses in add life", guesses);}

    this.makeWord = function () {
        this.display = [];
        this.guesses = 5;
        //this.letterObjects =[];
        //this.winning=0;
        for (i = 0; i < Rumpelstiltskin.length; i++) {
            var newLetter = new letter(Rumpelstiltskin.charAt(i));
            this.letterObjects.push(newLetter);
            //console.log(newLetter);
            this.display.push(this.letterObjects[i].char.toUpperCase());
        }
        // console.log("Below is just this.display from makeWord");
        //console.log(this.display);
        //console.log("We are about to replace the above display with dashes");
        gameStartVisual();
        console.log("|-------GUESS THE WORD!!--------|", "\n");
        this.replaceLettersWithUnderscores();
        console.log("|-------GUESS THE WORD!!--------|", "\n");

    };
    this.replaceLettersWithUnderscores = function () {

        for (i = 0; i < this.display.length; i++) {
            var start_index = i;
            var numOfElements = 1;
            if (this.letterObjects[i].char == " ") {
                this.letterObjects[i].guessed = true;
                this.winning++;
                console.log("This is this.winning in replace Letters", this.winning);
            }
            if (!this.letterObjects[i].guessed) {
                this.display.splice(start_index, numOfElements, "_");
                // this.display.splice(start_index,numOfElements,this.letterObjects[i].char);
            }
        }
        //console.log("Below is just this.display from replace Underscores");
        console.log(this.display);
        console.log( "\n");
    };
    this.replaceUnderscoresWithLetters = function () {

        for (i = 0; i < this.display.length; i++) {
            var start_index = i;
            var numOfElements = 1;

            if (this.letterObjects[i].guessed) {
                this.display.splice(start_index, numOfElements, this.letterObjects[i].char);

            }
            
        }
        if (this.winning == this.display.length) {
            this.WIN();
        }
        // console.log("The dislpay length is: ", this.display.length);
        // console.log("Win variable is at: ", win);
        console.log(this.display);
    };

    this.showWordGuess = function (upper) {
        // console.log("Below is just this.display from showwordGuess");
        //console.log(this.display);
        //console.log("The above was the simple this.display in showWordGuess");

        for (i = 0; i < this.display.length; i++) {
            if (upper == this.letterObjects[i].char.toUpperCase()) {
                //console.log("This is upper in showWord Guess: ", upper);
                //console.log("letter objects in showWordGuess", this.letterObjects[i].char)
                this.letterObjects[i].guessed = true;
                this.winning++;
                console.log("This is this.winning in show WOrd Guess", this.winning);
                this.addGuesses();
                // console.log("This is win in showWordGuess: ", win);
                // console.log("Below is the letterObjects with the guess changed");
                // console.log(this.letterObjects[i]);
            }
        }
        this.replaceUnderscoresWithLetters();
    };
    this.showWordEndGame = function () {
        this.displayArray = [];
        for (i = 0; i < this.letterObjects.length; i++) {
            this.displayArray.push(this.letterObjects[i].char.toUpperCase());
        }
        // console.log("the following is ENDGAME displayarray");
        //console.log("The next was this.displayArray");
        //console.log(this.displayArray);
        //console.log("The previous was this.displayArray");
        var joined = this.displayArray.join("");
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("    This was the word you were looking for: " + joined);
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    };
    this.initialize=function(){

        this.guesses=5;
        this.display=[];
    }
    this.addGuesses = function () {
        this.guesses=this.guesses+ 1;
    }
    this.subtractGuesses = function () {
        this.guesses=this.guesses- 1;
    }
    this.RIP = function () {
        console.log("\x1b[1m", "\x1b[31m", "You failed...", "\x1b[0m");
        console.log(" ___________");
        console.log("/   R.I.P.  ⟍");
        console.log("| HERE LIES  |");
        console.log("|   ...      |");
        console.log("|" + "\x1b[5m", "YOU!!!!", "\x1b[0m   |");
        console.log("|            |");
        console.log(" ~~~~~~~~~~~~");
    };
    this.WIN = function () {
        console.log("You did it!! You have proved your nerdiness!");
        console.log("＼＼ ＿");
        console.log("＼(　•_•) F");
        console.log(" <　⌒ヽ A");
        console.log("/ 　 へ＼ B");
        console.log("/　　/　＼＼ U");
        console.log(" |　ノ　　 ヽ_つ L");
        console.log("/　/ O");
        console.log(" /　/| U");
        console.log("(　(ヽ S");
        console.log("|　|、＼");
        console.log("| 丿 ＼ ⌒)");
        console.log("| |　　) /");
        console.log("`ノ )　　Lﾉ");
    }
    gameStartVisual = function () {
        console.log("\n", "\n", "*~~~*~~~*~~~*~~~*~~~*~~~*~~~*")
        console.log("      Hello there!");
        console.log("          _██_");
        console.log("        ‹(•¿•)›");
        console.log("       .. (█)");
        console.log("       .../ I");
        console.log("    Care for a game?");
        console.log("*~~~*~~~*~~~*~~~*~~~*~~~*~~~*", "\n");
        console.log("\nEach blank represents an obscured letter you need to reveal.",
            "\nYou only have a few guesses but if your guess reveals a letter",
            "\nin the puzzle, you get another chance!");
        console.log("Those are all the rules, now LET'S GO!!!!", "\n", "\n");
    }

};

module.exports = Word; 