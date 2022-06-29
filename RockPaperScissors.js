function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return "It's a tie!";
    }else if(computerSelection === "Error"){
        return "Error";
    }else{
        switch(playerSelection.toLowerCase()){
            case "rock":
                if(computerSelection==="Paper")
                    return "You lose! "+computerSelection+" beats "+playerSelection;
                else if (computerSelection==="Scissors")
                    return "You Win! "+playerSelection+" beats "+computerSelection;
            case "paper":
                if(computerSelection==="Scissors")
                    return "You Win! "+playerSelection+" beats "+computerSelection;
                else if(computerSelection==="Rock")
                    return "You lose! "+computerSelection+" beats "+playerSelection;
            case "scissors":
                if(computerSelection==="Paper")
                    return "You Win! "+playerSelection+" beats "+computerSelection;
                else if(computerSelection==="Rock")
                    return "You lose! "+computerSelection+" beats "+playerSelection;
        }
    }
}
function computerPlay(){
    let randomNum=Math.floor(Math.random()*3+1)
    switch (randomNum){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Error";
    }
}
function game(){
    for(let i=1; i<5; i++){
        let playerSelection = prompt("Please input your choice:");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
    let playerSelection = prompt("Ready to play?");
    if (playerSelection.toLowerCase()==="yes"){
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        game();
    }else if(playerSelection.toLowerCase()==="no"){
        alert("okay!");
    }