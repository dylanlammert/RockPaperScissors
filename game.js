

function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max)
    
    switch(choice){
        case 0:
           return "rock" 
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

};

function getHumanChoice() {
    let choice = prompt('Please enter "rock", "paper", or "scissors": ', "rock")
    return choice
};

// Initialize variables in global scope
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let inputChoice = humanChoice.toLowerCase();
    console.log(inputChoice);
    switch(inputChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    console.log("You lose! Paper beats Rock.");
                    computerScore = computerScore + 1;
                    break;
                case "rock":
                    console.log("You Tied!");
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors.");
                    humanScore = humanScore + 1;
                    break;
            }
        break;

        case "paper":
            switch(computerChoice) {
                case "paper":
                    console.log("You Tied! ");
                    break;
                case "rock":
                    console.log("You win! Paper beats Rock.")
                    humanScore = humanScore + 1;
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats Paper")
                    computerScore = computerScore + 1;
                    break;
            }
        break;
        
        case "scissors":
            switch(computerChoice) {
                case "paper":
                    console.log("You win! Scissors beats Paper.");
                    humanScore = humanScore + 1;
                    break;
                case "rock":
                    console.log("You lose! Rock beats Scissor.")
                    computerScore = computerScore + 1;
                    break;
                case "scissors":
                    console.log("You Tied!")
                    break; 
            }
        break;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice(3));
    }
    if(humanScore > computerScore) {
        console.log("You won the game!! " + humanScore + " : " + computerScore);
    }
    else if(computerScore > humanScore) {
        console.log("You lost!! " + computerScore + " : " + humanScore);
    }
    else {
        console.log("You Tied!! " + computerScore + " : " + humanScore);
    }
}

playGame();

