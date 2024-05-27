let xPos, yPos //not defined until canvas is drawn
let numDirections = 60
let direction = 0
let step = 20 //distance
let t

function setup() {
  createCanvas(windowWidth, windowHeight); //fills the whole space
  //sets the position to center of the canvas
  xPos=width
  yPos=height
  xPrev = xPos
  yPrev = yPos
  background(1); 
  frameRate(500)
  t = 0
}

function draw() {
  direction+=(noise(xPos/100, yPos/100, frameCount/100)-0.5)*HALF_PI
  //changes distance
  step=noise(xPos/10, yPos/10, frameCount/100)*25
  let xStep=cos(direction) * step 
  let yStep=sin(direction) * step 

  xPrev = xPos
  yPrev = yPos
  xPos+=xStep
  yPos+=yStep
  edges()
  
  var r = 255 * noise(t+1);
  var g = 255 * noise(t+2);
  var b = 255 * noise(t+3);
  strokeWeight(10)
  stroke(r, g, b);
  t = t + 0.01;//incremented to cycle through colours
  line(xPrev, yPrev, xPos, yPos) 
  line(yPrev, xPrev, yPos, xPos) 
  line(-xPrev, -yPrev, -xPos, -yPos)
  line(-yPrev, -xPrev, -yPos, -xPos)
  fill(0)

}

function edges(){
  //resets to the other side
  if (xPos<0) {
    xPos=width
    xPrev = xPos 
  } 
    if (xPos>width) {
      xPos=0
      xPrev = xPos
    }
      
  if (yPos<0) {
    yPos=height
    yPrev = yPos
  }
  if (yPos>height) {
    yPos=0
  yPrev = yPos}
  
}