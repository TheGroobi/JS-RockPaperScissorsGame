
const computer = function() {
    const compsChoiceNumber = Math.ceil((Math.random() * 3));
    if (compsChoiceNumber === 1) {
        return 'paper';
    } else if (compsChoiceNumber === 2) {
        return 'rock';
    } else if (compsChoiceNumber === 3) {
        return 'scissors';
    }
};
    
let winningTextArray;
function rockPaperScissors(player, computer) {
    if (player == computer) {
        winningTextArray = ['Draw, try again'];
    } else if (player === 'rock' && computer === 'paper') {
        winningTextArray = ['You win, rock beats paper', true];
    } else if (player === 'rock' && computer === 'scissors') {
        winningTextArray = ['You lose, scisors beat rock', false];
    } else if (player === 'paper' && computer === 'scissors') {
        winningTextArray = ['You lose, scisors beat paper', false];
    } else if (player === 'paper' && computer === 'rock') {
        winningTextArray = ['You win, paper beats rock', true];
    } else if (player === 'scissors' && computer === 'rock') {
        winningTextArray = ['You lose, rock beats scissors', false];
    } else if(player === 'scissors' && computer === 'paper') {
        winningTextArray = ['You win, scissors beats paper'], true;
    }
    console.log(winningTextArray[0]);
    return winningTextArray;
}

function game() {
    let input = prompt("Please enter your choice 5 different times", 'Rock / Paper / Scissors');
    let output;
    let compScore = 0;
    let playerScore = 0;
    while(true) {
        if (input.toLowerCase() === 'paper') { //ask for input and return value
            output = 'paper';
            break;
        } else if (input.toLowerCase() === 'rock') {
            output = 'rock';
            break;
        } else if (input.toLowerCase() === 'scissors') {
            output = 'scissors';
            break;
        } else {
            output = `Invalid Input, try putting in "rock, paper or scissors"`;
            input = prompt("Put in a valid value", 'Rock / Paper / Scissors');
        }
    }
    loopGame5: for (; playerScore < 3 && compScore < 3;) {
        rockPaperScissors(output, computer())
        if (winningTextArray.includes(true)) {
            playerScore++;
            // output = prompt("", 'Rock / Paper / Scissors');
        } else if (winningTextArray.includes(false)) {
            compScore++;
        } else {
            continue loopGame5;
        }
        if (playerScore < 3 && compScore < 3) {
            output = prompt("", 'Rock / Paper / Scissors');
        } else {
            continue loopGame5;
        }
    }
    let winningText;
    if(playerScore > compScore) {
        winningText = `You win ${playerScore} to ${compScore}`;
    } else {
        winningText = `You lose ${compScore} to ${playerScore} to the computer`;
    }
    document.body.innerHTML = `<h2>${winningText}</h2>`;
    //if playerScore > computerScore display "You win x to y"
    //if playerScore < computerScore display "You lose x to y"
}

const button = document.querySelector('button');
button.addEventListener('click', game, {once: true});