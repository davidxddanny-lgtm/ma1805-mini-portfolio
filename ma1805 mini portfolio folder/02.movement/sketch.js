let i = 0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Eyes
  fill(255, 0, 0); 
  circle(50, 50, 50); 
  circle(200, 50, 50); 

  // Mouth
  fill(0, 255, 0, 255);
  ellipse(150, 150, i, 20);

  // Rectangle 
  fill(0, 0, 255);
  rect(30, 75, i, 50);

  // Increment i
  i = i + 1; 
}