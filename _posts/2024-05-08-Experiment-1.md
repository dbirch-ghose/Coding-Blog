---
title: "p5.js Experiment 1 - Pixels"
date: 2024-05-15
---

For my first experiment I played around with images and ways of distorting them.
I started by from an in-class demonstration where we created a nested for loop to read the pixel data of an image and then change the size of the pixels.

One loop cycles through the picture height, and the other the picture width, and they both calculate the pixel positions of each colour by moving through the pixels and adding an offset. These offset values are stored in variables which can be used to control the colour of the image. A grid of rectangles is drawn using the step value added to the loop indexes which creates squares with sizes that can be controlled using the variable step, increasing the size means that the squares use an average of the colours that are there, making the image appear to be blurry. I first played round with the step size to create a very blurry image.

```
for(let j=0; j<pic.height; j+= step){
    for(let i=0; i<pic.width; i+=step){
      let offset=(pic.width*j+i)*4
      let pixelRed=pic.pixels[offset]
      let pixelGreen=pic.pixels[offset+1]
      let pixelBlue=pic.pixels[offset+2]
      let shade=(pixelRed+pixelGreen+pixelBlue)/3
      fill(pixelRed, pixelGreen, pixelBlue)
      rect(i,j,step,step)
    }
  }
```

![The code for my first pixels experiment.](/Coding-Blog/images/pixels/pixels-1.png) 

![The outcome of my first pixels experiment.](/Coding-Blog/images/pixels/pixels step 100.png) 

Later on in the same class, I changed the rectangles to ellipses and I began distorting the images by multiplying step by shade. Shade creates an average of the values of the three pixels colours, using this creates a black and white image that shows the brightness of each pixel through an ellipse of different sizes.

![The code for my second pixels experiment.](/Coding-Blog/images/pixels/pixels shade.png) 

  
I played around further and created a streaky effect by only multiplying the ellipse width by shade. I also changed the colour of the image by swapping the order of the colours when using the fill function.

![The code for my third pixels experiment.](/Coding-Blog/images/pixels/pixels shade 2.png) 

I then began experimenting on my own and used the value of the mouse postion to control the width size of the ellipses. This created an interesting effect where the ellipses increase and stretch, distorting the image and making it blurry.
I tried to find interesting effects that can turn an image into something more visually appealing and creative. I first used the mouse X and Y position to distort the image in all angles by multiplying step by the mouse position divided by 10.

![The code for my fourth pixels experiment.](/Coding-Blog/images/pixels/pixels xy distortion.png) 

Then I changed the mouse position to increase the size of step instead of the size of the ellipses, and multiplied it by shade divided by 255 to get a value between 0 and 1 and subtracted 1 to get the inverse, but only for the width of the ellipse. When moving the mouse the lighter colours had a thinner width while darker colours where full circles, which created an interesting effect.

![The code for my first pixels experiment.](/Coding-Blog/images/pixels/pixels 5.png) 

Here is the [code for my final version](/Coding-Blog/CreativeCode/pixels_5/index.html)

https://editor.p5js.org/dbirch-ghose/sketches/cKPc_g54Q
