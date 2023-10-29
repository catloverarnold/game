let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = document.getElementById("guessInput").value;
    const feedback = document.getElementById("feedback");

    if (guess == randomNumber) {
        feedback.textContent = "Congratulations! You guessed it right!";
        feedback.style.color = "green";
    } else if (guess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "red";
    }
}