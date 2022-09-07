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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "tie";
        }
        if (computerSelection == "paper") {
            return "loss";
        }
        if (computerSelection =="scissors") {
            return "win";
        }

    }
    
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "win";
        }
        if (computerSelection == "paper") {
            return "tie";
        }
        if (computerSelection =="scissors") {
            return "loss";
        }

    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "loss";
        }
        if (computerSelection == "paper") {
            return "win";
        }
        if (computerSelection =="scissors") {
            return "tie";
        }

    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let results = playRound(playerChoice, computerChoice);

        console.log("You picked: " + playerChoice)
        console.log("Computer picked: " + computerChoice)

        if (results == "win") {
            ++playerScore;
            console.log("win!")
        }
        else if (results == "loss") {
            ++computerScore;
            console.log("loss!")
        }
        else {
            console.log("tie!")
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the match!")
    }
    else if (playerScore < computerScore) {
        console.log("You lose the match!")
    }
    else {
        console.log("The match is a tie!")
    }
}

game();