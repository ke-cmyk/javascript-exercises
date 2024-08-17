const repeatString = function(input, reps) {
    let repeated = "";
    if (reps < 0) {
        return 'ERROR';
    }
    for (let i=0;i<reps;i++) {
        repeated += input;
    }
    return repeated;
};  

// Do not edit below this line
module.exports = repeatString;
