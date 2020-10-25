const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base,right,left;
var trash , ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	
	engine = Engine.create();
	world = engine.world;
	trash = new Trash();
	ground = new Ground();
	base = Bodies.rectangle(395,750,225,20,{isStatic:true});
	right = Bodies.rectangle(395,660,100,20,{isStatic:true});
	left = Bodies.rectangle(600,660,100,20,{isStatic:true});
	keyPressed();
	World.add(world,base);
	World.add(world,right);
	World.add(world,left);
	
	Engine.run(engine);
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85})
	}
}


function draw()
 {
 /*console.log(trash);*/
  background("black");
  Engine.update(engine);
  rect(base.position.x,base.position.y,225,20);
  rect(right.position.x,right.position.y,20,100);
  rect(left.position.x,left.position.y,20,100);
  trash.display();
  ground.display();

 }