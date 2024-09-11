// const palindromes = function (string) {
//     string = stripPunctuation(string).toLowerCase();
//     backwardsString = ''
//     for (let i = (string.length - 1); i >= 0; i--) {
//         backwardsString += string.charAt(i);
//     }
//     return string === backwardsString;
// };

// const stripPunctuation = function (string) {
//     return string.replace(/[,.!? ]/g, '');
// }

const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

function palindromes(string) {
    const stringArray = string.toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('');

    const backwardsStringArray = stringArray.split('')
    .reverse()
    .join('');

    return stringArray == backwardsStringArray;
}

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
