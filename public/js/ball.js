export class Ball {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.dx = 2;
        this.dy = 2;
        this.ballRadius = 10;
        this.game = null;
    }

    attachGame(game) {
        // Attach a game instance to this game object
        if (this.game === null) {
            this.game = game;
        } else {
            // eslint-disable-next-line
            console.log("You've already set a game for this object");
        }
    }

    // eslint-disable-next-line
    update() {
        // Update the ball
        const { player } = this.game.entities;
        const { canvas } = this.game;

        // Collision detection logic for the x axis. Constrains the ball to both walls
        // eslint-disable-next-line
        if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < 0 + this.ballRadius){
            this.dx = -this.dx;
        }

        // Collision detection logic for the y axis.
        // If the ball hits the bottom of the screen, game over!
        if (this.y + this.dy < 0 + this.ballRadius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvas.height - this.ballRadius) {
            // Check if the ball hit the paddle, if not GG
            if (this.x > player.paddleX && this.x < player.paddleX + player.paddleWidth) {
                this.dy = -this.dy;
            } else {
                player.lives -= 1;
                // check if the player has any lives to spare
                if (!player.lives) return document.location.reload();

                this.x = 100;
                this.y = 100;
                player.paddleX = (canvas.width - player.paddleWidth) / 2;
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }

    draw(ctx) {
        // Draw the ball on the screen
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();
    }

    setYVelocity(newDy) {
        // Change the velocity of the ball
        this.dy = newDy;
    }
}
