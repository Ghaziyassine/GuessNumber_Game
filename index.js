const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

// Generate random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById('result').innerText = 'Please enter a valid number between 1 and 10.';
        return;
    }
    attempts++;

    if (guess === randomNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        disableInput();
        playCorrectSound();
    } else if (guess < randomNumber) {
        document.getElementById('result').innerText = 'Too low! Try again.';
        playWrongSound();
    } else {
        document.getElementById('result').innerText = 'Too high! Try again.';
        playWrongSound();
    }
}

function disableInput() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}

function playCorrectSound() {
    correctSound.play();
}

function playWrongSound() {
    wrongSound.play();
}