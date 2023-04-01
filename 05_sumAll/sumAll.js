const sumAll = function(number1,number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";
    if (number1<0||number2<0) {
        return "ERROR";
    }
    let bigNumber = 0;
    if (number1>number2) {
        bigNumber += number1;
    }else{
        bigNumber += number2;
    }
    let smallNumber = 0;
    if (number1<number2) {
        smallNumber += number1;
    }else{
        smallNumber += number2;
    }
    let finalSum = 0;
    for (let i = smallNumber; i < bigNumber + 1; i++) {
        finalSum += i;
    }
    return finalSum;
};
console.log(sumAll(4,1));
// Do not edit below this line
module.exports = sumAll;
