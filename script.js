const gameArea = document.getElementById("gameArea");
const scoreElement = document.getElementById("score");
let score = 0;

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * (gameArea.clientWidth - 50) + "px"; // Random horizontal position
    gameArea.appendChild(balloon);

    balloon.addEventListener("click", popBalloon);

    // Animation to make the balloon float upwards
    let position = 0;
    const interval = setInterval(() => {
        if (position > gameArea.clientHeight) {
            clearInterval(interval);
            gameArea.removeChild(balloon);
        } else {
            position++;
            balloon.style.bottom = position + "px";
        }
    }, 10);
}

function popBalloon(event) {
    score++;
    scoreElement.textContent = score;
    event.target.removeEventListener("click", popBalloon);
    gameArea.removeChild(event.target);
}

// Create balloons every 2 seconds
setInterval(createBalloon, 2000);
