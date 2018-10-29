import {Level} from './level.js';
import {Player} from './player.js';
import {Ball} from './ball.js'
import {InputHandler, initHandlers} from './utils.js';

//wrapper function to start the game with customizable options.
//You can customize the canvas, level, and player that you can use 
export function startGame(options={}) {
    const canvas = options.canvas || document.getElementById("myCanvas") 
    const ctx = canvas.getContext("2d");
    let level = options.level || new Level();
    let player = options.player || new Player();
    let ball = options.ball || new Ball();
    let entities = [level, ball, player]
    const game = new Game(canvas, ctx, entities);
    game.play();
}

//Instance of the game.
//Concerned with in game updating and rendering
class Game {
    constuctor(canvas, ctx, entities) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = entities;
        
        for (entity in entities) {
            this.entities[entity].game = this;
        }
        
        this.inputHandler = new InputHandler(this);
        initHandlers(this.inputHandler);
        this.running = true;
    }

    get level() {
        return this.level;
    }

    set level(level) {
        this.level = level;
    }

    get player() {
        return this.player;
    }

    set player() {
        this.player = player
    }

    isGameOver() {
        if (this.player.lives == 0) {
            return true;
        }

        return false;
    }

    isLevelBeat() {
        const player = this.player;
        const level = this.level;
        
        if(player.score == level.totalBricks) {
                
        }
    }

    update() {
        for(entity in this.entities) {
            this.entities[entity].update();
        }
        this.isLevelBeat();
    }
    
    draw(ctx) {
        for(entity in this.entities) {
            this.entities[entity].draw(ctx);
        }
    }

    play() {
        this.update();
        this.draw(this.ctx);
        requestAnimationFrame(this.play);
    }

 }
