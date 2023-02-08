//Starts game with zero points for both user and computer
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
}

//This function selects rock, paper, or scissors for the computer
let computerInput = function getComputerChoice {

}

//This function selects rock, paper, or scissors for the player
let userInput = function getUserChoice {

}

//This function compares userInput to computerInput to select winner
let winner = function getWinningChoice {
if (userInput === computerInput) {
    console.log("It's a tie!");
} else if (userInput === "rock" && computerInput === "paper") {
    console.log("Computer wins!") 
} else if ()

}

//Edit later
let userInput = onclick;

let winner = (userInput === computerInput) ? "It's a tie" :
  (userInput === "rock" && computerInput === "paper") ? "Computer wins!" :
  (userInput === "rock" && computerInput === "scissors") ? "You win!" :
  (userInput === "paper" && computerInput === "scissors") ? "Computer wins!" :
  (userInput === "paper" && computerInput === "rock") ? "You win!" :
  (userInput === "scissors" && computerInput === "rock") ? "Computer wins!" :
  (userInput === "scissors" && computerInput === "paper") ? "You win!" :
  "Something went wrong, uh oh!";