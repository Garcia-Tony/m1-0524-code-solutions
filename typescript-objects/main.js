'use strict';
const student = {
  firstName: 'Anthony',
  lastName: 'Garcia',
  age: 25,
};
const vehicle = {
  make: 'Dodge',
  model: 'Charger',
  year: 2023,
};
const pet = {
  name: 'Cleo',
  kind: 'Cat',
};
const firstName = student.firstName;
const lastName = student.lastName;
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Office';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
