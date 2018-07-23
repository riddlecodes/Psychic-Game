var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = [];

var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};

function updateGuessesSoFar() {

    document.querySelector('#let').innerHTML = "You've guessed so far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = compChoices.includes(userGuess);

    if (check === false) {
        alert("Invalid guess. Please try again.");
        return false;
    } else if (check === true) {
        
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Win " + wins;
                userGuess = userGuess.toUpperCase();
                alert("You read my mind! I was thinking of the letter " + userGuess);
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Oh no - you can't read my mind.");
         
            reset();
        }
        return false;
    } else {
        alert("404 not found!");
    }

};