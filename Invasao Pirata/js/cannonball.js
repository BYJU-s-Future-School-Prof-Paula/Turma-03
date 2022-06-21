class CannonBall{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: true
        };

        this.r = 30;

        this.body = Bodies.circle(x,y,this.r, options);
        World.add(world, this.body);

        this.image = loadImage("../assets/cannonball.png");
        
    }

    shoot(){
        var newAngle = cannon.angle - 30;
        newAngle = newAngle*(3.14/180);

        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body,{
            x: velocity.x * (180/3.14),
            y: velocity.y * (180/3.14)
        });
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();

    }
}