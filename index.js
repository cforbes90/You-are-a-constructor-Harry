
var inquirer = require("inquirer");
var word = require("./word");
var wordlist = require("./wordlist");
var userGuess = "";
var guessedGuestList = [];
//var guesses = 3;
var computerWord = new word(wordlist[Math.floor(Math.random() * wordlist.length)]);

computerWord.makeWord();

function gameLoop() {
    if ((computerWord.guesses > 0) && (computerWord.display.length > computerWord.winning)) {
        console.log('Guesses remaining:', computerWord.guesses);
        inquirer.prompt([
            {
                name: "charGuessed",
                message: "Pick a letter!"
            }
        ]).then(function (answer) {
            computerWord.subtractGuesses();
            console.log("Below is computer Word guess after subtract Guesses");
            console.log(computerWord.guesses);
            userGuess = answer.charGuessed;
            //console.log('guessedGuestList', guessedGuestList, typeof answer.charGuessed)
            if (guessedGuestList.includes(answer.charGuessed.toUpperCase())) {
                console.log("You already tried that letter. Guess again!")
                computerWord.addGuesses();
                //gameLoop();
            }

            console.log("You guessed: " + userGuess + "!");
            
            var upper = userGuess.toUpperCase();
            //console.log("The following is upper: ", upper);
            computerWord.showWordGuess(upper);
            //console.log(computerWord.displayArray);
            guessedGuestList.push(upper);
            console.log('Guessed Guest List:', guessedGuestList);
            gameLoop();
        });
    }

    // if(computerWord.display.length=computerWord.winning){
    //     computerWord.WIN();
    //     replay();
    // }

    if (computerWord.guesses==0){
        computerWord.showWordEndGame();
        computerWord.RIP();
        replay();
    };
};
function replay() {
    inquirer.prompt([
        {
            type: "confirm",
            default: "False",
            name: "playAgain",
            message: "Want to try again?"

        }
    ]).then(function (resp) {
        if (resp.playAgain) {
            initialize();
        } else {
            goHomeToMommy();
        }
    })
}
function goHomeToMommy() {
    console.log("-----------Harry Potter was born July 31, 1980------------");
    console.log("-----------HARRY POTTER IS ABOUT TO ENTER HIS 40s------------");
    console.log("-----DON'T LET HIM LIVE IN THE PAST. HE NEEDS TO MOVE ON...------")
    console.log("------------------THANK YOU FOR HELPING HIM----------------------");

}

gameLoop();
function initialize() {
    //computerWord.guesses=3;
    guessedGuestList = [];
    computerWord.makeWord();
    gameLoop();
}

