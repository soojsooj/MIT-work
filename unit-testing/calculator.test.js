//importing funstions to be tested from calculator.js to calculator.test.js.

const calculator = require('./calculator');

 describe('calculator', () => {
    const { add, subtract, multiply, divide } = calculator;

    it('1 + 2 = 3', () => {
        expect(add(1,2)).toBe(3);
    })
    it('3 - 2 = 1', () => {
        expect(subtract(3,2)).toBe(1);
    })
    it('3 * 2 = 6', () => {
        expect(multiply(3,2)).toBe(6);
    })
    it('4 / 2 = 2', () => {
        expect(divide(4,2)).toBe(2);
    });
})