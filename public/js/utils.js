export class InputHandler {
    constructor(game) {
        this.game = game;
        this.player = this.game.entities.player;
        this.canvas = this.game.entities.canvas;
    }
    
    //handle key down events
    handleKeyDown(e) {
        if(e.keyCode == 39) {
            this.player.rightPressed = true;
        }
        else if(e.keyCode == 37) {
            this.player.leftPressed = true;
        }
    }
    
    //Handle key up events
    handleKeyUp(e) {
        if(e.keyCode ==  39) {
            this.player.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            this.player.leftPressed = false;
        }
    }
    
    //Handle mouse movements
    handleMouseMovement(e) {
        const relativeX = e.clientX - this.canvas.offsetLeft;
        
        if(relativeX > 0 && relativeX < this.canvas.width) {
            this.player.paddle = relativeX - this.player.paddleWidth / 2;
        }
    }
    //Initialize all user input handlers
    initHandlers(inputHandler) {
        document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
        document.addEventListener("keyup", this.handleKeyUp.bind(this), false);
        document.addEventListener("mousemove", this.handleMouseMovement.bind(this), false);
    }
}


