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
console.log("\x1b[1m", "\x1b[31m", "You failed...", "\x1b[0m");
console.log(" ___________");
console.log("/   R.I.P.  ⟍");
console.log("| HERE LIES  |");
console.log("|   ...      |");
console.log("|"+"\x1b[5m",  "YOU!!!!", "\x1b[0m   |");
console.log("|            |");
console.log(" ~~~~~~~~~~~~");

console.log("/~~~~~~~~~~~~~~~~~~~~~~~~~*~~~")
console.log('|guessedGuestList:', guessedGuestList+ "|");
console.log 
function gameLoop(){
    inquirer.prompt([
        {
            name:"charGuessed",
            message: "Pick a letter!"
        }
    ]).then(function(answer){
        console.log(answer.name)
        console.log('answer.charGuessed:', answer.charGuessed)
       userGuess=answer.charGuessed;
       console.log('userGuess:', userGuess);
       var upper=userGuess.toUpperCase();
       console.log('\u27000 userGuessupper case :', upper);
      


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


    });
};
gameLoop();