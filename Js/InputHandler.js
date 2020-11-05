
export default class InputHandler {
    constructor(Paddel) {
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