var boy,boyimg,button1,button2,button3,button4;
function preload(){
  boyimg = loadAnimation("walk1boy.png","walk2boy.png","walk3boy.png","walk4boy.png","walk5boy.png","walk6boy.png");
}


function setup() {
  createCanvas(400, 400);
  boy = createSprite(200,200);
  boy.addAnimation("walk",boyimg);
  col = color(25, 23, 200, 50);
  button1 = createButton('<');
  button1.position(19, 39);
  button1.style('background-color',col)
  button1.style('border-radius','6px');
  button2 = createButton('>');
  button2.position(49, 39);
  button2.style('background-color',col)
  button2.style('border-radius','6px');
  button3 = createButton('^');
  button3.position(35, 9);
  button3.style('background-color',col)
  button3.style('border-radius','6px');
  button4 = createButton('v');
  button4.position(35, 69);
  button4.style('background-color',col)
  button4.style('border-radius','6px');
  button1.mousePressed(moveleft);
  button2.mousePressed(moveright);
  button3.mousePressed(moveup);
  button4.mousePressed(movedown);
}

function draw() {
  background("lightgreen");
  
  drawSprites();
}
function moveleft(){
  boy.x = boy.x - 10;
}
function moveup(){
  boy.y = boy.y - 10;
}
function moveright(){
  boy.x = boy.x + 10;
}
function movedown(){
  boy.y = boy.y + 10;
}