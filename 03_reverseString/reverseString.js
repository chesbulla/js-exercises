const reverseString = function(s) {
    if (s.length === 0) return "";
    s = s.split("");
    console.log(s);
    let startIndex = 0;
    let endIndex = s.length - 1;

    while (startIndex != endIndex) {
        let temp;
        temp = s[startIndex];
        s[startIndex] = s[endIndex];
        s[endIndex] = temp;

        startIndex += 1;
        endIndex -= 1;
    }

    return s.join("");


    


};

// Do not edit below this line
module.exports = reverseString;
