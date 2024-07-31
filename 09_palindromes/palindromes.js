const palindromes = function (s) {
    //remove spaces and punctuations
    s = s.toLowerCase();
    s = s.split("");
    s = s.filter((item) => (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <=122) || (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <=57));
    let reversedS = s.toReversed();
    return reversedS.toString() === s.toString();
    

    




};

// Do not edit below this line
module.exports = palindromes;
