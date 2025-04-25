

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




function playRound(humanChoice, computerChoice) {
    let inputChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    switch(inputChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    sendAnnouncement("You lose this round! Paper beats Rock.");
                    computerScore = computerScore + 1;
                    break;
                case "rock":
                    sendAnnouncement("You Tied!");
                    break;
                case "scissors":
                    sendAnnouncement("You win this round! Rock beats Scissors.");
                    humanScore = humanScore + 1;
                    break;
            }
        break;

        case "paper":
            switch(computerChoice) {
                case "paper":
                    sendAnnouncement("You Tied! ");
                    break;
                case "rock":
                    sendAnnouncement("You win this round! Paper beats Rock.")
                    humanScore = humanScore + 1;
                    break;
                case "scissors":
                    sendAnnouncement("You lose this round! Scissors beats Paper")
                    computerScore = computerScore + 1;
                    break;
            }
        break;
        
        case "scissors":
            switch(computerChoice) {
                case "paper":
                    sendAnnouncement("You win this round! Scissors beats Paper.");
                    humanScore = humanScore + 1;
                    break;
                case "rock":
                    sendAnnouncement("You lose this round! Rock beats Scissor.")
                    computerScore = computerScore + 1;
                    break;
                case "scissors":
                    sendAnnouncement("You Tied!")
                    break; 
            }
        break;
    }
    computerScoreText.textContent = computerScore;
    playerScoreText.textContent = humanScore;
    if(humanScore >= 5 || computerScore >= 5) {
        // show who wins
        if(humanScore == 5) {
            message = "You Won the Game!!!";
        }
        else {
            message = "You Lose!!! Better luck next time!";
        }
        //place the winner text on screen
        sendAnnouncement(message);
        // reset the scores
        humanScore = 0;
        computerScore = 0;
    }


}

function sendAnnouncement(message) {
    console.log(message);
    const announcement = document.querySelector("#message");
    announcement.textContent = message;
    console.log("message set")

    setTimeout(() => {
        announcement.textContent = "";
    }, 1500);
}

function toggleMusic() {
    //pause audio
}
function toggleSoundEffects() {
    //set soundEffects to false
}
function playSoundEffect() {
    if(soundEffects) {
        console.log("music checkbox is checked");
        buttonClick.play();
    }
    else{
        console.log("music checkbox is unchecked");
        
    }
    
}
// Initialize variables in global scope
let soundEffects = false;
let humanScore = 0;
let computerScore = 0;
let message = "";


// grab references to checkboxes 
const musicToggleButton = document.querySelector("#musicToggle");
const soundToggleButton = document.querySelector("#soundToggle");
// grab reference to music audio file
const musicfile = document.querySelector("#lofiMusic");
const buttonClick = document.querySelector("#keyboardClick");
// add event listeners to each button that plays a round when user
// presses a button

// grab references to the ID's of each button
const announcementArea = document.querySelector("#announcements");
const rockInput = document.querySelector("#rockInput");
const paperInput = document.querySelector("#paperInput");
const scissorsInput = document.querySelector("#scissorsInput");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

musicToggleButton.addEventListener("change", (e) => {
    if(e.target.checked) {
        console.log("music checkbox is checked");
        musicfile.play();
        musicfile.loop = true;
    }
    else if(!e.target.checked) {
        console.log("music checkbox is unchecked");
        musicfile.pause();
    }
})

soundToggleButton.addEventListener("change", (e) => {
    if(e.target.checked) {
        console.log("sound checkbox is checked");
        soundEffects = true;
    }
    else if(!e.target.checked) {
        console.log("sound checkbox is unchecked");
        soundEffects = false;
    }
})

rockInput.addEventListener("click", () => {
    let playerInput = rockInput.textContent;
    playSoundEffect();
    playRound(playerInput, getComputerChoice(3));
});

paperInput.addEventListener("click", () => {
    let playerInput = paperInput.textContent;
    playSoundEffect();
    playRound(playerInput, getComputerChoice(3));
});

scissorsInput.addEventListener("click", () => {
    let playerInput = scissorsInput.textContent;
    playSoundEffect();
    playRound(playerInput, getComputerChoice(3));
});

