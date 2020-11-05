import InputHandler from "./InputHandler.js";
import Paddle from './paddle.js';
import Rain from './rain.js';
import Score from './score.js';

export default class Game {

    constructor(GAME_WIDTH,GAME_HEIGHT,ctx) {

        this.ctx = ctx;
        this.imgPaddle = new Image();
        this.imgPaddle.src = './assests/basket.png';


        this.imgApple = new Image();
        this.imgApple.src = './assests/apple.png';

        this.paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
        this.rain = new Rain(GAME_WIDTH,GAME_HEIGHT);
        this.score = new Score(this.paddle,this.rain,this.paddle.width);

        new InputHandler(this.paddle);

        this.gameHeight = GAME_HEIGHT;
        this.gameWidth = GAME_WIDTH;

        this.isCollide = {
            isTouched : false,
            isDroped : false,
        };

    }
    start(deltaTime) {
        this.paddle.update(deltaTime);
        this.paddle.draw(this.ctx,this.imgPaddle);

        this.rain.update(deltaTime,this.isCollide);
        this.rain.draw(this.ctx,this.imgApple);

        this.score.paddleBallCollision(this.isCollide,this.ctx);
    }
}