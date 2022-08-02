'use strict';

/*
console.log( document.querySelector('.message').textContent);
document.querySelector(`.message`).textContent = "Meh!";
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 45;
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

const check = function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  // When there is not input
  if (!guess) {
    document.querySelector(`.message`).textContent = '🔞 No number!';

    // When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        `.message`
      ).textContent = `✨ You are correct! This is a new highscore!`;
      document.querySelector(`.highscore`).textContent = highScore;
    } else {
      document.querySelector(`.message`).textContent = `✨ You are correct!`;
    }
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(
        `.message`
      ).textContent = `We need to go higher...`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Sorry, you lost :(`;

      document.querySelector('.score').textContent = 0;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `red`;
      document.querySelector(`.number`).style.width = `30rem`;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `We need to go lower...`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Sorry, you lost :(`;
      document.querySelector('.score').textContent = 0;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `red`;
      document.querySelector(`.number`).style.width = `30rem`;
    }
  }
};

const reset = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('.score').textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
};

document.querySelector(`.again`).addEventListener(`click`, reset);

document.querySelector(`.check`).addEventListener(`click`, check);
