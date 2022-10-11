 //----- CONSTANTS -----//
const CATWORDS = [
    'PHOENIX',
    'TESLA',
    'MARIO',
    'OCTOBER',
    'ARMSTRONG',
];
const WRONG_GUESS_COUNT = 5;

//----- STATE VARIABLES -----//
let gameStatus; // null win or lose
let guessedLetters; // guessed letters
let wrongGuesses; //  wrong characters
//let currWord; // current random word
let hiddenWord ; // hidden random word



//----- cached elements-----//
const replayBtn = document.getElementById('replay');
const spacemanImg = document.getElementById('spaceman');
const guessedChars = document.getElementById('guessed-characters');
const gameStatusMsg = document.getElementById('game-status-message');
const letterBtns = [...document.querySelectorAll('article > button')];

//----- event listeners -----//
 letterBtns.forEach(function(btn) {
  btn.addEventListener('click', handleLetterClick);  
 });
//document.querySelector('article').addEventListener('click', handleLetterClick);
replayBtn.addEventListener('click', init);

/*----- functions -----*/
init()

function init() {
    wrongGuesses = [];
    const randomIndex = Math.floor(Math.random() * CATWORDS.length);
    hiddenWord = CATWORDS[randomIndex].toUpperCase().split('');
    guessedLetters = hiddenWord.map(letter => letter === ' ' ? ' ' : '_');
    gameStatus = null;
    render();
} 

function render() {
    renderButtons();
    renderSpacemanImage();
    renderGuessedCharacters();
    renderMessage();
}

function renderGuessedCharacters() {
    guessedChars.innerText = guessedLetters.join(' ');
}

function renderSpacemanImage() {
    spacemanImg.src=`images/spaceman-${wrongGuesses.length}.png`;
}

function renderMessage() {
    if (gameStatus === 'won') {
        gameStatusMsg.innerText = 'Spaceman is ready for takeoff!';
        } else if (gameStatus === 'loss') {
            gameStatusMsg.innerText = `Spaceman is marooned OH NO!`;
        }else  {
            gameStatusMsg.innerText = `${WRONG_GUESS_COUNT - wrongGuesses.length + 1} Guesses left`;
    }

}

function renderButtons() {
    letterBtns.forEach(function(btn) {
        const letter = btn.innerText;
        if (wrongGuesses.includes(letter)) {
            btn.className = 'wrong';
        } else if (guessedLetters.includes(letter)) {
            btn.className = 'correct';
        } else {
            btn.className = ' ';
            
        }
    });  
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleLetterClick(evt) {
    const letter = evt.target.innerText;
    if (
        gameStatus ||
        !letterBtns.includes(evt.target) ||
        wrongGuesses.includes(letter) ||
        guessedLetters.includes(letter)
    ) return
        if (hiddenWord.includes(letter)) {
            hiddenWord.forEach(function (char, idx) {
                if (char === letter) guessedLetters[idx] = letter;
            });
        } else {
            wrongGuesses.push(letter);
            gameStatus = getGameStatus();
            render();
        }
    }
    
    function getGameStatus() {
        if (!guessedLetters.includes('_')) return 'won';
        if (wrongGuesses.length > WRONG_GUESS_COUNT) return 'loss';
        return null;
    }
    //Create WebSocket connection
const socket = new WebSocket('ws:http://localhost:5500/Project1/');

// Listen for possible errors
socket.addEventListener('error', (event) => {
  console.log('WebSocket error: ', event);
});