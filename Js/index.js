import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//get Images

let game = new Game(GAME_WIDTH,GAME_HEIGHT,ctx);
let lastTime = 0;

function gameLoop() {

    let timestamp = (new Date()).getTime();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    game.start(deltaTime);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();