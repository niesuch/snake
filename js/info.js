/* global START_INFO_COLOR, CONTEXT */

var INFO = {
    info: null,
    coor_x: null,
    coor_y: null,
    color: START_INFO_COLOR,
    init: function(info, coor_x, coor_y) {
        this.info = info;
        this.coor_x = coor_x;
        this.coor_y = coor_y;
    },
    draw: function() {
        CONTEXT.fillStyle = this.color;
        CONTEXT.font = '25px Arial';
        CONTEXT.textAlign = 'center';
        CONTEXT.fillText(this.info, this.coor_x, this.coor_y);
    }
};