var randomNumber;

function generateNumber() {
  randomNumber = Math.floor((Math.random() * 100) + 1);
  var mysteryNumber = document.getElementById('mystery-number');
  mysteryNumber.value = '?';
}

function submitGuess() {
  var guessNumber = document.getElementById('guess-number');
  var guessNumberValue = guessNumber.value;
  if(!guessNumberValue) {
    alert('You need to enter a guess first');
  }
  else if(guessNumberValue == randomNumber) {
    alert('You guessed the number!')
  }
  else {
    var feedbackMessage = determineHigherLower(guessNumberValue);
    // alert(feedbackMessage);
  }
}

function determineHigherLower(number) {
  var difference = randomNumber - number;
  var higherOrLower = document.getElementById('higher-or-lower');
  var lastGuess = document.getElementById('last-guess');
  if(difference <= -1) {
    higherOrLower.value = 'Lower!';
  }
  else if(difference >= 1)
  {
    higherOrLower.value = 'Higher!';
  }
  lastGuess.value = number;
}
