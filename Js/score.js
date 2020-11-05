export default class Score
{
    constructor(paddel,rain,paddleWidth) {

        this.score = 0;
        this.drop = 0;

        this.paddlePos = paddel.position;
        this.rainPos  = rain.position;
        this.paddleWidth = paddleWidth;
    }
    paddleBallCollision(isCollide,ctx) {                                         //check if the paddle and our sprite collide or not
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
            this.incrementScore();
            this.drawScore(ctx);
        }
    }
    drawScore(ctx) {
        ctx.font = "19px Arial";
        ctx.fillStyle = "#0095DD";
        
      }
    incrementScore() {
        this.score += 1;
        console.log("score : ", this.score);
    }
    incrementDrop() {
        this.drop += 1;
    }
}