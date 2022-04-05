//import function from greet.js
const greet = require('./greet');

describe('test function greet', () => {
    const singleName = 'Elizabeth';
    const noName = null;
    const upperCaseName = 'ELIZABETH';
    const twoNames = ['Soojin', 'Fudge'];
    const names = ['Soojin', 'Fudge', 'Andy', 'Bob'];

//test 1: regular single name
it('should return Hello, Elizabeth', () => {
    expect(greet(singleName)).toBe('Hello, Elizabeth');
});

//test 2: no name. null
it('should return Hello, there!', () => {
    expect(greet(noName)).toBe('Hello, there!');
});

//test 3: upper case name
it('should return HELLO ELIZABETH!', () => {
    expect(greet(upperCaseName)).toBe('HELLO ELIZABETH!');
});

//test 4: pass two names
it('should return Hello, Soojin, Fudge', () => {
    expect(greet(twoNames)).toBe('Hello, Soojin, Fudge');
});

//test 5: pass an array of names
it('should return Hello, and all the names in array', () => {
    expect(greet(names)).toBe('Hello, Soojin, Fudge, Andy, Bob')
});

})