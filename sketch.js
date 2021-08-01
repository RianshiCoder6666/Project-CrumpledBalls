const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,truck,garbage,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var dustbinImg,paperImg,garbageTruckImg,garbageImg;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
	garbageTruckImg = loadImage("garbage truck.png");
    garbageImg = loadImage("garbage img.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	truck = createSprite(180,600,20,20);
	truck.addImage("garbagetruck",garbageTruckImg);
	truck.scale = 0.7;

	garbage = createSprite(450,600,20,20);
	garbage.addImage("garbageImage",garbageImg);
	garbage.scale = 0.35;

	var ball1_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	

	ball1 = Bodies.circle(780,100,radius/2.6,ball1_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(720,100,radius/2.6,ball1_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(660,100,radius/2.6,ball1_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(620,100,radius/2.6,ball1_options);
	World.add(world,ball4);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background("white");
	rectMode(CENTER);

	fill("black");
	textSize(15);
	text("The garbage truck has come to collect the garbage. \nTherefore, throw the crumpled balls in the dustbin by pressing the following arrow keys in an appropriate order.",10,120);
	text("UP",10,160);
	text("LEFT",10,175);
	text("DOWN",10,190);
    text("RIGHT",10,205);

	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);

	image(paperImg,ball1.position.x,ball1.position.y,radius/2,radius/2);
	image(paperImg,ball2.position.x,ball2.position.y,radius/2,radius/2);
	image(paperImg,ball3.position.x,ball3.position.y,radius/2,radius/2);
	image(paperImg,ball4.position.x,ball4.position.y,radius/2,radius/2);
	
	image(dustbinImg, 1185, 570, 200,200);

	drawSprites();
	
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1,ball1.position,{x:35,y:-35});
    
  	}  
	
	  if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(ball2,ball2.position,{x:37,y:-37});
	
	  } 
	 
	 if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball3,ball3.position,{x:39,y:-39});
	
	  }

	  if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball4,ball4.position,{x:41,y:-41});
	
	  }
}




