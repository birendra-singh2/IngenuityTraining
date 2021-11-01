window.addEventListener("load", function () {
  const canvas = <HTMLCanvasElement>document.querySelector("#my-canvas");

  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, 100, 80);

  ctx.fillStyle = "#0000FF";
  ctx.fillRect(10, 10, 100, 80);

  ctx.fillStyle = "#0000FF";
  ctx.fillRect(120, 10, 100, 80);

  ctx.strokeStyle = "#FF0000";

  ctx.strokeRect(120, 10, 100, 80);

  ctx.strokeRect(120, 120, 100, 80);

  ctx.beginPath();
  ctx.arc(500, 200, 50, 0, Math.PI * 2);
  ctx.closePath();

  ctx.moveTo(790, 10);
  ctx.lineTo(600, 10);
  ctx.lineTo(600, 100);
  ctx.bezierCurveTo(450, 550, 750, 10, 790, 10);
  ctx.closePath();

  ctx.moveTo(790, 410);
  ctx.lineTo(600, 310);
  ctx.lineTo(400, 500);

  ctx.stroke();
  ctx.fill();

  // text
  const text = "Hello Canvas World y!!";
  ctx.lineWidth = 2;
  
  ctx.font = "30pt Arial";
  ctx.textAlign = 'right'; 
  ctx.textBaseline = 'middle';

  var gradient = ctx.createLinearGradient(10,0, 500,0);

// Add five color stops
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;

  ctx.fillText(text, 400, 500);
//   ctx.strokeText(text, 400, 500);
  
});
