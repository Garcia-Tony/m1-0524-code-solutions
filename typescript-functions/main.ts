function addTwoNumbers(x: number, y: number): number {
  const sum: number = x + y;
  return sum;
}

const addTwoNumbersResult: number = addTwoNumbers(3, 4);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertMinutesToSeconds(minutes: number): number {
  const result: number = minutes * 60;
  return result;
}
const minutesResult: number = convertMinutesToSeconds(5);
console.log('minutesResult:', minutesResult);

function greet(name: string): string {
  const result: string = 'Hello' + name + '!';
  return result;
}
const greetResult: string = greet(' Tony');
console.log('greetResult:', greetResult);

const getArea = (width: number, height: number): number => {
  return width * height;
};
const getAreaResult: number = getArea(10, 20);
console.log('getAreaResult:', getAreaResult);

interface person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: { firstName: string }): string => {
  return person.firstName;
};
const person: { firstName: string } = { firstName: 'Tony' };
console.log('getFirstNameResult:', getFirstName(person));

const getLastElement = (array: any): number => {
  return array.length - 1;
};
const lastIndex: any = [getLastElement.length - 1];
console.log('getLastElementResult:', lastIndex);

function callOtherFunction(otherFunction: Function, params: unknown): string {
  return otherFunction(params);
}
const callOtherFunctionResult: any = callOtherFunction(
  convertMinutesToSeconds,
  5
);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
