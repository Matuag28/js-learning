## Project 4 
## Guess Random  Number 

```
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGames = true;

if (playGames) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1 ');
  }
  if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      dispalyMessage(`Game Over. Random number was ${randomNumber} `);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    dispalyMessage('You guessed it right ');
  }
  else if (guess <randomNumber){
    dispalyMessage('Number is Too Low');
  }
  else if (guess> randomNumber){
    dispalyMessage("Numebr is Too High");
  }
}

function displayGuess(guess) {
userInput.value='';
guessSlot.innerHTML+=`${guess}  `;
numGuess++;
remaining.innerHTML = `${11-numGuess}`;

}

function dispalyMessage(message) {
lowOrHi.innerHTML = `<h2> ${message}</h2>`
}

function endGame() {
 userInput.value='';
 userInput.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML= `<h2 id ="newGame">Start new Game </h2>`;
 startOver.appendChild(p);
 playGames= false

 newGmae()

}

function newGmae() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function (e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining=innerHTML= `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGames=true
  })
}


```