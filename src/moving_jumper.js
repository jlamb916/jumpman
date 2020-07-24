import Util from './util';
import Ball from './jumper';
import { checkCollision } from './platform';
import { canvas, c, keys} from './index'
import { game } from './index';
import {moveClouds} from './clouds';

let platformWidth = 100;
let platformHeight = 20;

class MovingBall extends Ball {
  constructor(x, y, dy, dx, radius, color) {
    super(x, y, dy, dx, radius, color);
  }

  jump() {
    if (!this.isJumping && !this.isFalling) {
      this.gravity = 0;
      this.jumpSpeed = 27;
      this.isJumping = true;
    }
  }

  checkJump(platforms, clouds) {
    // if ball is below canvas height, jump normal, else move platform up
    if (this.y > canvas.height * 0.3) {
      this.y -= this.jumpSpeed;
    } else {
      game.score += 1;
      clouds.forEach((cloud) => {
        if (cloud[1] > canvas.height) {
          cloud[0] = Math.random() * canvas.width;
          cloud[1] = -5;
        } else {
          cloud[1] += this.jumpSpeed;
        }
      })
      platforms.forEach((platform) => {
        platform.y += this.jumpSpeed;
        // if platform is above canvas height, generate a new one
        if (platform.y > canvas.height) {
          platform.x = Math.random() * (canvas.width - platformWidth);
          platform.y = platform.y - canvas.height;
        }
      });
    }
    this.jumpSpeed -= 1;
    if (this.jumpSpeed == 0) {
      this.isJumping = false;
      this.isFalling = true;
      this.gravity = 1;
    }
  }

  checkFall() {
    if (this.y < canvas.height - this.radius) {
      this.y += this.gravity;
      this.gravity += 1;
    } else {
      if (game.score === 0) {
        this.fallStop();
      }
      game.gameOver();
    }
  }

  fallStop() {
    this.isFalling = false;
    this.gravity = 0;
    this.jump();
  }

  score() {
    c.fillStyle = "Black";
    c.font = 'bold 36px "Ariel"';
    c.fillText(game.score, 34, 30);
  }

  draw() {
    this.score()
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update(platforms, clouds) {
    //start the jump
    this.jump();

    //check the balls status
    if (this.isJumping) this.checkJump(platforms, clouds);
    if (this.isFalling) this.checkFall();

    //check every frame to see if the ball collides with a platform

    // mouse movement
    // this.x + this.radius < mouse.x;
    //this.x - this.radius > mouse.x ||
    if (keys[68] || keys[39]) {
      this.velocity.x = 10;
    } else if (keys[65] || keys[37]) {
      this.velocity.x = -10;
    } else {
      this.velocity.x = 0;
    }

    if (this.x < 0 || this.x > canvas.width) {
      this.x = Util.wrap(this.x, canvas.width);
    }
    this.x += this.velocity.x;
    checkCollision(this);

    this.draw();
  }
}

export default MovingBall;