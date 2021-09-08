
var trex ,trex_running;
var ground,groundImage

function preload(){
 trex_running =loadAnimation("trex1.png","trex3.png","trex4.png")
 groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex=createSprite(70,180,10,10)
  trex.addAnimation("running",trex_running)
  trex.scale=0.3

  ground=createSprite(300,180,600,1)
  ground.addImage("ground",groundImage)
}

function draw(){
  background("white");
 edges=createEdgeSprites();
  if(keyDown("space")){
    trex.velocityY=-13
  }
  trex.velocityY+=0.5
trex.collide(ground )
  
drawSprites()
}
