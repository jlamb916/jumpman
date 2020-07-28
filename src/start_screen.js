import {c, canvas} from './index';
import { createClouds, renderCloud } from './clouds';
import Util from './util';

class StartScreen {
  constructor() {
    this.clouds = createClouds();
    this.state = true;
    this.updateStart = this.updateStart.bind(this);
    this.animateClouds = this.animateClouds.bind(this);
  }
  
  startGameScreen() {
    this.updateStart()
  }

  updateStart() {
    if (this.state === true) {
      console.log('hi')
      requestAnimationFrame(this.updateStart);
    }
    c.clearRect(0, 0, canvas.width, canvas.height);
    this.displayMenu();
  }

  animateClouds() {
    for (let i = 0; i < this.clouds.length; i++) {
      if (this.clouds[i][0] < 0 || this.clouds[i][0] > canvas.width) {

        this.clouds[i][0] = Util.wrap(this.clouds[i][0], canvas.width);
      }
      this.clouds[i][0] += 1;
      renderCloud(this.clouds[i][0], this.clouds[i][1]);
    }
  }

  displayMenu() {
    c.beginPath();
    c.fillStyle = "#d0e7f9";
    c.rect(0, 0, canvas.width, canvas.height);
    c.fill();
    this.animateClouds();
    c.fillStyle = "Black";
    c.font = 'bold 36px "myFont"';
    c.textAlign = "center";
    c.fillText("READY TO JUMP?", canvas.width / 2, 200);
    c.fillStyle = "Black";
    c.font = 'bold 34px "myFont"';
    c.textAlign = "center";
    c.fillText("to Start Game", canvas.width / 2, 350);
    c.fillStyle = "Black";
    c.font = 'bold 34px "myFont"';
    c.textAlign = "center";
    c.fillText("[Enter] or [Spacebar]", canvas.width / 2, 300);
    c.closePath();
  }


}

export default StartScreen;