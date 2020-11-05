import InputHandler from "./InputHandler.js";
import Paddel from "./paddle.js";

export default class Game {

    constructor(gameWidth,gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
    }
    start() {
        let paddle = new Paddel(this);
        new InputHandler(Paddle);
    }
}