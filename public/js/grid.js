import {BasicBrick} from './brick.js';

const brickTypes = {
    0: BasicBrick
}

//Classes for creating level grids
export class Grid {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.brickRowCount = 3 * difficulty;
        this.brickColumnCount = 5 * difficulty;
        this.bricks = []
        this.game = null;
        this.generateBricks();
    }
    
    attachGame(game) {
        if(this.game === null) {
            this.game = game;
        }else{
            console.log("You've already attached a game '")
        }
    }

    //Generate all the bricks
    generateBricks() {
        for(let col = 0; col < this.brickColumnCount; col++) {
            this.bricks[col] = [];
            for(let row = 0; row < this.brickRowCount; row++){
                const Brick = brickTypes[this.difficulty]
                this.bricks[col][row] = new BasicBrick(0, 0, 1)
            }
        }
    }

    //Detec collision between the ball and the brick
    detectCollision(ball, brick) {
        if(ball.x > brick.x && ball.x < brick.x + this.brickWidth && ball.y > brick.y && ball.y < brick.y + brickHeight) {
            ball.dy = -ball.dy;
            brick.status = 0;
            return true;
        }
        return false;

    }

    //Update the grid
    update() {
        for(let col = 0; col < this.brickColumnCount; col++) {
            for(let row = 0; row < this.brickRowCount; row++) {
                const brick = this.bricks[col][row];
                const ball = this.game.entities.ball;
                if(brick.status == 1) {
                    
                    //Calculate the x and y value of the brick by it's column/row, the padding we want, and the offset we created
                    const brickX = (col * (brick.brickWidth + brick.brickPadding)) + brick.brickOffsetLeft;
                    const brickY = (row * (brick.brickHeight + brick.brickPadding)) + brick.brickOffsetTop;
                    brick.x = brickX;
                    brick.y = brickY;
                    console.log(brick.x)
                    console.log(brick.y)
                    brick.hslValue = 180 +  Math.floor(Math.random() * 75)

                    if(this.detectCollision(ball, brick)){
                        const player = this.game.player;
                        player.score++;
                    }
                }
            }
        }
    }

    //Draw to the grid
    draw(ctx) {
        for(let col = 0; col < this.brickColumnCount; col++) {
            for(let row = 0; row < this.brickRowCount; row++) {
                const brick = this.bricks[col][row];
                if(brick.status == 1) {
                    //Draw an individual brick
                    ctx.beginPath();
                    ctx.rect(brick.x, brick.y, brick.brickWidth, brick.brickHeight);
                    ctx.fillStyle = `hsl(${brick.hslValue}, 100%, 50%)`;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}
