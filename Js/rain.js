export default class Rain
{
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeed = 3;
        this.speed = 0;
        
        this.height = 10;
        this.width = 10;

        this.position = {
            x: 0,
            y: 0,
        }

        this.position.x = this.generateRandomNumber(0,this.gameWidth);

    }
    generateRandomNumber(min, max) {  
	    min = Math.ceil(min); 
	    max = Math.floor(max); 

	    return Math.floor(Math.random() * (max - min + 1)) + min; 
    }  
    update(deltaTime,isCollide) {
        if(!deltaTime) {
            return;
        }
        this.position.y += this.maxSpeed;

        if (this.position.y >= this.gameHeight || isCollide.isTouched === true) {
            this.position.x = this.generateRandomNumber(0,this.gameWidth);
            this.position.y = 0;
            isCollide.isTouched = false;
        }
    }
    draw(ctx) {
        ctx.fillStyle = '#0f0';
		//ctx.drawImage(imgBasket,this.position.x,this.position.y);
		ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    
}