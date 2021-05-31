var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("SOMAR");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiplicar");
  b2.position(100, 200);
  b2.mousePressed(mul); 
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Número 1",70,50)
  text("Número 2",270,50)

 
