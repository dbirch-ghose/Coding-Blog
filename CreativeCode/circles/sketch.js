// let colour
// let weight = 5
// let size = 5

function setup() {
  createCanvas(400,400);
  background(220)
  frameRate(120)
  stroke(255,0,0)
}


function draw(){
  background(210)
  noStroke()
  let xPos = mouseX 
  let yPos= mouseY
      
  fill(255)
  ellipse(200, yPos,xPos)
  
  fill(1)
  ellipse(xPos, 200, yPos)
}


// function mousePressed(){
//   strokeWeight(weight)
//   let r = random(255) 
//   let g = random(255) 
//   let b = random(255) 
//   // colour = (random(255), random(255), random(255))
  
//   stroke(r,b,g)
//   // line(pmouseX , pmouseY, 200,200)
  
//   // fill(r,g,b)
//   noFill()
//   ellipse(pmouseX, pmouseY, size)
// }


function keyTyped(){ 
  if (key === 'a') {
    background(220)
  }
  if (key === 'w') {
    weight +=1
    strokeWeight(weight)
    size += 1
  }
   if (key === 's') {
    weight -=1
    strokeWeight(weight)
    size -= 1
  }
}

