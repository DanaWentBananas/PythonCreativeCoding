function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.diameter = 20;
  this.lifespan = 255;
  
  
  this.display = function(){
    stroke(100, 200, 255);
    fill(100,100,255,this.lifespan);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
  
  this.update = function(){
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
    this.lifespan--;
  }
  
  this.clicked = function(){
    fill(255);
  }
  
  this.death = function(){
    
    if(this.x>width || this.x<0){
      
      return true;
      
    } else if(this.y>height || this.y<0){
      
      return true;
      
    } else if(this.lifespan==0){
      
      return true;
      
    } else{
      
      return false;
    }
  }
  
}