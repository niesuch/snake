/* global START_FPS, SCORE_POSITION_X, SCORE, SCORE_POSITION_Y, SNAKE_START_X, SNAKE_START_Y, SNAKE_SIZE, SNAKE, FOOD, START_INFO_Y, START_INFO_X, START_INFO, INFO, BOARD_HEIGHT, BOARD_WIDTH, CONTEXT, UPDATE_FPS */

var GAME = {
    fps: null,
    lose: null,
    start: function () {
        this.lose = false;
        this.fps = START_FPS;

        SCORE.init(SCORE_POSITION_X, SCORE_POSITION_Y);
        SNAKE.init(SNAKE_SIZE, SNAKE_START_X, SNAKE_START_Y);
        FOOD.set();
    },
    stop: function () {
        this.lose = true;

        INFO.init(START_INFO, START_INFO_X, START_INFO_Y);
        INFO.draw();
    },
    reset: function () {
        CONTEXT.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    },
    updateFPS: function () {
        this.fps += UPDATE_FPS;
    }
};