//experimenting with moving shapes
let x=-25
let m=-25
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
  let lightPos3 = createVector(0, 0, -150);
  pointLight(c1, lightPos3);
  
  //blue light
  let lightPos4 = createVector(0, 150, 0);
  pointLight(c2, lightPos4);
  let lightPos5 = createVector(-150, 0, 0);
  pointLight(c2, lightPos5);
  let lightPos6 = createVector(0, 0, 0);
  pointLight(c2, lightPos6);
  
  noStroke()
  
  
  
  push()
  translate(-25, 25, -25)
  box(50)
  pop()
  
  push()
  translate(-25, m, 25)
  box(50)
  pop()
    
  push()
  translate(-25, x, 75)
  box(50)
  pop()
  
  
  push()
  translate(25,25,-25)
  box(50)
  pop()
  
  push()
  translate(25, 25, 25)
  box(50)
  pop()
  
  push()
  translate(25, m, 75)
  box(50)
  pop()
  
  
  push()
  translate(75,25,-25)
  box(50)
  pop()
  
  push()
  translate(75, 25, 25)
  box(50)
  pop()
  
  push()
  translate(75, 25, 75)
  box(50)
  pop()
  
  moveCubes1()
  moveCubes2()
  
}

function moveCubes1(){
   if (direction == "up"){
    x=x-1
  }
  if(direction== "down"){
    x=x+1
  }
  if (x<=-25){
    direction = "down";
  }
    if (x>=175){
    direction = "up";
  }
}
 
function moveCubes2(){
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
 