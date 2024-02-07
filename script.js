function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSOR"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}


function playRound(playerSelection, computerSelection) {
    console.log(`
You: ${playerSelection}
Computer: ${computerSelection}
    `);
    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("Paper wins");
        return [1,0];
    }
    if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        console.log("Rock wins");
        return [0,1];
    }
    if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        console.log("Scissor wins");
        return [0,1];
    }
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        console.log("Rock wins");
        return [1,0];
    }
    if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        console.log("Scissor wins");
        return [1,0];
    }
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("Paper wins");
        return [0,1];
    }
    console.log("Draw!");
    return [0,0];
}

function result(yourScore, computerScore) {
        if (yourScore > computerScore ) {
            return "YOU WIN!";
        }
        if (yourScore < computerScore ) {
            return "YOU LOSE!";
        }
        if (yourScore === computerScore) {
            return "DRAW!";
        }
}

function playGame() {
    let score = [0,0];
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        while (true) {
            choice = prompt("Choose your move: Rock, Paper or Scissor? Exit to leave.");
            playerSelection = choice.toUpperCase();
            if (playerSelection === "ROCK" || playerSelection === "PAPER" || 
            playerSelection === "SCISSOR" || playerSelection === "EXIT") {
                break;
            }
            console.warn("Oops! It's not an avalilable choice!")
        }
        
        if (playerSelection === "exit") {
            console.log("See ya!");
            break;
        }
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        score[0] += roundResult[0];
        score[1] += roundResult[1];
    }
    
    const finalScore = result(score[0], score[1]);
    console.log(`
###########################
    SCORE - ${finalScore}  
    You: ${score[0]}       
    Computer: ${score[1]}  
###########################
    `);

}