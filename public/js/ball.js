export class Ball {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.dx = 2;
        this.dy = 2;
        this.ballRadius = 10;
        this.game = null;
    }

    set attachGame(game) {
        if(game == null) {
            this.game = game;
        }else {
            console.log("You've already set a game for this object")
        }
    }


    update() {
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
            if(this.x > this.paddleX && x < this.paddleX + this.paddleWidth){
                this.dy = -this.dy;
            }else{
                lives--;
                if(!lives) {
                    return document.location.reload();
                }else {
                    this.x = canvas.width / 2;
                    this.y = canvas.height - 30;
                    this.dx = 2;
                    this.dy = 2;
                    player.paddleX = (canvas.width - paddleWidth) / 2;
                }
            }
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}
