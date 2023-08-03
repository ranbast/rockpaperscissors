




//function getPlayerChoice(){
//    let signeUser = prompt("Pierre, Papier ou Ciseaux?");
//    return signeUser.toLowerCase(); // Lower case to make sure that the player's input corresponds to my loops below 
//}

//
//
//function rockPaperCissors() {
//    let playerRound = 5;
//    
//
//    while (playerRound > 0){
//
//    const computerSelection = getComputerChoice();
//    const playerSelection = getPlayerChoice();
//
//if (computerSelection === playerSelection){
//            console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. C'est donc un match nul.`);
//
//        }else if (
//            computerSelection === "pierre" && playerSelection === "ciseaux"
//        ||  computerSelection === "papier" && playerSelection === "pierre"
//        ||  computerSelection ==="ciseaux" && playerSelection ==="papier"
//         ){
//            console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. Vous avez gagné.`);
//
//         }else {
//        console.log(`Vous avez choisi ${playerSelection} et l'ordinateur a choisi ${computerSelection}. Vous avez perdu.`);
//    }
//        playerRound--; 
//}
//    const replay = prompt("Voulez vous rejouer ?","Y/N");
//
//    
//    if (replay ==="Y"){
//        playerRound = 5;
//        rockPaperCissors();
//
//    }
//}   
//





function getComputerChoice(){
    const signeCpu = ["pierre","papier","ciseaux"]
    return(signeCpu[Math.floor(Math.random() * signeCpu.length)]);  //The array will randomy pick one of the item for the CPU
    
}

let display = document.querySelector(".display");
let para = document.createElement("p");

function getPlayerChoice(){

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', e => {
            console.log(e);
            const playerSelection = e.target.id
            rockPaperCissors(playerSelection);

          });
        });    
    }


getPlayerChoice();


function rockPaperCissors(playerSelection){
const cpuSelection = getComputerChoice();



console.log(playerSelection);


    if (cpuSelection === playerSelection){
        para.textContent = `${cpuSelection} et ${playerSelection} s'annule. It's a draw !'`;

       
     


}   else if (
                cpuSelection === "pierre" && playerSelection === "ciseaux"
            ||  cpuSelection === "papier" && playerSelection === "pierre"
            ||  cpuSelection ==="ciseaux" && playerSelection ==="papier"
             ){
                para.textContent = `${playerSelection} bat ${cpuSelection}. Vous remportez la manche !`;
         
               
                

}   else {
                para.textContent = `${playerSelection} se fait pulvériser par ${cpuSelection}. Vous perdez la manche !`;
      
                
                
}
                display.appendChild(para);  
}


