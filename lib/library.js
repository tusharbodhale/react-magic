  var canvas, stage;
  var imageLib = {
    green_apple: 'assets/images/apple-dark-green.svg',
    grasshopper: 'assets/images/grasshopper.png'
  }
  function init(){
    canvas = document.getElementById("myCanvas");
    stage = new createjs.Stage(canvas);
  }
  
  function Avatar(name, size){

      this.avatarName = name || "green_apple";
      this.avatarSize = size || 50;
      this.img = new Image();
      this.img.src = imageLib[this.avatarName];
      
      this.click = null;
      this.centerX = canvas.width/2,
      this.centerY = canvas.height/2;
      
    
    this.appear= function (sourceX, sourceY){
      
      this.sourceX = sourceX;
      this.sourceY = sourceY;
                  
      this.canvasObject = new createjs.Bitmap(this.img.src);
      this.canvasObject.x = sourceX;
      this.canvasObject.y = sourceY;
      this.canvasObject.scaleX = this.avatarSize/this.img.width;
      this.canvasObject.scaleY = this.avatarSize/this.img.height;
      createjs.Ticker.setFPS(30);
      stage.addChild(this.canvasObject);
      stage.update();
      this.clickFunction();
    }
    //TO move apple
    
    this.move = function (direction, destination){
      
      switch(direction){
        case "RIGHT":
          this.moveRight(destination);
          break;
        case "LEFT":
          this.moveLeft(destination);
          break;
        case "UP":
          this.moveUp(destination);
          break;
        case "DOWN":
          this.moveDown(destination);
          break;
        default:
          break;
      }
      
    }
    this.moveRight = function (destinationX){
      
        obj = this;
        right =  obj.sourceX + destinationX;
        createjs.Ticker.init();
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          obj.canvasObject.x += 1;
          if ( obj.canvasObject.x > right || obj.canvasObject.x > canvas.width) {
            createjs.Ticker.reset();
          }
          stage.update();
        }                
    }
    this.moveLeft = function (destinationX){
      
        obj = this;
        left =  obj.sourceX - destinationX;
        createjs.Ticker.init();
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          obj.canvasObject.x -= 1;
          if ( obj.canvasObject.x < left || obj.canvasObject.x < 0) {
            createjs.Ticker.reset();
          }
          stage.update();
        }
        
    }
    this.moveUp = function (destinationY){
      
        obj = this;
        up =  obj.sourceY - destinationY;
        createjs.Ticker.init();
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          obj.canvasObject.y -= 1;
          if ( obj.canvasObject.y < up || obj.canvasObject.y < 0) {
            createjs.Ticker.reset();
          }
          stage.update();
        }
        
    }
    
    this.moveDown = function (destinationY){
      
        obj = this;
        down =  obj.sourceY + destinationY;
        createjs.Ticker.init();
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          obj.canvasObject.y += 1;
          if ( obj.canvasObject.y > down || obj.canvasObject.y > canvas.height) {
            createjs.Ticker.reset();
          }
          stage.update();
        }
        
    }

    this.jump = function (){
      
        obj = this;
        //up =  obj.sourceY - destinationY;
        createjs.Ticker.init();
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
          obj.canvasObject.y -= Math.sin(createjs.Ticker.getTicks()/7);
          if ( obj.canvasObject.y > obj.sourceY || obj.canvasObject.y > canvas.height) {
            createjs.Ticker.reset();
          }
          stage.update();
        }
        
    }

    this.clickFunction = function(){
      
        obj = this;      
        obj.canvasObject.addEventListener("click", handleClick);
        function handleClick(event) {
          obj.click();
        }
      
    }
  }
