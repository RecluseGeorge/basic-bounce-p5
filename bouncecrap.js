var blocks = new Array();
var points = 0;
var length = window.innerWidth;
var meow = window.innerWidth;

function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	background(0);
	append(blocks,new Blockade(meow));
}

var mini = 340;
var maxi = 900;
function draw(){
	background(0);
	var ball = new Ball(bx,by)
	ball.show();
	ball.gravity();
	for(var i = 0;i <= blocks.length-1;i++){
		if(blocks[i].y < 0){
			pop(blocks,blocks[i]);
		}
		else if(blocks[i].y > 0){
			blocks[i].show();
		}
	}
	new Ground(0,600,window.innerHeight-600).show();
	meow = meow + random(mini,maxi);
	append(blocks,new Blockade(meow));
	fill("yellow");
	text("Points : "+points,90,200);
	fill("white");
}

bx = 90;
by = 580;

function Ball(x,y){
	bx = x;
	by = y;
	this.show = function(){
		ellipse(bx,by,40,40)
	}
	this.gravity = function(){
		if(by >= 580){by = 580}
		else{by = by + 4;}
	}
}

blockspeed = 6;

function Blockade(y){
	this.y = y;
	this.show = function(){
		rect(this.y,500,40,100);
		this.y = this.y - blockspeed;
		if( (bx>this.y && bx<this.y+40) && (by>500 && by<500+100) ){
			window.location.href = getURL();
		}
		else if(bx>this.y && bx<this.y+40){
			points += 1;
			if(points%40 == 0){
				blockspeed += 2;
				maxi -= 5;
			}
		}
	}
}

function Ground(x,y,innerWidth,innerHeight){
	this.show = function(){
		rect(x,y,length,window.innerHeight-600);
	}
}

function touchStarted(){
	by = by - 160;
	if(by < 390){by = 390;}
}