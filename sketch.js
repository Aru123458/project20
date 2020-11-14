var call,wall;

var speed,weight;



function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)


  car=createSprite(50, 200, 50, 50);
  car.shapeColor="grey"
  car.velocityX = speed;

  wall=createSprite(750,200, 50, 800);
  wall.shapeColor="brown"


}

function draw() {
  background(0);  
  
  if(wall.x - car.x < car.width/2 +wall.width/2) {

   car.velocityX=0;
  }
  
  var deformation= 0.5 * weight * speed * speed/22509

  if (deformation > 180){
  
    car.shapeColor="red"


  }

  if (deformation < 180 && deformation > 80 ){
  
    car.shapeColor="yellow"
    

  }
  
  
  if (deformation < 80){
  
    car.shapeColor="green"
    

  }

  drawSprites();
}




