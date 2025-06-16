let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
const scoresDiv = document.querySelector('.scores');
scoresDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
const resultsDiv = document.querySelector('.results');
const winnerDiv = document.querySelector('.winner');

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let rps = ["rock", "paper", "scissors"];
    return rps[random];
}

function checkForWinner() {
    if(humanScore == 5) {
        winnerDiv.textContent = 'You win!';
        buttons.forEach((button) => {
            button.disabled = true;
        });
        playAgain();
    } else if(computerScore == 5) {
        winnerDiv.textContent = 'Computer wins!';
        buttons.forEach((button) => {
            button.disabled = true;
        });
        playAgain();
    }
}

function playRound(humanChoice, computerChoice) {
    let results = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;
    if(humanChoice == computerChoice) {
        results += "It's a tie.";
    } else if((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        results += `${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}. Computer gets a point.`;
        computerScore++;
    } else {
        results += `${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}. You get a point.`;
        humanScore++;
    }

    resultsDiv.textContent = results;
    
    scoresDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    checkForWinner();
}

function playAgain() {
    const textClass = document.querySelector('.text');

    const playButton = document.createElement('button');
    playButton.textContent = "Play Again";
    playButton.classList.add('play-again-btn');
    playButton.style.backgroundColor = "#FFF2EB";
    playButton.style.fontSize = "20px";
    playButton.style.width = "200px";
    playButton.style.height = "50px";
    playButton.style.borderRadius = "8px";
    textClass.appendChild(playButton);

    playButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        resultsDiv.textContent = '';
        winnerDiv.textContent = '';
        scoresDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        textClass.removeChild(playButton);
        playGame();
    });
}

function playGame() {
    buttons.forEach((button) => button.disabled = false);
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, getComputerChoice());
    });
});

playGame();

    



