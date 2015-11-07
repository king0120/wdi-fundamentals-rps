////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === false) {
        move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === false) {
        move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove==='rock'){
        if (computerMove==='rock'){
            winner = 'tie';
        } else if (computerMove==='scissors'){
            winner = 'player';
        } else if (computerMove==='paper'){
            winner = 'computer';
        }
    } else if (playerMove==='scissors'){
        if (computerMove==='rock'){
            winner = 'computer';
        } else if (computerMove==='scissors'){
            winner = 'tie';
        } else if (computerMove==='paper'){
            winner = 'player';
        }
    } else if (playerMove==='paper'){
        if (computerMove==='rock'){
            winner = 'player';
        } else if (computerMove==='scissors'){
            winner = 'computer';
        } else if (computerMove==='paper'){
            winner = 'tie';
        }
    }
    return winner;
}

var playerWins = 0;
var computerWins = 0;

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if (playerWins < x && computerWins < x) {
            
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        if (winner === 'player'){
            console.log('Player Wins!');
            playerWins++;
        } else if (winner === 'computer') {
            console.log('Computer Wins!');
            computerWins++;
        } else {
            console.log("It's a tie!");
        }
        console.log('The score is ' + playerWins + ' for Player and ' + computerWins + ' for Computer.');
    } else if (playerWins === x){
        console.log('Player is the Rock, Paper, Scissors champion!');
    } else {
        console.log('Computer is the Rock, Paper, Scissors champion!');
    }
    return [playerWins, computerWins];
}

playTo(3);
