/* global KEYS, DIRS, SNAKE, GAME, FOOD, SCORE */

document.body.onkeydown = function (e) {
    var lastDir = KEYS[e.keyCode] || null;

    if (['up', 'down', 'left', 'right'].indexOf(lastDir) >= 0
            && lastDir !== DIRS[SNAKE.direction]) {
        SNAKE.direction = lastDir;
    } else if (['start'].indexOf(lastDir) >= 0 && GAME.lose) {
        GAME.start();
    }
};

function loop() {
    if (!GAME.lose) {
        GAME.reset();
        SNAKE.move();
        SNAKE.draw();
        FOOD.draw();
        SCORE.draw();
    }

    setTimeout(function () {
        REQUEST_ANIMATION_FRAME(loop);
    }, 1000 / GAME.fps);
}

REQUEST_ANIMATION_FRAME(loop);