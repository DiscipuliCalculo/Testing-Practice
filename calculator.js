const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide(a, b) {
    if (b != 0) {
      return a / b;
    }
    return NaN;
  },
  multiply: (a, b) => a * b,

};
module.exports = calculator;
