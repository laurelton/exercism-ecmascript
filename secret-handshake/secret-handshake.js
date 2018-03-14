class SecretHandshake {
  constructor(hexNumber) {
    if (!Number.isInteger(hexNumber)) {
      throw new Error('Handshake must be a number');
    }

    this._bin = hexNumber.toString(2).padStart(5, '0');
  }

  commands() {
    let instructions = this._bin.split('').reverse();
    let decoded = [];
    for (let i = 0; i < instructions.length; i++) {
      if (i == instructions.length - 1 && instructions[i] == 1) {
        decoded.reverse();
      }
      let cIndx = instructions[i] * Math.pow(2, i);
      COMMANDS[cIndx] && decoded.push(COMMANDS[cIndx]);
    }

    return decoded;
  }
}

let COMMANDS = {
  1: 'wink',
  2: 'double blink',
  4: 'close your eyes',
  8: 'jump'
};

module.exports = SecretHandshake;
