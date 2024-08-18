const removeFromArray = function(array, ...targets) {
    let newArray = [];

    targetLength = targets.length;
    arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let flag = false;
        for (let j = 0; j < targetLength; j++) {
            if (array[i] === targets[j]) {
                flag = true;
            }
        }
        if (flag === true) {
            continue;
        }
        newArray.push(array[i]);
        }

    return newArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
