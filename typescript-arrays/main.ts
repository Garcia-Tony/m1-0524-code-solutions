const colors: string[] = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log(`America is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);

colors[2] = 'green';

console.log(`Mexico is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Tony', 'Josue', 'Mike', 'Jerry'];

const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} in the class.`);

const lastIndex: number = numberOfStudents - 1;

const lastStudent: string = students[lastIndex];
console.log('The last student in the array is', lastStudent);

console.log('value of students:', students);
console.log('typeof students:', typeof students);
