// const findTheOldest = function(people) {
//     let oldestPerson = {};
//     let oldestAge = 0;
//     let currentYear = new Date().getFullYear();
//     for (const person of people) {
//       let age = ('yearOfDeath' in person ? person['yearOfDeath'] : currentYear) - person['yearOfBirth'];
//       if (age > oldestAge) {
//         oldestPerson = person;
//         oldestAge = age;
//       }
//     }
//     return oldestPerson;

// };

let currentYear = new Date().getFullYear();
const findTheOldest = function(people) {
  return people.reduce((acc, currentPerson) => {
    let currentAge = ('yearOfDeath' in currentPerson ? currentPerson['yearOfDeath'] : currentYear) - currentPerson['yearOfBirth'];
    let accAge = ('yearOfDeath' in acc ? acc['yearOfDeath'] : currentYear) - acc['yearOfBirth'];
    return accAge < currentAge ? currentPerson : acc;
  })
};
// Do not edit below this line
module.exports = findTheOldest;
