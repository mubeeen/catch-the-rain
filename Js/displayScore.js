export default class DisplayScore {
    constructor(){
    }
    displayScoreOnUI(ctx,isCollide,width,height){
        ctx.fillText('Score:' + isCollide.score , 90 , 60, 150);            //HardCoded
        ctx.fillText('Drop:' + isCollide.drop , 90 , 110, 150);
    }

}  