const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    


    let result = 0;
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    
    for (let i = start; i <= end; i++) result += i;
    return result;

};

// Do not edit below this line
module.exports = sumAll;
