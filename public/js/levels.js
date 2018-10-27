const diffs = {
    "easy":0,
    "medium":1,
    "hard":2
}

export class Level {
    constructor(difficulty="easy") {
        this.difficulty = diffs[difficulty];

    }
}
