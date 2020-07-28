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

/***/ "./src/clouds.js":
/*!***********************!*\
  !*** ./src/clouds.js ***!
  \***********************/
/*! exports provided: createClouds, moveClouds, renderCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClouds\", function() { return createClouds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveClouds\", function() { return moveClouds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCloud\", function() { return renderCloud; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nconst createClouds = () => {\n        let howManyClouds = 6;\n        let clouds = [];\n        for (var i = 0; i < howManyClouds; i++) {\n            clouds.push([Math.floor(Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width), Math.floor(Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height)])\n        }\n        return clouds\n}\n\nconst moveClouds = () => {\n    for (let i = 0; i < undefined.clouds.length; i++) {\n        if (undefined.clouds[i][1] > _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height) {\n            undefined.clouds[i][0] = Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width;\n            undefined.clouds[i][1] = 0 - ((undefined.clouds[i][0] + undefined.clouds[i][1]) / 2);\n        } else {\n            undefined.clouds[i][1] += 5;\n        }\n    }\n}\n\nconst renderCloud = (startX, startY) => {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath()\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].moveTo(startX, startY);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX - 35, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX + 60, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX + 200, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX + 80, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].bezierCurveTo(startX + 40, startY - 75, startX - 20, startY - 60, startX, startY);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = 'rgba(255, 255, 255, 0.4)'\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].strokeStyle = 'white';\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].stroke();\n}\n\n\n\n//# sourceURL=webpack:///./src/clouds.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _moving_jumper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_jumper */ \"./src/moving_jumper.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouds */ \"./src/clouds.js\");\n\n\n\n\n\nconst colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']\n\n\n\nclass Game {\n    constructor() {\n        this.state = true;\n        this.ball = undefined;\n        this.platforms = [];\n        this.clouds = [];\n        this.score = 0;\n        this.gameLoop = this.gameLoop.bind(this);\n        this.gameStart = this.gameStart.bind(this);\n    }\n\n    init() {\n        if (this.state === true) {\n            document.addEventListener(\"keydown\", (e) => {\n                _index__WEBPACK_IMPORTED_MODULE_0__[\"keys\"][e.keyCode] = true;\n            });\n\n            document.addEventListener(\"keyup\", (e) => {\n                _index__WEBPACK_IMPORTED_MODULE_0__[\"keys\"][e.keyCode] = false;\n            });\n        }\n\n        this.ball = new _moving_jumper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n            _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2,\n            _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height - 10,\n            3,\n            2,\n            30,\n            colors[3]\n        );\n        this.platforms = Object(_platform__WEBPACK_IMPORTED_MODULE_2__[\"createPlatforms\"])();\n        this.clouds = Object(_clouds__WEBPACK_IMPORTED_MODULE_3__[\"createClouds\"])();\n    }\n\n    setBackground() {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"#d0e7f9\";\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].rect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n        for (let i = 0; i < this.clouds.length; i++) {\n            Object(_clouds__WEBPACK_IMPORTED_MODULE_3__[\"renderCloud\"])(this.clouds[i][0], this.clouds[i][1]);\n        }\n    }\n\n    gameStart() {\n        this.init();\n        this.gameLoop();\n    }\n\n    gameLoop() {\n        if (this.state === true) {\n            requestAnimationFrame(this.gameLoop);\n        }\n\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n        this.setBackground();\n        this.platforms.forEach((platform) => {\n            platform.draw(_index__WEBPACK_IMPORTED_MODULE_0__[\"c\"]);\n        });\n        this.ball.update(this.platforms, this.clouds);\n    }\n\n    endScreen () {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 50px \"myFont\"';\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"GAME OVER\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 200);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"YOUR SCORE: \" + this.score, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 300);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 24px \"myFont\"';\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"[Enter] or [Spacebar] to Start a New Game\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 500);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    }\n\n    gameOver() {\n        this.state = false;\n        setTimeout(() => {\n            this.endScreen();\n        }, 100);\n        // document.addEventListener('click', eventStartGame);\n        document.addEventListener('keydown', _index__WEBPACK_IMPORTED_MODULE_0__[\"handleKeyDown\"]);\n        console.log('hi');\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, c, keys, start, game, eventStartGame, handleKeyDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return keys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventStartGame\", function() { return eventStartGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleKeyDown\", function() { return handleKeyDown; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_screen */ \"./src/start_screen.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n//code will be validated more strictly - can't have undeclared var's ect\n\"use strict\" \n\nconst canvas = document.querySelector('canvas')\nconst c = canvas.getContext('2d')\n\ncanvas.width = 700;\ncanvas.height = 550;\n\nconst mouse = {\n    x: undefined,\n    y: undefined\n}\n\nconst keys = [];\n\nconst start = new _start_screen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](c, canvas);\nlet game;\nstart.startGameScreen();\n\n\n// Event Listeners\ndocument.addEventListener('mousemove', (event) => {\n    mouse.x = event.clientX\n    mouse.y = event.clientY\n})\n\nconst eventStartGame = () => {\n  game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  game.gameStart();\n\n  // document.removeEventListener('click', eventStartGame);\n  document.removeEventListener('keydown', handleKeyDown);\n}\n\nconst handleKeyDown = (e) => {\n  if (e.keyCode === 13 || e.keyCode === 32) {\n    console.log(e.keyCode);\n    eventStartGame();\n  }\n}\n\n// document.addEventListener('click', eventStartGame);\ndocument.addEventListener('keydown', handleKeyDown);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _jumper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jumper */ \"./src/jumper.js\");\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ \"./src/platform.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clouds */ \"./src/clouds.js\");\n\n\n\n\n\n\n\nlet platformWidth = 100;\nlet platformHeight = 20;\n\nclass MovingBall extends _jumper__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(x, y, dy, dx, radius, color) {\n    super(x, y, dy, dx, radius, color);\n  }\n\n  jump() {\n    if (!this.isJumping && !this.isFalling) {\n      this.gravity = 0;\n      this.jumpSpeed = 27;\n      this.isJumping = true;\n    }\n  }\n\n  checkJump(platforms, clouds) {\n    // if ball is below canvas height, jump normal, else move platform up\n    if (this.y > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height * 0.3) {\n      this.y -= this.jumpSpeed;\n    } else {\n      _index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score += 1;\n      clouds.forEach((cloud) => {\n        if (cloud[1] > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height) {\n          cloud[0] = Math.random() * _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width;\n          cloud[1] = -5;\n        } else {\n          cloud[1] += this.jumpSpeed;\n        }\n      })\n      platforms.forEach((platform) => {\n        platform.y += this.jumpSpeed;\n        // if platform is above canvas height, generate a new one\n        if (platform.y > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height) {\n          platform.x = Math.random() * (_index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width - platformWidth);\n          platform.y = platform.y - _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height;\n        }\n      });\n    }\n    this.jumpSpeed -= 1;\n    if (this.jumpSpeed == 0) {\n      this.isJumping = false;\n      this.isFalling = true;\n      this.gravity = 1;\n    }\n  }\n\n  checkFall() {\n    if (this.y < _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].height - this.radius) {\n      this.y += this.gravity;\n      this.gravity += 1;\n    } else {\n      if (_index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score === 0) {\n        this.fallStop();\n      }\n      _index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].gameOver();\n    }\n  }\n\n  fallStop() {\n    this.isFalling = false;\n    this.gravity = 0;\n    this.jump();\n  }\n\n  score() {\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].font = 'bold 36px \"MyFont';\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillText(_index__WEBPACK_IMPORTED_MODULE_3__[\"game\"].score, 34, 38);\n  }\n\n  draw() {\n    this.score()\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fillStyle = this.color;\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].stroke();\n    _index__WEBPACK_IMPORTED_MODULE_3__[\"c\"].closePath();\n  }\n\n  update(platforms, clouds) {\n    //start the jump\n    this.jump();\n\n    //check the balls status\n    if (this.isJumping) this.checkJump(platforms, clouds);\n    if (this.isFalling) this.checkFall();\n\n    //check every frame to see if the ball collides with a platform\n\n    // mouse movement\n    // this.x + this.radius < mouse.x;\n    //this.x - this.radius > mouse.x ||\n    if (_index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][68] || _index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][39]) {\n      this.velocity.x = 10;\n    } else if (_index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][65] || _index__WEBPACK_IMPORTED_MODULE_3__[\"keys\"][37]) {\n      this.velocity.x = -10;\n    } else {\n      this.velocity.x = 0;\n    }\n\n    if (this.x < 0 || this.x > _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width) {\n      this.x = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrap(this.x, _index__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width);\n    }\n    this.x += this.velocity.x;\n    Object(_platform__WEBPACK_IMPORTED_MODULE_2__[\"checkCollision\"])(this);\n\n    this.draw();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingBall);\n\n//# sourceURL=webpack:///./src/moving_jumper.js?");

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: checkCollision, createPlatforms, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCollision\", function() { return checkCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlatforms\", function() { return createPlatforms; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nlet numOfPlatforms = 11;\nconst platforms = [];\nlet platformWidth = 100;\nlet platformHeight = 20;\n\nclass Platform {\n    constructor (x, y) {\n        this.x = Math.floor(x);\n        this.y = y;\n    }\n    \n    onCollide (ball) {\n        ball.fallStop();\n    }\n\n    draw () {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"#a57d50\";\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillRect(this.x, this.y, platformWidth, platformHeight);\n    };\n\n};\n\n//  400 < x < 480 &&    200 < y < 250\nconst checkCollision = (object) => {\n  platforms.forEach((platform) => {\n    if (\n      object.isFalling &&\n      object.x <= platform.x + platformWidth &&\n      object.x >= platform.x &&\n      object.y + object.radius >= platform.y &&\n      object.y + object.radius <= platform.y + platformHeight\n    ) {\n      platform.onCollide(object);\n    }\n  });\n};\n\nconst createPlatforms = () => {\n  let position = 0;\n  for (let i = 0; i < numOfPlatforms; i++) {\n    platforms[i] = new Platform(\n      Math.random() * (_index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - platformWidth),\n      position\n    );\n\n    if (position < _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height - platformHeight)\n      position += Math.floor(_index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height / numOfPlatforms);\n  }\n  return platforms;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);\n\n\n//# sourceURL=webpack:///./src/platform.js?");

/***/ }),

/***/ "./src/start_screen.js":
/*!*****************************!*\
  !*** ./src/start_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass StartScreen {\n\n  startGameScreen() {\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"#d0e7f9\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].rect(0, 0, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 36px \"myFont\"';\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"READY TO JUMP?\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 200);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].beginPath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 34px \"myFont\"';\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"to Start Game\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 350);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillStyle = \"Black\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].font = 'bold 34px \"myFont\"';\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].textAlign = \"center\";\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fillText(\"[Enter] or [Spacebar]\", _index__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / 2, 300);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].fill();\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"c\"].closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartScreen);\n\n//# sourceURL=webpack:///./src/start_screen.js?");

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