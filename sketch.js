
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,300);
	ground = new Ground(400,550,800,30);
    dustbin1 = new Dustbin(600,550,100,20);
	dustbin2 = new Dustbin(550,500,20,80);
	dustbin3 = new Dustbin(500,500,20,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper = display();
  ground = display();
  dustbin1 = display();
  dustbin2 = display();
  dustbin3 = display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.applyForce(paper.body, paper.body.position,{x:85 , y: 85});
	}
}

