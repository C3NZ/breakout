export class InputHandler {
    constructor(game) {
        this.game = game;
    }
    
    //handle key down events
    handleKeyDown(e) {
        const player = this.game.player;
        if(e.keyCode == 39) {
            player.rightPressed = true;
        }
        else if(e.keyCode == 37) {
            player.leftPressed = true;
        }
    }
    
    //Handle key up events
    handleKeyUp(e) {
        const player = this.game.player;

        if(e.keyCode ==  39) {
            player.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            player.leftPressed = false;
        }
    }
    
    //Handle mouse movements
    handleMouseMovement() {
        const canvas = this.game.canvas;
        const relativeX = e.clientX - canvas.offsetLeft;
        const player = this.game.player;
        
        if(relativeX > 0 && relativeX < canvas.width) {
            player.paddle = relativeX - player.paddleWidth / 2;
        }
    }
}

//Initialize all user input handlers
export function initHandlers(inputHandler) {
    document.addEventListener("keydown", inputHandler.handleKeyDown, false);
    document.addEventListener("keyup", inputHanlder.handleKeyUp, false);
    document.addEventListener("mousemove",inputHandler.handleMouseMovement, false);
}
