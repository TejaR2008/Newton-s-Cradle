
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world, roof1, rope1, rope2, rope3,rope4, roype5, bob1, bob2,bob3, bob4, bob5, bobx, boby, bobd
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bobx = width/2
	boby = 400
	bobd = 40
	
	roof1 = new roof(500, 50, 300, 10);

	bob3 = new bob(bobx, boby, bobd)
	rope3 = new rope(bob3.body, roof1.body, 0, 0)

	bob2 = new bob(bobx - bobd, boby , bobd);
	rope2 = new rope(bob2.body, roof1.body, -bobd, 0) 

	bob1 = new bob(bobx - bobd * 2, boby, bobd);
	rope1 = new rope(bob1.body, roof1.body, -bobd * 2, 0)

	bob4 = new bob(bobx + bobd, boby, bobd);
	rope4 = new rope(bob4.body, roof1.body, bobd, 0);

	bob5 = new bob(bobx + bobd * 2, boby, bobd);
	rope5 = new rope(bob5.body, roof1.body, bobd * 2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
  roof1.display();
  bob3.display();
  rope3.display();

  bob2.display();
  rope2.display();

  bob1.display();
  rope1.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: -45})
	}
}



