"use strict";

const border = {
    color: "#776e65",
    size: pixelSize,
    width: canvas.width,
    height: canvas.height,
    
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.size);
        ctx.fillRect(this.width - this.size, 0, this.size, this.height);
        ctx.fillRect(0, this.height - this.size, this.width, this.size);
        ctx.fillRect(0, 0, this.size, this.height);
        ctx.fillRect(130, 0, this.size, this.width);
        ctx.fillRect(0, 130, this.width, this.size);
        ctx.fillRect(260, 0, this.size, this.width);
        ctx.fillRect(0, 260, this.width, this.size);
        ctx.fillRect(390, 0, this.size, this.width);
        ctx.fillRect(0, 390, this.width, this.size);
        ctx.fillRect(520, 0, this.size, this.width);
        ctx.fillRect(0, 520, this.width, this.size);
    }
}