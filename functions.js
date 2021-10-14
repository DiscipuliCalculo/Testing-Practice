function capitalize(string) {
    let str = string.split('')
    str[0] = str[0].toUpperCase();
    return str.join('');
}
module.exports = capitalize;

function reverseString(string) {
    let str = ''
    for (let i = string.length-1; i >= 0; i--){
        str = str + string[i];
    }
    return str;
}
module.exports = reverseString;
/*
const calculator = {
    add: (a,b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}
module.exports = calculator;
*/

function caesar(string, shift) {
    let str = ''
    for (let i = 0; i < string.length; i++) {
        //console.log(string[i]);
        let letterCase = checkCase(string[i])
        let newLetter = getLetter(string[i], letterCase, shift)
        str = str +newLetter;
    }
    return str;
}
module.exports = caesar;

function getLetter(string, letterCase, shift) {
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    if (letterCase === 'upper') {
        index = upperAlphabet.indexOf(string);
        alphabet = upperAlphabet;
    }
    else if (letterCase === 'lower') {
        index = lowerAlphabet.indexOf(string);
        alphabet = lowerAlphabet;
    }
    else {
        return string
    }
    index += shift;
    if (index > 25){
        index -= 26;
    }
    return alphabet[index];
}

function checkCase(string) {
    if (/[A-Z]/.test(string)) {
        return 'upper';
    }
    else if (/[a-z]/.test(string)) {
        return 'lower'
    }
    else {
        return 'NaL'
    }
}

console.log(caesar('How are you? My name is __', 8))