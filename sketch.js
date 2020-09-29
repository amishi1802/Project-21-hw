var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(100,200,30,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  thickness=random(22,83); 
}

function draw() {
  background(0); 
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10){
      wall.shapeColor="red";
    }
  }
  
   hasCollided(wall,bullet);

  drawSprites();
}

function hasCollided(wall1,bullet1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;  
  }
    return false; 
}