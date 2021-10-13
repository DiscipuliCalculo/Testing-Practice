const reverseString = require('./functions')

test('Check if lowercase string is reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
}) 

test('Check if uppercase string is reversed', () => {
    expect(reverseString('HELLO')).toBe('OLLEH');
}) 

test('Check if mixed case string is reversed', () => {
    expect(reverseString('HelLO')).toBe('OLleH');
}) 