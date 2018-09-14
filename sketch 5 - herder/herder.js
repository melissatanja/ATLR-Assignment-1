var cowpic;
var moo = createAudio

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

//find a way to use a boolean, if false: constrain animals, if mousepressed on animal: true: don't constrain

function preload(){
	cowpic = loadImage('assets/cow.png');
}

function setup(){
	var w = 800;
	var h = 800;

	createCanvas(w, h);
	image(cowpic, x, y, cow.size, cow.size);
}

function draw(){
	x = random(w/5, (w/5)*4);
	y = random(h/5, (h/5)*4);

	pens();

	for(var i = 0; i < 5, i++){
		cow(i);
	}

}

function scatter(){
	cow.x += (cow.move * (frameCount/2);
	cow.y += (cow.move * (frameCount/2);
}

function pens(){
	var tlv = w/5;
	var tlh = h/5;
	var trv = (w/5)*4;
	var trh = h/5;
	var blv = w/5;
	var blh = (h/5)*4;
	var brv = (w/5)*4;
	var brh = (h/5)*4;

	stroke(153, 102, 51);
	strokeWeight(20);
	line(tlv, 0, tlv, tlh);
	line(0, tlh, tlv, tlh);
}

var cow = {
	face: cowpic,
	noise: moo,
	size: 15,
	move: random(-5, 5),
	xpos: x,
	ypos: y
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