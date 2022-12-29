function Cell(pos,r,c){
  this.r = r;
  this.pos = pos.copy()
  this.c = c


  this.show = function(){
    noStroke()
    fill(this.c)
    circle(this.pos.x,this.pos.y,this.r)
  }

  this.move = function(){
    var vel = p5.Vector.random2D();
    this.pos.add(vel)
  }

  this.clicked = function(x,y){
    var d = dist(this.pos.x,this.pos.y, x,y)
    if(d<this.r){
      return true;
    }
    else{
      return false;
    }
  }

  this.mitosis = function(){
    c = color(random(0,255),random(0,255),random(0,255))
    var newCell = new Cell(this.pos, this.r/2, c);
    return newCell
  }
}

let cells = [];

function setup() {
  //createCanvas(windowWidth,windowHeight);
  createCanvas(400,400);
  r = 200
  pos = createVector(random(width),random(height))
  c = color(random(0,255),random(0,255),random(0,255))
  cells.push(new Cell(pos, r,c));
  pos = createVector(random(width),random(height))
  c = color(random(0,255),random(0,255),random(0,255))
  cells.push(new Cell(pos, r,c));
  pos = createVector(random(width),random(height))
  c = color(random(0,255),random(0,255),random(0,255))
  cells.push(new Cell(pos, r,c));
}

function draw() {
  background(0);
  for(var i=0;i<cells.length;i++){
  cells[i].show()
  cells[i].move()
  }
}

function mousePressed(){
  for(var i=cells.length-1;i>=0;i--){
    if(cells[i].clicked(mouseX,mouseY)){
      cell = cells[i].mitosis()
      cells.splice(i,1)
      cells.push(cell)
      cells.push(cell)
    }
  }
}
