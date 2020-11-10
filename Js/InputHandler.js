
export default class InputHandler {
    constructor(Paddel,game) {
        //keyDown
        document.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 37:
                    Paddel.moveLeft();
                    break;
                case 39:
                    Paddel.moveRight();
                    break;
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.playGame();
                    break;
            }
        });

        //add buttons
        document.getElementById("restart").addEventListener("click", function() {
            //console.log("reset");
            game.reset();
          });

        document.getElementById("pause-play").addEventListener("click", function() {
            console.log("Pause");
            game.togglePause();
          });

        document.getElementById("bk-audio").addEventListener("click", function() {          //error in function need to check
            game.audio.muted = true;
          });



        //keyUP

        document.addEventListener("keyup" , event => {
            switch(event.keyCode) {
                case 37:
                    if(Paddel.speed < 0)    Paddel.stop();
                    break;
                case 39:
                    if(Paddel.speed > 0)    Paddel.stop();
                    break;
            }
        });

        //getMousePosition
        document.addEventListener("mousemove" , event => {
            /*console.log( `x: ${event.x} | y: ${event.y}`);
            Paddel.moveLeft(event.x);*/
            Paddel.controlMouse(event.x);
        });

    }
}