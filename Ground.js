class Ground
{constructor()
{var ground_Options = {'isStatic': true}
this.body = Bodies.rectangle(400,790,800,20,ground_Options);
World.add(world,this.body);}
display ()
{rectMode(CENTER);
fill("yellow");
rect(this.body.position.x,this.body.position.y,800,20);}}