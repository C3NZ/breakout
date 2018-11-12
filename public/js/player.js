export class Player {
    constructor(canvas) {
        //Paddle configurations
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - this.paddleWidth) / 2;
        this.score = 0;
        this.lives = 3;
        this.points = 0;
        this.rightPressed = false;
        this.leftPressed = false;
        this.game = null;
    }
    
    set addScore(newScore) {
        this.points = this.points + newScore;
        this.score = newScore;
    }

    attachGame(game) {
        if(this.game === null) {
            this.game = game;
        }else {
            console.log("You've already attached a game to this entity'")
        }
    }

    //Spend points in the future store
    spendPoints(spent) {
        this.points = this.points - spent;
    }
    
    //decrease the players life (Usually if the ball touches the ground)
    decreaseLife() {
        this.life = this.life - 1;
    }
    
    //Update the player
    update() {
        //Handle moving the paddle left and right if the user is pressing a button
        if(this.rightPressed && this.paddleX < this.game.canvas.width - this.paddleWidth){
            this.paddleX += 7;
        }
        else if(this.leftPressed && this.paddleX > 0){
            this.paddleX -= 7;
        }

    }


    //draw the score 
    drawScore(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + this.score, 8, 20);
    }

    //Draw the lives the player has left
    drawLives(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + this.lives, this.game.canvas.width - 65, 20);
    }


    //draw the player
    draw(ctx) {
        const canvas = this.game.canvas;
        this.drawScore(ctx);
        this.drawLives(ctx);
        ctx.beginPath();
        ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}
