const PAPPER = 0;
const ROCK = 1;
const SCISSORS = 2;

const WINNING_MAP = [
    [0,1,-1],
    [-1,0,1],
    [1,-1,0]
];
const translate_const = (choice) => {
    switch(choice) {
        case PAPPER: return 'papper';
        case ROCK: return 'rock';
        case SCISSORS: return 'scissors';
    }
}
const calculate_game = (player, computer) => WINNING_MAP[player][computer];


const computer = function() {
    return Math.floor((Math.random() * 3));
};

function game() {
    let player_choice = -1;
    let compScore = 0;
    let playerScore = 0;
    while(playerScore < 3 && compScore < 3) {
        let input = prompt("Please enter your choice", 'Rock / Paper / Scissors');
        while(player_choice<0) {
            switch(input.toLowerCase()){
                case 'paper':
                    player_choice = PAPPER;
                    break;
                case 'rock':
                    player_choice = ROCK;
                    break;
                case 'scissors':
                    player_choice = SCISSORS;
                    break;
                default:
                    input = prompt("Put in a valid value", 'Rock / Paper / Scissors');
                    break;
            }
        }

        let computer_choice = computer();
        let result = calculate_game(player_choice, computer_choice);

        if(!result) {
            alert('Draw, try again');
        }
        else if(result>0) {
            alert(`You won! ${translate_const(player_choice)} beats ${translate_const(computer_choice)}`)
            playerScore++;
        }
            

        player_choice = -1;
    }
    
    let winningText;
    if(playerScore > compScore) {
        winningText = `You win ${playerScore} to ${compScore}`;
    } else {
        winningText = `You lose ${compScore} to ${playerScore} to the computer`;
    }
    console.log(winningText);
    //if playerScore > computerScore display "You win x to y"
    //if playerScore < computerScore display "You lose x to y"
}
