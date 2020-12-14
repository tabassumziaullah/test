class Box{
    constructor(x,y,width,heigth){

        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        
        }
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        this.width=width;
        this.heigth=heigth;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.heigth);
        pop();
    }
};