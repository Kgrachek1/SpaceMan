/*----- constants -----*/
const abcBoard = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
const hintWords = ["Capital of AZ","Elon Musk","Luigi","Spooky Month","Like Popeye but a name"];
  /*----- state variables -----*/
 let wrongGuess = ''; //track wrong guesses
 let correctGuess = ''; // track correct guesses
 //let wordStatus = null;
 let answer = '';
 let catWords = ["Phoenix","Tesla","Mario","October","Armstrong"];
  /*----- cached elements  -----*/


  /*----- event listeners -----*/
// document.getElementById('buttons').addEventListener('click', buttonPress);


  /*----- functions -----*/
 // init();

 function rndWord() {
    let word = Object.keys(catWords)
    let rndWord = Math.floor(Math.random() * word.length) 
    return catWords[rndWord]
    
 }
 ;

function letterList() {
    letterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(",").map(abcBoard => 
        abcBoard.length 
       
         )};
rndWord();
letterList();