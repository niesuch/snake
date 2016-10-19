/* global SNAKE_COLOR, CONTEXT, BOARD_WIDTH, BOARD_HEIGHT, GAME, FOOD, SCORE, CHANGE_FPS, MAX_FPS */

var SNAKE = {
    size: null,
    coor_x: null,
    coor_y: null,
    coors: [],
    direction: 'left',
    color: SNAKE_COLOR,
    init: function (size, coor_x, coor_y) {
        this.size = size;
        this.coor_x = coor_x;
        this.coor_y = coor_y;
        this.coors = [];
        this.direction = 'left';

        this.pushToCoorsArray();
    },
    draw: function () {
        for (var i = 0; i < this.coors.length; i++) {
            var coors = this.coors[i].split(',');
            var x = parseInt(coors[0]);
            var y = parseInt(coors[1]);

            CONTEXT.fillStyle = this.color;
            CONTEXT.beginPath();
            CONTEXT.moveTo(x - (this.size / 2), y - (this.size / 2));
            CONTEXT.lineTo(x + (this.size / 2), y - (this.size / 2));
            CONTEXT.lineTo(x + (this.size / 2), y + (this.size / 2));
            CONTEXT.lineTo(x - (this.size / 2), y + (this.size / 2));
            CONTEXT.closePath();
            CONTEXT.fill();
        }
    },
    move: function () {
        switch (this.direction) {
            case 'up':
                this.coor_y -= this.size;
                break;
            case 'down':
                this.coor_y += this.size;
                break;
            case 'left':
                this.coor_x -= this.size;
                break;
            case 'right':
                this.coor_x += this.size;
                break;
        }

        this.checkCollision();
        this.checkIsFoodEaten();
        this.pushToCoorsArray();
    },
    checkCollision: function () {
        if (this.coor_x < this.size / 2 || this.coor_x > BOARD_WIDTH ||
                this.coor_y < this.size / 2 || this.coor_y > BOARD_HEIGHT ||
                this.coors.indexOf(this.coor_x + ',' + this.coor_y) >= 0) {
            GAME.stop();
        }
    },
    checkIsFoodEaten: function () {
        if (this.coor_x === FOOD.coor_x && this.coor_y === FOOD.coor_y) {
            SCORE.update();
            FOOD.set();

            if (SCORE.score % CHANGE_FPS === 0 && GAME.fps < MAX_FPS) {
                GAME.updateFPS();
            }
        } else {
            this.coors.shift();
        }
    },
    pushToCoorsArray: function () {
        this.coors.push(this.coor_x + ',' + this.coor_y);
    }
};