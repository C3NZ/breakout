import { BasicBrick } from './brick.js';

// Classes for creating level grids
export class Grid {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.brickRowCount = 5 * difficulty;
        this.brickColumnCount = 6 * difficulty;
        this.bricks = [];
        this.game = null;
        this.generateBricks();
    }

    attachGame(game) {
        if (this.game === null) {
            this.game = game;
        } else {
            // Check to make sure that no more than one game instance is attached
            // eslint-disable-next-line
            console.log("You've already attached a game '")
        }
    }

    // Generate all the bricks
    generateBricks() {
        for (let col = 0; col < this.brickColumnCount; col += 1) {
            this.bricks[col] = [];
            for (let row = 0; row < this.brickRowCount; row += 1) {
                this.bricks[col][row] = new BasicBrick(0, 0, 1);
            }
        }
    }

    // Detect collision between the ball and the brick
    // eslint-disable-next-line
    detectCollision (ball, brick) {
        if (ball.x > brick.x && ball.x < brick.x + brick.width && ball.y > brick.y && ball.y < brick.y + brick.height) {
            ball.setYVelocity(-ball.dy);
            brick.setStatus(0);
            return true;
        }
        return false;
    }

    // Update the grid
    update() {
        for (let col = 0; col < this.brickColumnCount; col += 1) {
            for (let row = 0; row < this.brickRowCount; row += 1) {
                const brick = this.bricks[col][row];
                const { ball } = this.game.entities;
                if (brick.status === 1) {
                    // Calculate the x and y value of the brick by it's column/row, the padding we want, and the offset we created
                    const brickX = (col * (brick.width + brick.brickPadding)) + brick.brickOffsetLeft;
                    const brickY = (row * (brick.height + brick.brickPadding)) + brick.brickOffsetTop;
                    brick.x = brickX;
                    brick.y = brickY;

                    // Check for collision, if it occurred, add to the player score
                    if (this.detectCollision(ball, brick)) {
                        const { player } = this.game.entities;
                        player.score += 1;

                        if (player.score === this.brickColumnCount * this.brickRowCount) {
                            window.alert('You have won the game!');
                            return document.location.reload();
                        }
                    }
                }
            }
        }
    }

    // Draw to the grid
    draw(ctx) {
        for (let col = 0; col < this.brickColumnCount; col += 1) {
            for (let row = 0; row < this.brickRowCount; row += 1) {
                const brick = this.bricks[col][row];
                if (brick.status === 1) {
                    // Draw an individual brick
                    ctx.beginPath();
                    ctx.rect(brick.x, brick.y, brick.width, brick.height);
                    ctx.fillStyle = `hsl(${brick.hslValue}, 100%, 0%)`;
                    ctx.strokeStyle = 'white';
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    }
}
