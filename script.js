function getComputerChoice() {
    const signes = ["pierre", "papier", "ciseaux"];
    return signes[Math.floor(Math.random() * signes.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = document.getElementById("result");

    const emoji = {
        pierre: "🪨",
        papier: "✋",
        ciseaux: "✂️"
    };

    let outcome;
    if (computerSelection === playerSelection) {
        outcome = "Match nul.";
    } else if (
        (computerSelection === "pierre" && playerSelection === "ciseaux") ||
        (computerSelection === "papier" && playerSelection === "pierre") ||
        (computerSelection === "ciseaux" && playerSelection === "papier")
    ) {
        outcome = "Vous avez perdu.";
    } else {
        outcome = "Vous avez gagné.";
    }

    result.textContent = `${emoji[playerSelection]} vs ${emoji[computerSelection]} - ${outcome}`;
}

document.getElementById("paper").addEventListener("click", () => playRound("papier"));
document.getElementById("scissors").addEventListener("click", () => playRound("ciseaux"));
document.getElementById("rock").addEventListener("click", () => playRound("pierre"));
