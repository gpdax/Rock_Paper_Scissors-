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

const winningScore = 5;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        div.textContent = "It's a tie! You both chose " + humanChoice;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        div.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else {
        div.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    humanScoreElement.textContent = "Your Score: " + humanScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
    humanScoreElement.style.fontSize = "18px";
    computerScoreElement.style.fontSize = "18px";
    humanScoreElement.style.fontWeight = "bold";
    computerScoreElement.style.fontWeight = "bold";
    humanScoreElement.style.color = "#333333";
    computerScoreElement.style.color = "#333333";

    if (humanScore >= winningScore) {
        div.textContent = "Congratulations! You won the game!";
        div.textContent += " First to " + winningScore + " wins the game!";
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;
    }
    else if (computerScore >= winningScore) {
        div.textContent = "Sorry! The computer won the game!";
        div.textContent += " First to " + winningScore + " wins the game!";
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;

    }
    
}

const rock_button = document.createElement("button");
rock_button.textContent = "Play Rock";
rock_button.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.body.appendChild(rock_button);

const paper_button = document.createElement("button");
paper_button.textContent = "Play Paper";
paper_button.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.body.appendChild(paper_button);

const scissors_button = document.createElement("button");
scissors_button.textContent = "Play Scissors";
scissors_button.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
document.body.appendChild(scissors_button);


rock_button.style.marginRight = "10px";
paper_button.style.marginRight = "10px";
scissors_button.style.marginRight = "10px";

rock_button.style.padding = "10px 20px";
paper_button.style.padding = "10px 20px";
scissors_button.style.padding = "10px 20px";

rock_button.style.fontSize = "16px";
paper_button.style.fontSize = "16px";
scissors_button.style.fontSize = "16px";

rock_button.style.cursor = "pointer";
paper_button.style.cursor = "pointer";
scissors_button.style.cursor = "pointer";

rock_button.style.backgroundColor = "#4CAF50";
paper_button.style.backgroundColor = "#2196F3";
scissors_button.style.backgroundColor = "#f44336";

rock_button.style.color = "white";
paper_button.style.color = "white";
scissors_button.style.color = "white";




const div = document.createElement("div");
div.innerHTML = "Results will be displayed here.<br>";
div.innerHTML += "First to " + winningScore + " wins the game!";
document.body.appendChild(div);



div.style.marginTop = "20px";
div.style.fontSize = "18px";
div.style.fontWeight = "bold";
div.style.color = "#333333";


function playGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = "Your Score: " + humanScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;

    if(humanScore >= winningScore || computerScore >= winningScore) {
        humanScore = 0;
        computerScore = 0;
        humanScoreElement.textContent = "Your Score: " + humanScore;
        computerScoreElement.textContent = "Computer Score: " + computerScore;
        div.textContent = "Game reset! Start playing again.";
    }
    
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
resetButton.addEventListener("click", playGame);
document.body.appendChild(resetButton);


resetButton.style.marginTop = "20px";
resetButton.style.padding = "10px 20px";
resetButton.style.fontSize = "16px";
resetButton.style.cursor = "pointer";
resetButton.style.backgroundColor = "#555555";
resetButton.style.color = "white";

const humanScoreElement = document.createElement("p");
const computerScoreElement = document.createElement("p");
document.body.appendChild(humanScoreElement);
document.body.appendChild(computerScoreElement);


computerScoreElement.style.marginTop = "20px";
humanScoreElement.style.fontSize = "18px";
computerScoreElement.style.fontSize = "18px";

computerScoreElement.style.fontWeight = "bold";
humanScoreElement.style.fontWeight = "bold";

computerScoreElement.style.color = "#333333";
humanScoreElement.style.color = "#333333";



playGame();