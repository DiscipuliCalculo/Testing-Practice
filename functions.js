function capitalize(string) {
    let str = string.split('')
    str[0] = str[0].toUpperCase();
    return str.join('');
}
module.exports = capitalize;

function reverseString(string) {
    let str = string.split("");
    let newstr = ''
    for (let i = str.length-1; i >= 0; i--){
        newstr = newstr + str[i];
    }
    return newstr;
}
module.exports = reverseString;