var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleIMG;
var leaf, leafIMG;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafIMG = loadImage("redImage.png");
  appleIMG = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var appleleaf = Math.round(random(1,3));
  if(frameCount % 80 === 0){
    if(appleleaf === 1){
      createApples();
    }
    else if(appleleaf === 2){
      createApples();
    }
else {
    createApples();
  }
  }
  var appleleaf = Math.round(random(1,3));
  if(frameCount % 80 === 0){
    if(appleleaf === 1){
      createLeaves();
    }
    else if(appleleaf === 2){
      createApples();
    }
else {
    createLeaves();
  }
  }
  drawSprites();
}
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleIMG);
  apple.scale = 0.1;
  apple.velocityY = 5;
  apple.lifetime = 150;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafIMG);
  leaf.scale = 0.1;
  leaf.velocityY = 5;
  leaf.lifetime = 150;
}