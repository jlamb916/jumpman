# Jumper

[Live Link](https://jlamb916.github.io/jumpman/)


![alt text](https://github.com/jlamb916/jumpman/blob/master/dist/assets/jumper.gif "jumpergiffy")

## Background

Jumper is a vertical jumping platform game inspired by doodle jump.  The goal of the game is to jump as high as possible without falling off the platform as the game gets increasingly difficult.
The game was built using vanilla javascript, html, canvas, and css.

## Features

Main game logic utilizing Game class to store state of the game. Animation renders as long as the game state is true. Clears and rerenders the platforms and objects at each refresh.

```
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
```

Main jumping and collision logic as well as stdin controlled object movement called at each refresh of the frame. Created seperate functions to check the jumping and falling status of the object by checking the state of the y velocity. A negative object velocity means the object is falling and in that case, we check for object collision with a platform to invert the velocity

```
  update(platforms, clouds) {
    //start the jump
    this.jump();

    ////check the balls status at every frame to see if the ball collides with a platform
    if (this.isJumping) this.checkJump(platforms, clouds);
    if (this.isFalling) this.checkFall();


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
 ```

## Instructions

Simply follow the instructions on the start screen to begin the game and reach a high score. The game is simple. Jump as high as you can by bouncing on the platforms and dont fall down!

# Technologies

All features were implemented using Javascript, HTML5 Canvas, HTML, and CSS. Other dependencies used are NPM as a node packet manager and Webpack to bundle all src files into a single output.

* Javascript for game logic
* HTML5 for graphic rendering
* CSS for styling webpage
* Npm to manage libraries
* Webpack to bundle src files

## Functionality & MVP

* Start Screen as soon as the page is loaded
* Ability to start and reset the game
* Jumping object and platform object with collision detection
* Object Movement with keyboard inputs
* Game ends when the object falls off the platforms
* End game Screen
* Score and High-score display

## Future Features

There are still some features still in the works

* level difficulty
* music option
* choose between different jumpers
* store highscores 

