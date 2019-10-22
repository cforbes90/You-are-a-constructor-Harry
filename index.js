
var inquirer = require("inquirer");
var word = require("./word");
var wordlist = require("./wordlist");
var userGuess = "";
var guessedGuestList = [];
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
            userGuess = answer.charGuessed;
            if (guessedGuestList.includes(answer.charGuessed.toUpperCase())) {
                console.log("You already tried that letter. Guess again!")
                computerWord.addGuesses();
                //gameLoop();
            }
            console.log("You guessed: " + userGuess + "!"); 
            var upper = userGuess.toUpperCase();
            computerWord.showWordGuess(upper);
            guessedGuestList.push(upper);
            console.log('Guessed Guest List:', guessedGuestList);
            gameLoop();
        });
    }
    if(computerWord.winning>=computerWord.display.length){
        console.log("You are pretty amazing!")
        replay();
    }

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
            console.log("Playing again? Well, that just proved your nerdiness...");
console.log("   ＼＼ ＿");
console.log("     ＼(　•_•) F");
console.log("      <　⌒ヽ A");
console.log("      / 　 へ＼ B");
console.log("     /　　/　＼＼ U");
console.log("     |　ノ　　 ヽ_つ L");
console.log("    /　/ O");
console.log("   /　/| U");
console.log("  (　(ヽ S");
console.log("  |　|、＼");
console.log("  | 丿 ＼ ⌒)");
console.log("  | |　　) /");
console.log("`ノ )　　Lﾉ");
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
    console.log("------------------THANK YOU FOR YOUR SUPPORT -------------------");

}

gameLoop();
function initialize() {
    guessedGuestList = [];
    computerWord.makeWord();
    gameLoop();
}

