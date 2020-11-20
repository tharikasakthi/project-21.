
var car,wall,thickness;
var speed,weight,bullet;

function setup() {

  createCanvas(1600,400);

  speed=random(50,90)
  weight=random(400,1500);
  car=createSprite(400, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);

}

function draw() {

  background(255,255,255);  

  if(wall . x <(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
    if(deformation>180){
      car.shapeColour=colour(125,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColour=colour(230,230,0);
    }
    if(deformation<100){
      car.shapeColour=colour(0,252,0);
    }
    }

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  drawSprites();
}

function hasCollided (lbullet,lwall){

 bulletRightEdge=lbullet.x+lbullet.width
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
     return true;
 }
  return false;
}
