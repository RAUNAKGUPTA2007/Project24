
var dustbin1, dustbin2, dustbin3, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	dustbin1=createSprite(width/2-100,610,20,100);
	dustbin1.shapeColor= "white";
	
	dustbin2=createSprite(width/2+100,610,20,100);
	dustbin2.shapeColor= "white";

	dustbin3=createSprite(width/2,650,200,20);
	dustbin3.shapeColor= "white";
	
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,600,30);
	ground = new Ground(width/2,height-50,width,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  
  drawSprites();
  fill("yellow")
  ground.display();
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:-85})
	}
}



