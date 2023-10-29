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

function updateSwimmers() {
  const guessInput = document.getElementById('guessInput');
  const stickFiguresContainer = document.getElementById('stickFigures');
  const numberOfSwimmers = parseInt(guessInput.value, 10) || 0;

  while (stickFiguresContainer.firstChild) {
    stickFiguresContainer.removeChild(stickFiguresContainer.firstChild);
  }

  for (let i = 0; i < numberOfSwimmers; i++) {
    const stickFigure = document.createElement('div');
    stickFigure.classList.add('stickFigure');
    stickFigure.style.left = `${(i * 20) % 100}px`;
    stickFigure.style.bottom = `${Math.floor(i / 5) * 30}px`;
    stickFiguresContainer.appendChild(stickFigure);
  }
}