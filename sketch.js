
function preload() {
    //load the images here
   cat=addImage("cat1.png");
   cat2=addImage("cat2.png");
   cat3=addImage("cat3.png");
   cat4=addImage("cat4.png");
   garden=addimage("garden.png");
   mouse1=addimage("mouse1.png");
   mouse2=addimage("mouse2.png");
   mouse3=addImage("mouse3.png");
   mouse4=addImage("mouse4.png");

function setup(){

    createCanvas(1200,800);
    //create tom and jerry sprites here
    cat=createSprite(600,400,50,80);
    mouse=createSprite(400,200,80,30);

}

function draw() {
    background(garden);
    //Write condition here to evalute if tom and jerry collide
    cat.x = World.mouseX;
  cat.y = World.mouseY;
  text(mouseX + ','+mouseY, 10,45);
  keyPressed();
  if (cat.Istouching=mouse){
    mouse.changeAnimation("mouse3.png");
    cat.changeAnimation("cat4.png");
  }
    drawSprites();
}
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==left_arrow){
    cat.velocityX=-5;
    cat.addAnimation("cat2.png", catImg2);
    cat.changeAnimation("cat2.png");
}

}
