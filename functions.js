function capitalize(string) {
  const str = string.split('');
  str[0] = str[0].toUpperCase();
  return str.join('');
}
module.exports = capitalize;

function reverseString(string) {
  let str = '';
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
module.exports = reverseString;

function caesar(string, shift) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    const letterCase = checkCase(string[i]);
    const newLetter = getLetter(string[i], letterCase, shift);
    str += newLetter;
  }
  return str;
}
module.exports = caesar;

function getLetter(string, letterCase, shift) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (letterCase === 'upper') {
    index = upperAlphabet.indexOf(string);
    alphabet = upperAlphabet;
  } else if (letterCase === 'lower') {
    index = lowerAlphabet.indexOf(string);
    alphabet = lowerAlphabet;
  } else {
    return string;
  }
  let index += shift;
  if (index > 25) {
    index -= 26;
  }
  return alphabet[index];
}

function checkCase(string) {
  if (/[A-Z]/.test(string)) {
    return 'upper';
  }
  if (/[a-z]/.test(string)) {
    return 'lower';
  }

  return 'NaL';
}

function analyze(array) {
  const { length } = array;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  const average = sum / length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {

    average,
    min,
    max,
    length,
  };
}
module.exports = analyze;
