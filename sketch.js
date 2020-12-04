
var monkey , monkey_running;
var backgroundImg,invisground,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var survivaltime = 0;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImg = loadImage("istockphoto-689952508-170667a.jpg")
}



function setup() {
  
    score = 0;
    survivaltime =0;
  
  ground = createSprite(200,150,100,100)
  ground.addImage("background",backgroundImg );
 ground.velocityX=-2;
  ground.scale=2;
  ground.x = ground.width /2;

  monkey = createSprite(100,300,50,50); 
  monkey.addAnimation("running",monkey_running );
  monkey.scale = 0.14;
        
  invisground = createSprite(200,330,400,2);
  invisground.visible = false;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
}


function draw() {
  background("white");
  
  stroke("white");
    textSize(20);
    fill("white");
    text("score :" + score,500,50);
    score = score + Math.round(getFrameRate()/60);

    stroke("black");
    textSize(20);
    fill("black");
    survivaltime=Math.ceil(frameCount/frameRate())
    text("survivaltime : "+ survivaltime,100,50)
      text("score :" + score,120,50);

  
   if (ground.x < 0){
      ground.x = ground.width/1.5;
    }
  
  if (keyDown("space")){
    monkey.velocityY=-8;
  }
      monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisground);

    spawnbanana();
    spawnObstacle();
    ground.depth = score.depth;
    score.depth = score.depth + 1;
    
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,310,40,10);
    obstacle.x = Math.round(random(400));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}


