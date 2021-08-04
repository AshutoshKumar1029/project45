var background2, backgroundimage;
var cannon, cannonimage;
var bullet, bulletimage, bulletgroup;
var maincircle, circle1, circle2, circle3, circle4, circle5, circle6, edges;
var ball1, ball2, ball3, ball4, ball5, ball6;
var score1, score2, score3, score4, score5, score6, mainScore;
var ball1S, ball2S, ball3S, ball4S, ball5S, ball6S;
var ball1V, ball2V, ball3V, ball4V, ball5V, ball6V;
var gameState = 0;
var youWon,youwon,youLose,youlose,Replay,replay; 

function preload() {
  cannonimage = loadImage("cannon.png");
  bulletimage = loadImage("bullet.png");
  backgroundimage = loadImage("background.jpg");
  circle1 = loadImage("circle1.png");
  circle2 = loadImage("circle2.png");
  circle3 = loadImage("circle3.png");
  circle4 = loadImage("circle4.png");
  circle5 = loadImage("circle5.png");
  circle6 = loadImage("circle6.png");
  youWon = loadImage("won.png");
  youLose = loadImage("lose.png");
  Replay = loadImage("replay.jpg")
}

function setup() {
  createCanvas(300, 500);

  background2 = createSprite(150, 250);
  background2.addImage("fbgbj", backgroundimage);
  background2.scale = 0.85;

  cannon = createSprite(200, 200, 50, 50);
  cannon.addImage("shxc", cannonimage);
  cannon.scale = 0.2;
  cannon.y = 450;
  cannon.debug = false;
  cannon.setCollider("rectangle", 0, 0, 230, 470);
  bulletgroup = new Group();
  edges = createEdgeSprites();

  ball1 = createSprite(-50, 100, 30, 30);
  ball1.scale = 0.1;
  ball1.addImage(circle1);
  score1 = Math.round(random(200, 100));
  ball1S = "false";
  ball1V = "false";

  ball2 = createSprite(420, 100, 30, 30);
  ball2.scale = 0.1;
  ball2.addImage(circle2);
  score2 = Math.round(random(200, 100));
  ball2S = "false";
  ball2V = "false";

  ball3 = createSprite(-50, 100, 30, 30);
  ball3.scale = 0.1;
  ball3.addImage(circle3);
  score3 = Math.round(random(300, 200));
  ball3S = "false";
  ball3V = "false";

  ball4 = createSprite(420, 100, 30, 30);
  ball4.scale = 0.1;
  ball4.addImage(circle4);
  score4 = Math.round(random(400, 300));
  ball4S = "false";
  ball4V = "false";

  ball5 = createSprite(-50, 100, 30, 30);
  ball5.scale = 0.1;
  ball5.addImage(circle5);
  score5 = Math.round(random(500, 400));
  ball5S = "false";
  ball5V = "false";

  ball6 = createSprite(420, 100, 30, 30);
  ball6.scale = 0.1;
  ball6.addImage(circle6);
  score6 = Math.round(random(600, 500));
  ball6S = "false";
  ball6V = "false";
  
  youwon = createSprite(150,220);
  youwon.addImage(youWon);
  youwon.scale = 0.60
  youwon.visible = false

  youlose = createSprite(150,220);
  youlose.addImage(youLose);
  youlose.scale = 0.60
  youlose.visible = false

  replay = createSprite(150,300);
  replay.addImage(Replay);
  replay.scale = 0.45
  replay.visible = false
   
  mainScore = 0;
}

function draw() {
  background("black");
  if (gameState=== 0 ){
    if (keyDown("space")){
      gameState = 1;
    }
  }
  if (gameState === 1) {
    cannon.x = mouseX;

    if (keyDown("space") || mousePressedOver(cannon)) {
      firebullet();
    }

    if (ball1V === "false") {
      ball1.x = 10;
      ball1.velocityX = random(-4, 4);
      ball1.velocityY = random(-4, 4);
      ball1V = "true";
    }

    if (
      ball2V === "false" &&
      ball1V === "true" &&
      frameCount % 300 === 0
    ) {
      ball2.x = 300;
      ball2.velocityX = random(-4, 4);
      ball2.velocityY = random(-4, 4);
      ball2V = "true";
    }

    if (
      ball3V === "false" &&
      ball2V === "true" &&
      frameCount % 100 === 0&&
      mainScore>190
      
    ) {
      ball3.x = 10;
      ball3.velocityX = random(-4, 4);
      ball3.velocityY = random(-4, 4);
      ball3V = "true";
    }

    if (
      ball4V === "false" &&
      ball3V === "true" &&
      frameCount % 100 === 0&&
      mainScore>390
    ) {
      ball4.x = 300;
      ball4.velocityX = random(-4, 4);
      ball4.velocityY = random(-4, 4);
      ball4V = "true";
    }

    if (
      ball5V === "false" &&
      ball4V === "true" &&
      frameCount % 100 === 0&&
      mainScore>699
    ) {
      ball5.x = 10;
      ball5.velocityX = random(-4, 4);
      ball5.velocityY = random(-4, 4);
      ball5V = "true";
    }

    if (
      ball6V === "false" &&
      ball5V === "true" &&
      frameCount % 400 === 0&&
      mainScore>999
    ) {
      ball6.x = 300;
      ball6.velocityX = random(-4, 4);
      ball6.velocityY = random(-4, 4);
      ball6V = "true";
    }

    if (ball1.isTouching(bulletgroup) && score1 > 0) {
      score1 = score1 - 1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }
    if (ball2.isTouching(bulletgroup) && score2 > 0) {
      score2 = score2 - 1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }
    if (ball3.isTouching(bulletgroup) && score3 > 0) {
      score3 = score3 - 1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }
    if (ball4.isTouching(bulletgroup) && score4 > 0) {
      score4 = score4 - 1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }
    if (ball5.isTouching(bulletgroup) && score5 > 0) {
      score5 = score5 -1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }
    if (ball6.isTouching(bulletgroup) && score6 > 0) {
      score6 = score6 - 1.5;
      mainScore = mainScore + 1.5;
      bulletgroup[0].destroy();
    }

    if (score1 <= 0) {
      ball1.velocityX = 0;
      ball1.velocityY = 0;
      ball1.x = 440;
      ball1.y = 50;
    }
    if (score1 <= 0) {
      ball1.velocityX = 0;
      ball1.velocityY = 0;
      ball1.x = 440;
      ball1.y = 50;
    }
    if (score2 <= 0) {
      ball2.velocityX = 0;
      ball2.velocityY = 0;
      ball2.x = 440;
      ball2.y = 50;
    }
    if (score3 <= 0) {
      ball3.velocityX = 0;
      ball3.velocityY = 0;
      ball3.x = 440;
      ball3.y = 50;
    }
    if (score4 <= 0) {
      ball4.velocityX = 0;
      ball4.velocityY = 0;
      ball4.x = 440;
      ball4.y = 50;
    }
    if (score5 <= 0) {
      ball5.velocityX = 0;
      ball5.velocityY = 0;
      ball5.x = 440;
      ball5.y = 50;
    }
    if (score6 <= 0) {
      ball6.velocityX = 0;
      ball6.velocityY = 0;
      ball6.x = 440;
      ball6.y = 50;
    }
  }
  //////////////////////////////////////////
  if (
    ball1.isTouching(cannon) ||
    ball2.isTouching(cannon) ||
    ball3.isTouching(cannon) ||
    ball4.isTouching(cannon) ||
    ball5.isTouching(cannon) ||
    ball6.isTouching(cannon)
  ) {
    gameState = 2;

    ball1.velocityX = 0;
    ball1.velocityY = 0;
    ball1.x = 440;
    ball1.y = 50;

    ball2.velocityX = 0;
    ball2.velocityY = 0;
    ball2.x = 440;
    ball2.y = 50;

    ball3.velocityX = 0;
    ball3.velocityY = 0;
    ball3.x = 440;
    ball3.y = 50;

    ball4.velocityX = 0;
    ball4.velocityY = 0;
    ball4.x = 440;
    ball4.y = 50;

    ball5.velocityX = 0;
    ball5.velocityY = 0;
    ball5.x = 440;
    ball5.y = 50;

    ball6.velocityX = 0;
    ball6.velocityY = 0;
    ball6.x = 440;
    ball6.y = 50;
  }
  
 /* if (gameState ===2){
    youlose.visible = true;
    replay.visible = true;
  }

  if (score1<=0&& score2<=0&& score3<=0&& score4<=0&& score5<=0&& score6<=0){
    gameState = 3
  }
  if(gameState === 3){
    youwon.visible = true;
    replay.visible = true;
  }
  if (mousePressedOver(replay)&& (gameState === 2 || gameState === 3)){
    youlose.visible = false;
    replay.visible = false;
    youwon.visible = false;
    gameState = 0;
    ball1V = "false"
  }*/
  
  drawSprites();

  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);

  fill("black");
  textSize(13);
  strokeWeight(0.7);
  stroke("black");
  text(Math.round(score1), ball1.x - 10, ball1.y + 4);
  text(Math.round(score2), ball2.x - 10, ball2.y + 4);
  text(Math.round(score3), ball3.x - 10, ball3.y + 4);
  text(Math.round(score4), ball4.x - 10, ball4.y + 4);
  text(Math.round(score5), ball5.x - 10, ball5.y + 4);
  text(Math.round(score6), ball6.x - 10, ball6.y + 4);
  textSize(15);
  fill("yellow");
  stroke("black");
  strokeWeight(4);
  text("SCORE : " + Math.round(mainScore), 120, 30);
}

function firebullet() {
  if (frameCount % 2 === 0) {
    bullet = createSprite(50, 400);
    bullet.addImage("dsad", bulletimage);
    bullet.scale = 0.075;
    bullet.velocityY = -6;
    bullet.x = mouseX;
    bullet.depth = 1;
    bullet.debug = false;
    bullet.lifetime = 70;
    bullet.setCollider("rectangle", 0, 0, 220, 50);
    bulletgroup.add(bullet);
  }
}

