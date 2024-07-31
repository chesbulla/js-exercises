const findTheOldest = function(arr) {
    //sort the age
    //get the last name

    let sorted =  arr.sort((a,b) => {
        let aAge;
        let bAge;
       

        if (!a.yearOfDeath) {
            aAge = new Date().getFullYear() - a.yearOfBirth;

        } else aAge = a.yearOfDeath - a.yearOfBirth;

        if (!b.yearOfDeath) {
            bAge = new Date().getFullYear() - b.yearOfBirth;

        } else bAge = b.yearOfDeath - b.yearOfBirth;

        if (aAge > bAge) return 1;
        else return -1;
    });
    return sorted[sorted.length-1];





};

// Do not edit below this line
module.exports = findTheOldest;
