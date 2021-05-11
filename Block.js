class Block{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction': 1.2,
        'density':1.0,
        //isStatic : true
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
  display(){
    if (this.body.speed < 4){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue")
    rect(pos.x, pos.y, this.width, this.height);
    }    
    else{
      World.remove(world,this.body);
    }
  }
}
