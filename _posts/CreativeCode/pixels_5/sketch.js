let mx 
let my
let step

function preload(){
  pic=loadImage('parrot.png')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // image(pic,0,0)
  pic.loadPixels()
  noStroke()
  step = floor(map(mouseX,0,width,1,10))
  // step=10
  // mx = mouseX/100
  // my = mouseY/10
  for(let j=0; j<pic.height; j+= step){
    for(let i=0; i<pic.width; i+=step){
      let offset=(pic.width*j+i)*4
      let pixelRed=pic.pixels[offset]
      let pixelGreen=pic.pixels[offset+1]
      let pixelBlue=pic.pixels[offset+2]
      let shade=(pixelRed+pixelGreen+pixelBlue)/3
      fill(pixelRed, pixelGreen, pixelBlue)
      // fill(0)
      ellipse(i,j,step*(1-shade/255),step)
    }
  }
}

