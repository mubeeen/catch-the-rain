export default class SuccessSound
{
    constructor() {
        this.audio = new Audio('./assests/catch-rain.mp3');
    }
    play() {
        this.audio.play();
    }
    pause() {
        this.audio.pause();
    }
}