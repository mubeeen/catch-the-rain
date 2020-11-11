import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.font = "40px Arial";
ctx.fillStyle = "red";

var render = function() {
    ctx.canvas.width = document.documentElement.clientWidth * 0.9;
    ctx.canvas.height = document.documentElement.clientHeight * 0.9;
}

window.addEventListener("resize",render);

render();

let GAME_WIDTH = ctx.canvas.width;
let GAME_HEIGHT = ctx.canvas.height;

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