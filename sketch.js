const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var object, ground;

function setup() {
  createCanvas(1200,800);
  engine=Engine.create();

  world=engine.world;

  var options_ground={
    isStatic:true,
    friction:0.2
  }

  var options_box={
    density: 0.01,
    restitution: 1,
    friction:0.05
  }

  object=Bodies.rectangle(600,200,40,40,options_box);
  World.add(world, object);
  console.log(object);

  ground=Bodies.rectangle(600,790,1200,10,options_ground);
  World.add(world,ground);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill("green");
  rect(object.position.x,object.position.y,40,40);

  fill("brown");
  rect(ground.position.x,ground.position.y,1200,10);
  drawSprites();
}