let translate = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
    'INVALID': () => {
        throw new Error('Invalid input DNA.');
    }
};

class Transcriptor{
    constructor() {}

    toRna(string) {
        return string.split('').map(letter => {
            return translate[letter] || translate['INVALID']();
        }).join('');
    }
}

module.exports = Transcriptor;
