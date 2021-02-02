var tom,tomImage,tomImage2,tomImage3,tomImage4
var jerry,jerryImage,jerryImage2,jerryImage3,jerryImage4;
var garden,gardenImage;

function preload() {
    tomImage=loadImage("images/cat1.png");
    tomImage2=loadImage("images/cat2.png","images/cat3.png");
    tomImage4=loadImage("images/cat4.png");

    jerryImage =loadImage("images/mouse1.png");
    jerryImage2=loadImage("images/mouse2.png");
    jerryImage3=loadImage("images/mouse3.png");
    jerryImage4=loadImage("images/mouse4.png");

    gardenImage=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(1,400);
    garden.addImage(gardenImage);
    garden.scale=1;

    tom=createSprite(350,600,20,20);
    tom.addImage("tom",tomImage2);
    tom.scale=0.1;

    jerry=createSprite(50,600,20,20);
    jerry.addImage(jerryImage);
    jerry.scale=0.1;
    

}

function draw() {
    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
        tom.changeAnimation("tom",tomImage2);
        tom.changeAnimation("tom");


    }


    if(tom.x<120){
        tom.velocityX=0;
        tom.addImage("tom",tomImage4);
        tom.addImage("tom");

    
    }

    drawSprites();
}


function keyPressed(){




}
