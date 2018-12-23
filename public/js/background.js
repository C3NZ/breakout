class Block {
    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = size.width;
        this.height = size.height;
    }

    update() {
        if (this.color > 360) {
            this.color = 0;
        } else {
            this.color += 1;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = `hsl(${this.color}, 100%, 50%)`;
        ctx.fill();
        ctx.closePath();
    }
}

class Arc {
    // eslint-disable-next-line
    constructor({ x, y, color, radius, startAngle, endAngle }) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    update() {
        if (this.color > 360) {
            this.color = 0;
        } else {
            this.color += 1;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle)
        ctx.fillStyle = `hsl(${this.color}, 100%, 50%)`;
        ctx.fill();
        ctx.closePath();
    }
}

export class Background {
    constructor(canvas) {
        // Instantiate block properties for the background
        this.blockCount = 8
        this.blockWidth = canvas.width / this.blockCount;
        this.blockHeight = canvas.height;
        this.blocks = [];

        // Instantiate arc properties for the background
        this.arcCount = 4;
        this.arcRadius = canvas.width / this.arcCount;
        this.arcs = [];

        // Create the counter and background objects
        this.updateCounter = 0;
        this.createBlocks();
        this.createArcs(canvas);
    }

    createBlocks() {
        for (let i = 0; i < this.blockCount; i += 1) {
            const blockX = i * this.blockWidth;
            const blockY = 0;
            const color = 300 + i;
            const size = {
                width: this.blockWidth,
                height: this.blockHeight
            }

            const block = new Block(blockX, blockY, color, size);
            this.blocks.push(block);
        }
    }

    createArcs(canvas) {
        // Arc object properties
        const arcProperties = [
            {
                x: 0,
                y: canvas.height / 2,
                color: 45,
                radius: this.arcRadius,
                startAngle: 1.5 * Math.PI,
                endAngle: 0.5 * Math.PI,
            },
            {
                x: canvas.width / 2,
                y: 0,
                color: 90,
                radius: this.arcRadius,
                startAngle: 0.0 * Math.PI,
                endAngle: 1.0 * Math.PI,
            },
            {
                x: canvas.width,
                y: canvas.height / 2,
                color: 135,
                radius: this.arcRadius,
                startAngle: 0.5 * Math.PI,
                endAngle: 1.5 * Math.PI,
            },
            {
                x: canvas.width / 2,
                y: canvas.height,
                color: 180,
                radius: this.arcRadius,
                startAngle: 1.0 * Math.PI,
                endAngle: 2.0 * Math.PI,
            },
        ];

        // Create all the arc objects
        for (let i = 0; i < this.arcCount; i += 1) {
            const currentArc = arcProperties[i];
            const arcObject = new Arc(currentArc);
            this.arcs.push(arcObject);
        }
    }

    update() {
        if (this.updateCounter < 15) {
            this.updateCounter += 1;
        } else {
            this.updateCounter = 0;
            for (let counter = 0; counter < this.blockCount; counter += 1) {
                this.blocks[counter].update();
            }

            for (let counter = 0; counter < this.arcCount; counter += 1) {
                this.arcs[counter].update();
            }
        }
    }

    draw(ctx) {
        for (let counter = 0; counter < this.blockCount; counter += 1) {
            this.blocks[counter].draw(ctx);
        }
        for (let counter = 0; counter < this.arcCount; counter += 1) {
            this.arcs[counter].draw(ctx);
        }
    }
}
