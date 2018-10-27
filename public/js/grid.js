import {BasicBrick, MediumBrick, HardBrick} from './'
const brickTypes = {
    0: BasicBrick,
    1: MediumBrick,
    2: HardBrick
}

class Grid {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.brickRowCount = 3 * difficulty;
        this.brickColumnCount = 5 * difficulty;
        this.bricks = []
    }

    generateBricks() {
       
        for(let col = 0; col < this.brickColumnCount; col++) {
            this.bricks[col] = [];
            for(let row = 0; row < this.brickRowCount; row++){
                const Brick = brickTypes[difficulty]
                this.bricks[col][row] = new Brick(0, 0, 1)
    }
}


    }
}
