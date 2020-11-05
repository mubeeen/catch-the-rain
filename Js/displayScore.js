export default class DisplayScore {
    constructor(){
    }
    displayScoreOnUI(ctx,isCollide){
        ctx.fillText('Score:' + isCollide.score , 10 , 60, 200);
        ctx.fillText('Drop:' + isCollide.drop , 10 , 110, 200);
    }

}