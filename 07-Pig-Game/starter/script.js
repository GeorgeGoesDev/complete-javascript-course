'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');

// Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

diceImage.classList.add('hidden');

// resetting the game
function resetGame() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  diceImage.classList.add('hidden');
}

function roll() {
  // random roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   dice display
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;

  //   Check For 1, if true switch player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
function hold() {
  scores[activePlayer] += currentScore;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  switchPlayer();
}

btnRoll.addEventListener('click', roll);
btnNew.addEventListener('click', resetGame);
btnHold.addEventListener('click', hold);
