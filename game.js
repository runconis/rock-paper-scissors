function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection == computerSelection) {
        return 'Draw';
    }
}
