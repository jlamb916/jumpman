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
/*! exports provided: canvas, c, keys, start, game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return keys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_jumper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_jumper */ \"./src/moving_jumper.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_screen */ \"./src/start_screen.js\");\n\n\n\n\n\n\n//code will be validated more strictly - can't have undeclared var's ect\n\"use strict\" \n\nconst canvas = document.querySelector('canvas')\nconst c = canvas.getContext('2d')\n\ncanvas.width = 800;\ncanvas.height = 600;\n\nconst mouse = {\n    x: undefined,\n    y: undefined\n}\n\nconst keys = [];\n\nconst colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']\n\n\nclass Game {\n  constructor() {\n    this.state = true;\n    this.ball = undefined;\n    this.platforms = [];\n    this.score = 0;\n    this.gameLoop = this.gameLoop.bind(this);\n  }\n\n  init() {\n    this.ball = new _moving_jumper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      canvas.width / 2,\n      canvas.height - 10,\n      3,\n      2,\n      30,\n      colors[2]\n    );\n    this.platforms = Object(_platform__WEBPACK_IMPORTED_MODULE_2__[\"generatePlatforms\"])();\n  }\n\n  setBackground() {\n    c.fillStyle = \"#d0e7f9\";\n    c.beginPath();\n    c.rect(0, 0, canvas.width, canvas.height);\n    c.closePath();\n    c.fill();\n  }\n\n  gameStart() {\n    this.init();\n    this.gameLoop();\n  }\n\n  gameLoop() {\n    if (this.state === true) {\n        requestAnimationFrame(this.gameLoop);\n    }\n    c.clearRect(0, 0, canvas.width, canvas.height);\n    this.setBackground();\n    this.platforms.forEach((platform) => {\n      platform.draw(c);\n    });\n    this.ball.update(this.platforms);\n  }\n\n  gameOver () { \n    this.state = false;\n    setTimeout(() => {\n        c.beginPath();\n        c.fillStyle = \"Black\";\n        c.font = 'bold 36px \"Ariel\"';\n        c.textAlign = \"center\";\n        c.fillText(\"GAME OVER\", canvas.width / 2, 200);\n        c.fillText(\"YOUR SCORE: \" + this.score, canvas.width / 2, 300);\n        c.font = 'bold 24px \"Ariel\"';\n        c.fillText(\"Click to Start a New Game\", canvas.width / 2, 500);\n        c.closePath();\n    }, 100);\n    }\n}\n\nconst start = new _start_screen__WEBPACK_IMPORTED_MODULE_3__[\"default\"](c, canvas);\nlet game;\nstart.startGame();\n\n// Event Listeners\ndocument.addEventListener('mousemove', (event) => {\n    mouse.x = event.clientX\n    mouse.y = event.clientY\n})\n\ndocument.addEventListener('click', () => {\n    game = new Game();\n    game.gameStart();\n});\n\ndocument.addEventListener(\"keydown\", (e) => {\n    keys[e.keyCode] = true;\n});\n\ndocument.addEventListener(\"keyup\", (e) => {\n    keys[e.keyCode] = false;\n});\n// // Implementation\n// let ball2;\n// let platforms;\n\n// // initialize balls\n// function init() {\n//     ball2 = new MovingBall(canvas.width / 3, canvas.height / 2, 3, 2, 30, colors[2]);\n//     platforms = generatePlatforms();\n\n// }\n\n\n// // Set background\n// function setBackground() {\n//     c.fillStyle = \"#d0e7f9\";\n//     c.beginPath();\n//     c.rect(0, 0, canvas.width, canvas.height);\n//     c.closePath();\n//     c.fill();\n// }\n\n// function animate() {\n//     requestAnimationFrame(animate)\n//     c.clearRect(0, 0, canvas.width, canvas.height)\n\n//     setBackground();\n\n//     platforms.forEach((platform) => { \n//         platform.draw(c); \n//     });\n//     ball2.update();\n\n\n// }\n\n// function gameStart() {\n//     init()\n//     animate()\n// }\n\n\n// //testing\n// window.ball2 = ball2;\n// window.platforms = platforms;\n// window.score = score;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jumper.js":
/*!***********************!*\
  !*** ./src/jumper.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass Ball {\n  constructor(x, y, dy, dx, radius, color) {\n    this.x = x;\n    this.y = y;\n    this.velocity = {\n      x: dx,\n      y: dy,\n    };\n    this.radius = radius;\n    this.color = color;\n    this.mass = 1;\n    this.isJumping = false;\n    this.isFalling = false;\n    this.jumpSpeed = 0;\n    this.gravity = 0;\n  }\n\n  draw() {\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = this.color;\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].stroke();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n  }\n\n  update() {\n    if (this.y + this.radius > _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) {\n      this.velocity.y = -this.velocity.y;\n    } else {\n      this.velocity.y += this.gravity;\n    }\n    this.y += this.velocity.y;\n    \n    this.draw();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/jumper.js?");

/***/ }),

/***/ "./src/moving_jumper.js":
/*!******************************!*\
  !*** ./src/moving_jumper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _jumper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jumper */ \"./src/jumper.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\n\nlet platformWidth = 100;\nlet platformHeight = 20;\n\nclass MovingBall extends _jumper__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(x, y, dy, dx, radius, color) {\n    super(x, y, dy, dx, radius, color);\n  }\n\n  jump() {\n    // console.log('jump')\n    if (!this.isJumping && !this.isFalling) {\n      console.log(\"jump\");\n      this.gravity = 0;\n      this.jumpSpeed = 27;\n      this.isJumping = true;\n    }\n  }\n\n  checkJump(platforms) {\n    // if ball is below canvas height, jump normal, else move platform up\n    if (this.y > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height * 0.2) {\n      this.y -= this.jumpSpeed;\n    } else {\n      _index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score += 1;\n      platforms.forEach((platform) => {\n        platform.y += this.jumpSpeed;\n        // if platform is above canvas height, generate a new one\n        if (platform.y > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height) {\n          platform.x = Math.random() * (_index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width - platformWidth);\n          platform.y = platform.y - _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height;\n        }\n      });\n    }\n    this.jumpSpeed -= 1;\n    if (this.jumpSpeed == 0) {\n      this.isJumping = false;\n      this.isFalling = true;\n      this.gravity = 1;\n    }\n  }\n\n  checkFall() {\n    if (this.y < _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height - this.radius) {\n      this.y += this.gravity;\n      this.gravity += 1;\n    } else {\n      if (_index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score === 0) {\n        this.fallStop();\n      }\n      _index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].gameOver();\n    }\n  }\n\n  fallStop() {\n    // console.log('stopfall')\n    this.isFalling = false;\n    this.gravity = 0;\n    this.jump();\n  }\n\n  score() {\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].font = 'bold 36px \"Ariel\"';\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillText(_index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score, 34, 30);\n  }\n\n  draw() {\n    this.score()\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillStyle = this.color;\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].stroke();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].closePath();\n  }\n\n  update(platforms) {\n    //start the jump\n    this.jump();\n\n    //check the balls status\n    if (this.isJumping) this.checkJump(platforms);\n    if (this.isFalling) this.checkFall();\n\n    //check every frame to see if the ball collides with a platform\n\n    // mouse movement\n    // this.x + this.radius < mouse.x;\n    //this.x - this.radius > mouse.x ||\n    if (_index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][68] || _index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][39]) {\n      this.velocity.x = 10;\n    } else if (_index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][65] || _index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][37]) {\n      this.velocity.x = -10;\n    } else {\n      this.velocity.x = 0;\n    }\n\n    if (this.x < 0 || this.x > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width) {\n      this.x = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrap(this.x, _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width);\n    }\n    this.x += this.velocity.x;\n    Object(_platform__WEBPACK_IMPORTED_MODULE_2__[\"checkCollision\"])(this);\n\n    this.draw();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingBall);\n\n//# sourceURL=webpack:///./src/moving_jumper.js?");

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: checkCollision, generatePlatforms, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCollision\", function() { return checkCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePlatforms\", function() { return generatePlatforms; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nlet numOfPlatforms = 11;\nconst platforms = [];\nlet platformWidth = 100;\nlet platformHeight = 20;\n\nclass Platform {\n    constructor (x, y) {\n        this.x = Math.floor(x);\n        this.y = y;\n    }\n    \n    onCollide (ball) {\n        console.log('collide');\n        ball.fallStop();\n    }\n\n    draw () {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"#a57d50\";\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(this.x, this.y, platformWidth, platformHeight);\n    };\n\n};\n\n//  400 < x < 480 &&    200 < y < 250\nconst checkCollision = (object) => {\n  platforms.forEach((platform) => {\n    if (\n      object.isFalling &&\n      object.x <= platform.x + platformWidth &&\n      object.x >= platform.x &&\n      object.y + object.radius >= platform.y &&\n      object.y + object.radius <= platform.y + platformHeight\n    ) {\n      platform.onCollide(object);\n    }\n  });\n};\n\nconst generatePlatforms = () => {\n  let position = 0;\n  for (let i = 0; i < numOfPlatforms; i++) {\n    platforms[i] = new Platform(\n      Math.random() * (_index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - platformWidth),\n      position\n    );\n\n    if (position < _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height - platformHeight)\n      position += Math.floor(_index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height / numOfPlatforms);\n  }\n  return platforms;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);\n\n\n//# sourceURL=webpack:///./src/platform.js?");

/***/ }),

/***/ "./src/start_screen.js":
/*!*****************************!*\
  !*** ./src/start_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass StartScreen {\n\n  startGame() {\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"#d0e7f9\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].rect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 36px \"Ariel\"';\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"READY TO JUMP?\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 200);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 36px \"Ariel\"';\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"Click to Start\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 300);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartScreen);\n\n//# sourceURL=webpack:///./src/start_screen.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst Util = {\n    randomIntFromRange(min, max) {\n        return Math.floor(Math.random() * (max - min + 1) + min)\n    },\n\n    randomColor( colors) {\n        return colors[Math.floor(Math.random() * colors.length)]\n    },\n\n    distance (x1, y1, x2, y2) {\n        const xDist = x2 - x1\n        const yDist = y2 - y1\n        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))\n    },\n\n    wrap(x, max) {\n        if (x < 0) {\n            return max - (x % max);\n        } else if (x > max) {\n            return x % max;\n        } else {\n            return x;\n        }\n    },\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });