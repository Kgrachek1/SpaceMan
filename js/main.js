 //----- CONSTANTS -----//
 const CATWORDS = [
     'Phoenix',
     'Tesla',
     'Mario',
     'October',
     'Armstrong',
   ];
const WRONG_GUESS_COUNT = 5;

//----- STATE VARIABLES -----//
let gameStatus; // null win or lose
let guess; // guessed letters
let wrongGuesses; //  wrong characters
let currWord; // current random word
let hidWord // hidden random word

//----- cached elements-----//
const replayBtn = document.getElementById('play-again-btn');
const rocketMan = document.querySelector('img');
const guessEle = document.getElementById('guess');
const msgEl = document.querySelector('h2');
const letterBtns = [...document.querySelectorAll('article > button')];

//----- event listeners -----//
document.querySelector('article').addEventListener('click', handleLetterClick);
replayBtn.addEventListener('click', init);

/*----- functions -----*/
init();
includes
function init() {
    wrongGuesses = [];
    const rndIdx = Math.floor(Math.random() * CATWORDS[rndIdx].toUpperCase().split(''));
    guess = hidWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    render();
}

function render() {
  
    renderMessage();
    rocketMan.src = `https://i.imgur.com/6R0jN9u${wrongGuesses.length}.png`
    guessEle.textContent = guess.join('');
    renderButtons();
}


function renderButtons() {
    ltrBtns.forEach(function(btn) {
        const ltr = btn.textContent;
        if (wrongGuesses.includes(ltr)) {
            btn.className = 'wrong';
        } else if (guess.includes(ltr)) {
            btn.className = 'correct';
        } else {
            btn.className = '';
        }
    });  
        function renderMessage() {
            if (gameStatus === 'won') {
                msgEl.textContent = 'Spaceman is ready for takeoff!';
            } else if (gameStatus === 'loss') {
                msgEl.innerHTML = `Spaceman is marooned OH NO!`;
            } else {
                msgEl.textContent = `${WRONG_GUESS_COUNT - wrongGuesses.length + 1} The ship cant take much more - Think Hard!`;
            }
        }
    
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleLetterClick(evt) {
    const ltr = evt.target.textContent;
    // guards
    if (
        gameStatus ||
        !ltrBtns.includes(evt.target) ||
        wrongGuesses.includes(ltr) ||
        guess.includes(ltr)
    ) return
    if (hidWord.includes(ltr)) {
        hidWord.forEach(function (char, idx) {
            if (char === ltr) guess[idx] = ltr;
        });
    } else {
        wrongGuesses.push(ltr);
    }
    gameStatus = getGameStatus();
    render();
}

function getGameStatus() {
    if (!guess.includes('_')) return 'won';
    if (wrongGuesses.length > WRONG_GUESS_COUNT) return 'loss';
    return null;
}