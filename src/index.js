import Util from './util'
import StartScreen from './start_screen';
import Game from './game';

//code will be validated more strictly - can't have undeclared var's ect
"use strict" 

export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = 700;
canvas.height = 550;

const mouse = {
    x: undefined,
    y: undefined
}

export const keys = [];

export const start = new StartScreen(c, canvas);
export let game;
start.startGameScreen();


// Event Listeners
document.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

export const eventStartGame = () => {
  start.state = false;
  game = new Game();
  game.gameStart();
  
  document.removeEventListener('keydown', handleKeyDown);
}

export const handleKeyDown = (e) => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    console.log(e.keyCode);
    eventStartGame();
  }
}

document.addEventListener('keydown', handleKeyDown);
