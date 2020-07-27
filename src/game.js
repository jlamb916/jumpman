import { c, canvas, keys, handleKeyDown} from './index';
import MovingBall from './moving_jumper';
import { createPlatforms } from './platform';
import {createClouds, renderCloud} from './clouds';

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']



class Game {
    constructor() {
        this.state = true;
        this.ball = undefined;
        this.platforms = [];
        this.clouds = [];
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
            colors[3]
        );
        this.platforms = createPlatforms();
        this.clouds = createClouds();
    }

    setBackground() {
        c.fillStyle = "#d0e7f9";
        c.beginPath();
        c.rect(0, 0, canvas.width, canvas.height);
        c.closePath();
        c.fill();
        for (let i = 0; i < this.clouds.length; i++) {
            renderCloud(this.clouds[i][0], this.clouds[i][1]);
        }
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
        this.ball.update(this.platforms, this.clouds);
    }

    endScreen () {
        c.beginPath();
        c.fillStyle = "Black";
        c.font = 'bold 36px "Courier New"';
        c.textAlign = "center";
        c.fillText("GAME OVER", canvas.width / 2, 200);
        c.fillText("YOUR SCORE: " + this.score, canvas.width / 2, 300);
        c.font = 'bold 24px "Courier New"';
        c.fillText("[Enter] or [Spacebar] to Start a New Game", canvas.width / 2, 500);
        c.closePath();
    }

    gameOver() {
        this.state = false;
        setTimeout(() => {
            this.endScreen();
        }, 100);
        // document.addEventListener('click', eventStartGame);
        document.addEventListener('keydown', handleKeyDown);
        console.log('hi');
    }
}

export default Game;