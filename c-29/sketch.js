const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var bird, slingShot;

function setup(){
      var canvas = createCanvas(1200,400);
      engine = Engine.create();
      world = engine.world;
  
  
      ground = new Ground(600,height,1200,20);
      platform = new Ground(150, 305, 300, 170);
  
      box1 = new Box(700,320,20,20);
      box2 = new Box(720,320,20,20);
      box3 = new Box(740,320,20,20);
      box4 = new Box(760,320,20,20);
      box5 = new Box(710,300,20,20);
      box6 = new Box(730,300,20,20);
      box7 = new Box(750,300,20,20);
      box8 = new Box(720,180,20,20);
      box9 = new Box(740,180,20,20);
      box10 = new Box(730,160,20,20);

      shot = new Shot(100,100);
      chain = new Slingshot(shot.body,{x:200,y:100});
}

function draw(){
      background(0);
      Engine.update(engine);


      ground.display();

      platform.display();

      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
      box10.display();
}

function mouseDragged(){
      Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
  
function mouserelease(){
      chain.fly();
}