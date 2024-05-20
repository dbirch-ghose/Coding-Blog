---
title: "p5.js Experiment 1 - Pixels"
date: 2024-05-15
---

For my first experiment I played around with images and ways of distorting them.
I started by from an in-class demonstration where we created a nested for loop to read the pixel data of an image and then change the size of the pixels.

One loop cycles through the picture height, and the other the picture width, and they both calculate the pixel positions of each colour by moving through the pixels and adding an offset. These offset values are stored in variables which can be used to control the colour of the image. A grid of rectangles is drawn using the step value added to the loop indexes which creates squares with sizes that can be controlled using the variable step, increasing the size means that the squares use an average of the colours that are there, making the image appear to be blurry.  
![parrot-pixels-1]([parrot.png](https://private-user-images.githubusercontent.com/92864994/332089218-6b05ddbf-0d1d-442d-a2e8-82a365b931b6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYyMTM5NjMsIm5iZiI6MTcxNjIxMzY2MywicGF0aCI6Ii85Mjg2NDk5NC8zMzIwODkyMTgtNmIwNWRkYmYtMGQxZC00NDJkLWEyZTgtODJhMzY1YjkzMWI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIwVDE0MDEwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYwYTJmZmQ1NDdkMzdiYWMwNGVhYzlkNTkwMDUwNzAyOWY4YzA4MTNkOGNjYWU2NTk4MTI4YmZkYTE3YjA3ZDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.R8bYNHsy444BgmwXKIXTlm7ya2Bxzp6DDjJsOrtuMBc) "Pixels 1")

Later on in the same class, I changed the rectangles to ellipses and I began distorting the images by multiplying step by shade. Shade uses the brightness of the pixels to control the colour. 


I then began experimenting on my own and used the value of the mouse postion to control the size of the ellipses. This created an interesting effect where the ellipses increase and stretchm, distorting the image and making it blurry.

I tried to find interesting effects that can turn an image into something more visually appealing and creative. I changed the mouse position to increase the size of step instead of the size of the ellipses, and mutlitplied it by shade divided by 255 to get a value between 0 and 1 and subtractd 1 to get the inverse, but only for the width of the ellipse. When moving the mouse the lighter colours had a thinner width while darker colours where full circles, which created an interesting effect.
