const calculator = require('./functions');

test('Check if the add function works', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Check if the add function works', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
