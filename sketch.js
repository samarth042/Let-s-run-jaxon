 var path;
 var bomb;
 var coin;
 var runner;
 var invisibleGround1;
 var invisibleGround2;

 function preload () {

 pathImg = loadImage("path.png");
 boy_running = loadAnimation("Runner-1.png","Runner-2.png");    
 coinImg = loadImage("coin.png");
 bombImg = loadImage("bomb.png");
 energyDrinkImg = loadImage("energyDrink.png");
 powerImg = loadImage("power.png");

 }

 function setup () {

 createCanvas(400,400);

 invisibleGround1 = createSprite(400,200,100,500);
 invisibleGround2 = createSprite(0,200,100,500);
 invisibleGround1.visible = false;
 invisibleGround2.visible = false;

 path = createSprite(200,200);
 path.addImage(pathImg);
 path.scale = 1.2;
 path.velocityY = 4;

 runner = createSprite(200,300);
 runner.scale = 0.1;
 runner.addAnimation("running",boy_running);

 }

 function Coin() {

 if (frameCount % 200 === 0) {
 
 coin = createSprite(Math.round(random(100,300)),0);
 coin.velocityY = 5;
 coin.addImage(coinImg); 
 coin.scale = 0.5; 
       
 }   

 }

 function Bomb() {

 if (frameCount % 100 === 0) {
    
 bomb = createSprite(Math.round(random(100,300)),0);
 bomb.velocityY = 8;
 bomb.addImage(bombImg); 
 bomb.scale = 0.1; 
          
 }   
   
 }

 function draw () {
           
 background(0);

 runner.x = World.mouseX;
 runner.collide(invisibleGround1);
 runner.collide(invisibleGround2);

 if (path.y>400) {
 path.y = height/2;    
 }

 Coin();

 Bomb();

 drawSprites();

 }