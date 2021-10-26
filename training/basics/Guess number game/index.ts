window.onload = function () {
  const guessText: HTMLInputElement = <HTMLInputElement>document.getElementById('guess');
  const result: HTMLInputElement = <HTMLInputElement>document.getElementById('result');

  const checkBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('checkGuess');
  const startBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('start');

  const gameDiv = <HTMLDivElement>document.getElementById("game");
  const startDiv = <HTMLDivElement>document.getElementById('start-game');

  gameDiv.style.display = 'none';
  function getRandomNumber(min:number, max:number): number{
    return Math.floor(Math.random() * (max - min) + min);
  }

  function start(): void {
    console.log("start game");
    startDiv.style.display = 'none';
    gameDiv.style.display = 'block';
    const randNum = getRandomNumber(1, 100);

    checkBtn.onclick = function (): void {
      const guessNum = parseInt(guessText.value);
      if (guessNum < randNum) {
        result.innerHTML += `Your guess (${guessNum}) is smaller, Please guess higher.</br>`;
      } else if( guessNum > randNum) {
        result.innerHTML += 'Your guess (' + guessNum+')  is bigger, Please guess lower.</br>';
      } else {
        result.innerHTML += 'You guessed it right '+guessNum;
        guessText.disabled = true;
        startDiv.style.display = 'block';
      }
      guessText.value = '';
    };
  }

  startBtn.onclick = start;
}