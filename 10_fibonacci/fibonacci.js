const fibonacci = function(size) {
    if (size < 0) {
        return 'OOPS';
    }
    fiboArray = [0, 1]
    for (let i = 0; i < size; i++) {
        fiboArray.push(fiboArray[i] + fiboArray[(i + 1)]);
    }
    return(fiboArray[size]);
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
