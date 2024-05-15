---
title: "p5.js Experiment 1 - Pixels"
date: 2024-05-15
---

For my first experiment I played around with images and ways of distorting them.
I started by from an in-class demonstration where we created a nested for loop to read the pixel data of an image and then change the size of the pixels.

One loop cycles through the picture height, and the other the picture width, and they both calculate the pixel positions of each colour by moving through the pixels and adding an offset. These offset values are stored in variables which can be used to control the colour of the image. A rectangle is drawn using the step value added to the loop indexes which creates squares with sizes that can be controlled using the variable step, increasing the size means that the squares use an average of the colours that are there, making the image appear to be blurry.  
![parrot-pixels-1](parrot.png "Parrot")

