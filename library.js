$( document ).ready(function() {
function avatar(name, size){
  var obj = {},
    avatarName = name,
    avatarSize = size,
    img = new Image,
    ctx = document.getElementById('myCanvas').getContext('2d'),
    imageLib = {
      green_apple: 'assets/images/apple-dark-green.svg'
    }
    img.src = imageLib[name];
  
  obj.appear= function (sourceX, sourceY){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    img.height = avatarSize;
    img.width = avatarSize;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    img.onload = function(){
      ctx.drawImage(img, sourceX, sourceY);
    }
  }
  //TO move apple
  obj.moveRight = function (destinationX){
    // var
    //   myX = sourceX,
    //   myY = sourcey;
      
      obj = this;
      var interval = setInterval(function() {
        var x = obj.sourceX, y = obj.sourceY, right =  obj.sourceX + destinationX;
        
        return function () {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(img, x, y);
          
          x += 1;
          
          if ( x > right || x > ctx.canvas.width) {
            clearInterval(interval);
          }
        };
      }(), 1000/40);
  }

  obj.moveLeft = function (destinationX){
    // var
    //   myX = sourceX,
    //   myY = sourcey;
      
      obj = this;
      var interval = setInterval(function() {
        var x = obj.sourceX, y = obj.sourceY, left =  obj.sourceX - destinationX;
        
        return function () {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(img, x, y);
          
          x -= 1;
          
          if ( x < left || x < 0) {
            clearInterval(interval);
          }
        };
      }(), 1000/40);
  }

  return obj;
}

//code for user
var myAvatar = avatar("green_apple", 300);
myAvatar.appear(100,50);
myAvatar.moveRight(50);

});