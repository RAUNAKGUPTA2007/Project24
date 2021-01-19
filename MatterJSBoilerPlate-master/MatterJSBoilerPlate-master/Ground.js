class Ground{
    constructor(x,y,w,h){
    var option = {
     isStatic:true,
	friction:0.5,
	density:1.2

        }
    this.body = Bodies.rectangle(x,y,w,h,option) ;
    World.add(world,this.body);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke("yellow");
        strokeWeight (10);
        rectMode(0,0,this.w,this.h);
        pop()
    }
}