const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, ground;
var cannon, angle;
var backgroundImg;

var boats = [];
var balls = [];

var boatAnimation = [];
var boatSpritedata, boatSpritesheet;

var brokenAnimation = [];
var brokenSpritedata, brokenSpritesheet;

var waterAnimation = [];
var waterSpritedata, waterSpritesheet;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  boatSpritedata = loadJSON("./assets/boat/boat.json");
  boatSpritesheet = loadImage("./assets/boat/boat.png");
  brokenSpritedata = loadJSON("./assets/boat/broken_boat.json");
  brokenSpritesheet = loadImage("./assets/boat/broken_boat.png");
  waterSpritedata = loadJSON("./assets/water_splash/water_splash.json");
  waterSpritesheet = loadImage("./assets/water_splash/water_splash.png");
}


function setup() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(DEGREES);

  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = 20;

  ground = Bodies.rectangle(600, 590, 2400, 10, {isStatic: true});
  World.add(world, ground);

  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,130,130,100,angle);
  //boat = new Boat(width, height-60, 170,170,-80);

  var boatFrames = boatSpritedata.frames;
  for (var i = 0; i < boatFrames.length; i++){
    var pos = boatFrames[i].position;
    var img = boatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    boatAnimation.push(img);
  }

  var brokenFrames = brokenSpritedata.frames;
  for (var i = 0; i < brokenFrames.length; i++){
    var pos = brokenFrames[i].position;
    var img = brokenSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    brokenAnimation.push(img);
  }

  var waterFrames = waterSpritedata.frames;
  for (var i = 0; i < waterFrames.length; i++){
    var pos = waterFrames[i].position;
    var img = waterSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    waterAnimation.push(img);
  }

}

function draw() 
{
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  
  for(var i = 0; i < balls.length; i++){
    showCannonBalls(i);
  }

  // Body.setVelocity(boat.body, {x: -0.9, y: 0});
  showBoats();

  cannon.display();
  tower.display();
  //boat.display();
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y+5);
    balls.push(cannonBall);
  }
}

function showCannonBalls (i){
  balls[i].display();
  if(balls[i].body.position.x >= width ||
     balls[i].body.position.y >= height-60){
  
      balls[i].remove(i);
  }
}

function showBoats(){
  if(boats.length > 0){
    if(boats.length < 4 && boats[boats.length-1].body.position.x < width-300){
      var positions = [-40,-60,-20,-80];
      var position = random(positions);
      var boat = new Boat(width, height-100, 170,170, position);
      boats.push(boat);
    }

    for(var i = 0; i < boats.length; i++){
      Body.setVelocity(boats[i].body, {x: -0.9, y: 0});
      boats[i].animate();
      boats[i].display();
    }


  }else{
    var boat = new Boat(width, height-100, 170,170,-80);
    boats.push(boat);
  }
}