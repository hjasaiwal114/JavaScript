/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ['rock','paper','scissors'];
  const randomIndex = Math.floor(math.random()*choices.length);
  return choices[randomIndex];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    score = 1;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    score = 1;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let result = document.querySelector('#result');
  let resultScore = document.querySelector('#score');
  resultScore.innertext = score;
  if(score === -1) {
    result.innerText = 'You Lose!';
  } else if (score === 0) {
    result.innerText = "It's a Draw";
  } else {
    result.innerText = "You win";
  }

  let player = document.querySelector('#player-choice');
  let computer = document.querySelector('#computer-choice');
  player.innerText = `You chose ${playerChoice}`;
  computer.innerText = `Computer chose ${computerChoice}`;
  
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playeChoice, computerChoice);
  showResult(result, playerChoice, computeChoice);
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelector('.rps-button');
  rpsButtons.foreach(function(button) {
    button.addEventListner('click',function(){
      onClickRPS(button.id);
    });
  });
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.querySelector('#end-game-button');
  endGameButton.addEventListener('click', function() {
    endGame();
  });
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let result = document.querySelector('#result');
  let resultScore = document.querySelector('#score');
  let player = document.querySelector('#player-choice');
  let computer = document.querySelector('#computer-choice');
  result.innerText = '';
  resultScore.innerText = '';
  player.innerText = '';
  computer.inneText = '';
  
}

playGame()