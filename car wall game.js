var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;

  
}

function draw() {
  background(0); 
  if(wall.x-car.x<(car.width+wall.width)){
    car.velocityX=0;
    var deformation=0.5*weight*speed/22509
    if(deformation>100){
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red ";
    }
  } 
  drawSprites();
}