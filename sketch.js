const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var box1, box2;
var ground;

function setup() {
  createCanvas(1200,800);
  engine=Engine.create();

  world=engine.world;

  box1=new Box(600,200,100,100);
  ground=new Ground(600,780,1200,10);
  box2=new Box(680,100,80,100);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  box1.display();
  ground.display();
  box2.display();

  
} 
