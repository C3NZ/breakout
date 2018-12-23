// Brick class
class Brick {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.hslValue = 0;
    }

    setStatus(newStatus) {
        // Change the status of the brick
        this.status = newStatus;
    }
}

// Basic brick class
// eslint-disable-next-line
export class BasicBrick extends Brick {
    constructor(x, y, status) {
        super(x, y, status);
        this.width = document.querySelector('canvas').width / 10;
        this.height = document.querySelector('canvas').height / 20;
        this.brickPadding = 0;
        this.brickOffsetTop = document.querySelector('canvas').height / 6;
        this.brickOffsetLeft = document.querySelector('canvas').width / 5;
    }
}
