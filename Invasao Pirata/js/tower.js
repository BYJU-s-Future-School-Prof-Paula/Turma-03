class Tower{
    constructor(x,y,w,h) {
        
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,w,h,options);

        this.width = w;
        this.height = h;
        this.img = loadImage("../assets/tower.png")

        World.add(world,this.body);  
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
        pop();
    }

}