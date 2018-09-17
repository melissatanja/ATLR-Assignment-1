// should I make an array of cows? will that let them move and be interacted with independently?
var cow;
var cartouch;
var cowinpen;
var cowimg;

var lv;
var hrz;
var rv;

var cx;
var cy;
var cs;
var concx;
var concy;

var xspeed;
var yspeed;

var w;
var h;

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowimg = loadImage('assets/cow.png');
	// cownoise = createAudio
}

function setup(){
	w = 800;
	h = 800;

	lv = w/5;
	rv = (w/5) * 4;
	hrz = h/2;

	createCanvas(w, h);

	var cowtouch = false;
	var cowinpen = false;

	cow = new cows();

	// moo = play
}

function draw(){
	background(255);

	pens();

	cow.display();
	cow.move();

	if(cx > 0 && cx < lv){
		if(cy > 0 && cy < hrz){
			cowinpen == true;
		}
	} else{
		cowinpen == false;
	}

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

function cows(){
	this.cx = random(w/5, (w/5 * 4));
	this.cy = random(h);
	this.cs = 50;
	this.yspeed = 2;
	this.xspeed = 5;

	this.move = function(){

		this.cy += this.yspeed;
		this.cx += this.xspeed;

		if(this.cy > height - this.cs){
			this.yspeed = -random(0, 6);
			this.xspeed = -random(4, 8);
		}
		if(this.cy < 0){
			this.yspeed = 2;
			this.xspeed = 3;
		}
		if(this.cx > width - this.cs){
			this.xspeed = - this.xspeed;
		}
		if(this.cx < 0){
			this.xspeed = - this.xspeed;
		}

		if(cx > 0 && cx < lv){
			concx = constrain(this.cx, 0, lv);
		}

		if(cy > 0 && cy < hrz){
			concy = constrain(this.cy, 0, hrz);
		}
	}

	this.display = function(){
		image(cowimg, this.cx, this.cy, this.cs, this.cs);
	}
}

// function mouseClicked(){
// 	cow.moo;
// }

// function cplacement(){
// 	var cowtouch = false;
// 	var cowinpen = false;

// 	// if(cowtouch == false){
// 	// 	cx = cx;
// 	// 	cy = cy;
// 	// }

// 	// cow is in cow pen
// 	if(cowinpen == false){
// 		cx = constrain(cx, 0, tlv);
// 		cy = constrain(cy, 0, tlh);
// 	} else if(cowinpen == true){
// 		cx = constrain(cx, tlv, rlv);
// 	}

// 	if(cy < cs || cy > h - cs){ // off the screen
// 		cmove() = -cmove();
// 	}
// }

// function scatter(){
// 	cow.ccx += (cow.move * (frameCount/2);
// 	cow.cy += (cow.move * (frameCount/2);
// }

// https://p5js.org/examples/objects-objects.html
// helped format the function (class)

// https://www.youtube.com/watch?v=LO3Awjn_gyU&t=0s&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
// made the cow bounce off the walls