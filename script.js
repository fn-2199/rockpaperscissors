function playerPlay() {
    let answer = (prompt("Rock, Paper, Scissors?", "")).toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    while (!validChoices.includes(answer)) {
        answer = (prompt("Invalid input. Try again", "")).toLowerCase();
    }
    return answer;
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

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let results = playRound(playerPlay(), computerPlay());

        if (results.includes("Won")) {
            playerPoints++;
        } else if (results.includes("Lose")) {
            computerPoints++;
        }
    }

    let winner = checkWinner(playerPoints, computerPoints);
    return `Game Over! ${winner} Player: ${playerPoints} Computer: ${computerPoints}`;
}

function checkWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        return "You Won";
    } else if (playerPoints < computerPoints) {
        return "You Lost";
    } else {
        return "You are tied";
    }
}