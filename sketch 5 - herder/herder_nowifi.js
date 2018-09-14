// var cowimg;
// var moo;
// var cowpic;
// var cownoise;

// should I make an array of cows? will that let them move and be interacted with independently?
var cow;

var tlv;
var tlh;
var trv;
var trh;
var blv;
var blh;
var brv;
var brh;

var x;
var y;
var xc;
var yc;

var w;
var h;

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowimg = loadImage('assets/cow.png');
	// cownoise = createAudio
}

function setup(){
	// x = random(w/5, (w/5)*4);
	// y = random(h/5, (h/5)*4);
	w = 800;
	h = 800;

	// var cow = {
	// 	cpic: image(cowimg, x, y, 15, 15),
	// 	noise: moo,
	// 	size: 15,
	// 	move: random(-5, 5),
	// 	x: x,
	// 	y: y,
	// 	xc: xc,
	// 	yc: yc
	// 	}

	// cowpic = image(cowimg, x, y, cow.size, cow.size);
	var cowtouch = false;
	var cowinpen = false;

	createCanvas(w, h);
	// moo = play
}

function draw(){

	pens();

	for(var i = 0; i < 5; i++){
		cow();
	}

	// the img (x,y) is the top left corner
	if(mouseX < (cow.x + cow.s) && mouseX > cow.x){
		if(mouseY < (cow.y + cow.s) && mouseY > cow.y){
			//could change if to while here, and then touch = true and mouseX and Y are cow x and y
			if(mouseIsPressed){
				cowtouch == true;
			}
		}
	}

	if(cow.x > 0 && cow.x < tlv){
		if(cow.y > 0 && cow.y < tlh){
			cowinpen == true;
		}
	}

}

// //maybe do while(mouseIsPressed) instead of a function
// function mousePressed(){
// 	mouseX + (cow.s/2) = cow.x;
// 	mouseY + (cow.y/2) = cow.y;
// }

// //check that this doesnt permanently make them the same
// function mouseReleased(){
// 	mouseX = cow.x;
// 	mouseY = cow.y;
// }

function cow(){
	cpic = image(cowimg, x, y, 15, 15);
	// noise = moo;
	size = 15;

	function move(){
		cow.xc += ((random(-5, 5)) * (frameCount/2));
		cow.yc += ((random(-5, 5))* (frameCount/2));
	}
	x = random(w/5, (w/5)*4);
	y = random(h/5, (h/5)*4);
}

function mouseClicked(){
	cow.moo;
}

function cplacement(){

	if(cowtouch){
		xc = cow.x;
		yc = cow.y;
	}

	// cow is in cow pen
	if(cowinpen){
		xc = constrain(cow.x, 0, tlv);
		yc = constrain(cow.y, 0, tlh);
	} else if(!cowinpen){
		xc = constrain(cow.x, tlv, rlv);
	}

	if(cow.y < cow.s || cow.y > h - cow.s){ // off the screen
		cow.move = -cow.move;
	}
}

// function scatter(){
// 	cow.xc += (cow.move * (frameCount/2);
// 	cow.yc += (cow.move * (frameCount/2);
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