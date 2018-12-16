import {Grid} from './grid.js';
import {Background} from './background.js';

const diffs = {
    "easy":0,
    "medium":1,
    "hard":2
}

export class Level {
    constructor(canvas) {
        this.difficulty = diffs["easy"];
        this.grid = new Grid(1); 
        this.background = new Background(canvas); 
        this.game = null; 
    } 
    
    attachGame(game) {
        if(this.game === null) {
            this.game = game;
            this.grid.attachGame(game);
        }else{
            console.log('this entity has already been bounded to the game')
        }
    } 
    
    update() { 
        this.background.update();
        this.grid.update();
    }

    draw(ctx) {
        this.background.draw(ctx)
        this.grid.draw(ctx);
    }
}
