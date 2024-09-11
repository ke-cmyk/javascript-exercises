const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arraytoSum) {
  
  // let sum = 0;
  // for(const num of arraytoSum) {
  //   sum += num;
  // }

  return arraytoSum.reduce((acc, element) => acc += element, 0);
};

const multiply = function(arraytoMultiply) {
  // let prod = 1;
  // for(const num of arraytoMultiply) {
  //   prod *= num;
  // }
  return arraytoMultiply.reduce((acc, element) => acc *= element, 1);
};

const power = function(num1, num2) {
  // let powerResult = num1;
  // for (let i = 1; i < num2; i++) {
  //   powerResult *= num1;
  // } 
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let factorial = num;
  for (let i = (num-1) ;i > 0; i--) {
    factorial *= i; 
  }
  return factorial;
};

factorial(0);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
