const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var eng, world;

var ground, ground_options;

var ball,ball_options;

function setup() {
  createCanvas(400,400);
  
  eng = Engine.create();
  
  world = eng.world;
  
  ground_options = {
    isStatic: true
  }


  ground = Bodies.rectangle(200,395,400,10,ground_options);
  World.add(world,ground);

  console.log(ground.position.x);

  ball_options = {
    restitution : 1
  }

  ball = Bodies.circle(200,100,40,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  
  Engine.update(eng);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}