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
  console.log('This is the difference', difference)
  console.log('This is the random number', randomNumber)
  console.log('This is the number', number)
}
