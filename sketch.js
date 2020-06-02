var sun, earth;
var sunImg, earthImg;
var angle = 0;
// var speed = 50;
// var centerX = 400;
// var centerY = 200;

function preload(){
  sunImg = loadImage("Sprites/sun.jpg");
  earthImg = loadImage("Sprites/Earth.jpg")
}
function setup() {
  createCanvas(400,400);
  sun = createSprite(10,10,100,100);
  sun.addImage("sun",sunImg);
  sun.scale = 0.2;
 earth = createSprite(100,100, 20, 20);
 earth.addImage("earth",earthImg);
earth.scale = 0.2
}

function draw() {
  background("#02098C");  
  // angle = angle + rotate;

  // sun.x= centerX -60 * cos(angle);
  // sun.y= centerY  + 60 * sin(angle);
  //if(earth.x===200 && earth.y === 300){
    // for (var i=0; i<=200;i=i+10)
    // earth.velocityX = earth.velocityX +i;
    // earth.velocityY =earth.velocityY +i;
 // }
 //push();
   translate(200,200)
rotate(angle);
angle= angle+1;
//pop();
  if (frameCount % 20===0){
    sun.scale = sun.scale +0.01;
    //sun.height = sun.height+10;
  }
  if (sun.isTouching(earth)){
    earth.visible = false;
    //sun.scale = 0.2;
    }
  drawSprites();


}