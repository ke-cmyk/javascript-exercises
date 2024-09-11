const findTheOldest = function(people) {
    let oldestPerson = {};
    let oldestAge = 0;
    let currentYear = new Date().getFullYear();
    for (const person of people) {
      let age = ('yearOfDeath' in person ? person['yearOfDeath'] : currentYear) - person['yearOfBirth'];
      if (age > oldestAge) {
        oldestPerson = person;
        oldestAge = age;
      }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
