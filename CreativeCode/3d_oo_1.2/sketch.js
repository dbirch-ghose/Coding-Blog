// https://medium.com/@thehappycoder42/3d-art-tutorial-2-3d-arrays-e220a1150f0d

let cubes = []
let cube


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
  for (let i = -50; i < 50; i += 40)
  {
    for (let j = -50; j < 50; j += 40)
    {
      cube = new Cube(i, j, 0)
      cubes.push(cube)
    }
  }
  
   for (let i = -50; i < 50; i += 40)
  {
    for (let j = -50; j < 50; j += 40)
    {
      cube = new Cube(i, j, 0)
      cubes.push(cube)
    }
  }
  
  
}

function draw() {
  background(220);
  orbitControl()
  noStroke()

  let c1 = color(255, 0, 0);
  let c2 = color(0, 0, 255);
  
  // red light
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
  let lightPos6 = createVector(0, 0, -150);
  pointLight(c2, lightPos6);
  
  for (let i=0; i<cubes.length; i++){
    cubes[i].show() 
  }
    
}

class Cube{
  constructor(x,y,z){
    this.x = x
    this.y = y
    this.z = z
  }
  
  show(){
    push()
    translate(this.x,this.y,this.z)
    box(20)
    pop()
    
    push()
    translate(this.x,this.y,this.z)
    box(20)
    pop()
  }
}