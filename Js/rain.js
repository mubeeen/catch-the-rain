export default class Rain
{
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeed = 3;
        this.speed = 0;
        
        this.height = 30;
        this.width = 30;

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
            if (this.position.y >= this.gameHeight){
                isCollide.isDroped = true;
            }
        }
    }
    draw(ctx,imgApple) {
        ctx.fillStyle = '#0f0';
		ctx.drawImage(imgApple,this.position.x,this.position.y,this.width,this.height);
		//ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    
}