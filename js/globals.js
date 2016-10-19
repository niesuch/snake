var CANVAS = document.getElementById("snake");
var CONTEXT = CANVAS.getContext("2d");
var REQUEST_ANIMATION_FRAME = window.requestAnimationFrame;

var BOARD_WIDTH = CANVAS.width;
var BOARD_HEIGHT = CANVAS.height;

var UPDATE_SCORE = 10;
var SCORE_POSITION_X = BOARD_WIDTH / 7;
var SCORE_POSITION_Y = BOARD_HEIGHT * 0.10;
var SCORE_COLOR = 'black';

var UPDATE_FPS = 1;
var START_FPS = 10;
var MAX_FPS = 60;
var CHANGE_FPS = 50;

var SNAKE_SIZE = BOARD_WIDTH / 40;
var SNAKE_START_X = BOARD_WIDTH / 2 + SNAKE_SIZE / 2;
var SNAKE_START_Y = BOARD_HEIGHT / 2 + SNAKE_SIZE / 2;
var SNAKE_COLOR = 'grey';

var FOOD_COLOR = 'red';

var START_INFO = 'PRESS SPACEBAR';
var START_INFO_COLOR = 'red';
var START_INFO_X = BOARD_WIDTH / 2 + SNAKE_SIZE / 2;
var START_INFO_Y = BOARD_HEIGHT / 2 + SNAKE_SIZE / 2;

var KEYS = {
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right',
    32: 'start'
};

var DIRS = {
    'up': 'down',
    'left': 'right',
    'right': 'left',
    'down': 'up'
};