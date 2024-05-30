---
title: Experiment 4 Showcase - 3D
date: 2024-05-23
---

For my showcase experiment I decided to use 3D geometry to create something interesting, however it turned out to be more difficult than I was expecting. My experimentation started with a in class where I just drew a 3D cube and played with the 3D functions in p5.js such as orbit control, materials and lighting.  

After playing around with these things I made my first experiment which was made of cubes in an abstract shape with red and blue point lights that shine on it from different sides. The point lights were made setting vectors, with opposing coordinates so they come from different sides, to a position variable which is given to the point light function as well as a colour.

```
  let c1 = color(255, 0, 0);
  let lightPos = createVector(0, -150, 0);
  pointLight(c1, lightPos);
  
  let c3 = color(0, 0, 255);
  let lightPos2 = createVector(0, 150, 0);
  pointLight(c3, lightPos2);
```

The cubes can be rotated around using the mouse X and Y values divided by 200 so it is a slower and smoother motion.

![4 cubes with basic lighting.](/Coding-Blog/images/3d/3d_1_pic.png) 

The running version is found [here.](/Coding-Blog/CreativeCode/3d_1_new/index.html)


Making the first sketch reminded me of a 3D artwork made by the generative artist Dave Whyte which he titled Cube Wave. This inspired me to make something similar where I draw cubes and make them move in a pleasing pattern.

![Cube Wave by Dave Whyte of Bees and Bombs.](/Coding-Blog/images/3d/cube_wave.gif) 

I started this process by trying to get the cubes to move. I used a tutorial on youtube to find code to move the shapes how I wanted to.

Here is a link to the [tutorial.](https://www.youtube.com/watch?v=xB6-NC_nKKY)

The shapes move using the code attached below, by setting the y coordinate of the cubes the the variable x which changes when the cube reaches a certain height. I also decided to use the `orbitControl()` function instead of using the mouse position to rotate the shapes as the previous method rotated the shapes from the corner of the first cube, rather than the center of the whole shape.

```
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
```

Here is the link to [the first version with movement.](/Coding-Blog/CreativeCode/3d_moving_shapes_1/index.html)

Now that I had movement, I wanted to be able to draw more cubes in a more efficient way, because at this point I was plotting the cubes's coordinates one by one. I decided to use a for loop so I wouldn't have to repeat code and this worked by setting the x,y and z values to variables with the coordinates of the first cube, and adding 50 to the x value after each loop.

```
  x= -25
  y= -25
  z= 25

  for(let i=0; i<numSquares; i++){
    newSquare()
    x+=50
  }

function newSquare(){
  noStroke()
  push()
  translate(x,y,z)
  box(50)
  pop()
}
```

Here is the link to [the experiment with the loop.](/Coding-Blog/CreativeCode/3d_loop/index.html)

Next I tried to combine the previous two experiments together so I put the code for the movement in a function and called this function in the for loop however this didn't work as nothing happened. Instead I put the movement code into the newCubes() function that plots the cubes and I incremented the y coordinate by the movement variable. This created a very messy and inconsistent movement that I wasn't able to fix. 

Here is the link to the [broken version.](/Coding-Blog/CreativeCode/3d_loop_movement_broken/index.html)


I then attempted to create the moving effect by plotting the cubes individually, while this wouldn't be efficient, it was the only way I knew the movement I already had would work. 

I began by plotting a 3x3 grid of cubes and I made two different functions for the movement of the cubes with different heights so certain cubes would move down further before moving back up again. The two movement functions worked separately however when I called both of them at once, the cubes moved to the height of only one of the functions even though they weren't all set to the same distance. 

Below is the code for the functions.  

```
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
```

Here is the link to this [version.](/Coding-Blog/CreativeCode/3d_moving_shapes_broken_3/index.html)



After these failed attempts I decided to take a new approach to see if I could get it to work. I used object orientation to create an array of cubes in the hopes that this would make it easy to control the attributes such as movement.

To do this I followed an online tutorial that can be found [here.](https://medium.com/@thehappycoder42/3d-art-tutorial-2-3d-arrays-e220a1150f0d)


The tutorial uses a nested for loop to draw cubes which are made in a class and store them in an array, and demonstrates how to create an 8x8x8 grid of cubes. Adapting this code allowed me to create another 3x3 grid of cubes which had spaces between.

This for loop I used.
```
for (let i = -50; i < 50; i += 40)
  {
    for (let j = -50; j < 50; j += 40)
    {
      cube = new Cube(i, j, 0)
      cubes.push(cube)
    }
  }
```

This 3x3 grid is linked [here.](/Coding-Blog/CreativeCode/3d_oo_1.2/index.html)

This gave me the idea to create a 3x3x3 cube made of cubes that have more cubes in the gaps which will move back and forth and would hopefully look pleasing. I nested another loop into the for loop to create a third dimension, and then made a copy of the loop but changed the values to create another smaller grid in an offset position that filled the gaps of the cube to create an alternating pattern.

```
 for (let i = -50; i < 50; i += 40)
  {
    for (let j = -50; j < 50; j += 40)
    {
       for (let k = -50; k < 50; k += 40)
      {
      cube = new Cube(i, j, k)
      cubes.push(cube)
    }
  }
}
  for (let i = -40; i < 40; i += 40)
  {
    for (let j = -40; j < 40; j += 40)
    {
       for (let k = -40; k < 40; k += 40)
      {
      cube = new Cube(i+10, j+10, k+10)
      cubes.push(cube)
    }
  }
}
```
This new grid is linked [here.](/Coding-Blog/CreativeCode/3d_oo_1.51/index.html)


I was unable to find a way to get the shapes to move as the values used to draw the locations of the cubes were inside the for loop which is called at once, and making any changes to the location of the cubes caused the editor to freeze, or didn't make any changes at all. Instead I made the shapes rotate instead of using orbitControl(). This made it more  fun to look at due to the interesting layout as well as the lighting. 

The final version is linked [here.](/Coding-Blog/CreativeCode/3d_oo_rotation/index.html)
