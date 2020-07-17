/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("//code will be validated more strictly - can't have undeclared var's ect\n \n\nconst canvas = document.querySelector('canvas')\nconst c = canvas.getContext('2d')\n\ncanvas.width = innerWidth\ncanvas.height = innerHeight\n\nconst mouse = {\n    x: undefined,\n    y: undefined\n}\n\nconst gravity = 1;\nconst friction = 1;\n\nconst colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']\n\n// Event Listeners\naddEventListener('mousemove', (event) => {\n    mouse.x = event.clientX\n    mouse.y = event.clientY\n})\n\naddEventListener('resize', () => {\n    canvas.width = innerWidth\n    canvas.height = innerHeight\n    init()\n})\n\naddEventListener('click', () => {\n    init();\n})\n\n\n\n\n\n\n// Objects\nclass Ball {\n    constructor(x, y, dy, dx, radius, color) {\n        this.x = x\n        this.y = y;\n        this.velocity = {\n            x: dx,\n            y: dy\n        }\n        this.radius = radius\n        this.color = color;\n        this.mass = 1;\n        this.isJumping = false;\n        this.isFalling = false;\n        this.jumpspeed = 0;\n        this.gravity = 0;\n    }\n\n    draw() {\n        c.beginPath()\n        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)\n        c.fillStyle = this.color\n        c.fill();\n        c.stroke();\n        c.closePath();\n    }\n\n    update() {\n        if (this.y + this.radius > canvas.height) {\n            this.velocity.y = -this.velocity.y * friction;\n        } else {\n            this.velocity.y += gravity;\n        }\n        this.y += this.velocity.y\n        // this.x += this.dx;\n        this.draw()\n    }\n\n}\n\nclass MovingBall extends Ball {\n    constructor(x, y, dy, dx, radius, color) {\n        super(x, y, dy, dx, radius, color);\n    }\n\n    bounce () {\n        console.log('jump')\n        if (!this.isJumping && !this.isFalling) {\n            this.gravity = 0;\n            this.jumpSpeed = 27;\n            this.isJumping = true;\n        }\n    }\n\n    checkJump () {\n        this.y -= this.jumpSpeed;\n        this.jumpSpeed -= 1;\n        if (this.jumpSpeed == 0) {\n            this.isJumping = false;\n            this.isFalling = true;\n            this.gravity = 1;\n        }\n    }\n\n    checkFall () {\n\n        if (this.y < canvas.height - this.radius) {\n            this.y += this.gravity;\n            this.gravity += 1;\n        } else {\n             this.fallStop();\n        }\n    }\n\n    fallStop () {\n        console.log('stopfall')\n        this.isFalling = false;\n        this.gravity = 0;\n        this.bounce();\n    }\n\n    update() {\n        //start the bounce\n        this.bounce();\n\n        //check the balls status\n        if (ball2.isJumping) ball2.checkJump();\n        if (ball2.isFalling) ball2.checkFall();\n        \n        //check every frame to see if the ball collides with a platform\n        checkCollision(ball2);\n\n        // mouse movement\n        if (this.x + this.radius < mouse.x) {\n            this.velocity.x = 10;\n        } else if (this.x - this.radius > mouse.x) {\n            this.velocity.x = -10\n        } else {\n            this.velocity.x = 0;\n        }\n        this.x += this.velocity.x;\n        this.draw()\n    }\n}\n\n\n// Implementation\nlet ball;\nlet ball2;\n\n// initialize balls\nfunction init() {\n    ball = new Ball(canvas.width / 2, canvas.height / 2, 3, 2, 30, colors[3]);\n    ball2 = new MovingBall(canvas.width / 3, canvas.height / 2, 3, 2, 30, colors[2]);\n    generatePlatforms();\n\n}\n\n// get distance between 2 points + pow\nconst getDistance = (x1, y1, x2, y2) => {\n    let xDist = x2 - x1;\n    let yDist = y2 - y1;\n\n    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n}\n\nvar howManyCircles = 10, circles = [];\n\nfor (var i = 0; i < howManyCircles; i++)\n    circles.push([Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, Math.random() / 2]);\n//add information about circles into\n//the 'circles' Array. It is x & y positions, \n//radius from 0-100 and transparency \n//from 0-0.5 (0 is invisible, 1 no transparency)\n\nvar DrawCircles = function () {\n    for (var i = 0; i < howManyCircles; i++) {\n        c.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';\n        //white color with transparency in rgba\n        c.beginPath();\n        c.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);\n        //arc(x, y, radius, startAngle, endAngle, anticlockwise)\n        //circle has always PI*2 end angle\n        c.closePath();\n        c.fill();\n    }\n};\n\nvar MoveCircles = function (deltaY) {\n    for (var i = 0; i < howManyCircles; i++) {\n        if (circles[i][1] - circles[i][2] > canvas.height) {\n            //the circle is under the screen so we change\n            //informations about it \n            circles[i][0] = Math.random() * canvas.width;\n            circles[i][2] = Math.random() * 100;\n            circles[i][1] = 0 - circles[i][2];\n            circles[i][3] = Math.random() / 2;\n        } else {\n            //move circle deltaY pixels down\n            circles[i][1] += deltaY;\n        }\n    }\n};\n\n// Set background\nfunction setBackground() {\n    c.fillStyle = '#d0e7f9';\n    c.beginPath();\n    c.rect(0, 0, canvas.width, canvas.height);\n    c.closePath();\n    c.fill();\n}\n\n\nlet numOfPlatforms = 11;\nlet platforms = [];\nlet platformWidth = 100;\nlet platformHeight = 20;\n\nclass Platform {\n    constructor (x, y) {\n        this.x = Math.floor(x);\n        this.y = y;\n    }\n    \n    onCollide (ball) {\n        ball.fallStop();\n    }\n\n    draw () {\n        c.fillStyle = \"#a57d50\";\n        c.fillRect(this.x, this.y, platformWidth, platformHeight);\n    };\n\n};\n\nconst checkCollision = (object) => {\n    platforms.forEach(platform => {\n        if ((object.isFalling) && (object.x < platform.x + platformWidth)\n            && (object.x + object.radius > platform.x)\n            && (object.y + object.radius > platform.y)\n            && (object.y + object.radius < platform.y + platformHeight)) {\n                platform.onCollide(object);\n            }\n    })\n}\n\n\nconst generatePlatforms = () => {\n  let position = 0;\n  for (let i = 0; i < numOfPlatforms; i++) {\n    \n    platforms[i] = new Platform(\n      Math.random() * (canvas.width - platformWidth),\n      position, \n    );\n    \n    if (position < canvas.height - platformHeight)\n      position += Math.floor((canvas.height / numOfPlatforms));\n  }\n  //and Y position interval\n};\n\n\n\n\n\nfunction animate() {\n    requestAnimationFrame(animate)\n    c.clearRect(0, 0, canvas.width, canvas.height)\n    \n    setBackground();\n    \n    //x,y coords on mouse\n    c.fillStyle = 'black';\n    c.fillText(`${mouse.x}, ${mouse.y}`, mouse.x, mouse.y);\n        \n    platforms.forEach((platform) => { platform.draw(c); });\n\n    // DrawCircles();\n    ball.update();\n    \n    ball2.update();\n    if (getDistance(ball.x, ball.y, ball2.x, ball2.y) < ball.radius + ball2.radius) {\n        console.log('Collide!')\n    }\n\n}\n\nfunction gameStart() {\n    init()\n    animate()\n}\n\ngameStart();\n\n\n//testing\nwindow.ball = ball;\nwindow.ball2 = ball2;\nwindow.platforms = platforms;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });