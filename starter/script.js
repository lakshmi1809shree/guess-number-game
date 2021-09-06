'use strict';
/*
console.log(document.querySelector('.message').textContent); // for selecting ide we uses #...// these code runs left to right ,,
document.querySelector('.message').textContent = '🎉correct number!';
document.querySelector('.number').textContent = 18;
document.querySelector('.score').textContent = 80;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable..
//document.querySelector('.number').textContent = secretNumber;
let highScore = 0;
  
  
  
  /// dont move

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
     console.log(guess, typeof guess);
    //when thre is no input
    if (!guess) {
      document.querySelector('.message').textContent = '🚫no number';

      //when input is high..
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = guess>secretNumber?'📈too high!':'📉too low!';
        score--;
        document.querySelector('.score').textContent = score;

        // when input equals ...
      } else {
        document.querySelector('.message').textContent = '😪 you lost the game';
        document.querySelector('.score').textContent = 0;
      }


    }/* else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈too high!';
        score--;
        document.querySelector('.score').textContent = score;

        // when input equals ...
      } else {
        document.querySelector('.message').textContent = '😪 you lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }*/ else if (guess == secretNumber) {
      document.querySelector('.message').textContent = '🎉correct number!';

      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // when input is low
    }/* else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😪 you lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }*/
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
/*
document.querySelector('.again').addEventListener('click', function () {
  locationreload();
});
*/
