let img; 

function preload() {
  img = loadImage('cat1.jpg');
}

function setup() {
  createCanvas(3000, 1500);
}

function draw() {
  background(220);
   // Draw the image.
  image(img, 0, 0);
}
