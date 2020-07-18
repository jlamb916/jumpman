import Util from './util';
import Ball from './jumper';
import { checkCollision } from './platform';
import { canvas, c, keys} from './index'


let platformWidth = 100;
let platformHeight = 20;

class MovingBall extends Ball {
  constructor(x, y, dy, dx, radius, color) {
    super(x, y, dy, dx, radius, color);
    this.score = 0;
  }

  jump() {
    // console.log('jump')
    if (!this.isJumping && !this.isFalling) {
      console.log("jump");
      this.gravity = 0;
      this.jumpSpeed = 27;
      this.isJumping = true;
    }
  }

  checkJump(platforms) {
    // if ball is below canvas height, jump normal, else move platform up
    if (this.y > canvas.height * 0.2) {
      this.y -= this.jumpSpeed;
    } else {
      this.score += 1;
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
      this.fallStop();
    }
  }

  fallStop() {
    // console.log('stopfall')
    this.isFalling = false;
    this.gravity = 0;
    this.jump();
  }

  draw() {
    c.fillStyle = "Black";
    c.font = 'bold 32px "Sans Serif"';
    c.fillText(this.score, 10, 30);

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update(platforms) {
    //start the jump
    this.jump();

    //check the balls status
    if (this.isJumping) this.checkJump(platforms);
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