class Cannon {
    constructor(x,y,width,height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.baseImg = loadImage("../assets/cannon_base.png");
        this.tuboImg = loadImage("../assets/CANON.png");
    }

    display() {

        //console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle < 50) {
            this.angle = this.angle + 1;
        }
        if (keyIsDown(LEFT_ARROW) && this.angle > -50) {
            this.angle = this.angle - 1;
        }


        //desenha o tubo
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        imageMode(CENTER);
        image(this.tuboImg,0,0, this.width, this.height);
        pop();
        
        
        // desenha a base
        image(this.baseImg,60,30,200,200);

        


    }

}