class Plinko {
    constructor(x,y,width, height) {
      var options = {
          isStatic: true
      }
 
      this.body = Bodies.rectangle(x,y,width, height, options);
      this.color = color (random(0,255),random(0,255),random(0,255))
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,this.width, this.height);

    }
  };
