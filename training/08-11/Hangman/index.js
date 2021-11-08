"use strict";
var words = [
    'apple',
    'banana',
    'orange',
    'watermelon',
    'pineapple',
    'grape',
    'mango',
    'strawberry',
    'blueberry',
    'blackberry',
    'raspberry'
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var remainingLetters = word.length;
for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
var remainingGuesses = 10;
var wordDiv = document.getElementById('word');
var guessDiv = document.getElementById('guess');
var messageDiv = document.getElementById('message');
var alphabetDiv = document.getElementById('alphabets');
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
alphabets.forEach(function (alphabet) {
    var alphabetBtn = document.createElement('button');
    alphabetBtn.innerText = alphabet;
    alphabetBtn.classList.add('alphabet');
    alphabetDiv.appendChild(alphabetBtn);
});
function showWord() {
    wordDiv.innerText = answerArray.join(' ');
}
console.log('word', word);
showWord();
alphabetDiv.addEventListener('click', function (e) {
    var target = e.target;
    target.disabled = true;
    var alphabet = target.innerText;
    guessDiv.innerText += alphabet;
    if (word.includes(alphabet)) {
        console.log('alphabet is in word', alphabet);
        for (var i = 0; i < word.length; i++) {
            if (word[i] === alphabet) {
                answerArray[i] = alphabet;
                showWord();
                remainingLetters--;
            }
        }
        if (remainingLetters === 0) {
            messageDiv.innerText = 'You Win!';
            alphabetDiv.remove();
        }
    }
    else {
        console.log('alphabet is not in word', alphabet);
        remainingGuesses--;
        if (remainingGuesses === 0) {
            messageDiv.innerText = 'You lost! The word was ' + word;
            alphabetDiv.remove();
        }
    }
});
