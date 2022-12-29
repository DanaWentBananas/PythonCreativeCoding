//https://www.karlsims.com/rd.html


function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}

function draw() {
  background(0)
  loadPixels();

  for(var x=0;x<width;x++){
    for(var y=0;y<height;y++){
      var pix = (x+y*width)*4
      pixels[pix+0]=random(255)
      pixels[pix+1]=random(255)
      pixels[pix+2]=random(255)
      pixels[pix+3]=255
    }
  }

  updatePixels(); 
}
