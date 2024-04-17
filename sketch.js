///https://www.youtube.com/watch?v=4-jpIr61slg
///https://editor.p5js.org/kjhollen/sketches/B_yKRLdj8
//https://editor.p5js.org/NicolasTilly/sketches/mH-TgZcFa
let grabbed = [
  false, //[0] red circle
  false, //[1] Green Lower Half Circle
  false, //[2] White Triangle
  false, //[3] Yellow Triangle
  false, //[4] Red Triangle
  false, //[5] Green Triangle
  false,//[6] White Rect
  false,//[7] White Circle
  false,//[8] Red Circle 2
  false,//[9] Half White Circle
  false,//[10] Inner Half Green Circle
];

let x = [];
let y = [];

///triangles
let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];

///let hiddenObjectSelected = flase; // I don't know what this means
function setup() {
  createCanvas(400, 400);

  ///Initial Positions
  //0 Red Circle 1
  x[0] = 80;
  y[0] = 115;

  //1 Green Lower Half Circle
  x[1] = 80;
  y[1] = 200;

  //2 White Triangle
  x[2] = 25;
  y[2] = 375;
  x1[1] = 80;
  y1[1] = 255;
  x2[1] = 135;
  y2[1] = 375;

  //3 Yellow Triangle
  x[3] = 170;
  y[3] = 375;
  x1[2] = 200;
  y1[2] = 25;
  x2[2] = 230;
  y2[2] = 375;

  //4 Red Triangle
  x[4] = 230;
  y[4] = 375;
  x1[3] = 260;
  y1[3] = 255;
  x2[3] = 290;
  y2[3] = 375;

  //5 Green Triangle
  x[5] = 295;
  y[5] = 375;
  x1[4] = 335;
  y1[4] = 215;
  x2[4] = 375;
  y2[4] = 375;

  //6 White Rect
  x[6] = 135;
  y[6] = 200;

  //7 White Circle
  x[7] = 260;
  y[7] = 95;

  //8 Red Circle 2
  x[8] = 260;
  y[8] = 215;

  //9 Half White Circle
  x[9] = 375;
  y[9] = 100;

  //10 Inner Half Green Circle
  x[10] = 375;
  y[10] = 100;


}

function draw() {
  background(249, 242, 228);

  ///Border
  fill(0, 0, 0);
  rect(15, 15, 370, 370);
  //Grid
  line(200, 0, 200, 400); //half vert
  line(0, 200, 400, 200); //half hori
  line(100, 0, 100, 400); //1st quart ver
  line(0, 100, 400, 100); //top quar hor
  line(0, 300, 400, 300); //bottom quar hor
  line(300, 0, 300, 400); //2nd qurt vert

  noStroke();

  ///SHAPES//////////////////

  //WHITES
  fill(255, 255, 255);
  arc(x[9], y[9], 135, 135, radians(90), radians(270)); //White Half Circle
  circle(x[7], y[7], 93); //White Circle
  triangle(x[2], y[2], x1[1], y1[1], x2[1], y2[1]); //White Triangle
  rect(x[6], y[6], 35, 175); //White Rect

  //GREENS
  fill(77, 162, 82);
  arc(x[1], y[1], 110, 110, 0, PI); //LEFT bottom green half
  triangle(x[5], y[5], x1[4], y1[4], x2[4], y2[4]); //green
  arc(x[10], y[10], 110, 110, radians(90), radians(270));

  //REDS
  fill(192, 83, 0);
  circle(x[0], y[0], 75); //Red Circle 1
  triangle(x[4], y[4], x1[3], y1[3], x2[3], y2[3]); //Red Triangle
  circle(x[8], y[8], 75); //Red Circle 2

  //YELLOW
  fill(255, 233, 118);
  triangle(x[3], y[3], x1[2], y1[2], x2[2], y2[2]); //Yellow Triangle
  //Yellow Triangle

  text(mouseX + "," + mouseY, 20, 20);
}

///mouse in objects
//function mouseIsInRect(x, y, width, height) {}
function mouseIsInCircle (x,y,radius){
  
}
function mouseIsInTriangle (x,y,x1,y1,x2,y2){
  
}

function mousePressed() {
  ///[0] red circle
  if (
    mouseX > x[0] &&
    mouseX < (x[0] + 75) &&
    mouseY > y[0] &&
    mouseY < (y[0] + 75)
  ) {grabbed[0] = true; }
  
  //[1] green half circle
  if (
    mouseX > x[1] &&
    mouseX < x[1] + 110 &&
    mouseY > y[1] &&
    mouseY < y[1] + 110
  )  {grabbed[1] = true;} 
   
  
  //[2] White Triangle
  if(
    mouseX > x[2] &&
    mouseX < x[2] + 110 &&
    mouseY > y[2] &&
    mouseY < y[2] - 120
    )
  console.log(false,"line 190 mousePressed whitetriangle");
  {grabbed[2] = true;} 
  
  
  //[6] White Rect
  if (
    mouseX > x[6] &&
    mouseX < (x[6] + 35) &&
    mouseY > y[6] &&
    mouseY < (y[6] + 175)
  ) {grabbed[6] = true; }
    //if (mouseIsInRect(x[6], y[6], 35, 175))
 
  
  //[7] White Circle
  if (
    mouseX > x[7] &&
    mouseX < x[7] + 93 &&
    mouseY > y[7] &&
    mouseY < y[7] + 93
  ) {grabbed[7] = true;} 
    ///console.log(false, "line 188 mousePressed whitecircle");
  
  //[8] Red Circle 2
  if (
    mouseX > x[8] &&
    mouseX < (x[8] + 75) &&
    mouseY > y[8] &&
    mouseY < (y[8] + 75)
  ) {grabbed[8] = true; }
  
  //[9] Half White Circle ***
   if (
    mouseX > x[9] &&
    mouseX < (x[9] + 135) &&
    mouseY > y[9] &&
    mouseY < (y[9] + 135)
  ) {grabbed[8] = true; }
  
  
  //[10] Inner Half Green Circle ***
   if (
    mouseX > x[10] &&
    mouseX < x[10] + 110 &&
    mouseY > y[10] &&
    mouseY < y[10] + 110
  )  {grabbed[1] = true;} 
}

function mouseReleased() {
  grabbed[0] = false;
  grabbed[1] = false;
  grabbed[2] = false;
  grabbed[3] = false;
  grabbed[4] = false;
  grabbed[5] = false;
  grabbed[6] = false;
  grabbed[7] = false;
  grabbed[8] = false;
  grabbed[9] = false;
  grabbed[10] = false;
}

function mouseDragged() {
  
  
  //[0] red circle
  if (grabbed[0]) {
    x[0] = mouseX;
    y[0] = mouseY;}
  
  //[1] Green Lower Half Circle
  if (grabbed[1]) {
    x[1] = mouseX;
    y[1] = mouseY;}
  
  //[2] White Triangle
  if (grabbed[2]) {
    x[2] = mouseX;
    y[2] = mouseY;
    x1[1]= mouseX;
    y1[1]= mouseY;
    x2[1]= mouseX;
    y2[1]= mouseY;
  }
  
  //[3] Yellow Triangle
  //if (grabbed[3]) {
    //x[3] = mouseX;
    //y[3] = mouseY;}
  
  
    //[4] Red Triangle
  //if (grabbed[4]) {
    //x[4] = mouseX;
    //y[4] = mouseY;}
  
  
  //[5] Green Triangle
  //if (grabbed[5]) {
    //x[5] = mouseX;
    //y[5] = mouseY;}
  
  
  //[6] White Rect
  if (grabbed[6]) {
    x[6] = mouseX;
    y[6] = mouseY;
  }
  
  //[7] White Circle
  if (grabbed[7]) {
    x[7] = mouseX;
    y[7] = mouseY;
  }
  
  //[8] Red Circle 2
  if (grabbed[8]) {
    x[8] = mouseX;
    y[8] = mouseY;}
  
  
  //[9] Half White Circle
 if (grabbed[9]) {
    x[9] = mouseX;
    y[9] = mouseY;}
  
  
  //[10] Inner Half Green Circle
 if (grabbed[10]) {
    x[10] = mouseX;
    y[10] = mouseY;}


}

