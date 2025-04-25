

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
let winner = ""
function playRound(humanChoice, computerChoice) {
    let inputChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
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
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = humanScore;
    if(humanScore >= 5 || computerScore >= 5) {
        // show who wins
        if(humanScore == 5) {
            winner = "You Win!!!";
        }
        else {
            winner = "You Lose!!! Better luck next time!";
        }
        //place the winner text on screen
        createWinnerArea();
        // reset the scores
        humanScore = 0;
        computerScore = 0;
    }


}

function sendAnnouncement(message) {
    console.log(message);
    const winnerDiv = document.createElement("div");
    winnerDiv.setAttribute("style", "background-color: yellow; font-size: 32px; padding: 32px; text-align: center; border: 5px dashed black;" )
    winnerDiv.textContent = winner;
    winnerArea.appendChild(winnerDiv);

    setTimeout(() => {
        winnerArea.textContent = "";
    }, 2000);
}

// add event listeners to each button that plays a round when user
// presses a button

// grab references to the ID's of each button
const announcementArea = document.querySelector("#announcements");
const rockInput = document.querySelector("#rockInput");
const paperInput = document.querySelector("#paperInput");
const scissorsInput = document.querySelector("#scissorsInput");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

rockInput.addEventListener("click", () => {
    let playerInput = rockInput.textContent;
    playRound(playerInput, getComputerChoice(3));
});

paperInput.addEventListener("click", () => {
    let playerInput = paperInput.textContent;
    playRound(playerInput, getComputerChoice(3));
});

scissorsInput.addEventListener("click", () => {
    let playerInput = scissorsInput.textContent;
    playRound(playerInput, getComputerChoice(3));
});

