//https://www.karlsims.com/rd.html

var grid;
var next;



//play around with these values
//originals: 1, 0.5, 0.055, 0.062
var dA = 1.3
var dB = 1.5
var feed = 0.055
var k = 0.062


function setup() {
  createCanvas(400, 400);
  pixelDensity(1)

  grid = []
  next = []
  for(var x=0;x<width;x++){
    grid[x] = [];
    next[x] = [];
    for(var y=0;y<height;y++){
      grid[x][y] = {a: 1, b:0}
      next[x][y] = {a: 1, b:0}
    } 
  }

  for (var i = 50; i < 150; i++) {
    for (var j = 50; j < 150; j++) {
      grid[i][j].b = 1;
    }
  }

  for (var i = 333; i < 360; i++) {
    for (var j =333; j < 360; j++) {
      grid[i][j].b = 1;
    }
  }

  for(var i = 0; i<4000;i++){
    grid[floor(random(400))][floor(random(400))].b = 1
  }

}

function draw() {
  background(0)

  for(var x=1;x<width-1;x++){
    for(var y=1;y<height-1;y++){
      var a = grid[x][y].a
      var b = grid[x][y].b
      next[x][y].a = a + dA*laplaceA(x,y) - a*b*b + feed*(1-a)
      next[x][y].b = b + dB*laplaceB(x,y) + a*b*b - (k + feed)*b

      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }

  loadPixels()

  for(var x=1;x<width-1;x++){
    for(var y=1;y<height-1;y++){
      var pix = (x+y*width)*4
      var a = next[x][y].a
      var b = next[x][y].b
      var c = floor((a-b)*255)
      c = constrain(c,0,255)
      pixels[pix+0]=c
      pixels[pix+1]=c
      pixels[pix+2]=c
      pixels[pix+3]=255
    }
  }

  updatePixels(); 

  swap()
}

function swap(){
  var temp=grid
  grid=next;
  next=temp;
}

function laplaceA(x,y){
  var sumA = 0
  sumA +=grid[x][y].a*-1
  sumA +=grid[x-1][y].a*0.2
  sumA +=grid[x+1][y].a*0.2
  sumA +=grid[x][y+1].a*0.2
  sumA +=grid[x][y-1].a*0.2
  sumA +=grid[x-1][y-1].a*0.05
  sumA +=grid[x+1][y-1].a*0.05
  sumA +=grid[x+1][y+1].a*0.05
  sumA +=grid[x-1][y+1].a*0.05
  return sumA
}

function laplaceB(x,y){
  var sumB = 0
  sumB +=grid[x][y].b*-1
  sumB +=grid[x-1][y].b*0.2
  sumB +=grid[x+1][y].b*0.2
  sumB +=grid[x][y+1].b*0.2
  sumB +=grid[x][y-1].b*0.2
  sumB +=grid[x-1][y-1].b*0.05
  sumB +=grid[x+1][y-1].b*0.05
  sumB +=grid[x+1][y+1].b*0.05
  sumB +=grid[x-1][y+1].b*0.05
  return sumB
}
