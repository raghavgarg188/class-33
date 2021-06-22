class rope{
    constructor(bodyA,pointB){
        var options = {
           bodyA:bodyA,
           pointB:pointB,
           stiffness:1.2,
           length:250
    }
   
    this.pointB = pointB;
    this.rope = Constraint.create(Options);
    World.add(world,this.body);
    }
    attach(body){
        this.rope.bodyA = body;

    }
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA. position
            var pointB = this.pointB
            Push();
            stroke("blue");
            strokeWeight(3);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
           pop();
        }

    }
           
        
}    