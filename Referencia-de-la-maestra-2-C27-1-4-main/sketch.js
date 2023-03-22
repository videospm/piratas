const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, Cannon, CannonBall;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4
  tower = new Tower(150, 350, 160, 310);
  CannonBall = new cannonBall(cannon.x, cannon.y);
  Cannon = new cannon(180,110,100,50, angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  

 tower.display();
 cannonBall.display();
 cannon.display();
}



