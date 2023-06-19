"use strict";

const startButton = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 12 * pixelSize,
    height: 6 * pixelSize,
    color: "black",
    textColor: "white",
    font: "32px Courier",
    align: "center",
    baseline: "middle",

    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

        ctx.fillStyle = this.textColor;
        ctx.font = this.font;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText("Start", this.x, this.y);
    },

    checkClicked: function(event) {
        if ((event.offsetX >= this.x - this.width / 2) &&
            (event.offsetY >= this.y - this.height / 2) &&
            (event.offsetX <= this.x + this.width / 2) &&
            (event.offsetY <= this.y + this.height / 2)){
            start = true;
        }
    }
}

const winText = {
    font: "60px Courier",
    color: "black",
    align: "center",
    baseline: "middle",

    draw: function() {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText("You Win!", x, y);
    }
}

const gameOverText = {
    font: "60px Courier",
    color: "black",
    align: "center",
    baseline: "middle",

    draw: function() {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText("Game Over", x, y);
    }
}