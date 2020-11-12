export default class BackgroundSound {
    constructor() {
        this.audio = new Audio('./assests/background-sound.mp3');
    }
    play() {
        this.audio.play();
    }
    pause() {
        this.audio.pause();
    }
}