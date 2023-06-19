"use strict";

const block = {
    size: blockSize,
    colorCodes: {
        2: "#fcefe6",
        4: "#f2e8cb",
        8: "#f5b682",
        16: "#f29446",
        32: "#ff775c",
        64: "#e64c2e",
        128: "#ede291",
        256: "#fce130",
        512: "#ffdb4a",
        1024: "#f0b922",
        2048: "#fad74d"    
    },

    drawSquare(row, column, value) {
        let x = column * pixelSize;
        let y = row * pixelSize;

        ctx.fillStyle = this.colorCodes[value];
        ctx.fillRect(x, y, this.size, this.size);

        x += 60;
        y += 60;
        ctx.font = "50px Courier";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "center";
        ctx.fillText(value, x, y);
    }
}