const choices = document.querySelectorAll('img');
const display = document.querySelector('p');
const youpoints = document.querySelector('.you-points');
const cppoints = document.querySelector('.cp-points');

let playerPoints = 0;
let computerPoints = 0;
let isWinner = false;

choices.forEach((choice) => {
    choice.addEventListener('click', game)
});

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

function game() {
    if (!isWinner) {
        console.log(this.classList.value);
        let playerPlay = this.classList.value;
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

function checkWinner() {
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) {
            display.textContent = "Game Over! You Won";
        } else if (playerPoints < computerPoints) {
            display.textContent = "Game Over! You Lost";
        } else {
            display.textContent = "Game Over! You are tied";
        }

        isWinner = true;
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

// function playerPlay() {
//     let answer = (prompt("Rock, Paper, Scissors?", "")).toLowerCase();
//     const validChoices = ["rock", "paper", "scissors"];
//     while (!validChoices.includes(answer)) {
//         answer = (prompt("Invalid input. Try again", "")).toLowerCase();
//     }
//     return answer;
// }