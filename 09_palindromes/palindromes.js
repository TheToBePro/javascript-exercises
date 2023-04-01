const palindromes = function (strinWord) {
    proccedstrinWord = strinWord.toLowerCase().replace(/[^a-z]/g, "");
    if (proccedstrinWord === proccedstrinWord.split("").reverse().join("")){
        return true
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
