import { canvas, c } from './index';


let numOfPlatforms = 11;
const platforms = [];
let platformWidth = 100;
let platformHeight = 20;

class Platform {
    constructor (x, y) {
        this.x = Math.floor(x);
        this.y = y;
    }
    
    onCollide (ball) {
        ball.fallStop();
    }

    draw () {
        c.fillStyle = "#a57d50";
        c.fillRect(this.x, this.y, platformWidth, platformHeight);
    };

};

//  400 < x < 480 &&    200 < y < 250
export const checkCollision = (object) => {
  platforms.forEach((platform) => {
    if (
      object.isFalling &&
      object.x <= platform.x + platformWidth &&
      object.x >= platform.x &&
      object.y + object.radius >= platform.y &&
      object.y + object.radius <= platform.y + platformHeight
    ) {
      platform.onCollide(object);
    }
  });
};

export const createPlatforms = () => {
  let position = 0;
  for (let i = 0; i < numOfPlatforms; i++) {
    platforms[i] = new Platform(
      Math.random() * (canvas.width - platformWidth),
      position
    );

    if (position < canvas.height - platformHeight)
      position += Math.floor(canvas.height / numOfPlatforms);
  }
  return platforms;
};

export default Platform;
