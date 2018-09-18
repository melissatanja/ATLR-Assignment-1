// should I make an array of cows? will that let them move and be interacted with independently?
var pig;
var overpig;
var pigdrag;
var piginpen;
var pigimg;
var oink;
var cow;
var overcow;
var cowdrag;
var cowinpen;
var cowimg;
var moo;

var lv;
var hrz;
var rv;

var px;
var py;
var ps;
var cx;
var cy;
var cs;
var xOffset;
var yOffset;
var cn; 
var cowpic;

var xspeed;
var yspeed;
var pxspeed;
var pyspeed;

var w;
var h;
var cows; 
var pos;

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowimg = loadImage('assets/cow.png');
	pigimg = loadImage('assets/pig.png');
}

function setup(){
	w = 800;
	h = 800;

	// cows = [];
	// showCows();

	lv = w/5;
	rv = (w/5) * 4;
	hrz = h/2;

	xOffset = 0;
	yOffset = 0;

	createCanvas(w, h);

	overpig = false;
	pigdrag = false;
	piginpen = false;

	px = random(lv, rv);
	py = random(h);
	ps = 50;

	overcow = false;
	cowdrag = false;
	cowinpen = false;

	cx = random(w/5, (w/5 * 4));
	cy = random(h);
	cs = 50;

	yspeed = 1;
	xspeed = 1;
	pyspeed = -xspeed;
	pxspeed = -xspeed;

	moo = createAudio('assets/moo.mp3');
	oink = createAudio('assets/oink.mp3');
}

function draw(){
	background(64, 145, 60);

	pens();

	image(cowimg, cx, cy, cs, cs);
	image(pigimg, px, py, ps, ps);
	cmove();
	pmove();
	capture();

	fill(255);
	noStroke();
	textSize(25);
	textAlign(CENTER);
	text("cows", w/10, 50);
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

// function cowpic(pos, img){
// 	pos = p5.Vector;
// 	img = p5.Image;{
// 		this.width = cs;
// 		this.height = cs;
// 	}


// 	image(this.img, this.pos.x, this.pos.y, cs, cs);
// }

// function showCows(){
// 	var cn = 6;
// 	for(var i = 0; i < cn; i++){
// 		pos = createVector(cx, cy);
// 		cows.push(new cowpic(pos, cowimg));
// 	}
// }

		function mouseDragged(){

			if(cowdrag){
				xspeed = 0;
				yspeed = 0;
				cx = mouseX - xOffset;
				cy = mouseY - yOffset;
				loop();
				moo.play();
			}

			if(pigdrag){
				pxspeed = 0;
				pyspeed = 0;
				px = mouseX - xOffset;
				py = mouseY - yOffset;
				loop();
				oink.play();
			}
		}

		function mouseReleased(){
			pigdrag = false;
			cowdrag = false;
			pxspeed = xspeed;
			pyspeed = yspeed;
			xspeed = xspeed + 1;
			yspeed = yspeed + 1;
		}

		function cmove(){

		if(cx > 0 && cx < lv - (cs/2) && cy > 0 && cy < hrz){
				cowinpen = true;
			}
		else{
			cowinpen = false;
		}

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

		if(cowinpen == true){

			cx = constrain(cx, 0, lv);
			cy = constrain(cy, 0, hrz);	

			if(cx < 1 || cx > lv - cs){
				xspeed = -xspeed;
			}

			if(cy > hrz - cs || cy < 0){
				yspeed = -yspeed;
			}
		} else if(cowinpen == false){

			if(cx < lv && cx > lv - (cs/2) || cx > rv - cs){
			
				xspeed = -xspeed;
			
				cx = constrain(cx, lv, rv - cs);
			}
		}
	}

	// function pmove(){

	// 	if(px < w - (ps/2) && px > rv && py > 0 && py < hrz){
	// 			piginpen = true;
	// 		}
	// 	else{
	// 		piginpen = false;
	// 	}

	// 	py += pyspeed;
	// 	px += pxspeed;

	// 	if(py > height - ps){
	// 		pyspeed = -pxspeed;
	// 		pxspeed = -pyspeed;
	// 	}
	// 	if(py < 0){
	// 		pyspeed = -pyspeed;
	// 		pxspeed = -pxspeed;
	// 	}

	// 	if(piginpen == true){

	// 		px = constrain(px, rv, w);
	// 		py = constrain(py, 0, hrz);	

	// 		if(px > w - 1 || px < rv + ps){
	// 			pxspeed = -pxspeed;
	// 		}

	// 		if(py > hrz - (ps/2) || py < 0){
	// 			pyspeed = -pyspeed;
	// 		}
	// 	} else if(piginpen == false){

	// 		if(px > rv || px < rv){
			
	// 			pxspeed = -pxspeed;
			
	// 			px = constrain(px, lv, rv - (ps/2));
	// 		}
	// 	}
	// }

	function pmove(){

		if(px > rv && px < w - ps){
			if(py > 0 && py < hrz - ps){
				piginpen = true;
			}
		}
		else {
			piginpen = false;
		}

		px += pxspeed;
		py += pyspeed;

		if(py > h - ps){
			pyspeed = -pyspeed;
		}

		if(py < 0){
			pyspeed = -pyspeed;
		}

		if(piginpen){
			px = constrain(px, rv, w);
			py = constrain(py, 0, hrz);

			if(px > w - 1){
				pxspeed = -pxspeed;
			}

			if(px < rv){
				pxspeed = -pxspeed;
			}

			if(py > hrz - ps || py < 0){
				pyspeed = -pyspeed;
			}
		}
		else if(piginpen == false){
			if(px > rv - ps || px < lv){
				pxspeed = -pxspeed;

				px = constrain(px, lv, rv - cs);
			}
		}
	}

		function capture(){

		if(mouseX > cx && mouseX < cx + cs && mouseY > cy && mouseY < cy + cs){
				overcow = true;
		}else {
			overcow = false;
		}

		if(mouseX > px && mouseX < px + ps && mouseY > py && mouseY < py + ps){
				overpig = true;
		}else {
			overpig = false;
		}

	}

			function mousePressed(){
			if(overcow){
				cowdrag = true;
				moo.play();
			} 
			else {
				cowdrag = false;
			}

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
// made the cow bounce off the walls

// https://p5js.org/examples/sound-load-and-play-sound.html
// audio

// https://codepen.io/DonKarlssonSan/pen/wgWyWx?editors=1010
// tried to use this to place multiple cow images 