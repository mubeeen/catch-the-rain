import Paddle from './paddle.js';
import InputHandler from './InputHandler.js';
import Rain from './rain.js';
import Score from './score.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let isCollide = {
    isTouched : false,
};

//get Images
let imgPaddle = new Image();
imgPaddle.src = './assests/basket.png';

let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
let rain = new Rain(GAME_WIDTH,GAME_HEIGHT);
let score = new Score(paddle,rain,paddle.width);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop() {

    let timestamp = (new Date()).getTime();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    paddle.update(deltaTime);
    paddle.draw(ctx,imgPaddle);

    rain.update(deltaTime,isCollide);
    rain.draw(ctx);

    score.paddleBallCollision(isCollide,ctx);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();