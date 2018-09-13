var cow = loadImage
var moo = createAudio

var w = 800;
var h = 800;
var x = random(w);
var y = random(h);

function setup(){
	createCanvas(w, h);
	cnoise = createAudio();
}

function draw(){
	for(var i = 0; i < 5, i++){
		cow(i);
	}
}

// function cow(){
// 	fill(255);
// 	stroke(0);
// 	strokeWeight(1);
// 	ellipse(x, y, 50, 50);
// 	ellipse(x, y + 10, 5, 10);
// }

var cow = {
	// sface: (50, 50),
	// snose: (10, 30),
	// seye: (10, 10),
	// spupil: (5, 5),
	// sear: (15, 5),
	// lface: (x, y),
	// lnose: (),

	// noise: cnoise

	face: cow
	noise: moo
}