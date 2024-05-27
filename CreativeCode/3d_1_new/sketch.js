//first experiment

function setup() {
  createCanvas(600,600, WEBGL);
}

function draw() {
  background(220);

  // orbitControl();
  rotateX(mouseY/200)
  rotateZ(mouseX/200)
  
  
  let c1 = color(255, 0, 0);
  let lightPos = createVector(0, -150, 0);
  pointLight(c1, lightPos);
  
  let c3 = color(0, 0, 255);
  let lightPos2 = createVector(0, 150, 0);
  pointLight(c3, lightPos2);
  
//   let c2 = color(0,0,255);
//   ambientLight(c2);
  
  noStroke()
  
  push()
  translate(-25, -25, 25)
  box(50)
  pop()
  
  push()
  translate(25, -25, -25)
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
  
  
  
  
}


// Click and drag the mouse to view the scene from different angles.

// function setup() {
//   createCanvas(100, 100, WEBGL);

//   describe('A sphere drawn on a gray background. The top of the sphere appears bright red. The color gets darker toward the bottom.');
// }

// function draw() {
//   background(200);

//   // Enable orbiting with the mouse.
//   orbitControl();

//   // Add a red point light from above.
//   // Use a p5.Color object and a p5.Vector object.
 

//   // Style the sphere.
//   noStroke();

//   // Draw the sphere.
//   sphere(30);
// }