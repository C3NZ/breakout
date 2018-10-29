//Brick class
class Brick {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.hslValue = 0;
    }

    get x() {
        return this.x;
    }

    set x(x) {
        this.x = x;
    }

    get y() {
        return this.y;
    }

    set y(y) {
        this.y = y;
    }

    get status() {
        return this.y;
    }

    set status(newStatus) {
        this.status = newStatus;
    }

    get hslValue() {
        return this.hslValue;
    }

    set hslValue(newValue) {
        this.hslValue = newValue;
    }
}

//Basic brick class
class BasicBrick extends Brick{
    constructor(x, y, status){
        super(x, y, status);
        this.brickWidth = 75;
        this.brickHeight = 20;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
    }
}

export {BasicBrick}
