export default class CalculateSpeed {
    constructor(gameHeight) {
        this.gameHeight = gameHeight;
        this.THRESHOLD = 1;
    }
    calculateTheSpeed() {
       this.x = ( this.gameHeight * (this.THRESHOLD / 100));
       return this.x;
    }
    increaseSpeed(){
        this.THRESHOLD += 0.0001;
    }
} 