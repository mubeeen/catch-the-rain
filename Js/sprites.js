export default class Sprites {
    constructor(ctx,isCollide) {
        this.ctx = ctx;
        this.isCollide = isCollide;

        //List of Fruits

        this.Fruits = [
            "apple.png",
            "grapes.png",
            "cherry.png",
            "mango.png",
            "orange.png",
            "watermelon.png",
            "pineapple.png",
            "strawberry.png",
        ];

        this.FruitsArrLength = this.Fruits.length - 1;
    }
    generateRandomNumber(min, max) {  
	    min = Math.ceil(min); 
	    max = Math.floor(max); 

	    return Math.floor(Math.random() * (max - min + 1)) + min; 
    }  
    generateSprite(img) {
        if(this.isCollide.isDroped === true || this.isCollide.isTouched === true) {
            let val = this.generateRandomNumber(0,this.FruitsArrLength);
            let url = './assests/' + this.Fruits[val];
            img.src = url;
        }
    }
}