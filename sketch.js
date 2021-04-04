var cat1, catImg1, cat2, catImg2, mouse, mouseImg1, mouse2, mouseImg2, garden, gardenImg;

function preload() {
    //load the images here
    catImg1 = loadAnimation("cat1.png", "cat4.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");

    mouseImg1 = loadAnimation("mouse1.png", "mouse4.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");

    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("garden", gardenImg);

    cat = createSprite(600,800,20,20);
    cat.addAnimation("cat", catImg1);

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === RIGHT_ARROW){
      mouse2.addAnimation("mouseHappy", mouseImg1);
      mouse2.changeAnimation("mouseHappy");
      mouse.frameDelay = 25;
  }

}
