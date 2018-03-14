const translate = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
  INVALID: () => {
    throw new Error('Invalid input DNA.');
  }
};

class Transcriptor {
  constructor() {
    this.translate = translate;
  }

  toRna(string) {
    return string
      .split('')
      .map(letter => translate[letter] || translate.INVALID())
      .join('');
  }
}

module.exports = Transcriptor;
