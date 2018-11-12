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
        if(this.game === null) {
            this.game = game;
        }else {
            console.log("You've already set a game for this object")
        }
    }

    update() {
        const player = this.game.entities.player;
        const canvas = this.game.canvas;
        
        //Collision detection logic for the x axis. Constrains the ball to both walls
        if(this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < 0 + this.ballRadius){
            dx = -dx;
        }

        //Collision detection logic for the y axis.
        //If the ball hits the bottom of the screen, game over!
        if(this.y + this.dy < 0 + this.ballRadius){
            this.dy = -this.dy;
        }
        else if(this.y + this.dy > canvas.height - this.ballRadius){
            //Check if the ball hit the paddle, if not GG
            if(this.x > this.paddleX && x < player.paddleX + player.paddleWidth){
                this.dy = -this.dy;
            }else{
                player.lives--;
                if(!player.lives) {
                    return document.location.reload();
                }else {
                    this.x = 100;
                    this.y = 100
                    player.paddleX = (canvas.width - player.paddleWidth) / 2;
                }
            }
        }
    
        this.x += this.dx;
        this.y += this.dy;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}
