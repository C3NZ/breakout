import {Level} from './level.js';
import {Player} from './player.js';

//wrapper function to start the game with customizable options.
//You can customize the canvas, level, and player that you can use 
export function startGame(options={}) {
    const canvas = options.canvas || document.getElementById("myCanvas") 
    const ctx = canvas.getContext("2d");
    let level = options.level || new Level();
    let player = options.player || new Player();
    const game = new Game(canvas, ctx, level, player);
    game.play();
}

//Instance of the game.
//Concerned with in game updating and rendering
class Game {
    constuctor(canvas, ctx, level, player) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.level = level;
        this.player = player;
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
    
    update() {
        this.player.update();
        this.level.update();
    }
    
    draw(ctx) {
        this.player.draw(ctx);
        this.level.draw(ctx);
    }

    play() {
        this.update();
        this.draw(this.ctx);
        requestAnimationFrame(this.play);
    }

 }
