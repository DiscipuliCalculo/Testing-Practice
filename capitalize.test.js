const capitalize = require('./functions');

test('Capitalize the word freezer', () => {
    expect(capitalize('freezer')).toBe('Freezer');
  });