// should I make an array of cows? will that let them move and be interacted with independently?
var cow;
var overcow;
var cowdrag;
var cowinpen;
var cowimg;
var moo;

var lv;
var hrz;
var rv;

var cx;
var cy;
var cs;
var xOffset;
var yOffset;

var xspeed;
var yspeed;

var w;
var h;

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowimg = loadImage('assets/cow.png');
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

	cow1 = new cows();
	cow2 = new cows();
	cow3 = new cows();

	overcow = false;
	cowdrag = false;
	cowinpen = false;

	moo = createAudio('assets/moo.mp3');
}

function draw(){
	background(64, 145, 60);

	pens();

	cow1.display();
	cow1.constrain();
	cow1.move();
	cow1.capture();

	cow2.display();
	cow2.constrain();
	cow2.move();
	cow2.capture();

	cow3.display();
	cow3.constrain();
	cow3.move();
	cow3.capture();
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
	this.yspeed = 1;
	this.xspeed = 1;

	this.move = function(){

		this.cy += this.yspeed;
		this.cx += this.xspeed;

		if(this.cy > height - this.cs){
			this.yspeed = -random(0, 3);
			this.xspeed = -random(0, 2);
		}
		if(this.cy < 0){
			this.yspeed = 2;
			this.xspeed = 2;
		}
		if(this.cx > width - this.cs){
			this.xspeed = - this.xspeed;
		}
		if(this.cx < 0){
			this.xspeed = - this.xspeed;
		}

	}

	this.constrain = function(){

		if(this.cx > 0 && this.cx < lv){
			if(this.cy > 0 && this.cy < hrz){
				cowinpen == true;
			}
		} else{
			cowinpen == false;
		}

		if(cowinpen == true){

			this.cx = constrain(this.cx, 0, lv);
			this.cy = constrain(this.cy, 0, hrz);	

			if(this.cx < 0 || this.cx > lv - this.cs){
				this.xspeed = -this.xspeed;
			}
		}

		if(this.cx < lv || this.cx > rv - this.cs){
			
			this.xspeed = -this.xspeed;
		
			if(cowinpen == false){
			
				this.cx = constrain(this.cx, lv, rv - this.cs);
			}
		}
	}

	this.capture = function (){

		if(mouseX > this.cx && mouseX < this.cx + this.cs && mouseY > this.cy && mouseY < this.cy + this.cs){
				overcow = true;
		}else {
			overcow = false;
		}

		// if(overcow){
		// 	background(0);
		// }

		if(cowdrag){
			this.cx = mouseX + xOffset;
			this.cy = mouseY + yOffset;
		}

		// function mousePressed(){
		if(mouseIsPressed){
			if(overcow){
				cowdrag = true;
			} 
			else {
				cowdrag = false;
			}
			xOffset = mouseX - this.cx;
			yOffset = mouseY - this.cy;

			moo.play();
		}

		// function mouseDragged(){

		// 	if(cowdrag){
		// 		this.cx = mouseX - xOffset;
		// 		this.cy = mouseY - yOffset;
		// 	}
		// }

		// function mouseReleased(){
		// 	cowdrag = false;
		// }

	}

		// 	xOffset = mouseX - (this.cx + (this.cs / 2));
		// 	yOffset = mouseY - (this.cy + (this.cs / 2));

		// function mouseDragged(){
		// 	if(cowdrag == true){
		// 		this.cx = mouseX;
		// 		this.cy = mouseY;
		// 	}
		// }

	// 	function mouseReleased(){
	// 		cowdrag = false;
	// 	}
	// }

	// this.capture = function(){

	// 	if(mouseX < (this.cx + this.cs) && mouseX > this.cx){
	// 		if(mouseY < (this.cy + this.cs) && mouseY > this.cy){
	// 			//could change if to while here, and then touch = true and mousecx and Y are cow cx and y
	// 			while(mouseIsPressed){
	// 				cowtouch == true;
	// 			}
	// 		}
	// 	}else{
	// 		cowtouch == false;
	// 	}

	// 	while(cowtouch == true){
	// 		this.cx = mouseX + (this.cs/2);
	// 		this.cy = mouseY + (this.cs/2);
	// 	}
	// }

	this.display = function(){

		image(cowimg, this.cx, this.cy, this.cs, this.cs);
	}
}

		function mouseDragged(){

			if(cowdrag){
				cx = mouseX - xOffset;
				cy = mouseY - yOffset;
			}
		}

		function mouseReleased(){
			cowdrag = false;
		}


// function mouseClicked(){
// 	cow.moo;
// }


// https://p5js.org/examples/objects-objects.html
// helped format the function (class)

// https://www.youtube.com/watch?v=LO3Awjn_gyU&t=0s&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
// made the cow bounce off the walls

// https://processing.org/reference/this.html
// explains what "this." means

// the knowledge that saved this sketch:
// x = y means "y's value is now called x", whereas x == y means "is x's value the same as y's value?"
// SO if I want some conditions to mean a boolean is true instead of false, I CAN'T write x == true
// I have to assign the boolean the value "true"
// then I can say if the boolean is true, do whatever
// boolean = true ---> this boolean is now true 
// boolean == true ---> check if the boolean is true 