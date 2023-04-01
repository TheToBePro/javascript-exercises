const convertToCelsius = function(Fahrenheit) {
  let decimalCelsius = (Fahrenheit - 32) * 5 / 9;
  let finalCelsius = Math.round(decimalCelsius * 10) / 10;
  return finalCelsius;
};
const convertToFahrenheit = function(Celsius) {
  let decimalFahrenheit = (Celsius * 9/5) + 32;
  let finalFarhrenheit = Math.round(decimalFahrenheit * 10) / 10;
  return finalFarhrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
