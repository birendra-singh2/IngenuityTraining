"use strict";
window.onload = function () {
    const guessText = document.getElementById('guess');
    const result = document.getElementById('result');
    const checkBtn = document.getElementById('checkGuess');
    const startBtn = document.getElementById('start');
    const gameDiv = document.getElementById("game");
    const startDiv = document.getElementById('start-game');
    gameDiv.style.display = 'none';
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function start() {
        console.log("start game");
        startDiv.style.display = 'none';
        gameDiv.style.display = 'block';
        const randNum = getRandomNumber(1, 100);
        checkBtn.onclick = function () {
            const guessNum = parseInt(guessText.value);
            if (guessNum < randNum) {
                result.innerHTML += `Your guess (${guessNum}) is smaller, Please guess higher.</br>`;
            }
            else if (guessNum > randNum) {
                result.innerHTML += 'Your guess (' + guessNum + ')  is bigger, Please guess lower.</br>';
            }
            else {
                result.innerHTML += 'You guessed it right ' + guessNum;
                guessText.disabled = true;
                startDiv.style.display = 'block';
            }
            guessText.value = '';
        };
    }
    startBtn.onclick = start;
};
