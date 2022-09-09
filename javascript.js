let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    var choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getPlayerChoice() {
    var choice = "";
    const choices = ["rock", "paper", "scissors"];
    while (!choices.includes(choice)) {
        choice = prompt("Select rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "tie";
        }
        if (computerSelection == "paper") {
            result = "loss";
        }
        if (computerSelection =="scissors") {
            result = "win";
        }

    }
    
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "win";
        }
        if (computerSelection == "paper") {
            result = "tie";
        }
        if (computerSelection =="scissors") {
            result = "loss";
        }

    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "loss";
        }
        if (computerSelection == "paper") {
            result = "win";
        }
        if (computerSelection =="scissors") {
            result = "tie";
        }

    }
    game(result, playerSelection, computerSelection);
}

function game(results, playerSelection, computerSelection) {
    let scoreBoard = ""

    if (results == "win") {
        ++playerScore;
        scoreBoard = "Your score: " + playerScore + "<br>" + "Computer score: " + computerScore + "<br>" +
            "Your choice: " + playerSelection + "<br>" + "Computer choice: " + computerSelection;
        document.getElementById("results").innerHTML = "win!" + "<br>" + scoreBoard;
    }
    else if (results == "loss") {
        ++computerScore;
        scoreBoard = "Your score: " + playerScore + "<br>" + "Computer score: " + computerScore + "<br>" +
            "Your choice: " + playerSelection + "<br>" + "Computer choice: " + computerSelection;
        document.getElementById("results").innerHTML = "loss!" + "<br>" + scoreBoard;
    }
    else {
        scoreBoard = "Your score: " + playerScore + "<br>" + "Computer score: " + computerScore + "<br>" +
            "Your choice: " + playerSelection + "<br>" + "Computer choice: " + computerSelection;
        document.getElementById("results").innerHTML = "tie!" + "<br>" + scoreBoard;
    }

    if (playerScore >= 5) {
        document.getElementById("results").innerHTML = "You win the match!" + "<br>" + scoreBoard;
        endGame();
    }
    if (computerScore >= 5) {
        document.getElementById("results").innerHTML = "You lose the match!" + "<br>" + scoreBoard;
        endGame();
    }
}

function endGame() {
    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
      choice.disabled=true;
    });
}

function restart() {
    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
      choice.disabled=false;
    });

    playerScore = 0;
    computerScore = 0;
    document.getElementById("results").innerHTML = "Choose your weapon."
}