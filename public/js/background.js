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

export class Background {
    constructor(canvas) {
        this.blockCount = 8
        this.blockWidth = canvas.width / this.blockCount;
        this.blockHeight = canvas.height;
        this.blocks = [];
        this.counter = 0;
        this.createBlocks();
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

    update() {
        if (this.counter < 15) {
            this.counter += 1;
        } else {
            this.counter = 0;
            const blockTotal = this.blocks.length;
            for (let i = 0; i < blockTotal; i += 1) {
                this.blocks[i].update()
            }
        }
    }

    draw(ctx) {
        const blockLength = this.blocks.length;
        for (let counter = 0; counter < blockLength; counter += 1) {
            this.blocks[counter].draw(ctx);
        }
    }
}
