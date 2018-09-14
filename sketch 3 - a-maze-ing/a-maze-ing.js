var A = 0;
var B = 100;
var C = 200;
var D = 300;
var E = 400; 
var F = 500;
var u = 25;
var w = 50;

var wi = 600;
var h = 600;
var finishLine;

boolean(finishLine) = false;

function setup(){
	createCanvas(wi, h);
	background(0);
}

function draw(){

	push();
	scale(0.95, 0.95);
	translate(62.5, 62.5);
	maze();
	outline();
	pop();

	fill(255, 0, 0);
	noStroke();
	ellipse(mouseX, mouseY, 5, 5);

	fill(255);
	textSize(15);
	text("FINISH", 480, 550);
	text("START", 170, 50);

	if(mouseX > 490 && mouseX < 510 && mouseY >= 525 && mouseY < 550){
		finishLine = true;
	}else{
		finishLine = false;
	}

	push();
	finish();
	pop();

	// console.log(mouseX, mouseY);
	// guides();
}

function finish(){
	if(finishLine == true){
		fill(random(50), random(150), random(255), 150);
		stroke(255);
		strokeWeight(5);
		rectMode(CENTER);
		rect(wi/2, h/2, 580, 580);
		textSize(75);
		fill(random(100), random(100), random(255));
		textAlign(CENTER, CENTER);
		text("Congrats! You've completed the a-maze-ing maze!", wi/2, h/2, 580, 580);
		noLoop();
	}
}

function mouseClicked(){
	background(0);
}

function maze(){
	stroke(100);
	strokeWeight(2);
	line(A, u, u, u);
	line(u, u, u, B - u);
	line(A, B, w, B);
	line(A, B + u, u, B + u);
	line(u, B + u, u, B + w);
	line(A, C - u, w, C - u);
	line(u, C - u, u, C);
	line(u, C, w, C);
	line(w, C, w, C + u);
	line(w, C + u, B + u, C + u);
	line(u, C + u, u, D - u);
	line(u, D - u, A, D - u);
	line(u, C + w, B - u, C + w);
	line(B - u, C + w, B - u, C + u);
	line(A, D, w, D);
	line(w, D - u, w, D + w);
	line(w, D + w, u, D + w);
	line(u, D + u, u, E - u);
	line(A, E, u, E);
	line(A, F - u, u, F - u);
	line(u, F - u, u, E + u);
	line(w, D - u, B - u, D - u);
	line(B - u, D - u, B - u, D);
	line(w, F, w, E + u);
	line(w, E - u, w, E);
	line(w, E, B - u, E);
	line(B - u, D + w, B - u, E + w);
	line(B - u, E + w, B, E + w);
	line(B, E + w, B, F - u);
	line(B - u, F - u, B + w, F - u);
	line(B - u, A, B - u, u);
	line(B - u, u, w, u);
	line(w, u, w, B - u);
	line(B, u, B, w);
	line(B, w, B - u, w);
	line(B - u, w, B - u, B);
	line(B - u, B - u, B + w, B - u);
	line(B + u, B - u, B + u, w);
	line(B + u, w, C, w);
	line(C - u, w, C - u, u);
	line(C - u, u, B + u, u);
	line(B + w, u, B + w, A);
	line(C + w, A, C + w, w);
	line(C, u, D, u);
	line(C + u, u, C + u, w);
	line(D, u, D, w);
	line(D - u, w, D + w, w);
	line(D + w, w, D + w, u);
	line(E - u, A, E - u, w);
	line(E, A, E, u);
	line(E, u, E + u, u);
	line(E + w, u, E + w, w);
	line(E + w, w, E, w);
	line(E, w, E, B - u);
	line(E, B - u, D + w, B - u);
	line(D + w, B - u, D + w, C);
	line(D + w, C, D + u, C);
	line(D + u, C, D + u, E);
	line(D + w, B + w, F - u, B + w);
	line(D + w, B, E - u, B);
	line(E - u, B, E - u, B + u);
	line(E, B, E, C + w);
	line(D + u, C + u, E - u, C + u);
	line(E - u, C + u, E - u, C - u);
	line(E, B, E + u, B);
	line(E + u, B + u, E + u, B - u);
	line(E + u, B - u, F - u, B - u);
	line(F - u, B - u, F - u, u);
	line(E + w, B - u, E + w, B);
	line(F - u, B, F - u, B + u);
	line(E + w, B + u, F, B + u);
	line(E + w, B + w, E + w, C - u);
	line(E + w, C - u, E + u, C - u);
	line(F - u, C - u, F - u, C);
	line(F - u, C, F, C);
	line(F, D - u, F - u, D - u);
	line(F - u, D - u, F - u, C + u);
	line(F - u, C + u, E + u, C + u);
	line(E + u, C + u, E + u, C);
	line(E + u, C, E, C);
	line(E, C + w, E + u, C + w);
	line(E + u, C + w, E + u, D - u);
	line(E + u, D - u, E, D - u);
	line(E, D - u, E, D + u);
	line(E, D, E + u, D);
	line(E + w, C + w, E + w, D + u);
	line(E + w, D + u, E + u, D + u);
	line(E + u, D + u, E + u, E - u);
	line(E + u, E - u, E + w, E - u);
	line(E + w, E - u, E + w, E + u);
	line(E + w, E + u, E + u, E + u);
	line(E + u, E , E + u, E + w);
	line(E + u, E + w, D, E + w);
	line(F, D + u, F - u, D + u);
	line(F - u, D + u, F - u, D + w);
	line(F - u, D + w, F - w, D + w);
	line(E + u, D + w, E, D + w);
	line(F, E, F - u, E);
	line(F - u, E, F - u, E + w);
	line(F - u, E + w, F - w, E + w);
	line(F - w, E + w, F - w, F - u);
	line(F - w, F - u, E, F - u);
	line(F, F - u, F - u, F - u);
	line(E, E + w, E, E + u);
	line(E - u, F, E - u, F - w);
	line(D, E + w, D, F - u);
	line(D, F - u, D + w, F - u);
	line(C + w, F, C + w, F - u);
	line(C + w, F - u, D - u, F - u);
	line(D - u, F - u, D - u, F - w);
	line(D + u, E + w, D + u, E + u);
	line(C, F - u, C + u, F - u);
	line(C + u, F - u, C + u, F - w);
	line(C + u, F - w, C + w, F - w);
	line(C + w, F - w, C + w, E + u);
	line(C + w, E + u, D + w, E + u);
	line(D + w, E + u, D + w, E - u);
	line(C - u, F, C - u, F - u);
	line(C, F - w, C, E + u);
	line(C, E + u, B + w, E + u);
	line(C - u, E + u, C - u, E + w);
	line(C - u, E + w, B + u, E + w);
	line(B + u, E + w, B + u, E + u);
	line(B + u, E + u, B, E + u);
	line(B, E + u, B, E - u);
	line(B, E - u, B + u, E - u);
	line(B + u, E - u, B + u, E - w);
	line(B + u, E - w, B + w, E - w);
	line(B + w, E - w, B + w, E);
	line(B + u, E, C + u, E);
	line(C + u, E, C + u, E + u);
	line(C, E, C, E - u);
	line(C, E - u, C + u, E - u);
	line(C + u, E - u, C + u, E - w);
	line(C + u, E - w, C + w, E - w);
	line(C + w, D + u, C + w, E - u);
	line(C + w, E - u, D, E - u);
	line(D, E - u, D, E - w);
	line(D, E - w, D + u, E - w);
	line(D - u, E - u, D - u, E);
	line(D - w, E, D, E);
	line(D + w, E - u, E - u, E - u);
	line(E - u, E - u, E - u, E);
	line(E - u, E, E, E);
	line(E, E, E, E - u);
	line(D - u, D + u, E - u, D + u);
	line(D - u, D + w, D - u, D + u);
	line(E - u, D + w, E - u, D + u);
	line(D, D - u, D, D);
	line(D, D, E - u, D);
	line(E - u, D, E - u, D - w);
	line(E - u, D - w, E + u, D - w);
	line(E + u, D - w, E + u, D - u);
	line(E + u, D - u, E, D - u);
	line(E, D - u, E, D + u);
	line(E, D, E + u, D);
	line(D + u, C + w, D + w, C + w);
	line(D + w, C + w, D + w, D - u);
	line(B + w, B - u, B + w, B);
	line(C - u, B, B + u, B);
	line(B + u, B, B + u, B + u);
	line(B + u, B + u, B - w, B + u);
	line(B, B + u, B, B);
	line(B - w, B + u, B - w, B + w);
	line(B - w, B + w, B - u, B + w);
	line(B - u, B + w, B - u, C - u);
	line(B, D - u, B, C - u);
	line(B, C - u, B + w, C - u);
	line(B, C, B - u, C);
	line(B + u, C, B + w, C);
	line(B + w, C, B + w, B + u);
	line(B + w, B + u, C - u, B + u);
	line(B + w, B + w, B, B + w);
	line(C - u, B - u, C + u, B - u);
	line(C, B - u, C, C);
	line(C, C, C + u, C);
	line(C, C - u, C - u, C - u);
	line(C - u, C - u, C - u, D - u);
	line(C, B + w, C - u, B + w);
	line(C - u, C + u, C, C + u);
	line(C, C + u, C, C + w);
	line(C - u, D - u, C + w, D - u);
	line(C - w, C + u, C - w, D - u);
	line(C - w, C + w, B + u, C + w);
	line(C - w, D - u, B + u, D - u);
	line(B - u, D + w, B, D + w);
	line(B, D + w, B, D);
	line(B, D, B + u, D);
	line(B + u, D, B + u, D + u);
	line(B + u, D + u, C + u, D + u);
	line(C - u, D + u, C - u, E - u);
	line(C, D + u, C, D + w);
	line(B + w, D, C, D);
	line(C, D, C, D - u);
	line(C + u, D + u, C + u, D);
	line(C + u, D, D - u, D);
	line(D - w, D, D - w, D - u);
	line(D - u, D, D - u, D - w);
	line(D, D - w, C + u, D - w);
	line(C + u, D - w, C + u, C + u);
	line(D, C + w, D, C - u);
	line(D, C - u, D + u, C - u);
	line(D + u, C - u, D + u, B);
	line(D + u, B, D - u, B);
	line(D, B, D, B - u);
	line(D - u, B, D - u, B + w);
	line(D - u, B + u, D, B + u);
	line(D + u, B + w, D, B + w);
	line(D - u, B + w, D - w, B + w);
	line(D - u, w, D - u, B - u);
	line(D - u, B - u, D - w, B - u);
	line(D - w, B - u, D - w, B + u);
	line(D - w, B + u, C + u, B + u);
	line(C + u, B + u, C + u, B);
	line(C + u, B + w, C + u, C - u);
	line(C + u, C - u, D - u, C - u);
	line(D - w, C - u, D - w, C + u);
	line(D - w, C, D - u, C);
	line(D - u, C, D - u, C + u);
}

function outline(){
	stroke(100);
	strokeWeight(2);
	line(A, A, A, F);
	line(A, F, F - w, F);
	line(F - u, F, F, F);
	line(F, F, F, A);
	line(F, A, B + w, A);
	line(B + u, A, A, A);
}

// function guides(){
// 	textSize(20);
// 	fill(255, 0, 0);
// 	translate(0, 20);
// 	text("A", 0, 0);
// 	text("B", 100, 0);
// 	text("C", 200, 0);
// 	text("D", 300, 0);
// 	text("E", 400, 0);
// 	text("F", 490, 0);
// 	translate(0, -20);
// 	text("B", 0, 100);
// 	text("C", 0, 200);
// 	text("D", 0, 300);
// 	text("E", 0, 400);
// 	text("F", 0, 490);
// }



// https://p5js.org/reference/#/p5/scale
// help scaling down my maze

// https://processing.org/examples/truefalse.html
// help making the boolean

// https://processing.org/reference/text_.html
// help formatting the finish sign