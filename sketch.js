var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200,200,80,30);
  rect1.shapeColor = "blue";
  rect1.debug=true;
  rect1.velocityX=5;

  rect2 = createSprite(700,200,80,30);
  rect2.shapeColor = "purple";
  rect2.debug=true;
  rect2.velocityX=-5;

  rect3 = createSprite(800,100,80,30);
  rect3.shapeColor = "yellow";
  rect3.debug=true;
  rect3.velocityY=5;

  rect4 = createSprite(800,700,80,30);
  rect4.shapeColor = "orange";
  rect4.debug=true;
  rect4.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (detectCollision(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  bounceOff(rect1,rect2);
  
  bounceOff(rect3,rect4);
  
  
  var total=sum(7,-16);
  console.log(total);

  drawSprites();
}

