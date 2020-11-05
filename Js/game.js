import InputHandler from "./InputHandler.js";
import Paddle from './paddle.js';
import Rain from './rain.js';
import Score from './score.js';
import DisplayScore from './displayScore.js';

export default class Game {

    constructor(GAME_WIDTH,GAME_HEIGHT,ctx) {

        //setting parameters

        this.gameHeight = GAME_HEIGHT;
        this.gameWidth = GAME_WIDTH;
        this.ctx = ctx;

        //Score managment object

        this.isCollide = {
            score : 0,
            drop : 0,
            isTouched : false,
            isDroped : false,
        };
        
        //setting paddle image

        this.imgPaddle = new Image();
        this.imgPaddle.src = './assests/basket.png';

        //setting rain image

        this.imgApple = new Image();
        this.imgApple.src = './assests/apple.png';

        //Object declarartion

        this.paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
        this.rain = new Rain(GAME_WIDTH,GAME_HEIGHT);
        this.score = new Score(this.paddle,this.rain,this.paddle.width);
        this.dispScore = new DisplayScore();
        new InputHandler(this.paddle);
    }
    start(deltaTime) {                                                      //function to initiate the game

        this.paddle.update(deltaTime);
        this.paddle.draw(this.ctx,this.imgPaddle);

        this.rain.update(deltaTime,this.isCollide);
        this.rain.draw(this.ctx,this.imgApple);

        this.score.paddleBallCollision(this.isCollide);
        this.dispScore.displayScoreOnUI(this.ctx,this.isCollide);

        this.dispScore.displayScoreOnUI(this.ctx,this.isCollide);
        

    }
}