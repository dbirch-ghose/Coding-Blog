---
title: "p5.js Experiment 3 - Mouse and Key Interaction"
date: 2024-05-15
---

For my third experiment I played around with using mouse and key interactions to create interesting interactive patterns. 
The first sketch I made used the mousePressed function to draw 4 lines from the mouse position that connected to the corners of the page. 

![4 lines drawn from the middle that connect to the corners.](/Coding-Blog/images/interaction/interaction corners.png) 

I wanted to develop this further so I introduced keys that can be pressed to change where the line was drawn from. Pressing the 'm' key made new lines connect to the middle of the edges of the page instead of the corners, and pressing 'c' switched it back to the corners.

![The code for the first experiment.](/Coding-Blog/images/interaction/interaction lines code.png) 
![4 lines drawn from the middle that connect to the corners and the edges.](/Coding-Blog/images/interaction/interaction lines.png) 

Next I made another design using the mousePressed function that drew an ellipse at the mouse position and a line that connects the mouse position to the centre of the page. I added a random colour to the shapes by assigning a variable 3 random values up to 255, however this didn't work and just made the shapes cycle through shades of grey, so i made 3 separate variables for rgb which worked. To make the sketch more interactive I used keys to control the size of the lines and ellipse. I used the 'w' key to increase the stroke weight of the line and size of the ellipse by incrementing them each time the 's' key to do the opposite. 

I also used the 'a' key to draw a new background in order to wipe the window clean allowing you to create a new pattern. 

![The code for the second design.](/Coding-Blog/images/interaction/interaction colour code.png) 
![Coloured lines with a circle on the end that have different sizes.](/Coding-Blog/images/interaction/interaction colour.png) 

Using the draw function instead of mousePressed made the lines draw at the mouse position in every frame, which created a very messy pattern.

![Coloured lines with a circle on the end that have different sizes.](/Coding-Blog/images/interaction/interaction draw.png) 

I wanted to make a sketch that used the mouse position to control shapes in different ways. I drew 2 ellipses and set one of them to a width of 200 and set the height to the mouse y value, and the other had a height of 200 and i set the width to the mouse x value, then set the size to the x and y value. This created two circles that move around and change size with the mouse.  

![Two circles of changing sizes and positions.](/Coding-Blog/images/interaction/interaction circles.png) 

