
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,100,800,10);
	bobObject1 = new Bob(360,300,10,10);
	bobObject2 = new Bob(380,300,10,10);
	bobObject3 = new Bob(400,300,10,10);
	bobObject4 = new Bob(420,300,10,10);
	bobObject5 = new Bob(440,300,10,10);

	rope1 = new Rope(bobObject1.body,roof.body,bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();

  bobObject1.keyPressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:85,y: 85});
	}
}



