---
title: "p5.js Experiment 2 - Walkers"
date: 2024-05-20
---

My second experiment was with walkers. It started with a class demonstration where we created a random walker. I drew an ellipse at the center of the page, and created variables for the number of directions and a direction. I made a new variable that picked a random direction to draw the next ellipse which created line of circles that move in random directions.

![A random walker made of an ellipse.](/Coding-Blog/images/walkers/walkers1.png)
![The first step of creating a random walker.](/Coding-Blog/images/walkers/walkers 1 code.png)

I then created a function to stop the walker from going off the edge by making it move back in from the opposite side if it leaves the window.

![The edges function.](/Coding-Blog/images/walkers/walkers edges.png)

Using new variables called xPrev and yPrev, which were the previous x and y position of the walker before step is added to it, I drew a line instead of an ellipse. We replaced the random with noise to create smoother movement as the line was quite jagged. The noise value is picked from somewhere within half a circle from the x and y position making the line seem rounded as it changes direction. Decreasing the opacity of the background creates a trail effect from the line.

![The code for adding noise to the line.](/Coding-Blog/images/walkers/walkers noise.png)
![A walker made of a line that leaves a trail.](/Coding-Blog/images/walkers/walkers noise line.png)
