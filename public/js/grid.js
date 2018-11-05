import {BasicBrick} from './brick.js';

const brickTypes = {
    0: BasicBrick
}

//Classes for creating level grids
class Grid {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.brickRowCount = 3 * difficulty;
        this.brickColumnCount = 5 * difficulty;
        this.bricks = []
    }
    
    //Generate all the bricks
    generateBricks() {
        for(let col = 0; col < this.brickColumnCount; col++) {
            this.bricks[col] = [];
            for(let row = 0; row < this.brickRowCount; row++){
                const Brick = brickTypes[difficulty]
                this.bricks[col][row] = new Brick(0, 0, 1)
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
                const ball = this.game.ball;
                if(brick.status == 1) {
                    
                    //Calculate the x and y value of the brick by it's column/row, the padding we want, and the offset we created
                    const brickX = (col * (brick.brickWidth + brick.brickPadding)) + brick.brickOffsetLeft;
                    const brickY = (row * (brick.brickHeight + brick.brickPadding)) + brick.brickOffsetTop;
                    brick.x = brickX;
                    brick.y = brickY;
                    
                    brick.hslValue = 180 +  Math.floor(Math.random() * 75)

                    if(detectCollision(ball, brick)){
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
