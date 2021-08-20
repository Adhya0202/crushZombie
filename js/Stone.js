class Stone {
    constructor(x, y,radius) {
      var options = {
        isStatic: true,
        restitution:0.8,
        friction:1.0,
        density:1.0,
      };
      this.radius = radius
      this.body = Bodies.circle(x, y, options);
      World.add(world, this.body);
    }

    display(){
        fill("red");
        ellipseMode(RADIUS)
       circle(this.body.position.x, this.body.position.y,this.radius);
        
       }
}