const leapYears = function(leapYear) {
    let determineLeapYear;
    if (leapYear % 4 === 0 && leapYear % 100 !== 0 ) {
         determineLeapYear = true;
    }else if(leapYear % 400 === 0) {
        determineLeapYear = true;
    }else{
        determineLeapYear = false;
    }
    return determineLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
