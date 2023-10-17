"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pixelSize = 10;
const blockSize = 120;
const column = canvas.width / blockSize;
const row = column;

const blockCoords = [
    [{x: 1, y: 1}, {x: 1, y: 14}, {x: 1, y: 27}, {x: 1, y: 40}],
    [{x: 14, y: 1}, {x: 14, y: 14}, {x: 14, y: 27}, {x: 14, y: 40}],
    [{x: 27, y: 1}, {x: 27, y: 14}, {x: 27, y: 27}, {x: 27, y: 40}],
    [{x: 40, y: 1}, {x: 40, y: 14}, {x: 40, y: 27}, {x: 40, y: 40}]
];

// CONFIG GAME
const fps = 13;
let start = false;
let win = false;
let gameOver = false;

let score = 0;
let grid = Array.from({ length: 4 }, () => Array(4).fill(null));