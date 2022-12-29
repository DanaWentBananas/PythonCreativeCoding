

bubbles = [];

function mousePressed(){
  bubbles.push(new Bubble(mouseX,mouseY));
  
  for(var i=0;i<bubbles.length;i++){
    var d = dist(bubbles[i].x,bubbles[i].y,mouseX,mouseY);
    var r = bubbles[i].diameter/2;
    if(d<r){
      bubbles[i].clicked();
    }
  }
  
}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX,mouseY));

}

function keyPressed(){
  bubbles.splice(0,1)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var i=0;i<1;i++){
    bubbles[i] = new Bubble(random(50,300),random(50,300));
  }
}

function draw() {
  background(0);
  
  for(var i=0;i<bubbles.length;i++){
    bubbles[i].display();
    bubbles[i].update();
    
    if(bubbles[i].death()){
      bubbles.splice(i,1);
    }
  }
  
  // if(bubbles.length>30){
  //   bubbles.splice(0,1);
  // }
  
}