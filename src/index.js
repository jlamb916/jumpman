import Util from './util'
import Ball from './jumper';
import MovingBall from './moving_jumper';
import { generatePlatforms } from './platform';


//code will be validated more strictly - can't have undeclared var's ect
"use strict" 

export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = (800);
canvas.height = (600);

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

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

addEventListener('click', () => {
    init();
})

addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
});

addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});

// Implementation
let ball;
let ball2;
let platforms;

// initialize balls
function init() {
    ball = new Ball(canvas.width / 2, canvas.height / 2, 3, 2, 30, colors[3]);
    ball2 = new MovingBall(canvas.width / 3, canvas.height / 2, 3, 2, 30, colors[2]);
    platforms = generatePlatforms();

}


// Set background
function setBackground() {
    c.fillStyle = "#d0e7f9";
    c.beginPath();
    c.rect(0, 0, canvas.width, canvas.height);
    c.closePath();
    c.fill();
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    setBackground();
    
    //x,y coords on mouse
    c.fillStyle = 'black';
    c.fillText(`${mouse.x}, ${mouse.y}`, mouse.x, mouse.y);
        
    platforms.forEach((platform) => { 
        platform.draw(c); 
    });

    // DrawCircles();
    // ball.update();
    ball2.update();

}

function gameStart() {
    init()
    animate()
}

gameStart();


//testing
window.ball = ball;
window.ball2 = ball2;
window.platforms = platforms;