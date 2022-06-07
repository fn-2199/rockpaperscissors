const choices = document.querySelectorAll('img');
const display = document.querySelector('p');
const youpoints = document.querySelector('.you-points');
const cppoints = document.querySelector('.cp-points');
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');
const weapons = document.querySelector('.choices');
const retryButton = document.querySelector('.retry');

let playerPoints = 0;
let computerPoints = 0;
let isWinner = false;

choices.forEach((choice) => {
    choice.addEventListener('click', game)
});

choices.forEach((choice) => {
    choice.addEventListener('mouseenter', hoverPlay)
})

function hoverPlay() {
    hoverSound.currentTime = 0;
    hoverSound.play();
}

function audioPlay() {
    clickSound.currentTime = 0;
    clickSound.play();

}

function game(e) {
    if (!isWinner) {
        audioPlay(e);

        let playerPlay = e.target.id;
        results = playRound(playerPlay, computerPlay());
        display.textContent = results;

        if (results.includes("Won")) {
            playerPoints++;
            youpoints.textContent = playerPoints;
        } else if (results.includes("Lose")) {
            computerPoints++;
            cppoints.textContent = computerPoints;
        }
        
       checkWinner();
    }
}

function computerPlay() {
    let generateNum = Math.floor(Math.random() * 3) + 1;
    switch (generateNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Won! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Won! Scissors beats Paper";
    } else {
        return "You are tied!";
    }
}

function checkWinner() {
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) {
            display.style.cssText = 'color: green';
            display.textContent = "GAME OVER! YOU WON";
        } else {
            display.style.color = 'red';
            display.textContent = "GAME OVER! YOU LOST";
        }

        deactivateGame();
        activateRetry();
        isWinner = true;
    }
}

function deactivateGame() {
    choices.forEach((choice) => {
        choice.setAttribute('style', 'cursor: default');
        choice.classList.remove('hvr-glow');
        choice.removeEventListener('mouseenter', hoverPlay);
    })

    weapons.classList.add('blur');
}

function activateRetry() {
    retryButton.textContent = "Try Again";
    retryButton.classList.add('activate-retry');
    retryButton.addEventListener('click', refresh)
}

function refresh() {
    window.location.reload("Refresh");
}

