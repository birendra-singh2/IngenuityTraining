const words = [
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
let word = words[Math.floor(Math.random() * words.length)];
let answerArray:string[] = [];
let remainingLetters = word.length;
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingGuesses = 10;

const wordDiv = <HTMLDivElement>document.getElementById('word');
const guessDiv = <HTMLDivElement>document.getElementById('guess');
const messageDiv = <HTMLDivElement>document.getElementById('message');
const alphabetDiv = <HTMLDivElement>document.getElementById('alphabets');

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

alphabets.forEach(alphabet => {
    const alphabetBtn = document.createElement('button');
    alphabetBtn.innerText = alphabet;
    alphabetBtn.classList.add('alphabet');
    alphabetDiv.appendChild(alphabetBtn);
});

function showWord() {
    wordDiv.innerText = answerArray.join(' ');
}
console.log('word', word);
showWord();
alphabetDiv.addEventListener('click', (e)=>{
    const target = <HTMLButtonElement>e.target;
    target.disabled = true;
    const alphabet = target.innerText;
    guessDiv.innerText += alphabet;
    if(word.includes(alphabet)){
        console.log('alphabet is in word',alphabet);
        for(let i = 0; i < word.length; i++){
            if(word[i] === alphabet){
                answerArray[i] = alphabet;
                showWord();
                remainingLetters--;
            }
        }
        if(remainingLetters === 0){
            messageDiv.innerText = 'You Win!';
            alphabetDiv.remove();
        }
    }else{
        console.log('alphabet is not in word',alphabet);
        remainingGuesses--;
        if(remainingGuesses === 0){
            messageDiv.innerText = 'You lost! The word was ' + word;
            alphabetDiv.remove();
        }
    }
});
