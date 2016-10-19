/* global SCORE_COLOR, CONTEXT, UPDATE_SCORE */

var SCORE = {
    score: 0,
    coor_x: null,
    coor_y: null,
    color: SCORE_COLOR,
    init: function (coor_x, coor_y) {
        this.score = 0;
        this.coor_x = coor_x;
        this.coor_y = coor_y;
    },
    draw: function () {
        CONTEXT.fillStyle = this.color;
        CONTEXT.font = '20px Arial';
        CONTEXT.textAlign = 'center';
        CONTEXT.fillText('Score: ' + this.score, this.coor_x, this.coor_y);
    },
    update: function () {
        this.score += UPDATE_SCORE;
    }
};