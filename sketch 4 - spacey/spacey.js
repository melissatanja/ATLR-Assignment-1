// var textures;
// //var t = random(textures[i]);

// var t; //= random(0, textures.length);
// //textures[t];

var i1;

// function preload(){
// 	i1 = loadImage('assets/rock1.jpg');
// 	textures = i1;
// }

// textures = append(textures, i1);

var r = 0;

function setup(){
	createCanvas(800, 800, WEBGL);
}

function draw(){
	background(0, 37, 60);

	var dirX = (mouseX / width - 0.5) *2;
	var dirY = (mouseY / height - 0.5) *2;

	pointLight(255, 247, 221, 0, 0, 0);
	pointLight(255, 247, 221, 0, 0, 0);//double the power

	//noStroke();

	
	
	planet(50, r, 100, 100, 100);
	planet(75, -100*r, -200, 0, 0);

	

	// translate(200, 0, 0);
	// ambientMaterial(24, 156, 136);
	// rotateY(r);
	// noStroke();
	// // texture(img);
	// sphere(50);
	r+=0.005;
}

// function planet(s, r, t, x, y, z){
// 	translate(x, y, z);
// 	sphere(s);
// 	rotateY(); 
	//texture(textures[t]);
// }

function planet(s, r, x, y, z){
	push();
	translate(x,y,z);
	rotateY(r);
	sphere(s); 
	translate(-x, -y, -z);
	pop();
	
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