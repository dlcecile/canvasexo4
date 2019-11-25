var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

// cornet de glace
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(280,250);
ctx.lineTo(320,250);
ctx.closePath();
ctx.fillStyle="#A3D7E7";
ctx.fill();
// glace
ctx.beginPath();
ctx.moveTo(280,250);
ctx.bezierCurveTo(280, 240, 300, 200, 320, 250);
ctx.closePath();
ctx.fillStyle="green";
ctx.fill();
