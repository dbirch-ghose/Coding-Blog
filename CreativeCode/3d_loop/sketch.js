//experimenting with moving shapes + added for loop to make shapes
let x,y,z
let direction = "up"
let m
let numSquares = 5

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
  
  x= -25
  y= -25
  z= 25
  
  for(let i=0; i<numSquares; i++){
    newSquare()
    x+=50
  }
  
  // push()
  // translate(-25, 25, 25)
  // box(50)
  // pop()
  
//   push()
//   translate(25,x,-25)
//   box(50)
//   pop()
  
//   push()
//   translate(-25, 25, -25)
//   box(50)
//   pop()
  
//   push()
//   translate(25, 25, 25)
//   box(50)
//   pop()
  
  if (direction == "up"){
    m=m-1
  }
  if(direction== "down"){
    m=m+1
  }
  if (m<=-25){
    direction = "down";
  }
    if (m>=75){
    direction = "up";
  }
}

function newSquare(){
  noStroke()
  push()
  translate(x,y,z)
  box(50)
  pop()
}


