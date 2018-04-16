var randomNumber;

function generateNumber() {
  randomNumber = Math.floor((Math.random() * 100) + 1);
  var mysteryNumber = document.getElementById('mystery-number');
  mysteryNumber.value = '?';
}

function submitGuess() {
  console.log('submitting guess')
}
