const canvas = <HTMLCanvasElement>document.getElementById("my-canvas");
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
const W = 72;
const H = 96;
const charFrames: { [key: string]: number[][] } = {};
const frameLabels = ["back", "right", "front", "left"];
for (let r = 0; r < 4; r++) {
  const frames = [];
  for (let c = 0; c < 3; c++) {
    frames.push([c * W, r * H]);
  }
  charFrames[frameLabels[r]] = frames;
}
console.log(charFrames);
const character = new Image();
let currAnimLabel = frameLabels[2];
let defaultSpeed = 15;
let speedX = 0;
let speedY = 0;
character.addEventListener("load", function () {
  console.log(this);
  drawImage(this);
  window.addEventListener("keydown", function (e) {
    switch (e.code) {
      case "ArrowLeft":
        currAnimLabel = frameLabels[3];
        speedY = 0;
        speedX = -defaultSpeed;
        break;
      case "ArrowRight":
        currAnimLabel = frameLabels[1];
        speedY = 0;
        speedX = defaultSpeed;
        break;
      case "ArrowUp":
        currAnimLabel = frameLabels[0];
        speedY = -defaultSpeed;
        speedX = 0;
        break;
      case "ArrowDown":
        currAnimLabel = frameLabels[2];
        speedY = defaultSpeed;
        speedX = 0;
        break;
    }
  });
  window.addEventListener("keyup", function () {
    speedX = 0;
    speedY = 0;
  });
});
character.src =
  "https://th.bing.com/th/id/R.92db7bd40c28b788406c8cc8ead81e30?rik=KFUQxAdVNXGgcA&riu=http%3a%2f%2fwww.makeflashgames.com%2ftutorialshtml5%2fdraw-image_files%2fimg%2fspritesheet.png&ehk=LJWsSNXjFtbINIV04wiqaR27J5meloFJAHN6wLd9RCM%3d&risl=&pid=ImgRaw&r=0";

let count = 0;
let imgX = canvas.width / 2;
let imgY = canvas.height / 2;

function drawImage(img: HTMLImageElement) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const [sx, sy] = charFrames[currAnimLabel][count];
  imgX += speedX;
  imgY += speedY;
  ctx.drawImage(img, sx, sy, W, H, imgX, imgY, W, H);
  count++;

  if (count === charFrames[currAnimLabel].length) {
    count = 0;
  }
  //   requestAnimationFrame(drawImage.bind(null, img));
  setTimeout(drawImage, 250, img);
}
