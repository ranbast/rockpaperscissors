

function getComputerChoice(){
    const signeCpu = ["pierre","papier","ciseaux"]
    return(signeCpu[Math.floor(Math.random() * signeCpu.length)]);  //The array will randomy pick one of the item for the CPU
    
}

getComputerChoice();

function getPlayerChoice(){
    let signeUser = prompt("Pierre, Papier ou Ciseaux?");
    return signeUser.toLowerCase(); // Lower case to make sure that the player's input corresponds to my loops below 
}



function rockPaperCissors() {
    let playerRound = 5;
    

    while (playerRound > 0){

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();


        if (computerSelection === playerSelection){
            console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. C'est donc un match nul.`);

        }else if (
            computerSelection === "pierre" && playerSelection === "ciseaux"
        ||  computerSelection === "papier" && playerSelection === "pierre"
        ||  computerSelection ==="ciseaux" && playerSelection ==="papier"
         ){
            console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. Vous avez gagné.`);

         }else {
        console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. Vous avez perdu.`);
    }
        playerRound--; 
}
    const replay = prompt("Voulez vous rejouer ?","Y/N");

    
    if (replay ==="Y"){
        playerRound = 5;
        rockPaperCissors();

    }
}   

rockPaperCissors();