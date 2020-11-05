export default class Distance
{
    constructor(paddle,rain) {
        this.paddlePos = paddle.position;
        this.rainPos = rain.position;
    }
    checkDistance() {
        let a = this.paddlePos.x - this.rainPos.x;
        let b = this.paddlePos.y - this.rainPos.y;

        return Math.sqrt( a*a + b*b );
    }
}