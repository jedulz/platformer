function Platform(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.draw = function(){
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }
}
