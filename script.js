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
  console.log('update swimmers')
  const guessInput = document.getElementById('guessInput');
  console.log('guessInput.value: ' + guessInput.value);
  const stickFiguresContainer = document.getElementById('stickFigures');
  const numberOfSwimmers = parseInt(guessInput.value, 10) || 0;
  console.log('numberOfSwimmers: ' + numberOfSwimmers);
  console.log('stickFiguresContainer: ' + stickFiguresContainer);

  while (stickFiguresContainer.firstChild) {
    stickFiguresContainer.removeChild(stickFiguresContainer.firstChild);
  }

  for (let i = 0; i < numberOfSwimmers; i++) {
    console.log('adding swimmer ' + i);
    const stickFigure = document.createElement('div');
    stickFigure.classList.add('stick-figure');
    stickFigure.style.left = `${(i * 20) % 100}px`;
    stickFigure.style.bottom = `${Math.floor(i / 5) * 30}px`;
    stickFigure.style['background-color'] = 'white';
    stickFigure.style.height = '10px';
    stickFigure.style.width = '10px';
    stickFigure.style['border-radius'] = '20px';
    stickFigure.style.margin = '10px';
    stickFiguresContainer.appendChild(stickFigure);
  }
}