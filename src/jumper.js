import { canvas, c } from "./index";

class Ball {
  constructor(x, y, dy, dx, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: dx,
      y: dy,
    };
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.isJumping = false;
    this.isFalling = false;
    this.jumpSpeed = 0;
    this.gravity = 0;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    if (this.y + this.radius > canvas.height) {
      this.velocity.y = -this.velocity.y;
    } else {
      this.velocity.y += this.gravity;
    }
    this.y += this.velocity.y;
    
    this.draw();
  }
}

export default Ball;
