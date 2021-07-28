const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var snowBg;
var child;
var snow = [];
var ground;


function preload(){

  snowBg = loadImage("snow1.jpg");
  childImg = loadImage("pngegg.png");
  childImg2 = loadImage("pngegg2.png");
}


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  child = createSprite(600,200,20,50);
  ground = createSprite(0,350,1800,25);
  ground.visible=false;
  
  
 child.addImage(childImg);
 child.scale = 0.3;
}

function draw() {
  background(snowBg);  
  Engine.update(engine); 
child.collide(ground);


  if(keyDown(LEFT_ARROW)){
 //  child.mirrorX(child.mirrorX() * -1);
   child.x = child.x-20;
   child.addImage(childImg);
  }

  if(keyDown(RIGHT_ARROW)){
   // child.mirrorX(child.mirrorX() * -1);
    child.x = child.x+20;
    child.addImage(childImg2);
  }

  if(keyDown(32)){
    child.velocityY = -5;
  }
child.velocityY = child.velocityY + 0.8

  if(frameCount%60===0){
    snow.push(new Snow(random(20,780), 10, 40, 40));
  }
  
    //display the particles 
    for (var i = 0; i < snow.length; i++) {
      snow[i].display();   
    }

    console.log(child.depth)






















  drawSprites();
}