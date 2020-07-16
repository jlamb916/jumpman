// module.import { randomColor } from './utils'
"use strict" //code will be validated more strictly - can't have undeclared var's ect
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: undefined,
    y: undefined
}

const gravity = 1;
const friction = 1;

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

function rotate(dx, dy, angle) {
    const rotatedVelocities = {
        x: dx * Math.cos(angle) - dy * Math.sin(angle),
        y: dx * Math.sin(angle) + dy * Math.cos(angle)
    };

    return rotatedVelocities;
}


function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.dx - otherParticle.dx;
    const yVelocityDiff = particle.dy - otherParticle.dy;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.dx, particle.dy, angle);
        const u2 = rotate(otherParticle.dx, otherParticle.dy, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.dx = vFinal1.x;
        particle.dy = vFinal1.y;

        otherParticle.dx = vFinal2.x;
        otherParticle.dy = vFinal2.y;
    }
}

// Objects
class Ball {
    constructor(x, y, dy, dx, radius, color) {
        this.x = x
        this.y = y;
        this.velocity = {
            x: dx,
            y: dy
        }
        this.radius = radius
        this.color = color;
        this.mass = 1;
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill();
        c.stroke();
        c.closePath();
    }

    update() {
        if (this.y + this.radius > canvas.height) {
            this.velocity.y = -this.velocity.y * friction;
        } else {
            this.velocity.y += gravity;
        }
        this.y += this.velocity.y
        // this.x += this.dx;
        this.draw()
    }

}

class MovingBall extends Ball {
    constructor(x, y, dy, dx, radius, color) {
        super(x, y, dy, dx, radius, color);
    }

    update() {

        //gives off impression of a bouncing ball
        if (this.y + this.radius > canvas.height) {
            this.velocity.y = -this.velocity.y * friction;
        } else {
            this.velocity.y += gravity;
        }

        // move balls x coords toward mouse
        if (this.x + this.radius < mouse.x) {
            this.velocity.x = 10;
        } else if (this.x - this.radius > mouse.x) {
            this.velocity.x = -10
        } else {
            this.velocity.x = 0;
        }
        this.y += this.velocity.y;
        this.x += this.velocity.x;
        this.draw()
    }
}


// Implementation
let object;
let ball;
let ball2;

// initialize balls
function init() {
    ball = new Ball(canvas.width / 2, canvas.height / 2, 3, 2, 30, colors[3]);
    ball2 = new MovingBall(canvas.width / 3, canvas.height / 2, 3, 2, 30, colors[2]);
}

// get distance between 2 points + pow
const getDistance = (x1, y1, x2, y2) => {
    let xDist = x2 - x1;
    let yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

var howManyCircles = 10, circles = [];

for (var i = 0; i < howManyCircles; i++)
    circles.push([Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, Math.random() / 2]);
//add information about circles into
//the 'circles' Array. It is x & y positions, 
//radius from 0-100 and transparency 
//from 0-0.5 (0 is invisible, 1 no transparency)

var DrawCircles = function () {
    for (var i = 0; i < howManyCircles; i++) {
        c.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
        //white color with transparency in rgba
        c.beginPath();
        c.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
        //arc(x, y, radius, startAngle, endAngle, anticlockwise)
        //circle has always PI*2 end angle
        c.closePath();
        c.fill();
    }
};

var MoveCircles = function (deltaY) {
    for (var i = 0; i < howManyCircles; i++) {
        if (circles[i][1] - circles[i][2] > canvas.height) {
            //the circle is under the screen so we change
            //informations about it 
            circles[i][0] = Math.random() * canvas.width;
            circles[i][2] = Math.random() * 100;
            circles[i][1] = 0 - circles[i][2];
            circles[i][3] = Math.random() / 2;
        } else {
            //move circle deltaY pixels down
            circles[i][1] += deltaY;
        }
    }
};

// Set background
function setBackground() {
    c.fillStyle = '#d0e7f9';
    c.beginPath();
    c.rect(0, 0, canvas.width, canvas.height);
    c.closePath();
    c.fill();
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'black';
    c.fillText(`${mouse.x}, ${mouse.y}`, mouse.x, mouse.y);

    setBackground()
    // MoveCircles(5);
    // player.draw();
    DrawCircles();
    ball.update();
    ball2.update();

    if (getDistance(ball.x, ball.y, ball2.x, ball2.y) < ball.radius + ball2.radius) {
        resolveCollision(ball, ball2);
        console.log('bam')
    }

}

function gameStart() {
    init()
    animate()
}

gameStart();


//testing
window.ball = ball;
window.ball2 = ball2;