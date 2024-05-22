'use strict';
function addTwoNumbers(x, y) {
  const sum = x + y;
  return sum;
}
const addTwoNumbersResult = addTwoNumbers(3, 4);
console.log('addTwoNumbersResult:', addTwoNumbersResult);
function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
const minutesResult = convertMinutesToSeconds(5);
console.log('minutesResult:', minutesResult);
function greet(name) {
  const result = 'Hello' + name + '!';
  return result;
}
const greetResult = greet(' Tony');
console.log('greetResult:', greetResult);
const getArea = (width, height) => {
  return width * height;
};
const getAreaResult = getArea(10, 20);
console.log('getAreaResult:', getAreaResult);
const getFirstName = (person) => {
  return person.firstName;
};
const person = { firstName: 'Tony' };
console.log('getFirstNameResult:', getFirstName(person));
const getLastElement = (array) => {
  return array.length - 1;
};
const lastIndex = [getLastElement.length - 1];
console.log('getLastElementResult:', lastIndex);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 5);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
