const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   pb = new playerBase(400,height-200,180,150)
   player = new Player(400,380,50,180)
   
   cb = new computerBase(1200,height-200,180,150)
   computerPlayer =new Player(1200,380,50,180)
   


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  pb.display()
  cb.display()

  player.display()
  computerPlayer.display()

   //display Player and computerplayer


}
