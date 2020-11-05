class Box{
    constructor(x,y,width,height){
        var option={
            density: 1,
            restitution: 0.8,
            friction: 1
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        rectMode(CENTER);
        stroke("Brown");
        strokeWeight(2);
        fill("green");        
        //translate(pos.x,pos.y);
        rotate(angle);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}