var bg, shooter_shooting, shooter_img, bg_img, player;
var heart1_img, heart2_img, heart3_img;
var heart1, heart2, heart3;
var zombie_img, zombie;

function preload(){
  shooter_img = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bg_img = loadImage("assets/bg.jpeg");
  heart1_img = loadImage("assets/heart_1.png");
  heart2_img = loadImage("assets/heart_2.png");
  heart3_img = loadImage("assets/heart_3.png");
  zombie_img = loadImage("assets/zombie.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bg_img);
  bg.scale = 1.1;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooter_img);
  player.scale = 0.3;

  zombieGroup = new Group();
  
  heart1 = createSprite(displayWidth-150,40,20,20);
  heart1.visibile = false;
  heart1.addImage("heart1",heart1_img);
  heart1.scale = 0.4;

  heart2 = createSprite(displayWidth-100,40,20,20);
  heart2.visibile = false;
  heart2.addImage("heart2",heart2_img);
  heart2.scale = 0.4;

  heart3 = createSprite(displayWidth-150,40,20,20);
  heart3.addImage("heart3",heart3_img);
  heart3.scale = 0.4;

}

function draw(){
  background("black");

  if(keyDown(UP_ARROW)||touches.lenght>0){
      player.y = player.y-30;
  }

  if(keyDown(DOWN_ARROW)||touches.lenght>0){
    player.y = player.y+30;
}

if(keyWentDown("space")){
  player.addImage(shooter_shooting);
}

else if(keyWentUp("space")){
  player.addImage(shooter_img);
}

if(zombieGroup.isTouching(player)){
  for(var i = 0;i<zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy();
    }
  }
}

  enemey();

  drawSprites();
}

function enemey(){
   if(frameCount%50 === 0){
    zombie = createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage("zombie",zombie_img);
    zombie.scale = 0.15;
    zombie.velocityX = -3;
    zombie.debug = true;
    zombie.setCollider("rectangle",0,0,400,400)
    zombie.lifetime = 400
    zombieGroup.add(zombie);
   }
}