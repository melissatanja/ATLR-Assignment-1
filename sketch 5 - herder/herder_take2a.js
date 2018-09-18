var pig;
var overpig;
var pigdrag;
var piginpen;
var pigimg;
var oink;

var lv;
var hrz;
var rv;

var px;
var py;
var ps;
var xOffset;
var yOffset;

var xspeed;
var yspeed;

var w;
var h;

function preload(){
	pigimg = loadImage('assets/pig.png');
}

function setup(){
	w = 800;
	h = 800;

	lv = w/5;
	rv = (w/5) * 4;
	hrz = h/2;

	xOffset = 0;
	yOffset = 0;

	createCanvas(w, h);

	overpig = false;
	pigdrag = false;
	piginpen = false;

	px = random(w/5, (w/5 * 4));
	py = random(h);
	cs = 50;
	yspeed = 1;
	xspeed = 1;

	oink = createAudio('assets/oink.mp3');
}

function draw(){
	background(64, 145, 60);

	pens();

	image(pigimg, px, py, ps, ps);
	move();
	capture();

	fill(255);
	noStroke();
	textSize(25);
	textAlign(CENTER);
	text("pigs", (w/10)* 9, 50);
}

function pens(){
	stroke(153, 102, 51);
	strokeWeight(20);

	line(lv, 0, lv, hrz);
	line(0, hrz, lv, hrz);
	line(rv, 0, rv, hrz);
	line(rv, hrz, w, hrz);
	line(lv, hrz, lv, h);
	line(0, hrz, lv, hrz);
	line(rv, hrz, rv, w);
	line(rv, hrz, rv, h);
	line(0, 0, 0, h);
	line(0, h, w, h);
	line(w, h, w, 0);
	line(0, 0, w, 0);
}

		function mouseDragged(){

			if(pigdrag){
				xspeed = 0;
				yspeed = 0;
				px = mouseX - xOffset;
				py = mouseY - yOffset;
				loop();
				moo.play();
			}
		}

		function mouseReleased(){
			pigdrag = false;
			xspeed = xspeed + 1;
			yspeed = yspeed + 1;
		}

		function move(){

		if(px > w && px > rv + (ps/2) && py > 0 && py < hrz){
				piginpen = true;
			}
		else{
			piginpen = false;
		}

		py += yspeed;
		px += xspeed;

		if(py > height - ps){
			yspeed = -random(0, 3);
			xspeed = -random(0, 2);
		}
		if(py < 0){
			yspeed = 2;
			xspeed = 2;
		}

		if(piginpen == true){

			px = constrain(px, rv, w);
			py = constrain(py, 0, hrz);	

			if(px > w - 1 || px < rv - ps){
				xspeed = -xspeed;
			}

			if(py > hrz - ps || py < 0){
				yspeed = -yspeed;
			}
		} else if(piginpen == false){

			if(px < lv || px > rv - ps){
			
				xspeed = -xspeed;
			
				px = constrain(px, lv, rv - ps);
			}
		}
	}

		function capture(){

		if(mouseX > px && mouseX < px + ps && mouseY > py && mouseY < py + ps){
				overpig = true;
		}else {
			overpig = false;
		}

	}

			function mousePressed(){
			if(overpig){
				pigdrag = true;
				oink.play();
			} 
			else {
				pigdrag = false;
			}
		}


// https://p5js.org/examples/objects-objects.html
// helped format the function (class)

// https://www.youtube.com/watch?v=LO3Awjn_gyU&t=0s&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
// made the pig bounce off the walls

// https://p5js.org/examples/sound-load-and-play-sound.html
// audio

// https://codepen.io/DonKarlssonSan/pen/wgWyWx?editors=1010
// tried to use this to place multiple pig images 