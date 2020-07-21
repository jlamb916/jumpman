import Util from './util'
import MovingBall from './moving_jumper';
import { generatePlatforms } from './platform';
import StartScreen from './start_screen';


//code will be validated more strictly - can't have undeclared var's ect
"use strict" 

export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = 700;
canvas.height = 550;

const mouse = {
    x: undefined,
    y: undefined
}

export const keys = [];

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']


class Game {
  constructor() {
    this.state = true;
    this.ball = undefined;
    this.platforms = [];
    this.score = 0;
    this.gameLoop = this.gameLoop.bind(this);
  }

  init() {
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

  gameOver () { 
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
    }
}

export const start = new StartScreen(c, canvas);
export let game;
start.startGame();


// Event Listeners
document.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

const eventStartGame = () => {
  game = new Game();
  game.gameStart();
  document.removeEventListener('click', eventStartGame);
}

document.addEventListener('click', eventStartGame);



document.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});
// // Implementation
// let ball2;
// let platforms;

// // initialize balls
// function init() {
//     ball2 = new MovingBall(canvas.width / 3, canvas.height / 2, 3, 2, 30, colors[2]);
//     platforms = generatePlatforms();

// }


// // Set background
// function setBackground() {
//     c.fillStyle = "#d0e7f9";
//     c.beginPath();
//     c.rect(0, 0, canvas.width, canvas.height);
//     c.closePath();
//     c.fill();
// }

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, canvas.width, canvas.height)

//     setBackground();

//     platforms.forEach((platform) => { 
//         platform.draw(c); 
//     });
//     ball2.update();


// }

// function gameStart() {
//     init()
//     animate()
// }


// //testing
// window.ball2 = ball2;
// window.platforms = platforms;
// window.score = score;