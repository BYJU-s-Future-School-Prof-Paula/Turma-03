// NAMESPACE OU NAMESPACING
const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;


// Criando variaveis globais
var motor, PAKS;
var bola, chao;

function setup() {
    createCanvas(400,400);              //canvas

    motor = Engine.create();            //criar motor da fisica
    PAKS = motor.world;                //criar mundo que segue motor
   
    // propriedades da bola
    var opcoes_bola = { 
        restitution: 0.95,
        frictionAir: 0.02 
    };

    //inicializar a bola
    bola = Bodies.circle(100,50,20,opcoes_bola); 
    World.add(PAKS, bola);


    //propriedades do chao
    var opcoes_chao = { 
        isStatic: true
    };

    //inicializar o chao
    chao = Bodies.rectangle(200,395,400,10,opcoes_chao);
    World.add(PAKS,chao);

    //arruma o rect e a ellipse
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() 
{
    background("gray");         //define cor pro background
    Engine.update(motor);       //atualiza o motor

    ellipse(bola.position.x,bola.position.y,20);        //desenha bola
    rect(chao.position.x,chao.position.y,400,10);       //desenha chao
}
