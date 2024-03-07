//@ts-check

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  };

  updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove  = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove  = 'scissors';
  }

  return computerMove;
  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose this round';
      } else if (computerMove === 'paper') {
        result = 'You win this round';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win this round';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose this round';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie';
      } else if (computerMove === 'paper') {
        result = 'You lose this round';
      } else if (computerMove === 'scissors') {
        result = 'You win this round';
      }
    }

    if (result === 'You win this round') {
      score.wins += 1;
    } else if (result === 'You lose this round') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); 
    // local storage only supports strings

    document.querySelector('.js-result')
    .innerHTML = `${result}`

    document.querySelector('.js-moves')
    .innerHTML = `You
<img src="Image Source/${playerMove}-emoji.png" class="move-icon">
<img src="Image Source/${computerMove}-emoji.png" class="move-icon">
Computer `

    updateScoreElement();

  }

  function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}.`
  }