class Chain {
    constructor (bodyA,bodyB){
        //JSON format
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffness:0.04
    }
    

    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(3);
    //line(x1,y1,x2,y2)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}