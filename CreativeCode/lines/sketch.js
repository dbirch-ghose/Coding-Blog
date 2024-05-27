let c = true

function setup() {
  createCanvas(400,400);
  background(220)
}

function mousePressed(){
  strokeWeight(5)
  
  if (c == true){
    line(pmouseX , pmouseY, 0, 0)
    line(pmouseX , pmouseY, 400, 0)
    line(pmouseX , pmouseY, 400, 400)
    line(pmouseX , pmouseY, 0, 400)
  }
  else{
   line(pmouseX , pmouseY, 0, 200)
    line(pmouseX , pmouseY, 400, 200)
    line(pmouseX , pmouseY, 200, 400)
    line(pmouseX , pmouseY, 200, 0)
  }
}

function keyTyped(){ 
  if (key === 'm') {
    c = false
  }
  if (key === 'c'){
    c = true
  }
}
  
// }

// function mouseReleased(){
//   strokeWeight(5)
//   line(pmouseX , pmouseY, 200, 400)
//   line(pmouseX , pmouseY, 200, 0)
// }

// function draw() {
  //background(220);
   //if (mouseIsPressed){
     // let d=dist(pmouseX, pmouseY, mouseX, mouseY)
    // strokeWeight(d/2)
    //  line(pmouseX, pmouseY, mouseX, mouseY)   
 //  }
  
//}