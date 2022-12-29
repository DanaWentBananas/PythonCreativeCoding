balls = []

function setup() {
  createCanvas(400, 400);
  
  for(var i = 0;i<10;i++){
    balls[i] = new Ball(random(50,300),random(50,300));
  
  }
}

function draw() {
  background(220);
  
  for(var i=0;i<balls.length;i++){
    balls[i].display();
    balls[i].move();
    for(var j=0;j<balls.length;j++){
      if(balls[i]!=balls[j]){
        balls[i].intersect(balls[j]);
      }
    }
  }
}


function Ball(x,y){
  this.x = x;
  this.y = y;
  this.col = random(255);
  this.speeds = [-1,-3,3,1];
  this.speedx = random(this.speeds);
  this.speedy = random(this.speeds);
  this.r = 10;
  
  this.intersect = function(other){
    var d = dist(this.x,this.y,other.x,other.y);
    if(d < this.r+other.r){
      this.speedx = this.speedx*-1;
      other.speedy = other.speedy*-1;
      this.col = random(255);
    }
  }
  
  this.display = function(){
    fill(this.col);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
  
  this.move = function(){
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    
    if(this.x>width-this.r || this.x<this.r){
      this.speedx = this.speedx*-1;
    }
    
    if(this.y>height-this.r || this.y<this.r){
      this.speedy = this.speedy*-1;
    }
  }
}