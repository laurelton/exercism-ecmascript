class Triangle {
  constructor(rowCount) {
    this.rowCount = rowCount;
    this._rows = [];
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      this.rows.push([]);
      for (let colIndex = 0; colIndex < rowIndex + 1; colIndex++) {
        if (colIndex == 0) {
          this._rows[rowIndex][colIndex] = 1;
          continue;
        }
        this._rows[rowIndex][colIndex] =
          this._rows[rowIndex][colIndex - 1] *
          (rowIndex + 1 - colIndex) /
          colIndex;
      }
    }
  }

  get rows() {
    return this._rows;
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }
}

module.exports = Triangle;
