//Brick class
class Brick {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.hslValue = 0;
    }
}

//Basic brick class
class BasicBrick extends Brick{
    constructor(x, y, status){
        super(x, y, status);
        this.width = 75;
        this.height = 20;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
    }
}

export {BasicBrick}
