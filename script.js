function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    }
    else {
        alert("Invalid choice. Please choose Rock, Paper or Scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        alert("It's a tie! Both chose " + computerChoice);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else {
        alert("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    humanScoreElement.textContent = "Your Score: " + humanScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore) {
        alert("Sorry! The computer won the game.");
    }
    else {
        alert("It's a tie game!");
    }

    console.log("Final Scores - You: " + humanScore + " Computer: " + computerScore);

} 

const humanScoreElement = document.createElement("p");
const computerScoreElement = document.createElement("p");
document.body.appendChild(humanScoreElement);
document.body.appendChild(computerScoreElement);

playGame();