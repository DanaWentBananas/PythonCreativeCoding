function Floaty(){
  this.x = random(0,width)
  this.y = random(0,height)
  this.lifespan = 100
  this.c = color(random(0,255),random(0,255),random(0,255),100)
  this.speedx = random(-1,1)
  this.speedy = random(-1,1)
  r = 50

  this.display= function(){
    noStroke()
    fill(this.c)
    circle(this.x,this.y, r)
  }

  this.update = function(){
    this.x = this.x - this.speedx
    this.y = this.y - this.speedy
    this.c = this.c - 10;
    this.c = color(random(0,255),random(0,255),random(0,255),this.c)

  }
}

let floaties = []
let floaty

function setup() {
  createCanvas(400, 400);
  floaty = new Floaty()
  // for(var i=0;i<33;i++){
  //   floaties.push(new Floaty())
  // }
  console.log(floaties.length)

}

function draw() {
  //background(200)
  // for(var i=0;i<33;i++){
  //   floaties[i].display()
  //   floaties[i].update()
  // }
  floaty.display()
  floaty.update()
}
