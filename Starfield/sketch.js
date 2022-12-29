
function Star() {
  this.x = random(-width,width)
  this.y = random(-height,height)
  this.z = random(width)
  this.r = 3

  this.pz = this.z

  this.display = function(){
    let sx = map(this.x/this.z, 0, 1, 0, width)
    let sy = map(this.y/this.z, 0, 1, 0, height)
    this.r = map(this.z,0,width,5,0)
    fill(255)
    //circle(sx,sy, this.r);

    let px = map(this.x/this.pz, 0, 1, 0, width)
    let py = map(this.y/this.pz, 0, 1, 0, height)

    this.pz = this.z
    stroke(255)
    line(px,py,sx,sy)
  }

  this.update = function(){
    this.z = this.z - speed;
    if (this.z<1){
      this.z = width
      this.x = random(-width,width)
      this.y = random(-height,height)
      this.pz = this.z
    }
  }
}

let stars = []
let speed = 5

function setup() {
  createCanvas(400, 400);
  for(var i=0;i<555;i++){
    stars.push(new Star())
  }
}

function draw() {
  background(0);
  translate(width/2,height/2)
  speed = map(mouseX, 0, width, 0, 20)
  for(var i=0;i<555;i++){
    stars[i].update()
    stars[i].display()
  }
}
