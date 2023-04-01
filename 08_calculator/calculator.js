const add = function(number1,number2) {
  return number1 + number2;
	
};

const subtract = function(number1, number2) {
  return number1 - number2;
	
};

const sum = function(myArray) {
  return myArray.reduce((total, current) => total + current, 0);
};

const multiply = function(myArray) {
  return myArray.reduce((total, current) => total * current);
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(factor) {
  if (factor === 0) return 1;
  let finalFactor = 1;
  for (let i = factor; i > 0; i--) {
     finalFactor *= i;
  }
  return finalFactor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
