class Robot {
    constructor() {
        this._name = this.randomLetters() + this.randomNumbers();
        this._usedNames = new Set();
        this._usedNames.add(this._name);
    }

    get name() {
        return this._name;
    }

    reset() {
        let tmp;
        do {
            tmp = this.randomLetters() + this.randomNumbers();
        } while ( this._usedNames.has(tmp) );

        this._name = tmp;
        this._usedNames.add(this._name);
    }

    randomLetters() {
        let frst = Math.floor(Math.random() * 26) + 65;
        let scnd = Math.floor(Math.random() * 26) + 65;

        return String.fromCharCode(frst) + String.fromCharCode(scnd);
    }

    randomNumbers() {
        let num = Math.floor(Math.random() * 1000);

        return num.toString().padStart(3, 0);
    }
}

module.exports = Robot;
