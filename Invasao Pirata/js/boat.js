class Boat{
    constructor(x,y,width,height, desloc){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.desloc = desloc;
        this.image = loadImage("../assets/boat.png");
        this.animation = boatAnimation;
        this.speed = 0.05;
        World.add(world,this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index],0,this.desloc,this.width, this.height);
        pop();
    }

    animate(){
        this.speed += 0.05;
    }
}