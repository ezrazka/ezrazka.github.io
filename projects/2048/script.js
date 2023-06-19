"use strict";

function addBlock() {
    let choices = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === null) {
                choices.push({x: i, y: j});
            }
        }
    }

    if (choices.length > 0) {
        let randomIndex = choices[Math.floor(Math.random() * choices.length)];
        let randomNum = Math.floor(Math.random() * 10) === 0 ? 4 : 2;

        grid[randomIndex.x][randomIndex.y] = randomNum;
    }
}

function moveRight() {
    grid.forEach((row) => {
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === null) {
                continue;
            }
  
            if (row[i+1] === null) {
                row[i+1] = row[i];
                row[i] = null;
                i = -1;
            } else if (row[i + 1] === row[i]) {
                row[i+1] *= 2;
                row[i] = null;
            }
        }
    });
}
  
function moveLeft() {
    grid.forEach((row) => {
        for (let i = row.length - 1; i > 0; i--) {
            if (row[i] === null) {
                continue;
            }

            if (row[i-1] === null) {
                row[i-1] = row[i];
                row[i] = null;
                i = row.length;
            } else if (row[i - 1] === row[i]) {
                row[i-1] *= 2;
                row[i] = null;
            }
        }
    });
}
  
function moveUp() {
    grid = transposeGrid(grid);
    moveLeft();
    grid = transposeGrid(grid);
}

function moveDown() {
    grid = transposeGrid(grid);
    moveRight();
    grid = transposeGrid(grid);
}
  
  
function transposeGrid(grid) {
    return grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
}
  

function checkWin() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 2048) {
                return true;
            }
        }
    }
    return false
}

function checkGameOver() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === null) {
                return false;
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === grid[i][j+1] || grid[j][i] === grid[j+1][i]) {
                return false;
            }
        }
    }

    return true;
}


document.querySelector("#canvas").addEventListener('click', function(event) {
    if (!start){
        startButton.checkClicked(event);
    }
});

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case "ArrowUp":
            moveUp();
            if (checkWin()) {
                win = true;
            }
            if (checkGameOver()) {
                gameOver = true;
            }
            addBlock()
            break;
        case "ArrowDown":
            moveDown();
            if (checkWin()) {
                win = true;
            }
            if (checkGameOver()) {
                gameOver = true;
            }
            addBlock()
            break;
        case "ArrowRight":
            moveRight();
            if (checkWin()) {
                win = true;
            }
            if (checkGameOver()) {
                gameOver = true;
            }
            addBlock()
            break;
        case "ArrowLeft":
            moveLeft();
            if (checkWin()) {
                win = true;
            }
            if (checkGameOver()) {
                gameOver = true;
            }
            addBlock()
            break;
    }
});

addBlock();
addBlock();

const mainloop = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    border.draw();

    if (start) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (grid[i][j] !== null) {
                    block.drawSquare(blockCoords[i][j].x, blockCoords[i][j].y, grid[i][j]);
                }
            }
        }
    } else {
        startButton.draw();
    }
    
    if (win) {
        winText.draw();
        clearInterval(mainloop);
        document.getElementById("canvas").classList.add("gameEnd");
    }
    if (gameOver) {
        gameOverText.draw();
        clearInterval(mainloop);
        document.getElementById("canvas").classList.add("gameEnd");
    }
}, 1000/fps);