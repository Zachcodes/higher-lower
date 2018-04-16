var randomNumber;

function generateNumber() {
  randomNumber = Math.floor((Math.random() * 100) + 1);
  var mysteryNumber = document.getElementById('mystery-number');
  mysteryNumber.value = '?';
  var submitGuess = document.getElementById('submit-guess');
  var resetGame = document.getElementById('reset-game');

  submitGuess.disabled = false;
  resetGame.disabled = false;

  submitGuess.classList.remove("higher-lower-button-disabled");
  resetGame.classList.remove("higher-lower-button-disabled");

  submitGuess.classList.add("higher-lower-button-submit");
  resetGame.classList.add("higher-lower-button-reset");
}

function submitGuess() {
  var guessNumber = document.getElementById('guess-number');
  var guessNumberValue = guessNumber.value;
  if(!guessNumberValue) {
    alert('You need to enter a guess first');
  }
  else if(guessNumberValue == randomNumber) {
    var mysteryNumber = document.getElementById('mystery-number');
    mysteryNumber.value = randomNumber;
    alert('You guessed the number!')
  }
  else {
    determineHigherLower(guessNumberValue);
  }
}

function determineHigherLower(number) {
  var difference = randomNumber - number;
  var higherOrLower = document.getElementById('higher-or-lower');
  var differenceInput = document.getElementById('difference');
  var lastGuess = document.getElementById('last-guess');
  if(difference <= -1) {
    higherOrLower.value = 'Lower!'
    if(difference >= -5) {
      differenceInput.value = 'Within 5!';
    } else if(difference >= -10) {
      differenceInput.value = 'Within 10!';
    } else if(difference >= -20) {
      differenceInput.value = 'Within 20!';
    } else {
      differenceInput.value = 'More than 20';
    }
  }
  else if(difference >= 1)
  {
    higherOrLower.value = 'Higher!'
    if(difference <= 5) {
      differenceInput.value = 'Within 5!';
    } else if(difference <= -10) {
      differenceInput.value = 'Within 10!';
    } else if(difference <= -20) {
      differenceInput.value = 'Within 20!';
    } else {
      differenceInput.value = 'More than 20';
    }
  }
  lastGuess.value = number;
}

function resetGame() {
  randomNumber = '';
  var mysteryNumber = document.getElementById('mystery-number');
  var guessNumber = document.getElementById('guess-number');
  var higherOrLower = document.getElementById('higher-or-lower');
  var lastGuess = document.getElementById('last-guess');
  var differenceInput = document.getElementById('difference');

  mysteryNumber.value = 'N/A'
  guessNumber.value = ''
  higherOrLower.value = 'N/A'
  lastGuess.value = 'N/A'
  differenceInput.value = 'N/A'

  var submitGuess = document.getElementById('submit-guess');
  var resetGame = document.getElementById('reset-game');

  submitGuess.disabled = true;
  resetGame.disabled = true;

  submitGuess.classList.add("higher-lower-button-disabled");
  resetGame.classList.add("higher-lower-button-disabled");

  submitGuess.classList.remove("higher-lower-button-submit");
  resetGame.classList.remove("higher-lower-button-reset");
}
