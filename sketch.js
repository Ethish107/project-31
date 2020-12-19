const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
 
 var particle = [];
 var engine,world;

 var ground;
 var plinko = [];
 var division = [];
var dHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var i=0;i <= 480 ; i = i + 79.5){
      division.push(new Divisions(i,height-dHeight/2,8,dHeight));
  }

   for(var j=75 ;j <= width-10; j = j+50 ){
      plinko.push(new Plinko(j,75));
 }

 for(var j=50 ;j <= width-10; j = j+50 ){
  plinko.push(new Plinko(j,175));
}

for(var j=75 ;j <= width-10; j = j+50 ){
  plinko.push(new Plinko(j,275));
}

for(var j=50 ;j <= width-10; j = j+50 ){
  plinko.push(new Plinko(j,375));
}




 
}


function draw() {
  background(0);
 
  Engine.update(engine);
  
    ground.display();

   for(var i = 0;i < division.length;i++){
     division[i].display();
   }

   for(var j = 0;j < plinko.length;j++){
    plinko[j].display();
   }

   if(frameCount%60 === 0){
     particle.push(new Particle( random(width/2-30,width/2+30),10,10));
   }

   for(var k = 0;k < particle.length;k++){
    particle[k].display();
  }

 
}