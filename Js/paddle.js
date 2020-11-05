export default class Paddel {

	constructor(gameWidth, gameHeight) {

		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;

		this.width = 150;
		this.height = 50;

		this.maxSpeed = 10;
		this.speed = 0;

		this.position = {
			x : gameWidth / 2 - this.width / 2,
			y : gameHeight - this.height - 10,
		}
	}

	draw(ctx,imgPaddle) {
		//ctx.fillStyle = '#0f0';
		//ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
		ctx.drawImage(imgPaddle,this.position.x,this.position.y,this.width,this.height);
	}

	update(deltaTime) {				//updating the paddle
		if(!deltaTime) return;
		
		this.position.x += this.speed;

		if (this.position.x <= 0) {
			this.position.x = 0;
		}
		if (this.position.x + this.width >= this.gameWidth) {
			this.position.x = this.gameWidth - this.width;
		}
	}

	moveLeft() {						//move paddle to left
		this.speed = -this.maxSpeed;
	}
	moveRight() {						//move paddle to right
		this.speed = this.maxSpeed;
	}
	stop()								//stop paddle when either left or right key press to make the speed equal 0, I implemented this technique to avoid lagging
	{
		this.speed = 0;
	}
}