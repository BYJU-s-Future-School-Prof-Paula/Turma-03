// NAMESPACE OU NAMESPACING
const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;


// Criando variaveis globais
var motor, PAKS;
var bola, chao;
var botao;
var fan1, fan2, fan3, fan4, angulo = 60;

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

    //carrega o botao
    botao = createImg("up.png");
    botao.position(350,350);
    botao.size(50,50);
    botao.mouseClicked(forcaV);

    // falar que os fans são objetos da classe Fans
    fan1 = new Fans(50,200,70,10);
    fan2 = new Fans(150,200,70,10);
    fan3 = new Fans(250,200,70,10);
    fan4 = new Fans(350,200,70,10);

}

function draw() 
{
    background("gray");         //define cor pro background
    Engine.update(motor);       //atualiza o motor
	
    fan1.display();
    fan2.display();
    fan3.display();
    fan4.display();


    ellipse(bola.position.x,bola.position.y,20);        //desenha bola
    rect(chao.position.x,chao.position.y,400,10);       //desenha chao
	
}

// funcao para aplicar forca em um corpo
function forcaV(){
	// (corpo , onde a forca está sendo aplicada , qta forca é aplicada)
	Body.applyForce(bola,{x: 0, y:0},{x: 0, y: -0.05});
}