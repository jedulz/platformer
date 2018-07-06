//canvas context setup
var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");




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
    if(!player.hasJumped){
      player.jump();
    }
    player.hasJumped = true;
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

/*
  Player Object
*/
function Player(){
  this.width = 100;
  this.height = 100;
  this.x = (canvas.width - this.width)/2;
  this.y = canvas.height - this.height;
  this.dx = 0;
  this.dy = 0;
  this.leftPressed = false;
  this.rightPressed = false;
  this.hasJumped;


  this.jump = function(){
    if(!player.hasJumped){
      this.dy = -3.8
    }
    player.hasJumped = true;
  }

  this.draw = function(){
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0CB200";
    ctx.fill();
    ctx.closePath();
  }

  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.1
    //Going right
    if(this.rightPressed && this.x < canvas.width - this.width - 2){
      this.x += 7;
    }
    //Going left
    if(this.leftPressed && this.x > 2){
      this.x += -7;
    }
    // on ground
    if(this.y + this.dy + this.height > canvas.height -20){
      this.dy = 0;

      this.hasJumped = false;
    }

    // window resizing

    // player y check
    if(this.hasJumped == false ){
      this.y = canvas.height - this.height-20;
    }
    // player x check
    if(this.x > canvas.width-this.width -2){
      this.x = canvas.width - this.width - 2;
    }

    ctx.fillText("X Position: " + Math.round(this.x*10)/10,100,50);
    ctx.fillText("Y Position: " + Math.round(this.y*10)/10,100,100);
    this.draw();
  }
}



// create game objects
var player = new Player();

//create game loop
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  ctx.fillStyle ="#000";
  ctx.font = '30px Arial';

}

//run game loop
setInterval(animate, 10);
