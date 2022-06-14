const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon, angle;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}


function setup() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(DEGREES);

  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = 20;

  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,130,130,100,angle);
}

function draw() 
{
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  
  cannon.display();
  tower.display();
  
}

