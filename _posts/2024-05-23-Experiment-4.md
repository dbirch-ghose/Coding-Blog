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

The running version is found [here.](/Coding-Blog/CreativeCode/3d_1/index.html)
