---
title: "p5.js Experiment 2 - Walkers"
date: 2024-05-20
---

My second experiment was with walkers. It started with a class demonstration where we created a random walker. I drew an ellipse at the center of the page, and created variables for the number of directions and a direction. I made a new variable that picked a random direction to draw the next ellipse which created line of circles that move in random directions. This is demonstrated in the following code

```
  let newDir=floor(random(numDirections)) 
  let xStep=cos(newDir * TWO_PI/numDirections) * step 
  let yStep=sin(newDir * TWO_PI/numDirections) * step
  xPrev = xPos
  yPrev = yPos
  xPos+=xStep
  yPos+=yStep
```

![A random walker made of an ellipse.](/Coding-Blog/images/walkers/walkers1.png)

I then created a function to stop the walker from going off the edge by making it move back in from the opposite side.

```
function edges(){
  //resets to the other side
  if (xPos<0) {
    xPos=width
    xPrev = xPos //moves previous count to other side as well
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
```

Using new variables called xPrev and yPrev, which were the previous x and y position of the walker before step is added to it, I drew a line instead of an ellipse. We replaced the random with noise to create smoother movement. The noise value is picked from somewhere within half a circle from the x and y position making the line seem rounded as it changes direction.

`direction+=(noise(xPos/100, yPos/100, frameCount/100)-0.5)*HALF_PI`

Decreasing the opacity of the background creates a trail effect from the line.
![A walker made of a line that leaves a trail.](/Coding-Blog/images/walkers/walkers noise line.png)

Once I had this code, I began playing around with how I can draw the walker to create interesting patterns. I changed the starting position to the corner of the window and added a second line. This created a mirrored effect where the lines made the same pattern on opposite sides of the window.

![A walker made of a line that leaves a trail.](/Coding-Blog/images/walkers/walkers 2.png)

To make the patterns more pleasing to look at, I decided to add some colour. I did this by creating three variables for red, green and blue, and setting them to the number of shades of each colour by a noise value that is offset by a higher value for each colour. The offset means that noise values will start off different to each other so the colour the same for any of the variables. I used the variables as the rgb values for the stroke of the line and incremented the colours by 0.1 each time a new line is drawn so the colour slowly changes over time.  

```
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
```

![A walker made of a line that changes colour over time.](/Coding-Blog/images/walkers/walkers 4 .png)

Here is the running version for my [final experiment.](/Coding-Blog/CreativeCode/walkers_4/index.html)


https://editor.p5js.org/dbirch-ghose/sketches/Y6gbboPpq