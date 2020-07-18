import Util from './util'
import MovingBall from './moving_jumper';
import { generatePlatforms } from './platform';


//code will be validated more strictly - can't have undeclared var's ect
"use strict" 

export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = 800;
canvas.height = 600;

const mouse = {
    x: undefined,
    y: undefined
}

export const keys = [];

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('click', () => {
    const game = new Game();
    game.gameStart();
})

addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
});

addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});

class Game {
  constructor() {
    this.state = true;
    this.ball = undefined;
    this.platforms = [];

    this.gameLoop = this.gameLoop.bind(this);
  }

  init() {
    this.ball = new MovingBall(
      canvas.width / 3,
      canvas.height / 2,
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
    requestAnimationFrame(this.gameLoop);
    c.clearRect(0, 0, canvas.width, canvas.height);
    this.setBackground();
    this.platforms.forEach((platform) => {
      platform.draw(c);
    });
    this.ball.update(this.platforms);
  }
}



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