// Tasks to complete 
//1 Prompts for user
// 2 word array to choose from
// 3 random function that will choose from that word array
// 4 loop that spells out word using underscores and displays them
//5 user guess unti correctly an dlogic for establishing win
// Display letters that have been guessed so far! push guessed letters to an array and then 
//display that array
var inquirer=require("inquirer");
var word=require("./word");
var letter=require("./letter");
var wordlist=require("./wordlist");
var userGuess="";
var guessedGuestList=[];
var guesses=3;
var computerWord= new word(wordlist[Math.floor(Math.random()*wordlist.length)]);

computerWord.makeWord();
//for(i=0; i<computerWord.letterObjects.length; i++){
    //console.log("the next thing is computerWord.letterObjects[i].char called from Index");
//computerWord.letterObjects[i].char[0].spaceCheck();
//console.log( computerWord.letterObjects[i].char);
//}
//console.log("the following is trying to drill down");
//console.log(computerWord.letterObjects.char);
//console.log('after running makeWord computerWord:', computerWord.letterObjects);
//console.log(this.letterObjects);
// console.log("This is word");
// console.log(word);
//console.log("next is word.char");
//console.log(this.word.makeWord(computerWord));
// this.showWordEndGame();

// console.log("\x1b[1m", "\x1b[31m", "You failed...", "\x1b[0m");
// console.log(" ___________");
// console.log("/   R.I.P.  ⟍");
// console.log("| HERE LIES  |");
// console.log("|   ...      |");
// console.log("|"+"\x1b[5m",  "YOU!!!!", "\x1b[0m   |");
// console.log("|            |");
// console.log(" ~~~~~~~~~~~~");
function gameStart(){
    console.log("*~~~*~~~*~~~*~~~*~~~*~~~*~~~*")
    console.log("      Hello there!");
    console.log("          _██_");
    console.log("        ‹(•¿•)›");
    console.log("       .. (█)");
    console.log("       .../ I");
    console.log("    Care for a game?");
    console.log("*~~~*~~~*~~~*~~~*~~~*~~~*~~~*");
    };

// console.log('|guessedGuestList:', guessedGuestList+ "|");
gameStart();
function gameLoop(){
    if (guesses>0){
        //gameLoop();
        inquirer.prompt([
         {
                name:"charGuessed",
                message: "Pick a letter!"
            }
        ]).then(function(answer){
            guesses--;
            console.log('User guesses remaining:', guesses);
            userGuess=answer.charGuessed;
            console.log("The following is the userGuess:", userGuess);
            var upper=userGuess.toUpperCase();
            console.log("The following is upper: ", upper);
            computerWord.showWordGuess(upper);
            console.log(computerWord.displayArray);
            guessedGuestList.push(upper);
            console.log('Guessed Guest List:', guessedGuestList); 
      
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
        gameLoop();

        });
    }else{
        computerWord.showWordEndGame();
        computerWord.RIP();
    };
};

gameLoop();

