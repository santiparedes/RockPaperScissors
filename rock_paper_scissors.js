let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function playGame(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === randomChoice) {
        result = 'It\'s a tie!';
        score.ties++;
    } else if (userChoice === 'rock' && randomChoice === 'scissors' ||
        userChoice === 'paper' && randomChoice === 'rock' ||
        userChoice === 'scissors' && randomChoice === 'paper') {
        result = 'You win!';
        score.wins++;
    } else {
        result = 'You lose!';
        score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').textContent = `${result}`;
    document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${userChoice}.png" class="move-icon">
<img src="images/${randomChoice}.png" class="move-icon">
Computer`;

    updateScore();
}

function updateScore() {
    document.querySelector('.js-score').textContent = `Wins: ${score.wins} \nLosses: ${score.losses} \nTies: ${score.ties}`;
}