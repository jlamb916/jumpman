import {c, canvas} from './index';

class StartScreen {

  startGameScreen() {
    c.fillStyle = "#d0e7f9";
    c.beginPath();
    c.rect(0, 0, canvas.width, canvas.height);
    c.closePath();
    c.fill();
    c.beginPath();
    c.fillStyle = "Black";
    c.font = 'bold 36px "myFont"';
    c.textAlign = "center";
    c.fillText("READY TO JUMP?", canvas.width / 2, 200);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "Black";
    c.font = 'bold 34px "myFont"';
    c.textAlign = "center";
    c.fillText("to Start Game", canvas.width / 2, 350);
    c.fill();
    c.closePath();
    c.fillStyle = "Black";
    c.font = 'bold 34px "myFont"';
    c.textAlign = "center";
    c.fillText("[Enter] or [Spacebar]", canvas.width / 2, 300);
    c.fill();
    c.closePath();
  }
}

export default StartScreen;