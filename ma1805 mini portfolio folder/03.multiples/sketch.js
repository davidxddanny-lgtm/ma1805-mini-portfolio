let theText = ["hello", "World", "From", "Space"];
let word = theText[0]; 
let i = 0; 

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(200); // slightly darker background

  // The text display
  textSize(40); // slightly smaller text
  text(word, random(width), height / 2); 

  // Change the value of word
  word = theText[i];
  i = i + 1;
  if (i >= theText.length) {
    i = 1;
  }
  console.log(i);
}