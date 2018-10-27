//User control variables
let rightPressed = false;
let leftPressed = false;

//Initialize all user input handlers
export function initHandlers() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
}

//Handle key down events
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

//Handle key up events
function keyUpHandler(e) {
    if(e.keyCode == 39){
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

//Handler for mouse movements
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;

    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}
