//Possible choices for rps
let computerChoice = ["Rock","Paper","Scissors"];

//Generates random selectors for the computer choice
function computerPlay(){
    let randomNum=Math.floor(Math.random()*3);
    return computerChoice[randomNum];
}

//Variables and Query selectors
var computerSelection = computerPlay();
let score;
var computerScore = 0;
var playerScore = 0;
const buttons = document.querySelectorAll("#button");
const p = document.querySelector("p");
const div =document.querySelector("div.Scores");
const newGameButton = document.querySelector(".new-game");

//Displays scores at the start
div.innerHTML = `
    <p>Computer Score:${computerScore}</p>
    <p>Player Score:${playerScore}</p>
`;

//Makes The buttons take the players choice
buttons.forEach(button =>
    button.addEventListener('click',()=>{
        computerSelection = computerPlay();
        p.innerText=`${playRound(button.classList.value, computerSelection)}`;
    })
);

//Starts a new game and resets scores
newGameButton.addEventListener('click',()=>{
    computerScore=0;
    playerScore=0;
    div.innerHTML = `
        <p>Computer Score:${computerScore}</p>
        <p>Player Score:${playerScore}</p>
    `;
    p.innerText="";
});
//Function that chooses the winners and updates the scores
function playRound(playerSelection, computerSelection) {
    function lose(){
        return "You lose! "+computerSelection+" beats "+playerSelection;
    }
    function win(){
        return "You Win! "+playerSelection+" beats "+computerSelection;
    }
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return "It's a tie!";
    }else if(computerSelection === "Error"){
        return "Error";
    }else{
        switch(playerSelection.toLowerCase()){
            case "rock":
                if(computerSelection==="Paper"){
                    computerScore++;
                    score = lose();
                }else if (computerSelection==="Scissors"){
                    playerScore++;
                    score = win();
                }
                break;
            case "paper":
                if(computerSelection==="Rock"){
                    playerScore++;
                    score = win();
                }else if(computerSelection==="Scissors"){
                    computerScore++;
                    score = lose();
                }
                break;
            case "scissors":
                if(computerSelection==="Paper"){
                    playerScore++;
                    score = win();
                }else if(computerSelection==="Rock"){
                    computerScore++;
                    score = lose();
                }
                break;
        }
        if(computerScore==5){
            div.innerHTML = `
                <p style=" font-size: 28px">Computer Wins!</p>
                <p>Computer Score:${computerScore}</p>
                <p>Player Score:${playerScore}</p>
            `;
            computerScore = 0;
            playerScore = 0;
            return score;
        }else if(playerScore==5){
            div.innerHTML = `
                <p style=" font-size: 28px">You Win!</p>
                <p>Computer Score:${computerScore}</p>
                <p>Player Score:${playerScore}</p>
            `;
            computerScore = 0;
            playerScore = 0;
            return score;
        }else{
            div.innerHTML = `
                <p>Computer Score:${computerScore}</p>
                <p>Player Score:${playerScore}</p>
                `;
        return score;
        }
    }
}
