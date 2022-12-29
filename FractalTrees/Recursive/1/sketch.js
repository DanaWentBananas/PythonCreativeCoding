var angle 
var slider
var change = 0.5
var slider2

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4,0.01)
  slider2 = createSlider(0, 0.7,0.4,0.05)
}

function draw() {
  background(0);
  angle = slider.value()
  change = slider2.value()
  translate(200,height)
  stroke(255)
  branch(100)
}

function branch(len){
  line(0,0,0,-len)
  translate(0,-len)
  if(len>3){
    push();
    rotate(angle)
    branch(len*change)
    pop()
    push()
    rotate(-angle)
    branch(len*change)
    pop()
  }
}