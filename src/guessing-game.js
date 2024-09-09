class GuessingGame {
    constructor() {
        this.minimum = null;
        this.maximum = null;
    }
    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }
    guess() {
        return Math.floor((this.minimum + this.maximum) / 2);
    }
    lower() {
        this.minimum = this.guess() - 1;
    }
    greater() {
        this.maximum = this.guess() + 1;
    }
}

module.exports = GuessingGame;
