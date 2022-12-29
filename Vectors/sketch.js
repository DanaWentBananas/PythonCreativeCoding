
function Vector() {
  this.x = random(0,width)
  this.y = random(0,height)
  this.v = createVector(this.x,this.y)

  this.show = function(){
    stroke(255)
    line(this.x,this.y,mouseX,mouseY)
  }
  
}

let vectors = []

function setup() {
  createCanvas(400, 400);
  for(var i=0;i<333;i++){
    vectors.push(new Vector())
  }
}

function draw() {
  background(0);
  for(var i=0;i<333;i++){
    vectors[i].show()
  }
}
