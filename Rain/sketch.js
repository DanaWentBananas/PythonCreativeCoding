function Rain(){
  this.x = random(0,height)
  this.y = random(0,50)
  this.speed = random(3,10)
  c = color(50,50,255)

  this.update = function(){
    this.py = this.y
    this.y = this.y + this.speed
    if(this.y>height){
      this.y = 0
      this.py = 0
    }
  }

  this.display = function(){
    stroke(c)
    line(this.x, this.py, this.x, this.y)
    circle(this.x,this.y, 1);
  }
}

let rains = []

function setup() {
  createCanvas(400, 400);
  for(var i=0;i<555;i++){
    rains.push(new Rain())
  }
}

function draw() {
  background(color(200,230,255));
  for(var i=0;i<555;i++){
    rains[i].display()
    rains[i].update()
  }
}
