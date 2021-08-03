
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

function preload(){



}


function setup() {
  createCanvas(displatWidth,displayHeight);

  var ball_options = {

    restitution = 0.5,
    isStatic = false,


  }

  ball = Bodies.circle(100, 400, 15, ball_options)

  World.add(world, ball)

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  push()
  imageMode(CENTER)
  pop()

  drawSprites()
  
}

