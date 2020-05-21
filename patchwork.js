var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function start() {
var color1 = prompt('Írj egy színt angolul');
var color2 = prompt('Írj egy másik színt angolul');

//első háromszög
context.beginPath();
context.moveTo(0, 0);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(canvasWidth/2, 0);
context.lineTo(0, 0);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color1;
context.fill();

//második háromszög
context.beginPath();
context.moveTo(canvasWidth/2, 0);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(canvasWidth, 0);
context.lineTo(canvasWidth/2, 0);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color2;
context.fill();

//harmadik háromszög
context.beginPath();
context.moveTo(canvasWidth, 0);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(canvasWidth, canvasHeight/2);
context.lineTo(canvasWidth, 0);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color1;
context.fill();

//negyedik háromszög
context.beginPath();
context.moveTo(canvasWidth, canvasHeight/2);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(canvasWidth, canvasHeight);
context.lineTo(canvasWidth, canvasHeight/2);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color2;
context.fill();

//ötödik háromszög
context.beginPath();
context.moveTo(canvasWidth, canvasHeight);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(canvasWidth/2, canvasHeight);
context.lineTo(canvasWidth, canvasHeight);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color1;
context.fill();

//hatodik háromszög
context.beginPath();
context.moveTo(canvasWidth/2, canvasHeight);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(0, canvasHeight);
context.lineTo(canvasWidth/2, canvasHeight);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color2;
context.fill();

//hetedik háromszög
context.beginPath();
context.moveTo(0, canvasHeight);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(0, canvasHeight/2);
context.lineTo(0, canvasHeight);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color1;
context.fill();

//nyolcadik háromszög
context.beginPath();
context.moveTo(0, canvasHeight/2);
context.lineTo(canvasWidth/2, canvasHeight/2);
context.lineTo(0, 0);
context.lineTo(0, canvasHeight/2);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = color2;
context.fill();
}
