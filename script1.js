var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// Demi Cercle
// ctx.beginPath();
// ctx.arc(150,150,60,0,Math.PI,false);
// ctx.strokeStyle = "red";
// ctx.stroke();


// Cone
ctx.beginPath();
ctx.fillStyle = "#bb8446";
ctx.moveTo(175, 200);
ctx.lineTo(225, 200);
ctx.lineTo(200, 280);
ctx.fill();
ctx.closePath();


// Glace
ctx.beginPath();
ctx.fillStyle = "#8a0908";
ctx.moveTo(175,200);
ctx.quadraticCurveTo(200,120,225,200);
ctx.fill();
