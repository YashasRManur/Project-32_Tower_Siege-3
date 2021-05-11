const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var Day, Night;
function preload(){
Day = loadImage("day.jpg");
Night = loadImage("night.jpg");
}
function setup(){
createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Polygon = new Polygon (200, 200, 15);
World.add(world, Polygon);
Sling = new SlingShot(Polygon.body, {x:200,y:200});
World.add(world, Sling);
Ground = new Platform(600,395,width,10);
World.add(world, Ground);
Level1 = new Platform(937.5,300,250,15);
World.add(world, Level1);

Block1 = new Block(825, 275, 25, 25); 
Block2 = new Block(850, 275, 25, 25); 
Block3 = new Block(875, 275, 25, 25); 
Block4 = new Block(900, 275, 25, 25); 
Block5 = new Block(925, 275, 25, 25); 
Block6 = new Block(950, 275, 25, 25); 
Block7 = new Block(975, 275, 25, 25); 
Block8 = new Block(1000, 275, 25, 25); 
Block9 = new Block(1025, 275, 25, 25); 
Block10 = new Block(1050, 275, 25, 25); 

Block11 = new Block(825+12.5, 250, 25, 25); 
Block12 = new Block(850+12.5, 250, 25, 25);  
Block13 = new Block(875+12.5, 250, 25, 25);  
Block14 = new Block(900+12.5, 250, 25, 25);  
Block15 = new Block(925+12.5, 250, 25, 25);  
Block16 = new Block(950+12.5, 250, 25, 25);  
Block17 = new Block(975+12.5, 250, 25, 25);  
Block18 = new Block(1000+12.5, 250, 25, 25);  
Block19 = new Block(1025+12.5, 250, 25, 25);  

Block20 = new Block(850, 225, 25, 25);  
Block21 = new Block(875, 225, 25, 25);  
Block22 = new Block(900, 225, 25, 25);  
Block23 = new Block(925, 225, 25, 25);  
Block24 = new Block(950, 225, 25, 25);  
Block25 = new Block(975, 225, 25, 25);  
Block26 = new Block(1000, 225, 25, 25);  
Block27 = new Block(1025, 225, 25, 25);  

Block28 = new Block(850+12.5, 200, 25, 25);  
Block29 = new Block(875+12.5, 200, 25, 25);  
Block30 = new Block(900+12.5, 200, 25, 25);  
Block31 = new Block(925+12.5, 200, 25, 25);  
Block32 = new Block(950+12.5, 200, 25, 25);  
Block33 = new Block(975+12.5, 200, 25, 25);  
Block34 = new Block(1000+12.5, 200, 25, 25);  

Block35 = new Block(875, 175, 25, 25);  
Block36 = new Block(900, 175, 25, 25);  
Block37 = new Block(925, 175, 25, 25);  
Block38 = new Block(950, 175, 25, 25);  
Block39 = new Block(975, 175, 25, 25);  
Block40 = new Block(1000, 175, 25, 25);  

Block41 = new Block(875+12.5, 150, 25, 25);  
Block42 = new Block(900+12.5, 150, 25, 25);  
Block43 = new Block(925+12.5, 150, 25, 25);  
Block44 = new Block(950+12.5, 150, 25, 25);  
Block45 = new Block(975+12.5, 150, 25, 25);  

Block46 = new Block(900, 125, 25, 25);  
Block47 = new Block(925, 125, 25, 25);  
Block48 = new Block(950, 125, 25, 25);  
Block49 = new Block(975, 125, 25, 25);  

Block50 = new Block(900+12.5, 100, 25, 25);  
Block51 = new Block(925+12.5, 100, 25, 25);  
Block52 = new Block(950+12.5, 100, 25, 25);  

Block53 = new Block(925, 75, 25, 25); 
Block54 = new Block(950, 75, 25, 25);  

Block55 = new Block(925+12.5, 50, 25, 25); 
}
function draw(){
getBackground();
Engine.update(engine);
strokeWeight(0);
Polygon.display();
Sling.display();
Ground.display();
Level1.display();
strokeWeight(0.75);

Block1.display();
Block2.display();
Block3.display();
Block4.display();
Block5.display();
Block6.display();
Block7.display();
Block8.display();
Block9.display();
Block10.display();

Block11.display();
Block12.display();
Block13.display();
Block14.display();
Block15.display();
Block16.display();
Block17.display();
Block18.display();
Block19.display();

Block20.display();
Block21.display();
Block22.display();
Block23.display();
Block24.display();
Block25.display();
Block26.display();
Block27.display();

Block28.display();
Block29.display();
Block30.display();
Block31.display();
Block32.display();
Block33.display();
Block34.display();

Block35.display();
Block36.display();
Block37.display();
Block38.display();
Block39.display();
Block40.display();

Block41.display();
Block42.display();
Block43.display();
Block44.display();
Block45.display();

Block46.display();
Block47.display();
Block48.display();
Block49.display();

Block50.display();
Block51.display();
Block52.display();

Block53.display();
Block54.display();

Block55.display();
}
function mouseDragged(){
Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
Sling.fly();
}
function keyPressed() {
if(keyCode === 32){
Sling.attach(Polygon.body);
}
}
async function getBackground(){
var response = await fetch("http://worldclockapi.com/api/json/est/now");
var responseJson = await response.json();
var DateTime = responseJson.currentDateTime;
var Time = DateTime.slice(11,13);
if (Time >= 6-9.5 && Time <= 18-9.5){
background(Day);
}
else{
background(Night);
}
}
