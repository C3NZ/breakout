export class Player {
    constructor(canvas) {
        //Paddle configurations
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - paddleWidth) / 2;
        this.score = 0;
        this.lives = 3;
        this.points = 0;
        this.rightPressed = false;
        this.leftPressed = false;
    }
    
    get score() {
        return this.score;
    }

    set score(newScore) {
        this.points = this.points + newScore;
        this.score = newScore;
    }

    get lives() {
        return this.lives;
    }

    get points() {
        return this.points;
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
        if(this.rightPressed && this.paddleX < canvas.width - this.paddleWidth){
            this.paddleX += 7;
        }
        else if(this.leftPressed && this.paddleX > 0){
            this.paddleX -= 7;
        }

    }
    
    //draw the player
    draw(ctx) {

    }
}
