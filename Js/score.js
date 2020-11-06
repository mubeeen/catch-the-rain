export default class Score
{
    constructor(paddel,rain,paddleWidth) {

        this.paddlePos = paddel.position;
        this.rainPos  = rain.position;
        this.paddleWidth = paddleWidth;
    }
    paddleBallCollision(isCollide) {                                         //check if the paddle and our sprite collide or not
        let bottomOfSprite = this.rainPos.y;
        let topOfPaddle = this.paddlePos.y;

        if( bottomOfSprite >= topOfPaddle 
            && (
                this.rainPos.x >= this.paddlePos.x 
                && 
                this.rainPos.x <= (
                    this.paddlePos.x + this.paddleWidth
                )
            )
        ) {
            isCollide.isTouched = true;
            isCollide.score += 1;                               //increment (Score) in score on colliding with bar
        }
        if ( isCollide.isDroped == true ) {                     //increment (Drop) in drop variable incase of missing the rain
            isCollide.isDroped = false;
            isCollide.drop += 1;
        }
    }
}