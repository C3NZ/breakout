import {Grid} from './grid.js'

const diffs = {
    "easy":0,
    "medium":1,
    "hard":2
}

export class Level {
    constructor(canvas) {
        this.difficulty = diffs["easy"];
        this.grid = new Grid(canvas);
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
        this.grid.update();
    }

    draw(ctx) {
        this.grid.draw(ctx);
    }
}
