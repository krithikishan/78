var House1,House2,House3,House4;
var p1, p2, p3, p4, p5, p6, p7, p8;
var PC;
var Counter = 0;
var Covid;
var Edges;

function setup() {
  createCanvas(800,400);
  House1 = createSprite(100,50,200,100);
  House1.shapeColor = "white";
  House2 = createSprite(700,50,200,100);
  House2.shapeColor = "white";
  House3 = createSprite(100,350,200,100);
  House3.shapeColor = "white";
  House4 = createSprite(700,350,200,100);
  House4.shapeColor = "white";
  p1 = createSprite(90,50,20,20);
  p1.shapeColor = "blue";
  p2 = createSprite(130,57,20,20);
  p2.shapeColor = "blue";
  p3 = createSprite(690, 50, 20,20);
  p3.shapeColor = "blue";
  p4 = createSprite(740, 50,20,20);
  p4.shapeColor = "blue";
  p5 = createSprite(90,350,20,20);
  p5.shapeColor = "blue";
  p6 = createSprite(130,350,20,20);
  p6.shapeColor = "blue";
  p7 = createSprite(690, 350, 20,20);
  p7.shapeColor = "blue";
  p8 = createSprite(740, 350,20,20);
  p8.shapeColor = "blue";
  Covid = createSprite(400,200,10,10);
  Covid.shapeColor = "red";
  Edges = createEdgeSprites();
  PC = createSprite(500,200,20,20);
  PC.shapeColor = "green";
}

function draw() {
  background(0);  
  PC.x = World.mouseX;
  PC.y = World.mouseY;
  p1.velocityX = 4;
  p1.velocityY = 2;
  p8.velocityX = -4.5;
  p8.velocityY = -2;
  p1.bounceOff(Edges[0]);
  p1.bounceOff(Edges[1]);
  p1.bounceOff(Edges[2]);
  p1.bounceOff(Edges[3]);
  p2.bounceOff(Edges[0]);
  p2.bounceOff(Edges[1]);
  p2.bounceOff(Edges[2]);
  p2.bounceOff(Edges[3]);
  p3.bounceOff(Edges[0]);
  p3.bounceOff(Edges[1]);
  p3.bounceOff(Edges[2]);
  p3.bounceOff(Edges[3]);
  p4.bounceOff(Edges[0]);
  p4.bounceOff(Edges[1]);
  p4.bounceOff(Edges[2]);
  p4.bounceOff(Edges[3]);
  p5.bounceOff(Edges[0]);
  p5.bounceOff(Edges[1]);
  p5.bounceOff(Edges[2]);
  p5.bounceOff(Edges[3]);
  p6.bounceOff(Edges[0]);
  p6.bounceOff(Edges[1]);
  p6.bounceOff(Edges[2]);
  p6.bounceOff(Edges[3]);
  p7.bounceOff(Edges[0]);
  p7.bounceOff(Edges[1]);
  p7.bounceOff(Edges[2]);
  p7.bounceOff(Edges[3]);
  p8.bounceOff(Edges[0]);
  p8.bounceOff(Edges[1]);
  p8.bounceOff(Edges[2]);
  p8.bounceOff(Edges[3]);
  if(p1.isTouching(Covid)){
    p1.shapeColor = "red";

  }
  if(p1.isTouching(p7)){
    p7.shapeColor = "red";
  }
  if(p8.isTouching(Covid)){
    p8.shapeColor = "red";
  }
  if(p8.shapeColor === "red" && p8.isTouching(p2)){
    p2.shapeColor = "red";
    p2.velocityX = 3;
    p2.velocityY = 4;
  }
  if(p2.shapeColor === "red"){
    if(p2.isTouching(p3)){
      p3.shapeColor = "red";
    }
    if(p2.isTouching(p4)){
      p4.shapeColor = "red";
    }
    if(p2.isTouching(p5)){
      p5.shapeColor = "red";
    }
    if(p2.isTouching(p6)){
      p6.shapeColor =  "red";
    }
    if(p2.isTouching(p7)){
      p7.shapeColor = "red";
    }
  }
    if(p6.shapeColor === "red"){
      Counter = 1;
      console.log(p1.x);
      console.log(p1.y);
      console.log(p2.x);
      console.log(p2.y);
      console.log(p3.x);
      console.log(p3.y);
      console.log(p4.x);
      console.log(p4.y);
      console.log(p5.x);
      console.log(p5.y);
      console.log(p6.x);
      console.log(p6.y);
      console.log(p7.x);
      console.log(p7.y);
      console.log(p8.x);
      console.log(p8.y);
      p1.velocityX = -3;
      p1.velocityY = -4;
      p1.bounceOff(House1);
      p1.bounceOff(House2);
      p1.bounceOff(House3);
      p1.bounceOff(House4);
      p2.velocityX = 3;
      p2.velocityY = -4;
      p2.bounceOff(House1);
      p2.bounceOff(House2);
      p2.bounceOff(House3);
      p2.bounceOff(House4);
      p3.velocityX = -3;
      p3.velocityY = 4;
      p3.bounceOff(House1);
      p3.bounceOff(House2);
      p3.bounceOff(House3);
      p3.bounceOff(House4);
      p4.velocityX = -3;
      p4.velocityY = 4;
      p4.bounceOff(House1);
      p4.bounceOff(House2);
      p4.bounceOff(House3);
      p4.bounceOff(House4);
      p5.velocityX = 3;
      p5.velocityY = -4;
      p5.bounceOff(House1);
      p5.bounceOff(House2);
      p5.bounceOff(House3);
      p5.bounceOff(House4);
      p6.velocityX = 3;
      p6.velocityY = -4;
      p6.bounceOff(House1);
      p6.bounceOff(House2);
      p6.bounceOff(House3);
      p6.bounceOff(House4);
      p7.velocityX = 3;
      p7.velocityY = 4;
      p7.bounceOff(House1);
      p7.bounceOff(House2);
      p7.bounceOff(House3);
      p7.bounceOff(House4);
      p8.velocityX = -3;
      p8.velocityY = -4;
      p8.bounceOff(House1);
      p8.bounceOff(House2);
      p8.bounceOff(House3);
      p8.bounceOff(House4);
  }
    if(Counter === 1){
      textSize(20);
      fill("green");
      text("All the people got infected with Covid", 230, 100);
  }
    if(PC.isTouching(House1) || PC.isTouching(House2) || PC.isTouching(House3) || PC.isTouching(House4)){
      Counter = 2;
    }
    else{
      Counter = 0;
    }
    if(Counter === 2){
      textSize(20);
      fill("green");
      text("Home isolation is the only prevention and cure to Covid-19", 150, 270);
      text("Goal Achieved", 350, 300);
    }
  drawSprites();
}