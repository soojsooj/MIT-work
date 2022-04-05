//function to export.
const calculator = {
    add: (a,b) => {
        return a + b;
    },

    subtract: (a,b) => {
        return a - b;
    },

    multiply: (a,b) => {
        return a * b;
    },

    divide: (a,b) => {
        return a / b;
    }
}

module.exports = calculator;// be sure that it's 'exports', not 'export'!!!