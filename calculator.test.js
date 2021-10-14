const calculator = require('./calculator');

test('Check if the add function works', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Check if the add function works', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('Check if the multipy function works', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Check if the divide works', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Check divide by zero', () => {
  expect(calculator.divide(2, 0)).toBe(NaN);
});
