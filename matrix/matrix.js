class Matrix {
    constructor(values) {
        this._rows = values
            .split('\n')
            .map(elem => elem.split(' ').map(str => parseInt(str)));

        this._cols = this._rows[0].map((_, col) =>
            this._rows.map(row => row[col])
        );
    }

    get rows() {
        return this._rows;
    }

    get columns() {
        return this._cols;
    }
}

module.exports = Matrix;
