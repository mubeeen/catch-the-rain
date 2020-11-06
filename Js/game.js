import InputHandler from "./InputHandler.js";
import Paddle from './paddle.js';
import Rain from './rain.js';
import Score from './score.js';
import DisplayScore from './displayScore.js';
import Sprites from './sprites.js';

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

        //Game states

        this.GAMESTATE = {
            PAUSED : 0,
            RUNNING : 1,
            MENU : 2,
            GAMEOVER : 3,
        }

        //setting paddle image

        this.imgPaddle = new Image();
        this.imgPaddle.src = './assests/basket.png';

        //setting rain image

        let url = './assests/apple.png';
        
        this.imgApple = new Image();
        this.imgApple.src = url;
        //Object declarartion

        this.gamestate = this.GAMESTATE.MENU;

        this.paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
        this.rain = new Rain(GAME_WIDTH,GAME_HEIGHT);
        this.score = new Score(this.paddle,this.rain,this.paddle.width);
        this.dispScore = new DisplayScore();
        new InputHandler(this.paddle,this);
        this.sprites = new Sprites(this.ctx,this.isCollide,this.imgApple);
    }
    playGame()
    {
        this.gamestate = this.GAMESTATE.RUNNING;
    }
    start(deltaTime) {                                                       //function to initiate the game

        if(this.gamestate === this.GAMESTATE.PAUSED || this.gamestate == this.GAMESTATE.MENU)                            //Function added for Pausing the game
        {
            this.drawPausedScreen();
            return;
        }

        this.paddle.update(deltaTime);                                      //function to update paddle
        this.paddle.draw(this.ctx,this.imgPaddle);                          //function to draw
        
        this.rain.update(deltaTime,this.isCollide);                         //function to updage the rain
        this.rain.draw(this.ctx,this.imgApple);                             //function to draw rain after uptodation 

        this.score.paddleBallCollision(this.isCollide);
        this.dispScore.displayScoreOnUI(this.ctx,this.isCollide,this.gameHeight,this.gameWidth);

        this.sprites.generateSprite(this.imgApple);
        
    }

    drawPausedScreen() {
        if(this.gamestate == this.GAMESTATE.PAUSED){
        this.ctx.rect(0,0,this.gameWidth,this.gameHeight);
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.fill();

            //this.ctx.font = "30px Arial";               
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
        if(this.gamestate == this.GAMESTATE.MENU){
            this.ctx.rect(0,0,this.gameWidth,this.gameHeight);
                this.ctx.fillStyle = "rgba(0,0,0,1)";
                this.ctx.fill();
    
                //this.ctx.font = "30px Arial";               
                this.ctx.fillStyle = "white";
                this.ctx.textAlign = "center";
                this.ctx.fillText("Press Space to Start", this.gameWidth / 2 , this.gameHeight / 2);
            }
    }
    togglePause() {   
                                                                        //game state
        if (this.gamestate == this.GAMESTATE.PAUSED) {
            this.gamestate = this.GAMESTATE.RUNNING;
        }
        else {
            this.gamestate = this.GAMESTATE.PAUSED;
        }
    }
}