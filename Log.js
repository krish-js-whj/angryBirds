class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visiblity = 255;

  }
  display(){
if(this.body.speed < 3){
  super.display();
 }
 
 else{
  if (gameState!="onSling"){
     World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
    }  }
  }
score(){
  if (this.Visiblity < 0 && this.Visiblity > -51){
    score++;
  }
}}
