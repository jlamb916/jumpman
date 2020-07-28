import {c, canvas} from './index';

class StartScreen {

  startGameScreen() {
    c.beginPath();
    c.fillStyle = "#d0e7f9";
    c.rect(0, 0, canvas.width, canvas.height);
    c.fill();
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