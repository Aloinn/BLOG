// DISPLAY
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(10,5,10, 0, 2 * Math.PI, false);
ctx.fillStyle = 'dodgerBlue';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
