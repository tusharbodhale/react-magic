  //Global objects
  //Global variables for app canvas and app stage
  var canvas, stage;
  //Avatar image library
  var imageLib = {
    green_apple: 'assets/images/apple-dark-green.svg',
    grasshopper: 'assets/images/grasshopper.png'
  }
  function init(){
    canvas = document.getElementById("myCanvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }
  
  function Avatar(name, size){

      this.avatarName = name || "green_apple";
      this.avatarSize = size || 50;
      this.img = new Image();
      this.img.src = imageLib[this.avatarName];
      
      this.click = null;
      this.centerX = canvas.width/2,
      this.centerY = canvas.height/2;
      this.wait=0;
      
    
    this.appear= function (sourceX, sourceY){
      
      this.sourceX = sourceX;
      this.sourceY = sourceY;
      this.lastX = sourceX;
      this.lastY = sourceY;
                  
      this.canvasObject = new createjs.Bitmap(this.img.src);
      this.canvasObject.x = sourceX;
      this.canvasObject.y = sourceY;
      this.canvasObject.scaleX = this.avatarSize/this.img.width;
      this.canvasObject.scaleY = this.avatarSize/this.img.height;
      
      stage.addChild(this.canvasObject);
      this.clickFunction();
    }
    //TO move apple
    
    this.move = function (direction, destination, msTime=1000){
      
      switch(direction){
        case "RIGHT":
          this.moveRight(destination, msTime);
          break;
        case "LEFT":
          this.moveLeft(destination, msTime);
          break;
        case "UP":
          this.moveUp(destination, msTime);
          break;
        case "DOWN":
          this.moveDown(destination, msTime);
          break;
        default:
          break;
      }
      
    }
    this.moveRight = function (destinationX, msTime){
      
        obj = this;
        right =  obj.lastX + destinationX;                
        createjs.Tween.get(obj.canvasObject, {})
        .wait(obj.wait)
        .to({ x: right }, msTime);
        obj.wait=obj.wait+msTime;
        obj.lastX = right;
    }
    this.moveLeft = function (destinationX, msTime){
      
        obj = this;
        left =  obj.lastX - destinationX;        
        createjs.Tween.get(obj.canvasObject, {})
        .wait(obj.wait)
        .to({ x: obj.canvasObject.x - destinationX }, msTime);
        obj.wait=obj.wait+msTime;
        obj.lastX = left;
    }
    this.moveUp = function (destinationY, msTime){
      
        obj = this;
        up =  obj.canvasObject.y - destinationY;        
        createjs.Tween.get(obj.canvasObject, {})
        .wait(obj.wait)
        .to({ y: up }, msTime);
        obj.wait=obj.wait+msTime;
    }
    
    this.moveDown = function (destinationY, msTime){
      
        obj = this;
        down =  obj.canvasObject.y + destinationY;
        
        createjs.Tween.get(obj.canvasObject, {})
        .wait(obj.wait)
        .to({ y: down }, msTime);
        obj.wait=obj.wait+msTime;
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

    this.rotatedeg = function(degrees,miliseconds){
      obj=this;
      this.canvasObject.regX=this.avatarSize/2;
      this.canvasObject.regY=this.avatarSize/2;
      //stage.addChild(canvasObject);
      createjs.Ticker.init();
      createjs.Ticker.setFPS(miliseconds);
      createjs.Ticker.addEventListener("tick",onTick);
      function onTick(event){
        obj.canvasObject.rotation++;
          if(obj.canvasObject.rotation>=degrees)
          {
            obj.canvasObject.rotation=degrees;
            createjs.Ticker.reset();
              
          }
          stage.update(event);
          }	
    }

    //TO rotate with direction
    this.rotatedir = function(direction,miliseconds){
      switch(direction){
        case "NORTH":
          this.rotateNorth(miliseconds);
          break;
        case "SOUTH":
          this.rotateSouth(miliseconds);
          break;
        case "EAST":
          this.rotateEast(miliseconds);
          break;
        case "WEST":
          this.rotateWest(miliseconds);
          break;
        default:
          break;
          }
    }
    this.rotateNorth = function (miliseconds){
      obj = this;
      this.canvasObject.regX=this.avatarSize/2;
      this.canvasObject.regY=this.avatarSize/2;
      //stage.addChild(canvasObject);
      createjs.Ticker.init();
      createjs.Ticker.setFPS(miliseconds);
      createjs.Ticker.addEventListener("tick",onTick);
      function onTick(event){
        obj.canvasObject.rotation++;
          if(obj.canvasObject.rotation>=0)
          {
            obj.canvasObject.rotation=0;
            createjs.Ticker.reset();
              
          }
          stage.update(event);
          }
    }
    this.rotateSouth = function (miliseconds){
      obj = this;
      this.canvasObject.regX=this.avatarSize/2;
      this.canvasObject.regY=this.avatarSize/2;
      //stage.addChild(canvasObject);
      createjs.Ticker.init();
      createjs.Ticker.setFPS(miliseconds);
      createjs.Ticker.addEventListener("tick",onTick);
      function onTick(event){
        obj.canvasObject.rotation++;
          if(obj.canvasObject.rotation>=180)
          {
            obj.canvasObject.rotation=180;
            createjs.Ticker.reset();
              
          }
          stage.update(event);
          }	
    }	
    this.rotateEast = function (miliseconds){
      obj = this;
      this.canvasObject.regX=this.avatarSize/2;
      this.canvasObject.regY=this.avatarSize/2;
      //stage.addChild(canvasObject);
      createjs.Ticker.init();
      createjs.Ticker.setFPS(miliseconds);
      createjs.Ticker.addEventListener("tick",onTick);
      function onTick(event){
        obj.canvasObject.rotation++;
          if(obj.canvasObject.rotation>=90)
          {
            obj.canvasObject.rotation=90;
            createjs.Ticker.reset();
              
          }
          stage.update(event);
          }	
    }
    this.rotateWest = function (miliseconds){
      obj = this;
      this.canvasObject.regX=this.avatarSize/2;
      this.canvasObject.regY=this.avatarSize/2;
      //stage.addChild(canvasObject);
      createjs.Ticker.init();
      createjs.Ticker.setFPS(miliseconds);
      createjs.Ticker.addEventListener("tick",onTick);
      function onTick(event){
        obj.canvasObject.rotation++;
          if(obj.canvasObject.rotation>=270)
          {
            obj.canvasObject.rotation=270;
            createjs.Ticker.reset();
              
          }
          stage.update(event);
          }	
    }
    
  }
