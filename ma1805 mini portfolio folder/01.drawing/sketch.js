function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
  fill(255, 100, 100); 
  ellipse(200, 150, 100, 50); // top petal
  ellipse(200, 250, 100, 50); // bottom petal
  ellipse(150, 200, 50, 100); // left petal
  ellipse(250, 200, 50, 100); // right petal

  
  fill(255, 255, 0); 
  circle(200, 200, 50); 
}