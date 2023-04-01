const reverseString = function(word) {
    let wordSplit = word.split('');
    let wordReverse = wordSplit.reverse();
    let wordJoin = wordReverse.join('');
    return wordJoin;
};

// Do not edit below this line
module.exports = reverseString;
