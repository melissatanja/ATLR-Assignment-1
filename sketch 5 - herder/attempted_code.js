//  SETUP FUNCTION

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

// DRAW FUNCTION

		// for(var i = 0; i < 5; i++){
		// 	cow();
		// }
		// noLoop();

		// cplacement();

		// the img (cx,y) is the top left corner
		// if(mouseX < (cx + cs) && mouseX > cx){
		// 	if(mouseY < (cy + cs) && mouseY > cy){
		// 		//could change if to while here, and then touch = true and mousecx and Y are cow cx and y
		// 		if(mouseIsPressed){
		// 			cowtouch == true;
		// 		}
		// 	}
		// }else(cowtouch == false);

//MOVE FUNCTION

		// this.cx ++;
		// this.cy += this.speed;

		// if(this.cy > 0 && this.cy < h){
		// 	this.cy += this.speed;
		// } 
		// else if(this.cy < this.cs || this.cy > h){ // off the screen
		// 	this.cy -= this.speed;
		// }

		// if(cowinpen == false){
		// 	this.cx = constrain(this.cx, 0, lv);
		// 	this.cy = constrain(this.cy, 0, hrz);
		// }
		// if(cowinpen == true){
		// 	this.cx = constrain(this.cx, lv, rv);
		// }

		// this.cx += (random(-this.speed, this.speed) * millis()/1000);
		// this.cy += (random(-this.speed, this.speed) * millis()/1000);

// COW FUNCTION

		// this.cplacement = function(){
		// // if(cowtouch == false){
		// // 	cx = cx;
		// // 	cy = cy;
		// // }

		// // cow is in cow pen
		// if(cowinpen == false){
		// 	this.cx = constrain(this.cx, 0, tlv);
		// 	this.cy = constrain(this.cy, 0, tlh);
		// } else if(cowinpen == true){
		// 	this.cx = constrain(this.cx, tlv, rlv);
		// }

		// if(this.cy < this.cs || this.cy > h - this.cs){ // off the screen
		// 	this.move = -this.move;
		// }

// OTHER FUNCTIONS

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