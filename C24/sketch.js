// NAMESPACE OU NAMESPACING
const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;


// Criando variaveis globais
var motor, PAKS;
var bola, chao;
var botao;
var lamina, angulo = 60;

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

    //inicializa a lamina
    lamina = Bodies.rectangle(200,200,50,10,opcoes_chao);
    World.add(PAKS, lamina);
}

function draw() 
{
    background("gray");         //define cor pro background
    Engine.update(motor);       //atualiza o motor
	
	Body.rotate(lamina,angulo);	//setar uma posicao inicial para o corpo, sem tornar isso frequente

	// encapsulamento do translate (mudando o (0,0) para a posicao da lamina)
	push();
	translate(lamina.position.x,lamina.position.y);
	rotate(angulo);		// rotaciona de fato
	rect(0,0,50,10);	//desenha lamina
	pop();
	angulo += 0.1;				// aumenta o angulo da lamina

    ellipse(bola.position.x,bola.position.y,20);        //desenha bola
    rect(chao.position.x,chao.position.y,400,10);       //desenha chao
	
}

// funcao para aplicar forca em um corpo
function forcaV(){
	// (corpo , onde a forca está sendo aplicada , qta forca é aplicada)
	Body.applyForce(bola,{x: 0, y:0},{x: 0, y: -0.05});


}