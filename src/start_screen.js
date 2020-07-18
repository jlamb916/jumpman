import {c, canvas} from './index';

class StartScreen {

  startGame() {
    c.fillStyle = "#d0e7f9";
    c.beginPath();
    c.rect(0, 0, canvas.width, canvas.height);
    c.closePath();
    c.fill();
    c.beginPath();
    c.fillStyle = "Black";
    c.font = 'bold 36px "Ariel"';
    c.textAlign = "center";
    c.fillText("READY TO JUMP?", canvas.width / 2, 200);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "Black";
    c.font = 'bold 36px "Ariel"';
    c.textAlign = "center";
    c.fillText("Click to Start", canvas.width / 2, 300);
    c.fill();
    c.closePath();
  }
}

export default StartScreen;