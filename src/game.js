import { c, canvas, keys, eventStartGame} from './index';
import MovingBall from './moving_jumper';
import { generatePlatforms } from './platform';

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']


function renderCloud(startX, startY, color) {
    c.beginPath()
    c.moveTo(startX, startY);
    c.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
    c.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
    c.bezierCurveTo(startX + 300, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
    c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
    c.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
    c.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
    c.closePath();
    c.fillStyle = color;
    c.fill();
    c.lineWidth = 5;
    c.strokeStyle = color;
    c.stroke();
}

class Game {
    constructor() {
        this.state = true;
        this.ball = undefined;
        this.platforms = [];
        this.score = 0;
        this.gameLoop = this.gameLoop.bind(this);
        this.gameStart = this.gameStart.bind(this);
    }

    init() {
        if (this.state === true) {
            document.addEventListener("keydown", (e) => {
                keys[e.keyCode] = true;
            });

            document.addEventListener("keyup", (e) => {
                keys[e.keyCode] = false;
            });
        }

        this.ball = new MovingBall(
            canvas.width / 2,
            canvas.height - 10,
            3,
            2,
            30,
            colors[2]
        );
        this.platforms = generatePlatforms();
    }

    setBackground() {
        c.fillStyle = "#d0e7f9";
        c.beginPath();
        c.rect(0, 0, canvas.width, canvas.height);
        c.closePath();
        c.fill();
        renderCloud(canvas.width / 2, canvas.height / 2, 'white');
    }

    gameStart() {
        this.init();
        this.gameLoop();
    }

    gameLoop() {
        if (this.state === true) {
            requestAnimationFrame(this.gameLoop);
        }

        c.clearRect(0, 0, canvas.width, canvas.height);
        this.setBackground();
        this.platforms.forEach((platform) => {
            platform.draw(c);
        });
        this.ball.update(this.platforms);
    }

    gameOver() {
        this.state = false;
        setTimeout(() => {
            c.beginPath();
            c.fillStyle = "Black";
            c.font = 'bold 36px "Ariel"';
            c.textAlign = "center";
            c.fillText("GAME OVER", canvas.width / 2, 200);
            c.fillText("YOUR SCORE: " + this.score, canvas.width / 2, 300);
            c.font = 'bold 24px "Ariel"';
            c.fillText("Click to Start a New Game", canvas.width / 2, 500);
            c.closePath();
        }, 100);
        document.addEventListener('click', eventStartGame);
        console.log('hi');
    }
}

export default Game;