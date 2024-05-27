//experimenting with moving shapes
let x=-25
let direction = "up"

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(220);

  orbitControl();
  // rotateX(mouseY/200)
  // rotateZ(mouseX/200)
  
  let c1 = color(255, 0, 0);
  let c2 = color(0, 0, 255);
  
  //red light
  let lightPos = createVector(0, -150, 0);
  pointLight(c1, lightPos);
  let lightPos2 = createVector(150, 0, 0);
  pointLight(c1, lightPos2);
  
  //blue light
  let lightPos3 = createVector(0, 150, 0);
  pointLight(c2, lightPos3);
  let lightPos4 = createVector(-150, 0, 0);
  pointLight(c2, lightPos4);
  
  noStroke()
  
  
  push()
  translate(-25, x, 25)
  box(50)
  pop()
  
  push()
  translate(25,x,-25)
  box(50)
  pop()
  
  push()
  translate(-25, 25, -25)
  box(50)
  pop()
  
  push()
  translate(25, 25, 25)
  box(50)
  pop()
  
  
  if (direction == "up"){
    x=x-1
  }
  if(direction== "down"){
    x=x+1
  }
  if (x<=-25){
    direction = "down";
  }
    if (x>=75){
    direction = "up";
  }
}


