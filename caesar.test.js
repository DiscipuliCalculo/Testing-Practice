const caesar = require('./functions')

test('Create cipher for lower case', () => {
    expect(caesar('hello', 13)).toBe('uryyb');
})

test('Test different length shift', () => {
    expect(caesar('hello', 5)).toBe('mjqqt');
})

test('Test uppercase', () => {
    expect(caesar('HELLO', 3)).toBe('KHOOR');
})

test('Test different mixed upper and lower case', () => {
    expect(caesar('HelLO', 14)).toBe('VszZC');
})

test('Test spaces and punctuation', () => {
    expect(caesar('How are you? My name is __', 8)).toBe('Pwe izm gwc? Ug vium qa __');
})