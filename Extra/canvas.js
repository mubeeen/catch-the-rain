//**************************************global variables******************************************************

var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';
//ctx.fillText('-Assasdd-', 150, 420 );

const WIDHT = 1000;
const HEIGHT = 500;


var pressingRight = false;
var pressingLeft = false;

var DrpY = 0;
var spdDrpY = 2;

//****************************************Global Functions******************************************************

document.onkeydown = function(event) {		//key press event
	if(event.keyCode == 37){
		//left
		pressingLeft = true;
	}
	else if(event.keyCode == 39){
		//right
		pressingRight = true;
	}
}
document.onkeyup = function(event) {		//key press event
	if(event.keyCode == 37){
		//left
		pressingLeft = false;
		//console.log("left");
	}
	else if(event.keyCode == 39){
		//right
		pressingRight = false;
		//console.log("right");
	}
}

//********************************************Class 1***********************************************************

class spriteRain			//sprite objects
{
	constructor(DrpY,spdDrpY) {
		this.DrpY = DrpY;
		this.spdDrpY = spdDrpY;
	}
	generateRandomNumber(min, max) {  
	    min = Math.ceil(min); 
	    max = Math.floor(max); 

	    return Math.floor(Math.random() * (max - min + 1)) + min; 
	}  
	dropSprites()
	{
		const randomX = this.generateRandomNumber(0,WIDHT);
		//console.log(randomX);
		setInterval(() => { 
			this.droping("A",randomX); 
			//ctx.clearRect(randomX-10,200,10,10);
			//ctx.clearRect(0,0,WIDTH,HEIGHT);
			//ctx.beginPath();

		},100);
	}
	droping(Alp,randomX)
	{
		//console.log(x1,DrpY);
		ctx.fillText(Alp, randomX , this.DrpY);
		this.DrpY += this.spdDrpY;
		ctx.clearRect(randomX,this.DrpY,10,10);
	}

}

//********************************************Class 2***************************************************

class movingBar								//moving bar object
{
	constructor( x , y , spdX , spdY ) {
		this.x = x;
		this.y = y;
		this.spdX = spdX;
		this.spdY = spdY;
	}
	createMovingBar() {
		ctx.fillText('-------------', this.x , this.y );
		/*if(this.x > WIDHT ||this. x < 0) {
			this.spdX = -this.spdX;
		}*/
		this.updatePosition();
	}
	updatePosition() {
		if(pressingLeft === true && this.x > 30){
			this.x -= this.spdX;
		}
		else if(pressingRight === true && this.x < WIDHT-150){
			this.x += this.spdX;
		}
	}
}

//************************************************main********************************************************

function init() {
	let bar = new movingBar(10,440,45,0);
	setInterval(() => {
		ctx.clearRect(10,420,1000,200);
		bar.createMovingBar();
		//ctx.clearRect(0,0,WIDHT,HEIGHT);
	},30);

	sprite = new spriteRain(DrpY,spdDrpY);
	sprite.dropSprites();
	
}

//start from here

init();