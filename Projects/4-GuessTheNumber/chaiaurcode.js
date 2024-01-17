// Logic for random no between 1 to 10

let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// Selecting Values

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// Check if user is ready to play the game or not

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default submission of form
    const guess = parseInt(userInput.value);
    // console.log(typeof guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Value is between 1 and 100 or not
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    // if guess is valid..we will push the guess in our prevGuess array
    prevGuess.push(guess);
    // There's a possibility that the user had last attempt..in that case we wanna end the game!!
    if (numGuess === 11) {
      displayGuess();
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      // Guess no is less then 11
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // GuessNo === Random no ||GuessNo > Random No||GuessNo < Random no
  if (guess === randomNumber) {
    displayMessage(`You guessed it right😍`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is tooo HIGH!!!`);
    // displayGuess(guess);
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is toooo LOW!!`);
    // displayGuess(guess);
  }
}

function displayGuess(guess) {
  // Cleansing of prev value so that user can enter a new value .. we will update prev guess array and guess remaing too (This function will interact with the dom)'
  userInput.value = "";
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Display a message for the user
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); // This wont allow user to add any content
  // We wanna create a button with the help of p tag..which will allow the user to end the game..
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start Game 😎</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
// We wanna add a event listner to this..
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    // reset the Values
    // userInput.value = '';
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numGuess = 1;
    userInput.removeAttribute("disabled");
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = '';
    startOver.removeChild(p);
    playGame = true;
  });
}
