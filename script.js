

const playerText = document.getElementById('PlayerText');
const computerText = document.getElementById('computerText');
const resultText = document.getElementById('resultText');
const choiceBtns = document.querySelectorAll("button");
const scoreText = document.getElementById('scoreText');

let player;
let computer;
let result;
let scoreLimit = 0;
let compScore = 0;
let playerScore = 0;

alert('WELCOME TO DERRICKS ROCK, PAPER, SCISSORS GAME!!');
alert('HOPE YOU ENJOY!!');
choiceBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player:  ${player}`;
    computerText.textContent = `Computer:  ${computer}`;
    resultText.textContent = checkWinner();
    

}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }
}


function checkWinner(){
    if(player == computer){
        return 'Draw!!';
    }
    else if(computer == 'Rock'){
        return (player =='Paper') ? 'You Win!' : 'You Loose';
    }
    else if(computer == 'Paper'){
        return (player == 'Scissors') ? 'You Win!' : 'You Loose';
    }
    else if(computer == 'Scissors'){
        return (player == 'Rock')? 'You Win!' : 'You Loose';
    }
}

