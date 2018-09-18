//canvas context setup
var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

//create game objects
var player = new Player();
var platform = new Platform(500,500,200,20,getRandomColor());


/*
  addEventListeners
*/
//window resize
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});


//player controls
document.addEventListener("keydown", function(e){
  // right
  if(e.keyCode == 39){
    player.rightPressed = true;
  }
  //left
  else if(e.keyCode == 37){
    player.leftPressed = true;
  }
  else if(e.keyCode == 38){
    player.hasJumped =true;
  }
});
document.addEventListener("keyup", function(e){
  if(e.keyCode == 39) {
    player.rightPressed = false;
  }
  else if(e.keyCode == 37) {
    player.leftPressed = false;

  }
});
this.drawGround = function(){

    ctx.beginPath();
    ctx.rect(0, canvas.height-20, canvas.width, canvas.height);
    ctx.fillStyle = "#0CB200";
    ctx.fill();
    ctx.closePath();
}

//Random Color Generator
function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

//create game loop
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawGround();
  player.update();
  platform.draw();  
  ctx.fillStyle ="#000";
  ctx.font = '30px Arial';

}

//run game loop
setInterval(animate, 10);
