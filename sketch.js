var snakeObj;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  snakeObj = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  noStroke();
  background(51);
  snakeObj.update()
  snakeObj.show()

  if (snakeObj.eat(food)) {
    pickLocation();
  }
  
  fill(255, 0, 110)
  rect(food.x, food.y, scl, scl)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snakeObj.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snakeObj.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snakeObj.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snakeObj.dir(-1, 0);
  }
}

