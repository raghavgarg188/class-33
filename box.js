class box{
    constructor(x,y,width,height){
        var options = {
            'density':0.04,
            'friction':1,
             'restituition':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTRE);
        strokeWeight(4);
        stroke("green");
        Fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
    }
    