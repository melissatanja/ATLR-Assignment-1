// var cowimg;
// var moo;
// var cowpic;
// var cownoise;

// should I make an array of cows? will that let them move and be interacted with independently?
var cow;
var cartouch;
var cowinpen;
var cowimg;

var tlv;
var tlh;
var trv;
var trh;
var blv;
var blh;
var brv;
var brh;

var cx;
var cy;
var cs;

var speed;

var w;
var h;

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowimg = loadImage('assets/cow.png');
	// cownoise = createAudio
}

function setup(){
	// cx = random(w/5, (w/5)*4);
	// y = random(h/5, (h/5)*4);
	w = 800;
	h = 800;

	// var cow = {
	// 	cpic: image(cowimg, cx, y, 15, 15),
	// 	noise: moo,
	// 	size: 15,
	// 	move: random(-5, 5),
	// 	cx: cx,
	// 	y: y,
	// 	ccx: ccx,
	// 	cy: cy
	// 	}

	// cowpic = image(cowimg, cx, y, cow.size, cow.size);

	createCanvas(w, h);

	cow = new cows();

	// moo = play
}

function draw(){
	background(255);

	pens();

	cow.display();
	cow.move();

	// for(var i = 0; i < 5; i++){
	// 	cow();
	// }
	// noLoop();

	// cplacement();

	// the img (cx,y) is the top left corner
	if(mouseX < (cx + cs) && mouseX > cx){
		if(mouseY < (cy + cs) && mouseY > cy){
			//could change if to while here, and then touch = true and mousecx and Y are cow cx and y
			if(mouseIsPressed){
				cowtouch == true;
			}
		}
	}

	if(cx > 0 && cx < tlv){
		if(cy > 0 && cy < tlh){
			cowinpen == true;
		}
	}

}

// //maybe do while(mouseIsPressed) instead of a function
// function mousePressed(){
// 	mousecx + (cow.s/2) = cow.cx;
// 	mouseY + (cow.y/2) = cow.y;
// }

// //check that this doesnt permanently make them the same
// function mouseReleased(){
// 	mousecx = cow.cx;
// 	mouseY = cow.y;
// }

// function cows(){
// 	cs = 50;
// 	cx = random(w/5, (w/5)*4);
// 	cy = random(h/5, (h/5)*4);
// 	cpic = image(cowimg, cx, cy, cs, cs);
// 	cpic = image(cowimg, cx, cy, cs, cs);
// 	cpic = image(cowimg, cx, cy, cs, cs);
// 	cpic = image(cowimg, cx, cy, cs, cs);
// 	cpic = image(cowimg, cx, cy, cs, cs);
// }

// function cmove(){
// 		cx = cx + ((random(-5, 5)) * (frameCount/2));
// 		cy = cy + ((random(-5, 5))* (frameCount/2));
// 	}

function cows(){
	this.cx = random(w/5, (w/5 * 4));
	this.cy = random(h);
	this.cs = 50;
	this.speed = 5;

	// (random(-5, 5) * (frameCount/2));

	this.move = function(){
		this.cx += random(-this.speed, this.speed);
		this.cy += random(-this.speed, this.speed);
	};

	this.display = function(){
		image(cowimg, this.cx, this.cy, this.cs, this.cs);
	}
}

// function mouseClicked(){
// 	cow.moo;
// }

function cplacement(){
	var cowtouch = false;
	var cowinpen = false;

	// if(cowtouch == false){
	// 	cx = cx;
	// 	cy = cy;
	// }

	// cow is in cow pen
	if(cowinpen == false){
		cx = constrain(cx, 0, tlv);
		cy = constrain(cy, 0, tlh);
	} else if(cowinpen == true){
		cx = constrain(cx, tlv, rlv);
	}

	if(cy < cs || cy > h - cs){ // off the screen
		cmove() = -cmove();
	}
}

// function scatter(){
// 	cow.ccx += (cow.move * (frameCount/2);
// 	cow.cy += (cow.move * (frameCount/2);
// }

function pens(){
	var tlv = w/5;
	var trv = (w/5)*4;
	var brv = (w/5)*4;
	var blv = w/5;
	var hrz = h/2;

	stroke(153, 102, 51);
	strokeWeight(20);
	line(tlv, 0, tlv, hrz);
	line(0, hrz, tlv, hrz);
	line(trv, 0, trv, hrz);
	line(trv, hrz, w, hrz);
	line(blv, hrz, blv, h);
	line(0, hrz, blv, hrz);
	line(brv, hrz, brv, w);
	line(brv, hrz, brv, h);
	line(0, 0, 0, h);
	line(0, h, w, h);
	line(w, h, w, 0);
	line(0, 0, w, 0);
}

// var pig = {
// 	face: pigpic, 
// 	noise: oink
// }

// var sheep = {
// 	face: sheeppic,
// 	noise: baa
// }

// var rooster = {
// 	face: roosterpic,
// 	noise: doodledoo
// }