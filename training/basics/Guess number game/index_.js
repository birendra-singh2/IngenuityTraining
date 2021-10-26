"use strict";
window.onload = function () {
    var guessText = document.getElementById('guess');
    var result = document.getElementById('result');
    var checkBtn = document.getElementById('checkGuess');
    var startBtn = document.getElementById('start');
    var gameDiv = document.getElementById("game");
    var startDiv = document.getElementById('start-game');
    gameDiv.style.display = 'none';
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function start() {
        console.log("start game");
        startDiv.style.display = 'none';
        gameDiv.style.display = 'block';
        var randNum = getRandomNumber(1, 100);
        checkBtn.onclick = function () {
            var guessNum = parseInt(guessText.value);
            if (guessNum < randNum) {
                result.innerHTML += "Your guess (" + guessNum + ") is smaller, Please guess higher.</br>";
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
