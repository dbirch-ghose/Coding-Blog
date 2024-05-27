//experimenting with moving shapes and adding a loop
let cubes = []
let x,y,z
let numCubes = 10
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
  let lightPos = createVector(200, -150, 0);
  pointLight(c1, lightPos);
  let lightPos2 = createVector(150, 0, 0);
  pointLight(c1, lightPos2);
  
  //blue light
  let lightPos3 = createVector(200, 150, 0);
  pointLight(c2, lightPos3);
  let lightPos4 = createVector(-150, 0, 0);
  pointLight(c2, lightPos4);
  
  noStroke()
  
  
  
  let total = cubes.length;
  console.log(total)
  
    
  //row one
  x = -25
  y = -25
  z = -25
  for(let i=0; i< numCubes; i++){
    newCube()
    x+=50
    cubes.push(i)
  }
  
    // row two
    x = -75
    y = -25
    z = -75
   for(let i=0; i< numCubes; i++){
    newCube()
    x+=50
    cubes.push(i)
  }
  
   // row three
    x = -75
    y = -25
    z = 25
   for(let i=0; i< numCubes; i++){
    newCube()
    x+=50
    cubes.push(i)
  }
  
    // row four
    x = -5
    y = -25
    z = 75
   for(let i=0; i< numCubes; i++){
    newCube()
    x+=50
    cubes.push(i)
  }
  
  // if(cubes.length ==){
  // push()
  // translate(-25,100 ,25)
  // box(50)
  // pop()
  // }

  
//   for(let i=0; i<cubes.length; i++){
//     y+=m
//     // moveCubes()
//   } 
  
 
//   push()
//   translate(-25, m, 25)
//   box(50)
//   pop()
  
//   push()
//   translate(25,m,-25)
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

}

 function newCube(){
  push()
  translate(x,y,z)
  box(50)
  pop()
  y+=m
   
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
   


// function moveCubes(){
  
//   if (direction == "up"){
//     m=m-1
//   }
//   if(direction== "down"){
//     m=m+1
//   }
//   if (m<=-25){
//     direction = "down";
//   }
//     if (m>=75){
//     direction = "up";
//   }

  

