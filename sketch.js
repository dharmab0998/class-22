const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
        isStatic: false
    
    }

   ball= Bodies.rectangle(200,100,200,20,ball_options);
    World.add(world,ball);

var ground_options ={
       isStatic: true
}

   ground= Bodies.rectangle(200,390,200,10,ground_options);
   World.add(world,ground);


    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,50,50);
    rect(ball.position.x,ball.position.y,50,50);
}
