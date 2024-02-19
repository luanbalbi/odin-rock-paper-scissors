function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSOR"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

const showSelections = document.querySelector("#showSelections");
const showResult = document.querySelector("#showResult");
const buttons = document.querySelectorAll(".btn-player-option");
const newGame = document.querySelector("#newGame");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

let score = [0,0];

buttons.forEach(btn=> {
    btn.addEventListener("click", () => {
        playGame(btn.id);
    });
});

function playRound(playerSelection, computerSelection) {
    showSelections.innerHTML = `
    <p>You: ${playerSelection}</p>
    <p>Computer: ${computerSelection}</p>
    `;
    console.log(`
    You: ${playerSelection}
    Computer: ${computerSelection}
    `);
    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return [1,0,"Paper wins"];
    }
    if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        return [0,1,"Rock wins"];
    }
    if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        return [0,1,"Scissor wins"];
    }
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        return [1,0,"Rock wins"];
    }
    if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        return [1,0,"Scissor wins"];
    }
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return [0,1,"Paper wins"];
    }
    return [0,0,"Draw! No one scores!"];
}

function updateScore(roundResult) {
    score[0] += roundResult[0];
    score[1] += roundResult[1];
    
    playerScore.innerHTML = score[0];
    computerScore.innerHTML = score[1];
}

function playGame(playerSelection) {
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    showResult.textContent = roundResult[2];
    
    updateScore(roundResult);

    if (playerScore.textContent === "5" ||
        computerScore.textContent === "5") {
        result(score[0], score[1]);
    }

}

function result(yourScore, computerScore) {
    let winner;
    if (yourScore > computerScore ) {
        winner = "YOU WIN!";
    }
    if (yourScore < computerScore ) {
        winner = "YOU LOSE!";
    }
    if (yourScore === computerScore) {
        winner = "DRAW!";
    }

   const endGame = confirm(`
### GAME OVER! ${winner} ###
FINAL SCORE
You: ${yourScore}
Computer: ${computerScore}

Play again?`)

    if (endGame) {
        location.reload();
    } else {
        buttons.forEach(btn=> {
            btn.setAttribute("disabled", true);
            newGame.removeAttribute("hidden");
        });
    }
}