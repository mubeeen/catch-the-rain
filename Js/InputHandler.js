
export default class InputHandler {
    constructor(Paddel,game) {
        //keyDown
        document.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 37:
                    //console.log("Move Left");
                    Paddel.moveLeft();
                    break;
                case 39:
                    //console.log("Move Left");
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
    }
}