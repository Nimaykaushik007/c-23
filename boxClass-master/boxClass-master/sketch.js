    const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box6,box7,box8,box9,box10,box11,box12,box13,box14;

var ground1;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,640,400,280);
    box2 = new Box(110,570,150,420);
    box3 = new Box(690,570,150,420);
    box4 = new Box(400,380,220,240);
    box5 = new Box(70,335,50,50);
    box6 = new Box(150,335,50,50);
    box7 = new Box(650,335,50,50);
    box8 = new Box(730,335,50,50);
    box9 = new Box(560,475,50,50);
    box10 = new Box(245,475,50,50);
    box11 = new Box(400,235,50,50);
    box12 = new Box(470,235,50,50);
    box13 = new Box(330,235,50,50);
    //box14 = new Box(400,380,220,240);

    ground1 = new Ground(400,790,800,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ground1.display();
}