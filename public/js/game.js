import { Level } from './levels.js';
import { Player } from './player.js';
import { Ball } from './ball.js'
import { InputHandler } from './utils.js';

// Instance of the game.
// Concerned with in game updating and rendering
class Game {
    constructor(canvas, ctx, entities) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = entities;

        // Iterate through all entities
        // eslint-disable-next-line
        for (const entity of Object.keys(entities)) {
            this.entities[entity].attachGame(this);
        }

        this.inputHandler = new InputHandler(this);
        this.inputHandler.initHandlers();
        this.running = true;
    }

    update() {
        // Iterate through all entities
        // eslint-disable-next-line
        for(const entity of Object.keys(this.entities)) {
            this.entities[entity].update();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Iterate through all entities
        // eslint-disable-next-line
        for(const entity of Object.keys(this.entities)) {
            this.entities[entity].draw(this.ctx);
        }
    }

    play() {
        this.update();
        this.draw();
    }
}

// wrapper function to start the game with customizable options.
// You can customize the canvas, level, and player that you can use
function startGame(options = {}) {
    const canvas = options.canvas || document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const level = options.level || new Level(canvas);
    const player = options.player || new Player(canvas);
    const ball = options.ball || new Ball(canvas);
    const entities = {
        level,
        ball,
        player,
    };
    const game = new Game(canvas, ctx, entities);

    // Closure to keep running the game over and over again
    function play() {
        game.play();
        requestAnimationFrame(play);
    }
    play();
}

startGame();
