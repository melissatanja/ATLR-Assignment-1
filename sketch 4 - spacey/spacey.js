var textures = [i1];
var t = random(textures[i]);

var i1;

function preload(){
	i1 = loadImage('assets/rock1.jpg');
}

// textures = append(textures, i1);

function setup(){
	createCanvas(800, 800, WEBGL);
}

function draw(){
	background(0, 37, 60);

	var dirX = (mouseX / width - 0.5) *2;
	var dirY = (mouseY / height - 0.5) *2;

	directionalLight(255, 247, 221, 0, 0);

	planet(50, 0, t, 200, 0, 0);
	planet(75, 1, t, -200, 0, 0);

	r+=0.005;

	// translate(200, 0, 0);
	// ambientMaterial(24, 156, 136);
	// rotateY(r);
	// noStroke();
	// // texture(img);
	// sphere(50);
}

function planet(s, r, t, x, y, z){
	translate(x, y, z);
	sphere(s);
	rotateY(r); 
	texture(t);
}

// class planets {
// 	size, rotation, texture, xpos, ypos, zpos;
// 	planets(s, r, t, x, y, z){
// 		size = s;
// 		rotation = r;
// 		texture = t;
// 		xpos = x;
// 		ypos = y;
// 		zpos = z;
// 	}

// }