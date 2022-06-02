class Fans {
    constructor(x,y,lar,alt) {
        this.x = x;
        this.y = y;
        this.largura = lar;
        this.altura = alt;

        var options = {
            isStatic: true
        };

        this.angle = 10;

        this.body = Bodies.rectangle(this.x, this.y, this.largura, this.altura, options);
        World.add(PAKS, this.body);
    }

    display() {
        var pos = this.body.position;
        Body.rotate(this.body, this.angle);

        push();
        rectMode(CENTER);
        stroke("green");
        fill("200");

        translate(pos.x, pos.y);
        rotate(this.angle);
        rect(0, 0, this.largura, this.altura);
        pop();

        this.angle -= 0.1;
    }
}