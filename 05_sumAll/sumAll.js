const sumAll = function(int1, int2) {
    let sum = 0;

    if (checkInput(int1, int2) === false) {
        return 'ERROR';
    }

    if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            sum += i;
        }
    }
    else {
        for (let i = int2; i <= int1; i++) {
            sum += i;
        }
    }   
    return sum;
};

    const checkInput = function(int1, int2) {
        if (int1 < 0 || int2 < 0) {
            return false;
        }
        else if (typeof int1 !== 'number' || typeof int2 !== 'number') {
            return false;
        }
        else if (int1 !== Math.floor(int1) || int2 !== Math.floor(int2)) {
            return false;
        }
        return true;
    }

console.log(sumAll(123, 1))

/*
init sum to 0
for each number from x to y
    add number to sum
return sum
*/
module.exports = sumAll;
