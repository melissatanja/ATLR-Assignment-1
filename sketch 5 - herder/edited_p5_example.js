var cx;
var cy;
var cs;
// var cs = 50;
var overcow = false;
var cowhold= false;
var cowinpen = false;
var xOffset = 0.0; 
var yOffset = 0.0; 
// var xspeed = 2;
// var yspeed = 2;
var yspeed;
var xspeed;

var lv = w/5;
var rv = (w/5) * 4;

var w = 800;
var h = 800;

xspeed = 1;
yspeed = 1;

function preload(){
  cowimg = loadImage('assets/cow.png');
}

function setup() {
  createCanvas(w, h);
  cx = random(width/5, (width/5 * 4));
  cy = random(height);
  cs = 50;
  // rectMode(RADIUS);
  strokeWeight(2);
}

function draw() { 
  background(237,34,93);
  
  // Test if the cursor is over the box 
  if (mouseX > cx && mouseX < cx + cs && 
      mouseY > cy && mouseY < cy + cs) {
    overcow= true;  
  } else {
    overcow = false;
  }
  // cows();
  image(cowimg, cx, cy, cs, cs);
  constrain();
  move();
}

// function cows(){
//   cx = random(width/5, (width/5 * 4));
//   cy = random(height);
//   cs = 50;
// }

function mousePressed() {
  if(overcow) { 
    cowhold = true; 
  } else {
    cowhold= false;
  }
  xOffset = mouseX-cx; 
  yOffset = mouseY-cy; 

}

function mouseDragged() {
  if(cowhold) {
    cx = mouseX - xOffset; 
    cy = mouseY - yOffset; 
  }
}

function mouseReleased() {
  cowhold = false;
}

function constrain(){

    if(cx > 0 && cx < lv){
      if(cy > 0 && cy < hrz){
        cowinpen == true;
      }
    } else{
      cowinpen == false;
    }

    if(cowinpen == true){

      cx = constrain(cx, 0, lv);
      cy = constrain(cy, 0, hrz); 

      if(cx < 0 || cx > lv - cs){
        xspeed = -xspeed;
      }
    }

    if(cx < lv || cx > rv - cs){
      
      xspeed = -xspeed;
    
      if(cowinpen == false){
      
        cx = constrain(cx, lv, rv - cs);
      }
    }
  }

function move(){

    cy += yspeed;
    cx += xspeed;

    if(cy > height - cs){
      yspeed = -random(0, 3);
      xspeed = -random(0, 2);
    }
    if(cy < 0){
      yspeed = 2;
      xspeed = 2;
    }
    if(cx > width - cs){
      xspeed = - xspeed;
    }
    if(cx < 0){
      xspeed = - xspeed;
    }
  }