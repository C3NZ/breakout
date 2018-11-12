import {Level} from './levels.js';
import {Player} from './player.js';
import {Ball} from './ball.js'
import {InputHandler} from './utils.js';

//wrapper function to start the game with customizable options.
//You can customize the canvas, level, and player that you can use 
export function startGame(options={}) {
    const canvas = options.canvas || document.getElementById("myCanvas") 
    const ctx = canvas.getContext("2d");
    let level = options.level || new Level(canvas);
    let player = options.player || new Player(canvas);
    let ball = options.ball || new Ball(canvas);
    let entities = {
        level: level, 
        ball: ball, 
        player: player
    }
    const game = new Game(canvas, ctx, entities);
    function play() {
        game.play();
        requestAnimationFrame(play);
    }
    play();
}

//Instance of the game.
//Concerned with in game updating and rendering
class Game {
    constructor(canvas, ctx, entities) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = entities;
        
        for (const entity of Object.keys(entities)) {
            this.entities[entity].attachGame(this);
        }
        
        this.inputHandler = new InputHandler(this);
        this.inputHandler.initHandlers();
        this.running = true;
    }

    update() {
        for(const entity of Object.keys(this.entities)) {
            this.entities[entity].update();
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(const entity of Object.keys(this.entities)) {
            this.entities[entity].draw(this.ctx);
        }
    }

    play() {
        this.update();
        this.draw();
    }

}

startGame();
