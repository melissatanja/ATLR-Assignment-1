var cowpic = loadImage
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

var cow = {
	face: cowpic,
	noise: moo
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