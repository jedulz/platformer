
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
