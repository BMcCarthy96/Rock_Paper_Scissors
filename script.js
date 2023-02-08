//variable giving player options to choose from
const options = ["rock", "paper", "scissors"];

//function that randomly selects computer choice from options
function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}

//function that selects player choice from user input after prompt
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choices = prompt("Choose your weapon: Rock, Paper, or Scissors?");
        if (choices == null) {
            continue;
        }
        const choicesLowerCase = choices.toLowerCase();
        if (options.includes(choicesLowerCase)) {
            validatedInput = true;
            return choicesLowerCase;
        }
    }
}

//function that compares player choice to computer choice to select winner
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    } 
    else {
        return "Computer";
    }
}

//function that plays a single round 
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    } 
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

//function that plays 5 rounds of the game, then ends
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("------------------------------------");
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------------------------------");
        gamesPlayed++;
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
            
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
            
        }
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Games Played: ${gamesPlayed}`)
    }
    if(playerScore > computerScore) {
        console.log("You are the winner!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer was the winner!");
    }
    else {
        console.log("It was a tie!");
    }
    console.log("Game Over!");
}

game();

//My first attempt below------------------------------------------------------------------

// //Initialize player score to zero
// let playerScore = 0;
// //Initialize computer score to zero
// let computerScore = 0;
// //Initialize games played to zero
// let gamesPlayed = 0;

// //This function randomly selects rock, paper, or scissors for the computer
// function getComputerChoice(string) {
//     let choices = Math.floor(Math.random() * 3);
//     switch (choices) {
//         case 0:
//             return "Rock"
//         case 1: 
//             return "Paper"
//         case 2:
//             return "Scissors"
//     }
// }

// //Plays a single round 
// function playRound(playerSelection, computerSelection) {
//     computerSelection = getComputerChoice().toLowerCase();

//     if (playerSelection === computerSelection) {
//         computerScore++;
//         playerScore++;
//         return("It is a tie!");
//     } else if (playerSelection == "rock" && computerSelection == "paper") {
//         computerScore++;
//         return("Paper beats rock! You lose!");
//     } else if (playerSelection == "rock" && computerSelection == "scissors") {
//         playerScore++;
//         return("Rock beats scissors! You win!");
//     } else if (playerSelection == "paper" && computerSelection == "rock") {
//         playerScore++;
//         return("Paper beats rock! You win!");
//     } else if (playerSelection == "paper" && computerSelection == "scissors") {
//         computerScore++;
//         return("Scissors beats paper! You lose!");
//     } else if (playerSelection == "scissors" && computerSelection == "paper") {
//         playerScore++;
//         return("Scissors beats paper! You win!");
//     } else if (playerSelection == "scissors" && computerSelection == "rock") {
//         computerScore++;
//         return("Rock beats scissors! You lose!");
//     } else {
//         return("Invalid entry! Please try again!");
//     }
// }

// //Game function that calls playRound function to play a 5 round game that keeps score and reports winner or loser
// for(let i = 0; i < 5; i++) {
//     function game(playerScore, computerScore) {
//         if (playerScore > computerScore) {
//             return "You win!"
//         } else if (computerScore > playerScore) {
//             return "You lose!"
//         } else {
//             return "It is a tie!"
//         }
//     } 

// console.log("Games played: " + gamesPlayed++);
// const playerSelection =  prompt("What weapon do you choose? Rock, Paper, or Scissors").toLowerCase()
// console.log(playRound(playerSelection, getComputerChoice()));
// console.log("Your score: " + playerScore);
// console.log("Computer score: " + computerScore);
// }