import SuccessSound from './success-sound.js';

export default class Rain
{
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeed = 7;
        this.speed = 0;
        
        this.height = this.gameHeight * 0.084;
        this.width = this.gameWidth * 0.05;

        this.position = {
            x: 0,
            y: 0,
        }

        this.position.x = this.generateRandomNumber(0,this.gameWidth);
        this.successAudio = new SuccessSound();

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

        if ( isCollide.isTouched === true ) {                                       //check if collide with paddle
            this.successAudio.play();                                                      //play when catch                                                            
            this.position.x = this.generateRandomNumber(0,this.gameWidth);
            this.position.y = 0;
            isCollide.isTouched = false;
        }
        if ( isCollide.isDroped === true ) {                                       //check if collide with paddle                                                                                                                                            
            this.position.x = this.generateRandomNumber(0,this.gameWidth);
            this.position.y = 0;
            isCollide.isDroped = false;
        }
        
        if ( this.position.x <= 0 ) {
			this.position.x = 0;
		}
		if ( this.position.x + this.width >= this.gameWidth ) {
			this.position.x = this.gameWidth - this.width;
        }
        
    }

    draw( ctx,imgApple ) {
        ctx.fillStyle = '#0f0';
		ctx.drawImage(imgApple,this.position.x,this.position.y,this.width,this.height);
    }

    
}