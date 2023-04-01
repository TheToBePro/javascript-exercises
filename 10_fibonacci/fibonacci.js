const fibonacci = function(number) {
    //create empty fibonacci array
    if(number<0) return "OOPS";
    const fibonacciarray = [0,1];
    //loop through and push items into the array according to fibonacci numbers rules
    
    for (let i = 2; i <= number; i++) {
        fibonacciarray[i] = fibonacciarray[i - 1] + fibonacciarray[i - 2];
    }
    fibonacciItem = fibonacciarray[fibonacciarray.length - 1];
    return fibonacciItem;
};
// Do not edit below this line
module.exports = fibonacci;
