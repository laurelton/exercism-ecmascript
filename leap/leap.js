let yr;

class Year {
    constructor(year) {
        yr = year;
    }

    isLeap() {
        const isDivisibleBy4 = yr % 4 === 0;
        const isDivisibleBy100 = yr % 100 === 0;
        const isDivisibleBy400 = yr % 400 === 0;

        return (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;
    }
}

module.exports = Year;
