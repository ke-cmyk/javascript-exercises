const reverseString = function(string) {
    splitString = string.split("")
    let reversedString = ''
    for (let i = (splitString.length - 1);i > -1;i--) {
        reversedString += splitString[i];
    }
    return reversedString;
};



// Do not edit below this line
module.exports = reverseString;
