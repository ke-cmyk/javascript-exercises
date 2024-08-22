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

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
