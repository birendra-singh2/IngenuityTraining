"use strict";
var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");
var W = 72;
var H = 96;
var charFrames = {};
var frameLabels = ["back", "right", "front", "left"];
for (var r = 0; r < 4; r++) {
    var frames_1 = [];
    for (var c = 0; c < 3; c++) {
        frames_1.push([c * W, r * H]);
    }
    charFrames[frameLabels[r]] = frames_1;
}
console.log(charFrames);
var character = new Image();
var currAnimLabel = frameLabels[2];
var defaultSpeed = 15;
var speedX = 0;
var speedY = 0;
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
var count = 0;
var imgX = canvas.width / 2;
var imgY = canvas.height / 2;
function drawImage(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var _a = charFrames[currAnimLabel][count], sx = _a[0], sy = _a[1];
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
