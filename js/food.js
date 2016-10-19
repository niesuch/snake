/* global FOOD_COLOR, SNAKE, CONTEXT */

var FOOD = {
    size: null,
    coor_x: null,
    coor_y: null,
    color: FOOD_COLOR,
    set: function () {
        var temp = true;

        while (temp) {
            this.size = SNAKE.size;
            this.coor_x = (Math.ceil(Math.random() * 10) * this.size * 4) - this.size / 2;
            this.coor_y = (Math.ceil(Math.random() * 10) * this.size * 3) - this.size / 2;

            for (var i = 0; i < SNAKE.coors.length; i++) {
                var coors = SNAKE.coors[i].split(',');
                var x = parseInt(coors[0]);
                var y = parseInt(coors[1]);

                if (x === this.coor_x && y === this.coor_y) {
                    break;
                } else if (i === SNAKE.coors.length - 1) {
                    temp = false;
                }
            }
        }
    },
    draw: function () {
        CONTEXT.fillStyle = this.color;
        CONTEXT.beginPath();
        CONTEXT.moveTo(this.coor_x - (this.size / 2), this.coor_y - (this.size / 2));
        CONTEXT.lineTo(this.coor_x + (this.size / 2), this.coor_y - (this.size / 2));
        CONTEXT.lineTo(this.coor_x + (this.size / 2), this.coor_y + (this.size / 2));
        CONTEXT.lineTo(this.coor_x - (this.size / 2), this.coor_y + (this.size / 2));
        CONTEXT.closePath();
        CONTEXT.fill();
    }
};